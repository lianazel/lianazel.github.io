---
description: Atterrissage d'incrément lianazel.github.io — Portfolio JC en un geste — tests + construction + bump + journal + STATUS, commit de clôture, STOP avant push (§5.5 / RD-014). Le merge précède /land, il n'en fait plus partie (geste du chef de projet, v2.30). Gardes remontées des instances TwaimWeb et IBMiAPI (HARN-001, 9 septembre 2026).
argument-hint: "<branche> [bump=patch|minor|major] [note de cadrage]"
---

Atterris l'incrément revué SHIP pour : $ARGUMENTS

Commande **autonome et auto-gardée**. Préconditions : `/ship` clôturé SHIP (revue + tests verts, `.pipeline/STATUS.md = READY`), branche `<type>/<slug>` (`feat/`, `fix/`, `chore/` ou `spike/`, selon le type du prompt) **déjà fusionnée dans `main` par le chef de projet**, accord du chef de projet donné. Lis `CLAUDE.md` (source de vérité) avant d'agir. **Ne merge jamais, ne pousse jamais** : le merge et le push sont des gestes du chef de projet, et `git merge` est refusé par la liste d'interdits (`.claude/settings.json`).

**Une garde qui ne peut pas mesurer ne dit pas « tout va bien », et une garde qui pend ne dit rien du tout.** Un code de sortie nul n'est pas un résultat : c'est un code de sortie. Chaque garde ci-dessous exige une preuve de vie, et c'est l'absence de preuve qui arrête.

## ÉTAPE 0 — PRÉ-GARDES (refus propre si une garde casse)
- **Rafraîchis la référence distante** : `timeout 30 git fetch origin --no-tags` (borné à 30 secondes, sans étiquettes). Sans lui, la garde de synchro compare à une **copie locale** de l'état distant, qui ne bouge qu'au `fetch`, au `push` ou au `pull` : elle peut crier faux, ou se taire à tort. Échec ou dépassement (réseau, identifiants, attente sans fin) → déclare « synchro distante inconnue » et **ARRÊTE-TOI**, ne conclus pas.
- Lis `.pipeline/STATUS.md` PAR LE CONTENU (jamais le mtime). Doit valoir `READY` pour cet incrément.
  - Si `LANDING` → un /land a été coupé : bascule en MODE REPRISE (voir /session-start), n'enchaîne pas à l'aveugle.
  - Sinon (pas READY) → REFUS + message clair, aucun effet de bord.
- Clôture précédente poussée : `git log origin/main..main --first-parent --no-merges --format=%h` DOIT être vide (le seul commit de `main` au-delà d'`origin/main` est le merge du chef de projet, exclu par `--no-merges`). Sinon REFUS : « clôture précédente non poussée — pousse d'abord ». **Cette garde ne s'applique pas si le marqueur vaut `LANDING`** : en mode reprise, l'avance locale est la fusion qu'on est en train de refermer, pas une clôture oubliée.
- **Revue fraîche** : le dernier verdict de `/ship` pour `<branche>` vaut `SHIP`, et **aucun commit n'a été ajouté à la branche après cette revue**. Verdict autre que `SHIP`, ou commit postérieur à la revue → REFUS, aucun effet de bord. **Moyen de contrôle de ce projet** : il n'a aucun outil de garde ; le `reviewer` écrit `.pipeline/review.md` en prose. Lis le verdict en tête de ce fichier, et compare sa date de modification à celle du dernier enregistrement de `<branche>` (`git log -1 --format=%cI <branche>`). Fichier absent, verdict autre que `SHIP`, ou enregistrement postérieur au fichier → REFUS. **Le chef de projet peut lever ce refus explicitement** (`CLAUDE.md` §2 : le veto du `reviewer` est overrulable) ; il le dit dans la commande, et l'ÉTAPE 5 le trace en « Arbitrages rendus ».
- `git status --porcelain` : aucun fichier SUIVI modifié/indexé en attente. Sinon REFUS.
- `<branche>` existe et est **déjà fusionnée dans `main`** : `git branch --merged main` DOIT la lister. Sinon REFUS, aucun effet de bord, en affichant EXACTEMENT la commande que le chef de projet doit taper : `git merge --no-ff <branche> -m "Merge branch '<branche>'"` — puis relancer `/land`.

## ÉTAPE 1 — MARQUEUR D'ENTRÉE
- Écris `.pipeline/STATUS.md` = `LANDING — <incrément> — <ISO> — <branche>` AVANT tout autre geste.

## ÉTAPE 2 — HASH DE MERGE
- Relève le hash du commit de merge sur `main` : `git log --merges -1 --format=%h main`. Il sert à l'ÉTAPE 5 et au message de l'ÉTAPE 7.
- Aucun `git merge` ici, quel que soit l'état constaté : l'ÉTAPE 0 a déjà refusé si la branche n'est pas fusionnée.

## ÉTAPE 3 — FILET DE TESTS ET DE CONSTRUCTION
- **Tests** : lance les tests aucun cadre tiers — contrôles Node natifs sur la logique testable (dictionnaire bilingue (complétude, symétrie, doublons) et ancres de navigation) : `bash scripts/gate.sh`. Preuve de vie exigée, **propre à ce dépôt** : la sortie porte **au moins 8 lignes commençant par `OK -`** (compte de lignes), une par bloc de preuve de morsure ; le neuvième bloc éprouve le site réel et n'en produit pas. Mesuré le 12 septembre 2026 : `grep -c '^echo "OK -' scripts/gate.sh` rend **8**. C'est la **nullité** qui alarme, jamais la valeur : le nombre monte avec le filet. Sortie vide ou muette avec un code de sortie nul ⇒ lanceur mort pris pour un vert ⇒ **STOP**, ne conclus pas.
- **Construction : ce projet n'en a aucune.** Site statique publié directement depuis `main` par GitHub Pages, aucune étape de construction (`CLAUDE.md` §1). Cette ligne se saute, et **le compte rendu le dit** plutôt que de la passer en silence.
- ROUGE, ou preuve de vie manquante → remets `STATUS=READY`, rapport nommant les tests rouges ou la preuve absente, STOP. Aucun `git reset`, aucun `git revert` : défaire le merge est un geste du chef de projet.
- VERT avec ses preuves → continue, et **reporte les preuves** dans ton compte rendu : le compteur de tests, et le constat sur le fichier jetable.

## ÉTAPE 4 — BUMP SEMVER (idempotent)
- Niveau : `feat/*`→minor, `fix/*`|`chore/*`→patch ; override `bump=` depuis $ARGUMENTS. Si le `CLAUDE.md` du projet fixe une règle de jalon (ex. « `patch` tant que la version est < 1.0.0 »), elle prime sur le préfixe.
- **Manifeste de version de ce projet : le fichier `VERSION`** à la racine, une ligne. Le portfolio n'a **ni `package.json` ni `pyproject.toml`** : il n'a aucun gestionnaire de paquets, et c'est un **invariant** du `CLAUDE.md` §4. Il n'a donc **aucun fichier de verrouillage** à aligner.
- **Garde d'existence, avant toute écriture** : vérifie que `VERSION` existe réellement à la racine. S'il est absent — **ARRÊTE-TOI et signale**. Ne devine pas le manifeste, n'en cherche pas un autre, n'en crée pas : un manifeste manquant est une anomalie de dépôt, pas un cas à rattraper en douce.
- Mets à jour **les deux** copies du numéro : le fichier `VERSION` et le pied de `CLAUDE.md`. Si une copie est déjà à la cible, saute-la.

## ÉTAPE 5 — JOURNAL + LEÇON (idempotent)
- Écris l'entrée `tasks/JOURNAL_*.md` citant le HASH DE MERGE ; ajoute la leçon `tasks/lessons.md` s'il y en a une.
- Si l'entrée pour ce hash existe déjà, saute.
- L'entrée porte une section **« Arbitrages rendus »** : un tableau `Question | Ce qui a été tranché | Motif | Portée`.
  La colonne **Portée** vaut `précédent` ou `cas d'espèce`, et elle est **obligatoire** : sans elle, une tolérance
  ponctuelle devient une jurisprudence par accident. S'il n'y a eu aucun arbitrage, écris-le — « aucun » est une
  information, une section absente n'en est pas une.

## ÉTAPE 6 — STATUS CLOSED
- Écris `.pipeline/STATUS.md` = `CLOSED — session <N> : <synthèse 1 ligne>`.

## ÉTAPE 7 — COMMIT DE CLÔTURE (staging PRÉCIS, jamais -A)
- **Constate avant d'indexer.** `git add` est atomique : un seul chemin absent et **rien** n'est indexé. Vérifie l'existence de chaque chemin de la liste, **un par un**, et rapporte le constat. Un chemin absent qui n'a pas été modifié par cet incrément se retire de la commande et se signale. Un chemin absent qui aurait dû l'être (`VERSION`, `CLAUDE.md`, l'entrée de journal) est une anomalie : **ARRÊTE-TOI**.
- `git add VERSION CLAUDE.md tasks/JOURNAL_*.md tasks/lessons.md tasks/ROADMAP.md`
- **`tasks/ROADMAP.md` tient ici le rôle du backlog, et il figure dans la liste même s'il n'a pas bougé.** Une dette naît dans `.pipeline/`, qui est hors suivi de version : si l'incrément se referme sans elle, elle disparaît avec le dossier. `git add` sur un fichier inchangé ne fait rien ; l'oublier perd une dette pour de bon.
- **La liste est fermée, et elle arrête.** Un fichier suivi modifié qui n'y figure pas n'est **jamais indexé**, et il ne se laisse pas derrière soi non plus : **ARRÊTE-TOI**, nomme-le, rends la main. Le laisser en place fabriquerait l'arbre sale que la pré-garde du prochain atterrissage refusera.
- `git commit -m "docs: journal session <N> + bump <old> -> <new> — clôture (merge <hash>)"`
- N'indexe AUCUN fichier non-suivi. (`STATUS.md` est gitignoré → hors commit, voulu.)

## ÉTAPE 8 — STOP (porte de push)
- Affiche EXACTEMENT : `PRÊT À POUSSER — git push origin main && git branch -d <branche>`
- NE POUSSE PAS, ne supprime aucune branche. Le chef de projet valide (E5) puis pousse lui-même.
