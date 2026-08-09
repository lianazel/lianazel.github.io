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
