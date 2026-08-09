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
