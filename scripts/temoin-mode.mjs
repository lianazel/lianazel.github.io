#!/usr/bin/env node
// Temoin de mode de permission du portfolio — hook UserPromptSubmit.
// Lit le mode de permission courant dans la charge utile du hook, conserve
// cette charge utile, journalise, et imprime le mode sur UNE ligne.
// Aucune dependance externe : n'utilise que la bibliotheque standard de Node.
// Sortie : TOUJOURS 0.
//
// Usage : node scripts/temoin-mode.mjs
//         La charge utile arrive sur l'ENTREE STANDARD. Aucun argument n'est lu.
//
// CE N'EST PAS UNE PORTE, ET LA DISTINCTION EST LE PROPOS DE CE FICHIER.
// Une porte fait echouer quelque chose. Celui-ci ne fait echouer rien du tout :
// il eclaire une grandeur que l'agent ne connaissait pas. C'est une lampe
// torche, et elle est assumee comme telle.
//
// CE QUE CE SCRIPT NE FAIT PAS — a savoir, sous peine de lui creder ce qu'il ne
// fait pas :
//   1. il ne SORT JAMAIS en 2, ni en aucun autre code que 0. Un hook
//      UserPromptSubmit qui sort en 2 bloque le prompt ET EFFACE le texte tape.
//      Aucun chemin de ce fichier n'y mene ;
//   2. il ne lit AUCUN fichier du depot. Aucun chemin n'est extrait de la
//      charge utile, aucun fichier n'est ouvert en lecture ;
//   3. il ne cherche AUCUN marqueur dans aucun texte ;
//   4. il n'ecrit rien sur la sortie d'erreur ;
//   5. il ne leve JAMAIS d'exception : chaque etape faillible est enveloppee
//      SEPAREMENT, et une seule instruction imprime, en derniere ligne. C'est
//      ce qui garantit a la fois « jamais d'exception » et « exactement une
//      ligne » : aucun chemin ne peut imprimer deux fois ni zero fois.
//
// DEUX INCONNUES, NON MESUREES AU 16 SEPTEMBRE 2026. Ce script existe pour les
// trancher a sa premiere execution reelle :
//   a. le champ permission_mode arrive-t-il sur UserPromptSubmit ? La page des
//      hooks dit que tous les evenements ne le recoivent pas, et ne donne aucun
//      exemple de charge utile pour celui-ci ;
//   b. ce qui est imprime ici arrive-t-il jusqu'a l'agent ?
// Les deux se lisent dans hook-mode-last.json et dans hook-mode.log apres le
// premier prompt tape. Rien ne peut mal tourner en attendant : la sortie est 0,
// donc le pire cas est que ce script ne serve a rien.
//
// TABLE DE DECISION — quoi qu'il trouve, Y COMPRIS RIEN DU TOUT, il imprime et
// il sort en 0. Ce qu'il imprime distingue CINQ etats, et cette distinction est
// la raison d'etre du fichier :
//   <valeur>        le champ porte un mode exploitable
//   champ-absent    charge utile lisible, JSON valide, pas de permission_mode
//   champ-invalide  le champ existe mais ne porte pas une chaine utilisable
//   json-invalide   charge utile lue, mais ce n'est pas du JSON
//   charge-vide     rien n'est arrive, et la lecture s'est pourtant bien passee
//   illisible       l'entree standard n'a pas pu etre lue en entier
//
// UN MOT UNIQUE POUR PLUSIEURS CAUSES REND LA QUESTION A CELUI QUI LA POSE.
// Une version anterieure imprimait « introuvable » pour les cinq derniers etats.
// Or « le champ n'est pas la » est precisement la conclusion que cet instrument
// doit permettre — la confondre avec « je n'ai rien pu lire » fabrique un faux
// negatif indiscernable d'un vrai, et ce faux negatif ferait abandonner la piste.
//
// CE QU'IL CONSERVE, et il faut le savoir avant de declarer ce hook :
//   hook-mode-last.json porte la charge utile TELLE QUELLE, donc le texte tape
//   par le chef de projet. Un jeton colle dans un prompt y atterrit en clair.
//   Le dossier .pipeline/ est ignore par git (« * » puis « !.gitignore ») : rien
//   ne part au depot public. hook-mode.log s'accumule, aucune rotation n'est
//   ecrite — a connaitre le jour d'un portage au plancher machine.

import { writeFileSync, appendFileSync, existsSync, readSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { stdout, exit } from 'node:process';

const PREFIXE = 'MODE DE PERMISSION COURANT : ';
// Les cinq etats de defaut. Chacun a son mot, et aucun n'est le mot d'un autre.
const ILLISIBLE = 'illisible';
const CHARGE_VIDE = 'charge-vide';
const JSON_INVALIDE = 'json-invalide';
const CHAMP_ABSENT = 'champ-absent';
const CHAMP_INVALIDE = 'champ-invalide';
// Lecture de l'entree standard : un tube n'est pas forcement alimente au premier
// appel. On retente, par courtes attentes, jusqu'a cette borne cumulee. Elle est
// tres en dessous du delai de 10 s declare pour ce hook.
const ATTENTE_PAS_MS = 5;
const ATTENTE_MAX_MS = 2000;
const TAMPON_OCTETS = 65536;
// 64 : les six valeurs connues font au plus 18 caracteres (bypassPermissions).
// La borne existe pour un champ forge, pas pour un champ legitime.
const LONGUEUR_MAX = 64;

// --- 1. Le dossier de trace -------------------------------------------------
// .pipeline/ du repertoire courant s'il existe, sinon le dossier temporaire du
// systeme. Dans ce depot c'est toujours le premier, mesure. Le repli n'existe
// que pour un portage ulterieur au plancher machine, ou ce script tournerait
// dans des depots qui n'ont pas ce dossier : sans lui, il planterait A CHAQUE
// PROMPT. Ce repli n'est eprouve par aucun chemin du temoin.
let trace;
try {
  trace = existsSync('.pipeline') ? '.pipeline' : tmpdir();
} catch {
  trace = tmpdir();
}

// --- 2. La charge utile, telle qu'elle arrive -------------------------------
// On ne suppose RIEN de sa forme : ni qu'elle soit du JSON, ni qu'elle soit non
// vide, ni meme qu'elle soit lisible.
//
// POURQUOI UNE BOUCLE, ET PAS readFileSync(0) : sur un TUBE, la charge utile
// n'est pas forcement disponible en entier au premier appel. L'ecrivain peut
// n'avoir encore rien ecrit, ou ecrire en deux temps. Le descripteur rend alors
// EAGAIN — « rien a lire POUR L'INSTANT », qui n'est pas une fin de fichier.
// Une lecture unique prend ce EAGAIN pour une panne et perd TOUT.
//
// MESURE, PAS THEORIE (revue du 16 septembre 2026) : avec readFileSync(0), un
// ecrivain en deux temps de 30 octets echouait 10 fois sur 10, et une charge de
// 200 Ko 5 fois sur 6. Le defaut n'etait PAS deterministe — et il produisait
// exactement la reponse que cet instrument existe pour aller chercher.
//
// On lit donc jusqu'a la FIN DE FICHIER, en retentant sur EAGAIN. Et l'on retient
// si la lecture est allee a son terme : une lecture interrompue ne doit surtout
// pas se raconter comme une charge utile vide.
function lireEntree() {
  const morceaux = [];
  const tampon = Buffer.alloc(TAMPON_OCTETS);
  let attendu = 0;

  for (;;) {
    let lus = 0;
    try {
      lus = readSync(0, tampon, 0, TAMPON_OCTETS, null);
    } catch (err) {
      const code = err && err.code;
      if (code === 'EAGAIN' || code === 'EWOULDBLOCK') {
        // Le tube existe mais n'a rien a offrir MAINTENANT. On patiente.
        if (attendu >= ATTENTE_MAX_MS) return { texte: assembler(morceaux), complet: false };
        dormir(ATTENTE_PAS_MS);
        attendu += ATTENTE_PAS_MS;
        continue;
      }
      // EOF est une fin normale sur certains systemes ; tout le reste est un
      // echec de lecture, et il se DIT au lieu de se deguiser en charge vide.
      if (code === 'EOF') break;
      return { texte: assembler(morceaux), complet: false };
    }
    if (lus === 0) break; // fin de fichier : l'ecrivain a ferme son bout du tube
    morceaux.push(Buffer.from(tampon.subarray(0, lus)));
  }
  return { texte: assembler(morceaux), complet: true };
}

function assembler(morceaux) {
  try {
    return Buffer.concat(morceaux).toString('utf8');
  } catch {
    return '';
  }
}

// Attente synchrone SANS DEPENDANCE ni attente active : Atomics.wait sur un
// tampon partage dort vraiment, la ou une boucle vide brulerait un coeur.
function dormir(ms) {
  try {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  } catch {
    // Si Atomics n'est pas disponible, on retente immediatement : moins
    // econome, jamais faux.
  }
}

const lecture = lireEntree();
const brut = lecture.texte;

// --- 3. On la conserve, AU MIEUX --------------------------------------------
// Une ecriture qui echoue ne doit pas emporter le script : un hook qui tombe
// parce que son disque est plein serait pire que pas de hook du tout.
// UNE LECTURE RATEE N'ECRASE PAS UNE CAPTURE REUSSIE. Sans cette condition, le
// premier echec de lecture detruisait la seule capture reelle dont on disposait,
// et laissait un fichier vide qui se lisait comme « le hook ne recoit rien ».
if (lecture.complet) {
  try {
    writeFileSync(join(trace, 'hook-mode-last.json'), brut);
  } catch {
    // Ecriture au mieux : l'echec est silencieux, par conception.
  }
}

// --- 4. Le mode, et sa validation -------------------------------------------
// La charge utile est une donnee d'origine EXTERNE : type, format et bornes se
// valident avant emploi. Seule une chaine non vide fait un mode ; un champ
// present mais inexploitable — null, un nombre, un objet, un tableau, une chaine
// vide — donne CHAMP_INVALIDE, jamais CHAMP_ABSENT.
//
// L'APLATISSEMENT N'EST PAS COSMETIQUE : une valeur portant un passage a la
// ligne ferait imprimer DEUX lignes, ce qui violerait la garde d'unicite du
// temoin. Une charge utile forgee pourrait donc eteindre cette garde.
// CHAQUE CAUSE A SON MOT. Les cinq etats de defaut ne se disent pas pareil, et
// l'ordre de ce bloc est celui des causes : on ne peut pas juger du JSON avant
// d'avoir lu, ni du champ avant d'avoir du JSON.
function assainir(valeur) {
  // Donnee d'origine EXTERNE : type, forme et bornes se valident avant emploi.
  // L'APLATISSEMENT N'EST PAS COSMETIQUE — une valeur portant un passage a la
  // ligne ferait imprimer DEUX lignes et eteindrait la garde d'unicite du
  // temoin. Le filtrage des caracteres de commande ferme la meme porte pour les
  // sequences ANSI et l'octet NUL, qui peuvent reecrire un terminal.
  const aplati = valeur.replace(/\s+/g, ' ').trim();
  const imprimable = aplati.replace(/[^\x20-\x7E]/g, '');
  if (imprimable.length === 0) return null;
  return imprimable.length > LONGUEUR_MAX
    ? `${imprimable.slice(0, LONGUEUR_MAX)}...`
    : imprimable;
}

function determinerMode() {
  if (!lecture.complet) return ILLISIBLE;
  if (brut.length === 0) return CHARGE_VIDE;

  let charge;
  try {
    charge = JSON.parse(brut);
  } catch {
    return JSON_INVALIDE;
  }

  const valeur = charge?.permission_mode;
  // « null » EST UNE PRESENCE. Le champ existe, il ne porte simplement pas un
  // mode utilisable — le ranger sous CHAMP_ABSENT referait, en plus petit, la
  // maladie que ce fichier solde : dire « le champ n'est pas la » quand il est la.
  if (valeur === undefined) return CHAMP_ABSENT;
  if (typeof valeur !== 'string') return CHAMP_INVALIDE;

  const propre = assainir(valeur);
  return propre === null ? CHAMP_INVALIDE : propre;
}

const mode = determinerMode();

// --- 5. Le journal, AU MIEUX lui aussi --------------------------------------
// Une ligne par passage. Le champ « octets » donne la TAILLE de ce qui a ete lu ;
// il ne distingue plus les causes entre elles — c'est le mot du mode qui le fait
// desormais, et c'est a lui seul qu'il faut se fier. Le champ « lu » dit si la
// lecture est allee a son terme.
try {
  const ligne = `${new Date().toISOString()} | mode=${mode} | lu=${lecture.complet ? 'entier' : 'partiel'} | octets=${Buffer.byteLength(brut)}\n`;
  appendFileSync(join(trace, 'hook-mode.log'), ligne);
} catch {
  // Journal au mieux : l'echec est silencieux, par conception.
}

// --- 6. La ligne, et la sortie ----------------------------------------------
// UNE SEULE instruction d'impression dans tout le fichier, et elle est la
// derniere. Le code de sortie est 0, sans condition et sans exception.
stdout.write(`${PREFIXE}${mode}\n`);
exit(0);
