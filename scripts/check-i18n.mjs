#!/usr/bin/env node
// Porte de qualite du portfolio : integrite du dictionnaire bilingue et des ancres de navigation.
// Aucune dependance externe : n'utilise que la bibliotheque standard de Node.
// Sortie : code 0 si tout passe, code 1 si au moins un controle bloquant echoue.
// Usage : node scripts/check-i18n.mjs [chemin/vers/index.html]

import { readFileSync } from 'node:fs';
import { argv, exit } from 'node:process';

const target = argv[2] ?? 'index.html';
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

// --- 7. Rapport --------------------------------------------------------------
function report() {
  console.log(`Cible            : ${target}`);
  console.log(`Cles utilisees   : ${usedKeys.size}`);
  console.log(`Cles fr / en     : ${declared.fr.size} / ${declared.en.size}`);
  console.log(`Ancres verifiees : ${anchors.size}`);
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
