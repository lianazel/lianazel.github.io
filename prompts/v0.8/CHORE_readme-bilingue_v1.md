# CHORE — Le dépôt accueille enfin celui qui suit le lien

**Projet** : `lianazel.github.io` · **Type** : CHORE (documentation) · **Version du prompt** : **v1** · **Date** : 12 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Ton premier geste est de l'enregistrer comme
> **premier commit de ta branche**, message `docs:`, attribution au Tech Lead. Jamais sur `main`.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué, ou pourquoi il est écarté |
|---|---|---|---|
| `STYLE_METHOD` | 1.1 | **Appliqué, et c'est le cœur du prompt** | **S-1** : aucun tiret cadratin. **S-2** : aucune affirmation sur soi, le fichier montre où regarder au lieu de dire ce qu'il vaut. **S-4** : les deux versions linguistiques ne sont pas des traductions mot à mot, chacune s'adresse à son lecteur. |
| `SECURITY_METHOD` | 1.6 | **Appliqué sur deux points** | Aucun secret, aucun chemin de machine, aucune adresse interne. Et **aucun nom appartenant à un tiers**, ce qui est la ligne D-17 respectée par construction. |
| `UX_METHOD` · `ASSURANCE_METHOD` · `VISION_METHOD` | — | **Écartés** | Aucune interface, aucune porte, aucun rendu du site touché. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Objectif, et il vient d'un manque mesuré

**Le dépôt ne contient aucun `README.md`.** Vérifié le 12 août 2026 à `9add85b`.

Or l'incrément du bloc TWAIM place sur le site un lien vers ce dépôt, et l'argument qu'il porte est que
**la méthode se vérifie sur pièces**. Un lecteur qui suit ce lien arrive donc sur une liste de fichiers
sans une phrase pour lui dire ce qu'il regarde.

Ce prompt crée cette phrase. **Il ne change rien au site.**

---

## 2. Périmètre

Un fichier neuf, `README.md`, à la racine du dépôt. **Rien d'autre.**

**Un seul fichier, les deux langues à l'intérieur.** Deux fichiers séparés seraient deux copies que rien
ne compare, et ce projet en connaît le prix : c'est la mécanique de la dette D-14, où la page et le
dictionnaire portaient deux textes différents pour une même idée.

---

## 3. Hors périmètre, ne pas y toucher

`index.html` · `scripts/` · `CLAUDE.md` · `tasks/` · `prompts/` · `VERSION` · toute dette ouverte.

> **Aucun nombre dans ce fichier.** Ni un compte de contrôles, ni un compte de chemins, ni un compte de
> liens, ni un compte de clés. Ces nombres se périmeraient au premier incrément suivant, exactement
> comme ceux que la dette **D-18** vient de nommer. On **pointe** vers ce qui fait autorité, on ne le
> recopie pas.

---

## 4. Préconditions vérifiables

1. `main` est à jour avec son distant : `git rev-list --left-right --count main...origin/main` = `0 0`.
2. **Aucun `README.md` n'existe à la racine.** S'il en existe un, arrête-toi et signale-le : ce prompt
   crée, il n'écrase pas.
3. Aucune autre branche de travail n'est en cours.

---

## 5. Le contenu, mot pour mot

Écris exactement ce qui suit. Les deux langues, dans cet ordre, séparées par une ligne horizontale.

---

````markdown
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
````

---

## 6. Le point de vocabulaire, à ne pas « harmoniser »

Les deux versions **ne sont pas la traduction l'une de l'autre**, et c'est délibéré.

**Côté anglais**, la dernière section nomme la discipline : *harness engineering*. Le terme est installé
dans le monde anglophone, un lecteur le reconnaît, et les outils de tri de candidatures savent le
chercher.

**Côté français**, il ne se pose sur rien et il est absent. On décrit le dispositif sans le nommer.

C'est la règle S-4 du satellite de style : un vocabulaire ne se traduit pas, il s'adresse. **Ne pas
ajouter le terme anglais à la version française, ni le retirer de la version anglaise.**

---

> **Une ambiguïté levée avant transmission, et il faut savoir pourquoi.** Une première rédaction disait
> « aucune clé n'est **orpheline** ». Le mot se lit de deux façons : présente dans une seule langue, qui
> est un contrôle bloquant et une affirmation vraie ; ou déclarée mais jamais employée, qui est un
> avertissement non bloquant dont il existe **quatre** en ce moment, ceux de la dette D-4. Un lecteur
> qui suit l'invitation du document et lance la porte verrait quatre lignes contredire la phrase qu'il
> vient de lire. **Sur un document dont l'argument entier est « vérifiez vous-même », c'est le pire
> endroit possible pour une ambiguïté.** Relevé par l'agent d'exécution avant d'écrire une ligne, et
> tranché par le Tech Lead. Ne pas revenir à une formulation plus courte.

---

## 7. Critères d'acceptation

1. `README.md` existe à la racine, avec le contenu du §5 **mot pour mot**.
2. Les deux liens d'ancrage en tête du fichier fonctionnent, en rendu GitHub.
3. **Aucun tiret cadratin** dans le fichier.
4. **Aucun nombre** de contrôles, de chemins, de clés ou de liens.
5. **Aucun nom appartenant à un tiers**, aucun chemin de machine, aucun secret.
6. **Aucun autre fichier du dépôt n'est modifié.**
7. La section française **ne contient pas** le terme *harness engineering* ; la section anglaise le
   contient.
8. Porte verte, **exactement 4 avertissements**. Le filet ne lit pas le `README.md`, mais il doit rester
   vert.
9. Ce prompt est le **premier commit de la branche**, attribué au Tech Lead.

---

## 8. Une remarque à porter dans ton rapport

Ce fichier sera lu par des gens qui ne connaissent pas le projet, et **rien ne le vérifiera jamais**.
Aucune porte ne dira qu'une phrase a vieilli, qu'un dossier a été renommé, ou qu'un lien est mort.

Note-le dans `changes.md` : le `README.md` rejoint la courte liste des documents dont le seul instrument
est un lecteur. C'est la même famille que le style, et cela mérite d'être relu à chaque fois que
l'arborescence du dépôt change.

---

## 9. Livrables

- `.pipeline/spec.md`, `.pipeline/changes.md`, `.pipeline/test-results.md`, `.pipeline/last-diff.patch`.
- `.pipeline/STATUS.md` = `READY — étape <N> — <horodatage ISO> — <branche> — tests <X/Y>` en **dernier
  geste**.

---

*Prompt déposé le 12 août 2026 par le Tech Lead. Déposer n'est pas transmettre : il attend la
désignation du chef de projet.*
