# Journal — lianazel.github.io v0.1

## 8 août 2026 — Alignement du projet sur le harnais de travail

| | |
|---|---|
| **Type** | CHORE (outillage) |
| **Branche** | `chore/alignement-harnais` |
| **Enregistrement** | `e9116c8` — inscrit par le commit de journal qui suit : un enregistrement ne peut pas contenir sa propre empreinte |
| **Prompt pilote** | `prompts/v0.1/CHORE_alignement-harnais_v1.md` |
| **Version** | 0.1.0 (premier `VERSION` du projet) |

### Contexte

Le projet a été créé **avant** l'existence du harnais de travail : il n'avait ni fichier de cadrage,
ni agents, ni commandes, ni journal, ni filet de tests. Le dépôt ne contenait qu'`index.html`.
Cette passe est le rituel de rétrofit sur projet existant (Temps 1 « drop-in » et Temps 2
« `CLAUDE.md` descriptif »). Elle s'est exécutée en direct, sans slash command — elle installe
justement les commandes, elle ne pouvait donc pas être portée par l'une d'elles. Tous les incréments
suivants passeront par `/ship`, `/diagnose`, `/fix` et `/land`.

### Contenu posé

- **`CLAUDE.md`** — fichier de cadrage rédigé en mode brownfield : il décrit ce qui existe, et range
  en « déviations connues » (D-1 à D-6) ce que le code ne respecte pas encore.
- **`.claude/`** — instancié depuis le gabarit du référentiel : agents `diagnostician` et `reviewer`
  (lecture seule), commandes `/ship`, `/diagnose`, `/fix`, `/land`, `/session-start`, et
  `/session-close` désactivée (le projet est équipé de `/land`).
- **`.pipeline/`** — dossier d'artefacts de travail, suivi par git mais dont le contenu est écarté
  par son propre fichier d'exclusion interne.
- **`tasks/`** — le présent journal, le registre local des leçons, la feuille de route.
- **`prompts/v0.1/`** — le prompt pilote de cette passe, gelé dès sa transmission.
- **`scripts/`** — le filet de tests et sa preuve de morsure.
- **`VERSION`** (0.1.0) et **`.gitignore`** (garde anti-secret de premier niveau).

### Filet de tests

Aucune dépendance, aucun gestionnaire de paquets, aucun manifeste : la surface d'attaque du projet
reste nulle. Le contrôle `scripts/check-i18n.mjs` est écrit en JavaScript natif et couvre la
complétude du dictionnaire bilingue, sa symétrie, l'absence de doublon et l'intégrité des ancres de
navigation. La porte `scripts/gate.sh` refuse de rendre un vert si le témoin volontairement
défectueux `scripts/fixtures/broken.html` venait à passer.

**Les deux sens ont été constatés** : site sain → 0 erreur bloquante, 4 avertissements (dette D-4),
code de sortie 0 ; ancre de dictionnaire volontairement cassée → échec, code de sortie 1.

### Correction embarquée

Le bloc anglais du dictionnaire déclarait deux fois `copy_btn` et `copied_msg` (dette D-3). Les
valeurs étant identiques, l'écrasement était sans effet visible — mais le défaut serait devenu
silencieux le jour où les deux valeurs auraient divergé. Les deux déclarations redondantes de fin de
bloc ont été supprimées ; aucune autre ligne d'`index.html` n'a bougé.

### Correctif d'outillage embarqué — `/land`

La commande `/land` héritée du gabarit demandait de mettre à jour « le manifeste de version
(`pyproject.toml` ou `package.json` selon le projet) », et indexait `git add <manifeste-version>` —
un marqueur d'instanciation resté non substitué, invisible au contrôle de balises parce qu'il est
écrit en chevrons simples et non en commentaire HTML. Aucun des deux fichiers nommés n'existe ici, et
c'est un **invariant** : le portfolio n'a aucun gestionnaire de paquets. Le premier atterrissage
aurait bumpé dans le vide ou échoué à l'indexation.

`.claude/commands/land.md` nomme désormais le manifeste réel du projet — **`VERSION`** — aux deux
endroits, et l'ÉTAPE 4 porte une **garde d'existence** : si `VERSION` est absent, la commande s'arrête
et signale, au lieu d'en deviner un autre.

Le gabarit du référentiel porte le même défaut. Il n'a **pas** été touché : décision du chef de projet
du 8 août 2026 — il sera corrigé séparément, dans son propre dépôt.

### Reste à faire

Temps 3 du rituel de rétrofit — l'essai à chaud du harnais — est l'incrément suivant. La barrière de
rendu (D-1) reste reportée par décision du chef de projet du 8 août 2026 ; elle est inscrite en tête
de `tasks/ROADMAP.md`, pas oubliée.

### Revue et atterrissage

**Revue Cowork — verdict `NEEDS WORK`**, deux réserves, toutes deux sur le `CLAUDE.md` livré, toutes
deux soldées dans le même incrément :

1. **§6 — la commande de test désarmait le filet.** Le cadrage donnait `node scripts/check-i18n.mjs`,
   qui **saute la preuve de morsure** : un lecteur du `CLAUDE.md` aurait lancé le contrôle sans jamais
   éprouver le témoin, et un filet en panne se serait présenté comme vert. La commande est désormais
   `bash scripts/gate.sh`, avec la raison écrite à côté.
2. **§3 — le décompte du dictionnaire.** « 126 clés » est le nombre de clés **utilisées** ; le
   dictionnaire en **déclare 132** par langue. L'écart de six est maintenant décomposé sur place
   (quatre orphelines D-4, deux clés lues par le programme).

**Atterrissage** — `/land chore/alignement-harnais` :

| Étape | Résultat |
|---|---|
| Pré-gardes | `main` aligné sur `origin/main`, `STATUS = READY`, arbre propre, fusion sans conflit |
| **Fusion** | **`977c5b4`** (`--no-ff`), 20 fichiers, +1196 / −2 |
| Filet de tests | **vert sur `main` après fusion** — morsure OK, 0 erreur bloquante, 4 avertissements |
| Version | **0.1.0 — inchangée, et c'est délibéré** (voir ci-dessous) |

**Sur la version, la règle a été écartée en conscience.** `/land` prescrit `chore/*` → *patch*, donc
0.1.0 → 0.1.1. Elle ne s'applique pas ici : `VERSION` **naît avec cet incrément** — son historique ne
compte qu'un seul enregistrement, celui qu'on atterrit — et le pied du `CLAUDE.md` déclare `0.1.0`
comme la version de ce cadrage. Bumper reviendrait à publier un projet dont la version initiale
n'aurait jamais existé sur `main`, et à contredire un document livré le jour même. La clause
d'idempotence de l'ÉTAPE 4 s'applique : **cible déjà atteinte, on saute**. Le passage à 0.1.1 se fera
au premier incrément qui modifiera réellement le produit. *Décision à confirmer par le chef de projet
avant publication ; elle se défait en une ligne tant que `main` n'est pas poussé.*

---

## 9 août 2026 — Parité linguistique complète (E-1)

| | |
|---|---|
| **Type** | EVOL (produit + outillage) |
| **Branche** | `feat/parite-linguistique` |
| **Fusion** | **`564f2cc`** (`--no-ff`) — 7 fichiers, +854 / −58 |
| **Prompt pilote** | `prompts/v0.1/EVOL_parite-linguistique_v1.md` |
| **Version** | **0.1.0 → 0.2.0** (minor : `feat/*`, et le produit change réellement) |
| **Feuille de route** | solde **E-1**, priorité 1 |

> **Sur le fichier de journal** : cette entrée reste dans `JOURNAL_v0.1.md` bien qu'elle porte la
> version à 0.2.0. L'incrément a été conçu, prompté et exécuté dans le cycle v0.1 — son prompt vit
> dans `prompts/v0.1/`, il solde un item de la liste du 8 août. Ouvrir `JOURNAL_v0.2.md` ici aurait
> coupé l'histoire en deux. Le prochain incrément ouvrira le fichier v0.2.

### Ce que l'incrément pose

Un **5ᵉ contrôle bloquant** dans `scripts/check-i18n.mjs` : tout texte visible de la page doit être
**soit** couvert par un attribut `data-i18n`, **soit** inscrit dans une **liste blanche explicite**
(`scripts/i18n-allowlist.txt`, 104 termes, chacun avec son motif). La lacune fermée est celle du
§E-1 : le dictionnaire pouvait être complet et symétrique pendant que la page restait à moitié
française — les trois contrôles existants ne regardaient que le dictionnaire, jamais le texte.

Rattrapage du contenu : **34 clés ajoutées**, dictionnaire porté de 132 à **166 clés par langue**,
couverture du texte visible de **144 à 188 suites** sur 342. Zéro suite française non couverte
subsiste hors liste blanche.

**Second témoin** : `scripts/fixtures/blind.html`, dit *témoin de cécité* — une page au dictionnaire
parfaitement sain mais presque vide de texte. Il prouve la **garde de non-vacuité**, qui interdit le
pire mode de défaillance du nouveau contrôle : une extraction cassée ne renvoie rien, tout paraît
couvert, et la porte devient **verte alors qu'elle est aveugle**.

### Deux décisions prises hors du texte du prompt

1. **Seuils de non-vacuité paramétrables** (`--min-runs`, `--min-covered`), désarmés pour le seul
   témoin défectueux — il fait sept suites de texte, pas deux cents. Arbitré par le chef de projet.
   Sans cela, `broken.html` aurait échoué **par cécité** au lieu de ses défauts semés, et la preuve
   de morsure serait morte en silence.
2. **Valeur de `h2_tech` réécrite** — défaut produit préexistant : le mot `Stack` était codé en dur
   dans le `<h2>`, et la clé valait `Stack` en anglais. Le titre affichait **« Stack Stack »**.
   Vérifié au navigateur : « Stack Technique » / « Technical Stack ».

### Revue et corrections

**Revue — verdict `NEEDS WORK`**, six réserves. R1, R2, R4 et R5 corrigées ; R3 et R6 documentées
sans code, comme la revue l'autorisait.

**R1 — la porte restait verte avec 4 contrôles sur 6 morts.** `gate.sh` n'assertait que sur deux
familles. Les quatre états ont été reproduits en bac à sable, puis fermés : six assertions, une par
contrôle bloquant.

**R2 — sur-couverture silencieuse.** Un balisage déséquilibré gonfle la couverture et vide le
contrôle 5 sans que les seuils bronchent : ils ne surveillent que le manque, jamais l'excès.

**Les deux corrections ont dû aller plus loin que ce que la revue proposait, et c'est le fait
marquant de cet incrément** — les deux propositions étaient plausibles à la lecture, et fausses à
l'exécution :

- L'assertion posée sur l'identifiant nu `only_fr` était **vacueuse** : contrôle de symétrie
  neutralisé, la porte restait **verte**, parce que `only_fr` est aussi le nom d'une clé orpheline
  annoncée en `AVERTISSEMENT` par un contrôle **non bloquant**.
- La condition structurelle proposée (pile vide en fin d'extraction) **ne mordait pas sur le
  scénario de R2 lui-même** : `</body>` puis `</html>` referment tout, y compris la balise laissée
  ouverte. Mesuré : un `<span data-i18n>` non fermé fait passer la page à **344 suites sur 344
  « couvertes »**, contrôle 5 mort, porte verte. Le déséquilibre n'est visible qu'à l'instant du
  **dépilement multiple**.

**R4 — tableau de calibrage faux.** Il annonçait « 342/144/198/179 ✔ identique » ; l'extraction
livrée donne **341/144/197/178** sur `main:index.html`. Écart de 1, entièrement expliqué par le
`<!DOCTYPE html>` que la référence comptait comme du texte visible — et **démontré** : en adoptant
la convention de comptage de la référence, la même extraction reproduit ses quatre nombres
exactement.

**R6 — défaut produit préexistant, signalé et non corrigé.** Un aller-retour fr → en → fr **réécrit**
une partie de la page : `toggleLang()` remplace le contenu initial par la valeur du dictionnaire, et
rien ne ramène le texte de départ. Quatre écarts visibles, tous présents sur `main` : « // parcours »
→ « // Expérience », « // réalisations » → « // Projets », et surtout **`e5_desc`**, dont le
paragraphe ne dit plus la même chose — le texte d'arrivée décrit l'entreprise (groupe **BALAS**,
équipe R&D), celui d'après-bascule décrit les technologies. **La mention BALAS disparaît
définitivement.** Reproduit au navigateur : après deux bascules, `BALAS` est introuvable dans la
page. Correction = décision éditoriale, elle appartient au chef de projet.

### Filet de tests

| | |
|---|---|
| Porte sur `main` après fusion | **verte**, code 0 |
| Contrôles bloquants | 6 (complétude, symétrie, doublon, ancres, attribut vide, **couverture**) |
| Assertions de vivacité | **6 / 6**, chacune vue mordre sur son contrôle neutralisé |
| Assertion structurelle | armée, vue mordre sur **3 / 3** formes de déséquilibre |
| Preuves d'échec contrôlé | **14** au total |
| Faux positifs du durcissement | **0** sur les trois cibles réelles |
| Avertissements | 4, tous attendus (dette D-4) |

### Vérification au navigateur, avant publication

Bascule fr ⇄ en conforme ; point de rupture `max-width:600px` exact ; **le bouton de langue ne
disparaît à aucune largeur**, jusqu'à 320 px. En anglais, cinq mots français subsistent à l'écran,
tous légitimes : Aumône, Pyrénées, SURGELÉS, Vitry-**sur**-Seine (noms propres) et « Français », le
libellé du bouton de retour.

**Sur la dette D-5, une correction de fait** : la prémisse « Segoe UI n'est pas résolue hors
Windows » **ne tient pas sur ce poste**. WSL2 expose `/mnt/c/Windows/Fonts` à fontconfig, et CDP
`CSS.getPlatformFontsForNode` — seule source qui dise ce que le moteur a **réellement peint** —
rapporte *Segoe UI* et *Segoe UI Black*. La rastérisation reste FreeType et non DirectWrite : la
géométrie n'est toujours pas transférable, mais la raison n'est plus celle qui est écrite en D-5.

**Débordement de 9 px à 320 px de large** : mesuré **identique sur `main` et sur la branche**, à
toutes les largeurs testées. **Préexistant, pas une régression.** `body` porte `overflow-x: hidden`,
ce qui supprime la barre de défilement — probablement pourquoi il n'avait jamais été vu.

### Reste ouvert

- **R3** — la liste blanche se compare **mot à mot** : une suite courte composée à 100 % de mots
  listés passe, quelle que soit la langue du libellé. C'est la **forme dominante** du contenu de
  cette page. Correction de fond = piste A (tenter la suite entière avant le mot-à-mot), incrément
  dédié.
- **R6** — les quatre écarts d'aller-retour : décision éditoriale, puis piste C (porte
  d'aller-retour, ~30 lignes) pour interdire les suivants.
- **D-4** — les quatre orphelines, non rebranchées (le §5.6 l'interdisait).
