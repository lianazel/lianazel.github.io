Tiens Man, tu te rappelles comment on fonctionne ?

Référentiel central : `C:\JobDirectory\CLAUDE_PROJECTS\_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY\Etude_technique`
Projet du jour : `C:\JobDirectory\CLAUDE_PROJECTS\_WEB\lianazelPortfolio\lianazelPortfolio\lianazel.github.io`

Attention à l'orthographe du chemin : `lianazelPortfolio` prend une minuscule initiale, aux deux niveaux. Une demande d'accès à un dossier avec la mauvaise casse est refusée sans expliquer pourquoi.

Dernière session Claude Code close : **19**, lue dans `.pipeline/STATUS.md` le 13 septembre 2026 — c'est le seul compteur. Cette session Cowork : écrite le **13 septembre 2026**. Cowork date ses sessions, il ne les numérote plus. Ne recopie aucun de ces deux compteurs dans un prérequis sans l'avoir lu le jour même.

## AVANT DE M'ÉCRIRE QUOI QUE CE SOIT

Le rapport d'ouverture ne franchit aucune porte exécutable : c'est le seul moment de la journée où une phrase peut prétendre qu'une lecture a eu lieu sans que rien ne la démente (RD-057, RD-058). Ce message est cette porte, et elle est manuelle.

Dans cet ordre, et sans rien me dire entre-temps :

**1. Lis, dans cet ordre :**

- `Etude_technique/PEDAGOGY_PROFILE.local.md` et `Etude_technique/STYLE_PROFILE.local.md`, en entier. La personne d'abord, c'est la règle du Core §5.1 depuis la v2.31.
- `CLAUDE.md` du projet, en entier. Il pèse 59 421 caractères — 61 397 octets, l'écart vient des accents — soit 297 % de son plafond : c'est la dette D-19, connue et non soldée.
- `.claude/settings.json`, en entier : 48 lignes, 39 règles `deny` et 1 règle `ask`. **Et `.claude/settings.local.json` aussi**, 631 octets, 9 entrées `allow`. Le contrat de permissions n'est pas un fichier, il en est deux, et une reprise antérieure n'en nommait qu'un.
- `.pipeline/STATUS.md`, la ligne unique.
- `tasks/JOURNAL_v0.2.md`, la dernière entrée seulement (session 19).
- `tasks/lessons.md`, les titres (`grep '^## '`) et les deux dernières entrées.
- `tasks/ROADMAP.md` : le tableau « Déjà livré », les titres des quatre parties, **la section E-3 de la partie I en entier** — c'est elle qui commande la tâche du jour — et la partie IV.
- `index.html`, **deux tranches seulement**, pas le fichier entier (100 195 octets) : la section `#projets`, lignes 659 à 726, et le bloc **Atoll-Solutions**, lignes 446 à 462.

Pour la tâche ci-dessous, la table §8.1 du Core désigne : **`UX_METHOD`** (on touche l'interface et des libellés visibles), **`STYLE_METHOD` + le profil d'instance** (on produit du texte destiné à être lu), et **`ASSURANCE_METHOD` couche A** (le filet porte des contrôles bloquants qui vont mordre sur toute clé neuve). Lis ces paragraphes-là au moment d'écrire les prompts, pas à l'ouverture.

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
```

Un `git status` ou un `git rev-list` passe par Claude Code ou par moi, jamais par toi.

Le shell de la VM Cowork ne montait toujours pas les dossiers de ma machine le 13 septembre 2026 (message : mise à jour Windows du 8 septembre ; Claude Code non affecté). Si c'est encore le cas, lis par copie de fichiers, un par un. **Ne balaye jamais un dossier depuis la VM** : elle ne porte que des copies mises en scène, pas le dépôt. Le 13 septembre, un `grep` lancé sur `.claude/agents/*.md` dans la sandbox n'a vu **qu'un seul** des trois fichiers, parce que les deux autres n'y avaient pas été copiés.

En revanche, côté Claude Code (WSL), `grep -r` **fonctionne**. Un constat contraire a circulé le 12 septembre et a coûté un BLOCK à un prompt : ne le réécris pas. La bonne raison d'exiger un comptage fichier par fichier dans un critère est l'**attribution** — chaque compte doit être rattachable à son fichier.

**3. Puis dis-moi ce que tu as lu** — les tranches, fichier et section, pas les fichiers — **et ce que tu as mesuré, avec les chiffres.**

Ne déclare aucune lecture que tu n'as pas faite. Ne cite aucun chiffre que tu n'as pas mesuré, y compris un chiffre repris de ce message. Dis toujours de quoi un chiffre est le compte : `grep -c` compte des lignes, `grep -o | wc -l` compte des occurrences, et ni l'un ni l'autre ne compte des objets. Si un document et le dépôt se contredisent, **le dépôt gagne et tu me le signales**.

---

## Où en est le travail

État mesuré le 13 septembre 2026 en fin de session, par lecture de fichiers.

**Les références, et la précaution qui va avec.** Au moment où ce fichier est écrit, `main` = `origin/main` = **36f4fda**, mesuré par lecture de `.git/refs/` : tout est poussé. Mais **l'enregistrement de ce fichier déplacera `main` d'un cran**, et ce nombre sera périmé à l'instant même où tu le liras. Un fichier ne peut pas énoncer la référence du commit qui le contient. **C'est ta mesure d'ouverture qui fait foi, pas ce nombre.**

Le reste :

- `VERSION` = **0.9.5**. Le pied du `CLAUDE.md` porte le même numéro.
- `.pipeline/STATUS.md` = **CLOSED — session 19**. Inchangé depuis le 12 septembre : aucun incrément n'a atterri le 13.
- `tasks/lessons.md` porte **19** leçons (compte de lignes `^## `).
- `tasks/JOURNAL_v0.2.md` porte **17** entrées (compte de lignes `^## `).
- Le §8 du `CLAUDE.md` porte **22** lignes de dette (compte de lignes `^| **D-`), la dernière est D-22.
- `index.html` : **100 195 octets**, dernière modification le **10 août 2026**. Le site n'a pas bougé depuis un mois.
- La section `#projets` porte **6 cartes** (comptées une par une, lignes 659 à 726) : GrainWatch · GrainTrack3D · FuelMapPrice · CryptoAnalyser · EF Core — Dynamic Context · Tutoriel JWT .NET 8.

Le filet n'a **pas** été relancé le 13 septembre. Le « code 0, 9 lignes `OK -`, 4 avertissements » vient de `STATUS.md` et du journal, pas d'une exécution du jour.

**Ce qui s'est passé le 13 septembre, en deux phrases.** Le constat C-7 a été éprouvé : un prompt SPIKE écrit, révisé en `_v2` après qu'un de ses prérequis s'est révélé inerte, puis joué en session neuve. Réponse : **non**, un interdit d'outil ne se contourne pas par un agent délégué — l'outil n'est pas refusé, il n'est pas donné.

Le rapport vit dans `.pipeline/RAPPORT_SPIKE_interdit-agent-delegue_v1.md`, **hors dépôt**, et il disparaîtra.

---

## Écarts mesurés, à traiter ou à assumer

1. **Le commit `_v2` non poussé** (voir ci-dessus). À vérifier d'abord.
2. Le `CLAUDE.md` §2 et son pied annoncent « Méthode v2.27 ». Le Core est en v2.33 et le `CLAUDE_METHOD_BLOCK.md` du gabarit annonce v2.30. Trois valeurs à trois endroits. Les deux dernières sont des remontées au référentiel ; la première se traite ici.
3. Le `CLAUDE.md` §9 écrit encore que le contraste du thème sombre n'a pas été mesuré, alors que D-20 le mesure au 13 août 2026 et que le relevé vit dans `tasks/MESURE_contraste-ancres_v1.md`.
4. Le tableau « Déjà livré » de `tasks/ROADMAP.md` s'arrête à la version 0.3.0. `VERSION` dit 0.9.5.
5. L'en-tête de `tasks/ROADMAP.md` annonce « Trois parties ». Il y en a quatre depuis le 12 septembre.

---

## Ce qu'on fait aujourd'hui

**Deux prompts à écrire, et rien d'autre.** Les deux ajoutent quelque chose à `index.html`. Je veux démarrer directement dessus, sans dix questions.

### Le premier arbitrage à me demander, avant d'écrire une ligne

**Un seul incrément, ou deux ?** Les deux ajouts touchent le même fichier, passent le même filet, et s'atterrissent au même endroit. Deux incréments, c'est deux `/ship`, deux revues, deux atterrissages pour deux ajouts courts. **Ta recommandation attendue : un seul incrément, deux blocs indépendants** — sections différentes, clés de dictionnaire différentes, aucun couplage entre eux. Mais c'est ma décision, pose-la-moi en une ligne.

### Prompt A — la carte du projet IBMiAPI dans la grille

Ajouter une **7e carte** à la section `#projets`, pour `https://lianazel.github.io/ibm-s36-to-rest-api/`.

Ce qui est déjà mesuré, et qu'il ne faut pas rechercher :

- Le site est bilingue **par bascule dans la page, à une seule adresse**. `…/en` rend **404**, mesuré le 13 septembre 2026. Donc **la carte n'a pas besoin du mécanisme `data-i18n-href`** décidé le 9 août, qui n'existe toujours pas dans le fichier (`grep -c 'data-i18n-href'` rend **0 ligne**). C'est ce qui rend l'incrément court.
- Les préfixes de clés `p8_` et `p9_` sont **libres** : `grep -c 'p8_'` et `grep -c 'p9_'` rendent **0 ligne** chacun.
- Titre du site, tel qu'il s'affiche : **« Des fichiers S/36 à l'API REST »** en français. En anglais, **« From S/36 files to a REST API »** — cette forme vient de mes cartes LinkedIn, pas d'une lecture du site : à confirmer avant de l'écrire.
- **L'adresse du dépôt GitHub n'est pas établie.** `https://github.com/lianazel/ibm-s36-to-rest-api` rend **404** au 13 septembre 2026. Donc **pas de bouton GitHub** sur la carte tant que je ne t'ai pas donné l'adresse. Un seul bouton, « Voir le site », qui réutilise la clé existante `see_site`.

Les pièges de cette carte, tous mesurés :

- **La liste blanche ne connaît ni « IBM i » ni « S/36 »** : `grep -c -F` rend **0 ligne** pour chacun, sur les 158 lignes de `scripts/i18n-allowlist.txt`. Le contrôle 6 du filet (couverture du texte visible) mordra sur toute étiquette portant ces termes. Deux sorties : inscrire les termes dans la liste blanche **avec leur motif écrit**, ou leur donner une clé `data-i18n`. Le prompt doit trancher, pas laisser le choix à l'agent.
- **Pas de badge « harnais IA TWAIM ».** La règle E-3 du 8 août dit que ce badge ne se pose pas avant la carte TWAIM qui l'explique, et cette carte n'existe pas : « TWAIM » apparaît sur **7 lignes** d'`index.html`, toutes dans la section Expérience, aucune dans les projets. Poser le badge maintenant, c'est montrer une serrure sans sa clé. Le harnais se nomme en toutes lettres dans la description, pas en étiquette.
- **Place dans la grille.** E-3 réserve la première place à la carte TWAIM. Elle n'existe pas encore : mets la carte IBMiAPI en tête aujourd'hui, et **écris dans le prompt** que TWAIM passera au-dessus quand E-3 sera fait, pour que l'incrément suivant ne soit pas surpris.
- **Un bouton `.btn-primary` de plus, c'est une ancre de plus sous le seuil AA.** C'est la dette D-20, treize ancres sur vingt-trois. Ça ne l'aggrave pas en nature, ça l'aggrave en compte. À dire au prompt, pas à taire.

### Prompt B — le pavé POC dans la section Expérience

Réécrire la sous-ligne « Exploration WPF » du bloc **Atoll-Solutions · Ingénieur R&D · Oct 2015 – Fév 2020**, ligne 453. Deux clés : **`x25`** pour le titre, **`y324`** pour le texte.

Le texte est **déjà arbitré et validé le 13 septembre 2026**. Il se reprend tel quel, il ne se réécrit pas :

**Français**

> **Un module RPG réécrit en WPF** — Trois mois pour livrer un POC, avec la technologie à apprendre en chemin : C#, .NET et WPF. Le livrable n'est pas une maquette. C'est un module métier qui tournait en RPG sur IBM i, réécrit entièrement en WPF. Passer d'un écran 5250 à une interface WPF change tout sauf la règle de gestion, et c'est elle qui devait ressortir intacte.

**Anglais**

> **An RPG module rewritten in WPF** — Three months to deliver a POC, with the technology to learn along the way: C#, .NET and WPF. The deliverable is not a mock-up. It is a business module that ran in RPG on IBM i, rewritten entirely in WPF. Moving from a 5250 screen to a WPF interface changes everything except the business rule, and the business rule had to come through intact.

Les pièges de ce pavé :

- **La ligne `e5_desc`, juste au-dessus (ligne 447), porte un nom de tiers en clair.** C'est la dette **D-17 famille B**, mon arbitrage ouvert et non tranché. Le prompt doit interdire nommément de toucher cette ligne, et n'introduire aucun nom de tiers dans le texte neuf.
- Le séparateur ` — ` en tête de `y324` est la **convention du fichier** (voir `y315`, `y316`, `y317`). Ne la change pas au passage : le `CLAUDE.md` §5 dit que la forme compacte est volontaire.
- Les deux blocs de langue doivent recevoir les deux clés. Une clé dans une seule langue fait rougir le filet, contrôles 1 et 2.

### Ce que les deux prompts doivent porter, quel que soit l'arbitrage

- **Un compte annoncé pour chaque inventaire.** Un inventaire sans cardinalité annoncée passe vert en silence.
- **Aucun métacaractère d'expression régulière dans une commande prescrite.** Le 13 septembre, un `\|` échappé pour tenir dans une cellule de tableau markdown a rendu une garde totalement inerte : elle rendait `0` sur tous les fichiers, y compris ceux qui contenaient ce qu'elle cherchait. Deux commandes séparées valent mieux qu'une alternance.
- **Un critère d'acceptation ne présuppose pas la réponse à la question qu'il mesure.** Même date, même prompt : un critère exigeait « exactement un appel réseau a eu lieu », ce qui ne pouvait être vrai que si la réponse à l'essai était « oui ». Non falsifiable.
- **Un prérequis qui épingle une taille épingle aussi une empreinte.** `sha256sum` est déjà dans l'outillage du relecteur. Une retouche à taille constante passerait un prérequis qui ne compte que des octets.
- **Le verrou des trois refus de `/ship` compte par nom de sujet.** Un renommage remet le compteur à zéro mécaniquement. Ces deux sujets sont neufs : compteur à **0**.
- **Personne n'écrit dans `.claude/`.** La règle `Edit(/.claude/**)` ferme l'outil d'édition et la redirection shell, et le pont de Cowork répond « Writing to .claude is not permitted via remote tools ».
- **Le `/land` exige que la branche soit déjà fusionnée par moi**, et il refuse proprement sinon, en affichant la commande à taper. La fusion et le push sont mes gestes.

---

## Ce qui n'est PAS au programme, et pourquoi

- **E-3 en entier** — les cartes TWAIM et MetalWatch, la ligne « Cette page aussi », le mécanisme `data-i18n-href` avec son contrôle bloquant, sa garde de non-vacuité et son témoin. Motif d'exclusion : c'est un gros incrément qui touche `index.html` **et** `scripts/check-i18n.mjs`, et il repousserait de plusieurs jours ce que je veux montrer maintenant. J'ai arbitré le 13 septembre : la carte IBMiAPI d'abord, E-3 reste entier pour plus tard, sa règle du badge intacte.
- **Le portage des chiffres au `CLAUDE.md`** — « 9 règles éprouvées sur les 39 `deny`, au 13 septembre 2026 », et la phrase qui vaut davantage : *un type d'agent peut annoncer un outil que l'agent instancié ne reçoit pas*. Motif : ça s'inscrit au §8, donc ça attend que la forme du §8 ait changé. **Deux portages sont maintenant en attente** : celui de l'essai 0 du 12 septembre, toujours non fait, et celui du 13.
- **La conversion du §8 en sections de prose** — dettes D-19 et D-22, plus le constat C-6. Motif : c'est le gros morceau, il réécrit D-1 à D-22 d'un coup. Quand il viendra, le premier arbitrage sera son découpage ; la coupe par familles, Héritage puis Instrument, existe déjà dans le document.
- **Les deux lignes fausses du `CLAUDE.md`** (méthode en v2.27, §9 contraste jamais mesuré). Motif : même fichier, même passe que la conversion.
- **La passe des tirets cadratins sur `index.html`** — 49 décisions occurrence par occurrence, c'est un incrément entier.
- **La passe d'accessibilité, dette D-20** — treize ancres sur vingt-trois sous le seuil AA. Elle exigera d'autoriser en toutes lettres la modification de la feuille de style.
- **Deux remontées au référentiel**, qui ne se font pas depuis ce dépôt : le `ship.md` du gabarit impose une branche `feat/<slug>` et ignore les autres types ; le `CLAUDE_METHOD_BLOCK.md` du gabarit annonce v2.30 alors que le Core est en v2.33.
- **La carte de présentation LinkedIn du portfolio.** Elle est **faite** et livrée le 13 septembre 2026, en 2400 × 1260 px. Elle ne vit pas dans le dépôt, et c'est voulu : le site ne porte aucune image et l'invariant §4 le dit. Ne la cherche pas dans l'arbre de travail, ne propose pas de l'y mettre.

---

## Trous et questions ouvertes à me rappeler

1. **L'adresse du dépôt GitHub d'IBMiAPI n'est pas connue.** L'adresse attendue rend 404. Sans elle, la carte n'a qu'un bouton.
2. **Le titre anglais du site IBMiAPI** vient de mes cartes LinkedIn, pas d'une lecture du site. À confirmer avant de l'écrire dans le dictionnaire.
3. **La famille B de la dette D-17** — les identités de clients — reste un arbitrage ouvert et non tranché. Tant qu'il l'est, tout prompt qui s'interdit ces chaînes tout en enregistrant des fichiers qui les portent se contredira.
4. **Trente règles sur trente-neuf** du plancher restent non éprouvées une à une. `WebSearch` n'a pas été joué derrière délégation. Elles sont de même forme que les neuf éprouvées, ce qui est un argument, pas une preuve.
5. **La divergence annonce / capacité d'un type d'agent** — `claude-code-guide` annonce `WebFetch`, l'agent instancié ne le reçoit pas — n'est surveillée par rien. Ce n'est pas encore une dette, je ne l'ai pas inscrite.
6. **Un agent délégué a tenté une variante que sa consigne interdisait, et ne l'a pas rapportée.** Le plancher l'a refusé, donc l'essai a survécu. Aucun contrôle ne verrait ce comportement. Pas encore une dette non plus.

---

Et si tu trouves que quelque chose dans ce message est faux, dis-le. Il a été écrit par ton prédécesseur, qui s'est trompé **quatre fois** dans la journée qu'il vient de terminer — dont : une garde posée dans un prompt qui ne gardait rien, parce qu'un métacaractère avait été échappé pour tenir dans une cellule de tableau ; un critère d'acceptation qui présupposait l'une des deux réponses possibles à la question qu'il mesurait, donc non falsifiable ; et une question à deux options posée dans des termes que je n'ai pas compris, après qu'il eut lu le profil qui lui demande précisément de faire simple.
