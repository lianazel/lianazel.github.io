# EVOL — La carte IBM i dit ce que je sais faire, et se traduit

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : v1 · **Date** : 11 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : PÉRIMÉ — remplacé avant exécution par `EVOL_carte-ibmi_v2.md` (densité de tirets
cadratins, deux étiquettes de trop)
**Solde** : aucune dette. Comble un **trou de contenu constaté sur le terrain**.

> ⛔ **PÉRIMÉ — ne pas exécuter.** Remplacé **avant toute exécution** par la v2, sur décision du chef
> de projet : la carte portait **trois tirets cadratins** là où la page en compte déjà 151, densité
> qu'une relecture extérieure avait signalée. `AS/400 — IBM i` retirée comme redondante avec le titre,
> `DDS — écrans & base` ramenée à `DDS`, seul le cadratin du titre conservé — et **même celui-là est
> tombé à l'exécution** : la v2 l'avait gardé, mais un titre traduisible vit en **trois exemplaires**
> (la page et les deux dictionnaires), si bien que le compte montait au lieu de baisser. Le titre porte
> finalement un **point médian**, convention déjà en usage dans le hero.
>
> Fichier **conservé, jamais supprimé** : c'est la trace d'une carte pensée à neuf étiquettes, dont
> deux ne servaient qu'à répéter ce que son titre disait déjà.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué — ou pourquoi il est écarté |
|---|---|---|---|
| `UX_METHOD` | 1.1 | **Appliqué** | Libellés visibles, deux langues. La carte passe de 5 à 9 étiquettes : c'est le seul point où la cible petit écran d'abord est engagée (§7). |
| `VISION_METHOD` | 1.2 | **Consulté, non instancié** | Dette **D-1**. La carte devient **la plus haute de la grille** ; aucune mesure automatique ne le verra. |
| `ASSURANCE_METHOD` | 1.2 | **Consulté, écarté** | Aucune porte créée ni modifiée. Le filet existant s'applique tel quel, et les contrôles de symétrie et de couverture couvrent les clés nouvelles. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau, aucune saisie. Des libellés. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Objectif — et il vient d'un fait, pas d'une intuition

**Le 10 août 2026, un recruteur a demandé au chef de projet s'il avait pratiqué le RPG en format
libre. Il n'a pas su répondre.** La réponse est oui : vérifié depuis dans ses sources de 2015, **douze
programmes sur quatorze** en contiennent, plus du SQL incorporé, du CLLE, des écrans et une base en
DDS, des appels prototypés et des modules ILE.

**Rien de tout cela n'est sur la page.** La carte de compétences correspondante porte cinq étiquettes,
s'intitule **« IBM / Legacy »**, et **son titre est le seul de la grille à ne pas être traduisible** —
il n'a aucune clé de dictionnaire.

Deux défauts, donc : *« Legacy »* dit **l'inverse** du positionnement de la page — on ne vend pas de la
modernisation IBM i sous une étiquette qui range la compétence au passé — et le titre restera français
en anglais.

## 2. Périmètre

`index.html` **uniquement** : la carte de compétences IBM (une ligne), et les deux blocs de langue.

## 3. Hors périmètre — ne pas y toucher

Les cinq autres cartes de compétences · le reste de la page · la feuille de style · `scripts/` sous
toutes ses formes · la frise d'expérience (**incrément suivant**) · **D-8**, **D-12**, **D-13**,
**D-15** · `tasks/ROADMAP.md`.

> **La carte « Windev / Webdev » n'a pas non plus de clé de traduction, et c'est LÉGITIME** : c'est un
> **nom de produit**, il ne se traduit pas, exactement comme `Adelia` ou `DB2/400`. **Ne pas la
> toucher, et ne pas la « corriger » plus tard** : la présente ligne existe pour qu'on ne repaie pas
> cet examen.

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. `main` est à jour avec son distant (`git rev-list --left-right --count main...origin/main` = `0 0`)
   et porte la clé `tag_exp` sur l'étiquette de la section Expérience (incrément D-14 atterri).
2. L'arbre de travail est propre **à l'exception des prompts non enregistrés**.
3. `bash scripts/gate.sh` sort en **code 0** avec **exactement 4 avertissements**, et ce sont les
   quatre clés orphelines connues (`e7_title`, `e7_desc`, `p3_title`, `p3_desc`, dette D-4).
4. Les clés `sk3_title` et `ibm1` à `ibm4` **n'existent pas encore** dans le fichier. Si l'une existe,
   arrête-toi : quelqu'un est passé avant toi.

## 5. Spécification — des propriétés, pas des gestes

### P1 · Le titre de la carte dit la plateforme et l'intention, et il se traduit

Le `<h3>` de la carte porte désormais la clé **`sk3_title`** — numéro libre, conforme à la série
existante (`sk1`, `sk2`, `sk5`, `sk6`, `sk7`).

| Clé | Français | Anglais |
|---|---|---|
| `sk3_title` | `IBM i — RPG & modernisation` | `IBM i — RPG & modernization` |

*L'orthographe anglaise diffère d'une lettre. C'est précisément pourquoi la clé est nécessaire : sans
elle, la version anglaise afficherait le mot français.*

### P2 · La carte porte neuf étiquettes, dont quatre traduites

Dans cet ordre, toutes en `class="tag red"` comme les actuelles :

| # | Étiquette (français) | Clé | Anglais |
|---|---|---|---|
| 1 | `AS/400 — IBM i` | — | — |
| 2 | `RPG III/IV/ILE` | — | — |
| 3 | `RPG format libre` | **`ibm1`** | `RPG free-format` |
| 4 | `CLLE` | — | — |
| 5 | `SQL incorporé` | **`ibm2`** | `Embedded SQL` |
| 6 | `DB2/400` | — | — |
| 7 | `DDS — écrans & base` | **`ibm3`** | `DDS — display & database` |
| 8 | `API système OS/400` | **`ibm4`** | `OS/400 system APIs` |
| 9 | `Adelia` | — | — |

**Trois précisions volontaires :**

1. **`AS/400 — IBMi` devient `AS/400 — IBM i`**, avec l'espace. C'est le nom exact de la plateforme
   chez IBM, et c'est ainsi qu'un lecteur ou un outil de tri le cherche.
2. **L'étiquette `OS/400` seule disparaît**, absorbée par `API système OS/400` — le mot reste donc
   cherchable, sans occuper deux places.
3. **Les cinq étiquettes sans clé sont des noms propres ou des sigles** identiques dans les deux
   langues. Leur absence de clé est un choix, pas un oubli.

### P3 · Rien d'autre ne bouge

Aucune autre carte, aucun autre libellé, aucune règle de style. Le différentiel doit être lisible en
une lecture.

## 6. Preuve exigée

1. `bash scripts/gate.sh` en **code 0** avec **exactement 4 avertissements** — pas cinq. Un cinquième
   signifierait une clé nouvelle jamais employée dans la page.
2. **Les cinq clés nouvelles sont employées exactement une fois** dans la page. Le prouver par
   programme, pas à l'œil.
3. **Le compte de clés par langue, avant et après** : `+5` de chaque côté, et **symétrique**. Écris
   les deux valeurs.
4. `git diff` ne porte que sur `index.html`, et à l'intérieur, **que sur la ligne de la carte IBM et
   les deux blocs de dictionnaire**. `scripts/` intact, à prouver.

## 7. Validation humaine due avant publication

Rien de ce qui suit n'est prouvable ici (dette **D-1**) :

- **La carte passe de cinq à neuf étiquettes et devient la plus haute de la grille** — les autres en
  portent quatre à six. À regarder à **320, 375 et 900 px**, dans les deux langues : la grille ne doit
  pas se déséquilibrer, et les étiquettes longues (`DDS — écrans & base`, `API système OS/400`) ne
  doivent pas déborder de leur carte.
- **Le titre en anglais** : `IBM i — RPG & modernization`, avec le `z`.

## 8. Livrables

`.pipeline/spec.md` · `.pipeline/changes.md` (avec le différentiel) · `.pipeline/test-results.md`
(les comptes de clés, la preuve d'emploi unique des cinq clés) · revue par l'agent `reviewer` ·
`STATUS.md` = `READY`. **STOP avant `git push`.**

## 9. Critères d'acceptation

1. Le titre de la carte porte `sk3_title` et affiche `IBM i — RPG & modernisation` en français.
2. La carte porte les neuf étiquettes de P2, dans l'ordre, en `tag red`.
3. Les cinq clés nouvelles existent **dans les deux blocs de langue** et sont employées **une fois**.
4. Porte verte, **exactement 4 avertissements**, et ce sont les quatre de D-4.
5. Comptes de clés symétriques, `+5` de chaque côté.
6. La carte « Windev / Webdev » est **inchangée**.
7. `scripts/` **rigoureusement intact**.
8. Le présent prompt est le **premier commit de la branche**, attribué au Tech Lead.
