#!/usr/bin/env bash
# Porte de qualite du portfolio — filet de tests appele par /ship et /land.
# Quatre controles, dans cet ordre :
#   1. le temoin defectueux DOIT echouer, en NOMMANT ses defauts semes ;
#   2. le temoin de cecite DOIT echouer, en NOMMANT la cecite ;
#   3. le temoin de cadrage muet DOIT echouer, en NOMMANT le budget manquant ;
#   4. le site reel DOIT passer.
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

echo "--- 1/4 · Preuve de morsure (le temoin defectueux doit echouer) ---"
# Seuils de non-vacuite desarmes : ce temoin fait dix suites de texte, pas deux
# cents. On ne deforme pas le temoin pour qu'il franchisse la garde ; on retire
# la garde de SON perimetre, et le controle 2 la prouve ailleurs.
out_broken="$(node scripts/check-i18n.mjs scripts/fixtures/broken.html --min-runs=0 --min-covered=0 2>&1)"
code_broken=$?
[ "$code_broken" -ne 0 ] || fail "la porte ne mord plus : le temoin defectueux est passe."
case "$out_broken" in
  *AVEUGLE*) fail "le temoin defectueux echoue par CECITE, pas sur ses defauts semes." ;;
esac
# Symetrique de la garde ci-dessus, pour le budget. Sans elle, un §9 malforme
# (une espace dans `254 px`) ou desserre au-dela de 358 px fait cesser de mordre
# le defaut n° 8 — et l'echec se lirait « controle mort », accusation fausse qui
# envoie le mainteneur chercher au mauvais endroit. Un diagnostic errone coute
# plus cher qu'une absence de diagnostic.
case "$out_broken" in
  *"Budget de largeur introuvable dans le cadrage"*)
    fail "le temoin defectueux echoue parce que le budget du CLAUDE.md §9 est illisible, pas sur ses defauts semes." ;;
esac
# Assertions POSITIVES : UNE PAR CHEMIN BLOQUANT, neuf DANS CE BLOC — treize au
# total sur la porte, les quatre autres etant les gardes de non-vacuite assertees
# en 2/4 (cecite, adresse, libelles nav) et en 3/4 (budget). Leur absence
# signale un controle mort, la ou l'absence de "AVEUGLE" ne signalerait rien.
#
# Le compte est ce qui fait la valeur de ce bloc : avec deux assertions sur six
# familles, quatre controles pouvaient mourir sans que la porte rougisse (revue
# du 9 aout 2026, R1 — les quatre etats ont ete constates en bac a sable).
# TOUT NOUVEAU CONTROLE BLOQUANT AJOUTE ICI SON ASSERTION, sinon il naitra
# invisible.
#
# Le motif est le MESSAGE DU CONTROLE, jamais l'identifiant nu du defaut seme.
# Raison mesuree, pas theorique : "only_fr" est aussi le nom d'une cle orpheline,
# que le controle informatif annonce en AVERTISSEMENT. Assertion posee sur
# "only_fr" seul, le controle de symetrie a ete tue en bac a sable et la porte
# est restee VERTE — l'avertissement d'un autre controle satisfaisait le motif.
# Un identifiant se repete ; une phrase d'erreur appartient a un seul controle.
assert_names() { # <motif attendu dans la sortie> <controle qu'il prouve vivant>
  case "$out_broken" in
    *"$1"*) : ;;
    *) fail "le temoin echoue sans le message du controle $2 (motif '$1') : controle mort ?" ;;
  esac
}
assert_names 'mais absente du bloc "fr" : orphan_key'      "de completude"
assert_names 'presente en "fr" mais absente en "en" : only_fr' "de symetrie"
assert_names 'Cle dupliquee dans le bloc "fr" : dup_key'   "de doublon"
assert_names 'Ancre de navigation cassee : #nowhere'       "d'integrite des ancres"
assert_names 'Un attribut data-i18n est vide.'             "d'attribut vide"
assert_names 'Texte visible non traduit : "Cette"'         "de couverture du texte visible"
# Motif = la phrase du controle, jamais une adresse : une adresse circule dans
# la liste blanche, dans la ligne de rapport et dans les messages voisins.
assert_names 'Adresse de contact incoherente entre les trois occurrences' "de coherence de l'adresse de contact"
assert_names 'Adresse trop large pour le budget de la carte de contact' "de budget de largeur"
assert_names 'Libelle de navigation trop large pour le panneau du menu' "de largeur des libelles de navigation"
echo "OK - le temoin echoue en nommant ses neuf defauts semes."
echo ""

echo "--- 2/4 · Garde de non-vacuite (le temoin de cecite doit echouer) ---"
# Seuils de PRODUCTION, volontairement : c'est ce que ce temoin prouve.
out_blind="$(node scripts/check-i18n.mjs scripts/fixtures/blind.html 2>&1)"
code_blind=$?
[ "$code_blind" -ne 0 ] || fail "la garde de non-vacuite ne mord plus : une porte aveugle passerait pour verte."
case "$out_blind" in
  *AVEUGLE*) : ;;
  *) fail "le temoin de cecite echoue, mais pas pour cecite : la preuve ne vaut rien." ;;
esac
# Le controle 7 a DEUX chemins bloquants : la divergence, assertee en 1/4 sur le
# temoin defectueux, et cette garde de non-vacuite — qui n'a aucun temoin la ou
# la divergence en a un. blind.html ne porte aucune adresse de contact : la
# garde y tire ses trois erreurs a chaque execution, l'ancrage est stable.
#
# Sans cette assertion, la garde naissait INVISIBLE (revue du 9 aout, R1).
# Mesure, pas theorie : neutralisee, la porte restait VERTE pendant qu'une page
# affichant la nouvelle adresse copiait l'ancienne — c'est-a-dire exactement le
# mode de panne silencieux que le controle 7 existe pour fermer.
case "$out_blind" in
  *"Adresse de contact introuvable ou multiple"*) : ;;
  *) fail "le temoin de cecite ne nomme plus la garde de non-vacuite du controle 7 : garde morte ?" ;;
esac
# Meme mecanique pour le controle 9 : sa garde de non-vacuite n'a pas d'autre
# cible ou mordre — blind.html ne porte aucune entree de navigation prioritaire,
# la garde y tire son erreur a chaque execution. Sans cette assertion, elle
# naitrait invisible, comme celle du controle 7 avant la revue du 9 aout.
case "$out_blind" in
  *"Libelles de navigation introuvables"*) : ;;
  *) fail "le temoin de cecite ne nomme plus la garde des libelles de navigation : garde morte ?" ;;
esac
echo "OK - la garde nomme la cecite, et celles des controles 7 et 9 sont vivantes."
echo ""

echo "--- 3/4 · Garde de cadrage (le budget de largeur doit etre lisible) ---"
# Le controle 8 lit son budget dans CLAUDE.md, seule source du nombre. Une
# lecture qui echoue le rendrait MUET : il se tairait sur un cadrage ampute
# pendant qu'une adresse trop large passerait. Cette garde n'a aucune cible ou
# mordre naturellement — les trois autres cibles lisent toutes le vrai cadrage.
# On lui en donne donc une : un cadrage volontairement depourvu du jeton.
# Sans ce temoin, la garde naitrait invisible (lecon du 9 aout 2026 : une
# assertion par CHEMIN bloquant, et la garde est un chemin a part entiere).
out_cadrage="$(node scripts/check-i18n.mjs index.html --cadrage=scripts/fixtures/cadrage-sans-budget.md 2>&1)"
code_cadrage=$?
[ "$code_cadrage" -ne 0 ] || fail "la garde du budget ne mord plus : un cadrage sans budget passerait pour vert."
case "$out_cadrage" in
  *'Budget de largeur introuvable dans le cadrage'*) : ;;
  *) fail "le temoin de cadrage echoue, mais pas sur le budget manquant : la preuve ne vaut rien." ;;
esac
echo "OK - la garde nomme le budget manquant."
echo ""

echo "--- 4/4 · Site reel (doit passer) ---"
# Pas d'assertion de sortie ici : la garde de non-vacuite est armee sur cette
# cible, c'est elle qui interdit un vert obtenu sur une extraction morte.
node scripts/check-i18n.mjs index.html
