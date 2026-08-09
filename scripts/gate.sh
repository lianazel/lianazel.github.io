#!/usr/bin/env bash
# Porte de qualite du portfolio — filet de tests appele par /ship et /land.
# Trois controles, dans cet ordre :
#   1. le temoin defectueux DOIT echouer, en NOMMANT ses defauts semes ;
#   2. le temoin de cecite DOIT echouer, en NOMMANT la cecite ;
#   3. le site reel DOIT passer.
# Un filet qui passe sur un temoin est en panne, pas en bonne sante.
#
# Pourquoi les controles 1 et 2 lisent la SORTIE et pas seulement le code de
# retour : un code de retour non nul ne dit pas POURQUOI. Un plantage du
# controle (exception, fichier illisible, regression de syntaxe) sort aussi en
# code 1 et se lirait comme une morsure. On exige donc de chaque temoin qu'il
# echoue pour SA raison, nommee dans sa sortie.
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT" || exit 1

fail() {
  echo "ECHEC - $1"
  echo "        Reparer la porte AVANT toute livraison."
  exit 1
}

echo "--- 1/3 · Preuve de morsure (le temoin defectueux doit echouer) ---"
# Seuils de non-vacuite desarmes : ce temoin fait sept suites de texte, pas deux
# cents. On ne deforme pas le temoin pour qu'il franchisse la garde ; on retire
# la garde de SON perimetre, et le controle 2 la prouve ailleurs.
out_broken="$(node scripts/check-i18n.mjs scripts/fixtures/broken.html --min-runs=0 --min-covered=0 2>&1)"
code_broken=$?
[ "$code_broken" -ne 0 ] || fail "la porte ne mord plus : le temoin defectueux est passe."
case "$out_broken" in
  *AVEUGLE*) fail "le temoin defectueux echoue par CECITE, pas sur ses defauts semes." ;;
esac
# Assertions POSITIVES : UNE PAR CONTROLE BLOQUANT, six en tout. Leur absence
# signale un controle mort, la ou l'absence de "AVEUGLE" ne signalerait rien.
#
# Le compte est ce qui fait la valeur de ce bloc : avec deux assertions sur six
# familles, quatre controles pouvaient mourir sans que la porte rougisse (revue
# du 9 aout 2026, R1 — les quatre etats ont ete constates en bac a sable).
# TOUT NOUVEAU CONTROLE BLOQUANT AJOUTE ICI SON ASSERTION, sinon il naitra
# invisible.
assert_names() { # <motif attendu dans la sortie> <controle qu'il prouve vivant>
  case "$out_broken" in
    *"$1"*) : ;;
    *) fail "le temoin echoue sans nommer '$1' : controle $2 mort ?" ;;
  esac
}
assert_names "orphan_key"           "de completude"
assert_names "only_fr"              "de symetrie"
assert_names "dup_key"              "de doublon"
assert_names "nowhere"              "d'integrite des ancres"
assert_names "data-i18n est vide"   "d'attribut vide"
assert_names "phrase francaise"     "de couverture du texte visible"
echo "OK - le temoin echoue en nommant ses six defauts semes."
echo ""

echo "--- 2/3 · Garde de non-vacuite (le temoin de cecite doit echouer) ---"
# Seuils de PRODUCTION, volontairement : c'est ce que ce temoin prouve.
out_blind="$(node scripts/check-i18n.mjs scripts/fixtures/blind.html 2>&1)"
code_blind=$?
[ "$code_blind" -ne 0 ] || fail "la garde de non-vacuite ne mord plus : une porte aveugle passerait pour verte."
case "$out_blind" in
  *AVEUGLE*) : ;;
  *) fail "le temoin de cecite echoue, mais pas pour cecite : la preuve ne vaut rien." ;;
esac
echo "OK - la garde nomme la cecite."
echo ""

echo "--- 3/3 · Site reel (doit passer) ---"
# Pas d'assertion de sortie ici : la garde de non-vacuite est armee sur cette
# cible, c'est elle qui interdit un vert obtenu sur une extraction morte.
node scripts/check-i18n.mjs index.html
