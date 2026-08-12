# Registre local des leçons — lianazel.github.io

> Format : `## [DATE] — [Titre court]`, puis Type / Contexte / Erreur-Approche / Correction-Pattern /
> Applicable globalement. Une leçon universelle est promue dans `~/.claude/lessons.md` **en ajout
> seul**, après validation du chef de projet.

## 8 août 2026 — Vérifier l'indicateur avant de croire sa sortie

**Type** : Erreur
**Contexte** : Passe d'alignement du projet sur le harnais de travail. Écriture du contrôle de
complétude du dictionnaire bilingue d'`index.html`.

Un contrôle de complétude naïf, ancré en début de ligne, a produit vingt faux défauts sur ce
dictionnaire parce que plusieurs clés tiennent sur une même ligne. Un indicateur mal choisi fabrique
exactement le défaut qu'il est censé détecter : vérifier l'indicateur avant de croire sa sortie.

**Correction/Pattern** : un motif de reconnaissance de clé doit s'ancrer sur la **syntaxe réelle**
(accolade ouvrante ou virgule précédant l'identifiant), jamais sur la mise en forme du fichier — le
retour à la ligne est une convention d'écriture, pas une structure. Corollaire de méthode : quand un
contrôle nouvellement écrit rougit massivement sur du code réputé sain, la première hypothèse est le
contrôle, pas le code. C'est ce que la preuve de morsure verrouille dans l'autre sens :
`scripts/fixtures/broken.html` prouve que la porte sait dire non.

**Applicable globalement ?** : Oui — cousin de la leçon globale du 9 juin 2026 (« prouver une
propriété structurelle par l'AST/la syntaxe, jamais par `grep` du mot »). À proposer en promotion au
chef de projet.

## 8 août 2026 — Un gabarit porte deux syntaxes de marqueur ; le contrôle n'en connaissait qu'une

**Type** : Erreur (relevée par le chef de projet)
**Contexte** : Instanciation de `.claude/` depuis `_TEMPLATE_AGENTS`. Le contrôle de fin
d'instanciation cherchait `<!-- BALISE -->` et a répondu « aucune balise restante ».

`land.md` contenait pourtant un second marqueur non substitué, `<manifeste-version>`, écrit en
**chevrons simples**. Le contrôle ne l'a pas vu, et la commande `/land` est partie en dépôt avec un
`git add <manifeste-version>` inexécutable — plus une ÉTAPE 4 qui nommait `pyproject.toml` ou
`package.json`, deux fichiers que ce projet n'a pas et **ne doit pas avoir**.

**Correction/Pattern** : trois règles.

1. **Un contrôle de substitution énumère toutes les syntaxes de marqueur du gabarit**, pas la plus
   visible. Ici : commentaire HTML **et** chevrons simples. Un contrôle vert sur une seule forme est
   un faux vert — il fabrique la confiance qu'il devrait mesurer.
2. **La seconde forme ne se tranche pas par expression régulière.** Sur ce gabarit, 13 marqueurs en
   chevrons subsistent légitimement (`<branche>`, `<slug>`, `<ISO>`, `<hash>`…) : ce sont des
   **paramètres d'exécution**, remplis quand la commande tourne. `<manifeste-version>` était d'une
   autre nature — une **valeur de projet**, connue dès l'instanciation. Le discriminant est
   sémantique : *cette valeur est-elle connue au moment où l'on instancie, ou seulement au moment où
   l'on exécute ?* Le contrôle **énumère et fait relire l'inventaire** ; il ne prétend pas juger seul.
3. **Un chemin prescrit par une commande se garde par une vérification d'existence.** `/land` écrit
   désormais le manifeste réel de ce projet (`VERSION`) et **s'arrête** s'il ne le trouve pas, au lieu
   d'en deviner un autre. Un manifeste absent est une anomalie de dépôt, pas un cas à rattraper.

**Applicable globalement ?** : Oui — tout écosystème à gabarits (kits d'agents, `cookiecutter`,
scaffolding, `.github` org-templates, snippets partagés). Cousine directe de la leçon globale du
15 juin 2026 (« faire évoluer le framework = modifier le TEMPLATE d'abord »), qu'elle complète par
l'aval : *la descente gabarit → instance a besoin d'un contrôle qui couvre toutes les formes de
marqueur, sinon la spécialisation est incomplète en silence.*

**Promue en global le 8 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Un gabarit porte plusieurs syntaxes de marqueur : le contrôle de substitution
doit toutes les couvrir, et la seconde forme ne se tranche pas par regex », avec l'empreinte `ea01e91`
de la présente jumelle locale.

> **Note de périmètre** : le gabarit du référentiel porte le même défaut aux deux endroits. Il n'a
> **pas** été touché — décision du chef de projet du 8 août 2026 : il sera corrigé séparément, dans
> son propre dépôt, par son propre rituel.

---

## 9 août 2026 — Une assertion posée sur un identifiant nu peut être satisfaite par un autre contrôle

**Type** : Erreur

**Contexte** : la porte `gate.sh` vérifie que le témoin défectueux échoue **en nommant** ses défauts,
et non seulement par son code de retour. Une revue a montré que 4 des 6 contrôles pouvaient mourir en
silence. Correction : une assertion par contrôle, chacune cherchant dans la sortie l'identifiant du
défaut semé — `only_fr` pour la symétrie, `dup_key` pour le doublon, etc.

**Erreur** : l'assertion `only_fr` était **vacueuse**. Contrôle de symétrie neutralisé en bac à
sable, la porte est restée **verte**. Cause : `only_fr` est aussi le nom d'une **clé orpheline**, que
le contrôle informatif annonce en `AVERTISSEMENT`. Le motif était satisfait par la sortie **d'un
autre contrôle**, non bloquant de surcroît. L'assertion censée fermer le trou de R1 le rouvrait —
même classe de défaut, dans sa propre correction.

**Correction/Pattern** : **une assertion de vivacité porte le MESSAGE PROPRE du contrôle qu'elle
prouve vivant, jamais un identifiant nu.** `presente en "fr" mais absente en "en" : only_fr`, pas
`only_fr`. Un identifiant circule — il apparaît dans les avertissements, les journaux, les messages
voisins. Une phrase d'erreur, elle, n'appartient qu'à un contrôle.

Corollaire de méthode : **une assertion ne se relit pas, elle se prouve.** Chacune des six a été
vérifiée en neutralisant son contrôle sur une copie hors dépôt (remplacement de `errors.push(` par
`[].push(` — no-op valide qui simule un contrôle *mort*, et non un fichier cassé qui se trahirait
par une exception). Sans cette épreuve, l'assertion vacueuse serait partie en production.

**Applicable globalement ?** : **Oui** — tout harnais de test qui asserte sur une sortie textuelle
(porte CI, contrôle de lint, test d'intégration lisant des journaux).

**Promue en global le 9 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Une assertion posée sur un identifiant nu peut être satisfaite par un autre
contrôle », avec l'empreinte `e092df8` de la présente jumelle locale. Geste porté par
`prompts/v0.2/CHORE_promotion-lecons-globales_v1.md`.

---

## 9 août 2026 — Une garde qu'on n'a pas vue mordre sur son défaut n'est pas une garde, c'est une croyance

**Type** : Erreur

**Contexte** : R2 signalait un angle mort — un balisage déséquilibré **gonfle** la couverture et vide
le contrôle en silence, là où les seuils de non-vacuité ne surveillent que le **manque**. La revue
proposait une condition précise : en fin d'extraction, erreur si la pile de balises n'est pas vide.

**Erreur** : la condition est plausible à la lecture, et **inopérante sur le scénario même qu'elle
vise**. `</body>` puis `</html>` referment tout, y compris la balise laissée ouverte : à la fin, la
pile **est** vide. Mesuré — un `<span data-i18n>` non fermé fait passer la page à **344 suites sur
344 « couvertes »**, le contrôle est mort, et la porte reste **verte** avec la garde en place. La
correction aurait été enregistrée, documentée, et parfaitement inutile.

**Correction/Pattern** : **avant d'adopter une correction de garde, la faire échouer sur le défaut
qu'elle prétend attraper.** Si elle ne rougit pas, elle ne corrige rien — quel que soit le sérieux de
qui l'a proposée, et quelle que soit sa cohérence apparente.

Deux compléments tirés du même incrément :

1. **Chercher le bon point d'observation.** Ici, le déséquilibre n'est visible qu'à l'instant du
   **dépilement multiple**, pas à la fin du parcours. Une garde placée au mauvais endroit peut être
   juste dans sa formulation et aveugle dans les faits.
2. **Mesurer les faux positifs AVANT de durcir.** Les trois cibles réelles comptaient 0 fermeture
   implicite et 0 fermeture orpheline : le durcissement ne coûtait rien au vert légitime. Sans ce
   relevé, on durcit à l'aveugle et on découvre la casse en production.

**Applicable globalement ?** : **Oui** — vaut pour toute garde, tout garde-fou de sécurité, toute
assertion défensive. Cousine directe de la leçon ci-dessus : l'une dit *prouve que ton assertion
détecte*, l'autre *prouve que ta garde attrape*.

**Promue en global le 9 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Une garde qu'on n'a pas vue mordre sur son défaut n'est pas une garde, c'est
une croyance », avec l'empreinte `e092df8` de la présente jumelle locale. Geste porté par
`prompts/v0.2/CHORE_promotion-lecons-globales_v1.md`.

---

## 9 août 2026 — Une assertion de vivacité se pose par chemin bloquant, pas par contrôle

**Type** : Erreur (relevée en revue)

**Contexte** : incrément « adresse de contact », 7ᵉ contrôle bloquant de `scripts/check-i18n.mjs`. Le
contrôle compare les trois occurrences de l'adresse dans la page, et une **garde de non-vacuité**
protège son extraction : chaque motif doit trouver exactement une occurrence, faute de quoi le
contrôle s'exécuterait sur du vide. `gate.sh` porte, depuis la revue du 9 août, la règle écrite dans
son propre commentaire : *tout nouveau contrôle bloquant ajoute ici son assertion, sinon il naîtra
invisible.*

**Erreur** : j'ai lu cette règle comme **une assertion par contrôle**, et j'en ai posé une — celle de
la divergence, semée dans le témoin défectueux. Or ce contrôle a **deux** chemins bloquants : la
comparaison, et la garde qui la rend possible. Le second n'était asserté nulle part.

Mesuré, pas déduit. Garde neutralisée (`errors.push(` → `[].push(` sur ce seul site), la porte reste
**verte**. Sur cette porte mutilée, j'ai composé la panne réelle : un remaniement anodin renomme la
classe `email-text`, la constante de `copyEmail()` reste sur l'ancienne adresse. Résultat : la page
affiche la nouvelle adresse, le bouton « Copier » place l'ancienne, **et la porte sort en code 0** —
c'est-à-dire exactement le mode de panne que ce contrôle venait d'être écrit pour fermer.

Aggravant : j'avais **documenté l'inverse** en décision de conception (« une seule branche, donc
aucune ne peut mourir sans que l'assertion s'en aperçoive »). L'affirmation était fausse et donnait
au lecteur une garantie qui n'existait pas.

**Correction/Pattern** : **compter les chemins qui peuvent pousser une erreur, pas les contrôles.**
Un contrôle qui protège son extraction par une garde en a au moins deux, et c'est **la garde** qui
meurt en silence — parce qu'une condition du type « si l'extraction a abouti » fait taire tout le
reste du contrôle sans rien signaler.

Deux compléments du même incident :

1. **La garde a besoin d'une cible où elle mord naturellement.** Ici, le témoin de cécité ne porte
   aucune adresse : la garde y tire ses erreurs à chaque exécution, l'ancrage est stable et gratuit.
   Chercher cette cible existante avant d'en fabriquer une.
2. **Une décision de conception écrite est une affirmation, donc elle s'éprouve comme le code.** La
   mienne a survécu à la spec, à l'implémentation et à mes propres tests parce que personne — moi le
   premier — n'a essayé de la faire mentir.

**Applicable globalement ?** : **Oui** — tout harnais de test dont un contrôle comporte une garde,
un préalable ou une condition de sortie anticipée (porte CI, règle de lint avec échappatoire, test
d'intégration qui saute quand une ressource manque). Raffinement direct de la leçon globale du
9 août 2026 (« une assertion posée sur un identifiant nu peut être satisfaite par un autre
contrôle ») : celle-ci disait *sur quoi* asseoir l'assertion, celle-là dit **combien** il en faut.

**Promue en global le 9 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Une assertion de vivacité se pose par chemin bloquant, pas par contrôle », avec
l'empreinte `90a84f4` de la présente jumelle locale. Registre global porté de 67 à **68 entrées** ;
les 403 lignes préexistantes vérifiées **intactes à l'identique** contre une copie prise avant
écriture. Geste validé dans le fil de la session — pas de prompt CHORE dédié, la promotion figurant à
l'inventaire fermé des gestes hors dépôt autorisés (entrée A-1).

---

## 10 août 2026 — Un témoin est lu en entier : son commentaire fait partie de la mesure

**Type** : Erreur

**Contexte** : incrément « vivacité du filet ». Trois témoins neufs devaient prouver qu'un contrôle
mord quand un jeton est **absent** de la page : la déclaration du dictionnaire (`const t = {`), les
blocs de langue (`fr: {`, `en: {`), et le compte des sites d'erreur de `check-i18n.mjs`.

**Erreur** : j'ai expliqué dans l'en-tête de chaque témoin ce qu'il ne devait pas contenir — **en
citant le jeton**. Le contrôle balaie le fichier entier : il a trouvé les jetons dans le commentaire.

Trois occurrences en une heure, toutes mesurées :

1. `dict-absent.html` — son commentaire citait la déclaration ; le contrôle a conclu que le
   dictionnaire existait, et le témoin a échoué sur le chemin **suivant** ;
2. `dict-malforme.html` — même cause, cité les deux repères de bloc de langue ;
3. `compte-divergent.mjs` — annonçait « DEUX sites » et en portait **trois**, le troisième étant dans
   la phrase qui les annonçait.

**Correction/Pattern** : **un fichier de test est de la donnée en entier — commentaires compris.**
Quand un témoin prouve une **absence**, il ne nomme jamais ce qui est absent : il le paraphrase.
Corollaire plus large, et c'est lui qui vaut : dès qu'un outil mesure par motif, tout ce qui est
lisible par lui est mesuré, y compris ce qu'on croyait n'écrire que pour un humain.

Le cas n° 3 mérite d'être retenu à part : un nombre déclaré dans un commentaire, faux **à cause du
commentaire lui-même**. C'est la maladie D-7 en miniature, apparue dans la minute où j'écrivais le
remède contre elle.

**Applicable globalement ?** : **Oui** — vaut pour toute assertion par motif sur un fichier :
`grep` en CI, règle de lint sur du source, détecteur de secret, test d'absence de chaîne, gabarit
vérifié par substitution.

**Promue en global le 10 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Un fichier de test est de la donnée en entier : son commentaire fait partie de
la mesure », avec l'empreinte `1c9e192` de la présente jumelle locale. Geste validé dans le fil de la
session — pas de prompt CHORE dédié, la promotion figurant à l'inventaire fermé des gestes hors dépôt
autorisés (entrée A-1).

---

## 10 août 2026 — Un chemin qui lit une ressource à chemin fixe est improuvable tant qu'on ne lui donne pas de couture

**Type** : Erreur (de conception, héritée)

**Contexte** : sur les sept chemins de `check-i18n.mjs` dont on a démontré qu'ils pouvaient mourir la
porte verte, **trois** venaient de la même famille — la liste blanche : fichier illisible, liste vide,
entrée sans motif. Réveiller les quatre autres a coûté une ligne à un témoin, ou rien du tout. Ces
trois-là ont coûté une **modification du code de production** : ouvrir une option `--allowlist=`.

**Erreur/Approche** : la liste blanche était lue à un chemin **fixe**, résolu depuis l'emplacement du
script. Rien ne permettait de la faire échouer sans déplacer le vrai fichier pendant l'exécution —
geste destructif, à écarter. Les trois chemins étaient donc **structurellement improuvables**, et pas
seulement « non assertés » : aucun témoin n'était constructible.

**Correction/Pattern** : **si un chemin bloquant lit une ressource, la source de cette ressource doit
être injectable.** Le précédent maison existait déjà et n'avait pas été généralisé : le budget de
largeur avait reçu son `--cadrage=` pour exactement cette raison, un mois plus tôt.

La règle de détection est simple et se pose **à l'écriture**, pas à la revue : *si je voulais faire
rougir ce chemin, quel fichier devrais-je casser ?* Si la réponse est « un fichier du dépôt », le
chemin n'est pas prouvable — il faut une couture avant de l'écrire.

Corollaire de méthode : **le coût de réveil d'un chemin mort est un signal de conception.** Un chemin
qui coûte cher à prouver est un chemin trop couplé à son environnement, jamais un chemin « difficile ».

**Applicable globalement ?** : **Oui** — injection de dépendance appliquée aux tests négatifs.
Fichier de configuration, variable d'environnement, chemin de schéma, point de terminaison distant :
tout ce qu'un contrôle lit sans pouvoir en changer la source rend ce contrôle improuvable.

**Promue en global le 10 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Un chemin qui lit une ressource à chemin fixe est improuvable, et le coût de
réveil est un signal de conception », avec l'empreinte `1c9e192` de la présente jumelle locale. Geste
validé dans le fil de la session — pas de prompt CHORE dédié, la promotion figurant à l'inventaire
fermé des gestes hors dépôt autorisés (entrée A-1).

> **Les deux promotions du 10 août ont été faites en un seul geste**, contre une copie de référence du
> registre global prise **avant** écriture : les **409 lignes préexistantes** vérifiées identiques à
> l'octet (même empreinte de tête), **0 ligne supprimée ou modifiée**, 12 ajoutées. Registre porté de
> **68 à 70 entrées**.

---

## 11 août 2026 — Un motif structurel ne qualifie pas un défaut : le fait métier tranche, et il n'est pas dans le code

**Type** : Erreur (correction du chef de projet)

**Contexte** : correctif D-14, qui supprimait un couplage réel — quatre étiquettes de section
empruntaient les clés de la barre de navigation, deux vocabulaires différents forcés dans une seule
clé. En inventoriant les couplages restants, `e4_title` est apparue **employée par deux blocs** de la
frise d'expérience : Groupe Prenant et Toyota France.

**Erreur** : j'ai qualifié ce partage de défaut, et l'ai inscrit au cadrage comme *« exactement le
couplage que D-14 vient de supprimer, encore vivant à trois lignes du code corrigé »*. L'agent de
revue avait conclu de même, **indépendamment**, à partir du même indice — ce qui m'a conforté.

Le chef de projet a répondu en une phrase : *« j'ai occupé le même poste »*. Les deux blocs portent le
même intitulé parce qu'il **est** le même. C'est une réutilisation légitime de libellé, de la famille
de `x64` ou `see_site`.

**Correction/Pattern** : **un motif structurel — une clé employée deux fois, une valeur dupliquée, une
constante partagée — établit une *possibilité* de divergence, jamais un défaut.** Ce qui fait le
défaut est que les deux emplacements doivent dire des choses **différentes**, et cela ne se lit ni
dans le code, ni dans le dictionnaire : c'est un fait du domaine.

Le discriminant, à poser avant de qualifier : *ces deux emplacements devraient-ils pouvoir diverger
un jour ?* Si oui, le partage est un couplage. Si non, c'est de la factorisation, et la supprimer
introduirait le vrai défaut — deux copies qui dérivent.

Trois compléments du même incident :

1. **Deux analyses indépendantes qui concordent ne valent pas preuve** quand elles partagent la
   **prémisse** manquante. La revue et moi n'avions ni l'une ni l'autre accès au fait métier ; notre
   accord ne mesurait que notre lecture commune du code. C'est la leçon du 8 août 2026 sur les deux
   sources fausses qui se confirment, rencontrée sur un autre objet.
2. **Un défaut voisin réel augmente le risque de faux positif.** Je venais de passer la journée sur un
   couplage authentique ; j'ai reconnu sa forme là où seul le motif se répétait. Le contexte récent
   rend le gabarit plus facile à appliquer, pas plus juste.
3. **Deux mesures de moi se contredisaient**, et j'allais arbitrer entre deux scripts. La lecture des
   **lignes brutes** a tranché en trois secondes : mon script de tableau était faux. Quand deux
   instruments divergent, aller à la source plutôt que départager les instruments.

**Applicable globalement ?** : **Oui** — toute revue de code, toute détection de duplication, tout
outil de qualité signalant un « code smell ». Constante partagée, table de correspondance réutilisée,
composant employé à deux endroits, colonne dénormalisée : la structure dit qu'ils *peuvent* diverger,
seul le domaine dit s'ils le *doivent*.

**Promue en global le 11 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Un motif structurel ne qualifie pas un défaut : le fait métier tranche, et il
n'est pas dans le code », avec l'empreinte `2ed140b` de la présente jumelle locale. Registre global
porté de **71 à 72 entrées** ; les **427 lignes préexistantes vérifiées intactes à l'octet** contre une
copie prise avant écriture (même empreinte de tête, 0 ligne supprimée ou modifiée, 6 ajoutées).

> **Note de rédaction.** L'entrée globale porte l'accent sur ce que la jumelle locale ne disait qu'en
> passant : **le signal d'alerte est l'accord**, pas le désaccord. Deux analyses indépendantes qui
> concordent ne mesurent que leur lecture commune de l'artefact — et quand la prémisse manquante lui
> est extérieure, leur concordance donne à l'erreur une force qu'elle n'aurait pas eue seule. C'est la
> part réutilisable ailleurs ; le cas de la clé partagée n'en est que l'occasion.

---

## 11 août 2026 — Un nombre reçu n'est pas plus mesuré qu'un nombre écrit : la source ne change pas son statut

**Type** : Erreur (relevée en revue)

**Contexte** : incrément « carte IBM i ». Son critère 6 exigeait que le compte de tirets cadratins de
la page **baisse**, et le prompt déclarait un point de départ : **151 hors commentaires**.

**Erreur** : j'ai voulu bien faire. J'ai mesuré, trouvé **153**, cherché l'écart, compris qu'il fallait
exclure aussi les commentaires JavaScript, retrouvé **151** — et écrit au chef de projet : *« le
chiffre du prompt est juste, c'est ma première lecture qui était trop étroite »*.

**J'avais reproduit son omission exacte.** Mon motif d'exclusion était ancré en **début de ligne**
(`^\s*//`) et ratait les **lignes de continuation d'un commentaire de bloc** ; l'une d'elles porte un
cadratin. Le compte juste est **150**. Les deux mesures concordaient parce qu'elles partageaient le
même angle mort — et j'ai appelé cette concordance une **vérification**.

**Correction/Pattern** : **la provenance d'un nombre ne dit rien de sa fiabilité.** Je mesure
scrupuleusement mes propres nombres et j'accorde un crédit gratuit à ceux qui arrivent dans un
document — prompt, cadrage, rapport de revue. Or un nombre reçu est exactement dans l'état d'un nombre
écrit : **déclaré**. C'est ce que D-7 nomme, appliqué à l'entrant plutôt qu'au sortant.

Deux compléments, et le second est le plus opératoire :

1. **Retrouver le nombre annoncé n'est une vérification que si l'on a changé de méthode.** Reproduire
   la mesure d'origine, même de bonne foi, ne teste rien — c'est la leçon du 8 août sur les deux
   sources qui partagent l'hypothèse fausse, rencontrée ici **en croyant faire l'inverse**.
2. **Un critère chiffré sans convention écrite n'est pas falsifiable.** Sur ce fichier, trois lectures
   également défendables donnent **153**, **150** et **139**. Tant que la règle de comptage n'est pas
   écrite, « le compte doit baisser » ne désigne aucun fait vérifiable — et c'est précisément ce flou
   qui a laissé mon erreur passer pour une confirmation.

**Applicable globalement ?** : **Oui** — tout seuil, budget, quota ou métrique reçu d'un document
plutôt que mesuré : taille de bundle, couverture de tests, temps de réponse, nombre de requêtes,
volume de données. Le geste : **re-dériver avec une méthode différente de celle qui a produit le
nombre**, et si la méthode d'origine n'est pas écrite, la faire écrire avant d'accepter le critère.

**Promue en global le 11 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Un nombre reçu n'est pas plus mesuré qu'un nombre écrit : la source ne change
pas son statut », avec l'empreinte `c1a1424` de la présente jumelle locale. Registre global porté de
**70 à 71 entrées** ; les **421 lignes préexistantes vérifiées intactes à l'octet** contre une copie
prise avant écriture (même empreinte de tête, 0 ligne supprimée ou modifiée, 6 ajoutées). Geste validé
dans le fil de la session — la promotion figure à l'inventaire fermé des gestes hors dépôt autorisés
(entrée A-1).

---

## 11 août 2026 — Un filtre qui trouve un cas ne mesure pas la famille : un balayage qui conclut à une absence porte son motif

**Type** : Erreur (relevée en revue)

**Contexte** : incrément « preuve IBM i ». Le critère P8 du prompt exigeait qu'aucun nom d'objet client
n'entre dans le texte **ajouté** — le dépôt est public, et le chef de projet venait de trancher cet
arbitrage de confidentialité. J'ai écrit le filet correspondant, puis je l'ai étendu à **toute la page**
pour vérifier qu'il ne ratait rien. Il a trouvé `VN_3EN1_DEMAT`, nom de code d'un projet Toyota,
affiché en clair — et, plus net encore, l'entrée de liste blanche qui le motive en toutes lettres :
`# nom de code d'un projet Toyota`. Trouvaille réelle, hors périmètre, remontée au Tech Lead sans y
toucher : c'était le bon geste.

**Erreur** : j'ai clos le paragraphe par **« rien d'autre de la même famille sur la page »**. Le motif
qui fondait cette phrase était `\b[A-Z][A-Z0-9]{3,}\b` — quatre majuscules ou plus, **sans
séparateur**. Il ne pouvait structurellement voir ni `HOME-SERVICE` (trait d'union), ni
`PICARD SURGELÉS` (deux mots), ni `MNM` (trois lettres). La revue en a trouvé **trois de plus**, dont
un de la famille stricte. Une dette ouverte sur la foi de ce paragraphe aurait été budgétée à **un**
repère pour au moins trois — et sur une propriété de **confidentialité**, pas de confort.

**Correction/Pattern** : **un balayage qui sert à établir une présence vaut par ce qu'il trouve ; un
balayage qui sert à établir une absence ne vaut que par la couverture de son motif.** Les deux usages
se ressemblent et n'ont pas la même exigence : le premier est confirmé par sa trouvaille, le second
n'est confirmé par rien — il faut démontrer que le motif couvre la famille, ce que le résultat ne dira
jamais.

Trois compléments :

1. **Le geste concret** : quand une phrase de livrable dit « rien d'autre », **écrire le motif à
   côté**. Le lecteur peut alors la réfuter en exhibant une forme que le motif ne pouvait pas voir —
   c'est-à-dire qu'elle devient falsifiable. Sans motif, « rien d'autre » n'est pas une mesure, c'est
   une impression.
2. **Le piège est amplifié par la trouvaille**, et c'est le plus contre-intuitif : c'est **parce que**
   le filtre a trouvé quelque chose de vrai que je lui ai accordé l'exhaustivité. Un filtre muet
   inspire la méfiance ; un filtre qui trouve inspire la confiance — exactement à l'envers de ce que
   sa couverture justifie.
3. **Même famille que D-15 dans ce projet** : un défaut systématique budgété au cas particulier. Là,
   « deux repères » pour sept commentaires faux ; ici, « un repère » pour deux familles. Deux fois la
   même mécanique, à trois jours d'intervalle.

**Applicable globalement ?** : **Oui** — tout balayage qui fonde une affirmation d'absence : audit de
secrets (`grep` de clés d'API avant publication), recherche d'usages avant suppression d'une fonction
ou d'une colonne, inventaire de dépendances vulnérables, revue de conformité, détection de données
personnelles. Le geste tient en une question : *quelle forme de la famille mon motif ne peut-il pas
voir ?* — à poser avant d'écrire la conclusion, pas après.

**Non promue en global à ce jour — la promotion appartient au Tech Lead.** Décision du chef de projet
du 11 août 2026.

**Ce qui s'est passé, et la trace reste parce qu'elle est instructive.** À la validation de la leçon,
j'ai appliqué la boucle d'auto-amélioration telle qu'elle est écrite dans mes règles globales :
écriture locale, puis promotion immédiate au registre global, la leçon remplissant deux critères de
promotion. **L'entrée a bien été écrite** dans `~/.claude/lessons.md` — en ajout seul, 72 → 73 entrées
— **puis retirée à la demande du chef de projet**, le circuit de ce projet réservant la proposition de
promotion au Tech Lead. Le registre a été **restauré à l'octet** : 433 lignes, 72 entrées, empreinte
`1dafa39…` identique à l'état d'avant écriture, vérifiée après retrait.

**La règle du projet, à retenir pour la prochaine fois** : la validation d'une leçon par le chef de
projet vaut pour le **registre local**. La promotion au registre global est **proposée par le Tech
Lead**, elle ne se déduit pas des critères d'universalité.

**Positionnement demandé par le chef de projet, à porter au `/land`** : cette leçon n'est **pas un
amendement** de celle du 8 août, mais une **entrée propre**. Celle du 8 août couvre le sens des **faux
positifs** — un indicateur mal choisi fabrique le défaut qu'il cherche. Celle-ci couvre le sens
**inverse** — une absence conclue à tort parce que le motif était plus étroit que la famille. **Les
deux directions ne se déduisent pas l'une de l'autre.**

---

## 12 août 2026 — Un vérificateur à qui l'on souffle la réponse ne vérifie pas ce qu'il croit vérifier

**Type** : Erreur

> **Où cette leçon a été apprise, et pourquoi elle est consignée ici.** Sur le chantier **hors dépôt**
> de la compétence `tunnel-apercu` (`~/.claude/skills/`), conduit dans la même session que
> l'incrément « preuve IBM i ». Ce chantier n'a **pas de registre à lui** ; la leçon est donc portée au
> registre local du projet sous lequel la session s'est déroulée, faute de meilleur endroit. **Sa
> promotion au registre global appartient au Tech Lead** — décision du chef de projet du 11 août 2026.

**Contexte** : la compétence devait afficher un QR code, et sa consigne l'exigeait **relu** avant
affichage : *« une image qu'on n'a pas décodée n'est pas un QR, c'est un carré »*. J'ai donc écrit un
encodeur QR en Python pur **et son relecteur**, qui reprend la matrice par l'autre bout — relit les
modules, retire le masque, désentrelace les blocs, vérifie les syndromes de Reed-Solomon, reconstitue
la chaîne. J'avais même écrit dans l'en-tête du fichier que ce relecteur prouvait la *cohérence
interne* et non la *conformité*, et qu'une erreur symétrique lui échapperait.

**Erreur** : mon relecteur recevait **le masque et la version en paramètres**. Il repassait au vert des
dizaines de fois — aller-retours exacts, accents compris, corruption détectée — sur un code que
**aucun téléphone ne pouvait lire**. Le défaut était le placement de l'information de format : les
quinze bits qui disent au lecteur quel masque a été appliqué. J'avais écrit le **miroir** de la
disposition normalisée — les neuf premiers bits le long de la ligne 8 au lieu de descendre la
colonne 8. Le code était parfaitement formé, parfaitement contrasté, et parfaitement illisible.

**Le relecteur ne pouvait pas voir ce défaut : on lui donnait précisément le renseignement que ce
défaut rendait introuvable.** Il vérifiait tout, sauf la seule chose qui était fausse. Et j'avais
annoncé le risque en toutes lettres sans voir que j'étais en train de le commettre.

**Correction/Pattern** : **un vérificateur ne reçoit que l'artefact.** Tout paramètre qu'on lui
transmet est une partie de l'artefact qu'il **cesse de tester** — et l'expérience dit que c'est
justement celle-là qui casse, parce qu'on la transmet quand elle est difficile à retrouver, donc
difficile à écrire, donc probablement mal écrite.

Trois compléments :

1. **Le geste** : le relecteur lit désormais **version et masque dans la matrice**. L'aller-retour
   teste alors le placement du format, et un format abîmé le fait rougir — éprouvé en retournant trois
   bits de chaque copie.
2. **Le symptôme à reconnaître** : *un contrôle vert et un résultat qui ne marche pas.* La question
   n'est pas « le contrôle est-il juste ? » mais **« qu'est-ce que le contrôle n'a pas eu à lire ? »**.
   La réponse est presque toujours dans ses paramètres.
3. **Ce qui a réellement tranché est extérieur au dispositif** : un scan par un téléphone réel. La
   consigne en faisait un critère d'acceptation, et elle avait raison de ne pas s'en remettre aux
   preuves internes.

**Applicable globalement ?** : **Oui** — tout vérificateur paramétré : un test qui reçoit la valeur
attendue calculée par le code testé, un comparateur de rendu à qui l'on passe la configuration ayant
servi au rendu, un validateur de schéma qui reçoit le schéma produit par le sérialiseur, un décodeur à
qui l'on donne l'encodage. Même famille que la leçon du 11 août sur les balayages qui concluent à une
absence : dans les deux cas le dispositif est vert **parce qu'il ne regarde pas là où ça casse**.

**Non promue en global à ce jour — la promotion appartient au Tech Lead.**
