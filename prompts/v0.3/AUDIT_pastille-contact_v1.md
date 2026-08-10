# AUDIT — Débordement de la pastille de contact sur petit écran

**Projet** : `lianazel.github.io` · **Type** : AUDIT (`/diagnose`) · **Version du prompt** : v1 · **Date** : 9 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : EXÉCUTÉ — 9 août 2026 · lecture seule, aucune branche · livrable `.pipeline/RAPPORT_DIAGNOSTIC_pastille-contact_v1.md`

> 🔒 **LECTURE SEULE.** Ce prompt ne modifie **aucun fichier** du site, ni style, ni page, ni script,
> ni cadrage. Il produit **un seul livrable** : un rapport. Si tu te surprends à vouloir corriger,
> **arrête-toi et signale** — la correction fera l'objet d'un prompt distinct, fondé sur ce rapport.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué |
|---|---|---|---|
| `UX_METHOD` | 1.0 | **Appliqué** | §1 — petit écran d'abord : le défaut est une conséquence directe de la conception grand écran d'abord (dette D-2). Le diagnostic doit dire si la cause est la règle d'adaptation ou la structure de la pastille. |
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | §3 Couche A — ce prompt ne crée aucune porte ; il prépare la décision. La règle retenue est celle de l'**instrument étalonné** : toute mesure doit d'abord prouver ce qu'elle mesure. |
| `VISION_METHOD` | — | **Introuvable** | La table de déclenchement du référentiel central (§8.1) le prescrit pour « le rendu web à valider ». **Le fichier n'existe pas dans le référentiel** — voir le §6 de ce prompt. Écarté par absence, pas par jugement. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau, aucune saisie utilisateur. Lecture seule. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Symptômes, constatés et non supposés

**S1.** Sur le **site publié**, à **320 pixels** de large, la pastille du bloc Contact — celle qui
porte l'adresse électronique et le bouton « Copier » — **sort de la carte** qui la contient. Constaté
le 9 août 2026 par le chef de projet, capture à l'appui, sur `https://lianazel.github.io`.

**S2.** Le même relevé sur la version locale, après l'incrément `07f9f3e` qui a porté l'adresse de
20 à 25 caractères, montre un débordement **plus large**. Ordre de grandeur estimé à l'œil sur les
captures : environ 30 pixels avant, environ 70 après.

**S3.** Rien n'est coupé : l'adresse reste **entièrement lisible** et le bouton reste **cliquable**.
Le défaut est cosmétique — la pastille s'échappe de la carte arrondie.

**S4.** Le défaut **préexiste** à l'incrément de l'adresse. Celui-ci l'aggrave, il ne le crée pas.

## 2. Ce que tu ne peux pas faire, et qui n'est pas une excuse

**N'installe rien.** Pas de navigateur piloté, pas de paquet, pas d'outil de rendu. L'invariant de
sécurité n°1 du cadrage — aucune dépendance externe sans décision explicite du chef de projet — vaut
aussi pour l'outillage de diagnostic. Une dépendance ajoutée « juste pour mesurer » reste une
dépendance.

Le diagnostic se fait donc par **lecture des règles** et **modèle arithmétique**. C'est suffisant pour
un débordement de largeur, et c'est vérifiable par un tiers, ce qu'une capture n'est pas.

## 3. Trois pièges de mesure — les ignorer produirait un rapport faux

**P1 — `body { overflow-x:hidden }`.** La feuille de style masque le débordement horizontal. Tout
raisonnement du type « la page défile-t-elle horizontalement » répondra **non** même en cas de
débordement. Le débordement se démontre en comparant **la boîte de l'élément** à celle de son
conteneur, jamais par la présence d'une barre de défilement.

**P2 — les polices ne sont pas celles que le fichier demande.** Le style réclame `Segoe UI` pour le
corps et `Consolas` pour l'adresse, sans les fournir (dette D-5). Sur ta machine, **aucune des deux
n'existe** ; sur un téléphone non plus. Les polices de remplacement sont **plus larges**. Ton modèle
doit donc traiter la largeur d'un caractère comme un **intervalle**, pas comme une valeur : borne
basse avec la police demandée, borne haute avec un remplacement générique. Donne les deux.

**P3 — l'asymétrie des conclusions.** Avec la borne **haute** (police large), « ça ne déborde pas »
est une conclusion solide ; « ça déborde » ne l'est pas. Avec la borne **basse**, c'est l'inverse.
Formule chaque conclusion en disant de quelle borne elle vient.

## 4. Inspections — numérotées, toutes exécutées

**Exécute les six, même si la cause te paraît trouvée après la deuxième.** Un symptôme peut avoir
plusieurs causes, et le rapport vaut par ce qu'il élimine autant que par ce qu'il désigne.

**I1 — La chaîne des conteneurs.** Depuis `<section id="contact">` jusqu'au texte de l'adresse,
énumère chaque élément traversé, sa classe, et **toutes** les déclarations qui s'y appliquent :
largeur, largeur maximale, rembourrage, marge, mode d'affichage, alignement, retour à la ligne,
`box-sizing`. Donne la place réellement disponible pour la pastille à 320 pixels de fenêtre.

**I2 — La pastille elle-même.** Mode d'affichage, présence ou absence de `flex-wrap`, de
`max-width`, de `min-width`, de `word-break`, de `overflow-wrap`. L'adresse forme-t-elle un **bloc
insécable** pour le moteur de rendu ? Le bouton « Copier » peut-il rétrécir, ou a-t-il une largeur
plancher ?

**I3 — Le modèle arithmétique.** Largeur requise = largeur de l'adresse (25 caractères × largeur d'un
caractère, **en donnant les deux bornes de P2**) + rembourrages + espacement + largeur du bouton.
Compare à la place disponible de I1, à **320, 360, 375, 414, 599 et 601 pixels**. Donne un tableau.
Refais le calcul avec l'ancienne adresse (19 caractères) pour établir le seuil de largeur à partir
duquel chaque version tient.

**I4 — Les règles d'adaptation.** Les deux règles existantes sont écrites en largeur **maximale**
(600 et 700 pixels), donc en dégradation depuis le grand écran — c'est la dette D-2. Laquelle
s'applique au bloc Contact ? Réduit-elle un rembourrage sur ce chemin ? **Si aucune ne touche ce
bloc, dis-le explicitement** : ce serait la cause racine, et non un détail.

**I5 — Est-ce le seul endroit ?** Cherche, par lecture, les **autres** constructions du même genre :
élément à contenu insécable, largeur fixe, mode d'affichage en ligne sans retour à la ligne autorisé.
La pastille est-elle un cas isolé ou la pointe d'un défaut de structure ? Cette réponse change
l'ampleur du correctif à venir, et elle seule.

**I6 — Ce que ce diagnostic ne peut pas établir.** Énumère franchement les questions qui exigeraient
un rendu réel : comportement du retour à la ligne selon le moteur, hauteur effective, chevauchement
avec les éléments voisins, ergonomie tactile de la pastille repliée. **Ne les devine pas.**

## 5. Livrable

**Un seul fichier** : `.pipeline/RAPPORT_DIAGNOSTIC_pastille-contact_v1.md`.

Il contient, dans cet ordre : les symptômes repris de ce prompt · le résultat des six inspections,
numéroté · les **causes racines** classées de la plus déterminante à la plus accessoire · les
**recommandations, sans implémentation** — décris ce qu'il faudrait obtenir, ne montre pas le code
qui l'obtiendrait · la liste du §I6 · et enfin ce que tu recommanderais de couvrir par une porte
automatique le jour où elle existera.

**Aucun autre fichier ne change.** `.pipeline/` est ignoré par le contrôle de version : ce rapport ne
part pas au dépôt, et c'est voulu.

## 6. Un point à signaler, pas à corriger

La table de déclenchement du référentiel central prescrit de charger `VISION_METHOD` pour tout
chantier touchant « le rendu web à valider ». **Ce fichier n'existe pas dans le référentiel.** La
règle pointe donc dans le vide.

Ce n'est pas ton périmètre — c'est le référentiel, pas ce dépôt. **Mentionne-le en fin de rapport**,
en une ligne, et n'entreprends rien.

---

*Prompt déposé par Cowork. Il n'est exécutable qu'une fois transmis par le chef de projet.*
