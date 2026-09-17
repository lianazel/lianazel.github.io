# Prompt de reprise — portfolio `lianazel.github.io`

> **Mode d'emploi.** Ce fichier se colle **tel quel**, en premier message, au Cowork suivant. Il est
> la porte manuelle de l'ouverture de session. Ne pas le résumer, ne pas le raccourcir.
>
> **Mesuré le 17 septembre 2026 à 10:04 (Paris)**, par lecture de fichiers. Aucune commande git.
>
> ⚠️ **DÉROGATION, et elle est en tête parce qu'elle change tout.** Ce prompt est normalement écrit
> **après le push**. Il ne l'est pas. Une branche est ouverte, rien n'est fusionné, rien n'est publié,
> et l'incrément en cours n'est pas clos. Le bloc « situation » dit exactement où il s'est arrêté.

---

Tiens Man, tu te rappelles comment on fonctionne ?

**Référentiel central** : `C:\JobDirectory\CLAUDE_PROJECTS\_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY\Etude_technique`
**Projet du jour** : `C:\JobDirectory\CLAUDE_PROJECTS\_WEB\lianazelPortfolio\lianazelPortfolio\lianazel.github.io`

**Attention à l'orthographe du chemin** : `lianazelPortfolio` prend une **minuscule initiale, aux deux
niveaux**. Mesuré le 16 septembre 2026 par listage des dossiers parents. Une demande d'accès à un
dossier avec la mauvaise casse est refusée sans expliquer pourquoi.

**Deux compteurs de session, et ils ne se confondent pas.** Claude Code numérote : la dernière session
close est la **22**, lue dans `.pipeline/STATUS.md`. **C'est le seul compteur.** Cowork date ses
sessions et ne les numérote plus. **Ne recopie aucun de ces deux compteurs dans un prérequis sans
l'avoir lu le jour même.**

---

## AVANT DE M'ÉCRIRE QUOI QUE CE SOIT

Le rapport d'ouverture ne franchit aucune porte exécutable : c'est le seul moment de la journée où une
phrase peut prétendre qu'une lecture a eu lieu sans que rien ne la démente (RD-057, RD-058). Ce
message est cette porte, et elle est manuelle.

### 1. Lis, dans cet ordre

- `Etude_technique/PEDAGOGY_PROFILE.local.md` et `Etude_technique/STYLE_PROFILE.local.md`, **en
  entier**. La personne d'abord, règle du Core §5.1 depuis la v2.31. **Et applique-la vraiment** :
  le 16 septembre, le chef de projet a dû demander deux fois des questions plus simples, et une
  réponse trop dense lui a fait abandonner un arbitrage la semaine d'avant.
- `CLAUDE.md` du projet, **en entier**. Il pèse **62 580 octets** pour **60 568 caractères**, mesuré
  le 16 septembre 2026. L'écart vient des accents, et les deux se mesurent si tu cites une taille.
  C'est la dette **D-19**, connue, non soldée, et **aggravée** : elle annonce 46 494 caractères
  mesurés le 12 août pour un plafond de 20 000. On est à **303 %** du plafond.
- `.claude/settings.json` **et** `.claude/settings.local.json`, en entier. Le contrat de permissions
  n'est pas un fichier, il en est deux. Retiens-en trois choses : `rm -r`, `rm -rf` et `rm -fr` sont
  refusés, donc un prompt qui fait créer un dossier temporaire coince l'agent ; `WebFetch` et
  `WebSearch` sont refusés, donc aucun fait tiré d'une page en ligne n'est rejouable depuis ce poste ;
  et `Bash(git status *)` est **autorisé** dans le fichier local.
- `.pipeline/STATUS.md`, la ligne unique. Elle est longue : lis-la en entier. **Attention** : elle
  porte encore la session 22, et l'incrément en cours ne l'a pas réécrite. Voir la situation.
- `.pipeline/review.md`, **en entier**. 32 461 octets, c'est le document du jour : la revue du
  rejugement, verdict `NEEDS WORK`, réserves `RV-11` à `RV-19`. Son §14 porte les trois options et
  son §16 les trois gestes qui restent.
- `.pipeline/changes.md` et `.pipeline/test-results.md`, les deux **en entier**. Ce sont eux que la
  revue contredit.
- `tasks/lessons.md`, les titres (`grep '^## '`) et les **trois dernières entrées**.
- `tasks/ROADMAP.md` : le tableau « Déjà livré », les titres des quatre parties, et la partie IV en
  entier.
- `prompts/v0.11/CHORE_temoin-mode-permission_v1.md`, **en entier**. C'est le prompt en cours
  d'exécution.

Pour la tâche du jour, lis la table **§8.1** du Core **au moment d'écrire**, pas à l'ouverture. Et
vérifie que les lignes que tu écartes ne sont pas déclenchées par le contenu : **une ligne écartée
dont le motif contient une exception est une ligne cochée.** Le 16 septembre, un prompt a été refusé
parce que sa ligne « écrit hors du dépôt » était portée écartée pendant que deux de ses commandes
écrivaient dans `/tmp`.

### 2. Mesure l'état du dépôt par lecture de fichiers, jamais par une commande git

Une commande git lancée depuis la VM Cowork laisse un `.git/index.lock` insupprimable sur sa machine.
**Côté Claude Code sous WSL, cet interdit est levé** : mesuré le 15 septembre 2026, `git status`
lancé, code 0, aucun lock, et la règle est en `allow`.

```
cat .git/HEAD
cat .git/refs/heads/main
cat .git/refs/heads/chore/temoin-mode-permission
cat .git/refs/remotes/origin/main
cat .git/packed-refs
tail -3 .git/logs/HEAD
cat VERSION
head -1 .pipeline/STATUS.md
wc -l .pipeline/prompt-reviews.log
wc -l .pipeline/hook-mode.log
cat .pipeline/hook-mode-last.json
ls -1 scripts/ | wc -l
ls -1 prompts/v0.11/ | wc -l
wc -c .claude/settings.json
grep -c 'hooks' .claude/settings.json
grep -c '^## ' tasks/lessons.md
grep -c '^| \*\*D-' CLAUDE.md
grep -c '^## C-' tasks/ROADMAP.md
```

> ⚠️ **Un nom de branche avec une barre oblique est un sous-dossier.** La référence de la branche
> ouverte vit dans `.git/refs/heads/chore/temoin-mode-permission`, pas dans `refs/heads/`.

**Le shell de la VM Cowork ne montait pas les dossiers de sa machine le 16 septembre 2026** (message :
« no Plan9 drive shares mounted », mise à jour Windows du 8 septembre). Si c'est encore le cas, lis par
copie de fichiers, un par un. **Ne balaye jamais un dossier depuis la VM** : elle ne porte que des
copies mises en scène. Côté Claude Code sous WSL, `grep -r` fonctionne.

### 3. Puis dis-lui ce que tu as lu et ce que tu as mesuré

Les tranches, **fichier et section**, jamais les fichiers seuls. Les chiffres, avec leur unité :
`grep -c` compte des **lignes**, `grep -o | wc -l` compte des **occurrences**, et ni l'un ni l'autre ne
compte des **objets**. Ne déclare aucune lecture que tu n'as pas faite. Ne cite aucun chiffre que tu
n'as pas mesuré, **y compris un chiffre repris de ce message**.

**Si un document et le dépôt se contredisent, le dépôt gagne et tu le signales.**

---

## Où en est le travail

**État mesuré le 17 septembre 2026 à 10:04, par lecture de fichiers.**

| Objet | Valeur mesurée |
|---|---|
| `.git/HEAD` | `ref: refs/heads/chore/temoin-mode-permission` |
| `.git/refs/heads/main` | `d6399c751bf022096014fb0596ffab8148d36935` |
| `.git/refs/remotes/origin/main` | **la même** |
| `.git/refs/heads/chore/temoin-mode-permission` | `87d21954515b9a1d31d4d7c8a243807a996a9b07` |
| `.git/packed-refs` | aucune référence, une seule ligne d'en-tête |
| Dernier commit | `docs(prompt): prompts/v0.11/CHORE_temoin-mode-permission_v1.md` |
| `VERSION` | `0.11.1`, **inchangée** |
| `.pipeline/STATUS.md` | `CLOSED — session 22`, **inchangée** |
| `scripts/` | **6 objets**, dont deux nouveaux non suivis |
| `prompts/v0.11/` | **11 fichiers** |
| `.claude/settings.json` | **1 111 octets**, **aucune clé `hooks`** |
| `.pipeline/prompt-reviews.log` | **14 lignes** |
| `.pipeline/hook-mode.log` | **231 lignes**, dernière à `19:20:04Z`, `mode=champ-absent` |
| `.pipeline/hook-mode-last.json` | `{"permission_mode":null}` |
| `tasks/lessons.md` | **24** (lignes `^## `) |
| `tasks/JOURNAL_v0.2.md` | **20** (lignes `^## `) |
| `CLAUDE.md` §8 | **22** (lignes `^\| **D-`) |
| `tasks/ROADMAP.md` | **9** (lignes `^## C-`) |

**Traduit en français : l'incrément est à mi-chemin, sur une branche, et rien n'est publié.** La
branche `chore/temoin-mode-permission` porte **un seul commit**, le prompt. Les deux scripts livrés
sont écrits sur le disque mais **non suivis par git**. `main` n'a pas bougé depuis la clôture de la
session 22. `STATUS.md` n'a jamais été réécrit : l'ÉTAPE 5 de `/ship` n'a pas eu lieu.

**Le document d'état complet est `.pipeline/review.md`. Il n'est pas la source de vérité** : il
annonce les deux scripts à 6 501 et 4 818 octets alors que le disque porte **11 470** et **9 079**, et
qu'aucun des deux n'a bougé depuis la veille de la revue. Le dépôt gagne.

### Ce que la journée du 16 septembre a produit

**Un sujet abandonné et un sujet en cours.** Le sujet `CHORE_garde-auto-mode` visait une **porte qui
bloque** : elle lisait des fichiers, cherchait un marqueur, refusait en code 2 et effaçait le prompt
tapé. Deux refus du relecteur, quatre révisions déposées, aucune exécution. Abandonné au profit d'un
**instrument qui ne bloque rien**.

Le sujet en cours, `CHORE_temoin-mode-permission`, pose un hook `UserPromptSubmit` qui **lit le mode de
permission et l'écrit**. Il sort toujours en 0. Verdict de relecture `SHIP`, puis exécution, puis revue
`NEEDS WORK`, puis correctif, puis rejugement `NEEDS WORK`.

**Ce qui est acquis et prouvé par le rejugement**, et il ne faut pas le refaire : la lecture de
l'entrée standard tient les cinq régimes d'écriture, **10/10 et 6/6** là où la première revue mesurait
**0/10 et 1/6**, plus 6/6 sur 8 Mo. Les cinq états ont cinq mots distincts. La garde de non-vacuité
rougit seule, prouvée par mutation, huit fois.

### Écarts mesurés, à traiter ou à assumer

1. **Les traces du dépôt sont polluées par des tests.** `hook-mode.log` porte **231 lignes**, aucune
   d'un hook réel, et `hook-mode-last.json` porte `{"permission_mode":null}`. Deux artéfacts,
   `changes.md:200` et `test-results.md:104`, écrivent « les deux sont vides ». C'est le `RV-11`, et
   c'est ce qui bloque l'atterrissage.
2. **La capture laissée est un faux positif indiscernable d'un vrai.** C'est la maladie de la première
   revue, retournée : elle avait bloqué sur un faux négatif.
3. **Vider ne suffit pas.** Le relecteur l'a prouvé en repolluant le journal après avoir écrit sa
   revue. Sa dernière ligne est horodatée **après** l'écriture de `review.md`.
4. **Le cas `null`** : le champ à `null` rend `champ-absent`, et trois écrits disent le contraire.
   C'est le `RV-12`.
5. **La mutation derrière « les chemins 1, 2, 6 et 8 » n'est pas nommée**, et la relecture du critère 6
   n'est reproductible que sous une lecture sur quatre. C'est le `RV-13`.
6. **`CLAUDE.md` porte trois lignes fausses**, non traitées : « Méthode v2.27 » au §2 et au pied alors
   que le Core est en **v2.33** (lu dans son en-tête, daté du 10 septembre) ; le §9 écrit que le
   contraste du thème sombre n'a pas été mesuré alors que **D-20** le mesure au 13 août ; le §3
   annonce **891 lignes** pour un `index.html` qui en porte **1 191**, mesuré le 16 septembre.
7. **`tasks/ROADMAP.md`** : l'en-tête annonce « Trois parties » pour quatre, le tableau « Déjà livré »
   s'arrête à `0.3.0` alors que `VERSION` porte `0.11.1`, et `C-9` est écrit après le bloc de
   signature.
8. **Neuf fichiers non suivis dorment dans `prompts/v0.11/`**, mesuré par `git status --short` le
   17 septembre 2026 : le `_v2` refusé du badge, les quatre révisions du sujet abandonné et ses
   quatre essais 0. Le prompt en cours, lui, **est suivi** depuis le commit `87d2195`. Leur sort
   appartient au chef de projet et **n'est pas tranché**. ⚠️ **Un `git add prompts/v0.11/` les
   emporterait tous sans que rien ne le signale** : tout enregistrement nomme ses fichiers un par un.

---

## Ce qu'on fait aujourd'hui

**Une seule chose : finir l'incrément `CHORE_temoin-mode-permission`.** Il est à trois gestes de
l'atterrissage, et aucun n'est du code sérieux.

**Ce qui lui manque**, dans l'ordre du §16 de `.pipeline/review.md` :

1. **`RV-11`** — l'option **B** du §14, recommandée par le relecteur et retenue par le chef de projet :
   le témoin fait tourner sa cible depuis un **répertoire de travail neuf**, et y assert l'existence et
   le contenu des deux fichiers écrits. Une quinzaine de lignes. **Ça ferme quatre réserves d'un
   coup** et le `.pipeline/` du dépôt n'est plus jamais touché par un test.
2. **`RV-12`** — trancher le cas `null` : une ligne de code ou trois lignes d'artéfact, et corriger le
   commentaire périmé dans les deux cas.
3. **`RV-13`** — nommer la mutation exacte derrière « les chemins 1, 2, 6 et 8 », et dire ce que donne
   la lecture littérale du prompt.

**Le point de méthode qui décide de sa qualité.** L'option A, vider les traces et s'arrêter, **ne
marche pas**, et ce n'est pas une opinion : le relecteur l'a falsifiée en repolluant le journal
lui-même. Un état remis à zéro qui se repérime au prochain lancement n'est pas une hygiène, c'est un
délai. L'option B déplace l'écriture hors du dépôt, donc le problème ne peut plus revenir.

**Les pièges déjà connus qui concernent cette tâche :**

- **Le ménage par joker.** Le témoin nettoie par `rm scripts/_tmp-*` et la copie neutralisée porte le
  même préfixe. Relevé en warn au `/ship`, à ne pas réintroduire.
- **Les artéfacts qui affirment.** Deux refus sur trois de la journée viennent d'un document qui dit
  ce que le disque dément. Toute phrase du type « les deux sont vides » se vérifie au moment où on
  l'écrit, et **le vidage se fait en dernier**, après la dernière exécution de qui que ce soit.
- **Le témoin qui n'éprouve qu'un seul régime.** `RV-1` est né de cinq chemins alimentés par
  `printf | node`, c'est-à-dire le seul régime qui ne tombe jamais. Un témoin se construit contre la
  **chaîne de résolution**, pas contre le cas facile.
- **Une section adressée au chef de projet n'a rien à faire dans un prompt.** Règle du destinataire
  unique, Core §4.1 v2.21. Deux refus consécutifs du sujet abandonné venaient de là.

**Le premier arbitrage à lui demander, avant d'écrire une ligne** : les limites du témoin (`RV-14`,
`RV-17`) vivent aujourd'hui dans `.pipeline/`, qui est ignoré par git. Elles ne survivront pas à
l'atterrissage. Montent-elles dans l'**en-tête du témoin**, ou deviennent-elles une ligne **`D-n`** au
§8 du cadrage ? **Recommandation attendue : l'en-tête du témoin**, parce que le §8 est déjà ce que
`D-19` et `D-22` dénoncent, et qu'une limite lue au moment d'ouvrir le fichier vaut mieux qu'une
limite rangée dans un registre.

**Et la séquence qui appartient au chef de projet, une fois le rejugement obtenu.** Elle ne va pas dans
le prompt, elle se donne dans la conversation :

1. `git merge --no-ff chore/temoin-mode-permission -m "Merge branch 'chore/temoin-mode-permission'"`,
   **dans son terminal WSL**. Le plancher refuse `git merge` à l'agent, et `/land` refuse si la
   branche n'est pas déjà fusionnée.
2. `/land chore/temoin-mode-permission`, dans Claude Code.
3. `git push origin main`, puis `git branch -d chore/temoin-mode-permission`, dans son terminal.
4. Coller le bloc `hooks` dans `.claude/settings.json` du dépôt, **à la main**, au même niveau que
   `permissions`, en n'oubliant pas la virgule après l'accolade qui ferme `permissions`. Vérifier par
   `node -e "JSON.parse(require('fs').readFileSync('.claude/settings.json','utf8'))"` puis
   `grep -c 'UserPromptSubmit' .claude/settings.json`, attendu **1**.
5. Taper n'importe quel prompt, puis lire `.pipeline/hook-mode.log` et
   `.pipeline/hook-mode-last.json`. **C'est la mesure que personne n'a jamais faite** : le champ
   `permission_mode` arrive-t-il sur `UserPromptSubmit`, et ce que le script imprime atteint-il
   l'agent ?

---

## Ce qui n'est PAS au programme, et pourquoi

- **Le sujet `CHORE_garde-auto-mode`.** Abandonné le 16 septembre, deux refus inscrits. Motif : il
  posait une porte qui bloque, dont le prix était un prompt effacé et un interrupteur d'arrêt qui
  devenait lui-même un péage. **Ne pas le rouvrir** : le sujet en cours en est le remplacement assumé,
  avec un périmètre réellement autre.
- **Le sort des dix prompts non suivis de `prompts/v0.11/`.** Motif : c'est un arbitrage du chef de
  projet, non tranché, et le même que pour `prompts/v0.10/`.
- **Les trois lignes fausses du `CLAUDE.md`** (v2.27, §9 contraste, §3 891 lignes). Motif : même
  fichier, même passe que la conversion du §8.
- **La conversion du §8 en sections de prose**, dettes `D-19` et `D-22`, constats `C-6` et `C-9`.
  Motif : c'est le gros morceau, il réécrit `D-1` à `D-22` d'un coup.
- **L'option C du §14 de la revue**, le patron de régime d'entrée réutilisable. Motif : elle alourdit
  un cadrage que `D-19` dit déjà deux fois trop gros. À instruire par le Tech Lead **avec `D-19` en
  face**, pas au fil de l'eau.
- **Le portage du hook au plancher machine.** Motif : la règle du périmètre du Core en fait un prompt
  dédié, et il ne se décide qu'au vu de la mesure de l'étape 5 ci-dessus.
- **`D-20`, le contraste du thème sombre.** Motif : c'est un incrément à part, il touche la feuille de
  style et la page entière. **Mais c'est la seule ligne de la liste qu'un recruteur voit**, elle
  attend depuis le 13 août, et la moitié du remède est gratuite : `--c1-soft` `#b0aaff` existe déjà
  dans `:root` et donne **7,44 · 8,25 · 9,16** sur les trois fonds. **À placer dans l'ordre par le
  chef de projet.**
- **La remise à jour des parties I à III de `tasks/ROADMAP.md`**, qui ont plus d'un mois de retard.
- **La passe des tirets cadratins sur `index.html`** : 152 décisions occurrence par occurrence.

---

## Trous et questions ouvertes à lui rappeler

1. **Le champ `permission_mode` arrive-t-il sur `UserPromptSubmit` ?** Non mesuré. La documentation ne
   donne aucun exemple de charge utile pour cet événement, et écrit que tous les événements ne
   reçoivent pas ce champ. C'est la raison d'être de l'incrément.
2. **Ce que le hook imprime atteint-il l'agent ?** Non mesuré non plus. Même route, même moment.
3. **L'étape 0 bis de `/ship` ne lit pas le champ « Mode d'exécution ».** Mesuré dans `ship.md` : elle
   ne le nomme pas. Le seul fichier du dépôt qui le nomme est `.claude/agents/prompt-reviewer.md`,
   qui travaille **avant** l'exécution. Donc « l'agent pourra s'arrêter de lui-même » reste une
   intention, pas un mécanisme écrit. **À instruire une fois la mesure faite.**
4. **La portée réelle de la règle `Edit(/.claude/**)` du plancher n'est pas mesurée.** Sa graphie
   diffère de celle du fichier voisin, qui écrit les chemins absolus avec deux barres obliques. Le
   constat `C-7` porte déjà le sujet : **30 règles sur 39 non éprouvées une à une**.
5. **L'adresse du dépôt GitHub d'IBMiAPI n'est pas connue.** `https://github.com/lianazel/ibm-s36-to-rest-api`
   rendait 404 le 13 septembre 2026. Le jour où il la donne, le bouton GitHub s'ajoute à la carte en
   une ligne.
6. **La famille B de la dette `D-17`**, les identités de clients, reste un arbitrage ouvert et non
   tranché. La famille A, les noms d'objets et de programmes, est tranchée depuis le 11 août : retrait.
7. **`RV-6`** : sur les poses `data-i18n` d'`index.html`, huit divergent entre le corps et le
   dictionnaire, par des guillemets d'attributs imbriqués, à DOM identique. Le contrôle de concordance
   général que `D-14` annonce naîtrait rouge sur ces huit.
8. **Le garde pixel `scripts/check-png.mjs`**, proposé en fin de session 22, n'est écrit nulle part et
   n'est pas dans `tasks/ROADMAP.md`. Tant qu'il n'y est pas, il n'existe pas.
9. **Les gris du badge LinkedIn n'ont pas été remesurés** après remaquettage. Contraste mesuré entre
   **2,71** et **3,01** le 13 septembre, pour un seuil AA de **4,5**. Le badge vit hors dépôt.

---

## Et si tu trouves que quelque chose dans ce message est faux, dis-le

Il a été écrit par ton prédécesseur, qui s'est trompé **seize fois** dans la journée qu'il vient de
terminer. Trois d'entre elles, nommées :

- **Il a cité une règle le matin et l'a violée l'après-midi.** Il avait écrit que « rien trouvé » et
  « je n'ai pas pu vérifier » sont deux conclusions différentes, puis il a spécifié un script qui rend
  le même mot pour quatre états distincts, dont trois feraient conclure à tort que le champ cherché
  n'est pas là. C'est la réserve `RV-2`, et c'est l'instrument tout entier qu'elle vidait.
- **Il a fait écrire deux fois dans `/tmp`** dans un prompt dont la table §8.1 portait la ligne
  « écrit hors du dépôt » en écartée, au motif que tout vivait dans le dépôt. Trois énoncés du
  document contre deux de ses propres commandes. Refus du relecteur.
- **Il a mis dans un prompt une section adressée au chef de projet**, et cette section a produit les
  deux refus suivants : d'abord parce qu'elle modifiait un fichier qu'un critère épinglait, ensuite
  parce que sa séquence rendait faux l'attendu du prompt voisin. La règle du destinataire unique
  existe depuis la v2.21 du Core, et il la connaissait.

Et une quatrième, plus petite mais de la même famille : **il a écrit « il est passé minuit chez toi »
sans avoir regardé l'heure.** Il était 21:20 sur la dernière trace du disque.
