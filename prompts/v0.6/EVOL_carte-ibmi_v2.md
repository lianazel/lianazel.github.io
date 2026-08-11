# EVOL — La carte IBM i dit ce que je sais faire, et se traduit

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : **v2** · **Date** : 11 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Remplace** : `EVOL_carte-ibmi_v1.md`, **jamais transmis**. Deux étiquettes retirées sur décision du
chef de projet, et une convention de ponctuation nouvelle appliquée par anticipation (voir ci-dessous).

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Ton premier geste est de l'enregistrer comme
> **premier commit de ta branche**, message `docs:`, attribution au Tech Lead. Jamais sur `main`.

---

## Ce que la v1 disait de trop

**Trois étiquettes portaient un tiret cadratin.** Une relecture extérieure a établi que la page en
compte **151 hors commentaires**, et que cette densité pèse. Décision du chef de projet :

- `AS/400 — IBM i` : **retirée**. Le titre de la carte dit déjà « IBM i » : la mention est redondante.
- `DDS — écrans & base` : **devient `DDS`**. Sur une carte IBM i, le sigle est sans ambiguïté.
- `IBM i — RPG & modernisation` : **conservée telle quelle**, seul cadratin de la carte, dans son titre.

La carte passe donc de **neuf à huit étiquettes**, et de cinq à **quatre paires de clés nouvelles**.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué — ou pourquoi il est écarté |
|---|---|---|---|
| `UX_METHOD` | 1.1 | **Appliqué** | Libellés visibles, deux langues. La carte passe de 5 à 8 étiquettes : seul point où la cible petit écran d'abord est engagée (§7). |
| `VISION_METHOD` | 1.2 | **Consulté, non instancié** | Dette **D-1**. La carte devient la plus haute de la grille ; aucune mesure automatique ne le verra. |
| `ASSURANCE_METHOD` | 1.2 | **Consulté, écarté** | Aucune porte créée ni modifiée. Les contrôles de symétrie et de couverture couvrent les clés nouvelles. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau, aucune saisie. Des libellés. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Objectif — et il vient d'un fait, pas d'une intuition

**Le 10 août 2026, un recruteur a demandé au chef de projet s'il avait pratiqué le RPG en format
libre. Il n'a pas su répondre.** La réponse est oui : vérifié depuis dans ses sources de 2015,
**douze programmes sur quatorze** en contiennent, plus du SQL incorporé, du CLLE, des écrans et une
base en DDS, des appels prototypés et des modules ILE.

**Rien de tout cela n'est sur la page.** La carte de compétences correspondante porte cinq étiquettes,
s'intitule **« IBM / Legacy »**, et **son titre est le seul de la grille à ne pas être traduisible** :
il n'a aucune clé de dictionnaire.

Deux défauts. *« Legacy »* dit **l'inverse** du positionnement de la page : on ne vend pas de la
modernisation IBM i sous une étiquette qui range la compétence au passé. Et le titre restera français
en anglais.

## 2. Périmètre

`index.html` **uniquement** : la carte de compétences IBM (une ligne), et les deux blocs de langue.

## 3. Hors périmètre — ne pas y toucher

Les cinq autres cartes de compétences · le reste de la page · **les 151 autres tirets cadratins de la
page, qui font l'objet d'un chantier distinct** · la feuille de style · `scripts/` · la frise
d'expérience · **D-8**, **D-12**, **D-13**, **D-15** · `tasks/ROADMAP.md`.

> **La carte « Windev / Webdev » n'a pas non plus de clé de traduction, et c'est LÉGITIME** : c'est un
> **nom de produit**, il ne se traduit pas, comme `Adelia` ou `DB2/400`. **Ne pas la toucher, et ne pas
> la « corriger » plus tard** : cette ligne existe pour qu'on ne repaie pas cet examen.

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. `main` est à jour avec son distant (`git rev-list --left-right --count main...origin/main` = `0 0`)
   et porte la clé `tag_exp` sur l'étiquette de la section Expérience.
2. L'arbre de travail est propre **à l'exception des prompts non enregistrés**.
3. `bash scripts/gate.sh` sort en **code 0** avec **exactement 4 avertissements**, et ce sont les
   quatre clés orphelines connues (`e7_title`, `e7_desc`, `p3_title`, `p3_desc`, dette D-4).
4. Les clés `sk3_title`, `ibm1`, `ibm2`, `ibm3` **n'existent pas encore**. Si l'une existe,
   arrête-toi : quelqu'un est passé avant toi.

## 5. Spécification — des propriétés, pas des gestes

### P1 · Le titre de la carte dit la plateforme et l'intention, et il se traduit

Le `<h3>` porte désormais la clé **`sk3_title`** — numéro libre, conforme à la série existante.

| Clé | Français | Anglais |
|---|---|---|
| `sk3_title` | `IBM i — RPG & modernisation` | `IBM i — RPG & modernization` |

*L'orthographe anglaise diffère d'une lettre. C'est précisément pourquoi la clé est nécessaire : sans
elle, la version anglaise afficherait le mot français.*

### P2 · La carte porte huit étiquettes, dont trois traduites

Dans cet ordre, toutes en `class="tag red"` comme les actuelles :

| # | Étiquette (français) | Clé | Anglais |
|---|---|---|---|
| 1 | `RPG III/IV/ILE` | — | — |
| 2 | `RPG format libre` | **`ibm1`** | `RPG free-format` |
| 3 | `CLLE` | — | — |
| 4 | `SQL incorporé` | **`ibm2`** | `Embedded SQL` |
| 5 | `DB2/400` | — | — |
| 6 | `DDS` | — | — |
| 7 | `API système OS/400` | **`ibm3`** | `OS/400 system APIs` |
| 8 | `Adelia` | — | — |

**Trois précisions volontaires :**

1. **L'étiquette `AS/400 — IBMi` disparaît** : le titre de la carte porte déjà « IBM i ».
2. **`OS/400` seule disparaît**, absorbée par `API système OS/400`. Le mot reste cherchable sans
   occuper deux places.
3. **Les cinq étiquettes sans clé sont des sigles ou des noms propres** identiques dans les deux
   langues. Leur absence de clé est un choix, pas un oubli.

### P3 · Rien d'autre ne bouge

Aucune autre carte, aucun autre libellé, aucune règle de style. Le différentiel doit être lisible en
une lecture.

## 6. Preuve exigée

1. `bash scripts/gate.sh` en **code 0** avec **exactement 4 avertissements** — pas cinq. Un cinquième
   signifierait une clé nouvelle jamais employée dans la page.
2. **Les quatre clés nouvelles sont employées exactement une fois** dans la page. Le prouver par
   programme, pas à l'œil.
3. **Le compte de clés par langue, avant et après** : `+4` de chaque côté, et **symétrique**. Écris
   les deux valeurs.
4. **Le compte de tirets cadratins dans la page ne doit pas augmenter.** Il est de **151 hors
   commentaires** avant l'incrément. La carte en retire deux et n'en ajoute qu'un : le compte doit
   donc **baisser de un au moins**. Écris la valeur avant et après.
5. `git diff` ne porte que sur `index.html`, et à l'intérieur, **que sur la ligne de la carte IBM et
   les deux blocs de dictionnaire**. `scripts/` intact, à prouver.

## 7. Validation humaine due avant publication

Rien de ce qui suit n'est prouvable ici (dette **D-1**) :

- **La carte passe de cinq à huit étiquettes et devient la plus haute de la grille** — les autres en
  portent quatre à six. À regarder à **320, 375 et 900 px**, dans les deux langues : la grille ne doit
  pas se déséquilibrer, et `API système OS/400` ne doit pas déborder de sa carte.
- **Le titre en anglais** : `IBM i — RPG & modernization`, avec le `z`.

## 8. Livrables

`.pipeline/spec.md` · `.pipeline/changes.md` · `.pipeline/test-results.md` (comptes de clés, preuve
d'emploi unique des quatre clés, compte de cadratins avant et après) · revue par l'agent `reviewer` ·
`STATUS.md` = `READY`. **STOP avant `git push`.**

## 9. Critères d'acceptation

1. Le titre de la carte porte `sk3_title` et affiche `IBM i — RPG & modernisation` en français.
2. La carte porte les huit étiquettes de P2, dans l'ordre, en `tag red`.
3. Les quatre clés nouvelles existent **dans les deux blocs de langue** et sont employées **une fois**.
4. Porte verte, **exactement 4 avertissements**, et ce sont les quatre de D-4.
5. Comptes de clés symétriques, `+4` de chaque côté.
6. **Le compte de cadratins de la page a baissé**, il n'a pas augmenté.
7. La carte « Windev / Webdev » est **inchangée**.
8. `scripts/` **rigoureusement intact**.
9. Le présent prompt est le **premier commit de la branche**, attribué au Tech Lead.
