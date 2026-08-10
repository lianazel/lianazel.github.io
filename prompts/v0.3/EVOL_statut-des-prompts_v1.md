# EVOL — Rendre prouvable quel prompt a réellement été exécuté

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : v1 · **Date** : 9 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet

> Durcissement, donc évolution : rien n'est cassé aujourd'hui. On ferme une **incertitude
> structurelle** — quand plusieurs révisions d'un prompt cohabitent au dépôt, rien ne prouve laquelle
> a tourné.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué |
|---|---|---|---|
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | §3 Couche A — deux **portes**, chacune avec défaut semé, assertion positive et épreuve de vivacité par neutralisation. §7 gardes de non-vacuité. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau. Deux fichiers d'outillage local et des documents. |
| `UX_METHOD` · `VISION_METHOD` | — | **Écartés** | Aucune interface, aucun rendu : rien de ce qui est touché n'est visible par un visiteur. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` | — | **Écartés** | Aucune base de données, aucun geste hors dépôt, aucun agent autonome. |

---

## 1. Le problème

Le dossier `prompts/` est enregistré, et il conserve **toutes** les révisions d'un prompt côte à côte.
Le portfolio en compte déjà trois familles à plusieurs révisions. Aujourd'hui, une seule chose dit
laquelle a tourné : le champ **« Prompt pilote »** du journal, écrit à la main à l'atterrissage.

C'est **déclaratif** — rien ne vérifie que le fichier nommé est le fichier exécuté. Même forme que la
dette D-7 : un contrat, pas une mesure.

Et il existe un cas plus vicieux : **un prompt déposé mais jamais exécuté est aujourd'hui
indiscernable d'un prompt exécuté.** Le seul signal qui les sépare est son **absence** du journal — et
l'absence est le signal le plus faible qui soit.

## 2. La convention — déjà posée, à faire tenir

Chaque prompt porte désormais un champ **`**Statut** :`**, en **ligne propre**, immédiatement après
la ligne du rédacteur. Trois valeurs, et rien d'autre :

```
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Statut** : EXÉCUTÉ — 9 août 2026 · branche `fix/budget-largeur-mobile` · fusion `8687284` · version 0.3.0 → 0.3.1
**Statut** : PÉRIMÉ — remplacé avant exécution par `<fichier>` (motif)
```

> ⚠️ **Pourquoi un champ à position fixe et non une phrase.** Le 9 août 2026, le Tech Lead a voulu
> relever l'état réel en cherchant le mot « périmé » dans chaque fichier : **les huit** ont répondu
> présent, parce que les bandeaux de révision *parlent* de la révision périmée. Un mot circule ; une
> ligne ancrée en début de ligne, non. **Ancre tes extractions sur `^\*\*Statut\*\* : <MOT>`, jamais
> sur la présence du mot dans le fichier.** C'est la leçon locale du 8 août, rencontrée une fois de
> plus.

Les huit prompts de `prompts/v0.3/` portent déjà ce champ. **Ceux de `v0.1` et `v0.2` ne l'ont pas :
c'est le §3.1 de ce prompt.**

## 3. Ce qu'il faut obtenir

### 3.1 Mettre le corpus en conformité

Ajoute le champ aux quatre prompts de `prompts/v0.1/` et `prompts/v0.2/`. Tous les quatre ont été
exécutés, et le journal donne leur fusion — reprends-la de là, **ne la devine pas** :

| Prompt | Fusion à citer |
|---|---|
| `v0.1/CHORE_alignement-harnais_v1.md` | `977c5b4` |
| `v0.1/EVOL_parite-linguistique_v1.md` | `564f2cc` |
| `v0.2/CHORE_promotion-lecons-globales_v1.md` | `196ef89` |
| `v0.2/EVOL_adresse-contact_v1.md` | `07f9f3e` |

Même position, même forme que ceux de `v0.3` — un seul format, jamais deux.

### 3.2 Contrôle A — au plus une révision vivante par famille

Une **famille** est l'ensemble des fichiers de `prompts/` partageant le même nom hors suffixe de
révision (`EVOL_menu-debordement_v1`, `_v2`, `_v3` forment une famille).

**Dans une famille, au plus un fichier porte un statut autre que `PÉRIMÉ`.** Deux prompts vivants pour
un même sujet, c'est l'ambiguïté que cet incrément existe pour fermer.

### 3.3 Contrôle B — le journal et les prompts concordent

**Tout prompt nommé « Prompt pilote » dans un fichier `tasks/JOURNAL_*.md` existe, et son statut est
`EXÉCUTÉ`.**

> **Une seule direction, et c'est délibéré.** L'implication inverse — « tout prompt `EXÉCUTÉ` figure
> dans un journal » — serait **fausse aujourd'hui** : un audit en lecture seule et un geste hors dépôt
> ont bien été exécutés sans produire d'entrée de journal. C'est un manque connu du harnais, pas un
> défaut de ce projet : il est inscrit au carnet de recherche du référentiel. Ne l'implémente pas.

### 3.4 Les deux contrôles sont bloquants, et se prouvent

Pour **chacun** des deux :

1. **Garde de non-vacuité.** Si l'extraction ne trouve **aucun** prompt, ou **aucune** entrée de
   journal, c'est une **erreur**, pas un succès. Sans elle, il suffit de déplacer un dossier pour que
   le contrôle devienne aveugle en restant vert.
2. **Message propre**, nommant la famille ou le fichier fautif — jamais un identifiant nu.
3. **Défaut semé** dans un témoin, **assertion positive** dans `scripts/gate.sh` posée sur ce message,
   et **compte des chemins et des assertions mis à jour** dans les commentaires.
4. **Épreuve de vivacité** : neutralise chaque contrôle **séparément** sur une copie hors dépôt
   (`errors.push(` → `[].push(`) et vérifie que la porte rougit en le nommant. Reporte les deux
   épreuves dans `.pipeline/test-results.md`.

**Le témoin est à concevoir** : les témoins existants sont des pages HTML, or ces contrôles lisent des
fichiers Markdown. Choisis la forme la plus simple qui morde vraiment — un petit répertoire de
prompts factices suffit — et explique ton choix dans `.pipeline/spec.md`.

### 3.5 Le cadrage

Au **§10** du `CLAUDE.md`, qui décrit déjà le rangement des prompts : ajoute la convention du champ
`Statut`, ses trois valeurs, et le fait que deux contrôles la font tenir. Mets à jour le **§6** pour
le nouveau compte de contrôles et d'assertions.

**Ne touche à rien d'autre** dans le cadrage : le §3 est périmé et fait l'objet d'un incrément séparé.

## 4. Prérequis vérifiables

**Si l'un de ces points n'est pas satisfait, ARRÊTE-TOI et signale-le.**

1. **L'incrément du menu de débordement est fusionné sur `main`** — vérifie-le ; sinon arrête-toi et
   signale. Il ajoute un contrôle aux deux mêmes fichiers, et travailler en parallèle produirait un
   conflit que personne ne saurait démêler.
2. L'arbre de travail est propre **à l'exception** de `prompts/v0.3/` — dépôts du Tech Lead.
3. `main` est à jour avec sa jumelle publiée, vérifié en direct.
4. `.pipeline/STATUS.md` est en `CLOSED`.
5. `bash scripts/gate.sh` est **vert avant que tu ne commences**.

## 5. Hors périmètre

- **Remplir le champ `Statut` à l'atterrissage.** Faire écrire `EXÉCUTÉ` par la commande
  d'atterrissage refermerait le lien dans l'autre sens — le prompt pointerait vers son incrément, et
  pas seulement l'inverse. C'est souhaitable et c'est un **autre incrément** : il touche un gabarit,
  pas ce dépôt.
- La dette **D-7**, la grille de projets, le hero, le bloc contact, `body{overflow-x:hidden}`.
- **Ne modifie pas `tasks/ROADMAP.md`** ni les journaux existants.
- Aucune dépendance. **Ne fusionne pas, ne publie pas, ne supprime pas de branche.**

## 6. Livrables

- Branche : `feat/statut-des-prompts`.
- `.pipeline/spec.md` · `changes.md` · `last-diff.patch` · `test-results.md` avec les deux épreuves.
- Indexation **précise**, jamais `-A`. Dernier geste : `.pipeline/STATUS.md` = `READY — …`.

## 7. Ce que cet incrément ne prouvera pas

Le champ `Statut` reste **écrit à la main**. Les deux contrôles prouvent qu'il est **cohérent** — pas
qu'il est **vrai**. Un statut `EXÉCUTÉ` citant une fusion qui n'a jamais eu lieu passerait au vert.

C'est la même classe que la dette D-7, et il faut l'écrire plutôt que de laisser croire le contraire.
**Signale-le dans ton rapport de clôture**, avec la piste : vérifier que la fusion citée existe
réellement dans l'historique fermerait ce dernier écart, et se fait en trois lignes.

---

*Prompt déposé par Cowork. Il n'est exécutable qu'une fois transmis par le chef de projet.*
