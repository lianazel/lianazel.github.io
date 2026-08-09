# Feuille de route — lianazel.github.io

> Trois parties. **Les évolutions demandées** par le chef de projet, qui ouvrent les prochains
> incréments. **La dette connue**, reprise du `CLAUDE.md` §8 par ordre de remboursement. Et
> **les constats du 9 août 2026**, qui ne sont **pas encore** inscrits au cadrage et attendent
> chacun leur incrément.
>
> Le `CLAUDE.md` reste la source de vérité : ce document **ordonne**, il ne redéfinit pas. Aucune
> ligne des parties II et III n'est un invariant.

---

## Déjà livré

| Incrément | Version | Fusion |
|---|---|---|
| Alignement du projet sur le harnais de travail | 0.1.0 | `977c5b4` |
| **E-1** — parité linguistique complète, 5ᵉ contrôle de couverture | 0.2.0 | `564f2cc` |
| Traçabilité de la promotion des leçons du 9 août | 0.2.1 | `196ef89` |
| Adresse de contact `proton.me` + 7ᵉ contrôle de cohérence | 0.3.0 | `07f9f3e` |

---

# Partie I — Évolutions demandées

## E-2 — Petit écran d'abord, menu de débordement, et « À propos » · **priorité 1**

**Demande initiale (8 août)** : création d'un menu de débordement — le bouton à trois barres qui
replie la navigation sur téléphone — et passage de la feuille de style au petit écran d'abord.

**Un seul incrément, pas trois.** Ce sont les mêmes règles d'adaptation que l'on réécrit : le menu
de débordement *est* un comportement de petit écran. Les séparer ferait toucher deux fois la même
feuille de style, ce que le `CLAUDE.md` §7 déconseille.

**Cet incrément solde la dette D-2** : il est le « prochain toucher significatif de la feuille de
style » que son plan de remboursement attendait.

### Ajout du 9 août — une section « À propos » dans le menu

**Décision du chef de projet.** Le menu portera une entrée **« À propos »**, comme le prescrit déjà
le satellite d'expérience utilisateur pour le contenu minimum d'un menu de débordement.

Elle porte la version longue de la provenance : nom du site, version courante, la méthode de travail,
le lien vers le dépôt public, et le renvoi vers le site TWAIM. Sa raison d'être : le portfolio va
porter des badges « harnais IA TWAIM » sur deux cartes dont les dépôts sont **privés**. Le portfolio,
lui, est **public** — c'est le seul projet badgé dont un recruteur peut ouvrir le code. Le dire
transforme une affirmation en invitation.

> ⚠️ **Piège identifié avant écriture.** Si l'« À propos » affiche un **numéro de version**, on
> recrée le défaut du 9 août : une valeur dupliquée entre le fichier `VERSION` et la page, avec rien
> qui les relie. La commande d'atterrissage incrémente le premier ; si personne ne pense au second,
> la page annonce une version périmée, et c'est **silencieux**. Deux issues propres : ne pas afficher
> de numéro, **ou** en afficher un et faire vérifier la concordance par le filet de tests. À trancher
> à la rédaction du prompt.

**Précédent maison à réutiliser** : TwaimWeb porte déjà une barre en menu de débordement avec
priorité d'effacement des entrées. Satellite à charger : `UX_METHOD`, dont le §3.7 donne le patron de
référence — l'icône et l'état d'accessibilité dérivent d'**un seul** booléen, jamais de deux chemins
séparés.

**Ordre imposé — après E-1, et pour une raison mécanique** : ce chantier ajoute des libellés visibles.
E-1 étant livré, la contrainte est levée.

> ⚠️ **Décision toujours attendue avant d'ouvrir E-2.** Refondre la barre de navigation et inverser
> toutes les règles d'adaptation est le chantier **le plus exposé au défaut visuel**. Rien ne le
> détecte aujourd'hui : c'est la dette **D-1**, reportée le 8 août. Deux issues, et une seule
> mauvaise : poser la barrière de rendu avant E-2, **ou** assumer par écrit que la validation du menu
> sera manuelle, sur tous les seuils, à chaque itération. La mauvaise issue est de ne pas trancher.
>
> **Le calcul a changé le 9 août** : un défaut visible a atteint la production sans que rien ne le
> voie — voir le constat C-1 en partie III. Ce n'est plus un argument théorique.

---

## E-3 — Cartes de projets : TWAIM, MetalWatch, et le badge de légitimité · priorité 2

**Règle posée le 8 août, et elle commande tout le reste** : le badge « harnais IA TWAIM » n'est pas
décoratif, c'est une **affirmation vérifiable**. Il ne se pose que sur un projet réellement piloté par
le harnais — cadrage, agents et commandes, journal, consignes versionnées, et au moins une porte qui
mord. Le portfolio dit vrai, ou il ne dit rien.

### Décidé le 9 août — carte TWAIM

Elle vient **en premier** dans la grille : un recruteur croise aujourd'hui des badges sans savoir ce
qu'ils désignent, et n'apprendrait la réponse qu'en bas de page, ou jamais. Une carte qui donne la clé
après les serrures ne sert pas à grand-chose.

- **Icône** : 🧭 — TWAIM n'est pas un logiciel, c'est ce qui tient la ligne.
- **Titre** : TWAIM
- **Description** : « Méthode de travail qui fait collaborer un chef de projet humain et deux agents
  IA — l'un conçoit et relit, l'autre exécute — pour produire du code traçable et auditable. C'est le
  harnais qui pilote les projets marqués “harnais IA TWAIM” sur cette page. Site statique, zéro
  dépendance à l'exécution. »
- **Badges** : `Tailwind CSS` · `Vitest` · `Vercel`. **Pas** de badge « harnais IA TWAIM » sur la
  carte TWAIM — redondant ; la description fait le travail, et mieux.
- **Bouton unique** : « Voir le site » → `https://twaim-web.vercel.app/` en français,
  `https://twaim-web.vercel.app/en` en anglais. Pas de bouton GitHub : le dépôt ne répond pas
  publiquement.

**Pile vérifiée le 9 août** dans le dépôt : version 0.3.5, site statique, aucun cadriciel, seule
étape de construction Tailwind CSS `3.4.17`, tests Vitest `3.2.6`, hébergement Vercel.

### Décidé le 9 août — mécanisme du lien bilingue

**Approuvé par le chef de projet : un mécanisme général, pas un cas particulier.** Un attribut
`data-i18n-href` dont la valeur est une clé du dictionnaire ; à la bascule, l'adresse du lien est
remplacée. Contrat en quatre points, à reprendre tel quel dans le prompt :

1. Un même élément peut porter **les deux** attributs — le bouton « Voir le site » portera
   `data-i18n` pour son libellé *et* `data-i18n-href` pour sa destination. C'est le cas normal.
2. Les adresses entrent au dictionnaire comme n'importe quelle clé : elles héritent gratuitement des
   contrôles de complétude, de symétrie et de doublon.
3. **Un contrôle bloquant supplémentaire, avec sa garde de non-vacuité** : si le mécanisme ne trouve
   aucun élément portant l'attribut, c'est une erreur, pas un succès.
4. **Une garde d'une ligne** : refuser une valeur qui n'est pas une adresse `http` ou `https`. Le
   risque est nul aujourd'hui — dictionnaire fermé, écrit par le chef de projet — mais un mécanisme
   qui écrit une chaîne arbitraire dans un `href` est l'endroit classique où entre un `javascript:`.

### Décidé le 9 août — carte MetalWatch

- **Icône** : 🪙 — la seule qui porte les deux moitiés du sujet, la matière et le prix.
- **Description** : « Suivi des cours de sept métaux précieux et industriels : collecte quotidienne
  automatique, stockage en base, graphiques interactifs. La page d'accueil est une scène 3D jouable —
  le cube de métal déforme le titre et écrase le bouton quand il les percute. Architecture conçue par
  mes soins, pilotée de bout en bout avec le harnais IA TWAIM. »
- **Badges** : `Next.js` · `TypeScript` · `Supabase` · `Chart.js` · `Three.js` · `harnais IA TWAIM`.
  Si la ligne se casse mal à la validation, retirer `TypeScript` — le moins différenciant des six.
- **Bouton unique** : « Voir le site » → `https://metalwatch-delta.vercel.app/`. Pas de bouton
  GitHub, le dépôt est privé.

**Pile vérifiée le 9 août** dans le miroir de sortie du tunnel (photo du 4 août, `OUT/_ETAT.md`) :
Supabase avec migrations versionnées, **Chart.js `4.5.1`** — qui a *remplacé* Recharts le 9 juillet,
Recharts est donc mort —, **Three.js `0.179.1`** épinglé exact et bundlé, Vitest et Playwright, sept
métaux, hébergement Vercel.

> **Pas de numéro de version sur le badge `Next.js`.** Le miroir ne cite « Next.js 16 » que comme
> **montée future** dans le carnet de dette : le numéro courant n'est pas établi. Un numéro de
> version sur un portfolio vieillit en silence — vrai le jour où on l'écrit, faux six mois plus tard,
> sans que rien ne rougisse.

> **Badge Three.js : légitime, confirmé par le chef de projet le 9 août.** La racine du site *est* la
> vitrine 3D, et elle est jouable — le cube déforme le titre et écrase le bouton. *Retour
> d'expérience : l'outil d'extraction de texte avait conclu « aucune vue 3D », parce qu'un canevas 3D
> n'a aucun texte et lui est structurellement invisible. Un badge légitime a failli être retiré sur
> cette base.*

### Décidé le 9 août — la ligne « Cette page aussi »

Sous la grille de projets, une note courte et bilingue, au moment exact où le lecteur vient de croiser
les badges :

> **Cette page aussi.** Conçue et maintenue avec le même harnais : cadrage de projet, agents de revue
> en lecture seule, porte de tests avec témoin volontairement défectueux, journal de sessions,
> consignes versionnées. Le dépôt est public — tout s'y vérifie.

Elle porte des **noms vérifiables**, pas des adjectifs. C'est un **engagement**, pas une décoration :
le jour où la discipline se relâche, l'affirmation devient publiquement fausse. C'est ce qui lui donne
sa valeur.

Elle part **dans le même incrément que la carte TWAIM** — même section, même vocabulaire, un seul
atterrissage. Si l'« À propos » d'E-2 la rend redondante plus tard, la retirer coûtera une ligne.

### ⏸ En suspens — deux décisions du chef de projet

1. **Mention « dépôt privé »** — carte sans mention (retenu par défaut), ou badge « privé » explicite ?
   Concerne MetalWatch et TWAIM.
2. **GFMCC** — carte ou pas ? Il est légitime, mais sans dépôt public ni site sa carte n'aurait
   **aucun bouton**, au milieu de sept qui en ont. Description retenue si la carte se fait,
   **volontairement neutre** : « outil de sauvegarde chiffrée de configuration de poste — archive
   AES-256, transfert entre machines ». Argument à valoriser dans les deux cas : **zéro dépendance
   PyPI**, bibliothèque standard uniquement.

---

# Partie II — Dette connue (`CLAUDE.md` §8)

## D-1 — Aucune barrière sur le rendu · **priorité 1**

Rien ne détecte un débordement ou une mise en page cassée avant publication. C'est le seul point de
cette liste dont l'impact est **visible par un recruteur**.

**Remboursement** : poser une barrière de rendu (satellite `VISION_METHOD`, palier local).
**État** : reportée le 8 août — **et le calcul a changé le 9** (voir C-1). La porte d'entrée est un
**spike** : investigation jetable, code hors dépôt, seul le brief est enregistré. Il répondrait en une
session à ce que personne ne sait aujourd'hui :

- quelle police est réellement résolue hors Windows, et de combien elle élargit le texte ;
- une seule propriété mesurée, la plus robuste : **aucun débordement horizontal** à quelques largeurs
  — pas de comparaison d'images, ingérable sur ce site ;
- le **taux de fausse alerte, mesuré avant tout durcissement** — leçon du 9 août.

> **Asymétrie à exploiter, et elle conditionne tout le dispositif.** Une mesure faite là où les
> polices `Segoe UI` et `Consolas` **manquent** (Linux, téléphone) utilise des polices **plus larges**
> : « ça ne déborde pas » y est une conclusion **solide**, « ça déborde » ne prouve rien. Sous Windows
> c'est l'inverse. Une barrière automatique tournant côté Linux est donc utilisable — à condition de
> **n'accepter que le vert**, et de commencer par établir quelle police a réellement été résolue.

> **Second piège de mesure** : la feuille de style porte `body { overflow-x:hidden }`. Un relevé du
> type « la page a-t-elle une barre de défilement horizontale » renverra **non** même en cas de
> débordement — il est masqué, pas absent. Toute mesure doit porter sur **la boîte de l'élément**
> comparée à celle de son conteneur.

## D-2 — Conception grand écran d'abord · priorité 2

Les deux règles d'adaptation sont écrites en largeur **maximale**, donc en dégradation depuis le grand
écran ; la méthode impose l'inverse. **Remboursement** : inverser le sens au prochain toucher
significatif de la feuille de style, c'est-à-dire **dans E-2**. Tout nouveau bloc s'écrit dès
maintenant en petit écran d'abord.

## D-4 — Quatre clés traduites jamais utilisées · priorité 3

`e7_title`, `e7_desc`, `p3_title`, `p3_desc`. Impact nul. **Remboursement** : trancher au prochain
toucher du contenu — rebrancher ou supprimer. Ce sont les quatre avertissements attendus de la porte.

## D-6 — Repli sur une commande dépréciée · priorité 4

`document.execCommand('copy')` sert de repli à la copie de l'adresse. Impact nul.
**Remboursement** : retirer le jour où les navigateurs ciblés le rendent inutile.

## D-5 — Police système non embarquée · priorité 5 (aucune action sur le site)

**Conséquence à retenir**, et elle conditionne D-1 : toute mesure de mise en page faite ailleurs que
sous Windows doit d'abord **prouver quelle police a réellement été utilisée**.

> **Précision du 9 août** : cette règle vaut pour simuler un **poste Windows**. Un téléphone n'a ni
> `Segoe UI` ni `Consolas` — la police de remplacement **est** le rendu réel de la majorité des
> visiteurs mobiles. Mesurer à 320 pixels **sous Windows** revient donc à mesurer une combinaison que
> presque personne n'a.

## D-3 — Deux clés dupliquées dans le bloc anglais · **soldée** le 8 août

---

# Partie III — Constats du 9 août 2026, pas encore inscrits au cadrage

> Ces points ont été établis pendant la session 4. Aucun n'est encore au `CLAUDE.md` §8 : chacun
> attend son incrément. Ils sont ici pour ne pas se perdre, pas pour faire autorité.

## C-1 — La pastille de contact déborde de sa carte sur petit écran · **priorité 1**

**Constaté en production** le 9 août, à 320 pixels de large, sur le site publié : la pastille qui
porte l'adresse électronique et le bouton « Copier » **sort de la carte** du bloc Contact. Environ
30 pixels avec l'ancienne adresse ; environ 70 avec la nouvelle, plus longue de cinq caractères.

**Le défaut préexiste** — il n'a pas été introduit par l'incrément de l'adresse, qui l'aggrave sans le
créer. Il est en ligne depuis des semaines, sur le seul bloc qu'un recruteur doit utiliser, et
**personne ne l'avait vu** : ni le chef de projet, ni le Tech Lead, ni la porte de tests.

**Sévérité : cosmétique, pas fonctionnelle.** L'adresse reste entièrement lisible et le bouton reste
cliquable. Ce qui dépasse, c'est la pastille hors de la carte arrondie.

**Traitement** : anomalie reproduite → **diagnostic d'abord**, jamais de correction à l'aveugle. Un
correctif posé au jugé se battrait contre les règles d'adaptation écrites à l'envers (D-2) et
finirait en `!important`. Prompt de diagnostic déposé : `prompts/v0.3/AUDIT_pastille-contact_v1.md`.

**C'est le premier retour concret de D-1** : un défaut visible a atteint le point de publication, et
seul l'œil du chef de projet l'a arrêté — parce qu'on le lui avait demandé.

## C-2 — L'assertion de vivacité du bloc 2/3 repose sur un marqueur partagé · priorité 2

Réserve **R2** de la revue de la session 4, portée au journal parce que `.pipeline/` disparaît à la
fusion. L'assertion du bloc 2/3 de la porte s'appuie sur le marqueur `AVEUGLE`, c'est-à-dire sur un
**identifiant partagé** — exactement ce que la leçon du 9 août interdit. La décision de la session 4
(donner au contrôle 7 sa propre voix) traite le symptôme : elle demande aux gardes **futures** de ne
pas s'approcher du marqueur, mais rien ne les en empêche.

**Mesuré par l'agent** : remplacer `AVEUGLE` par la phrase propre de la garde du texte visible —
**deux lignes** — supprime le danger mécaniquement.

**Nature : durcissement, donc évolution.** La garde fonctionne aujourd'hui, l'assertion est vivante,
rien n'est cassé — pas de bug préexistant, donc pas de diagnostic. Prompt déposé :
`prompts/v0.3/EVOL_assertion-vivacite_v1.md`.

## C-3 — Deux réserves mineures de la session 4 · priorité 3

- **R3** — la garde du contrôle 7 exige « exactement une » occurrence par source. Conséquence mesurée :
  ajouter un second lien `mailto:` en pied de page, **avec la même adresse**, ferait rougir la porte.
  L'alternative proposée — *au moins une par source, et toutes concordantes* — conserve la propriété
  anti-cécité, supprime la fausse alerte et **élargit** la couverture. Demande son propre prompt.
- **R6** — le motif d'ancrage du texte affiché ne tient pas compte des guillemets d'attribut : la
  porte mord mais nomme mal. Le motif correct existe déjà dans le fichier et n'a pas été réemployé.
  Sévérité faible, aucun risque de cécité.

## C-4 — Le gabarit d'atterrissage fait décider la version par le nom de la branche · priorité 4

L'incrément de l'adresse de contact a porté le projet de 0.2.1 à **0.3.0**, parce que la branche
s'appelait `feat/*`. La règle est **déterministe**, ce qui vaut mieux qu'un jugement — mais un
changement de donnée de contact vient de consommer un jalon mineur.

**À corriger dans le gabarit source de la commande d'atterrissage, pas dans ce projet** — leçon
globale du 15 juin 2026 : faire évoluer le framework, c'est modifier le gabarit d'abord.

## C-5 — Deux réserves du Tech Lead sur le 7ᵉ contrôle · priorité 5

- Le commentaire de `blind.html` annonce qu'y ajouter une adresse désarmerait la preuve « en
  silence ». C'est faux dans le bon sens : l'assertion du bloc 2/3 ne trouverait plus son message et
  la porte rougirait. Le commentaire crédite le danger d'une discrétion que le dispositif lui a
  retirée.
- Trois occurrences **cohérentes mais toutes fausses** — une faute de frappe propagée — passent au
  vert. C'est par conception, aucune machine ne peut en juger. À énoncer parmi les limites si
  l'en-tête du contrôleur ne le dit pas déjà.

---

*Feuille de route tenue par le Tech Lead · mise à jour du 9 août 2026, après l'atterrissage de la
version 0.3.0.*
