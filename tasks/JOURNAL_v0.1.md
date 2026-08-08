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
