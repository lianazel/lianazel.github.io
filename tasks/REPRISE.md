Tiens Man, tu te rappelles comment on fonctionne ?

Référentiel central : `C:\JobDirectory\CLAUDE_PROJECTS\_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY\Etude_technique`
Projet du jour : `C:\JobDirectory\CLAUDE_PROJECTS\_WEB\lianazelPortfolio\lianazelPortfolio\lianazel.github.io`

Attention à l'orthographe du chemin : `lianazelPortfolio` prend une minuscule initiale, aux deux niveaux. Une demande d'accès à un dossier avec la mauvaise casse est refusée sans expliquer pourquoi.

Dernière session Claude Code close : **20**, lue dans `.pipeline/STATUS.md` le 13 septembre 2026 en fin de journée. C'est le seul compteur. Cette session Cowork : écrite le **13 septembre 2026**. Cowork date ses sessions, il ne les numérote plus. Ne recopie aucun de ces deux compteurs dans un prérequis sans l'avoir lu le jour même.

## AVANT DE M'ÉCRIRE QUOI QUE CE SOIT

Le rapport d'ouverture ne franchit aucune porte exécutable : c'est le seul moment de la journée où une phrase peut prétendre qu'une lecture a eu lieu sans que rien ne la démente (RD-057, RD-058). Ce message est cette porte, et elle est manuelle.

Dans cet ordre, et sans rien me dire entre-temps :

**1. Lis, dans cet ordre :**

- `Etude_technique/PEDAGOGY_PROFILE.local.md` et `Etude_technique/STYLE_PROFILE.local.md`, en entier. La personne d'abord, c'est la règle du Core §5.1 depuis la v2.31.
- `CLAUDE.md` du projet, en entier. Il pèse **61 398 octets**. L'écart entre octets et caractères vient des accents : mesure les deux si tu cites une taille. C'est la dette **D-19**, connue et non soldée.
- `.claude/settings.json`, en entier, **et `.claude/settings.local.json` aussi**. Le contrat de permissions n'est pas un fichier, il en est deux, et une reprise antérieure n'en nommait qu'un.
- `.pipeline/STATUS.md`, la ligne unique.
- `tasks/JOURNAL_v0.2.md`, la dernière entrée seulement (session 20).
- `tasks/lessons.md`, les titres (`grep '^## '`) et les deux dernières entrées.
- `tasks/ROADMAP.md` : le tableau « Déjà livré », les titres des quatre parties, **la section E-3 de la partie I en entier**, c'est elle qui commande la tâche du jour, et la **partie IV en entier**, qui porte quatre constats.
- `index.html` : **pas le fichier entier** (102 486 octets). La section `#projets`, repérée par `grep -n`, jamais par un numéro de ligne recopié d'ici.
- `scripts/check-i18n.mjs`, **son en-tête seulement** : il fait autorité sur ce que le filet ne voit pas, et il dit noir sur blanc qu'il ne voit pas le contenu porté par un attribut.

Pour la tâche ci-dessous, la table §8.1 du Core désigne : **`UX_METHOD`** (on touche l'interface), **`ASSURANCE_METHOD` couche A** (on crée un contrôle bloquant, une garde et un témoin), et **`STYLE_METHOD` + le profil d'instance** si un libellé bouge. Lis ces paragraphes-là au moment d'écrire le prompt, pas à l'ouverture.

**2. Mesure l'état du dépôt par lecture de fichiers, jamais par une commande git.**

Une commande git lancée depuis la VM Cowork laisse un `.git/index.lock` insupprimable sur ma machine. Les mesures se font ainsi :

```
cat .git/HEAD
cat .git/refs/heads/main
cat .git/refs/remotes/origin/main
tail -4 .git/logs/HEAD
cat VERSION
head -1 .pipeline/STATUS.md
grep -c '^## ' tasks/lessons.md
grep -c '^| \*\*D-' CLAUDE.md
grep -c '^## C-' tasks/ROADMAP.md
```

Le shell de la VM Cowork ne montait toujours pas les dossiers de ma machine le 13 septembre 2026 (message : mise à jour Windows du 8 septembre ; Claude Code non affecté). Si c'est encore le cas, lis par copie de fichiers, un par un. **Ne balaye jamais un dossier depuis la VM** : elle ne porte que des copies mises en scène, pas le dépôt. Le 13 septembre, deux fichiers de `scripts/` n'y étaient pas et une empreinte a failli être calculée sur du vide.

En revanche, côté Claude Code (WSL), `grep -r` **fonctionne**. Ne réécris pas le contraire. La bonne raison d'exiger un comptage fichier par fichier dans un critère est l'**attribution** : chaque compte doit être rattachable à son fichier.

**3. Puis dis-moi ce que tu as lu**, les tranches, fichier et section, jamais les fichiers seuls, **et ce que tu as mesuré, avec les chiffres.**

Ne déclare aucune lecture que tu n'as pas faite. Ne cite aucun chiffre que tu n'as pas mesuré, y compris un chiffre repris de ce message. Dis toujours de quoi un chiffre est le compte : `grep -c` compte des lignes, `grep -o | wc -l` compte des occurrences, et ni l'un ni l'autre ne compte des objets. Si un document et le dépôt se contredisent, **le dépôt gagne et tu me le signales**.

---

## Où en est le travail

État mesuré le 13 septembre 2026 à 16:36, par lecture de fichiers.

**Les références, et la dérogation qui va avec.** À cette heure, `main` = **80bea121** et `origin/main` = **62eb7c6**. **Un commit n'était pas encore poussé** : `docs: lecon du 13 septembre promue au registre global (ajout seul)`. Le push m'appartient et je le ferai, avec l'enregistrement de ce fichier, qui déplacera `main` d'un cran de plus. **C'est ta mesure d'ouverture qui fait foi, pas ces deux nombres.**

Le reste :

- `VERSION` = **0.10.0**. Le pied du `CLAUDE.md` porte le même numéro. Montée mineure, `0.9.5` vers `0.10.0`, parce que la branche était en `feat/`.
- `.pipeline/STATUS.md` = **CLOSED — session 20**.
- `tasks/lessons.md` porte **20** leçons (compte de lignes `^## `). La vingtième est du 13 septembre et a été promue au registre global par un commit à part.
- `tasks/JOURNAL_v0.2.md` porte **18** entrées (compte de lignes `^## `).
- Le §8 du `CLAUDE.md` porte toujours **22** lignes de dette (compte de lignes `^| **D-`). Aucune soldée.
- `tasks/ROADMAP.md` porte **9** constats (compte de lignes `^## C-`). Le neuvième est né aujourd'hui.
- `index.html` : **102 486 octets**, **1 181 lignes**, **152** cadratins écrits (occurrences, fichier entier). Le compte de cadratins n'a pas bougé de la journée.
- La section `#projets` porte **7 cartes** (compte de lignes `class="proj-card`).
- `scripts/i18n-allowlist.txt` : **105 entrées** (lignes non vides et non commentées), inchangé, empreinte inchangée.
- Aucune branche ouverte : `.git/refs/heads/` ne porte que `main`.

**Ce qui a été livré aujourd'hui, en deux phrases.** La carte du projet IBMiAPI est entrée en tête de la grille de projets, et la sous-ligne « Exploration WPF » de la frise Atoll-Solutions a été réécrite en un pavé qui dit ce qu'était réellement le POC. Un seul incrément, deux blocs indépendants, un seul fichier de code touché, `AUTO MODE ON` autorisé et tenu.

**La validation visuelle a eu lieu après la publication, et elle est partielle.** Le tunnel d'aperçu était impossible sur un réseau filtrant l'UDP, la page a donc été publiée sans être regardée, décision assumée. Cowork l'a ensuite mesurée **sur la page servie**, ce qui est la référence selon le §10 du cadrage. À **1280 px**, moteur Chromium :

| Rangée | Français | Anglais |
|---|---|---|
| 1 (IBMiAPI et GrainWatch) | 347 px | 362 px |
| 2 | 328 px | 328 px |
| 3 | 351 px | 328 px |
| 4 | 286 px | 286 px |

La carte neuve **n'écrase pas la première rangée** : en français elle n'est même pas la plus haute de la page. Le risque annoncé dans le prompt ne s'est pas réalisé.

**Ce qui n'a toujours pas été regardé** : le rendu sur téléphone, le rendu sur Safari, et toute largeur autre que 1280 px. C'est la dette **D-1**, et elle est entière.

---

## Écarts mesurés, à traiter ou à assumer

1. **Le commit de promotion de leçon n'était pas poussé** au moment où ce fichier a été écrit. À vérifier en premier.
2. **Le bouton de la carte IBMiAPI n'emmène pas la langue.** Défaut visible en production, relevé par moi le 13 septembre. C'est la tâche du jour, tout est dit plus bas.
3. Le `CLAUDE.md` §2 et son pied annoncent « Méthode v2.27 ». Le Core est en **v2.33**.
4. Le `CLAUDE.md` §9 écrit encore que le contraste du thème sombre n'a pas été mesuré, alors que **D-20** le mesure au 13 août 2026 et que le relevé vit dans `tasks/MESURE_contraste-ancres_v1.md`.
5. Le `CLAUDE.md` §3 annonce **891 lignes** pour `index.html`, qui en porte **1 181**. L'écart grandit à chaque incrément et aucun registre ne le porte : **D-18** couvre les clés, pas les lignes. Relevé en revue sous `RV-5`.
6. Le tableau « Déjà livré » de `tasks/ROADMAP.md` s'arrête à la version 0.3.0. `VERSION` dit 0.10.0.
7. L'en-tête de `tasks/ROADMAP.md` annonce « Trois parties ». Il y en a quatre.

---

## Ce qu'on fait aujourd'hui

**Deux choses, dans cet ordre. La seconde ne commence que si la première a atterri.**

# 1. Le lien de la carte IBMiAPI doit emmener la langue

**Le défaut, constaté en production le 13 septembre.** Quand le portfolio est en anglais et qu'on clique sur « Voir le site » de la carte IBMiAPI, le site appelé s'ouvre en français.

**Ce qui est déjà mesuré, et qu'il ne faut pas rechercher.** Tout ceci a été lu dans le code du site appelé, `js/i18n.js`, le 13 septembre 2026 :

- Le site choisit sa langue ainsi : `resolveInitialLang = langue de l'adresse, sinon préférence mémorisée, sinon langue du navigateur`. Ordre arbitré par moi le **15 août 2026**.
- La langue de l'adresse se porte par **`?lang=`**, et la lecture est **stricte** : la valeur doit valoir exactement `fr` ou `en`. `EN` et `fr-FR` sont refusés.
- **Vérifié en ouvrant la page** : `https://lianazel.github.io/ibm-s36-to-rest-api/?lang=en` s'ouvre bien en anglais.
- **`…/en` rend 404.** Le site est bilingue par bascule à une seule adresse. Il n'a pas de chemin par langue.

**La cause, et elle est simple.** Le bouton pointe sur l'adresse nue. Le site ne reçoit rien à détecter, donc il devine. Le site ne détecte pas la langue d'appel : **il la reçoit, ou il devine.**

**Ce que le remède exige.** L'adresse du bouton doit **changer avec la langue**. C'est exactement le mécanisme `data-i18n-href`, décidé le 9 août 2026 et écrit en contrat dans **E-3**. Mesuré le 13 septembre : `grep -c 'data-i18n-href' index.html` rend **0 ligne**. Le mécanisme n'existe pas.

**Un point de conception déjà tranché, à ne pas rouvrir : les deux langues portent le paramètre.** Le français prend `?lang=fr`, pas l'adresse nue. Motif mesuré : le site ne réécrit sa préférence mémorisée **que** si l'adresse porte un `lang` valide. Une adresse nue côté français laisserait un visiteur venu une fois en anglais coincé en anglais.

**Le premier arbitrage à me demander, avant d'écrire une ligne.** Le contrat E-3 du 9 août exige, avec l'attribut, **un contrôle bloquant, sa garde de non-vacuité, son témoin, et une garde d'une ligne qui refuse une valeur qui n'est pas `http` ou `https`**. Deux sorties :

- **(a)** Tout d'un coup : l'attribut et sa porte, comme le contrat le dit.
- **(b)** L'attribut maintenant, la porte dans un incrément suivant.

**Ta recommandation attendue : (a).** Motif : un mécanisme livré sans sa porte est exactement la « lampe torche » que `ASSURANCE_METHOD` couche A refuse, et le filet ne voit pas les attributs, l'en-tête de `check-i18n.mjs` le dit lui-même. Mais c'est ma décision, pose-la-moi en une ligne.

**Les pièges de cet incrément :**

- **Le filet ne voit pas les adresses.** C'est écrit dans l'en-tête de `check-i18n.mjs` et il fait autorité. Le contrôle neuf est donc la seule chose qui verra ce mécanisme, et il doit prouver sa morsure sur un témoin défectueux, comme les huit autres.
- **Un témoin est lu en entier, commentaires compris.** Ne pas écrire dans un commentaire de témoin le jeton que le contrôle cherche : mesuré trois fois le 10 août 2026.
- **Le compte des chemins bloquants va bouger.** Le §6 du `CLAUDE.md` déclare **24 chemins pour 24 assertions**, et le bloc 8/9 de `gate.sh` compte les chemins dans la source et les compare à ses propres constantes. Ajouter un contrôle fait diverger ce compte, et **la porte rougira** tant que les constantes ne suivent pas. C'est voulu. Le prompt doit le dire, sinon l'agent croira avoir cassé quelque chose.
- **Le §6 du `CLAUDE.md` devra suivre.** C'est le seul endroit où ce prompt aura le droit d'ouvrir le cadrage, et il faut l'autoriser en toutes lettres, sinon l'agent s'arrêtera.
- **La carte TWAIM aura besoin du même mécanisme** pour `twaim-web.vercel.app/` et `/en`. Ne la fais pas, mais écris dans le prompt que le mécanisme est posé pour elle aussi, pour que l'incrément suivant ne le redécouvre pas.

# 2. Rendre lisible ma carte de présentation LinkedIn

**Seulement après que le lien a atterri.** Elle ne bloque rien et n'ouvre aucun incrément du dépôt.

**Lis d'abord `claude/MESURE_contraste-carte-linkedin_v1.md`** dans le projet Claude. Tout y est : la mesure des six zones, sa règle de comptage, sa date, ses limites, et la piste de remède. **Ne la refais pas**, elle a été prise le 13 septembre.

Ce qu'il faut en retenir sans rouvrir le fichier :

- La carte fait **2400 × 1260 px** et **ne vit pas dans le dépôt**. Le site ne porte aucune image, invariant §4 du cadrage. Ne propose jamais de l'y mettre.
- **Le fond n'est pas la cause.** Il vaut `#0f0e17` et le blanc du titre est à 19,16 contre lui. Éclaircir le fond abaisserait le titre, seule chose qui se lit au premier coup d'œil.
- Ce qui échoue, ce sont **trois zones grises et petites** : les libellés `CORE STACK` et `WORKING KNOWLEDGE`, les légendes sous les chiffres, et `Quality before speed`. Leur encre moyenne tombe entre **2,71** et **3,01** pour un seuil AA de **4,5**.
- Piste chiffrée : `#b1b1bb` sur ce fond donne **9,01** au cœur, donc environ **4,8** à l'encre moyenne.

**L'arbitrage à me demander, le moment venu.** Je n'ai pas donné le fichier source et Cowork ne l'a pas. Soit **(a)** tu me donnes les valeurs exactes zone par zone et je les applique moi-même, soit **(b)** tu refabriques la carte entière. **Recommandation attendue : (a)**, parce que le rendu me convient partout ailleurs.

Et quelle que soit la sortie : une valeur par zone jamais une consigne générale, chaque valeur avec son ratio au cœur **et** à l'encre moyenne, et la taille traitée comme la couleur. Les légendes font 3 à 5 px de haut à la taille où LinkedIn affiche la carte.

---

## Ce qui n'est PAS au programme, et pourquoi

- **E-3 moins son mécanisme** : ni carte TWAIM, ni carte MetalWatch, ni ligne « Cette page aussi ». Motif : la tâche du jour prend **le seul mécanisme `data-i18n-href`**, parce qu'un défaut visible en production l'exige. Les trois cartes et la ligne restent pour plus tard, et la règle du badge reste intacte. **Point à ne pas perdre** : la carte TWAIM prendra la première place de la grille, au-dessus de la carte IBMiAPI posée aujourd'hui.
- **La conversion du §8 en sections de prose** : dettes **D-19** et **D-22**, plus les constats **C-6** et **C-9**. Motif : c'est le gros morceau, il réécrit D-1 à D-22 d'un coup. Quand il viendra, le premier arbitrage sera son découpage ; la coupe par familles, Héritage puis Instrument, existe déjà dans le document.
- **Les trois lignes fausses du `CLAUDE.md`** (méthode en v2.27, §9 contraste jamais mesuré, §3 891 lignes). Motif : même fichier, même passe que la conversion. **Exception unique** : le §6 et son compte de chemins bloquants, que la tâche du jour devra mettre à jour.
- **Le portage des chiffres du plancher au `CLAUDE.md`.** Trois portages en attente : l'essai 0 du 12 septembre, l'essai de l'agent délégué du 13, et l'observation du 13 en fin de journée. Motif : ça s'inscrit au §8, donc ça attend que la forme du §8 ait changé.
- **La passe des tirets cadratins sur `index.html`** : 152 décisions occurrence par occurrence, c'est un incrément entier.
- **La passe d'accessibilité, dette D-20** : **quatorze ancres sur vingt-quatre** sous le seuil AA depuis aujourd'hui, soit six en `var(--c1)` et huit `.btn-primary`. Elle exigera d'autoriser en toutes lettres la modification de la feuille de style.
- **Le contrôle de concordance annoncé par D-14.** Motif : il naîtrait rouge. Voir le trou n° 5.
- **Deux remontées au référentiel**, qui ne se font pas depuis ce dépôt : le `ship.md` du gabarit, et le `CLAUDE_METHOD_BLOCK.md` du gabarit qui annonce v2.30 alors que le Core est en v2.33.

---

## Trous et questions ouvertes à me rappeler

1. **L'adresse du dépôt GitHub d'IBMiAPI n'est pas connue.** `https://github.com/lianazel/ibm-s36-to-rest-api` rendait **404** le 13 septembre 2026. La carte n'a donc qu'un bouton. Le jour où je te donne l'adresse, le bouton GitHub s'ajoute en une ligne.
2. **La famille B de la dette D-17**, les identités de clients, reste un arbitrage ouvert et non tranché. J'ai dit le 13 septembre que c'était logique de les garder, un portfolio étant un CV, mais **je ne l'ai pas tranché en toutes lettres**. Tant qu'il est ouvert, chaque prompt doit s'écrire autour. La famille A, les noms d'objets et de programmes, est tranchée depuis le 11 août : retrait.
3. **Trente règles sur trente-neuf** du plancher restent non éprouvées une à une. Une dixième a peut-être mordu le 13 septembre en travail réel : l'agent rapporte que sa tentative `curl` a été refusée par le plancher. **Ce n'est pas une mesure faite par moi ni par Cowork**, c'est son rapport, et il faut le vérifier dans son transcript avant de le compter.
4. **La divergence annonce / capacité d'un type d'agent** (`claude-code-guide` annonce `WebFetch`, l'agent instancié ne le reçoit pas) n'est surveillée par rien. Pas encore une dette.
5. **`RV-6`, la trouvaille de la revue du 13 septembre.** Sur les poses `data-i18n` d'`index.html`, **huit** divergent entre le corps et le dictionnaire, par des guillemets d'attributs imbriqués, à DOM identique. L'incrément du jour n'en introduit aucune. Mais le contrôle de concordance que **D-14** annonce « écrit contre un fichier déjà propre » **naîtrait rouge sur ces huit**. Trois sorties proposées par la revue, aucune engagée : normaliser, aligner d'abord, ou comparer le DOM. La deuxième touche la ligne `e5_desc`, donc elle est couplée au trou n° 2. ⚠️ **Le total est en désaccord** : la revue annonce **202 poses**, Cowork a mesuré **203 occurrences** de `data-i18n="` le même jour. Écart de un, cause non établie. Remesure avant de citer l'un des deux.
6. **`RV-3` est fermée.** La cible du bouton de la carte IBMiAPI a été ouverte par Cowork le 13 septembre : l'adresse répond, dans les deux langues, et elle est identique à celle écrite dans le fichier. Ne la rouvre pas comme si elle était en suspens. Ce qui reste, c'est la langue qu'elle n'emmène pas, et c'est la tâche du jour.

---

Et si tu trouves que quelque chose dans ce message est faux, dis-le. Il a été écrit par ton prédécesseur, qui s'est trompé **dix fois** dans la journée qu'il vient de terminer, dont huit relevées par le relecteur de prompts, une par le chef de projet, et une découverte après la publication. Trois d'entre elles, nommées :

- Le prompt du jour affirmait que la carte n'avait pas besoin du mécanisme de lien bilingue. **C'était faux**, et le défaut est parti en production. L'erreur de méthode est nommable : la mesure faite était « `…/en` rend 404 », et la conclusion tirée était « une seule adresse suffit ». Personne n'avait regardé **comment** le site choisissait sa langue. Une mesure vraie ne rend pas vraie la conclusion qu'on lui fait porter.
- Un prérequis attendait `0` d'un `grep -c` sans dire que le code de sortie attendu est alors `1`. La chaîne de mesure du relecteur s'est arrêtée dessus.
- Un critère interdisait « toute couleur nouvelle » dans la phrase même qui prescrivait un dégradé neuf sur la carte. Le prompt se contredisait tout seul, à deux paragraphes d'écart.
