Tiens Man, tu te rappelles comment on fonctionne ?

Référentiel central : C:\JobDirectory\CLAUDE_PROJECTS\_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY\Etude_technique
Projet du jour : C:\JobDirectory\CLAUDE_PROJECTS\_WEB\lianazelPortfolio\lianazelPortfolio\lianazel.github.io

Attention à l'orthographe du chemin : lianazelPortfolio prend une minuscule initiale, aux deux niveaux. Une demande d'accès à un dossier avec la mauvaise casse est refusée sans expliquer pourquoi.

Dernière session Claude Code close : 19, lue dans .pipeline/STATUS.md le jour même — c'est le seul compteur. Cette session Cowork : écrite le 12 septembre 2026. Cowork date ses sessions, il ne les numérote plus. Ne recopie aucun de ces deux compteurs dans un prérequis sans l'avoir lu le jour même.

AVANT DE M'ÉCRIRE QUOI QUE CE SOIT

Le rapport d'ouverture ne franchit aucune porte exécutable : c'est le seul moment de la journée où une phrase peut prétendre qu'une lecture a eu lieu sans que rien ne la démente (RD-057, RD-058). Ce message est cette porte, et elle est manuelle.

Dans cet ordre, et sans rien me dire entre-temps :

1. Lis, dans cet ordre :

Etude_technique/PEDAGOGY_PROFILE.local.md et Etude_technique/STYLE_PROFILE.local.md, en entier. La personne d'abord, c'est la règle du Core §5.1 depuis la v2.31.
CLAUDE.md du projet, en entier. Il pèse 59 421 caractères — 61 397 octets, l'écart vient des accents — soit 297 % de son plafond : c'est la dette D-19, connue et non soldée.
.claude/settings.json, en entier : 48 lignes, 39 règles deny et 1 règle ask. C'est le contrat du jour, et les deux règles WebFetch et WebSearch en sont le sujet.
.pipeline/STATUS.md, la ligne unique.
tasks/JOURNAL_v0.2.md, la dernière entrée seulement (session 19).
tasks/lessons.md, les titres (grep '^## ') et les deux dernières entrées.
tasks/ROADMAP.md, le tableau « Déjà livré », les titres des quatre parties, et la partie IV en entier — elle est neuve.
Pour la tâche ci-dessous, la table §8.1 du Core désigne : ASSURANCE_METHOD couche A, et dedans la précision du 4 septembre 2026 sur l'essai 0 — c'est la forme imposée de la preuve pour une règle qui s'exécute hors du code. Et SECURITY_METHOD §3.5, moindre privilège. Lis ces paragraphes-là au moment d'écrire le prompt, pas à l'ouverture.

2. Mesure l'état du dépôt par lecture de fichiers, jamais par une commande git.

Une commande git lancée depuis la VM Cowork laisse un .git/index.lock insupprimable sur la machine du chef de projet. Les mesures se font ainsi :

cat .git/HEAD
cat .git/refs/heads/main
cat .git/refs/remotes/origin/main
tail -3 .git/logs/HEAD
cat VERSION
head -1 .pipeline/STATUS.md
grep -c '^## ' tasks/lessons.md
grep -c '^| \*\*D-' CLAUDE.md

Un git status ou un git rev-list passe par Claude Code ou par le chef de projet, jamais par toi.

Le shell de la VM Cowork ne montait plus les dossiers de la machine le 12 septembre 2026 (message : mise à jour Windows du 8 septembre ; Claude Code non affecté). Si c'est encore le cas, lis par copie de fichiers, un par un. Ne balaye jamais un dossier depuis la VM : elle ne porte que des copies mises en scène, pas le dépôt.

En revanche, côté Claude Code (WSL), grep -r FONCTIONNE. Un constat contraire a circulé le 12 septembre et a coûté un BLOCK à un prompt : ne le réécris pas. La bonne raison d'exiger un comptage fichier par fichier dans un critère est l'attribution — chaque compte doit être rattachable à son fichier.

3. Puis dis-moi ce que tu as lu — les tranches, fichier et section, pas les fichiers — et ce que tu as mesuré, avec les chiffres.

Ne déclare aucune lecture que tu n'as pas faite. Ne cite aucun chiffre que tu n'as pas mesuré, y compris un chiffre repris de ce message. Dis toujours de quoi un chiffre est le compte : grep -c compte des lignes, grep -o | wc -l compte des occurrences, et ni l'un ni l'autre ne compte des objets. Si un document et le dépôt se contredisent, le dépôt gagne et tu me le signales.

Où en est le travail

État mesuré le 12 septembre 2026 en fin de session, par lecture de fichiers, après le push :

main = origin/main = 9067403. Tout est poussé. refs/heads/ ne porte que main : la branche chore/harnais-au-depot a été fusionnée (bab845f, --no-ff) puis supprimée.
VERSION = 0.9.5. Le pied du CLAUDE.md porte le même numéro.
.pipeline/STATUS.md = CLOSED — session 19.
tasks/lessons.md porte 19 leçons (compte de lignes ^## ), la dernière datée du 12 septembre.
tasks/JOURNAL_v0.2.md porte 17 entrées (compte de lignes ^## ), la dernière est la session 19.
Le §8 du CLAUDE.md porte 22 lignes de dette (compte de lignes ^| **D-), la dernière est D-22.
tasks/ROADMAP.md a une partie IV neuve : C-6, C-7, C-8.

Le filet est vert — code 0, 9 lignes OK - pour un seuil de 8, 4 avertissements attendus de la dette D-4. Ce chiffre vient de STATUS.md et du journal, il n'a pas été relancé au moment d'écrire ce message.

Ce qui a été fait aujourd'hui, en deux phrases. Le harnais est entré au dépôt : les deux commandes du cycle, le relecteur de prompts et l'archive du prompt d'essai réellement joué, cinq chemins enregistrés inchangés à l'octet et à l'empreinte. Le chantier ouvert de la session 18 est refermé — le nouveau /land ne fusionne plus, et il l'a prouvé en refusant son propre atterrissage avant la fusion, sans effet de bord.

Deux résultats de la journée qui servent la suite. Le relecteur de prompts a rendu son premier BLOCK suivi d'un SHIP sur révision : son cas positif est éprouvé. Et une preuve plus étroite que l'affirmation qu'elle sert reste la maladie D-7, y compris dans un renforcement de preuve — l'agent d'exécution a élargi de lui-même un balayage, à raison, avec deux comptes faux dont un estimé et non lancé, relevé en revue.

Ce qui est sur le disque et n'est pas enregistré. Fichier par fichier :

prompts/v0.9/CHORE_descente-harnais_v1.md — 8 608 o — sujet abandonné, à retirer à la main
prompts/v0.9/CHORE_descente-harnais_v2.md — 12 508 o — idem, et il porte une chaîne de la dette D-17
prompts/v0.9/CHORE_descente-harnais_v3.md — 13 159 o — idem
prompts/v0.9/CHORE_harnais-au-depot_v1.md — 15 680 o — la révision bloquée, n'entre pas au dépôt
tasks/REPRISE.md — le présent fichier, à enregistrer avec la clôture de session (docs: reprise 2026-09-12)

L'état d'index de ces fichiers n'a pas été mesuré : il demande un git status, donc Claude Code ou le chef de projet. Les tailles, elles, sont mesurées.

Trois écarts mesurés, à traiter ou à assumer :

Le CLAUDE.md §2 et son pied annoncent « Méthode v2.27 ». Le Core est en v2.33 et le CLAUDE_METHOD_BLOCK.md du gabarit annonce v2.30. Trois valeurs à trois endroits. Les deux dernières sont des remontées au référentiel, elles ne se traitent pas depuis ce dépôt ; la première, oui.
Le CLAUDE.md §9 écrit encore que le contraste du thème sombre n'a pas été mesuré, alors que D-20 le mesure au 13 août 2026 et que le relevé vit dans tasks/MESURE_contraste-ancres_v1.md. Le cadrage se contredit à deux sections d'écart.
Le tableau « Déjà livré » de tasks/ROADMAP.md s'arrête à la version 0.3.0. VERSION dit 0.9.5. Le tableau est périmé de six versions mineures.

Ce qu'on fait aujourd'hui

Une seule tâche : éprouver le constat C-7 — **un interdit d'outil suit-il un agent délégué ?** C'est un SPIKE, il se joue en session neuve, et il produit un rapport.

La question, en clair. Le plancher pose WebFetch et WebSearch en interdits. Ces deux outils ont bien disparu de la liste d'outils de l'agent principal. Mais un type d'agent déclaré dans la session les annonce encore. Si un agent délégué peut appeler ce que l'agent principal n'a plus le droit d'appeler, l'interdiction réseau a une porte de service — et c'est la sorte de trou qu'on ne découvre pas en relisant un fichier.

Pourquoi c'est le sujet, et pas la conversion du §8. Un trou de sécurité non éprouvé passe avant une dette de forme. Celui-ci est petit, borné, et l'essai 0 du 12 septembre a explicitement refusé de le jouer parce que son prompt lui interdisait toute variante : la question est restée ouverte par construction, pas par oubli.

Ce qui lui manque, et c'est le premier arbitrage à me demander avant d'écrire une ligne.

Jusqu'où l'essai va-t-il ? Deux sorties, et elles ne mesurent pas la même chose.

S'arrêter à l'annonce : constater que le type d'agent déclare encore WebFetch dans sa liste d'outils, et écrire ce constat. Peu coûteux, sans effet de bord, mais **ça ne prouve rien** : une annonce n'est pas une capacité.
Aller jusqu'à l'appel réel : demander à l'agent délégué de faire **un seul** appel réseau, littéral, vers une adresse inoffensive, et observer ce qui arrive — refus, question, ou réponse. C'est ma recommandation, et c'est la doctrine de la maison : la leçon du 12 août dit qu'un signal d'arrêt n'est pas un arrêt, et que seule une requête réelle mesure un service. Mais cela sort du périmètre lecture seule, et ça t'appartient.

Le point de méthode qui décide de la qualité de la tâche. Une règle de permission ne mord qu'à la relance : l'essai se joue en **session neuve**, jamais dans celle qui l'écrit. Et il se joue en **commandes littérales** — un agent qui reformule rend l'essai inobservable. C'est la forme imposée par ASSURANCE couche A, précision du 4 septembre 2026, et elle a déjà servi une fois ici.

Les pièges déjà connus, et ils ont été payés :

Si une commande est refusée, **c'est le résultat attendu**. Aucune variante, aucune décomposition pour la faire passer : contourner un refus dans l'essai même qui mesure les refus détruit la mesure. L'agent d'exécution s'est arrêté proprement le 12 septembre sur ce principe, et c'était le geste juste.
Le rapport de l'essai vit dans .pipeline/, qui est exclu du dépôt et disparaîtra. Son chiffre utile doit être porté au dépôt par un incrément ultérieur, et le prompt doit le dire. C'est exactement ce qui est arrivé au « 9 sur 39 » de l'essai 0, toujours nulle part dans le dépôt.
Une annonce n'est pas une capacité, et un compte d'outils annoncés n'est pas un compte d'outils appelables. Dis de quoi chaque chiffre est le compte.
Le prompt doit borner ce que l'agent délégué a le droit de faire, et pas seulement ce qu'on lui demande. Un agent délégué qui improvise autour de la consigne rend l'essai inutilisable.
Ne recopie aucune chaîne de la ligne D-17 dans un prompt. Le dépôt est public et prompts/ est servi. Renvoie à la ligne du CLAUDE.md, ne la cite pas. Et déclare combien de chaînes il faut chercher : un inventaire sans cardinalité annoncée passe vert en silence.
Un prérequis qui épingle une taille doit aussi épingler une empreinte. sha256sum est déjà dans l'outillage du relecteur. Une retouche à taille constante passerait un prérequis qui ne compte que des octets.
Une porte posée dans un prompt doit couvrir ce que son critère affirme. Un balayage de dix motifs pour un critère qui parle de trente-neuf règles, c'est la maladie D-7 réintroduite dans l'instrument.
Le verrou des trois refus de /ship compte par nom de sujet. Un renommage remet le compteur à zéro mécaniquement. Si tu changes de nom de sujet, le périmètre doit avoir réellement changé, et le prompt doit annoncer son compteur au lieu de le taire.
Personne n'écrit dans .claude/. La règle Edit(/.claude/**) ferme l'outil d'édition et la redirection shell ; le pont de Cowork répond « Writing to .claude is not permitted via remote tools ». Le chef de projet y copie à la main, l'agent vérifie et enregistre.
Ne fais pas balayer .pipeline/ par un critère anti-publication : ce dossier est exclu du dépôt par son propre .gitignore.
Le /land exige que la branche soit déjà fusionnée par le chef de projet, et il refuse proprement sinon, en affichant la commande à taper. La fusion et le push sont ses gestes.

Ce qui n'est PAS au programme, et pourquoi

La conversion du §8 en sections de prose — dettes D-19 et D-22, plus le constat C-6. Motif d'exclusion : c'est le gros morceau, il réécrit D-1 à D-22 d'un coup, et il passe après un trou de sécurité. Quand il viendra, le premier arbitrage sera son découpage — la coupe par familles, Héritage puis Instrument, existe déjà dans le document et personne n'a à l'inventer ; la faire d'un bloc, c'est la forme qui a produit la boucle de cinq révisions du 13 août.
La correction du §11, constat C-6. Motif : même fichier, même passe. À traiter avec D-19 et D-22, jamais seul — une passe de plus sur ce fichier pour une ligne coûte plus qu'elle ne rapporte.
Le chiffre « 9 règles éprouvées sur 39, au 12 septembre 2026 ». Motif : il s'inscrit au CLAUDE.md, donc il attend que la forme du §8 ait changé. Et l'essai du jour va le déplacer : autant l'inscrire une fois.
Les deux lignes fausses du CLAUDE.md — la méthode annoncée en v2.27 et le §9 qui dit le contraste jamais mesuré. Motif : même fichier, même passe que la conversion.
La passe des tirets cadratins sur index.html. 49 décisions occurrence par occurrence, c'est un incrément entier.
La passe d'accessibilité, dette D-20. Treize ancres sur vingt-trois sous le seuil AA. Elle exigera d'autoriser en toutes lettres la modification de la feuille de style.
Deux remontées au référentiel, qui ne se font pas depuis ce dépôt : le ship.md du gabarit impose une branche feat/<slug> et ignore les autres types ; le CLAUDE_METHOD_BLOCK.md du gabarit annonce v2.30 alors que le Core est en v2.33.
Le nettoyage des quatre prompts non suivis. C'est un geste à la main du chef de projet, pas un incrément.

Trous et questions ouvertes à me rappeler

La preuve que Edit(/.claude/**) ferme aussi la redirection shell est d'un cran plus forte que la mesure qui la fonde : le rapport d'essai dit que le refus du chemin shell ne nomme aucune règle et peut venir de la couche de session. Le refus est constaté, son auteur ne l'est pas.
Trente règles sur trente-neuf restent non éprouvées une à une. Elles sont de même forme que les neuf éprouvées, ce qui est un argument, pas une preuve.
.claude/commands/ et .claude/agents/ sont devenus des chemins à relire après tout pull, maintenant qu'ils sont suivis. C'est le constat C-8, et ce n'était écrit nulle part avant aujourd'hui.
La famille B de la dette D-17 — les identités de clients — reste un arbitrage ouvert et non tranché. Tant qu'il l'est, tout prompt qui s'interdit ces chaînes tout en enregistrant des fichiers qui les portent se contredira. C'est une décision qui manque, pas un défaut de rédaction, et elle mérite son propre incrément.

Et si tu trouves que quelque chose dans ce message est faux, dis-le. Il a été écrit par ton prédécesseur, qui s'est trompé six fois dans la journée qu'il vient de terminer — dont : une affirmation fausse sur le fonctionnement de grep -r, reprise d'un tiers sans être mesurée, écrite dans un prompt et refusée par le relecteur ; une porte posée dans ce même prompt plus étroite que le critère qu'elle servait, soit exactement la maladie D-7 qu'il croyait éviter ; et une phrase déclarant un rapport « non vérifiable par relecture » alors qu'il était sur le disque et que le relecteur l'a lu.
