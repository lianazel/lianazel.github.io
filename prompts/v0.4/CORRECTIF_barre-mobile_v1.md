# CORRECTIF — La barre de navigation tient sur une rangée sur téléphone

**Projet** : `lianazel.github.io` · **Type** : CORRECTIF (`/fix`) · **Version du prompt** : v1 · **Date** : 10 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Fondement** : relevé de rendu du 10 août 2026, reproduit ci-dessous au §1 — **mesuré dans un navigateur réel**, pas calculé.

> ⚠️ **Ce correctif répare un défaut que la porte n'a pas vu et ne pouvait pas voir.** L'incrément E-2a
> a livré un menu qui fonctionne — et qui ne s'arme jamais aux largeurs des téléphones réels. Le défaut
> est **visible en production**, sur un iPhone 14 Pro Max, en français comme en anglais.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué — ou pourquoi il est écarté |
|---|---|---|---|
| `UX_METHOD` | 1.1 | **Appliqué** | §1 petit écran d'abord — les valeurs de base sont celles du téléphone, les enrichissements en `min-width`. §2.1 le débordement se décide sur la place réellement disponible. §3.7 le patron du basculement n'est pas touché : il est juste. |
| `VISION_METHOD` | 1.2 | **Consulté, appliqué HORS DÉPÔT** | Le §1 ci-dessous *est* un gate structurel du palier 0 : géométrie, débordement, plusieurs largeurs, deux langues. Il a été exécuté par le Tech Lead sur son poste, **pas dans ce dépôt** — l'instrumenter ici introduirait une dépendance, ce que l'invariant de sécurité n° 1 interdit sans décision du chef de projet. C'est la dette **D-1**, et elle reste ouverte. |
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | Couche A : aucune valeur déclarée dans ce prompt qui n'ait été mesurée. |
| `SECURITY_METHOD` | 1.6 | **Écarté — sauf l'invariant n° 1**, qui commande explicitement de ne pas outiller le rendu ici. Aucune dépendance, aucun réseau, aucun secret. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` | — | **Écartés** | Aucune base. Aucun geste hors dépôt. Aucun agent autonome. |

---

## 1. Le relevé — ce qui a été mesuré, et comment

Chromium réel, moteur de rendu réel, `index.html` de `main` (`3bd8ad2`), quatorze largeurs, deux
langues, mesures géométriques prises dans la page (`getBoundingClientRect`, `scrollWidth`,
`clientWidth`, positions verticales des enfants de `nav`). **Corroboré sur un iPhone 14 Pro Max réel :
trois rangées en français, deux en anglais, aucun bouton à trois barres** — le relevé et l'appareil
disent la même chose.

### 1.1 Ce que la barre exige

| Pièce | Largeur mesurée |
|---|---|
| Bloc identité (logo 60 + séparateur + nom `white-space:nowrap` 162) | **240 px** |
| Liste des quatre liens, français | **327 px** |
| Bouton de langue rétréci | **77 px** |
| Espacements entre les trois blocs | **37 px** |
| **Total sur une rangée** | **~681 px** |

Place réellement offerte : **288 px à 320**, **343 px à 375**, **398 px à 430**, 568 px à 600.
**La barre ne tient sur une rangée qu'au-delà d'environ 660 px de large.**

### 1.2 Ce que le menu fait, et ne fait pas

| Largeur | Bouton à trois barres | Rangées de la barre | `#nav-links` client / scroll |
|---|---|---|---|
| 320 – 350 | **oui** | 4 | 254 / 254 |
| **360 – 600** | **NON** | **3** | **327 / 327** |
| 601+ | non | 1 | 327 / 327 |

**Cause racine n° 1 — le signal ne peut pas voir un retour à la ligne.** `layoutNav()` décide en
comparant `scrollWidth` et `clientWidth` de `#nav-links`. Or `nav` a le droit de passer à la ligne :
quand la place manque, la liste **descend d'une rangée** et y retrouve sa largeur naturelle. Les deux
grandeurs sont alors **égales à toutes les largeurs de 360 à 601** — mesuré, pas supposé. Le programme
ne voit un débordement que lorsque la liste est **écrasée**, ce qui n'arrive qu'en dessous de 350 px.

**Cause racine n° 2 — le socle ne rétrécit jamais.** Même en vidant la barre de ses quatre liens, il
reste 240 + 77 + le bouton + 37 d'espacements. À 320 px, cela dépasse encore de **116 px**. Le menu ne
pouvait donc pas suffire : il agit sur 327 px pendant que le terme dominant est ailleurs.

> **Note de méthode, à porter à la revue.** Claude Code avait proposé de garder aussi « le socle
> irréductible de la barre ». Le Tech Lead a **refusé**, au motif que la barre a le droit de passer à
> la ligne, donc que « le socle tient » n'est pas une propriété d'une seule rangée. La prémisse était
> juste, la conclusion inverse de ce qu'elle aurait dû être : *si la barre passe à la ligne, alors ce
> n'est plus une barre — et c'est ça, le défaut*. La proposition écartée était la bonne.

## 2. La décision du chef de projet — variante V1

Rendus comparés le 10 août 2026 dans le navigateur, trois variantes, trois largeurs, deux langues.
**Retenue : V1.** Sous le seuil, le logo `<Dev />` et son séparateur disparaissent, le nom complet
reste. Motif du chef de projet, textuel : *« le logo `<Dev />` n'apporte absolument rien »*.

**Conséquence, et c'est un changement de cadrage** : la largeur d'écran minimale visée passe de
**320 px à 360 px**, décidée et datée du 10 août 2026. En dessous, la barre se dégrade — voir §3.4.

## 3. Ce qu'il faut faire

### 3.1 Écrire en largeur minimale, jamais en largeur maximale

Les valeurs de base sont celles du téléphone ; l'enrichissement se fait dans `@media (min-width:601px)`.
**N'ajoute aucune règle en `max-width`** : il n'en reste qu'une dans tout le fichier (la grille de
projets), et c'est le dernier quart de la dette **D-2**. Une règle de plus, et elle repart en arrière.

### 3.2 Le socle du téléphone

En base : le logo et le séparateur d'identité ne s'affichent pas · la ligne de localisation ne s'affiche
pas · la barre ne passe pas à la ligne · la liste des liens est **compressible** · le bloc identité ne
l'est pas.

Au-dessus du seuil, **tout revient — y compris le droit de passer à la ligne**. Mesure à connaître
avant d'écrire : en interdisant le retour à la ligne au-delà de 601 px, le bloc identité repasse à
**456 px** et la barre déborde de **128 px à 601** et de **29 px à 700**. La règle de non-retour à la
ligne est donc une règle **du téléphone**, pas une règle générale.

### 3.3 Ce que la mesure doit donner après correction

| Largeur | Rangées | Débordement du socle | Liens restant dans la barre |
|---|---|---|---|
| 375 | **1** | **0** | aucun (tous au menu) |
| 430 | **1** | **0** | au moins « Projets » |
| 601 | **1** | **0** | les quatre |

Ces trois lignes sont le **critère de réussite**, et elles sont écrites pour être reprises telles
quelles par le futur gate structurel de `VISION_METHOD`. Ne les recopie pas dans le code : elles
appartiennent au cadrage.

### 3.4 En dessous du plancher — à mesurer, pas à supposer

Sous 360 px, le relevé montre le **bouton de langue rogné** à droite. Un bouton de bascule
partiellement coupé n'est pas un défaut d'esthétique : c'est une **perte de fonction**, et le §9 dit
que la bascule doit rester atteignable.

**Cherche s'il existe un ajustement bon marché qui l'évite à 320 px** — le rembourrage de la barre et
les espacements sont les pistes évidentes, il en manque environ 37 px. **Mesure-le.** Si tu y arrives
sans rien casser ailleurs, prends-le et dis de combien. Si tu n'y arrives pas, **ne bricole pas** :
écris la dégradation, sa largeur exacte de déclenchement, et ce qu'elle coûte. Une dégradation datée
et bornée est une décision ; une dégradation tue est un défaut.

### 3.5 Le cadrage

**§9** — le plancher passe à 360 px, daté, motivé, avec la dégradation du §3.4 nommée.
**Les budgets de largeur (254 px pour la pastille, 281 px pour le panneau) restent calculés à 320 px.**
C'est délibéré : ils deviennent une **marge**, leur dérivation reste vraie, et aucun nombre écrit ne
devient faux. Écris-le explicitement, sinon quelqu'un les « corrigera » un jour par cohérence apparente.

**§8** — la dette **D-2** est soldée si aucune règle en `max-width` n'a été ajoutée et que la barre est
entièrement en largeur minimale ; sinon, dis ce qu'il en reste. **D-1** reste ouverte et gagne une
ligne : elle a maintenant un **incident daté** à son actif.

### 3.6 Un point de contenu, à ne PAS traiter ici

« Région Parisienne » disparaît de la barre sur téléphone. C'est une information utile à un recruteur.
Elle a sa place dans la section « À propos » de **E-2b** — pas ici. Signale-le, n'invente pas
l'interface.

## 4. Hors périmètre — ne pas y toucher

Le patron du basculement (`renderMenu`, `menuAria`) · l'ordre de priorité du §9 · le dictionnaire, sauf
si le §3.4 t'oblige à une chaîne nouvelle, auquel cas dis-le · le hero · le bloc contact · la grille de
compétences · la grille de projets · **D-8, D-9, D-10, D-11** · l'instrumentation du rendu dans le
dépôt — elle introduirait une dépendance, l'invariant de sécurité n° 1 exige une décision du chef de
projet, elle n'a pas été prise.

## 5. Préconditions vérifiables

1. `main` au moins à `3bd8ad2`, arbre propre, `VERSION` = `0.4.0`.
2. `bash scripts/gate.sh` vert, **4 avertissements**, avant toute modification.
3. Le §9 porte bien trois valeurs de budget (`320px`, `254px`, `281px`) — sinon arrête-toi : le
   contrôle 9 serait muet et tu ne le verrais pas (c'est la dette D-9, non soldée à ce jour).

## 6. Preuve exigée — et l'aveu qui va avec

`bash scripts/gate.sh` doit rester **vert avec exactement 4 avertissements**. Mais **cette porte ne
prouve rien de ce correctif** : elle ne voit aucun pixel. Ne lui fais pas dire le contraire.

Ce qui tient lieu de preuve, faute de barrière dans le dépôt :

1. **Ta déclaration géométrique** : pour chaque ligne du tableau §3.3, dis ce que tu attends et
   d'où tu le tires. Si tu disposes d'un moyen de le mesurer, mesure et livre les nombres. Si tu n'en
   disposes pas, **dis-le franchement** plutôt que de déduire — c'est exactement la faute que ce
   correctif répare.
2. **La vérification du Tech Lead** : le relevé du §1 sera rejoué à l'identique sur le résultat, aux
   mêmes largeurs et dans les deux langues, et joint à la revue.
3. **L'œil du chef de projet**, sur son téléphone, sur le site publié.

**C'est une béquille, pas une barrière** : elle vit chez le Tech Lead, elle n'est pas versionnée, elle
ne s'exécute pas au `/ship`. Elle porte un nom : **D-1**.

## 7. Livrables

`.pipeline/spec.md` · `.pipeline/changes.md` · `.pipeline/test-results.md` · revue par l'agent
`reviewer` · `STATUS.md` = READY. **STOP avant `git push`.**

## 8. Critères d'acceptation

1. Les trois lignes du tableau §3.3 sont tenues.
2. Aucune règle en `max-width` ajoutée.
3. Le §9 porte le plancher à 360 px, daté et motivé, et déclare que les deux budgets restent calculés
   à 320 px **à dessein**.
4. Le §3.4 est tranché : ajustement mesuré, ou dégradation écrite avec sa largeur de déclenchement.
5. La porte reste verte, 4 avertissements, et rien dans les artefacts ne lui attribue une preuve de
   rendu qu'elle n'apporte pas.
6. Le dictionnaire, le patron de basculement et l'ordre de priorité sont intacts.
