# EVOL — Adresse de contact : remplacement et garde de cohérence

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : v1 · **Date** : 9 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code

> Ce n'est **pas** un correctif : il n'existe aucune anomalie préexistante. L'adresse actuelle
> fonctionne ; le chef de projet en change. Aucun rapport de diagnostic n'est donc requis, et il n'y
> a rien à diagnostiquer.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué |
|---|---|---|---|
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | Couche A — le contrôle 7 est une **porte**, pas un outil d'inspection : preuve de morsure obligatoire (§7, case 2) et **garde de non-vacuité** sur son extraction (§3, « une porte peut devenir AVEUGLE en restant verte »). |
| `UX_METHOD` | 1.0 | **Appliqué** | §1 — la nouvelle adresse est **plus longue de cinq caractères** et vit dans une pastille de largeur contrainte : le risque de débordement sur écran étroit est nommé, et sa validation est explicitement rendue à l'humain (§1, « la revue inclut un regard mobile »). Aucun point de rupture n'est touché par ce prompt. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance ajoutée, mise à jour ou remplacée. L'adresse de contact d'un portfolio public est **publique par destination** : ce n'est ni un secret, ni une clé, ni un jeton. Les quatre invariants du `CLAUDE.md` §4 restent tenus à l'identique. |
| `VISION_METHOD` | — | **Écarté** | Le projet n'a **pas** de barrière de rendu (dette D-1, reportée par le chef de projet le 8 août 2026). Écarté faute d'existence, **pas** faute de pertinence — c'est précisément pourquoi le §6 ci-dessous rend la validation visuelle à l'humain au lieu de la simuler. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent en boucle autonome. Un seul projet. |

---

## 1. Objectif

Remplacer l'adresse de contact du portfolio, puis **empêcher mécaniquement** qu'un remplacement futur
n'en oublie une occurrence.

- **Ancienne adresse** : `devnet902@gmail.com`
- **Nouvelle adresse** : `devnetasimov451@proton.me`

Le mode de panne que l'on ferme n'est pas « le site casse ». Il est silencieux : la page **affiche**
la nouvelle adresse, et le bouton « Copier » **place l'ancienne** dans le presse-papiers. Le visiteur
colle une adresse morte, et personne ne l'apprend jamais. Aucun contrôle actuel ne voit cet état, et
le rendu, lui, est parfaitement normal.

## 2. Périmètre — quatre occurrences, deux fichiers, plus la porte

### 2.1 Les occurrences à remplacer

Relevé fait au commit `c2d48d6`. **Les numéros de ligne sont une aide, pas une vérité** : localise par
le contenu et vérifie que tu en trouves exactement quatre. Si tu en trouves un nombre différent,
**ARRÊTE-TOI et signale**.

| Fichier | Ligne | Rôle |
|---|---|---|
| `index.html` | 593 | l'attribut `href` du lien `mailto:` du bouton de contact |
| `index.html` | 596 | le texte **affiché** dans `<span class="email-text">` |
| `index.html` | 886 | la constante `const email = '…'` de la fonction `copyEmail()` |
| `scripts/i18n-allowlist.txt` | 152 | l'entrée de liste blanche, avec son commentaire de justification |

Dans la liste blanche, **remplace la valeur et conserve le commentaire** (`# adresse de contact,
publique par destination`), qui reste vrai.

### 2.2 Le contrôle 7 — cohérence des trois occurrences de la page

Ajoute dans `scripts/check-i18n.mjs` un **septième contrôle bloquant** : les trois occurrences de
`index.html` portent la **même** adresse.

Trois exigences, et aucune n'est facultative :

1. **Ancrage sur la syntaxe réelle, jamais sur la mise en forme.** Le lien se reconnaît à
   `href="mailto:…"`, le texte affiché à la classe `email-text`, la constante à sa déclaration
   `const email = '…'`. Ne t'ancre ni sur un numéro de ligne, ni sur un retour à la ligne, ni sur
   l'indentation : ce sont des conventions d'écriture, pas des structures. *(Leçon locale du 8 août
   2026 — un contrôle ancré en début de ligne a fabriqué vingt faux défauts sur ce même fichier.)*
2. **Garde de non-vacuité.** Chacune des trois extractions doit trouver **exactement une**
   occurrence. Zéro ou plusieurs → **erreur bloquante**, jamais un passage silencieux. Sans cette
   garde, il suffit qu'un remaniement futur renomme la classe `email-text` pour que le contrôle
   devienne aveugle **en restant vert** — c'est le faux témoin que `ASSURANCE_METHOD` §3 décrit.
3. **Message d'erreur propre.** L'erreur nomme l'adresse attendue et l'adresse divergente, dans une
   phrase qui n'appartient qu'à ce contrôle.

**Le contrôle ne connaît aucune adresse en dur.** Il ne vérifie pas que la page porte
`devnetasimov451@proton.me` : il vérifie que les trois occurrences **concordent entre elles**. Une
porte qui contient la valeur attendue devient fausse au prochain changement, et il faut penser à la
mettre à jour — c'est-à-dire exactement le défaut qu'elle est censée empêcher.

### 2.3 La preuve de morsure — sinon ce n'est pas une porte

1. **Sème le défaut** dans `scripts/fixtures/broken.html` : une divergence entre le lien `mailto:` et
   le texte affiché.
2. **Ajoute l'assertion** correspondante dans `scripts/gate.sh`, dans le bloc des assertions
   positives. Le motif est **le message propre du contrôle**, jamais un identifiant nu — une chaîne
   comme une adresse électronique circule dans les avertissements et les contrôles voisins, et une
   assertion posée dessus peut être satisfaite par la sortie d'un autre contrôle. *(Leçon locale du
   9 août 2026, promue au registre global le jour même.)*
3. **Mets à jour le compte** dans le commentaire du bloc : « six en tout » devient « sept en tout ».
   Ce commentaire dit lui-même que tout nouveau contrôle bloquant ajoute son assertion, sinon il naît
   invisible.
4. **Prouve que l'assertion est vivante**, ne la relis pas. Neutralise le contrôle 7 sur une copie
   **hors dépôt** (remplacement de `errors.push(` par `[].push(` dans ce seul contrôle — un no-op
   valide, qui simule un contrôle *mort* et non un fichier cassé) et vérifie que `bash scripts/gate.sh`
   **rougit**. S'il reste vert, l'assertion est vacueuse : corrige-la avant d'aller plus loin.
   Reporte le résultat de cette épreuve dans `.pipeline/test-results.md`.

### 2.4 Le cadrage que cet incrément invalide

Le `CLAUDE.md` §6 décrit le filet de tests comme « quatre contrôles » et un seul témoin. Il est déjà
périmé avant ton passage, et ton incrément l'éloigne encore. **Réécris le §6** pour qu'il décrive le
filet réel après ton travail : le nombre exact de contrôles bloquants, la liste blanche
`scripts/i18n-allowlist.txt`, et les **deux** témoins (`broken.html` et `blind.html`).

**Ne touche à rien d'autre dans `CLAUDE.md`.** Le §3 (nombre de lignes, décompte du dictionnaire) est
lui aussi périmé, et sa remise à jour fait l'objet d'un incrément séparé. Un incrément entretient le
cadrage qu'il invalide ; il ne répare pas ce qu'il n'a pas cassé.

## 3. Interdits explicites

- **Ne modifie aucune règle de style.** Pas une déclaration CSS, pas un point de rupture, pas la
  pastille `.email-display`. Si tu estimes qu'un ajustement de style est nécessaire, **ARRÊTE-TOI et
  signale-le** — c'est un arbitrage du chef de projet, pas une initiative.
- **Ne reformate pas** la feuille de style ni le programme. Le style compact est une convention du
  projet (`CLAUDE.md` §7).
- **N'ajoute aucune dépendance**, aucune bibliothèque, aucune ressource chargée depuis un domaine
  tiers. L'invariant vaut aussi pour l'outillage de test.
- **Ne touche pas** aux quatre traductions orphelines (dette D-4), ni à la liste blanche au-delà de
  l'entrée de l'adresse, ni à `tasks/ROADMAP.md`, ni aux autres sections de la page.
- **Ne fusionne pas, ne publie pas, ne supprime pas de branche.** Ton dernier geste est le §5.

## 4. Prérequis vérifiables

**Si l'un de ces points n'est pas satisfait, ARRÊTE-TOI et signale-le.**

1. L'arbre de travail est **propre** et `main` est **à jour avec sa jumelle publiée**, vérifié en
   direct par comparaison de références git — jamais depuis un artefact.
2. `.pipeline/STATUS.md` est en `CLOSED`. Un `READY` ou un `LANDING` résiduel signale un incrément
   inachevé : ne l'écrase pas.
3. `bash scripts/gate.sh` est **vert avant que tu ne commences**. Un filet déjà rouge n'est pas un
   point de départ.

## 5. Livrables

- Branche de travail : `feat/adresse-contact`.
- `.pipeline/spec.md` — ce que tu as compris, et les questions ouvertes que tu as tranchées seul.
- `.pipeline/changes.md` — fichier par fichier, avant / après.
- `.pipeline/test-results.md` — sortie complète de `bash scripts/gate.sh`, **plus** le résultat de
  l'épreuve du §2.3 point 4.
- `.pipeline/last-diff.patch` — le différentiel de la branche par rapport à `main`.
- Enregistrement de l'incrément sur la branche, indexation **précise** (jamais `-A`).
- Dernier geste : `.pipeline/STATUS.md` = `READY — …`, feu vert de revue.

## 6. Ce que tu ne peux pas valider, et qu'il faut dire

La nouvelle adresse compte **vingt-cinq caractères** contre vingt à l'ancienne. Elle est affichée en
police à chasse fixe dans une pastille à largeur contrainte, à côté du bouton « Copier ». Sur un
écran étroit, un débordement est **plausible** — et ce projet n'a **aucune** barrière de rendu pour
le détecter (dette D-1).

Ne tente pas de le mesurer, et ne « corrige » rien par précaution. **Écris-le en toutes lettres dans
ton rapport de clôture** comme un point de validation humaine : *l'affichage de la pastille de contact
doit être vérifié à l'œil sur écran étroit avant publication*. Une mesure de mise en page faite
ailleurs que sous Windows serait de toute façon fausse sur ce site, qui demande une police système
qu'il ne fournit pas (dette D-5).

---

*Prompt déposé par Cowork. Il n'est exécutable qu'une fois transmis par le chef de projet.*
