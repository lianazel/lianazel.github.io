#!/usr/bin/env bash
# Porte de qualite du portfolio — filet de tests appele par /ship et /land.
#
# NEUF blocs, dans cet ordre. Les huit premiers eprouvent la PORTE ; le dernier
# eprouve le SITE. Un filet qui passe sur un temoin est en panne, pas en bonne
# sante — et il doit etre repare AVANT toute livraison.
#
#   1/9  temoin defectueux        -> doit echouer en NOMMANT ses defauts semes
#   2/9  temoin de cecite         -> doit echouer en NOMMANT chaque garde de vacuite
#   3/9  cadrage muet             -> doit echouer en NOMMANT le budget manquant
#   4/9  liste blanche            -> doit echouer en NOMMANT chacun de ses trois defauts
#   5/9  dictionnaire absent/casse-> doit echouer en NOMMANT le defaut de structure
#   6/9  balisage desequilibre    -> doit echouer en NOMMANT l'extraction non fiable
#   7/9  invocations invalides    -> doivent echouer AVANT tout controle
#   8/9  compte des chemins       -> la source doit porter le nombre declare ici
#   9/9  site reel                -> doit passer
#
# POURQUOI LES BLOCS LISENT LA SORTIE ET PAS SEULEMENT LE CODE DE RETOUR : un
# code de retour non nul ne dit pas POURQUOI. Un plantage du controle
# (exception, fichier illisible, regression de syntaxe) sort aussi en code 1 et
# se lirait comme une morsure. On exige donc de chaque temoin qu'il echoue pour
# SA raison, nommee dans sa sortie.
#
# ─────────────────────────────────────────────────────────────────────────────
# LA REGLE QUI GOUVERNE CE FICHIER, ET ELLE A ETE PAYEE DEUX FOIS
#
#   UNE ASSERTION PAR CHEMIN BLOQUANT, POSEE SUR LE MESSAGE PROPRE DE CE CHEMIN.
#
# Un chemin bloquant = un site d'erreur dans check-i18n.mjs, OU une sortie
# anticipee. Il y en a VINGT-QUATRE (21 + 3), et ce fichier porte donc
# VINGT-QUATRE assertions positives. Le compte est verifie mecaniquement en 8/9,
# parce qu'un compte declare que rien ne mesure finit toujours par etre faux —
# le cadrage annoncait « 21 sites » en oubliant les trois sorties anticipees.
#
# Le motif d'une assertion est une PHRASE qui n'appartient qu'a son chemin.
# Jamais un identifiant nu, jamais un marqueur partage, jamais un fragment qui
# puisse apparaitre dans un message voisin. Deux mesures, pas deux theories :
#
#   . 9 aout 2026 — assertion posee sur "only_fr" seul : le controle de symetrie
#     tue en bac a sable, la porte est restee VERTE. L'avertissement d'un AUTRE
#     controle (cle orpheline du meme nom) satisfaisait le motif.
#   . 10 aout 2026 — quatre gardes partageaient le marqueur AVEUGLE et UNE seule
#     assertion. N'importe laquelle des quatre la satisfaisait : trois pouvaient
#     mourir sans que rien ne rougisse, et SIX chemins au total ont ete vus
#     mourir la porte verte. C'etait la dette D-10, soldee par ce fichier.
#
# Le marqueur AVEUGLE reste dans le texte affiche — il sert au lecteur humain —
# mais PLUS AUCUNE ASSERTION DE VIVACITE NE S'Y APPUIE. Il subsiste UNE mention,
# au 1/9, et elle est d'une autre nature : une garde NEGATIVE, qui exige que le
# temoin defectueux n'echoue PAS par cecite. Un marqueur partage convient la —
# on y verifie une absence, et l'absence des quatre membres est bien ce qu'on
# veut. Le defaut du marqueur partage est de rendre une PRESENCE ambigue, pas
# une absence.
#
# TOUT NOUVEAU CHEMIN BLOQUANT AJOUTE ICI SON ASSERTION ET INCREMENTE LE COMPTE
# DU 8/9, sinon il naitra invisible.
# ─────────────────────────────────────────────────────────────────────────────
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT" || exit 1

fail() {
  echo "ECHEC - $1"
  echo "        Reparer la porte AVANT toute livraison."
  exit 1
}

# Assertion POSITIVE : le temoin doit avoir nomme ce chemin. Son absence signale
# un chemin mort, la ou l'absence d'un marqueur partage ne signalerait rien.
assert_dit() { # <sortie> <motif attendu> <chemin qu'il prouve vivant>
  case "$1" in
    *"$2"*) : ;;
    *) fail "le temoin echoue SANS le message du chemin « $3 » (motif attendu : $2) : chemin mort ?" ;;
  esac
}

# Toute cible de la porte doit echouer. Un temoin qui passe ne prouve rien.
assert_mord() { # <code de retour> <description de la cible>
  [ "$1" -ne 0 ] || fail "$2 : la cible est PASSEE, alors qu'elle doit echouer."
}

echo "--- 1/9 · Preuve de morsure (le temoin defectueux doit echouer) ---"
# Seuils de non-vacuite desarmes : ce temoin fait dix suites de texte, pas deux
# cents. On ne deforme pas le temoin pour qu'il franchisse la garde ; on retire
# la garde de SON perimetre, et le 2/9 la prouve ailleurs, a ses valeurs de
# production.
out_broken="$(node scripts/check-i18n.mjs scripts/fixtures/broken.html --min-runs=0 --min-covered=0 2>&1)"
code_broken=$?
assert_mord "$code_broken" "temoin defectueux"
# Gardes NEGATIVES : ce temoin doit echouer sur SES defauts, jamais par cecite
# ni sur un cadrage illisible. Sans elles, un cadrage amputé (une espace dans
# `254 px`) ferait cesser de mordre le defaut de budget, et l'echec se lirait
# « chemin mort » — accusation fausse qui envoie le mainteneur chercher au
# mauvais endroit. Un diagnostic errone coute plus cher qu'une absence de
# diagnostic.
case "$out_broken" in
  *AVEUGLE*) fail "le temoin defectueux echoue par CECITE, pas sur ses defauts semes." ;;
esac
case "$out_broken" in
  *"Budget de largeur introuvable dans le cadrage"*)
    fail "le temoin defectueux echoue parce que le budget du CLAUDE.md §9 est illisible, pas sur ses defauts semes." ;;
esac
# DIX chemins prouves ici. Le controle de symetrie en compte DEUX a lui seul :
# ses deux sens sont deux branches de code distinctes, donc deux chemins, donc
# deux defauts semes et deux assertions. Le sens EN -> FR a ete vu mourir la
# porte verte le 9 aout — il n'etait pas seme.
assert_dit "$out_broken" 'mais absente du bloc "fr" : orphan_key'               "completude du dictionnaire"
assert_dit "$out_broken" 'presente en "fr" mais absente en "en" : only_fr'      "symetrie FR -> EN"
assert_dit "$out_broken" 'presente en "en" mais absente en "fr" : only_en'      "symetrie EN -> FR"
assert_dit "$out_broken" 'Cle dupliquee dans le bloc "fr" : dup_key'            "doublon de cle"
assert_dit "$out_broken" 'Ancre de navigation cassee : #nowhere'                "integrite des ancres"
assert_dit "$out_broken" 'Un attribut data-i18n est vide.'                      "attribut de traduction vide"
assert_dit "$out_broken" 'Texte visible non traduit : "Cette"'                  "couverture du texte visible"
# Motif = la phrase du controle, jamais une adresse : une adresse circule dans
# la liste blanche, dans la ligne de rapport et dans les messages voisins.
assert_dit "$out_broken" 'Adresse de contact incoherente entre les trois occurrences' "coherence de l'adresse de contact"
assert_dit "$out_broken" 'Adresse trop large pour le budget de la carte de contact'   "budget de largeur de l'adresse"
assert_dit "$out_broken" 'Libelle de navigation trop large pour le panneau du menu'   "largeur des libelles de navigation"
echo "OK - le temoin nomme ses dix defauts semes."
echo ""

echo "--- 2/9 · Gardes de non-vacuite (le temoin de cecite doit echouer) ---"
# Seuils de PRODUCTION, volontairement : c'est ce que ce temoin prouve.
out_blind="$(node scripts/check-i18n.mjs scripts/fixtures/blind.html 2>&1)"
code_blind=$?
assert_mord "$code_blind" "temoin de cecite"
# QUATRE chemins distincts tirent sur ce temoin, et chacun a desormais SA
# phrase. Avant le 10 aout 2026 une seule assertion, posee sur le marqueur
# AVEUGLE, valait pour toute la famille : deux des quatre pouvaient mourir sans
# que rien ne rougisse. Les deux autres membres de la famille n'ont pas de cible
# ici — la liste blanche est prouvee en 4/9, l'extraction en 6/9.
assert_dit "$out_blind" 'suite(s) de texte visible extraite(s)' "seuil de suites extraites"
assert_dit "$out_blind" 'suite(s) couverte(s),'                 "seuil de suites couvertes"
# blind.html ne porte AUCUNE adresse de contact ni AUCUNE entree de navigation
# prioritaire : ces deux gardes y tirent a chaque execution, l'ancrage est
# stable. C'est cette absence qui les rend prouvables — ne rien ajouter de tel
# a ce temoin.
assert_dit "$out_blind" 'Adresse de contact introuvable ou multiple' "garde de non-vacuite de l'adresse"
assert_dit "$out_blind" 'Libelles de navigation introuvables'        "garde de non-vacuite des libelles de navigation"
echo "OK - les quatre gardes de non-vacuite parlent chacune de sa voix."
echo ""

echo "--- 3/9 · Garde de cadrage (le budget de largeur doit etre lisible) ---"
# Le controle de budget lit ses valeurs dans CLAUDE.md, seule source du nombre.
# Une lecture qui echoue le rendrait MUET : il se tairait sur un cadrage ampute
# pendant qu'une adresse trop large passerait. Cette garde n'a aucune cible ou
# mordre naturellement — les autres cibles lisent toutes le vrai cadrage. On lui
# en donne donc une : un cadrage volontairement depourvu du jeton d'ancrage.
out_cadrage="$(node scripts/check-i18n.mjs index.html --cadrage=scripts/fixtures/cadrage-sans-budget.md 2>&1)"
code_cadrage=$?
assert_mord "$code_cadrage" "temoin de cadrage muet"
assert_dit "$out_cadrage" 'Budget de largeur introuvable dans le cadrage' "garde de lisibilite du budget"
echo "OK - la garde nomme le budget manquant."
echo ""

echo "--- 4/9 · Liste blanche (trois chemins, deux cibles) ---"
# TROIS chemins bloquants vivaient ici SANS AUCUNE CIBLE ou mordre, faute d'une
# liste blanche redirigeable. Ils ont ete vus mourir la porte VERTE le 9 aout
# 2026 — la moitie des six. L'option --allowlist= les rend eprouvables.
#
# La cible est le REPERTOIRE scripts/fixtures, et c'est deliberé : le lire
# echoue toujours (EISDIR), la ou un nom de fichier fantome cesserait de mordre
# le jour ou quelqu'un creerait ce fichier — et l'echec se lirait alors
# « chemin mort », diagnostic faux. Un repertoire ne peut pas devenir lisible
# par megarde.
out_allow_absente="$(node scripts/check-i18n.mjs index.html --allowlist=scripts/fixtures 2>&1)"
code_allow_absente=$?
assert_mord "$code_allow_absente" "liste blanche illisible"
assert_dit "$out_allow_absente" 'Liste blanche illisible'          "lecture de la liste blanche"
assert_dit "$out_allow_absente" 'liste blanche absente ou vide'    "garde de non-vacuite de la liste blanche"
# Seconde cible : une liste LISIBLE mais mal tenue. Sa premiere entree est
# valide, ce qui garde la liste non vide — sans quoi ce temoin echouerait sur la
# garde ci-dessus et prouverait le mauvais chemin.
out_allow_motif="$(node scripts/check-i18n.mjs index.html --allowlist=scripts/fixtures/allowlist-sans-motif.txt 2>&1)"
code_allow_motif=$?
assert_mord "$code_allow_motif" "liste blanche sans motif"
assert_dit "$out_allow_motif" 'entree sans motif (format attendu' "tenue des entrees de la liste blanche"
echo "OK - les trois chemins de la liste blanche mordent."
echo ""

echo "--- 5/9 · Structure du dictionnaire (deux chemins, deux cibles) ---"
# Deux chemins distincts, donc deux temoins : celui qui n'a PAS de dictionnaire
# ne peut pas prouver celui qui en a un de CASSE — le premier s'arrete avant
# d'atteindre le second.
out_dict_absent="$(node scripts/check-i18n.mjs scripts/fixtures/dict-absent.html 2>&1)"
code_dict_absent=$?
assert_mord "$code_dict_absent" "temoin sans dictionnaire"
assert_dit "$out_dict_absent" 'Dictionnaire introuvable' "detection du dictionnaire absent"
out_dict_malforme="$(node scripts/check-i18n.mjs scripts/fixtures/dict-malforme.html 2>&1)"
code_dict_malforme=$?
assert_mord "$code_dict_malforme" "temoin a dictionnaire malforme"
assert_dit "$out_dict_malforme" 'Dictionnaire malforme' "detection du dictionnaire malforme"
echo "OK - les deux chemins de structure du dictionnaire mordent."
echo ""

echo "--- 6/9 · Extraction non fiable (balisage desequilibre) ---"
# Le versant OPPOSE des deux seuils du 2/9 : eux gardent contre le MANQUE,
# celui-ci contre l'EXCES. Une balise laissee ouverte garde son data-i18n
# ouvert, tout le texte qui suit est compte couvert, et le controle de
# couverture se vide EN RESTANT VERT. Ce chemin n'avait aucune cible : il a ete
# vu mourir la porte verte le 9 aout 2026.
out_desequilibre="$(node scripts/check-i18n.mjs scripts/fixtures/balisage-desequilibre.html --min-runs=0 --min-covered=0 2>&1)"
code_desequilibre=$?
assert_mord "$code_desequilibre" "temoin au balisage desequilibre"
assert_dit "$out_desequilibre" 'extraction non fiable' "garde d'equilibre du balisage"
echo "OK - la garde nomme l'extraction non fiable."
echo ""

echo "--- 7/9 · Invocations invalides (trois sorties anticipees) ---"
# CES TROIS CHEMINS NE SONT PAS DES CONTROLES : ce sont des refus de travailler,
# posés AVANT toute lecture. Ils comptent pourtant comme chemins bloquants — le
# cadrage annoncait « 21 sites d'erreur » en les oubliant, et se trompait donc
# de trois. Un refus de travailler qui cesserait de refuser laisserait la porte
# tourner sur une option silencieusement ignoree : Number('') vaut 0, et un
# seuil desarme EN SILENCE est exactement le mode de panne que tout ce fichier
# combat.
out_opt_num="$(node scripts/check-i18n.mjs index.html --min-runs=abc 2>&1)"
code_opt_num=$?
assert_mord "$code_opt_num" "option numerique invalide"
assert_dit "$out_opt_num" 'option --min-runs invalide' "refus d'une option numerique invalide"
out_opt_vide="$(node scripts/check-i18n.mjs index.html --cadrage= 2>&1)"
code_opt_vide=$?
assert_mord "$code_opt_vide" "option de chemin vide"
assert_dit "$out_opt_vide" 'option --cadrage vide' "refus d'une option de chemin vide"
# Meme raison qu'au 4/9 pour viser un repertoire : illisible par nature.
out_cible="$(node scripts/check-i18n.mjs scripts/fixtures 2>&1)"
code_cible=$?
assert_mord "$code_cible" "cible illisible"
assert_dit "$out_cible" 'fichier illisible' "refus d'une cible illisible"
echo "OK - les trois refus de travailler mordent."
echo ""

echo "--- 8/9 · Compte des chemins bloquants (la source contre le declare) ---"
# CE QUE CETTE GARDE FAIT : elle detecte qu'un chemin bloquant a ete AJOUTE ou
# RETIRE de check-i18n.mjs sans que l'inventaire soit repris.
#
# ⛔ CE QU'ELLE NE FAIT PAS, et il faut l'ecrire sous peine de lui crediter ce
# qu'elle ne fait pas : elle ne prouve PAS que le nouveau chemin soit asserte.
# Seule une campagne de neutralisation le prouve, et elle est manuelle. Cette
# garde force un REGARD, elle ne remplace pas la preuve.
#
# ⚠️ ELLE EST FRAGILE PAR NATURE : elle compte un motif dans du code source.
# Renommer errors.push en un assistant ferait rougir la porte sur un remaniement
# parfaitement legitime. C'est ASSUME — ce remaniement-la doit faire relire
# l'inventaire, et le message ci-dessous dit quoi faire.
#
# Pourquoi elle existe malgre cette fragilite : le cadrage annoncait un nombre
# ecrit que rien ne mesurait, et il etait FAUX. C'est la maladie D-7 dans sa
# forme la plus pure, et le remede tient en trois lignes.
CHEMINS_ERREUR=21   # sites d'erreur bloquante dans check-i18n.mjs
CHEMINS_SORTIE=4    # sorties directes : 3 refus anticipes + la sortie finale de report()

compter_chemins() { # <fichier> -> "<sites d'erreur> <sorties>"
  # -o compte les OCCURRENCES, pas les lignes : deux sites sur une meme ligne
  # doivent compter deux.
  printf '%s %s' \
    "$(grep -o 'errors\.push(' "$1" | wc -l | tr -d ' ')" \
    "$(grep -o 'exit(1);' "$1" | wc -l | tr -d ' ')"
}
attendu="$CHEMINS_ERREUR $CHEMINS_SORTIE"

# ⚠️ UNE SEULE COMPARAISON POUR LES DEUX ASSERTIONS, ET C'EST LE POINT DE TOUT
# CE BLOC. La premiere redaction en portait DEUX, jumelles : le controle du
# fichier reel, et celui du temoin. Le temoin ne passait donc jamais par la
# comparaison qu'il etait cense prouver — il prouvait que compter_chemins sait
# discriminer, pas que la garde compare quoi que ce soit.
#
# MESURE, pas theorie (revue du 10 aout 2026, refaite ici) : comparaison
# primaire rendue toujours vraie et un 22e chemin ajoute a la source, la porte
# sort en CODE 0 en AFFIRMANT « 21 sites et 4 sorties, conformes au declare ».
# Une porte qui affirme une conformite qu'elle n'a pas verifiee est pire qu'une
# porte muette. C'etait, dans le bloc cense fermer ce defaut, exactement le
# defaut que tout ce fichier ferme.
#
# En routant les deux assertions par compte_conforme(), la comparaison devient
# un point de passage unique : la neutraliser fait rougir la porte dans les deux
# sens — toujours vraie, le temoin declenche son echec ; toujours fausse, le
# fichier reel declenche le sien.
compte_conforme() { # <fichier> -> code 0 si son compte egale le compte declare
  [ "$(compter_chemins "$1")" = "$attendu" ]
}
if ! compte_conforme scripts/check-i18n.mjs; then
  fail "le compte des chemins bloquants a change : mesure « $(compter_chemins scripts/check-i18n.mjs) », declare « $attendu ».
        Un chemin bloquant a ete ajoute ou retire. Reprendre l'inventaire, POSER SON ASSERTION
        dans ce fichier, et mettre a jour CHEMINS_ERREUR / CHEMINS_SORTIE ci-dessus."
fi
# La garde est elle-meme un chemin : sans temoin, elle naitrait invisible. Le
# temoin porte volontairement un compte different.
if compte_conforme scripts/fixtures/compte-divergent.mjs; then
  fail "la garde du compte ne mord plus : le temoin divergent affiche le compte attendu."
fi
echo "OK - $CHEMINS_ERREUR sites d'erreur et $CHEMINS_SORTIE sorties, conformes au declare ; la garde mord sur son temoin."
echo ""

echo "--- 9/9 · Site reel (doit passer) ---"
# Pas d'assertion de sortie ici : les gardes de non-vacuite sont armees sur
# cette cible, ce sont elles qui interdisent un vert obtenu sur une extraction
# morte.
node scripts/check-i18n.mjs index.html
