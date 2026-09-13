# EVOL — La carte IBMiAPI entre dans la grille, et le POC WPF dit enfin ce qu'il était

**Destinataire** : Claude Code · **Dépôt** : `lianazel.github.io`
**Type** : `EVOL` · **Branche attendue** : `feat/carte-ibmiapi-et-poc-wpf`
**Fil** : `tasks/ROADMAP.md` partie I, **E-3**, dont ce prompt ne prend qu'un éclat. Voir « Ce que ce prompt NE fait PAS ».

> **Sujet neuf.** Compteur de verdicts non-`SHIP` sur le nom `carte-ibmiapi-et-poc-wpf` : **0**. Aucun prompt n'a jamais porté ce nom. Le périmètre est réellement distinct de tout sujet antérieur : aucune consigne d'un prompt précédent n'est rejouée.

> **Un seul incrément, deux blocs indépendants.** Ils touchent le même fichier, `index.html`, mais deux sections différentes, deux jeux de clés différents, et rien ne les relie. Arbitrage du chef de projet, 13 septembre 2026. Chaque bloc est borné séparément ci-dessous, et chacun a ses propres critères.

---

## Mode d'exécution

**AUTO MODE ON : autorisé.**

**Motif, constatable.** Toutes les preuves de cet incrément se jouent sans témoin humain. Ce sont des comptes (`grep -c`, `grep -o`), des tailles (`wc -c`), des empreintes (`sha256sum`) et le code de sortie de `bash scripts/gate.sh`. Aucune preuve de rendu n'est prescrite. Aucun jugement d'aspect n'est demandé. Aucun outil sous règle `ask` n'est appelé : la seule règle `ask` de `.claude/settings.json` est `mcp__playwright`, et ce prompt interdit nommément d'appeler Playwright.

**La borne reste entière** : usiner seul n'est pas conclure seul. Tu t'arrêtes à `READY`. La validation visuelle dans les deux langues appartient au chef de projet, après, et elle figure dans la liste finale.

---

## Satellites consultés — table §8.1 du Core

**Lignes cochées :**

| Ligne §8.1 | Déclenchée par |
|---|---|
| `UX_METHOD` | on touche l'**interface** : une carte de la grille de projets, et deux libellés visibles de la frise d'expérience. Section mobilisée : §1, petit écran d'abord. La carte ne crée aucune règle de feuille de style : elle reprend les classes des six cartes existantes |
| `STYLE_METHOD` + `STYLE_PROFILE.local.md` | on produit un **texte destiné à être lu**, dans les deux langues. Règles mobilisées : **S-1**, aucun cadratin ajouté ; **S-2**, un fait vérifiable plutôt qu'un adjectif sur soi ; **S-3**, aucun mot qui range la compétence au passé |

**Lignes écartées, avec leur motif. Elles sont falsifiables, c'est pour cela qu'elles sont là :**

| Ligne §8.1 | Pourquoi elle n'est pas déclenchée |
|---|---|
| `ASSURANCE_METHOD` couche A | **Cas limite, et Cowork a hésité.** Une première rédaction inscrivait `i` et `S/36` à `scripts/i18n-allowlist.txt`, donnée lue par le contrôle 6 du filet, donc une règle exécutable. Écartée : l'étiquette `IBM i` reçoit une clé `data-i18n`, et `scripts/` reste intact à l'octet et à l'empreinte. **Motif mesuré le 13 septembre 2026** : le §6 du `CLAUDE.md` déclare `105 entrées` de liste blanche, ce qui est juste (compte d'entrées non vides et non commentées). Deux entrées de plus auraient rendu ce nombre faux et obligé à ouvrir `CLAUDE.md`, que ce prompt ferme |
| `SECURITY_METHOD` §3.3 | aucune dépendance ajoutée, mise à jour ni remplacée. Le site reste à zéro dépendance, invariant §4-1 du `CLAUDE.md` |
| `SECURITY_METHOD` §3.4, §3.5, §3.7, §3.10 | aucune clé, aucun secret, aucun jeton, aucune permission. `.claude/` n'est pas ouvert |
| `AGENT_SCOPE_METHOD` | rien n'est écrit hors du dépôt. Aucun fichier de `~/` n'est ouvert |
| `VISION_METHOD` | **aucun rendu n'est validé par une porte ici**, alors qu'on touche l'interface. La barrière de rendu n'est pas instanciée sur ce dépôt, c'est la dette **D-1**. La validation visuelle reste humaine, `CLAUDE.md` §2, et elle est hors de ce prompt |

Les lignes structurellement impossibles sur ce dépôt ne sont pas récitées : base de données, multi-projets, agent en boucle autonome. Une ligne écartée qui ne peut jamais être prise en défaut ne prouve rien (Core §8.1, précision v2.29).

---

## Prérequis — chacun se mesure, chacun a sa conduite d'échec

Lance chaque commande **depuis la racine du dépôt**, telle qu'elle est écrite. Aucune commande de ce tableau ne porte de métacaractère d'expression régulière : les deux comptes qui exigent un tube vivent dans le bloc de code qui suit, hors de toute cellule de tableau.

| # | Ce qui doit être vrai | Commande | Attendu | Sinon |
|---|---|---|---|---|
| P1 | `index.html` est le fichier relevé, taille | `wc -c < index.html` | `100195` **octets** | **ARRÊTE-TOI** |
| P2 | Même fichier, empreinte | `sha256sum index.html` | `49ff23563515ec1e986dd0e721424f7c739f6c5a549497661ff1a8e17fcad5bc` | **ARRÊTE-TOI** : une retouche à taille constante passerait P1 |
| P3 | Le préfixe de clés `p8_` est libre | `grep -c 'p8_' index.html` | `0` **ligne** | **ARRÊTE-TOI** : le préfixe est pris, il faut en choisir un autre |
| P4 | La clé `x25` existe et vit à trois endroits | `grep -c 'x25' index.html` | `3` **lignes** | **ARRÊTE-TOI** : le bloc B n'a plus sa cible |
| P5 | La clé `y324` existe et vit à trois endroits | `grep -c 'y324' index.html` | `3` **lignes** | **ARRÊTE-TOI** : même motif |
| P6 | La clé `see_site` existe et est déjà posée | `grep -c 'see_site' index.html` | `5` **lignes** | **ARRÊTE-TOI** : la carte devait la réutiliser, pas la créer |
| P7 | La grille porte six cartes | `grep -c 'class="proj-card' index.html` | `6` **lignes** | **ARRÊTE-TOI** et dis le compte trouvé |
| P8 | Le mécanisme `data-i18n-href` n'existe pas | `grep -c 'data-i18n-href' index.html` | `0` **ligne** | **ARRÊTE-TOI** : s'il existe désormais, la carte doit être repensée avec lui |
| P9 | La liste blanche est celle relevée, taille | `wc -c < scripts/i18n-allowlist.txt` | `8588` **octets** | **ARRÊTE-TOI** |
| P10 | Même fichier, empreinte | `sha256sum scripts/i18n-allowlist.txt` | `8f69587cfd15fd02486b89ecb9874febcbc08d3e8a8242503c598dba50381635` | **ARRÊTE-TOI** |
| P11 | La porte est celle relevée, taille | `wc -c < scripts/gate.sh` | `17961` **octets** | **ARRÊTE-TOI** |
| P12 | Même fichier, empreinte | `sha256sum scripts/gate.sh` | `1130c632e738474c12ea72819b3676136740d970069fd5c107253c340b328dc8` | **ARRÊTE-TOI** |
| P13 | Le contrôleur est celui relevé, taille | `wc -c < scripts/check-i18n.mjs` | `32952` **octets** | **ARRÊTE-TOI** |
| P14 | Même fichier, empreinte | `sha256sum scripts/check-i18n.mjs` | `dccd95c9bc0e931ad580e143c7bd37c0fe0ed05720a87983defab2648a5ee955` | **ARRÊTE-TOI** |
| P15 | Le cadrage est celui relevé, taille | `wc -c < CLAUDE.md` | `61397` **octets** | **ARRÊTE-TOI** |
| P16 | Même fichier, empreinte | `sha256sum CLAUDE.md` | `c7d398813fd870c7ffb6b16f955f4373c965ce44add952595b8ae5d0f06f8147` | **ARRÊTE-TOI** |

**P17, le relevé d'avant travaux.** Ce n'est pas une garde, c'est la valeur de référence du critère 6. Lance-la et note le nombre :

```
grep -o '—' index.html | wc -l
```

Attendu : `152` **occurrences** de cadratin, fichier entier, commentaires compris. C'est la règle de comptage de la maison, elle se cite avec le nombre. Si le compte diffère, **note l'écart et continue** : le critère 6 compare l'avant et l'après, pas le nombre absolu.

> **Pourquoi les empreintes doublent les tailles.** Une retouche à taille constante passerait un prérequis qui ne compte que des octets. Les cinq empreintes ont été relevées par Cowork le 13 septembre 2026, sur des copies de tailles identiques à celles de la machine.
>
> **Pourquoi le compte de cadratins vit dans un bloc de code.** Il exige un tube, et une cellule de tableau markdown n'admet pas de barre verticale nue. Le 13 septembre 2026, un `|` échappé pour tenir dans une cellule a rendu une garde totalement inerte : elle rendait `0` sur tous les fichiers, y compris ceux qui contenaient ce qu'elle cherchait. On ne répare pas l'échappement, on sort la commande du tableau.

---

## Bloc A — la septième carte, dans la grille de projets

### A.1 Où elle se pose

**Première enfant de `.proj-grid`**, avant la carte GrainWatch. Elle en devient la septième.

> **Cette première place est provisoire, et il faut l'écrire pour que la suite ne soit pas surprise.** La règle **E-3** du 8 août 2026 réserve la première place à la **carte TWAIM**, qui n'existe pas encore. Le jour où E-3 sera fait, la carte TWAIM passera au-dessus de celle-ci. Ce n'est pas une dette, c'est un ordre connu d'avance.

### A.2 Le balisage

Construis la carte sur le patron **exact** des six existantes : mêmes classes, mêmes styles en ligne, même ordre interne (conteneur, émoji, titre, description, étiquettes, boutons). Le seul style neuf est la valeur en ligne `--grad` de la carte, comme les six autres en portent chacune une : ce n'est pas une règle de feuille de style.

- Conteneur : `class="proj-card reveal"`, `style="--grad:linear-gradient(135deg,#1f70c1,#0b3c63)"`.
- Émoji : `<span class="proj-emoji">📇</span>`, nu et sans clé, forme que la porte accepte déjà pour les six autres.
- Titre : `<h3 data-i18n="p8_title">`.
- Description : `<p data-i18n="p8_desc">`.
- Étiquettes, **quatre, dans cet ordre**, toutes en `class="tag"` : `IBM i` porteuse de `data-i18n="p8_tag"`, puis `RPG`, `.NET` et `REST`, ces trois-là sans clé. Les trois sont déjà inscrites à la liste blanche, vérifié le 13 septembre 2026.
- Boutons : **un seul**, `class="btn btn-primary"` avec `data-i18n="see_site"`, vers `https://lianazel.github.io/ibm-s36-to-rest-api/`, en `target="_blank"` et `rel="noopener noreferrer"`, comme les trois autres boutons de site de la grille.

### A.3 Les trois clés, et leurs valeurs

Déclare-les dans **les deux blocs de langue**, à la suite des clés `p` existantes.

| Clé | Bloc `fr` | Bloc `en` |
|---|---|---|
| `p8_title` | `Des fichiers S/36 à l'API REST` | `From S/36 files to a REST API` |
| `p8_tag` | `IBM i` | `IBM i` |

`p8_desc`, bloc `fr` :

> Comment des fichiers plats S/36 deviennent une API REST. Le site déroule le décor, le problème, la solution, le mini-langage et la méthode, puis regarde un fichier S/36 de près. Bilingue, la bascule se fait dans la page. Conçu et piloté avec le harnais IA TWAIM.

`p8_desc`, bloc `en` :

> How flat S/36 files become a REST API. The site walks through the setting, the problem, the solution, the mini-language and the method, then looks at an S/36 file up close. Bilingual, with an in-page switch. Designed and run with the TWAIM AI harness.

**Les deux titres ont été lus sur le site le 13 septembre 2026**, dans les deux langues, pas repris d'un souvenir. Ils s'écrivent tels quels.

### A.4 Les quatre pièges de cette carte, tous mesurés

**1. L'étiquette `IBM i` porte une clé, et ce n'est pas un oubli de traduction.** La liste blanche compare **mot à mot**. Elle contient `IBM`, elle ne contient **pas** `i` seul, et elle ne contient **pas** `S/36` : mesuré le 13 septembre 2026, `grep -c -F 'IBM i'` et `grep -c -F 'S/36'` rendent `0` **ligne** chacun sur les 158 lignes du fichier. Une étiquette `IBM i` nue ferait donc mordre le contrôle 6, couverture du texte visible. **L'arbitrage est rendu : clé `data-i18n`, valeur identique des deux côtés.** Le précédent maison est `ia1`, qui porte `Architecture & specs` dans les deux blocs. **N'ajoute rien à la liste blanche.**

**2. `S/36` n'apparaît que dans du texte couvert.** Les deux occurrences visibles vivent dans `p8_title` et `p8_desc`, toutes deux porteuses d'un `data-i18n`. Le contrôle 6 les voit couvertes. **N'écris `S/36` nulle part hors d'une valeur de dictionnaire.**

**3. Pas de badge « harnais IA TWAIM ».** La règle **E-3** du 8 août 2026 interdit de poser ce badge avant la carte TWAIM qui l'explique, et cette carte n'existe pas : `grep -c 'TWAIM' index.html` rend **7 lignes**, dont **3** dans le corps, toutes dans la section Expérience, et **4** au dictionnaire. Aucune dans la grille de projets. Poser le badge maintenant, ce serait montrer une serrure sans sa clé. **Le harnais se nomme en toutes lettres dans la description, jamais en étiquette.**

**4. Pas de bouton GitHub.** L'adresse `https://github.com/lianazel/ibm-s36-to-rest-api` rend **404**, mesuré le 13 septembre 2026. Une carte à deux boutons dont l'un mène nulle part vaut moins qu'une carte à un bouton. **Un seul bouton**, et il réutilise la clé `see_site` existante.

**Et un effet à dire, pas à taire.** Ce bouton est une ancre `.btn-primary` de plus, donc **une ancre de plus sous le seuil AA**. C'est la dette **D-20** : treize ancres sur vingt-trois sous le seuil, dont sept boutons `.btn-primary` dont aucun point échantillonné n'atteint le seuil. Cet incrément ne l'aggrave pas **en nature**, il l'aggrave **en compte**. À porter dans `changes.md`, avec les deux comptes du critère 8.

---

## Bloc B — le pavé POC, dans la frise d'expérience

### B.1 Ce qui est réécrit, et les six emplacements

Dans le bloc **Atoll-Solutions · Ingénieur R&D · Oct 2015 – Fév 2020**, la sous-ligne aujourd'hui intitulée « Exploration WPF ».

**Cardinalité annoncée : six emplacements**, et les voici, nommés :

1. le `span` porteur de `data-i18n="x25"` dans le corps ;
2. le `span` porteur de `data-i18n="y324"` dans le corps, **sur la même ligne que le précédent** ;
3. `x25` dans le bloc `fr` ;
4. `y324` dans le bloc `fr` ;
5. `x25` dans le bloc `en` ;
6. `y324` dans le bloc `en`.

**Aucune clé n'est créée.** Les deux clés existent déjà dans les deux langues, mesuré aux prérequis P4 et P5 : trois lignes chacune, une dans le corps et une par bloc de langue. Cet incrément **remplace des valeurs**, il n'ajoute pas de clé. Les contrôles 1, 2 et 3 du filet ne verront donc rien de neuf sur ce bloc.

### B.2 Les valeurs, à reprendre telles quelles

Ce texte est **arbitré et validé par le chef de projet le 13 septembre 2026**. Il se reprend mot pour mot. Tu ne le réécris pas, tu ne l'améliores pas, tu ne le raccourcis pas.

`x25`, bloc `fr` : `Un module RPG réécrit en WPF`
`x25`, bloc `en` : `An RPG module rewritten in WPF`

`y324`, bloc `fr`, **espace, cadratin, espace compris en tête** :

> ` — Trois mois pour livrer un POC, avec la technologie à apprendre en chemin : C#, .NET et WPF. Le livrable n'est pas une maquette. C'est un module métier qui tournait en RPG sur IBM i, réécrit entièrement en WPF. Passer d'un écran 5250 à une interface WPF change tout sauf la règle de gestion, et c'est elle qui devait ressortir intacte.`

`y324`, bloc `en`, **même séparateur en tête** :

> ` — Three months to deliver a POC, with the technology to learn along the way: C#, .NET and WPF. The deliverable is not a mock-up. It is a business module that ran in RPG on IBM i, rewritten entirely in WPF. Moving from a 5250 screen to a WPF interface changes everything except the business rule, and the business rule had to come through intact.`

> **Le séparateur en tête ne se touche pas.** ` — ` est la convention de ce fichier pour les valeurs `y` : `y315`, `y316`, `y317`, `y323` et `y325` la portent toutes. Le `CLAUDE.md` §5 dit que la forme compacte est volontaire. **Ce cadratin remplace un cadratin existant, il n'en ajoute pas.** C'est pourquoi le compte du critère 6 ne bouge pas.

### B.3 Le piège de ce bloc, et il est nommé

**La ligne `e5_desc`, juste au-dessus dans le même bloc, porte un nom de tiers en clair.** C'est la dette **D-17 famille B**, arbitrage du chef de projet **ouvert et non tranché** à ce jour.

**Tu ne touches pas cette ligne.** Ni dans le corps, ni dans le bloc `fr`, ni dans le bloc `en`. Pas pour l'améliorer, pas pour la nettoyer, pas au passage. Si tu penses qu'elle doit changer, écris-le dans `changes.md` et n'y touche pas.

**Et le texte neuf n'introduit aucun nom de tiers.** Ni client, ni employeur, ni objet appartenant à quelqu'un d'autre. Relis-le avant de l'écrire : il nomme des technologies et une plateforme, rien d'autre. Aucune des chaînes citées à la ligne `D-17` du `CLAUDE.md` §8 n'apparaît dans le présent prompt : le dépôt est public et `prompts/` y est servi, donc on renvoie à la ligne, on ne la cite pas.

---

## Ce qui doit rester vrai après, dans les deux blocs

- **Le texte du corps est identique caractère pour caractère à la valeur du bloc `fr`.** C'est la dette **D-14**, soldée le 11 août 2026 : la bascule fait `el.innerHTML = d[k]`, donc un visiteur qui ne bascule jamais lit le texte écrit dans la page, et un visiteur qui bascule lit celui du dictionnaire. Deux textes différents font deux pages différentes. Cela vaut pour `p8_title`, `p8_desc`, `p8_tag`, `x25` et `y324`.
- **Aucun cadratin ajouté.** Le compte du fichier entier ne bouge pas d'une unité.
- **`scripts/` intact**, à l'octet et à l'empreinte, les trois fichiers.
- **`CLAUDE.md` intact**, à l'octet et à l'empreinte.
- **Aucune clé posée dans une seule langue.** Les contrôles 1 et 2 du filet le voient, et ils bloquent.
- **Aucune classe, aucune couleur, aucune règle de feuille de style nouvelle.** Le bloc `<style>` de la page n'apparaît dans aucun morceau du diff.

---

## Critères d'acceptation

Chacun couvre exactement ce qu'il affirme, ni plus. Aucun ne présuppose la réponse à la question qu'il mesure.

1. **Les seize prérequis P1 à P16 sont mesurés et rapportés avec leur valeur observée**, et P17 est relevé. Un écart sur P1 à P16 arrête le travail avant toute écriture.
2. **La grille porte sept cartes** : `grep -c 'class="proj-card' index.html` rend `7` **lignes**. La carte IBMiAPI est la **première** enfant de `.proj-grid`. Preuve à porter dans `changes.md` : les relevés de `grep -n 'class="proj-grid"' index.html` et de `grep -n 'data-i18n="p8_title"' index.html`, et l'écart entre les deux numéros.
3. **Les trois clés `p8_` apparaissent trois fois chacune**, une pose dans le corps et une déclaration par bloc de langue. Comptes d'**occurrences** :

```
grep -o 'p8_title' index.html | wc -l
grep -o 'p8_desc' index.html | wc -l
grep -o 'p8_tag' index.html | wc -l
```

Attendu : `3`, `3`, `3`.

4. **L'ancien libellé a disparu et le neuf est en place**, avec ses comptes de **lignes** :
   - `grep -c 'Exploration WPF' index.html` rend `0`
   - `grep -c 'Un module RPG réécrit en WPF' index.html` rend `2` (corps et bloc `fr`)
   - `grep -c 'An RPG module rewritten in WPF' index.html` rend `1` (bloc `en`)
   - `grep -c -F 'Comment des fichiers plats S/36' index.html` rend `2` (corps et bloc `fr`)
   - `grep -c -F 'How flat S/36 files become' index.html` rend `1` (bloc `en`)
5. **Aucune entrée n'est ajoutée à la liste blanche** : `grep -c -F 'IBM i' scripts/i18n-allowlist.txt` rend `0` **ligne** après travaux, comme avant, et l'empreinte de P10 est inchangée.
6. **Cadratins écrits : `152` occurrences avant, `152` après**, sous la règle de comptage de P17. Les deux nombres figurent dans `changes.md` avec leur règle.
7. **Porte verte** : `bash scripts/gate.sh` sort en **code 0**, avec **exactement 4 avertissements**, et ce sont les quatre de la dette **D-4** : `e7_title`, `e7_desc`, `p3_title`, `p3_desc`. Le relevé des lignes `OK -` est porté tel quel dans `test-results.md`, sans être comparé à un nombre attendu.
8. **Le compte d'ancres `.btn-primary` est porté dans `changes.md`, avant et après.** Commande : `grep -c 'btn-primary' index.html`. Valeur avant travaux : `9` **lignes**, dont **2** déclarations de feuille de style et **7** ancres. La valeur après est relevée, pas devinée, et la phrase qui l'accompagne dit que D-20 est aggravée en compte et non en nature.
9. **La ligne `e5_desc` n'apparaît dans aucun morceau du diff.** Preuve à porter dans `changes.md` : la sortie de `git diff -U0 -- index.html`, et le constat explicite que `e5_desc` n'y figure pas.
10. **`scripts/gate.sh`, `scripts/check-i18n.mjs`, `scripts/i18n-allowlist.txt` et `CLAUDE.md` rendent les mêmes empreintes qu'aux prérequis.** Quatre `sha256sum`, relancés après travaux.
11. **Ce prompt est le premier enregistrement de la branche**, avec le message exact :
    `docs(prompt): prompts/v0.9/EVOL_carte-ibmiapi-et-poc-wpf_v1.md`

---

## Livrables

- `.pipeline/spec.md`, `.pipeline/changes.md`, `.pipeline/test-results.md`, `.pipeline/review.md`.
- `.pipeline/STATUS.md` en **dernier geste** : `READY — <incrément> — <horodatage ISO> — feat/carte-ibmiapi-et-poc-wpf — tests <X/Y>`.
- Dans `changes.md` : les deux comptes de cadratins avec leur règle, les deux comptes d'ancres `.btn-primary`, les deux relevés de numéros de ligne du critère 2, et la sortie de `git diff -U0 -- index.html`.

---

## Ce que ce prompt NE fait PAS

- **`scripts/gate.sh`, `scripts/check-i18n.mjs`, `scripts/i18n-allowlist.txt`** : lus et lancés, jamais modifiés. **Aucune entrée n'est ajoutée à la liste blanche**, et aucun contrôle n'est créé ni touché.
- **`CLAUDE.md`** : non ouvert en écriture. Ni le §2 qui annonce encore « Méthode v2.27 », ni le §3 qui annonce `891` lignes pour `index.html` là où le fichier en porte `1170`, ni le §6 et ses `105 entrées`, ni le §9 qui écrit encore que le contraste du thème sombre n'a pas été mesuré, ni le §8. **Aucune dette n'est inscrite, aucune n'est soldée.**
- **`tasks/ROADMAP.md`, `tasks/lessons.md`** : non modifiés. Aucune leçon n'est écrite, ni au dépôt ni au registre global.
- **`tasks/JOURNAL_v0.2.md`** : écrit par `/land`, jamais par ce prompt.
- **`.claude/`** : jamais ouvert en écriture. La règle `Edit(/.claude/**)` ferme l'outil d'édition et la redirection shell, et le pont de Cowork répond « Writing to .claude is not permitted via remote tools ».
- **E-3 en entier reste pour plus tard** : ni carte TWAIM, ni carte MetalWatch, ni ligne « Cette page aussi », ni mécanisme `data-i18n-href`, ni contrôle bloquant neuf, ni garde de non-vacuité, ni témoin. La règle du badge reste intacte.
- **Aucun badge « harnais IA TWAIM »** sur aucune carte.
- **Aucun bouton GitHub** sur la carte IBMiAPI.
- **Aucune passe de cadratins** sur le reste du fichier. Les `152` occurrences existantes ne sont pas touchées.
- **Aucune passe d'accessibilité**, dette D-20. Aucune couleur d'ancre n'est changée, et la feuille de style n'est pas ouverte.
- **La ligne `e5_desc` n'est pas touchée**, dette D-17 famille B, arbitrage ouvert.
- **Aucune renumérotation de clé**, aucun réalignement des commentaires de la frise, dette D-15.
- **Aucun appel à Playwright**, ni à aucun outil sous règle `ask`. Aucune capture d'écran, aucune preuve de rendu, aucun jugement d'aspect.
- **Aucun `git merge`, aucun `git push`, aucun `git tag`, aucun `/land` de ta part.** Tu t'arrêtes à `READY`. Ces trois gestes appartiennent au chef de projet et figurent dans la dernière section, qui ne s'adresse pas à toi.

---

## Ce qui reste au chef de projet, dans l'ordre

1. **Déposer ce fichier** dans `prompts/v0.9/`. **Ne pas l'enregistrer à la main** : `/ship` en fait le premier commit de la branche, et c'est la règle du premier enregistrement.
2. **Lancer** `/ship prompts/v0.9/EVOL_carte-ibmiapi-et-poc-wpf_v1.md`.
3. **Valider à l'œil, dans les deux langues**, la carte et le pavé. Le filet ne voit ni la mise en page, ni le rendu sur téléphone, ni une traduction fausse. C'est la dette **D-1**, et c'est écrit au `CLAUDE.md` §2.
4. **Fusionner** : `git merge --no-ff feat/carte-ibmiapi-et-poc-wpf` sur `main`. Le `/land` refuse tant que la branche n'est pas déjà fusionnée, et il affiche la commande à taper.
5. **Lancer** `/land feat/carte-ibmiapi-et-poc-wpf`.
6. **Pousser** : `git push origin main`, puis supprimer la branche fusionnée.

---

*Prompt rédigé par Cowork le 13 septembre 2026 · empreintes et comptes relevés le même jour · dépôt qui fait foi : `lianazel.github.io/prompts/v0.9/`.*
