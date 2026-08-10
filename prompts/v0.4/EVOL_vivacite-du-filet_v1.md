# EVOL — Vivacité du filet : une assertion par chemin bloquant, sur son message propre

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : v1 · **Date** : 10 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet · *précondition n° 1 réactualisée le 10 août 2026 (0.4.0 → 0.4.2), avant toute transmission*
**Solde** : dette **D-10** (principal) et dette **D-9** (accessoire, une ligne, même fichier)
**Périme** : `prompts/v0.3/EVOL_assertion-vivacite_v1.md`, jamais transmis — il ne traitait qu'une
facette (le marqueur `AVEUGLE` partagé) d'un défaut dont on connaît désormais l'étendue mesurée.

> ⚠️ **Ce n'est pas un correctif du menu, ni de la page.** Le site n'est pas touché. On répare la
> **porte elle-même** — l'instrument qui a dit vert sur six chemins morts. Tant que ce n'est pas fait,
> aucun verdict de cette porte, y compris ceux d'hier, ne vaut ce qu'on croit qu'il vaut.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué — ou pourquoi il est écarté |
|---|---|---|---|
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | §3 Couche A : la modification porte sur une **porte**. Toute assertion touchée est **prouvée vivante** par neutralisation de son propre contrôle, jamais relue. §7 : garde de non-vacuité exigée sur toute porte fondée sur un motif. |
| `VISION_METHOD` | 1.2 | **Consulté, non instancié** | C'est la dette **D-1**, et elle reste ouverte. Cet incrément ne touche à aucun rendu : la porte structurelle n'y changerait rien. Mention faite pour que l'écart reste visible, pas pour l'excuser. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun accès réseau. Outillage local, bibliothèque standard de Node uniquement. |
| `UX_METHOD` | 1.1 | **Écarté** | Ni page, ni feuille de style, ni dictionnaire, ni programme d'interface. Aucun pixel ne bouge. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. |

---

## 1. Objectif

Le filet compte **21 sites `errors.push(`** et **3 sorties `ECHEC` anticipées** (options invalides,
cible illisible) — soit **24 chemins bloquants** — pour **13 assertions**. Comptés à la main dans le
dépôt le 10 août 2026, pas déduits.

**Six de ces chemins ont été vus mourir la porte verte** le 9 août : anomalie d'extraction, liste
blanche absente, entrée de liste blanche sans motif, liste blanche illisible, seuil de suites
couvertes, et **la symétrie EN→FR** — une clé retirée du bloc **français** ne fait rougir personne,
alors que son miroir FR→EN est asserté depuis la revue R1.

L'objectif est **une assertion par chemin bloquant, posée sur le message propre de ce chemin** —
la leçon du 9 août, appliquée cette fois à la porte **entière** et non aux seuls contrôles qu'une
revue avait nommés.

**Et un cas particulier, qui est la racine de trois des six** : quatre gardes partagent le marqueur
`la porte est AVEUGLE, pas verte`. L'assertion du bloc 2/4 est posée **sur ce marqueur**. N'importe
lequel des quatre la satisfait — donc trois peuvent mourir sans que rien ne rougisse. C'est
exactement la configuration que la leçon interdit : *une assertion posée sur un identifiant nu peut
être satisfaite par un autre contrôle*. Le marqueur reste utile **à l'œil humain** ; il cesse d'être
ce sur quoi une assertion s'appuie.

## 2. Périmètre

- `scripts/gate.sh` — assertions, comptes, commentaires.
- `scripts/check-i18n.mjs` — messages de gardes, **D-9**, et le mécanisme de redirection nécessaire
  aux nouveaux témoins (voir §5.3).
- `scripts/fixtures/` — témoins : `broken.html`, et les fichiers nouveaux que §5.3 rendra nécessaires.
- `CLAUDE.md` §6 (description du filet, comptes) et §8 (D-9, D-10 soldées ou ramenées à leur reste).
- `.pipeline/` — livrables d'usage.

## 3. Hors périmètre — ne pas y toucher

`index.html` sous toutes ses formes · la feuille de style · le dictionnaire · `blind.html` sauf
nécessité démontrée au §5.3 · la liste blanche de production · **D-8** (contrôle de conformité du
§9 — son propre incrément, il vient juste après) · **D-7** · **D-11** · `tasks/ROADMAP.md`.

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, arrête-toi et dis laquelle.

1. `main` porte au moins `82e9b16`, arbre propre, `VERSION` = `0.4.2`.
   *(Précondition réactualisée le 10 août 2026, avant transmission : deux incréments — le
   correctif de la barre mobile et la leçon du cache — ont atterri depuis la rédaction. Aucun
   ne touche `scripts/`, le périmètre du présent prompt est inchangé.)*
2. `bash scripts/gate.sh` sort en **code 0** avec **4 avertissements** avant toute modification.
3. `prompts/v0.3/EVOL_assertion-vivacite_v1.md` existe — il devient PÉRIMÉ, voir §5.6.

## 5. Spécification

### 5.1 L'inventaire d'abord, et il est le livrable principal

**Avant toute correction**, dresse le tableau exhaustif des chemins bloquants du filet :

| Chemin (fichier:ligne) | Message propre | Asserté aujourd'hui ? | Cible où il mord | Vu rougir ? |

Un chemin = un site `errors.push(` **ou** une sortie `ECHEC` anticipée. Mon décompte est 21 + 3.
**S'il diffère du tien, c'est le tien qui fait foi** — tu comptes dans le fichier, moi j'ai compté
dans le fichier aussi, et deux comptes valent mieux qu'un. Écris l'écart s'il y en a un.

Ce tableau part dans `.pipeline/test-results.md`. C'est lui qui rend la suite falsifiable : sans
lui, « tous les chemins sont assertés » est une affirmation, pas un constat.

### 5.2 Une assertion par chemin, sur son message propre

Chaque chemin bloquant reçoit son assertion dans `gate.sh`, dont le motif est **une phrase qui
n'appartient qu'à lui**. Jamais un identifiant nu, jamais un marqueur partagé, jamais un fragment
susceptible d'apparaître dans un avertissement voisin.

Les quatre gardes de la famille `AVEUGLE` sont assertées **séparément**, chacune sur sa propre
phrase. Le marqueur reste dans le texte affiché — il sert au lecteur humain — mais aucune assertion
ne s'y appuie plus.

### 5.3 Les témoins que ça exige

Certains chemins n'ont **aujourd'hui aucune cible où mordre**. Il faut leur en donner une, sur le
modèle déjà en place pour le budget (`--cadrage=` + `cadrage-sans-budget.md`), qui est le précédent
maison et qu'il faut suivre plutôt que réinventer.

Deux besoins identifiés — **vérifie-les, ils sont mon analyse, pas ta mesure** :

1. **Symétrie EN→FR** : semer dans `broken.html` une clé présente en `en` et absente en `fr`, en plus
   de celle qui existe déjà dans l'autre sens. Le témoin doit porter **les deux directions**.
2. **Famille liste blanche** (absente, illisible, entrée sans motif) : la liste est aujourd'hui à
   chemin fixe. Une option `--allowlist=` calquée sur `--cadrage=`, plus les fixtures correspondantes,
   est la voie la plus courte. Si tu vois plus simple, prends-la et écris pourquoi.

**Un chemin pour lequel aucun témoin n'est constructible se déclare**, en commentaire, au-dessus de
lui, avec sa raison. Il ne se tait pas. Un trou nommé est une dette ; un trou tu est un faux vert en
attente.

### 5.4 D-9 — la garde du budget, une ligne

`values.length < 2` devient `< 3`, le message « deux attendues » devient « trois attendues ». Le §9
porte trois valeurs depuis hier ; la garde en exige encore deux.

### 5.5 Les comptes écrits dans les commentaires

Les comptes annoncés dans `gate.sh` et `CLAUDE.md` §6 doivent être **ceux du tableau du §5.1**, et le
tableau doit être ce qui les produit. C'est le point où je me suis trompé deux fois en un incrément :
« 13 chemins bloquants » et « le panneau n'ajoute pas de rembourrage » étaient des nombres **déduits**,
écrits dans la source de vérité, et faux tous les deux.

**Question ouverte, à trancher par toi et à écrire** : faut-il un contrôle qui **mesure** ce compte —
qui recompte les sites dans la source et les confronte au nombre d'assertions — plutôt que de le
laisser déclaré ? C'est la maladie D-7 dans sa forme la plus pure : un nombre écrit que rien ne
mesure. **Ma réserve, et elle est sérieuse** : un contrôle qui lit du code source par motif est
fragile, et rougirait sur un remaniement légitime. Mesure le coût avant de décider. Si tu conclus que
le remède est pire que le mal, **écris-le** — c'est une réponse recevable, et elle vaut mieux qu'un
contrôle qu'on désarmera dans trois semaines.

### 5.6 Le prompt périmé

`prompts/v0.3/EVOL_assertion-vivacite_v1.md` reçoit son bandeau ⛔ et son statut **PÉRIMÉ**, motif :
remplacé avant exécution par le présent prompt, qui couvre la même famille de défaut sur son étendue
mesurée. Le fichier est **conservé**, pas supprimé.

## 6. Preuve exigée

**Une assertion ne se relit pas, elle se prouve.** Pour chaque assertion ajoutée ou modifiée :

1. Copie hors dépôt, `.git` exclu, **vérifiée verte avant** neutralisation.
2. Neutralisation du **seul** site du chemin visé — `errors.push(` → `[].push(`, no-op valide qui
   simule un contrôle **mort** et non un fichier cassé.
3. La porte doit rougir **en nommant ce chemin-là**. Une porte qui rougit pour une autre raison ne
   prouve rien.
4. Un chemin à la fois. **Jamais une neutralisation groupée** : elle prouverait qu'au moins une
   assertion vit, pas qu'elles vivent toutes.

Et pour les **six chemins vus mourir verts le 9 août**, la preuve est double : montre-les rouges
maintenant, et dis lequel des six était le plus coûteux à réveiller — c'est une information de
méthode, pas une coquetterie.

## 7. Ce que cet incrément ne prouve pas

Il ne dit **rien** du rendu (D-1), rien du budget réel contre la feuille de style (D-7), rien de la
conformité `data-nav-priority` ↔ §9 (D-8). Il ne rend pas la porte complète : il rend **vrai ce
qu'elle prétend**. C'est moins que ce qu'on aimerait, et c'est exactement ce qui manquait.

## 8. Livrables

`.pipeline/spec.md` · `.pipeline/changes.md` · `.pipeline/test-results.md` **portant le tableau du
§5.1** · revue par l'agent `reviewer` · `STATUS.md` = READY. **STOP avant `git push`.**

## 9. Critères d'acceptation

1. Le tableau du §5.1 existe, il est complet, et chaque ligne « asserté ? » vaut **oui** ou porte une
   raison écrite.
2. Chaque assertion nouvelle ou modifiée a été **prouvée vivante isolément**, journal à l'appui.
3. Les six chemins du 9 août rougissent.
4. D-9 soldée.
5. Les comptes de `gate.sh` et du §6 sont ceux du tableau.
6. `bash scripts/gate.sh` vert sur le site réel, **4 avertissements**, aucun de plus.
7. `index.html` **rigoureusement intact** — `git diff` doit le montrer absent du périmètre.
