# CHORE — Le témoin de mode de permission

| | |
|---|---|
| **Type** | `CHORE` |
| **Dépôt** | `lianazel.github.io` |
| **Version du dépôt à l'écriture** | `0.11.1` |
| **Écrit le** | 16 septembre 2026, par Cowork |
| **Révision** | `_v1` |
| **Destinataire** | Claude Code, côté WSL |
| **Branche** | `chore/temoin-mode-permission` |
| **Verrou des trois refus** | **0** verdict inscrit pour le sujet `CHORE_temoin-mode-permission` dans `.pipeline/prompt-reviews.log`, qui porte **13 lignes**, mesuré le 16 septembre 2026. |

> **Ce sujet n'est pas le renommage d'un autre.** Le sujet `CHORE_garde-auto-mode`, deux fois refusé,
> posait une **porte qui bloque** : elle lisait des fichiers, cherchait un marqueur, refusait en
> code 2, effaçait le prompt tapé, et exigeait un interrupteur d'arrêt. **Celui-ci ne bloque rien**,
> ne lit aucun fichier, ne cherche aucun marqueur, sort toujours en 0, et n'a pas d'interrupteur
> parce qu'il n'a rien à lever. Le périmètre est réellement autre, comme la règle des trois
> l'exige. *Les deux prompts du sujet abandonné restent non suivis dans `prompts/v0.11/` ; leur sort
> appartient au chef de projet et cet incrément n'y touche pas.*

## Mode d'exécution

**AUTO MODE ON : autorisé.**

Motif, et il se constate. Aucune preuve de rendu : aucun navigateur n'est lancé. Aucun jugement
d'aspect : rien de visuel n'est livré. Aucune preuve qui attend un témoin humain : les cinq chemins
du témoin se mesurent par code de sortie et par sortie texte, l'agent les lit lui-même. Aucun appel
à un outil sous règle `ask` : la seule règle `ask` de `.claude/settings.json` est `mcp__playwright`,
et rien ici ne l'appelle.

**La borne tient quand même** : autorisé à usiner seul ne veut pas dire autorisé à conclure seul.
L'agent s'arrête à `READY`.

## Règle du premier enregistrement

Le premier commit de la branche `chore/temoin-mode-permission` porte ce prompt, sous la forme
imposée :

```
docs(prompt): prompts/v0.11/CHORE_temoin-mode-permission_v1.md
```

> ⚠️ **Ce premier commit ne porte que ce fichier, et il s'ajoute nommément.**
> `git add prompts/v0.11/CHORE_temoin-mode-permission_v1.md`, **jamais** `git add prompts/v0.11/`.
> Le dossier contient plusieurs fichiers non suivis qu'un ajout de dossier emporterait sans que rien
> ne le signale. C'est la discipline du « staging précis » de l'ÉTAPE 5 de `/ship`, et elle vaut
> pour **tous** les enregistrements de l'incrément.

## Satellites consultés — table §8.1 du Core v2.33, les douze lignes

| Ligne du chantier | Verdict | Motif |
|---|---|---|
| ajoute, met à jour ou remplace une **dépendance** (npm, pip, NuGet, CDN, action CI) | écartée | JavaScript natif de Node, aucune bibliothèque, aucune installation |
| touche une **clé, un secret, un jeton, une authentification, une permission** | **COCHÉE** | `SECURITY_METHOD` §3.4, §3.5, §3.7, §3.10. §3.5, moindre privilège : le script **lit** une grandeur, le mode de permission, et n'en change aucune. §3.7 est le précédent de forme, un hook posé dans le dépôt. §3.4 et §3.10 sont sans objet, aucun secret n'est lu ni écrit et rien n'est exposé en HTTP ; ils sont nommés parce que la table les impose ensemble |
| fait analyser par un agent un **artefact d'origine externe** (paquet, diff, fichier reçu) | écartée | aucune pièce tierce n'est lue |
| crée ou modifie une **porte, une garde, un test bloquant, une règle exécutable** | **COCHÉE** | `ASSURANCE_METHOD` couche A, section « Outil d'inspection ≠ porte ». Elle gouverne ce chantier **et elle le classe** : *« quand un outil est présenté comme une protection, exiger de savoir ce qui échoue quand il détecte quelque chose. S'il ne fait rien échouer, ce n'est pas une porte, c'est une lampe torche. »* **Ce hook ne fait échouer aucune chaîne : il sort toujours en 0.** C'est donc une lampe torche, assumée comme telle, et l'**essai 0** imposé aux règles qui s'exécutent hors du code ne s'applique pas ici. Le témoin du §4 reste, parce qu'une lampe torche qui n'éclaire rien se doit d'être détectée |
| touche l'**interface** (composant, mise en page, interaction, libellé visible) | écartée | `index.html` n'est pas ouvert |
| touche une **base de données** (schéma, migration, requête, politique d'accès) | écartée | aucune |
| écrit **hors du dépôt** (fichier machine, configuration globale, outillage, planificateur) | écartée | toutes les écritures vivent dans le dépôt : `scripts/`, `prompts/`, `.pipeline/`. Aucune commande n'écrit ailleurs |
| concerne le **rendu web** à valider (géométrie, régression visuelle) | écartée | aucun navigateur, aucun pixel, aucune géométrie |
| introduit un **agent agissant sans validation humaine immédiate** | écartée | le §0 de `LOOPING_METHOD` v1.2 vise un agent déclenché par un événement. Ce hook n'agit sur aucun agent : il se déclenche sur le texte tapé par le chef de projet, et il n'en fait qu'une chose, l'écrire |
| pilote **plusieurs projets en parallèle** | écartée | un seul dépôt |
| produit **un texte destiné à être lu** (libellé, page, document, message) | **COCHÉE** | `STYLE_METHOD` S-1 et `STYLE_PROFILE.local.md` §2. La ligne que le script imprime est lue à chaque prompt : aucun tiret cadratin en apposition, aucun code interne non explicité |
| exige d'**adapter une explication** au chef de projet | écartée | le destinataire de ce prompt est l'agent, et son compte rendu est une liste de mesures |

## Ce que l'auteur a joué, et ce qu'il n'a pas pu jouer

| Critère | Joué par l'auteur ? |
|---|---|
| 1, 2, 7 | **Oui**, mesuré le 16 septembre 2026 par lecture des fichiers et listage des dossiers |
| 3, 4, 5, 6 | **Non** : l'auteur n'a pas d'interpréteur Node sur le dépôt réel. Les cinq chemins du témoin sont décrits, jamais joués |

## Ce que l'auteur a vérifié sur lui-même

| Question | Réponse |
|---|---|
| Une commande écrit-elle hors du dépôt ? | **Non.** Tout vit sous `scripts/` ou `.pipeline/` |
| Un prérequis épingle-t-il un état qu'une étape du document fait bouger ? | **Non.** Le critère 7 épingle `.claude/settings.json` inchangé, et **ce prompt ne dit rien de ce que fait le chef de projet ensuite** : la séquence qui lui revient vit dans la conversation, règle du destinataire unique du Core §4.1 |
| Un compte attendu dépend-il d'un arbitrage non tranché ? | **Non.** Le compte de `prompts/v0.11/` se **relève** à l'ÉTAPE 0 et se compare à l'ÉTAPE 4 ; il n'est jamais annoncé |
| Le document affirme-t-il plus que ce qu'il sait ? | **Non, et c'est le §3.** Ce que le hook imprime arrive-t-il jusqu'à l'agent ? **Non mesuré**, et écrit comme tel |

---

## 1. Ce que ce chantier fait, et à quoi il sert

**Le fait qui l'a déclenché** : Claude Code ne sait pas dans quel mode de permission il tourne. Une
consigne écrite dans un prompt ne peut donc pas s'appuyer dessus.

**Ce que ce chantier ajoute** : un hook `UserPromptSubmit` qui lit le mode et l'**écrit**. Rien de
plus. Il ne refuse rien, ne bloque rien, ne lit aucun fichier du dépôt, et sort **toujours** en 0.

**À quoi cela sert** : l'ÉTAPE 0 bis de `/ship` fait déjà confronter le prompt aux règles
permanentes, et le champ « Mode d'exécution » y est lu. Aujourd'hui l'agent lit ce champ sans savoir
dans quel mode il tourne. Demain il le saura, et pourra s'arrêter de lui-même.

**Ce chantier ne fabrique donc pas une porte, il fabrique un instrument de mesure.** La distinction
est écrite dans `ASSURANCE_METHOD`, et ce prompt s'y range explicitement.

## 2. L'état de départ, mesuré le 16 septembre 2026

| Objet | Valeur | Règle de comptage |
|---|---|---|
| `VERSION` | `0.11.1` | lecture directe |
| `.git/refs/heads/main` | `d6399c751bf022096014fb0596ffab8148d36935` | lecture directe |
| `.git/refs/remotes/origin/main` | **la même** | lecture directe |
| `scripts/` | **4 objets** : `check-i18n.mjs`, `gate.sh`, `i18n-allowlist.txt`, `fixtures/` | listage du dossier |
| `scripts/fixtures/` | **8 fichiers** | listage du dossier |
| `.claude/settings.json` | **1 111 octets**, **39 règles `deny`**, **1 règle `ask`**, **aucune clé `hooks`** | lecture entière |
| `.pipeline/.gitignore` | `*` puis `!.gitignore` | lecture entière |
| Chemin du dépôt | `lianazelPortfolio`, **minuscule initiale aux deux niveaux** | listage des dossiers parents |

**Conséquence de la ligne `.gitignore`** : ce qui est écrit dans `.pipeline/` n'entre jamais dans un
enregistrement, **et n'est pas une écriture hors du dépôt**.

**`prompts/v0.11/` n'a pas de compte attendu.** Le sort des révisions non suivies appartient au chef
de projet et n'est pas tranché ; un nombre écrit ici serait faux le jour où il le tranche. L'ÉTAPE 0
le **relève**, l'ÉTAPE 4 vérifie qu'il n'a pas bougé.

## 3. Ce qui n'est pas mesuré, et il faut le lire avant d'écrire une ligne

Lu le 16 septembre 2026 sur `https://code.claude.com/docs/en/hooks`, par Cowork. **Ces faits ne sont
rejouables ni depuis le dépôt ni depuis ce poste** : `WebFetch` et `WebSearch` sont en `deny`.

| Fait | Statut |
|---|---|
| `permission_mode` est un champ **commun** des hooks, six valeurs : `default`, `plan`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions` | **lu sur la page** |
| La page dit que **tous les événements ne reçoivent pas ce champ**, et renvoie à l'exemple de chaque section | **lu sur la page** |
| La page **ne donne aucun exemple de charge utile pour `UserPromptSubmit`** | **lu sur la page** |
| Une modification des hooks dans les fichiers de réglages est **reprise automatiquement** | **lu sur la page** |
| `UserPromptSubmit` **n'accepte aucun `matcher`** | **lu sur la page** |
| **Le champ `permission_mode` arrive-t-il sur `UserPromptSubmit` ?** | **NON MESURÉ** |
| **Ce que le script imprime arrive-t-il jusqu'à l'agent ?** | **NON MESURÉ** |

**Ces deux inconnues ne bloquent pas ce chantier, et voici pourquoi.** Le script écrit ce qu'il
reçoit dans un fichier et dans un journal. **Même si aucune des deux réponses n'est celle qu'on
espère, la première exécution réelle les tranche toutes les deux**, et le travail n'est pas perdu :
on aura mesuré ce que personne n'avait mesuré. **Et rien ne peut mal tourner** : le script sort
toujours en 0, donc le pire cas est qu'il ne serve à rien.

## 4. Le script `scripts/temoin-mode.mjs`

### 4.1 Ce qu'il fait, dans l'ordre

1. **Lit la totalité de son entrée standard**, dans une chaîne, sans rien supposer de sa forme.
2. **L'écrit telle quelle** dans `<dossier de trace>/hook-mode-last.json`, en écrasant. Écriture
   **au mieux** : si elle échoue, le script continue sans rien dire.
3. **Tente de lire la charge utile comme du JSON** et d'y trouver `permission_mode`. L'échec, quelle
   qu'en soit la cause, donne la valeur `introuvable`. **Le script ne lève jamais d'exception.**
4. **Imprime sur sa sortie standard une ligne, et une seule** :

```
MODE DE PERMISSION COURANT : <valeur>
```

où `<valeur>` est la valeur trouvée, ou le mot `introuvable`.

5. **Ajoute une ligne** à `<dossier de trace>/hook-mode.log`, écriture au mieux elle aussi :

```
<horodatage ISO> | mode=<valeur|introuvable> | octets=<taille de la charge utile>
```

6. **Sort en 0. Toujours, sans exception.**

### 4.2 Ce qu'il ne fait pas

- **Il ne sort jamais en 2**, ni en aucun autre code. Un hook `UserPromptSubmit` qui sort en 2
  bloquerait le prompt **et effacerait le texte tapé**. Ce script n'a aucun chemin qui y mène.
- **Il ne lit aucun fichier du dépôt.** Aucun chemin n'est extrait de la charge utile, aucun `.md`
  n'est ouvert.
- **Il ne cherche aucun marqueur** dans aucun texte.
- **Il n'écrit rien sur la sortie d'erreur.**

### 4.3 Le dossier de trace

1. `<répertoire courant>/.pipeline/` si ce dossier **existe** ;
2. sinon, le dossier temporaire du système.

**Dans ce dépôt, c'est toujours le premier** : `.pipeline/` existe, mesuré. Le second n'est jamais
employé ici, et aucune commande de ce prompt ne l'emploie.

*Motif du repli : un script porté un jour au plancher machine se déclencherait dans tous les dépôts,
dont certains n'ont pas de `.pipeline/`. **Ce portage n'est pas cet incrément.***

## 5. Le témoin `scripts/test-temoin-mode.sh`

Il se lance à la main : `bash scripts/test-temoin-mode.sh`. Il n'entre dans aucune autre porte.

**Il prend en premier argument le chemin du script à éprouver**, et retombe sur
`scripts/temoin-mode.mjs` quand on ne lui en donne aucun. Sans cette prise, la neutralisation de
l'ÉTAPE 3 n'aurait aucune cible. *C'est la mécanique de `--cadrage=` et `--allowlist=` dans
`check-i18n.mjs`, et pour la même raison.*

Il alimente le script sur son entrée standard, une fois par chemin, et vérifie **le code de sortie
ET la ligne imprimée**. Il sort en **0** si les cinq chemins passent, en **1** sinon, en nommant
chaque chemin fautif.

| # | Charge utile envoyée | Attendu |
|---|---|---|
| 1 | JSON portant `"permission_mode": "auto"` | sortie **0**, ligne portant `auto` |
| 2 | JSON portant `"permission_mode": "default"` | sortie **0**, ligne portant `default` |
| 3 | JSON **sans** le champ `permission_mode` | sortie **0**, ligne portant `introuvable` |
| 4 | texte qui **n'est pas du JSON** | sortie **0**, ligne portant `introuvable` |
| 5 | charge utile **vide** | sortie **0**, ligne portant `introuvable` |

**Deux gardes de non-vacuité, à voix distinctes :**

- **Le script lit vraiment le champ, il n'imprime pas une constante.** Les chemins 1 et 2 doivent
  imprimer **deux valeurs différentes**. Si les deux impriment la même chose, l'extraction est morte
  et les deux chemins passeraient quand même. **Sans cette garde, les chemins 1 et 2 sont satisfaits
  par la panne qu'ils excluent.**
- **La ligne est toujours là, et elle est unique.** Sur chacun des cinq chemins, la sortie standard
  doit porter **exactement une** ligne commençant par `MODE DE PERMISSION COURANT : `. Une sortie
  vide, ou deux lignes, est un échec. C'est ce qui interdit à une exception avalée de passer pour un
  succès.

Le témoin pose ses fichiers de travail **dans `scripts/`**, préfixés `_tmp-`, et les retire par
`rm scripts/_tmp-*`, jamais avec `-r`.

## 6. Ce que cet incrément NE fait PAS

- **Il ne touche pas `.claude/settings.json`.** Ce fichier est un contrat de permissions, et la
  déclaration du hook y est collée à la main par le chef de projet, **hors de cet incrément**. *Le
  critère 7 mesure ce fichier aux deux bouts, et c'est lui qui protège pendant le travail : la règle
  `Edit(/.claude/**)` du plancher existe, mais sa portée réelle n'est pas mesurée, constat `C-7`.*
- **Il ne touche aucun fichier de `scripts/fixtures/`.** Il n'en ajoute aucun : ce script ne lit
  pas de fichiers, donc il n'a pas de témoin de contenu.
- **Il ne touche ni `scripts/gate.sh`, ni `scripts/check-i18n.mjs`, ni
  `scripts/i18n-allowlist.txt`.** Le compte des 26 chemins bloquants du §6 du cadrage reste
  inchangé. *L'ÉTAPE 3 de `/ship` lance quand même `bash scripts/gate.sh` : il doit rester vert.*
- **Il ne touche ni `index.html`, ni `CLAUDE.md`, ni `tasks/`, ni `VERSION`, ni `README.md`, ni
  `.gitignore`.**
- **Il ne retire, ne renomme et ne déplace aucun fichier de `prompts/v0.11/`.**
- **Il n'écrit rien hors du dépôt.**
- **Il n'ajoute jamais un dossier à l'index.** Tout `git add` nomme ses fichiers un à un.
- **Il ne mesure l'état du dépôt par aucune commande git lancée depuis la VM Cowork.** Côté Claude
  Code sous WSL, `git status` est en `allow` dans `.claude/settings.local.json` et son innocuité a
  été mesurée le 15 septembre 2026 : il est **employé**, en plus de la lecture de fichier, jamais à
  sa place. *Cette ligne porte sur la mesure d'état, pas sur les enregistrements de `/ship`.*
- **Il n'installe rien.** L'invariant n° 1 du §4 du cadrage l'interdit sans décision explicite du
  chef de projet, et elle n'a pas été prise.
- **Il n'emploie jamais `rm -r`, `rm -rf` ni `rm -fr`.** Les trois sont dans la liste `deny` de
  `.claude/settings.json`, mesuré. **Aucun sous-dossier temporaire n'est créé.**
- **Il ne fusionne rien et ne publie rien.** *Le §11 du cadrage attribue encore la fusion à l'agent
  alors que `.claude/commands/land.md` écrit « Ne merge jamais » : constat `C-6`, non soldé, à ne
  pas solder ici.*

## 7. Les étapes

### ÉTAPE 0 — Relever l'état de départ

Cette étape se joue **après** le premier commit de la branche, que `/ship` pose à son ÉTAPE 2.

```bash
cd /mnt/c/JobDirectory/CLAUDE_PROJECTS/_WEB/lianazelPortfolio/lianazelPortfolio/lianazel.github.io
cat VERSION
cat .git/refs/heads/main
git status --porcelain
ls -1 scripts/ | wc -l
ls -1 scripts/fixtures/ | wc -l
ls -1 prompts/v0.11/ | wc -l
wc -c .claude/settings.json
grep -c 'hooks' .claude/settings.json || true
```

Attendu :

| Relevé | Attendu |
|---|---|
| `VERSION` | `0.11.1` |
| `.git/refs/heads/main` | l'empreinte du §2, **inchangée** : le travail se fait sur une branche |
| `git status --porcelain` | **aucun fichier suivi modifié**, et **aucune entrée non suivie hors de `prompts/v0.11/`** |
| `ls -1 scripts/` | **4** |
| `ls -1 scripts/fixtures/` | **8** |
| `ls -1 prompts/v0.11/` | **relevé, pas attendu** : ce nombre est la référence de l'ÉTAPE 4, voir §2 |
| `wc -c .claude/settings.json` | **1111** |
| `grep -c 'hooks'` | **0** |

Si l'un de ces relevés diverge de son attendu, s'arrêter et le dire.

### ÉTAPE 1 — Écrire le script

`scripts/temoin-mode.mjs`, selon le §4. Il porte un en-tête qui dit, dans cet ordre : ce qu'il fait,
ce qu'il **ne fait pas** (§4.2, et surtout qu'il ne sort jamais en 2), et les deux inconnues du §3.
L'en-tête de `check-i18n.mjs` est le modèle de forme.

### ÉTAPE 2 — Écrire le témoin

`scripts/test-temoin-mode.sh`, selon le §5, cinq chemins et deux gardes de non-vacuité.

### ÉTAPE 3 — Le faire mordre, et le prouver

```bash
bash scripts/test-temoin-mode.sh
echo "temoin : code=$?"
```

Attendu : **code 0**, cinq chemins verts.

Puis, et c'est la seconde moitié de la preuve :

```bash
cp scripts/temoin-mode.mjs scripts/_tmp-temoin-neutralise.mjs
```

Dans **la copie seule**, remplacer l'extraction du mode par la valeur constante `introuvable`, de
sorte que le script imprime toujours la même chose. Ne rien changer d'autre. Puis :

```bash
bash scripts/test-temoin-mode.sh scripts/_tmp-temoin-neutralise.mjs
echo "temoin sur copie neutralisee : code=$?"
rm scripts/_tmp-*
bash scripts/test-temoin-mode.sh
echo "temoin sur l'original : code=$?"
```

Attendu : **code 1** sur la copie neutralisée, **en nommant les chemins 1 et 2** — les deux seuls
qui attendent une valeur lue. Les chemins 3, 4 et 5 attendent déjà `introuvable` et **restent
verts**. Puis **code 0** sur l'original.

**L'original n'est jamais modifié : c'est la copie qu'on casse.**

> ⚠️ **La copie se pose à plat dans `scripts/`, jamais dans un sous-dossier.** Motif mesuré :
> `.claude/settings.json` refuse `rm -r`, `rm -rf` et `rm -fr`, donc un sous-dossier créé ne
> pourrait pas être retiré.

### ÉTAPE 4 — Rendre compte, et s'arrêter

```bash
ls -1 scripts/ | wc -l
ls -1 scripts/fixtures/ | wc -l
ls -1 prompts/v0.11/ | wc -l
cat .git/refs/heads/main
git status --porcelain
wc -c .claude/settings.json
grep -c 'hooks' .claude/settings.json || true
wc -c scripts/temoin-mode.mjs scripts/test-temoin-mode.sh
```

Attendu : **6** · **8** · **le même nombre qu'à l'ÉTAPE 0** · l'empreinte **inchangée** du §2 · une
liste où **aucun fichier `_tmp-*` n'apparaît** et où **aucun fichier suivi n'est modifié** · **1111**
· **0** · deux tailles, données pour information et sans attendu.

Puis `/ship` poursuit son ÉTAPE 5 : commit de l'incrément en staging précis, puis
`.pipeline/STATUS.md`. **L'agent ne colle aucune déclaration dans `.claude/settings.json`.**

## 8. Critères de recette

| # | Critère | Comment on le mesure |
|---|---|---|
| 1 | `scripts/` contient **4 objets** à l'ÉTAPE 0, **6** à l'ÉTAPE 4 | `ls -1 scripts/ \| wc -l` |
| 2 | `scripts/fixtures/` contient **8 fichiers** aux deux étapes, **inchangé** | `ls -1 scripts/fixtures/ \| wc -l` |
| 3 | `bash scripts/test-temoin-mode.sh` sort en **code 0** et nomme ses **5** chemins | lecture de la sortie |
| 4 | Les chemins **1 et 2** impriment **deux valeurs différentes** | lecture de la sortie |
| 5 | Sur les **cinq** chemins, la sortie standard porte **exactement une** ligne commençant par `MODE DE PERMISSION COURANT : ` | lecture de la sortie |
| 6 | Le témoin lancé sur la copie neutralisée sort en **code 1** et **nomme les chemins 1 et 2** ; relancé sur l'original, il sort en **code 0** | lecture des deux sorties |
| 7 | `.claude/settings.json` porte **1 111 octets** et **aucune clé `hooks`**, à l'ÉTAPE 0 **et** à l'ÉTAPE 4 | `wc -c` et `grep -c 'hooks'`, aux deux étapes |
| 8 | Aucun fichier suivi n'a changé hors des **3 fichiers** de cet incrément, et `prompts/v0.11/` porte **le même nombre de fichiers** aux deux étapes | `.git/refs/heads/main` **et** `git status --porcelain`, aux deux étapes, plus `ls -1 \| wc -l` |
| 9 | Aucun fichier `_tmp-*` ne subsiste, et **aucun sous-dossier n'a été créé** | `ls -1 scripts/` et `git status --porcelain` |
| 10 | Aucune commande d'installation n'a été lancée, et **aucune écriture hors du dépôt** | relecture de la trace de session |

**Les trois fichiers de cet incrément** sont `scripts/temoin-mode.mjs`,
`scripts/test-temoin-mode.sh` et ce prompt.

**Le critère 8 se mesure par deux routes, et la seconde est nécessaire.** La lecture de
`.git/refs/heads/main` **ne peut pas** établir qu'aucun fichier suivi n'a changé quand on travaille
sur une branche : la référence de `main` est inchangée par construction. C'est la leçon du
15 septembre 2026, et `git status --porcelain` est **ajouté**, jamais substitué.

## 9. Ce que cet incrément ne prouve pas

- **Il ne prouve pas que `UserPromptSubmit` reçoive `permission_mode`.** La première exécution
  réelle le dira, par le journal et par `hook-mode-last.json`.
- **Il ne prouve pas que la ligne imprimée arrive jusqu'à l'agent.** Même route, même moment.
- **Il n'arrête rien et ne prétend rien arrêter.** Ce n'est pas une porte. Si un prompt doit être
  refusé, c'est l'agent qui s'arrête, à l'ÉTAPE 0 bis de `/ship`, et ce chantier ne fait que lui
  donner la grandeur qui lui manquait.
- **Il ne surveille rien dans la durée.** Le témoin se lance à la main et n'entre dans aucune porte
  automatique.
- **Il ne porte rien au plancher machine.** Le §4.3 rend ce portage facile ; il ne le fait pas.

---

*Prompt écrit par Cowork le 16 septembre 2026. Révision `_v1` d'un sujet neuf. Le sujet
`CHORE_garde-auto-mode`, deux fois refusé, posait une porte qui bloque ; celui-ci pose un instrument
de mesure qui ne bloque rien.*
