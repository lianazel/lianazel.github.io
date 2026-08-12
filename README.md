# lianazel.github.io

**[Français](#français) · [English](#english)**

---

## Français

Portfolio professionnel de Jean-Christophe Cherid, développeur. Trente-cinq ans d'artisanat logiciel,
de l'IBM i aux applications web modernes.

**Le site : https://lianazel.github.io**

### Ce que c'est

Un site vitrine d'une seule page, bilingue français et anglais, publié par GitHub Pages.

Il n'a **aucune dépendance externe** : aucune bibliothèque, aucun paquet, aucune ressource chargée
depuis un domaine tiers, aucun appel réseau au chargement. Tout tient dans `index.html`, mise en forme
et programme compris. La bascule de langue est un dictionnaire fermé, écrit en JavaScript natif.

Ce choix n'est pas de la nostalgie. Un site sans dépendance n'offre aucune prise à une attaque par la
chaîne d'approvisionnement, ne vieillit pas au rythme d'un écosystème, et se publie sans étape de
construction.

### Comment il est vérifié

```
bash scripts/gate.sh
```

Des contrôles écrits en JavaScript natif, sans cadre de test tiers, parce que le projet n'a ni
construction ni paquet. Ils vérifient notamment que chaque texte affiché existe dans les deux langues,
qu'aucune clé de traduction n'est présente dans une seule langue ni déclarée deux fois, que les liens de
navigation pointent vers des sections réelles, et que l'adresse de contact est identique partout où elle
apparaît.

**La porte s'éprouve elle-même avant d'éprouver le site.** Des fichiers volontairement défectueux vivent
dans `scripts/fixtures/`, et la porte doit échouer dessus **en nommant** chaque défaut semé. Un contrôle
que l'on n'a jamais vu refuser n'est pas un contrôle, c'est une croyance.

### Comment il est construit

Ce dépôt est aussi la trace de sa propre fabrication. Le site est développé sous un harnais de travail
avec l'IA, conçu par son auteur.

| Où regarder | Ce qu'on y trouve |
|---|---|
| `prompts/` | ce qui a été demandé, incrément par incrément |
| `tasks/JOURNAL_*.md` | ce qui a été fait, avec les décisions et leurs motifs |
| `tasks/lessons.md` | ce qui a été appris, chaque leçon citant l'incident daté qui l'a produite |
| `CLAUDE.md` | le cadrage du projet, y compris ses déviations connues et sa dette assumée |
| `scripts/` | ce qui est vérifié, et comment on prouve que la vérification mord |

Un prompt transmis ne se retouche pas : une évolution donne une nouvelle révision, jamais une
modification en place. Le journal est de l'histoire et ne se réécrit pas.

---

## English

Professional portfolio of Jean-Christophe Cherid, software developer. Thirty-five years of software
craft, from IBM i to modern web applications.

**The site: https://lianazel.github.io**

### What this is

A single-page showcase site, bilingual French and English, published by GitHub Pages.

It has **no external dependency**: no library, no package, no resource loaded from a third-party
domain, no network call on load. Everything lives in `index.html`, styling and script included. The
language switch is a closed dictionary written in plain JavaScript.

This is not nostalgia. A site with no dependency offers no supply chain attack surface, does not age
with an ecosystem, and ships without a build step.

### How it is verified

```
bash scripts/gate.sh
```

Checks written in plain JavaScript, with no third-party test framework, because the project has neither
a build nor a package manager. They verify, among other things, that every displayed string exists in
both languages, that no translation key exists in only one language or is declared twice, that
navigation links point to sections that actually exist, and that the contact address is identical
everywhere it appears.

**The gate is tested before the site is.** Deliberately broken files live in `scripts/fixtures/`, and
the gate must fail on them **while naming** each planted defect. A check never seen to refuse is not a
check, it is a belief.

### How it is built

This repository is also the record of its own making. The site is developed under an AI working
harness, designed by its author. This practice is known as harness engineering.

| Where to look | What you will find |
|---|---|
| `prompts/` | what was asked, increment by increment |
| `tasks/JOURNAL_*.md` | what was done, with the decisions and their reasons |
| `tasks/lessons.md` | what was learned, each lesson citing the dated incident behind it |
| `CLAUDE.md` | the project brief, including its known deviations and accepted debt |
| `scripts/` | what is verified, and how the verification is proven to bite |

A prompt that has been handed over is never edited: a change produces a new revision, never an
in-place modification. The journal is history and is not rewritten.
