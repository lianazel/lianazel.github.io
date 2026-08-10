# EVOL — L'accroche dit ce que le harnais fait : qualité avant vitesse

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : v1 · **Date** : 10 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Solde** : aucune dette. Corrige une **incohérence de discours** relevée par le chef de projet.

> ⚠️ **Ce prompt est présent dans l'arbre de travail sans être enregistré.** Il a été déposé après la
> clôture de la session 9. **Ton premier geste est de l'enregistrer comme premier commit de ta
> branche**, message `docs:`, en attribuant l'écriture au Tech Lead dans le corps du message. Ne
> l'enregistre **jamais** directement sur `main`.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué — ou pourquoi il est écarté |
|---|---|---|---|
| `UX_METHOD` | 1.1 | **Appliqué** | Le chantier touche un **libellé visible**, dans les deux langues. Cible petit écran d'abord : la formulation retenue est **plus courte** que l'actuelle, donc le budget de place s'améliore. |
| `VISION_METHOD` | 1.2 | **Consulté, non instancié** | C'est la dette **D-1**, toujours ouverte. Le texte de l'accroche se reflue sur plusieurs lignes à 320 px : le risque visuel est **réel mais favorable** — on raccourcit. Aucune mesure automatique ne le prouvera ; validation humaine due, voir §7. |
| `ASSURANCE_METHOD` | 1.2 | **Consulté, écarté** | Aucune porte créée ni modifiée. Le filet existant s'applique tel quel : la valeur d'une clé change, aucune clé n'apparaît ni ne disparaît. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau, aucune saisie traitée. Trois chaînes de caractères. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Objectif

La page porte des badges « harnais IA TWAIM ». Le harnais affiche, sur sa propre page publique, le
principe **« Qualité avant vitesse »**. Or la **première phrase que lit un visiteur** promet de
« piloter l'IA pour livrer **vite et bien** ».

C'est la seule ligne du site qui **contredit ce qu'il revendique**, et elle est au-dessus de la ligne
de flottaison. « Vite et bien » est une promesse ; « qualité avant vitesse » est un **arbitrage** — et
un arbitrage se vérifie, ce qu'une promesse ne fait pas.

**Aucune porte ne pouvait attraper ce défaut**, et c'est écrit : la première limite déclarée dans
l'en-tête de `check-i18n.mjs` dit que le filet n'attrape pas une phrase fausse, seulement une phrase
absente. Relevé par l'œil du chef de projet, en comparant deux pages.

## 2. Périmètre

`index.html` **uniquement** : le texte visible de l'accroche et sa clé dans les deux dictionnaires.

## 3. Hors périmètre — ne pas y toucher

Le reste de la page · la feuille de style · `scripts/` sous toutes ses formes · les cartes de projets
(chantier **E-3**, à venir) · **D-8**, **D-12**, **D-7**, **D-1**, **D-13** · `tasks/ROADMAP.md`.

> **Un contrôle serait concevable et n'est PAS demandé.** Le texte visible et sa valeur au
> dictionnaire français sont **deux copies** que rien ne compare — même famille que l'adresse de
> contact, qui a son 7ᵉ contrôle. Mais le problème est **général à toutes les clés**, pas propre à
> celle-ci : le traiter ici serait le traiter mal. Si tu juges l'idée bonne, **écris-la en fin de
> rapport comme candidate d'incrément** — ne l'implémente pas.

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. L'arbre de travail est propre **à l'exception du présent prompt**, et `main` est **à jour avec son
   distant** (`git rev-list --left-right --count main...origin/main` = `0 0`).
2. `bash scripts/gate.sh` sort en **code 0** avec **exactement 4 avertissements** avant toute
   modification.
3. `index.html` porte **exactement trois** occurrences de la chaîne `vite et bien` / `fast and well` :
   une dans le texte visible, une par dictionnaire. Un compte différent est une anomalie — arrête-toi.

*(Pré-conditions écrites en **relation vérifiable** et non en valeur figée : une pré-condition qui cite
un numéro de version pourrit au premier atterrissage suivant. Leçon du 10 août 2026, appliquée ici.)*

## 5. Spécification — une propriété, pas un mécanisme

**Propriété exigée après l'incrément** : les **trois** occurrences de la phrase d'accroche portent le
texte ci-dessous, à la ponctuation près, et **aucune autre chaîne de la page ne change**.

**Français** — texte visible et clé `hero_sub` du bloc `fr` :

> Un socle technique de 35 ans — IBM, Oracle, Windev, .NET — enrichi par une méthode de travail moderne : concevoir l'architecture, rédiger les spécifications, et piloter l'IA. Qualité avant vitesse.

**Anglais** — clé `hero_sub` du bloc `en` :

> A 35-year technical foundation — IBM, Oracle, Windev, .NET — enhanced by a modern workflow: designing the architecture, writing the specifications, and steering AI. Quality before speed.

**Deux points de vigilance, tirés de l'histoire du projet :**

1. **Le texte visible et la valeur du dictionnaire français doivent rester identiques.** C'est la
   même exigence que pour l'adresse de contact, et la même façon de la rater : n'en changer qu'un.
2. **Les tirets sont des tirets cadratins (`—`) et l'apostrophe est typographique (`'`)**, comme dans
   l'existant. Ne pas les remplacer par leurs équivalents machine à écrire.

## 6. Preuve exigée

1. `bash scripts/gate.sh` sort en **code 0** avec **exactement 4 avertissements** — pas un de plus.
   Un cinquième signifie qu'une clé a été touchée par erreur.
2. Le rapport du filet affiche le **même nombre de clés** qu'avant (170 / 170) et un nombre de suites
   de texte visible **du même ordre** : la phrase passe de une à deux, l'extraction peut donc varier
   de peu. **Écris les deux valeurs, avant et après.** Une variation forte est un signal.
3. `git diff` sur `index.html` montre **trois lignes modifiées, et rien d'autre**. Le joindre à
   `.pipeline/changes.md`.

## 7. Validation humaine due avant publication

Rien de ce qui suit n'est prouvable dans ce dépôt (dette **D-1**) :

- l'accroche à **320, 375 et 430 px**, dans les deux langues — la phrase se reflue, et c'est le bloc
  le plus visible du site ;
- l'aspect de la **phrase courte finale** : elle doit tomber comme une affirmation, pas comme un
  fragment orphelin en bas de paragraphe.

## 8. Livrables

`.pipeline/spec.md` · `.pipeline/changes.md` (avec le différentiel) · `.pipeline/test-results.md`
(les deux relevés du filet, avant et après) · revue par l'agent `reviewer` · `STATUS.md` = `READY`.
**STOP avant `git push`.**

## 9. Critères d'acceptation

1. Les trois occurrences portent le nouveau texte, à l'identique entre le visible et le dictionnaire
   français.
2. `bash scripts/gate.sh` vert, **exactement 4 avertissements**.
3. Le différentiel de `index.html` ne porte **que** ces trois lignes.
4. `scripts/` **rigoureusement intact** — `git diff` doit le montrer absent du périmètre.
5. Le prompt est enregistré comme **premier commit de la branche**, attribué au Tech Lead.
