# EVOL — Barre de navigation : menu de débordement et petit écran d'abord

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : v3 · **Date** : 9 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet

> Incrément **E-2a**. Le contenu de la section « À propos » du menu fait l'objet d'un incrément
> distinct (**E-2b**) : celui-ci construit le menu, celui-là le remplira.

> ### 🔁 Révision v3 — l'invariant du contrôle 9 était faux
>
> **La v2 ne doit pas être exécutée.** Son §2.5 exigeait que **la somme** des libellés de navigation
> tienne dans la place disponible. C'est l'invariant d'**avant** le menu : une fois le débordement en
> place, les entrées qui ne tiennent pas **quittent la barre** — c'est tout l'objet de l'incrément.
> Le contrôle aurait donc rougi sur une page devenue correcte.
>
> **Mesuré par Claude Code sur les libellés réels**, place disponible 288 px à 320 px de fenêtre :
> français 374 px, anglais 340 px — **rouge dans les deux langues, même en borne basse**, et rouge
> encore après le correctif, puisque celui-ci ne raccourcit pas les libellés, il les déplace.
>
> C'est la **seconde fois dans la même journée** que le rédacteur spécifie une garde contre une
> propriété que le changement qu'il ordonne rend caduque — la première fut le §2.5 du correctif de
> largeur, sur la pastille autorisée à se replier. Le motif est identique et il est noté.
>
> **Correction** : l'invariant devient **« le libellé le plus long tient dans le panneau »**. Dans le
> panneau les entrées s'empilent : c'est chaque libellé **seul**, jamais leur somme, qui doit tenir.
> C'est exactement ce que la justification écrite du prompt décrivait déjà.

---

> ### 🔁 Révision v2 — correction d'une déclaration fausse du rédacteur
>
> **La v1 ne doit pas être exécutée.** Son bloc « Satellites consultés » déclarait `VISION_METHOD`
> **introuvable dans le référentiel**. C'est faux, et l'erreur est du rédacteur : le satellite existe,
> en **version 1.2 du 1er août 2026**, dans `Etude_technique/TWAIM_R&D/VISION_METHOD/`, accompagné de
> deux documents de conception. Le Tech Lead avait cherché à la **racine** du référentiel et conclu à
> une absence — un instrument qui ne regarde qu'un dossier ne prouve rien sur les autres.
>
> Défaut relevé par Claude Code avant lancement, à la lecture du prompt. La déclaration corrigée
> figure dans le bloc ci-dessous. **Le périmètre technique de l'incrément est inchangé** : ce qui
> change, c'est ce que le prompt dit avoir consulté — et c'est précisément la ligne que la méthode
> rend falsifiable.

---

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué |
|---|---|---|---|
| `UX_METHOD` | 1.0 | **Appliqué** | §1 petit écran d'abord (règles en largeur **minimale**) · §2 débordement automatique par priorité, jamais par nombre fixe d'entrées · §3.1 à §3.6 conventions du menu · **§3.7 patron de référence : icône et état d'accessibilité dérivés d'un seul booléen** · §4 tactile contre pointeur. |
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | §3 Couche A — le contrôle ajouté est une **porte** : défaut semé, assertion positive, preuve de morsure, et **épreuve de vivacité par neutralisation**. §7 garde de non-vacuité. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucune ressource tierce, aucun secret. Le menu n'introduit ni saisie utilisateur, ni paramètre d'adresse interprété : les quatre invariants du `CLAUDE.md` §4 restent tenus. |
| `VISION_METHOD` | **1.2** | **Consulté, non instancié** | Le satellite **existe** (`TWAIM_R&D/VISION_METHOD/`, 1er août 2026) et se rattache à `ASSURANCE_METHOD` Couche A. Il définit deux portes — **structurelle** (géométrie : débordement, chevauchement, petit écran d'abord ; absolue, active dès le premier jour) et **pixel** (régression, relative, exige une image de référence) — sur trois paliers d'exécution. **Il n'est pas instancié sur ce projet : c'est exactement la dette D-1.** L'instancier suppose un navigateur piloté, une configuration et des scripts : c'est un chantier à part entière, pas une section de cet incrément. La validation du rendu reste donc **humaine ici**, et le contrôle du §2.5 est une **approximation arithmétique provisoire** de sa porte structurelle. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données, aucun geste hors dépôt, aucun agent autonome, un seul projet. |

---

## 1. Le défaut à corriger, et il est constaté

À **320 pixels**, en **français**, la barre de navigation tronque son dernier lien : elle affiche
`Compétences Expérience Projets Conta…`. En **anglais**, elle passe — les libellés y sont plus courts.

C'est le **cas B** du diagnostic du 9 août, qui était **prédit sans être constaté**. La capture du chef
de projet l'a fait passer à constaté, et a ajouté ce que le modèle n'avait pas su dire : **le défaut
est propre au français.** Il est inscrit au journal de la session 5.

Cause de fond : `nav ul` est un conteneur en ligne **sans repli**, dont les quatre libellés sont des
mots insécables. Sa largeur plancher dépasse la place disponible dans la barre.

## 2. Ce qu'il faut obtenir

### 2.1 Un menu de débordement, par priorité et non par compte

Quand la place manque, les entrées de navigation quittent la barre et se retrouvent dans un menu
replié, ouvert par un bouton à trois barres.

**L'ordre de priorité, décidé par le chef de projet** — de la **dernière** à disparaître à la
**première** :

| Rang | Entrée | Pourquoi ce rang |
|---|---|---|
| 1 | **Projets** | Dernière à quitter la barre : c'est là que vivra la carte du harnais, le différenciateur du portfolio. |
| 2 | **Expérience** | Trente-cinq ans de parcours : ce qu'un recruteur vient chercher. |
| 3 | **Compétences** | Première section après le hero, atteinte en un défilement. |
| 4 | **Contact** | Part en premier : **déjà redondant** — le bloc de contact est en bas de page et le hero porte un bouton « Me contacter ». Deux chemins y mènent déjà. |

**Ce rang se lit dans le `CLAUDE.md`, pas dans le code** (`UX_METHOD` §2.3) : inscris-le au §9 du
cadrage, et fais que l'implémentation s'y conforme plutôt que de le redéclarer.

**Débordement par priorité, jamais par nombre fixe** (`UX_METHOD` §2.1) : un seuil du type « en
dessous de 600 pixels, on masque trois entrées » devient faux au premier libellé ajouté ou traduit.
Ce qui doit gouverner, c'est **la place réellement disponible**.

### 2.2 La bascule de langue ne disparaît jamais — elle rétrécit

**Invariant du `CLAUDE.md` §9, confirmé par le chef de projet le 9 août : le bouton de langue reste
visible dans la barre à toutes les largeurs.**

La raison, à conserver dans le cadrage parce qu'elle n'est pas évidente : **la langue n'est pas un
réglage, c'est la condition pour lire quoi que ce soit.** Un visiteur anglophone arrivé sur la version
française doit pouvoir basculer **avant** d'avoir compris l'interface — donc sans avoir à deviner
qu'un bouton à trois barres cache une entrée nommée, en français, « Réglages ».

Ce qu'il faut obtenir : sous le seuil, le bouton **ne garde que le drapeau et deux lettres**
(`EN` / `FR`) au lieu de `🇬🇧 English` / `🇫🇷 Français`. On dégrade, on ne masque pas.

> ⚠️ **Piège actif, et il devient dangereux avec cet incrément.** Le libellé du bouton est aujourd'hui
> piloté par **deux mécanismes** : son attribut de traduction et une écriture directe par le
> programme. C'est idempotent tant que les deux disent la même chose — or tu vas justement faire
> varier ce libellé.
>
> **Résultat à obtenir : une seule source de vérité pour ce texte.** La forme longue vit dans le
> dictionnaire, comme tout libellé traduisible ; le raccourcissement relève de la **présentation**, pas
> d'une seconde chaîne dans le programme. Aucune chaîne de langue ne doit être écrite en dur dans le
> JavaScript (`UX_METHOD` §3.7).

### 2.3 Le patron du menu — il existe déjà, ne l'invente pas

`UX_METHOD` §3.7 donne le patron de référence, né d'un retour d'expérience de TwaimWeb. Applique-le :

- **Un seul booléen d'état**, dont dérivent l'icône *et* l'état d'accessibilité par une fonction de
  rendu unique. Deux chemins séparés finissent par diverger — c'est le défaut que ce patron corrige.
- **Bouton** : état d'ouverture déclaré, lien vers le panneau qu'il commande, et libellé qui change
  selon l'état — porté par des attributs de données, jamais par le programme.
- **Icône** : deux tracés vectoriels **incorporés** dans la page, barres et croix, basculés par classe.
  Aucune police d'icônes, aucune requête externe.
- **Clavier** : la touche d'échappement referme **et rend le focus** au bouton.
- **Fermeture contextuelle** : un clic sur une ancre interne referme le panneau, sinon il masque la
  cible vers laquelle on vient de naviguer.
- **Enrichissement progressif** : sans JavaScript, le panneau reste **en flux**, lisible et navigable.
  Le mode replié ne s'active que lorsque le programme pose sa classe.
- **Animations** : uniquement transformation et opacité (§3.6).
- **Tactile** : la détection se fait par requête de média sur l'absence de survol, **jamais** par
  reniflage de l'identifiant de navigateur (§4).

Le panneau de ce site est un **panneau simple**, pas une fenêtre modale : le toggle seul suffit, sans
piège à focus (§3.7, articulation avec §3.5).

### 2.4 Les règles d'adaptation s'écrivent en largeur minimale

Cet incrément **réécrit la règle d'adaptation de la barre** (`index.html:33-41`). Elle s'écrit
désormais en **largeur minimale**, pas maximale : c'est la tranche de remboursement de la dette D-2
qui concerne la navigation.

**Ne touche pas** à la règle de la grille de projets (`index.html:101`) : hors périmètre.

### 2.5 Le neuvième contrôle — largeur plancher de la barre, dans les deux langues

Un **contrôle bloquant supplémentaire** dans `scripts/check-i18n.mjs` : **le libellé de navigation le
plus long tient dans la largeur utile du panneau du menu**, à la largeur d'écran minimale visée.

**Pourquoi le libellé seul, et non la somme.** Dans le panneau, les entrées **s'empilent**. Leur somme
n'a donc aucune signification — et l'exiger reviendrait à faire rougir la porte sur l'état que cet
incrément existe pour produire. Ce qui peut encore casser, c'est **un libellé isolé trop long**, et
c'est le risque que l'incrément suivant introduira en ajoutant les entrées de la section « À propos ».

> ⛔ **Ce que ce contrôle NE fait PAS, et il faut le savoir.** Il ne garantit **pas** que le socle de
> la barre — identité, bouton à trois barres, bouton de langue rétréci — tienne. Cette propriété a été
> examinée et **écartée du calcul arithmétique**, pour deux raisons mesurées : la barre est autorisée
> à passer à la ligne, donc « le socle tient » n'est pas une propriété d'une seule rangée ; et les
> libellés d'interface sont en **police proportionnelle**, ce qui porte l'incertitude de mesure d'environ
> 9 % (contrôle 8, chasse fixe) à environ **30 %** — sur un cas aussi serré, la garde rougirait sur une
> mise en page qui tient réellement. **Cette propriété relève de la porte structurelle de
> `VISION_METHOD`, qui mesure sur un rendu réel.** Écris-le en commentaire au-dessus du contrôle.

Quatre exigences, aucune facultative :

1. **Les deux langues, et on retient le libellé le plus long des deux.** C'est précisément ce que le
   modèle n'avait pas su faire le 9 août : il avait calculé une seule fois, et le défaut n'existait
   qu'en français.
2. **Borne haute obligatoire** pour la largeur de caractère, comme au contrôle 8 : c'est le seul sens
   dans lequel « ça passe » est une conclusion solide.
3. **Garde de non-vacuité** : si l'extraction ne trouve pas les libellés de navigation, c'est une
   **erreur**, pas un succès. Sans elle, il suffit d'un remaniement du balisage pour que ce contrôle
   devienne aveugle en restant vert.
4. **Message propre**, nommant la langue fautive, la largeur exigée, la place disponible et l'écart —
   dans une phrase qui n'appartient qu'à ce contrôle, jamais un identifiant nu.

**Preuve de morsure et épreuve de vivacité**, comme les huit autres : défaut semé dans
`scripts/fixtures/broken.html`, assertion positive dans `scripts/gate.sh` posée sur le message propre,
compte des chemins et des assertions mis à jour dans les commentaires. Puis **neutralise ce seul
contrôle** sur une copie hors dépôt (`errors.push(` → `[].push(`) et vérifie que la porte rougit.
Reporte l'épreuve dans `.pipeline/test-results.md`.

> **Ce contrôle existe pour une raison datée** : le menu va **naître avec de nouveaux libellés
> visibles**, et E-2b lui en ajoutera d'autres. Sans lui, le piège se rejouera au premier mot un peu
> long — et la prochaine fois, personne ne pensera à regarder.
>
> **Et il est provisoire, à dessein.** La porte **structurelle** de `VISION_METHOD` couvre la même
> propriété — le débordement — mais en la **mesurant sur un rendu réel** plutôt qu'en la calculant
> depuis les déclarations de la feuille de style. Le jour où ce satellite sera instancié (dette D-1),
> ce contrôle arithmétique deviendra redondant et pourra être retiré. **Inscris cette phrase en
> commentaire au-dessus du contrôle** : sans elle, quelqu'un trouvera un jour deux dispositifs qui
> vérifient la même chose et supprimera le mauvais.

### 2.6 Le cadrage

Mets à jour, et **rien d'autre** :

- **§6** — le filet réel après ton travail : nombre de contrôles bloquants, de chemins, d'assertions,
  et le rôle du nouveau contrôle.
- **§9** — la description de la barre : le menu de débordement, **l'ordre de priorité d'effacement du
  §2.1**, l'invariant du bouton de langue **avec sa raison** (§2.2), et le fait que la règle
  d'adaptation de la barre est désormais écrite en largeur minimale.

**Ne touche pas au §3** : il est périmé et fait l'objet d'un incrément séparé.

## 3. Hors périmètre — explicitement

- **Le contenu de la section « À propos »** : c'est E-2b. Ce prompt construit le contenant.
- **La dette D-7** — rendre le budget mesuré plutôt que déclaré. Elle exige de lire les valeurs réelles
  de la feuille de style, or **cet incrément réécrit justement ces règles**. Écrire un contrôle qui
  analyse une feuille qu'on est en train de modifier est une mauvaise idée : D-7 part dans son propre
  incrément, une fois les règles stabilisées.
- **La grille de projets** (`index.html:101`), le hero, le bloc contact, la grille de compétences.
- **`body{overflow-x:hidden}`** : ne le retire pas. Décision de fin de chantier.
- **Aucune dépendance**, aucune police d'icônes, aucune ressource tierce. **Ne reformate pas** la
  feuille de style : le style compact est une convention du projet.
- **Ne modifie pas `tasks/ROADMAP.md`** : il est tenu par le Tech Lead.
- **Ne fusionne pas, ne publie pas, ne supprime pas de branche.**

## 4. Prérequis vérifiables

**Si l'un de ces points n'est pas satisfait, ARRÊTE-TOI et signale-le.**

1. L'arbre de travail est propre **à l'exception** de `prompts/v0.3/` — dépôts du Tech Lead, à indexer
   avec cet incrément. Le fichier `CORRECTIF_budget-largeur-mobile_v1.md` porte un bandeau de
   péremption ajouté après sa fusion : c'est voulu (réserve R8 de la revue du 9 août).
2. `main` est à jour avec sa jumelle publiée, vérifié **en direct**.
3. `.pipeline/STATUS.md` est en `CLOSED`.
4. `bash scripts/gate.sh` est **vert avant que tu ne commences**.
5. La version du projet est **0.3.1**.

## 5. Livrables

- Branche de travail : `feat/menu-debordement`.
- `.pipeline/spec.md` · `.pipeline/changes.md` · `.pipeline/last-diff.patch`.
- `.pipeline/test-results.md` — sortie complète de la porte **plus** l'épreuve du §2.5.
- Enregistrement sur la branche, indexation **précise**, jamais `-A`.
- Dernier geste : `.pipeline/STATUS.md` = `READY — …`.

## 6. Ce que tu ne peux pas valider, et qu'il faut écrire

Ce projet n'a **aucune barrière de rendu**, et une mesure faite hors Windows serait faussée. **Ne
tente pas de mesurer le rendu, et ne « corrige » rien par précaution.** Écris en toutes lettres, dans
ton rapport de clôture, les points qui reviennent à l'humain :

- l'ouverture et la fermeture du menu à **320, 360 et 375 pixels**, **dans les deux langues** ;
- le **franchissement du seuil** dans les deux sens — c'est là que les entrées entrent et sortent de
  la barre, et c'est le moment le plus exposé ;
- le bouton de langue **rétréci**, et la bascule effectuée depuis ce bouton rétréci ;
- la **cible tactile** du bouton à trois barres : un doigt fait environ 45 pixels ;
- le comportement au **clavier** : ouverture, échappement, retour du focus.

Et signale ce que tu n'as pas pu couvrir plutôt que de le passer sous silence.

---

*Prompt déposé par Cowork. Il n'est exécutable qu'une fois transmis par le chef de projet.*
