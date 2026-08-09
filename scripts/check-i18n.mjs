#!/usr/bin/env node
// Porte de qualite du portfolio : integrite du dictionnaire bilingue, ancres de
// navigation, couverture de traduction du texte visible, et coherence des trois
// occurrences de l'adresse de contact.
// Aucune dependance externe : n'utilise que la bibliotheque standard de Node.
// Sortie : code 0 si tout passe, code 1 si au moins un controle bloquant echoue.
//
// Usage : node scripts/check-i18n.mjs [cible] [--min-runs=N] [--min-covered=N]
//   --min-runs     seuil de non-vacuite : suites de texte visible attendues (defaut 200)
//   --min-covered  seuil de non-vacuite : suites couvertes attendues        (defaut 100)
// Les seuils sont desarmables pour les temoins, qui sont trop petits par
// nature ; ils gardent leur valeur de production sur le site et sur le temoin
// de cecite. Entree legitime : scripts/gate.sh, jamais l'appel direct.
//
// CE QUE CETTE PORTE NE COUVRE PAS — a savoir, sous peine de lui creder ce
// qu'elle ne fait pas :
//   1. elle n'attrape PAS une traduction fausse ni devenue perimee : deux
//      chaines presentes dans les deux langues lui suffisent ;
//   2. elle n'attrape PAS le contenu porte par un ATTRIBUT plutot que par du
//      texte (href, title, aria-label) : un lien pointant vers une page
//      francaise depuis la version anglaise passe silencieusement ;
//   3. elle ne dit RIEN du rendu : un texte traduit qui deborde de son cadre
//      lui est invisible ;
//   4. elle controle le HTML DE DEPART, pas le DOM apres bascule : une valeur
//      anglaise laissee en francais dans le dictionnaire lui echappe ;
//   5. la liste blanche se compare MOT A MOT : une suite courte composee a
//      100% de mots listes passe, quel que soit leur ordre et quelle que soit
//      la langue du libelle ("Code Legacy", "Performance Mobile"). C'est la
//      forme dominante du contenu non couvert, donc la limite qui mord le plus
//      vite — voir l'en-tete de i18n-allowlist.txt.

import { readFileSync } from 'node:fs';
import { argv, exit } from 'node:process';

// --- 0. Arguments ------------------------------------------------------------
function numericFlag(name, fallback) {
  const found = argv.slice(2).find((a) => a.startsWith(`--${name}=`));
  if (found === undefined) return fallback;
  // Number('') vaut 0 : une valeur vide desarmerait la garde EN SILENCE.
  // On exige des chiffres, on ne convertit pas ce qui n'en est pas.
  const raw = found.slice(name.length + 3);
  const value = /^\d+$/.test(raw) ? Number(raw) : NaN;
  if (!Number.isInteger(value) || value < 0) {
    console.log(`ECHEC - option --${name} invalide : attendu un entier >= 0.`);
    exit(1);
  }
  return value;
}
const MIN_RUNS = numericFlag('min-runs', 200);
const MIN_COVERED = numericFlag('min-covered', 100);

const target = argv.slice(2).find((a) => !a.startsWith('--')) ?? 'index.html';
let html;
try {
  html = readFileSync(target, 'utf8');
} catch (cause) {
  console.log(`ECHEC - fichier illisible : ${target} (${cause.code ?? cause.message})`);
  exit(1);
}

const errors = [];   // bloquants  -> code de sortie 1
const warnings = []; // informatifs -> n'echouent pas

// Declares des maintenant : report() peut etre appele avant les extractions,
// et une variable non initialisee y provoquerait un plantage illisible.
const declared = { fr: new Set(), en: new Set() };
let anchors = new Set();
let ids = new Set();
let runCount = 0;
let coveredCount = 0;
let allowSize = 0;
let contactReport = '—';

// --- 1. Extraction des cles reellement utilisees dans la page ---------------
const usedKeys = new Set([...html.matchAll(/data-i18n="([^"]*)"/g)].map((m) => m[1]));
if (usedKeys.has('')) errors.push('Un attribut data-i18n est vide.');
usedKeys.delete('');

// --- 2. Extraction des blocs de langue du dictionnaire ----------------------
// Le dictionnaire a la forme : const t = { fr: { ... }, en: { ... } };
const dictStart = html.indexOf('const t = {');
if (dictStart === -1) {
  errors.push("Dictionnaire introuvable : la declaration 'const t = {' est absente.");
  report();
}
const frStart = html.indexOf('fr: {', dictStart);
const enStart = html.indexOf('en: {', dictStart);
const dictEnd = html.indexOf('\n};', enStart);
if (frStart === -1 || enStart === -1 || dictEnd === -1) {
  errors.push('Dictionnaire malforme : blocs fr/en ou fin de declaration introuvables.');
  report();
}
const blocks = {
  fr: html.slice(frStart, enStart),
  en: html.slice(enStart, dictEnd),
};

// Une cle est un identifiant suivi de ':' puis d'un guillemet, precede d'une
// accolade ouvrante ou d'une virgule. Plusieurs cles peuvent tenir sur une ligne.
const KEY_PATTERN = /(?:^|[{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:\s*"/gm;

for (const [lang, block] of Object.entries(blocks)) {
  const seen = new Set();
  for (const match of block.matchAll(KEY_PATTERN)) {
    const key = match[1];
    // Controle 3 : doublon dans une meme langue (la seconde declaration ecrase la premiere).
    if (seen.has(key)) errors.push(`Cle dupliquee dans le bloc "${lang}" : ${key}`);
    seen.add(key);
  }
  declared[lang] = seen;
}

// --- 3. Controle 1 : completude ---------------------------------------------
for (const lang of ['fr', 'en']) {
  for (const key of [...usedKeys].sort()) {
    if (!declared[lang].has(key)) {
      errors.push(`Cle utilisee dans la page mais absente du bloc "${lang}" : ${key}`);
    }
  }
}

// --- 4. Controle 2 : symetrie entre les deux langues ------------------------
for (const key of [...declared.fr].sort()) {
  if (!declared.en.has(key)) errors.push(`Cle presente en "fr" mais absente en "en" : ${key}`);
}
for (const key of [...declared.en].sort()) {
  if (!declared.fr.has(key)) errors.push(`Cle presente en "en" mais absente en "fr" : ${key}`);
}

// --- 5. Cles orphelines : informatif, jamais bloquant (dette D-4) -----------
const technicalKeys = new Set(['langBtn', 'copy_btn', 'copied_msg']); // lues par le code, pas par data-i18n
for (const key of [...declared.fr].sort()) {
  if (!usedKeys.has(key) && !technicalKeys.has(key)) {
    warnings.push(`Cle traduite jamais utilisee dans la page : ${key}`);
  }
}

// --- 6. Controle 4 : integrite des ancres de navigation ---------------------
anchors = new Set([...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]));
ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
for (const anchor of [...anchors].sort()) {
  if (!ids.has(anchor)) errors.push(`Ancre de navigation cassee : #${anchor} ne correspond a aucun element.`);
}

// --- 7. Liste blanche des termes non traduisibles ---------------------------
// Resolue depuis l'emplacement du script, jamais depuis le repertoire courant :
// la porte doit se comporter pareil d'ou qu'on l'appelle.
const allow = new Set();
const allowUsed = new Set();
let allowLoaded = false;
try {
  const raw = readFileSync(new URL('./i18n-allowlist.txt', import.meta.url), 'utf8');
  allowLoaded = true;
  raw.split(/\r?\n/).forEach((line, i) => {
    if (!line.trim() || /^\s*#/.test(line)) return;
    // Le separateur est un blanc SUIVI d'un '#' : le terme lui-meme peut
    // contenir un '#' (C#), on ne peut donc pas couper sur le premier '#'.
    const entry = line.match(/^\s*(\S+)\s+#\s*(\S.*?)\s*$/);
    if (!entry) {
      errors.push(`Liste blanche, ligne ${i + 1} : entree sans motif (format attendu : "terme  # motif").`);
      return;
    }
    allow.add(entry[1]);
  });
} catch (cause) {
  errors.push(`Liste blanche illisible : scripts/i18n-allowlist.txt (${cause.code ?? cause.message})`);
}
allowSize = allow.size;

// --- 8. Extraction du texte visible -----------------------------------------
// Elements sans contenu : ils ne sont jamais empiles.
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
                      'link', 'meta', 'param', 'source', 'track', 'wbr']);
// Le motif de balise respecte les valeurs entre guillemets : un '>' a
// l'interieur d'une valeur d'attribut ne doit pas fermer la balise.
const TAG = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g;
const ENTITIES = { lt:'<', gt:'>', amp:'&', quot:'"', apos:"'", nbsp:' ',
                   hellip:'…', mdash:'—', ndash:'–', laquo:'«', raquo:'»' };
const HAS_LETTER = /\p{L}/u;

function decode(text) {
  return text
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name.toLowerCase()] ?? m);
}

// Rognage de la ponctuation d'ENCADREMENT seulement. Asymetrique a dessein :
// le '.' n'est pas rogne en tete (.NET), le '#' ne l'est pas en queue (C#).
const LEAD = /^[\s«»"'‘’“”([{<·—–]+/u;
const TRAIL = /[\s«»"'‘’“”)\]}>·—–.,;:!?…]+$/u;
function words(text) {
  return text.split(/\s+/)
    .map((w) => w.replace(LEAD, '').replace(TRAIL, ''))
    .filter((w) => HAS_LETTER.test(w));
}

function visibleRuns(source) {
  // Ce qui est retire est remplace par des espaces, en CONSERVANT les sauts de
  // ligne : la source depouillee garde ainsi la meme longueur et le meme
  // decoupage en lignes que le fichier d'origine. Sans cela, ecraser le <style>
  // et le <script> en une seule espace decalerait toute la numerotation, et les
  // lignes citees dans les anomalies designeraient un autre endroit du fichier.
  const blanchir = (m) => m.replace(/[^\n]/g, ' ');
  const src = source
    .replace(/<!--[\s\S]*?-->/g, blanchir)
    .replace(/<!DOCTYPE[^>]*>/gi, blanchir)
    .replace(/<script\b[\s\S]*?<\/script\s*>/gi, blanchir)
    .replace(/<style\b[\s\S]*?<\/style\s*>/gi, blanchir);

  const stack = [];
  let covered = 0;      // nombre d'ancetres ouverts portant data-i18n
  let anomaly = null;   // premiere anomalie de structure : on garde la PREMIERE,
                        // les suivantes n'en sont le plus souvent que l'echo
  const runs = [];
  let last = 0;
  let match;
  TAG.lastIndex = 0;
  // Numero de ligne pour situer l'anomalie : « quelque part dans le fichier »
  // n'est pas un diagnostic reparable.
  const lineOf = (index) => src.slice(0, index).split('\n').length;
  const push = (text) => {
    const clean = decode(text).trim();
    if (clean) runs.push({ text: clean, covered: covered > 0 });
  };
  while ((match = TAG.exec(src)) !== null) {
    push(src.slice(last, match.index));
    last = TAG.lastIndex;
    const [, closing, rawName, attrs] = match;
    const name = rawName.toLowerCase();
    if (closing) {
      let opened = -1;
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].name === name) { opened = i; break; }
      }
      if (opened === -1) {
        if (!anomaly) anomaly = `fermeture orpheline </${name}> ligne ${lineOf(match.index)}`;
      } else {
        // Depiler plus d'un element = les elements au-dessus n'ont jamais ete
        // fermes explicitement. C'est ICI que le desequilibre se voit, et nulle
        // part ailleurs : la fermeture d'un ancetre les emporte tous.
        if (opened !== stack.length - 1 && !anomaly) {
          anomaly = `<${stack[stack.length - 1].name}> jamais ferme, emporte par </${name}> ligne ${lineOf(match.index)}`;
        }
        for (let k = stack.length - 1; k >= opened; k--) if (stack[k].i18n) covered--;
        stack.length = opened;
      }
    } else if (!VOID.has(name) && !/\/\s*$/.test(attrs)) {
      const i18n = /\sdata-i18n\s*=/.test(attrs);
      stack.push({ name, i18n });
      if (i18n) covered++;
    }
  }
  push(src.slice(last));
  // Assertion STRUCTURELLE : l'extraction n'est fiable que si le balisage est
  // equilibre. Balisage desequilibre = sur-couverture SILENCIEUSE. Une balise
  // non fermee laisse son data-i18n ouvert : tout le texte qui suit est compte
  // couvert, et le controle 5 se vide sans que les seuils de non-vacuite
  // bronchent (ils ne surveillent que le manque, jamais l'exces). Un <p>
  // implicitement ferme est du HTML5 valide, que le navigateur ferme et que
  // cette pile ne ferme pas.
  //
  // Pourquoi la pile vide en fin de parcours ne SUFFIT PAS — mesure, pas
  // theorie : un <span data-i18n> jamais ferme injecte apres <body> fait passer
  // index.html a 344 suites sur 344 « couvertes », et la porte reste VERTE,
  // parce que </body> puis </html> referment tout. La pile est vide a la fin,
  // et `covered` retombe a zero avec elle — les deux moities de la condition
  // sont satisfaites alors que le controle 5 est mort. Le desequilibre ne se
  // voit qu'a l'instant du depilement multiple, d'ou l'anomalie relevee dans la
  // boucle. La pile vide reste asserte : elle attrape le cas ou meme </html>
  // manque.
  if (!anomaly && stack.length !== 0) {
    anomaly = `pile non vide en fin de parcours : ${stack.map((e) => `<${e.name}>`).join(', ')}`;
  }
  return { runs, anomaly };
}

const extraction = visibleRuns(html);
const runs = extraction.runs;
runCount = runs.length;
coveredCount = runs.filter((r) => r.covered).length;

// --- 9. Garde de non-vacuite -------------------------------------------------
// Ce controle repose sur une EXTRACTION. Une extraction cassee ne renvoie rien,
// tout parait couvert, et la porte devient verte alors qu'elle est aveugle.
// C'est son pire mode de defaillance parce qu'il est silencieux : on l'asserte.
const BLIND = 'la porte est AVEUGLE, pas verte';
if (runCount < MIN_RUNS) {
  errors.push(`${BLIND} : ${runCount} suite(s) de texte visible extraite(s), ${MIN_RUNS} attendue(s) au moins.`);
}
if (coveredCount < MIN_COVERED) {
  errors.push(`${BLIND} : ${coveredCount} suite(s) couverte(s), ${MIN_COVERED} attendue(s) au moins.`);
}
if (!allowLoaded || allow.size === 0) {
  errors.push(`${BLIND} : liste blanche absente ou vide.`);
}
// Le versant OPPOSE des deux seuils : eux gardent contre le manque, celui-ci
// garde contre l'exces. Sans lui, un balisage desequilibre gonfle la couverture
// et vide le controle 5 en restant vert.
if (extraction.anomaly) {
  errors.push(`${BLIND} : extraction non fiable — ${extraction.anomaly}. La couverture est surestimee, le controle 5 ne prouve plus rien.`);
}

// --- 10. Controle 5 : couverture de traduction du texte visible --------------
// Une suite sans aucune lettre n'a rien a traduire : separateurs, emojis,
// nombres et ponctuation sont ignores par construction, pas au cas par cas.
for (const run of runs) {
  if (run.covered || !HAS_LETTER.test(run.text)) continue;
  const unknown = [];
  for (const word of words(run.text)) {
    if (allow.has(word)) allowUsed.add(word);
    else if (!unknown.includes(word)) unknown.push(word);
  }
  if (unknown.length === 0) continue;
  const excerpt = run.text.length > 110 ? `${run.text.slice(0, 110)}…` : run.text;
  errors.push(`Texte visible non traduit : ${unknown.map((w) => `"${w}"`).join(', ')} hors liste blanche — « ${excerpt} »`);
}

// Une liste blanche qui accumule des entrees mortes finit par tout autoriser.
// Verdict rendu UNIQUEMENT sur une cible dont l'extraction est prouvee non
// vide : sur un temoin de quelques lignes, "jamais utilisee" ne veut rien dire
// et noierait le vrai signal sous cent avertissements sans objet.
if (MIN_RUNS > 0 && runCount >= MIN_RUNS) {
  for (const term of [...allow].sort()) {
    if (!allowUsed.has(term)) warnings.push(`Entree de liste blanche jamais utilisee : ${term}`);
  }
}

// --- 11. Controle 7 : coherence des trois occurrences de l'adresse ----------
// Mode de panne ferme, et il est SILENCIEUX : la page AFFICHE une adresse
// pendant que le bouton « Copier » en place une AUTRE dans le presse-papiers.
// Le rendu est parfaitement normal, le visiteur colle une adresse morte, et
// personne ne l'apprend jamais.
//
// Le controle ne connait AUCUNE adresse en dur : il verifie que les trois
// occurrences concordent ENTRE ELLES. Une porte qui contiendrait la valeur
// attendue deviendrait fausse au prochain changement, et il faudrait penser a
// la mettre a jour — c'est-a-dire exactement le defaut qu'elle previent.
//
// Ancrage sur la SYNTAXE, jamais sur la mise en forme : ni numero de ligne, ni
// retour a la ligne, ni indentation (leçon du 8 aout 2026 — un motif ancre en
// debut de ligne avait fabrique vingt faux defauts sur ce meme fichier).
const CONTACT_SOURCES = [
  // Coupe au '?' : mailto:x@y?subject=... reste comparable a l'adresse nue.
  { role: 'lien mailto:', pattern: /href="mailto:([^"?]*)/g },
  // Jeton de classe exact, mais classes voisines tolerees (class="email-text mono").
  { role: 'texte affiche', pattern: /\bclass="[^"]*\bemail-text\b[^"]*"[^>]*>([^<]*)</g },
  // Guillemets simples ou doubles : le style du fichier ne fait pas la regle.
  { role: 'constante copyEmail', pattern: /\bconst\s+email\s*=\s*(['"])([^'"]*)\1/g, group: 2 },
];

const contact = [];
for (const source of CONTACT_SOURCES) {
  source.pattern.lastIndex = 0;
  const found = [...html.matchAll(source.pattern)].map((m) => (m[source.group ?? 1] ?? '').trim());
  if (found.length === 1) {
    contact.push({ role: source.role, value: found[0] });
    continue;
  }
  // Garde de non-vacuite. Sans elle, il suffit qu'un remaniement renomme la
  // classe email-text pour que ce controle devienne aveugle EN RESTANT VERT.
  //
  // POURQUOI ce message ne porte PAS le marqueur AVEUGLE des autres gardes :
  // gate.sh 2/3 prouve la garde de non-vacuite du texte visible en asseyant sa
  // verification sur la PRESENCE de ce marqueur dans la sortie de blind.html.
  // Or blind.html ne porte aucune adresse de contact : ce controle-ci y emet
  // trois erreurs. Si elles disaient AVEUGLE, elles satisferaient a elles
  // seules l'assertion du 2/3 — la garde du texte visible pourrait mourir et la
  // porte resterait verte. C'est la leçon du 9 aout 2026 (« une assertion posee
  // sur un identifiant nu peut etre satisfaite par un autre controle »),
  // rencontree cette fois par anticipation. Chaque garde parle de sa voix.
  errors.push(
    `Adresse de contact introuvable ou multiple — ${source.role} : ${found.length} occurrence(s), une seule attendue. ` +
    `Tant que ce point n'est pas retabli, la coherence des trois occurrences n'est plus prouvee.`
  );
}

// UNE seule branche de comparaison, a dessein : une divergence quelconque
// produit une seule erreur, quelle que soit l'occurrence fautive.
//
// ATTENTION — ce controle a DEUX chemins bloquants, pas un : cette comparaison
// et la garde de non-vacuite ci-dessus. La garde n'est pas une securite parmi
// d'autres : la condition qui suit fait taire TOUTE la comparaison des qu'une
// extraction echoue, elle est donc la seule chose entre « une extraction casse »
// et « le controle 7 ne dit plus rien ». Les deux chemins sont assertes dans
// gate.sh — la divergence en 1/3, la garde en 2/3. Retirer l'une des deux
// assertions rend ce controle a moitie invisible.
if (contact.length === CONTACT_SOURCES.length) {
  const distinct = new Set(contact.map((c) => c.value));
  if (distinct.size > 1) {
    // L'erreur enumere les TROIS roles avec leur valeur plutot que d'en
    // designer un comme reference : si c'est le mailto: qu'on a oublie de
    // changer, le designer comme reference accuserait les deux autres.
    errors.push(
      `Adresse de contact incoherente entre les trois occurrences de la page : ` +
      `${contact.map((c) => `${c.role} "${c.value}"`).join(', ')}. ` +
      `Le bouton « Copier » ne place pas l'adresse affichee.`
    );
    contactReport = `INCOHERENTE (${distinct.size} valeurs distinctes)`;
  } else {
    contactReport = `${contact[0].value} (3 occurrences concordantes)`;
  }
}

// --- 12. Rapport -------------------------------------------------------------
function report() {
  console.log(`Cible            : ${target}`);
  console.log(`Cles utilisees   : ${usedKeys.size}`);
  console.log(`Cles fr / en     : ${declared.fr.size} / ${declared.en.size}`);
  console.log(`Ancres verifiees : ${anchors.size}`);
  console.log(`Texte visible    : ${runCount} suite(s), dont ${coveredCount} couverte(s)`);
  console.log(`Liste blanche    : ${allowSize} terme(s)`);
  // Un vert muet ne prouve rien : cette ligne rend visible, a chaque execution,
  // le fait que les trois extractions du controle 7 ont abouti.
  console.log(`Adresse contact  : ${contactReport}`);
  console.log('');

  for (const warning of warnings) console.log(`AVERTISSEMENT  ${warning}`);
  if (warnings.length) console.log('');

  if (errors.length === 0) {
    console.log(`OK - ${warnings.length} avertissement(s), 0 erreur bloquante.`);
    exit(0);
  }
  for (const error of errors) console.log(`ERREUR         ${error}`);
  console.log('');
  console.log(`ECHEC - ${errors.length} erreur(s) bloquante(s).`);
  exit(1);
}

report();
