# Journal — lianazel.github.io v0.2

> Ouvre le cycle v0.2. Le cycle précédent est dans `JOURNAL_v0.1.md`, clos par l'entrée
> « Parité linguistique complète (E-1) » qui a porté la version à 0.2.0.

---

## 9 août 2026 — Traçabilité de la promotion des deux leçons du 9 août

| | |
|---|---|
| **Type** | CHORE (documentation) |
| **Branche** | `chore/tracabilite-promotion` |
| **Fusion** | **`196ef89`** (`--no-ff`) — 2 fichiers, +127 / −2 |
| **Prompt pilote** | `prompts/v0.2/CHORE_promotion-lecons-globales_v1.md` |
| **Version** | **0.2.0 → 0.2.1** (patch : `chore/*`, aucun code touché) |

### Contexte

Les deux leçons enregistrées à la session 2 — « une assertion posée sur un identifiant nu peut être
satisfaite par un autre contrôle » et « une garde qu'on n'a pas vue mordre sur son défaut n'est pas
une garde, c'est une croyance » — ont été **promues au registre global** (`~/.claude/lessons.md`) le
même jour, par un prompt CHORE dédié. La promotion s'est faite en ajout seul : 65 entrées avant,
**67 après**, et les 391 lignes d'origine vérifiées intactes à l'identique contre une copie prise
avant écriture.

Ce prompt de promotion **interdisait explicitement de toucher un dépôt**. Il a donc laissé le lien
**à sens unique** : le registre global citait l'empreinte `e092df8`, mais les jumelles locales ne
disaient nulle part qu'elles étaient promues. Or la règle du référentiel veut que **les deux
fichiers se citent mutuellement** — c'est ce qui permet de remonter la piste dans les deux sens,
sans dépendre du titre, qui se reformule.

Le présent incrément solde cet écart.

### Contenu

- **`tasks/lessons.md`** — mention réciproque sur les deux jumelles, au format déjà en usage (celui
  de la leçon du 8 août), enrichi d'une seule information qui manquait : le prompt qui a porté le
  geste. Aucun second format concurrent introduit.
- **`prompts/v0.2/CHORE_promotion-lecons-globales_v1.md`** — versé au dépôt (§10), après relecture
  anti-secret : aucun jeton, aucun chemin machine, aucune adresse électronique.

Après cette passe, `tasks/lessons.md` ne porte **plus aucune** leçon marquée « candidate à
promotion » en attente : les trois leçons universelles du registre local sont promues et le disent.

### Filet de tests

| | |
|---|---|
| Porte sur `main` après fusion | **verte**, code 0 |
| Code touché | **aucun** — deux fichiers de documentation |
| Mesures du site | inchangées (342 suites, 188 couvertes) |
| Avertissements | 4, tous attendus (dette D-4) |

### Leçon

**Aucune enregistrée.** Une candidate a été identifiée et laissée à l'arbitrage du chef de projet
plutôt qu'écrite d'office : *un mandat qui borne le périmètre peut empêcher de tenir un invariant
qui, lui, traverse ce périmètre — le bon geste est alors de signaler l'écart dans le rapport, jamais
de le laisser implicite ni de sortir du mandat pour le corriger.* Elle est proche de la leçon
globale du 2026-08-01 sur les règles nées d'un incident, et mérite peut-être d'y être rattachée
plutôt que de vivre seule.

### Note de méthode — une ambiguïté du gabarit `/land`, rencontrée à l'exécution

L'ÉTAPE 7 prescrit `git add … tasks/JOURNAL_*.md …` **et**, deux lignes plus bas, « n'indexe AUCUN
fichier non-suivi ». Les deux clauses se contredisent dès qu'un incrément **ouvre** un fichier de
journal : `JOURNAL_v0.2.md` est nommé par le motif et non suivi par git.

Retenu ici : la liste explicite **autorise**, l'interdiction vise ce qui est **hors de cette liste**
— sinon le journal d'ouverture de cycle serait impossible à enregistrer, ce qui n'a pas de sens.
L'arbitrage est tracé ici plutôt que passé sous silence. C'est exactement la famille de la leçon
globale du 2026-08-07 (« désarmer une clause ne désarme pas celles qui la citent ») : deux lignes du
même gabarit portent la même notion, une seule a été pensée pour ce cas. **À corriger dans le
gabarit source**, pas dans l'instance de ce projet — leçon globale du 2026-06-15.

---

## 9 août 2026 — Adresse de contact et 7ᵉ contrôle de cohérence (session 4)

| | |
|---|---|
| **Type** | EVOL (produit + outillage) |
| **Branche** | `feat/adresse-contact` — 3 enregistrements |
| **Fusion** | **`07f9f3e`** (`--no-ff`) — 8 fichiers, +337 / −24 |
| **Prompt pilote** | `prompts/v0.2/EVOL_adresse-contact_v1.md` |
| **Version** | **0.2.1 → 0.3.0** (minor : `feat/*`, et le produit change réellement) |
| **Feuille de route** | hors liste — demande directe du chef de projet, ne solde aucun item E-1/E-2/E-3 |

### Contexte

Le chef de projet change d'adresse de contact. Ce n'est **pas un correctif** : l'ancienne fonctionnait.
Le prompt demandait donc deux choses — le remplacement, et une porte qui **empêche mécaniquement** qu'un
remplacement futur en oublie une occurrence.

Le mode de panne visé n'est pas « le site casse ». Il est **silencieux** : la page affiche la nouvelle
adresse pendant que le bouton « Copier » place l'ancienne. Le rendu est parfaitement normal, le visiteur
colle une adresse morte, et personne ne l'apprend jamais.

### Contenu

**Quatre occurrences remplacées** — le lien `mailto:`, le texte affiché et la constante de `copyEmail()`
dans `index.html`, plus l'entrée de la liste blanche (commentaire conservé, il reste vrai). Vérifié après
coup : plus aucune trace de l'ancienne adresse au dépôt, hors le prompt qui documente le changement.

**Contrôle 7** — les trois occurrences de la page doivent concorder. Il **ne connaît aucune adresse en
dur** : il les compare entre elles. Une porte qui contiendrait la valeur attendue deviendrait fausse au
prochain changement, c'est-à-dire exactement le défaut qu'elle prévient. Ancrage sur la syntaxe réelle —
`href="mailto:…"`, jeton de classe `email-text`, `const email = '…'` — jamais sur la mise en forme.

**Preuve de morsure** : défaut n° 7 semé dans `broken.html` (lien et texte divergents), assertion
correspondante dans `gate.sh`, compte du bloc porté de six à sept.

**Une décision de conception mesurée plutôt que supposée.** La garde de non-vacuité du contrôle 7 ne
partage pas le marqueur `AVEUGLE` des autres gardes. Vérifié en bac à sable (E2) : avec un marqueur
commun, les erreurs du contrôle 7 sur `blind.html` **satisfont seules** l'assertion du bloc 2/3, et la
porte reste **verte** alors que la garde de cécité est morte. L'expérience témoin E3, tout le reste égal,
la fait rougir. C'est la leçon du 9 août rencontrée **par anticipation**, et non après coup.

### Revue — verdict `NEEDS WORK`, sept réserves

**R1 est le fait marquant de cet incrément, et elle porte sur mon propre travail de durcissement.**

J'avais lu la règle de `gate.sh` — *« tout nouveau contrôle bloquant ajoute ici son assertion »* — comme
**une assertion par contrôle**, et n'en avais posé qu'une. Or le contrôle 7 a **deux** chemins bloquants :
la comparaison, et la garde de non-vacuité qui la rend possible. Reproduit avant d'être accepté : garde
neutralisée, la porte reste **verte**. Et sur cette porte mutilée, la panne réelle passe sans un bruit —
classe `email-text` renommée, constante restée sur l'ancienne adresse, **la page affiche la nouvelle
adresse, le bouton « Copier » place l'ancienne, code de sortie 0**. Le mode de panne que ce contrôle
venait d'être écrit pour fermer était rentré par la fenêtre.

Aggravant : j'avais **documenté l'inverse** en décision de conception (« une seule branche, donc aucune
ne peut mourir sans qu'on s'en aperçoive »). Affirmation fausse, corrigée à sa source dans le code, et
signalée comme telle plutôt que réécrite en silence.

**Fermée** par une seconde assertion dans le bloc 2/3, ancrée sur `blind.html` qui ne porte aucune
adresse — la garde y tire ses erreurs à chaque exécution. Épreuve E4 : garde neutralisée → rouge, code
sain → vert.

**R4** — trois affirmations périmées par mon propre incrément (`blind.html` « sain sur tous les autres
contrôles », le même énoncé dans le §6 du cadrage, et le compte de suites du témoin défectueux : « sept »
au lieu de **dix**). Corrigées. Le §6 dit désormais aussi **pourquoi** l'absence d'adresse dans
`blind.html` est structurante, avec l'avertissement de ne pas la « réparer ».

**R5** — au moment de la revue, rien n'était enregistré : six fichiers modifiés vivaient dans un arbre de
travail non sauvegardé. Fermée par la passation.

### Filet de tests

| | |
|---|---|
| Porte sur `main` après fusion | **verte**, code 0 |
| Contrôles bloquants | **7** (complétude, symétrie, doublon, ancres, attribut vide, couverture, **cohérence de l'adresse**) |
| Assertions de vivacité | **8** — le contrôle 7 en porte deux : sa divergence en 1/3, sa garde en 2/3 |
| Épreuves en bac à sable | **5** (E1, E2 contrefactuel, E3 témoin, R0 reproduction de la réserve, E4) |
| Mesures du site | **inchangées** — 342 suites, 188 couvertes, 104 termes |
| Avertissements | 4, tous attendus (dette D-4) |

### Leçon

**Une enregistrée et promue le jour même** : *une assertion de vivacité se pose par **chemin bloquant**,
pas par contrôle.* Un contrôle qui protège son extraction par une garde en compte au moins deux, et c'est
la garde qui meurt en silence — une condition du type « si l'extraction a abouti » fait taire tout le
reste sans rien signaler. Promue en global le 9 août 2026 (67 → 68 entrées, ajout seul, 403 lignes
préexistantes vérifiées intactes), empreinte `90a84f4` de la jumelle locale ; mention réciproque en
`e54a276`. Les deux moitiés sont parties ensemble — l'écart que la session 3 avait dû solder après coup
ne s'est pas reproduit.

Second enseignement, non érigé en leçon distincte car il est le point (5) de la précédente : **une
décision de conception écrite est une affirmation, donc elle s'éprouve comme du code.** La mienne a
traversé la spécification, l'implémentation et mes propres tests parce que personne — moi le premier —
n'a essayé de la faire mentir.

### Reste ouvert — trois décisions du chef de projet

1. **R2 — la plus importante, et elle est portée ici parce que `.pipeline/` disparaît à la fusion.**
   L'assertion du bloc 2/3 repose sur le marqueur **partagé** `AVEUGLE`, c'est-à-dire sur un identifiant
   nu au sens de la leçon du 9 août. La décision de cet incrément (donner au contrôle 7 sa propre voix)
   traite le symptôme : elle demande aux **futures** gardes de ne pas s'approcher du marqueur, mais rien
   ne les en empêche — et `const BLIND` est exposée dans le fichier, invitant à sa réutilisation.
   L'agent a **mesuré** que remplacer `*AVEUGLE*` par la phrase propre de la garde du texte visible
   (**deux lignes**) supprime le danger mécaniquement. Non fait : les deux issues proposées — ce
   correctif, ou une entrée D-7 au §8 du cadrage — sortent **toutes deux** du mandat de ce prompt.
   Signalé plutôt que corrigé hors mandat, conformément à l'arbitrage de la session 3. **À trancher :
   « ni l'un ni l'autre » laisse une règle non gardée dans le cadrage.**
2. **R3** — la garde exige « exactement une » occurrence par source, forme imposée par le §2.2.2 du
   prompt. Conséquence mesurée : ajouter un second lien `mailto:` en pied de page, avec la **même**
   adresse, fait rougir la porte. L'alternative proposée — *au moins une par source, et toutes
   concordantes* — conserve la propriété anti-cécité, supprime le faux positif et **élargit** la
   couverture. Changer la règle de la porte demande son prompt.
3. **R6** — le motif d'ancrage du texte affiché ne respecte pas les guillemets d'attribut ; la porte
   mord mais nomme mal. Le motif correct existe déjà dans le fichier (`TAG`) et n'a pas été réemployé.
   Sévérité faible, aucun risque de cécité. Durcissement, donc évolution.

### Validation humaine due avant publication (session 4)

L'adresse passe de **20 à 25 caractères**, en police à chasse fixe, dans une pastille `inline-flex` sans
`flex-wrap`, sans `max-width`, sans `word-break`, dont le `padding:3rem` n'est réduit par aucune règle
sous 600 px. **Rien dans ce projet ne détecte un débordement** (dette D-1), et une mesure faite hors
Windows serait fausse (dette D-5). **La pastille de contact doit être regardée à l'œil entre 320 et
360 px de large.** À vérifier aussi en situation réelle : que le bouton « Copier » place bien la nouvelle
adresse — la porte prouve la concordance dans la source, pas le comportement du navigateur.

---

## 9 août 2026 — Budget de largeur sur petit écran (session 5)

| | |
|---|---|
| **Type** | CORRECTIF (`/fix`), fondé sur diagnostic |
| **Branche** | `fix/budget-largeur-mobile` — 1 enregistrement |
| **Fusion** | **`8687284`** (`--no-ff`) — 12 fichiers |
| **Diagnostic** | `AUDIT_pastille-contact_v1.md` → `RAPPORT_DIAGNOSTIC_pastille-contact_v1.md` |
| **Prompt pilote** | `prompts/v0.3/CORRECTIF_budget-largeur-mobile_v2.md` (la v1 est périmée) |
| **Version** | **0.3.0 → 0.3.1** (patch : `fix/*`) |
| **Feuille de route** | solde **C-1** ; entame le remboursement de **D-2** |

### Le défaut, et sa vraie cause

Signalé à la clôture de la session 4 comme point de validation humaine, confirmé le jour même par le
chef de projet sur le site publié : la pastille de contact **sortait de sa carte sur tout téléphone en
portrait**. Le diagnostic a montré que l'allongement de l'adresse n'en était pas la cause — **162 px
sur 320, la moitié de l'écran, partaient en rembourrage constant de 320 à 1 100 px**, laissant 158 px
utiles là où la pastille en réclamait 290 au minimum. Le seuil de tenue était déjà hors d'atteinte de
tout téléphone **avant** l'incrément de la session 4.

Diagnostic conduit **sans navigateur ni dépendance**, par lecture des règles et modèle arithmétique à
deux bornes de police. Il a aussi trouvé que la pastille n'était pas un cas isolé.

### Ce que l'incrément pose

**Petit écran d'abord, première tranche de D-2** : les rembourrages de `section` et `.contact-card`
prennent leurs valeurs **téléphone** en base, élargies par une règle en `min-width` — le premier bloc
de ce projet écrit dans le bon sens. Place utile portée de **158 à 254 px**. Les deux règles
historiques en `max-width` restent intactes : la dette se rembourse par tranches.

**La pastille se replie** : le bouton passe sous l'adresse quand la place manque. **L'adresse ne se
coupe jamais** — coupée au milieu d'un domaine, elle se recopie mal, ce serait pire que le défaut
corrigé.

**Le plancher de la grille de compétences** est borné par la place disponible, dans la déclaration
plutôt qu'à un point de rupture : vaut à toute largeur, y compris sous 320 px.

**Contrôle 8** — l'adresse **seule**, atome insécable du bloc puisque le bouton peut désormais se
replier, doit tenir dans le budget écrit au §9 du cadrage. Le budget est **lu** là-bas, jamais
recopié : une valeur écrite à deux endroits finit par diverger.

Ce choix a créé une **garde de lisibilité**, donc un chemin bloquant de plus, qu'aucun témoin existant
ne faisait mordre — elle serait née invisible. D'où un **troisième témoin** (`cadrage-sans-budget.md`)
et une **quatrième étape** de porte. C'est la leçon de la session 4 appliquée **avant** la revue.

### Revue — verdict `NEEDS WORK`, huit réserves

**R1 est le fait marquant, et elle porte sur ce que le correctif prétend garantir.** Reproduite avant
d'être acceptée : **correctif CSS annulé à 100 %, la porte reste verte** et continue d'annoncer
« 254 px disponibles » quand la place réelle est retombée à 158. Le budget est un **contrat déclaré,
jamais un fait mesuré** — le contrôle 8 ferme la cause *aggravante* (un contenu qui s'allonge) et pas
la cause *dominante* C1 (un rembourrage qui régresse).

Traitée en documentation, le durcissement relevant d'un `/ship` : **dette D-7** créée, §9 complété, et
la formule « le script ne peut donc pas les contredire » — qui se lisait comme une garantie —
remplacée. L'impossibilité de contredire est précisément ce qui rend le nombre invérifiable.

**R4** a rappelé qu'une décision doit être appliquée entièrement : en mettant le §6 à jour, j'avais
laissé **D-2 annoncer « deux règles » alors que j'en ajoutais une troisième**. R2, R5, R6 et R7
soldées ; **R8** portée au chef de projet, le fichier visé étant du Tech Lead.

### Filet de tests

| | |
|---|---|
| Porte sur `main` après fusion | **verte**, code 0 |
| Étapes | **4** — trois témoins éprouvés avant le site |
| Contrôles bloquants | **8** |
| Chemins bloquants / assertions | **11 / 11**, toutes prouvées vivantes |
| Épreuves en bac à sable | 5 (E5, E6, R0 de la revue, R5, mutation A) |
| Mesures i18n | inchangées — 342 suites, 188 couvertes, 104 termes |

### Validation humaine — faite, et elle a rapporté

Le chef de projet a validé à 320 px, dans les deux langues, captures à l'appui. **La pastille repliée
tient** : adresse sur une ligne, bouton en dessous, dans la carte. **Les cartes de compétences
tiennent.** Hero et Expérience sans débordement.

### ⚠️ Le cas B n'est plus une prédiction — constaté le 9 août 2026

Le diagnostic avait relevé trois constructions de la même famille : le cas **A** (grille de
compétences, certain — **corrigé ici**), le cas **B** (`nav ul`, **prédit sans être constaté**) et le
cas **C** (cas limites, sans conclusion). Le rapport insistait : *« il mérite une vérification humaine,
pas une correction sur ma parole »*, et le prompt a suivi cette prudence en le mettant hors périmètre.

**La validation visuelle l'a constaté.** À 320 px, **en français**, le lien `Contact` de la barre de
navigation est **coupé** : la barre affiche `Compétences Expérience Projets Conta…`. En **anglais**,
`Skills Experience Projects Contact` passe sans problème — les libellés y sont plus courts.

Deux choses que le modèle n'avait pas su dire, et que l'œil a données : le défaut est **réel**, et il
est **propre à la version française**.

- **Cause** : `nav ul { display:flex; gap:1.5rem }` **sans `flex-wrap`**, quatre libellés insécables.
  La règle `max-width:600px` resserre les rembourrages de `nav` mais ne touche **ni** l'espacement
  **ni** la taille des liens.
- **Non régressif** : vérifié, cet incrément ne touche aucune règle de `nav` — la seule occurrence du
  mot dans son différentiel est un commentaire. Le défaut est **antérieur**.
- **Hors mandat, à dessein** : le prompt disait « n'y touche pas », ce bloc étant refondu par **E-2**.
- **À traiter dans E-2**, qui pose précisément un menu de débordement — le cas B est l'argument le plus
  concret en faveur de cet incrément, et il vaut désormais **constat**, plus prédiction.

### Reste non observé

L'état transitoire « Copié ! » / « Copied! » (deux secondes), la **traversée du seuil à 600 px** dans
les deux sens, et le **contraste de rembourrage avec le Hero** — qui conserve 32 px sous spécificité
d'identifiant quand les sections passent à 16. Aucun n'est inquiétant ; aucun n'est validé.

### Leçon

**Aucune enregistrée.** L'incrément a *appliqué* la leçon de la session 4 (une assertion par chemin
bloquant) plutôt que d'en produire une nouvelle : la garde du budget a reçu son témoin avant que la
revue ne la réclame. Une candidate a été identifiée et laissée à l'arbitrage : *une porte qui compare
un contenu à un nombre **déclaré** protège le contenu, jamais la mise en page dont ce nombre dérive —
tant que la source du fait n'est pas lue, la garantie est une convention.* Elle est proche de la leçon
globale du 2026-08-05 sur le vert muet, et mérite peut-être d'y être rattachée plutôt que de vivre
seule. C'est aussi exactement ce que **D-7** décrit.

---

## 9-10 août 2026 — Menu de débordement de la barre de navigation (session 6, E-2a)

| | |
|---|---|
| **Type** | EVOL (produit + outillage) |
| **Branche** | `feat/menu-debordement` — 2 enregistrements, à dessein séparés |
| **Fusion** | **`0cd0f18`** (`--no-ff`) — 14 fichiers, +1221 / −50 |
| **Prompt pilote** | `prompts/v0.3/EVOL_menu-debordement_v3.md` (v1 et v2 périmées, bandeau à l'appui) |
| **Version** | **0.3.1 → 0.4.0** (minor : `feat/*`, le produit change réellement) |
| **Feuille de route** | solde **E-2a** ; seconde tranche de **D-2** |

### Le défaut, et ce que la capture a ajouté au modèle

Le diagnostic du 9 août avait **prédit** un débordement de `nav ul` sans le constater — cas B — et
avait eu la prudence de le dire : *« il mérite une vérification humaine, pas une correction sur ma
parole »*. La capture du chef de projet l'a fait passer à **constaté**, et a livré ce que le modèle
n'avait pas su donner : **le défaut est propre au français**. `Compétences Expérience Projets Conta…`
en français, la barre passe en anglais — les libellés y sont plus courts.

### Ce que l'incrément pose

**Un menu de débordement par place réelle**, jamais par nombre fixe d'entrées : un seuil du type
« sous 600 px on masque trois entrées » deviendrait faux au premier libellé ajouté ou traduit.
L'ordre de priorité **fait foi au §9 du cadrage**, le balisage le porte, le programme ne le
redéclare pas — Projets part en dernier, Contact en premier, déjà redondant.

**Le patron `UX_METHOD` §3.7 appliqué tel quel** : un seul booléen, dont `renderMenu()` dérive l'icône
*et* l'état d'accessibilité ; `menuAria()` en fonction pure ; deux tracés SVG incorporés ; `Échap` qui
referme et rend le focus ; panneau en flux sans JavaScript.

**Le piège du bouton de langue, fermé avant qu'il ne morde.** Son libellé était piloté **deux fois** —
attribut de traduction et écriture directe. Idempotent tant que les deux disaient la même chose, et
faux dès que ce libellé varie : ce que cet incrément fait justement. L'écriture directe a disparu.
Le bouton **ne disparaît jamais, il rétrécit** — la langue n'est pas un réglage, c'est la condition
pour lire quoi que ce soit, et cette raison est désormais écrite au cadrage.

**Seconde tranche de D-2** : la règle d'adaptation de la barre est passée en largeur minimale. Il ne
reste que la grille de projets.

### Un invariant corrigé avant d'être implémenté

Le §2.5 de la v2 exigeait que **la somme** des libellés tienne dans la place disponible. C'est
l'invariant d'**avant** le menu : une fois le débordement en place, les entrées qui ne tiennent pas
quittent la barre. Mesuré avant d'écrire une ligne — **374 px en français, 340 en anglais, pour 288
disponibles** : le contrôle aurait été **rouge dans les deux langues sur du code correct**, et rouge
encore après le correctif, puisque celui-ci ne raccourcit pas les libellés, il les déplace.

Le rédacteur a corrigé en v3 : l'invariant devient **« le libellé le plus long tient dans le panneau »**.
C'est la **seconde fois dans la même journée** qu'une garde était spécifiée contre une propriété que le
changement ordonné rendait caduque — la première fut la pastille autorisée à se replier. Le motif est
identique, et il est noté.

### Filet de tests

| | |
|---|---|
| Porte sur `main` après fusion | **verte**, code 0 |
| Contrôles bloquants | **9** · gardes de non-vacuité : **4** · assertions : **13** |
| Épreuves de vivacité | E8 (mesure) et E9 (garde) — toutes deux vues mordre |
| Témoins | 3, `blind.html` **non touché** : c'est son absence d'entrées qui rend la garde prouvable |

### Revue — `NEEDS WORK` de l'agent, `SHIP` du Tech Lead sous trois conditions

L'agent a rendu douze réserves ; le Tech Lead a tranché **SHIP** après avoir revérifié E8/E9 de façon
indépendante. Trois conditions, toutes tenues : **commit séparé** pour le champ `Statut` des prompts —
chantier distinct, différentiel lisible —, et **inscription au cadrage de deux constats mesurés**.

**D-8, et elle est bloquante pour E-2b.** Reproduite avant d'être acceptée : une entrée ajoutée **sans**
`data-nav-priority` sort de la mesure — **380 px exigés pour 281 déclarés, porte verte, code 0** — et
met un `NaN` dans le tri, que la comparaison traite comme « égal ». L'ordre de retrait redevient celui
du document : **Projets quitterait la barre avant Contact**, l'inverse exact du tableau du §9. Un seul
attribut oublié éteint la garde *et* inverse la priorité. Or E-2b consiste précisément à ajouter des
entrées de navigation.

**D-9** — la lecture du budget exige deux valeurs et en consomme trois : un §9 amputé fait rougir la
porte sur « contrôle mort ? », mauvais diagnostic. **D-11** — l'observateur surveille l'élément que son
rappel redimensionne, et **sans JavaScript à 320 px les liens sont rognés, pas débordés** : ma
formulation « inoffensif » était optimiste.

**D-10, ajoutée sur autorisation du chef de projet, et elle corrige une phrase de moi.** J'avais écrit
« 13 chemins bloquants, 13 assertions ». Mesuré : **21 sites d'erreur pour 13 assertions**, et **six
chemins vus mourir porte verte** — dont la symétrie EN→FR, clé retirée du bloc français, porte restée
verte. L'état **précède** cet incrément et n'a pas été aggravé par lui ; mais l'énoncé faux, lui, était
dans la source de vérité.

**Un chiffre également corrigé** : le §9 annonçait 288 px de panneau en affirmant qu'il n'ajoutait aucun
rembourrage latéral. Faux de 6,4 px — `.nav-panel a` porte `padding:.7rem .2rem`. Budget porté à
**281 px**, longueur admissible de 33 à 32 caractères. Sans effet sur le verdict, mais D-7 enseigne
précisément qu'un nombre déclaré doit être vrai.

### Leçon

**Aucune enregistrée.** L'incrément a surtout *appliqué* les leçons des sessions précédentes — une
assertion par chemin bloquant, la garde qui reçoit son témoin avant que la revue ne la réclame, la
spécification confrontée à la mesure avant l'implémentation.

Une candidate est laissée à l'arbitrage : *une garde qui découvre son périmètre par un attribut du
balisage ne garde que ce que cet attribut désigne — l'oubli de l'attribut est alors indistinguable de
l'absence de défaut, et la garde s'éteint dans le geste même qu'elle devait surveiller.* C'est D-8
énoncée en règle, et elle est proche de la leçon globale du 9 août sur les chemins bloquants.

### Validation humaine due avant publication

Rien de ce qui suit n'est prouvé — c'est l'incrément le plus exposé au défaut visuel de la feuille de
route, et `VISION_METHOD` n'est toujours pas instancié (**D-1**) :

- **ouverture et fermeture du menu** à 320, 360 et 375 px, **dans les deux langues** ;
- **franchissement du seuil dans les deux sens**, moment où les entrées entrent et sortent de la barre ;
- **bouton de langue rétréci**, et **bascule effectuée depuis lui** — le chemin le plus profondément
  modifié : trois `<span>` au lieu d'un texte, et l'écriture directe supprimée ;
- **cible tactile** du bouton à trois barres — un doigt fait environ 45 px ;
- **clavier** : ouverture, `Échap`, retour du focus au bouton ;
- **ordre d'effacement** : Contact d'abord, Projets en dernier.

**Signalé plutôt que tu** : la transition du panneau ne joue pas à l'apparition, le passage par
`display` ne s'animant pas. L'ouverture est sèche. Aucune propriété de mise en page n'est animée, comme
le §3.6 l'exige, mais l'effet est plus abrupt que ce que « animation » laisse attendre.

---

## 10 août 2026 — La barre tient sur une rangée sur téléphone (session 7)

| | |
|---|---|
| **Type** | CORRECTIF (`/fix`), fondé sur un relevé de rendu |
| **Branche** | `fix/barre-mobile` — 2 enregistrements |
| **Fusion** | **`16dd3fb`** (`--no-ff`) |
| **Prompt pilote** | `prompts/v0.4/CORRECTIF_barre-mobile_v1.md` |
| **Version** | **0.4.0 → 0.4.1** (patch : `fix/*`) |

### Le défaut, et pourquoi la porte ne pouvait pas le voir

E-2a avait livré un menu de débordement qui **ne s'armait à aucune largeur de téléphone réel**. Deux
causes, toutes deux mesurées par le Tech Lead dans un navigateur, corroborées sur un iPhone 14 Pro Max.

**Le signal ne pouvait pas voir un retour à la ligne.** `nav` avait le droit de passer à la ligne : la
liste des liens y descendait et retrouvait sa largeur naturelle. `scrollWidth` **égalait** `clientWidth`
de 360 à 601 px. `layoutNav()` ne voyait donc structurellement **aucun** débordement. *Une barre qui
passe à la ligne n'est plus une barre — c'était ça, le défaut.*

**Le socle ne rétrécissait jamais** : 404 px pour 288 disponibles à 320, soit **116 px de trop** avant
le moindre lien. Le menu agissait sur les 327 px des liens pendant que le terme dominant était ailleurs.

> **Le prompt reconnaît que la proposition écartée était la bonne.** À la session 6, j'avais proposé de
> garder aussi « le socle irréductible de la barre » ; le Tech Lead l'avait refusé au motif que la barre
> a le droit de passer à la ligne. La prémisse était juste, la conclusion inverse de ce qu'elle aurait
> dû être. C'est écrit dans son §1, et ça mérite d'être noté.

### Ce que l'incrément pose

`flex-wrap:nowrap` en base · **variante V1** : logo, séparateur et localisation masqués sous le seuil,
le nom reste — l'identité tombe de 240 à 156 px · identité **non compressible**, liste des liens seule
compressible · **seuil porté à 602 px**, imposé par la mesure : à 601 en régime riche la barre passe à
deux rangées · rembourrage et espacement resserrés, **32 px libérés** pour 25 manquants.

### La mesure du rendu — une première, et ce qu'elle est

Le chef de projet a **autorisé la mesure**, à quatre conditions : mesurer sans juger, sur le fichier
local de la branche, sans rien installer ni versionner, aux largeurs prescrites et dans les deux
langues. Toutes tenues — serveur éphémère arrêté, instrumentation supprimée, arbre vérifié.

**C'est une béquille, pas une barrière** : rien ne s'exécute au `/ship`, rien ne rougira demain. Elle
porte un nom, **D-1**, qui gagne ici son **incident daté**.

### Revue — `BLOCK`, et la réserve était fondée

L'agent a exercé son veto sur une régression **que j'avais introduite** : `flex-wrap:nowrap` retirait au
panneau du menu sa rangée sans lui en donner d'autre. Reproduit avant acceptation — à 320 px, menu
ouvert, panneau à `x=312`, **8 px visibles sur 98**, barre passant de 65 à 200 px.

**Je ne l'avais pas vue parce que je n'avais mesuré qu'un seul des deux états du composant.** J'avais
écrit « l'ouverture et la fermeture — inchangées par ce correctif » : une affirmation présentée comme
une mesure, et fausse. C'est la faute même que ce correctif répare, commise dans une autre dimension.

**Voie A** : le panneau sort du flux. Remesuré dans les deux états et les deux langues — pleine largeur
sous la barre, barre stable à 65 px, le lien restant ne disparaît plus, et **la cause de D-11a s'éteint**.

**R-2 ne s'est pas reproduite** (le bouton se comprime à 42 px, pas 46) mais a mis au jour un fait réel :
la cible tactile est **réduite de 4 px**. **D-5 acquittée** : `Segoe UI` prouvée résolue par mesure
différentielle. **Budget du panneau re-dérivé**, 281 → **289 px** — un nombre déclaré doit être vrai,
pas seulement prudent.

### Le relevé indépendant du Tech Lead, et les trois écritures qu'il a demandées

Relevé sur `e25a304` — deux états, dix largeurs, deux langues : **conforme**. Panneau pleine largeur
partout, barre stable, hero non recouvert.

**Les 320 px portent désormais leurs deux bornes.** Sous Windows avec `Segoe UI` résolue : 7 px de
marge — ma mesure. En police de repli, donc **sur tout téléphone réel** : **5 px de débordement** du
bouton de langue, dans les deux langues — la sienne. Je ne détenais qu'une borne ; le §9 aurait dit vrai
sur mon poste et faux partout ailleurs.

**L'énumération des six états** entre au §9 : menu fermé/ouvert, langue fr/en, pointeur fin/grossier —
trois axes, huit combinaisons — plus deux conditions à part, avec/sans JavaScript et le régime. Avec ce
que la campagne a couvert **et ce qu'elle n'a pas couvert** : sans JavaScript, le clavier, Safari iOS.
C'est cette liste qui rendra la prochaine campagne **falsifiable**.

**D-12**, mesurée deux fois indépendamment : de 602 à 900 px au moins, la barre occupe **deux rangées**
(114 px contre 65), dans les deux langues. Préexistante, hors mandat — mais c'est **le défaut visible
qui reste**, et **E-2b l'aggravera**. À trancher avant lui.

**R-3 entériné** : la colonne « liens restants » du §3.3 était descriptive, pas normative. Seuls « une
rangée » et « zéro débordement » descendent au §9.

### Leçon

**Écrite des deux côtés, indépendamment, avant lecture croisée** — et c'est ce qui la valide :
*déclarer un comportement « inchangé » est une affirmation, pas une mesure ; un composant à états ne se
mesure jamais dans un seul de ses états.* Le Tech Lead l'a portée au carnet du référentiel sous
**RD-043**. La part qui m'en revient est l'énumération : c'est elle qui rend une campagne falsifiable,
parce qu'elle dit ce qui **n'a pas** été couvert.

### Validation humaine due

L'aspect de la barre réduite — sans logo ni localisation · la rupture 601 → 602 · le **clavier**,
jamais validé depuis E-2a · **Safari iOS**, toutes mes mesures venant d'un moteur Chromium.

---

## 10 août 2026 — La leçon du cache, inscrite au §10 (session 8)

| | |
|---|---|
| **Type** | CHORE (documentation) |
| **Branche** | `chore/lecon-cache` — 1 enregistrement |
| **Fusion** | **`c2dc555`** (`--no-ff`) — 1 fichier |
| **Version** | **0.4.1 → 0.4.2** (patch : `chore/*`, aucun code touché) |

### L'incident

Le correctif de la barre mobile venait d'être publié et vérifié. Sur un iPhone réel, la barre affichait
toujours l'ancien comportement — logo présent, localisation présente, trois rangées. Un quart d'heure
de doute, et l'hypothèse naturelle était la pire : *le correctif n'a rien changé*.

**Le site publié était à jour. C'était Safari qui servait sa copie en cache.**

### Ce qui a permis de trancher

Deux signaux, et il en fallait deux :

1. **Une récupération directe** de la page servie, où les règles de la version publiée étaient bien
   présentes — le logo masqué, le panneau hors flux, le seuil à 602.
2. **Un signal indépendant dans la capture elle-même** : la localisation s'affichait **sans son
   détail**. Cette combinaison n'existe que dans la version précédente. Elle a écarté l'autre
   hypothèse plausible — un iPhone rapportant une largeur au-dessus du seuil, ce qui aurait produit
   une image très semblable.

### La règle inscrite

**§10, règle de lecture (4)** : *ce qu'affiche un navigateur est un artefact ; ce que sert le serveur
est la référence.* C'est la règle (3) un cran plus loin — là, l'artefact trompeur était un fichier de
`.pipeline/` ; ici, l'écran d'un téléphone. Dans les deux cas, **quelque chose s'interpose entre le
fait et ce qu'on en voit**.

La règle porte aussi **le geste**, parce qu'une règle sans geste ne sert à rien : récupérer la page
servie et y chercher un **marqueur de la version attendue**, et lever le doute sur un appareil par une
chaîne de requête. Et ce qui rend le piège vicieux est noté : **une capture montrant l'ancien
comportement est indiscernable d'une régression**.

### Écart de procédure, signalé

**L'agent `reviewer` n'a pas été sollicité.** Un paragraphe de documentation, aucun code, aucun effet
sur la porte — la cérémonie complète a paru disproportionnée. Décision prise seul et nommée ici plutôt
que passée sous silence ; le chef de projet en a été informé et ne l'a pas contestée. C'est la famille
de `RD-018` du carnet de recherche — *cérémonie proportionnée au risque*.

### Filet de tests

Porte **verte** sur `main` après fusion, **4 avertissements** attendus (dette D-4), aucun code touché.

### Confirmation du correctif de la session 7, sur appareil réel

Le même jour, après vidage du cache : barre **sur une seule rangée**, sans logo ni localisation, avec
le bouton à trois barres et le bouton de langue rétréci — **dans les deux langues**, sur un iPhone 14
Pro Max, en production. Et **« Projets » est le seul lien resté dans la barre** : le rang 1 du tableau
du §9, tenu sur un vrai téléphone avec la vraie police du système.

C'est la première fois de la journée qu'une mesure a **prédit** un comportement et qu'un appareil réel
l'a **confirmé**. La béquille de D-1 a fait son travail.

---

## 10 août 2026 — Une assertion par chemin bloquant (session 9, D-10 et D-9)

| | |
|---|---|
| **Type** | EVOL (outillage seul — le site n'est pas touché) |
| **Branche** | `feat/vivacite-du-filet` — 2 enregistrements |
| **Fusion** | **`615279b`** (`--no-ff`) — 12 fichiers, +670 / −131 |
| **Prompt pilote** | `prompts/v0.4/EVOL_vivacite-du-filet_v1.md` |
| **Version** | **0.4.2 → 0.5.0** (minor : `feat/*`, la porte change réellement de nature) |
| **Dettes** | **D-10** soldée (principal) · **D-9** soldée (accessoire) |

### Ce que l'incrément répare, et pourquoi ça comptait

La porte disait vert sur des chemins morts. Mesuré : **24 chemins bloquants pour 13 assertions**.
Quatre gardes partageaient le marqueur `AVEUGLE` et **une seule** assertion, que n'importe laquelle
des quatre satisfaisait. Trois chemins n'avaient **aucune cible où mordre** — pas « non assertés » :
**structurellement improuvables**, la liste blanche étant lue à un chemin fixe.

**Après : 24 chemins, 24 assertions**, chacune sur une phrase qui n'appartient qu'à elle, **chacune
prouvée vivante isolément** par neutralisation sur copie hors dépôt — copie verte avant et après,
un chemin à la fois. `gate.sh` passe de 4 à 9 blocs. Cinq témoins neufs. Une option `--allowlist=`
ouverte pour donner une prise aux trois chemins qui n'en avaient pas.

### La question ouverte du prompt, tranchée : oui au contrôle qui *mesure* le compte

Le §5.5 laissait le choix, avec une réserve sérieuse sur la fragilité d'un contrôle qui lit du code
source par motif. **Retenu**, pour une raison qui n'est pas théorique : le cadrage annonçait « 21 sites
d'erreur » — nombre écrit que rien ne mesurait, **et faux**, puisqu'il oubliait les trois refus de
travailler. La réserve est **retenue et écrite dans le code**, pas balayée : la garde rougira sur un
remaniement légitime, et c'est assumé — ce remaniement-là *doit* faire relire l'inventaire.

### La revue a trouvé, dans le bloc censé fermer le défaut, le défaut lui-même

Verdict **`NEEDS WORK`**, et il était fondé. Le bloc 8/9 portait **deux comparaisons jumelles** : le
témoin ne validait jamais celle du fichier réel. **Reproduit avant correction** — comparaison primaire
neutralisée et 22ᵉ chemin ajouté, la porte sortait en **code 0** en affichant *« conformes au
declare »*.

**Une porte qui affirme une conformité qu'elle n'a pas vérifiée est pire qu'une porte muette.** Une
seule couture (`compte_conforme`) pour les deux assertions, reprouvée dans trois sens de mutation.
Quatre autres énoncés du cadrage étaient faux ou surcrédités — dont « le nombre annoncé **ici** est
lui-même surveillé », alors que `gate.sh` ne lit jamais ce document pour ce compte : **D-7 réintroduite
dans la section qui solde D-10**.

### Trois constats que je n'attendais pas, tous mesurés

1. **Sept chemins morts-verts, pas six.** Le seuil de suites extraites partageait le sort de son
   jumeau : l'assertion `AVEUGLE` se satisfaisait de l'un **ou** de l'autre.
2. **Le décompte du cadrage était faux par défaut** — 21 au lieu de 24. Celui du prompt était juste.
3. **Trois témoins cassés par leur propre commentaire**, qui citait le jeton dont ils prouvaient
   l'absence — le contrôle balaie le fichier entier. Dont `compte-divergent.mjs`, annonçant deux sites
   et en portant trois, le troisième dans la phrase qui les annonçait : **la maladie D-7 en miniature,
   dans la minute où j'écrivais son remède.**

### Ma propre campagne s'est trompée avant la porte

**21/24 au premier passage.** Les trois écarts n'étaient pas des chemins morts : quand la mort d'un
chemin fait **passer** son témoin entier, c'est l'assertion de *morsure* qui rougit, pas celle de
*message*. **Mon tableau d'attentes était faux, pas la porte** — corrigé sur le message réellement
produit, jamais l'inverse. Ajuster la porte pour satisfaire une attente erronée aurait été
exactement la faute que cet incrément répare.

### Deux leçons

*Un témoin est lu en entier : son commentaire fait partie de la mesure.* · *Un chemin qui lit une
ressource à chemin fixe est improuvable tant qu'on ne lui donne pas de couture — et le coût de réveil
d'un chemin mort est un signal de conception, pas une mesure de difficulté.*

Les deux paraissent universelles ; **promotion en global non faite**, elle appartient au chef de projet.

### Ce que cet incrément ne prouve toujours pas

Rien du rendu (**D-1**), rien du budget confronté à la feuille de style (**D-7**), rien de la
conformité `data-nav-priority` ↔ §9 (**D-8**, toujours bloquante pour E-2b). La porte n'est pas
devenue complète : elle est devenue **vraie sur ce qu'elle prétend**.

### Trois points laissés au chef de projet

1. `blind.html` référence « gate.sh 2/3 » — faux **avant** cet incrément, plus faux après (bloc 2/9).
   Fichier hors périmètre, défaut préexistant : **non touché**, signalé.
2. La revue a mesuré que la campagne coûte **1,6 s** : elle est donc outillable (`scripts/mutants.sh`,
   hors porte). **Écarté du mandat**, remonté comme candidat — avec sa réserve : un mutant franc ne dit
   rien d'un seuil desserré ni d'une condition inversée.
3. Promotion des deux leçons en global.

### Filet de tests

Porte **verte** sur `main` après fusion, **9 blocs**, **4 avertissements** attendus (dette D-4).
`index.html` **rigoureusement intact** — vérifié par `git diff --quiet`.

---

## 10 août 2026 — L'accroche dit ce que le harnais fait (session 10)

| | |
|---|---|
| **Type** | EVOL (contenu — premier incrément à toucher le site depuis trois sessions) |
| **Branche** | `feat/accroche-qualite-avant-vitesse` — 2 enregistrements |
| **Fusion** | **`7939d6a`** (`--no-ff`) — 2 fichiers, +125 / −3 |
| **Prompt pilote** | `prompts/v0.5/EVOL_accroche-qualite-avant-vitesse_v1.md` |
| **Version** | **0.5.0 → 0.6.0** (minor : `feat/*`, le contenu public change) |
| **Dette** | aucune soldée — corrige une **incohérence de discours** |

### Le défaut

La première phrase du site promettait de « piloter l'IA pour livrer **vite et bien** », alors que le
harnais revendiqué affiche « **qualité avant vitesse** ». Seule ligne du site qui contredisait ce
qu'il revendique, au-dessus de la ligne de flottaison. *« Vite et bien » est une promesse ; « qualité
avant vitesse » est un arbitrage — et un arbitrage se vérifie, ce qu'une promesse ne fait pas.*

**Aucune porte ne pouvait l'attraper**, et c'est écrit dans l'en-tête de `check-i18n.mjs` : le filet
n'attrape pas une phrase **fausse**, seulement une phrase **absente**. Relevé par l'œil du chef de
projet, en comparant deux pages.

### Ce que l'incrément pose

Trois lignes, et rien d'autre : texte visible du hero, clé `hero_sub` des blocs `fr` et `en`. Les
chaînes ont été **extraites du prompt par programme, jamais retapées** — le texte visible et la valeur
du dictionnaire sont deux copies que rien ne compare, et une transcription manuelle de 197 caractères
est le geste qui fabrique la divergence d'un caractère. Identité **vérifiée à l'octet après écriture**,
pas supposée.

### Trois affirmations du prompt démenties par la mesure

1. **L'apostrophe de l'existant est droite** (`U+0027`), pas typographique — le §5.2 disait l'inverse.
   Le **texte normatif** du prompt, lui, était juste. Arbitrage : le texte fait foi, la prose non.
2. **Le compteur de suites ne pouvait pas varier**, contrairement à ce qu'anticipait le §6.2 : une
   suite est délimitée par des **balises**, jamais par de la ponctuation. Zéro était donc le seul
   résultat acceptable, et non « une variation tolérable ».
3. **La page ne porte aucun badge TWAIM** — une seule occurrence, dans un commentaire JavaScript. Les
   marqueurs visibles sont des étiquettes « Claude Code ». **C'est la prémisse du §1**, et je l'ai
   manquée : mon rapport se donnait pour méthode de confronter le prompt à la mesure et ne l'a pas
   fait sur sa première phrase. Relevée par la revue. La correction reste bonne, sa justification
   écrite est plus étroite qu'annoncée : la contradiction n'était pas visible **pour un visiteur**.

### Quatre divergences de contenu déterrées, aucune corrigée

En mesurant le périmètre d'une candidate d'incrément que le prompt demandait d'évaluer **sans
l'implémenter**, quatre clés se sont révélées porter **deux textes différents** — un en dur dans la
page, un au dictionnaire. La page dit une chose au chargement, une autre après la première bascule.

| Clé | Au chargement | Après bascule |
|---|---|---|
| `nav_exp` | `// PARCOURS` | `// EXPÉRIENCE` |
| `nav_proj` | `// RÉALISATIONS` | `// PROJETS` |
| `e5_desc` | `Start-up créée et détenue par le groupe…` | phrase **entièrement différente** |
| `e6_desc` | `…sur IBM AS/400. Conception d'outils métiers web…` | phrase **entièrement différente** |

**Mon premier inventaire était faux deux fois** : j'annonçais « quatre étiquettes de section » dont
deux n'étaient que des différences de casse invisibles sous `text-transform:uppercase`, et j'avais
**manqué les deux descriptions d'expérience**. J'avais trié une poignée de cas et présenté ce tri
partiel comme un inventaire. La revue a attrapé `e6_desc` ; le triage complet a livré `e5_desc`.
Triage refait, re-dérivable, règle d'extraction écrite : **161 concordances, 4 divergences réelles**.

**Trois questions ouvertes, aucune technique** : `parcours`/`réalisations` sont-ils un défaut ou
**deux clés manquantes** ? Pour `e5_desc` et `e6_desc`, **laquelle des deux versions est vraie** ? Et
le couplage `nav_*` entre barre et étiquettes est **un piège pour E-2b** — changer un libellé de menu
changera silencieusement deux étiquettes de section.

### Revue

`NEEDS WORK`, 8/8 en sécurité. Ses deux `FAIL` portaient sur l'enregistrement et le `STATUS`, que le
pipeline place **après** la revue — mais **mon brief lui annonçait « deux commits » alors qu'il n'y en
avait qu'un** : j'ai décrit un état non vérifié dans le message même qui demandait de tout vérifier.
Cinq avertissements traités, dont l'inventaire incomplet et la prémisse du prompt.

### Filet de tests

Porte **verte** sur `main` après fusion. **Tous les compteurs identiques avant et après** : 163 clés
utilisées, 170/170, 344 suites dont 190 couvertes, 104 termes, 4 avertissements. `scripts/`
**rigoureusement intact** — miroir exact de la session 9, qui ne touchait pas `index.html`.

### Validation humaine due

**L'accroche à 320, 375 et 430 px, dans les deux langues** — et **prioritairement l'anglais à 320 px**,
dont la phrase finale ne fait que 21 caractères et risque le plus de tomber comme un fragment
orphelin. L'argument « on raccourcit » du prompt pèse **−2 caractères sur 199** : il ne règle rien.

> **Et le piège du cache redevient d'actualité** : contrairement aux deux incréments précédents,
> celui-ci change réellement ce qui est servi. Après publication, un appareil affichant encore « vite
> et bien » sert son cache. Marqueur à chercher : **« Qualité avant vitesse »**.
