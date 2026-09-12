# CHORE — Enregistrer au dépôt le harnais déjà posé sur le disque

**Destinataire** : Claude Code · **Dépôt** : `lianazel.github.io` · **Version produit au dépôt** : 0.9.4
**Branche à créer** : `chore/harnais-au-depot`

> **Sujet neuf, et c'est délibéré.** Le sujet `CHORE_descente-harnais` porte trois verdicts non-`SHIP`
> dans `.pipeline/prompt-reviews.log` ; le verrou des trois refus de `/ship` refuse mécaniquement toute
> relecture de plus sur ce sujet. Le présent prompt n'en est **pas une quatrième révision** : son
> périmètre est plus étroit — trois révisions de prompt abandonnées en ont été retirées — et son sujet
> est donc autre.
>
> **Où en est le compteur de ce sujet-ci.** La `_v1` a été relue le 12 septembre 2026 et a reçu un
> **`BLOCK`**, sur un unique `fail` C1 : elle affirmait, à tort, que `grep -r` était aveugle sur cette
> machine. Le relecteur l'a réfuté par la mesure. **L'affirmation est retirée de la présente révision**,
> et la consigne qu'elle portait — mesurer fichier par fichier — est conservée avec son vrai motif.
> `grep -c 'CHORE_harnais-au-depot' .pipeline/prompt-reviews.log` rend donc **1** (compte de lignes) au
> moment où ce fichier est écrit. **Ce n'est pas un prérequis à revérifier à l'exécution** : `/ship`
> journalise sa propre relecture en ÉTAPE 0, ce compteur vaudra 2 quand tu liras ces lignes. C'est
> normal, et le verrou des trois refus ne se ferme qu'à 3.

---

## Mode d'exécution

**AUTO MODE ON : autorisé.**

**Motif, constatable.** Toutes les preuves de cet incrément se constatent sans témoin humain : quatre
comptes d'octets (`wc -c`), un relevé de chemins (`git diff --name-only`), des comptes de lignes
(`grep -c`), et le code de sortie de `bash scripts/gate.sh` avec ses lignes `OK -`. Aucun rendu à
regarder, aucun jugement d'aspect, aucune capture. Le dépôt ne déclare aucun serveur MCP : aucun appel
ne tombe sous la règle `ask` du plancher.

**Borne.** Autorisé à usiner seul ne veut pas dire autorisé à conclure seul. Tu t'arrêtes à
`.pipeline/STATUS.md = READY`. Le merge, le `/land` et le push restent des gestes du chef de projet.

---

## Satellites consultés

**Appliqués.**

- `ASSURANCE_METHOD` **couche A**, « porte de périmètre de diff » : la fiche déclare les fichiers
  qu'elle doit toucher, et un contrôle compare le diff réel à cette liste. C'est le geste 3 et le
  critère d'acceptation 4 ci-dessous. Cet incrément **pose cette porte pour lui-même** ; il ne
  l'installe pas dans le filet, ce qui serait un autre incrément.
- `ASSURANCE_METHOD` **couche A**, « une porte se prouve à sa naissance » : rappelé pour dire ce que
  cet incrément **ne prouve pas**. Selon le rapport d'essai `.pipeline/RAPPORT_ESSAI0_plancher_v1.md`
  — présent dans l'arbre de travail, mais **hors suivi de version**, donc destiné à disparaître —
  **9 des 39 règles** ont été vues mordre le 12 septembre 2026 ; les **30 autres** restent non
  éprouvées une à une. Aucun essai n'est joué ici.
- `SECURITY_METHOD` **§3.4** (secrets) : `prompts/` et `.claude/` partent dans un dépôt **public**.
  Relecture anti-secret obligatoire avant enregistrement, `CLAUDE.md` §10.
- `SECURITY_METHOD` **§3.5** (moindre privilège) : les quatre fichiers enregistrés sont l'outillage de
  l'agent. Les enregistrer met sous contrôle de version ce qui décide de ses droits et de ses gestes.
  Le geste 2 vérifie qu'aucun d'eux ne prescrit une commande que le plancher refuse.
- `STYLE_METHOD` + profil d'instance : les quatre fichiers enregistrés partent dans un dépôt
  **public** et y seront lisibles. Contrainte de rédaction du geste 2 (b), liée à la dette **D-17**.

**Écartés, avec motif.**

- `UX_METHOD`, `VISION_METHOD` : aucune ligne d'interface, aucun pixel, `index.html` n'est pas ouvert.
- `SQL_METHOD` : aucune base de données.
- `AGENT_SCOPE_METHOD` : aucun fichier hors dépôt n'est ouvert. Les quatre fichiers de cet incrément
  sont tous sous la racine du dépôt.
- `SECURITY_METHOD` **§3.3** (dépendances) : aucune dépendance, aucun gestionnaire de paquets, aucune
  installation. L'invariant §4-1 du `CLAUDE.md` tient sans geste.

---

## Le contexte, en trois phrases

Le chef de projet a copié à la main, dans `.claude/`, la version adaptée de deux commandes et un agent
de relecture. **Personne d'autre ne peut y écrire** : ni toi — la règle `Edit(/.claude/**)` du plancher
ferme l'outil d'édition **et** la redirection shell, éprouvé le 12 septembre 2026 — ni le pont de
Cowork, qui répond « Writing to .claude is not permitted via remote tools ». Les fichiers sont donc
déjà bons, à leur place, et il ne manque que l'enregistrement.

**Indexer n'est pas écrire.** `git add .claude/commands/land.md` lit ce fichier et écrit dans
`.git/index` ; aucun octet de `.claude/` ne change. Et la liste des 39 règles `deny` ne porte ni
`Bash(git add *)` ni `Bash(git commit *)` : vérifie-le toi-même dans `.claude/settings.json` avant le
geste 3. Le dépôt prescrit d'ailleurs déjà `git add` sous ce plancher, à l'ÉTAPE 7 de `/land` — sur
d'autres chemins que ceux de `.claude/`, l'analogie ne porte donc que sur la commande, pas sur sa cible.

---

## Prérequis, à vérifier avant tout geste

Cinq points. **Si l'un d'eux est faux, ARRÊTE-TOI et signale-le**, sans créer de branche et sans rien
enregistrer.

| # | Prérequis | Commande de mesure | Valeur attendue |
|---|---|---|---|
| 1 | La branche courante est `main` | `git branch --show-current` | `main` |
| 2 | `main` est à la base relevée | `git rev-parse main` | `b98fc560f93a917e7e990f33fc2c66de66d6f5d2` |
| 3 | L'incrément précédent est refermé | `head -1 .pipeline/STATUS.md` | commence par `CLOSED` |
| 4 | Les quatre fichiers existent aux tailles relevées | `wc -c <chemin>` sur chacun | `.claude/commands/land.md` **9006** · `.claude/commands/ship.md` **5968** · `.claude/agents/prompt-reviewer.md` **10533** · `prompts/v0.9/SPIKE_essai0-plancher_v2.md` **7545** (octets) |
| 5 | Aucun fichier **suivi** modifié en dehors des deux commandes | `git status --porcelain` | les seules lignes en ` M` sont `.claude/commands/land.md` et `.claude/commands/ship.md` |

> **Le prérequis 2 se mesure à l'ouverture du `/ship`, et rien dans ce document ne le déplace avant.**
> Cet incrément n'enregistre que sur la branche `chore/harnais-au-depot` ; `main` ne bouge pas d'un
> caractère jusqu'à `.pipeline/STATUS.md = READY`. Tout ce que la dernière section confie au chef de
> projet — merge, `/land`, push, et l'enregistrement de `tasks/REPRISE.md` — se joue **après** ce
> `READY`, jamais avant. Si `main` a bougé quand tu lis ceci, le prérequis est faux : **ARRÊTE-TOI**,
> ne remesure pas la base toi-même.
>
> ⚠️ **Le prérequis 5 n'est pas « arbre propre », et ce n'est pas une tolérance.** Ces deux fichiers
> suivis sont modifiés **parce que c'est le sujet de l'incrément** : leur modification est la preuve
> que le chef de projet les a bien posés, pas une anomalie. Un prérequis d'arbre propre serait faux
> ici et te ferait refuser le travail que tu es venu faire.
>
> Des fichiers **non suivis** subsistent dans l'arbre : le prérequis 5 ne les regarde pas, et le
> geste 3 dit lesquels ne s'enregistrent pas.

---

## Ce que cet incrément fait — trois gestes, dans cet ordre

### Geste 1 — premier enregistrement

Crée la branche `chore/harnais-au-depot` et enregistre le présent prompt, **seul**, avec le message
exact :

```
docs(prompt): prompts/v0.9/CHORE_harnais-au-depot_v2.md
```

### Geste 2 — vérifier les quatre fichiers, sans en changer un octet

**Tu n'écris dans aucun des quatre.** Tu les lis, tu les statues, tu rapportes. Si l'un d'eux te paraît
améliorable, **c'est un constat pour le chef de projet**, pas un geste.

**(a) Relecture anti-secret.** Lis les quatre fichiers en entier. Aucun ne doit porter de clé, de jeton,
de mot de passe, d'adresse de service privé, ni de dépendance externe ou de ressource chargée d'un
domaine tiers. Écris ce constat dans `.pipeline/changes.md` — c'est une **lecture**, pas une mesure,
et elle se dit comme telle.

**(b) Aucune chaîne de la dette D-17.** Reprends la liste des noms d'objets et de clients de la ligne
**D-17** du §8 du `CLAUDE.md`. **Ne la recopie nulle part** : ni dans ce dépôt, ni dans tes artefacts
`.pipeline/`, ni dans ton compte rendu. Pour chaque chaîne et chacun des quatre fichiers, mesure
`grep -c '<chaîne>' <fichier>`. Chaque compte doit valoir **0** (compte de **lignes** ; à zéro, lignes
et occurrences coïncident). Rapporte un tableau de comptes, **sans les chaînes en clair** : numérote-les.

> **Mesure fichier par fichier, quatre fois par chaîne — et le motif n'est pas une défaillance de
> l'outil.** `grep -r` fonctionne sur cette machine ; ne va pas écrire le contraire. Le motif est que
> le critère 2 exige un compte **attribuable à son fichier** : quatre fichiers, quatre comptes, pour
> chaque chaîne. Un balayage récursif rend une liste de chemins ou un total, jamais le tableau que le
> critère demande.

**(c) Inventaire de collision — la leçon du 12 septembre appliquée à l'envers.** Ce jour-là, une règle
posée a désarmé une commande du dépôt. Ici, on enregistre des commandes **sous un plancher déjà posé** :
la même rencontre, dans l'autre sens. Pour chacun des quatre fichiers, lance

```
grep -nE 'git (merge|tag|push|branch|checkout|restore|reset|clean|rebase|remote)' <fichier>
```

et **statue chaque ligne remontée, une par une** : la commande y est-elle **exécutée**, ou seulement
**affichée / citée en prose** ? Une commande affichée dans un message destiné au chef de projet n'est
pas concernée par le plancher. **Le balayage ne conclut pas seul : il donne les candidats, la lecture
tranche.** Aucune commande **exécutée** par ces fichiers ne doit tomber sous une règle `deny` de
`.claude/settings.json`. S'il y en a une — **ARRÊTE-TOI et signale-la**, sans rien enregistrer : ce
serait le défaut du 12 septembre, réintroduit par le fichier censé le corriger.

### Geste 3 — enregistrer les quatre fichiers, et eux seuls

Second enregistrement, en **staging précis**, jamais `git add -A` :

```
git add .claude/commands/land.md .claude/commands/ship.md .claude/agents/prompt-reviewer.md prompts/v0.9/SPIKE_essai0-plancher_v2.md
```

Message :

```
chore(harnais): commandes /ship et /land adaptees, relecteur de prompts, prompt d'essai 0 joue
```

**Les fichiers non suivis qui restent dans l'arbre ne s'enregistrent pas, et leur nom est ici pour que
tu ne les prennes pas au passage** : `prompts/v0.9/CHORE_descente-harnais_v1.md`,
`prompts/v0.9/CHORE_descente-harnais_v2.md`, `prompts/v0.9/CHORE_descente-harnais_v3.md`,
`prompts/v0.9/CHORE_harnais-au-depot_v1.md` et `tasks/REPRISE.md`. Les trois premiers sont un sujet
abandonné que le chef de projet retire à la main ; le quatrième est la révision refusée du présent
prompt, qui n'entre pas au dépôt ; le cinquième suit sa propre convention et son propre enregistrement. **Si l'un d'eux apparaît dans ton
diff, tu as fait un `git add` trop large : défais l'indexation et recommence.**

Puis lance `bash scripts/gate.sh`, écris `.pipeline/changes.md`, `.pipeline/test-results.md` et
`.pipeline/review.md`, et termine par `.pipeline/STATUS.md = READY`.

---

## Ce que cet incrément NE fait PAS

Nommément, fichier par fichier :

- **`.claude/settings.json`** : non ouvert en écriture, non modifié. Il est **lu** au geste 2 (c) pour
  y confronter les commandes. Ses 39 règles `deny` et sa règle `ask` ne bougent d'aucun caractère.
- **`.claude/settings.local.json`** : jamais ouvert. Réglage de poste, geste du chef de projet.
- **`.claude/commands/land.md`, `ship.md`, `.claude/agents/prompt-reviewer.md`** : **enregistrés tels
  quels**, pas relus pour être améliorés, pas reformatés, pas d'un octet changés.
- **`prompts/v0.9/SPIKE_essai0-plancher_v2.md`** : déposé comme **archive de ce qui a été joué**.
  Son contenu n'est pas une consigne pour toi : **tu ne rejoues aucun de ses essais**, tu n'exécutes
  aucune commande qu'il décrit, tu ne le corriges pas.
- **`.claude/commands/fix.md`, `diagnose.md`, `session-start.md`, `session-close.md` et
  `.claude/agents/diagnostician.md`, `reviewer.md`** : inchangés, non enregistrés.
- **`CLAUDE.md`** : pas une section, pas une ligne. Ni le **§11** — dont l'étape 3 confie encore la
  fusion à l'agent alors que le nouveau `land.md` ne fusionne plus : **divergence connue, choisie,
  traitée ailleurs**. Ni une section « Règles de sécurité ». Ni le chiffre des règles éprouvées. Ni le
  §8. Seul le pied de page changera, au `/land`, pour le numéro de version.
- **`tasks/ROADMAP.md`, `tasks/lessons.md`, `tasks/JOURNAL_v0.2.md`, `VERSION`** : non modifiés par
  toi. Le journal, la leçon et le bump appartiennent au `/land`.
- **`index.html`** : non ouvert. Ni la passe des tirets cadratins, ni la passe d'accessibilité de la
  dette **D-20**, qui exigerait d'autoriser en toutes lettres la modification de la feuille de style.
- **`scripts/*`** : non ouverts, non modifiés. Le filet est **lancé**, il n'est pas touché.
- **`.pipeline/`** : tu y écris tes artefacts, et **tu ne le balayes pas** avec un critère
  anti-publication. Ce dossier est exclu du dépôt par son propre `.gitignore` (`*` puis `!.gitignore`) :
  rien de ce qu'il contient n'est publié, et un contrôle qui l'inspecte rougirait sans objet.
- **La dette D-17** : ni la famille A ni la famille B n'est traitée. Le geste 2 (b) vérifie seulement
  qu'aucun fichier enregistré n'agrandit le périmètre. **Aucune dette D-1 à D-22 n'est soldée**, aucune
  n'est inscrite.
- **Aucun essai de permission n'est joué.** Trente règles sur trente-neuf restent non éprouvées une à
  une, et tes artefacts le disent en ces termes.
- **Aucune fusion, aucun push, aucune suppression de branche.**

---

## Critères d'acceptation

| # | Critère | Comment il se vérifie |
|---|---|---|
| 1 | Les quatre fichiers sont enregistrés **inchangés** | après l'enregistrement, `wc -c` sur chacun des quatre rend **toujours** les valeurs du prérequis 4, et `git status --porcelain` ne porte plus aucun de ces quatre chemins |
| 2 | Aucune chaîne de la ligne D-17 dans les fichiers enregistrés | tableau de comptes du geste 2 (b), **tous à 0** (compte de lignes), mesuré fichier par fichier |
| 3 | Aucune commande exécutée par ces fichiers ne tombe sous une règle `deny` | inventaire du geste 2 (c), chaque ligne statuée « exécutée » ou « affichée » |
| 4 | Le diff de la branche ne nomme que **cinq chemins** — les quatre fichiers et le prompt pilote | `git diff --name-only main...HEAD` ; aucun autre chemin, en particulier aucun de ceux nommés au geste 3 |
| 5 | Le filet sort en **code 0**, avec les **4 avertissements** attendus de la dette D-4 | `bash scripts/gate.sh` |
| 6 | Preuve de vie du filet | la sortie porte **au moins 8** lignes commençant par `OK -` (compte de **lignes**) : `bash scripts/gate.sh \| grep -c '^OK -'`. Sortie muette avec un code 0 ⇒ lanceur mort pris pour un vert ⇒ **STOP** |
| 7 | `VERSION` vaut toujours `0.9.4` à `READY` | `cat VERSION` ; le bump appartient au `/land` |

**Ce que le critère 5 ne prouve pas, et il faut l'écrire ainsi.** Le filet vérifie le site, et le site
n'a pas été ouvert. Un vert ici prouve que cet incrément **n'a rien cassé** ; il ne prouve rien sur le
harnais enregistré. Si le critère 5 échoue, **arrête-toi** : cet incrément n'a pas le mandat de le
réparer.

---

## Après `READY` — ce qui appartient au chef de projet

Rien de ce paragraphe n'est une instruction pour toi. Il est là pour que la passation soit lisible.

1. Revue, puis fusion de la branche dans `main`. Le nouveau `/land` refuse proprement tant qu'elle ne
   l'est pas, en affichant la commande exacte à taper : lis-la là plutôt qu'ici.
2. `/land chore/harnais-au-depot` — bump patch **0.9.4 → 0.9.5**, journal, leçon éventuelle, `CLOSED`.
3. Publication vers le dépôt distant, puis suppression de la branche fusionnée. Le `/land` affiche la
   ligne exacte à son ÉTAPE 8.
4. Retrait à la main des trois révisions de `CHORE_descente-harnais` restées dans `prompts/v0.9/`.
5. Enregistrement de `tasks/REPRISE.md`, **après** cet incrément et non avant, pour la raison dite au
   prérequis 2.

---

*Prompt rédigé par Cowork le 12 septembre 2026 · révision v2 · un seul exemplaire, dépôt qui fait foi :
`lianazel.github.io/prompts/v0.9/`.*
