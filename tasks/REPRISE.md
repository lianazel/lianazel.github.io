Tiens Man, tu te rappelles comment on fonctionne ?

Référentiel central : `C:\JobDirectory\CLAUDE_PROJECTS\_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY\Etude_technique`
Projet du jour : `C:\JobDirectory\CLAUDE_PROJECTS\_WEB\lianazelPortfolio\lianazelPortfolio\lianazel.github.io`

Attention à l'orthographe du chemin : `lianazelPortfolio` prend une minuscule initiale, aux deux niveaux. Une demande d'accès à un dossier avec la mauvaise casse est refusée sans expliquer pourquoi.

Dernière session Claude Code close : **21**, lue dans `.pipeline/STATUS.md` le 15 septembre 2026 à 14:13. C'est le seul compteur. Cette session Cowork : écrite le **15 septembre 2026**. Cowork date ses sessions, il ne les numérote plus. Ne recopie aucun de ces deux compteurs dans un prérequis sans l'avoir lu le jour même.

## AVANT DE M'ÉCRIRE QUOI QUE CE SOIT

Le rapport d'ouverture ne franchit aucune porte exécutable : c'est le seul moment de la journée où une phrase peut prétendre qu'une lecture a eu lieu sans que rien ne la démente (RD-057, RD-058). Ce message est cette porte, et elle est manuelle.

Dans cet ordre, et sans rien me dire entre-temps :

**1. Lis, dans cet ordre :**

- `Etude_technique/PEDAGOGY_PROFILE.local.md` et `Etude_technique/STYLE_PROFILE.local.md`, en entier. La personne d'abord, c'est la règle du Core §5.1 depuis la v2.31.
- `CLAUDE.md` du projet, en entier. Il pèse **62 580 octets** pour **60 568 caractères** : l'écart vient des accents, et les deux se mesurent si tu cites une taille. C'est la dette **D-19**, connue, non soldée, et **aggravée hier de +1 146 caractères** par la session 21.
- `.claude/settings.json`, en entier, **et `.claude/settings.local.json` aussi**. Le contrat de permissions n'est pas un fichier, il en est deux.
- `.pipeline/STATUS.md`, la ligne unique. Elle est longue : lis-la en entier, elle porte les deux arbitrages qui restent ouverts.
- `tasks/JOURNAL_v0.2.md`, la dernière entrée seulement (session 21).
- `tasks/lessons.md`, les titres (`grep '^## '`) et les deux dernières entrées.
- `tasks/ROADMAP.md` : le tableau « Déjà livré », les titres des quatre parties, et la **partie IV en entier**. **Ne lis pas E-3 cette fois** : la tâche du jour ne touche pas le dépôt.
- `scripts/check-i18n.mjs`, **son en-tête seulement**, pour savoir ce que le filet ne voit pas. Il a gagné un contrôle hier, il en porte **dix**.

**Pour la tâche du jour, la table §8.1 du Core ne désigne qu'une ligne : `STYLE_METHOD` + le profil d'instance**, parce qu'on produit un texte destiné à être lu. Aucune porte n'est créée, aucun fichier du dépôt n'est touché. Lis ce paragraphe au moment d'écrire, pas à l'ouverture.

> ⚠️ **Et vérifie que les lignes que tu écartes ne sont pas déclenchées.** Deux fois hier, une ligne rangée en « écartée » l'a été à tort, et l'une des deux portait son propre déclencheur dans son motif : *« rien n'est écrit hors du dépôt, sauf les copies de neutralisation »*. Une ligne écartée dont le motif contient une exception est une ligne cochée.

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

Le shell de la VM Cowork ne montait toujours pas les dossiers de ma machine le 15 septembre 2026 (message : mise à jour Windows du 8 septembre ; Claude Code non affecté). Si c'est encore le cas, lis par copie de fichiers, un par un. **Ne balaye jamais un dossier depuis la VM** : elle ne porte que des copies mises en scène, pas le dépôt.

Côté Claude Code (WSL), `grep -r` **fonctionne**. Ne réécris pas le contraire.

**3. Puis dis-moi ce que tu as lu**, les tranches, fichier et section, jamais les fichiers seuls, **et ce que tu as mesuré, avec les chiffres.**

Ne déclare aucune lecture que tu n'as pas faite. Ne cite aucun chiffre que tu n'as pas mesuré, y compris un chiffre repris de ce message. Dis toujours de quoi un chiffre est le compte : `grep -c` compte des lignes, `grep -o | wc -l` compte des occurrences, et ni l'un ni l'autre ne compte des objets. Si un document et le dépôt se contredisent, **le dépôt gagne et tu me le signales**.

---

## Où en est le travail

État mesuré le 15 septembre 2026 à 14:15, par lecture de fichiers.

**Les références, et la dérogation qui va avec.** À cette heure, `main` = **c114797** et `origin/main` = **7030a29**. **Un commit n'est pas poussé** : `docs: lecon de la session 21 — un compte a deux endroits diverge toujours`. Il a été écrit **après** mon push, à 14:13:51 contre 14:13:11. C'est le même oubli qu'à la clôture du 13 septembre, et il se corrige par un `git push origin main`. **C'est ta mesure d'ouverture qui fait foi, pas ces deux nombres.**

Le reste :

- `VERSION` = **0.11.0**. Le pied du `CLAUDE.md` porte le même numéro. Montée mineure, `0.10.0` vers `0.11.0`, parce que la branche était en `feat/`.
- `.pipeline/STATUS.md` = **CLOSED — session 21**.
- `tasks/lessons.md` porte **21** leçons (compte de lignes `^## `). La vingt-et-unième est du 15 septembre.
- `tasks/JOURNAL_v0.2.md` porte **19** entrées (compte de lignes `^## `).
- Le §8 du `CLAUDE.md` porte toujours **22** lignes de dette (compte de lignes `^| **D-`). Aucune soldée.
- `tasks/ROADMAP.md` porte **9** constats (compte de lignes `^## C-`), **inchangé depuis le 13 septembre** : rien n'y a été ajouté hier.
- `index.html` : **103 132 octets**, **101 793 caractères**, **1 191 lignes**, **152** cadratins écrits (occurrences, fichier entier). Le compte de cadratins n'a pas bougé de la journée.
- La section `#projets` porte **7 cartes** (compte de lignes `class="proj-card`).
- `scripts/i18n-allowlist.txt` : **105 entrées** (lignes non vides et non commentées), inchangé.
- Aucune branche ouverte : `.git/refs/heads/` ne porte que `main`, et `packed-refs` ne porte aucune référence.

**Ce qui a été livré hier, en deux phrases.** Le bouton « Voir le site » de la carte IBMiAPI emmène désormais la langue : son adresse vit au dictionnaire sous la clé `p8_href` et change à la bascule, par un attribut `data-i18n-href`. Le mécanisme est arrivé **avec sa porte** : un dixième contrôle bloquant, sa garde de non-vacuité, un onzième défaut semé au témoin, et les deux chemins prouvés vivants par neutralisation.

**Le compte de chemins bloquants est passé de 24 à 26**, et le §6 du cadrage a suivi, en dix retouches. Tout autre paragraphe du `CLAUDE.md` est resté fermé.

**La validation comportementale a eu lieu AVANT la publication, sur téléphone réel, via le tunnel, dans les deux sens.** Portfolio en français, le site appelé s'ouvre en français ; en anglais, il s'ouvre en anglais. C'est l'inverse exact de la session 20, où la page était partie sans être regardée. **Ce qu'elle ne couvre pas** : un seul appareil, une seule largeur, un seul moteur, et le comportement seulement, jamais le rendu. La dette **D-1** est entière.

---

## Écarts mesurés, à traiter ou à assumer

1. **Le commit de la leçon n'est pas poussé.** À vérifier en premier.
2. **`RV-3` est ouverte, et elle se tranche AVANT la carte TWAIM.** Le mécanisme `data-i18n-href` s'applique à **n'importe quel élément**, pas seulement aux ancres : `querySelectorAll('[data-i18n-href]')` puis `setAttribute('href', …)`. Sur un `<link rel="stylesheet">`, il chargerait une ressource tierce avec une adresse `https://` parfaitement valide, et l'invariant §4-2 tomberait sans que rien ne rougisse. Aucun défaut aujourd'hui : une seule pose, sur une ancre. Deux sorties, énoncer la limite au §6 ou poser `el.tagName === 'A'` dans la bascule. **Recommandation : la seconde**, une ligne de code ferme le trou là où une phrase ne fait que le décrire.
3. **`P6` est ouverte, et elle se tranche aussi avant la carte TWAIM.** Le `href` écrit dans le corps et la valeur `p8_href` du dictionnaire sont **deux copies que rien ne compare**. C'est la classe de défaut de **D-14**, soldée le 11 août pour les textes, rouverte ici pour une adresse. La revue propose un contrôle de concordance **restreint aux `data-i18n-href`**, une quinzaine de lignes, qui **naîtrait vert** — là où le contrôle général annoncé par D-14 naîtrait rouge sur huit poses (`RV-6` du 13 septembre). La fenêtre se referme dès qu'il y aura deux adresses à tenir en double.
4. **`RV-4`, non corrigée à dessein.** Une clé est interpolée sans échappement dans un `new RegExp` du contrôle 10. Une clé portant un métacaractère fait planter le contrôleur : *fail-closed*, la porte rougit, mais **sans nommer de chemin**. C'est le motif déjà employé par le contrôle 9 : le remède est un `escapeRegExp` d'une ligne **pour les deux à la fois**, au prochain toucher de l'un ou de l'autre.
5. **La garde `G4` de `/land` a été levée pour la deuxième fois**, constat **C-9**, tracée en **précédent**. Une garde qu'on lève à chaque atterrissage est devenue un péage. Son remède — comparer l'empreinte du fichier relu, pas les dates — vit dans `.claude/`, donc dans un prompt dédié.
6. Le `CLAUDE.md` §2 et son pied annoncent « Méthode v2.27 ». Le Core est en **v2.33**, mesuré le 15 septembre 2026.
7. Le `CLAUDE.md` §9 écrit encore que le contraste du thème sombre n'a pas été mesuré, alors que **D-20** le mesure au 13 août 2026.
8. Le `CLAUDE.md` §3 annonce **891 lignes** pour `index.html`, qui en porte **1 191**, et décrit la bascule de langue **sans le mécanisme ajouté hier**. Relevé en revue sous `RV-5` le 13 septembre, porté à `changes.md` le 15.
9. Le tableau « Déjà livré » de `tasks/ROADMAP.md` s'arrête à la version 0.3.0. `VERSION` dit 0.11.0.
10. L'en-tête de `tasks/ROADMAP.md` annonce « Trois parties ». Il y en a quatre. Et `C-9` y est écrit **après** le bloc de signature du document : qui lit jusqu'au pied ne le voit pas.
11. **Les prochains prompts vont dans `prompts/v0.11/`**, la mineure ayant changé. Aucun dossier n'a été créé. Et `prompts/v0.10/` porte **deux fichiers non suivis**, les `_v1` et `_v2` refusés : leur sort m'appartient, je n'ai pas tranché.

---

## Ce qu'on fait aujourd'hui

**Une seule chose : rendre lisible ma carte de présentation LinkedIn.**

Elle ne touche pas le dépôt. Aucun incrément, aucune branche, aucun `/ship`. C'est un travail de mesure et d'arbitrage, et il se livre en fichier.

**Lis d'abord `claude/MESURE_contraste-carte-linkedin_v1.md`** dans le projet Claude. Tout y est : la mesure des six zones, sa règle de comptage, sa date, ses limites, et la piste de remède. **Ne la refais pas**, elle a été prise le 13 septembre 2026.

**Les chiffres qui suivent sont repris de ce fichier, ils ne sont pas mesurés par moi aujourd'hui. Relis-les dans le fichier avant de les citer.**

- La carte fait **2400 × 1260 px** et **ne vit pas dans le dépôt**. Le site ne porte aucune image, invariant §4 du cadrage. Ne propose jamais de l'y mettre.
- **Le fond n'est pas la cause.** Il vaut `#0f0e17` et le blanc du titre est à 19,16 contre lui. Éclaircir le fond abaisserait le titre, seule chose qui se lit au premier coup d'œil.
- Ce qui échoue, ce sont **trois zones grises et petites** : les libellés `CORE STACK` et `WORKING KNOWLEDGE`, les légendes sous les chiffres, et `Quality before speed`. Leur encre moyenne tombe entre **2,71** et **3,01** pour un seuil AA de **4,5**.
- Piste chiffrée : `#b1b1bb` sur ce fond donne **9,01** au cœur, donc environ **4,8** à l'encre moyenne.

**Le premier arbitrage à me demander, avant d'écrire une ligne.** Je n'ai pas donné le fichier source et Cowork ne l'a pas. Deux sorties :

- **(a)** tu me donnes les valeurs exactes zone par zone et je les applique moi-même ;
- **(b)** tu refabriques la carte entière.

**Recommandation attendue : (a)**, parce que le rendu me convient partout ailleurs.

**Les contraintes, quelle que soit la sortie :**

- **Une valeur par zone, jamais une consigne générale.** « Éclaircir les gris » n'est pas une instruction, c'est un souhait.
- **Chaque valeur avec ses deux ratios** : au cœur du trait **et** à l'encre moyenne. Le premier flatte, le second décide.
- **La taille se traite comme la couleur.** Les légendes font 3 à 5 px de haut à la taille où LinkedIn affiche la carte : une couleur conforme sur un texte illisible ne règle rien.

**Le piège de cette tâche, et il est d'une autre nature que d'habitude** : il n'y a **aucune porte**. Pas de filet, pas de revue, pas de `gate.sh`. Rien ne rougira si un chiffre est faux. C'est exactement le cas où la discipline du chiffre mesuré doit tenir toute seule.

---

## Ce qui n'est PAS au programme, et pourquoi

- **La carte TWAIM et le reste d'E-3** : ni carte MetalWatch, ni ligne « Cette page aussi ». Motif : `RV-3` et `P6` se tranchent **avant**, et ils ne sont pas tranchés. **Point à ne pas perdre** : la carte TWAIM prendra la première place de la grille, au-dessus de la carte IBMiAPI.
- **Le CHORE du garde-fou AUTO MODE.** Décidé le 15 septembre, placé **après** la carte LinkedIn. Motif : il touche `.claude/settings.json`, donc un prompt dédié, et il ne bloque rien. *Acquis de la journée, à ne pas redécouvrir : Claude Code ne sait pas dans quel mode de permission il tourne, donc une consigne écrite dans un prompt ne peut pas l'arrêter. Seul un hook `UserPromptSubmit` le peut : il reçoit le champ `permission_mode` et le texte tapé, et il refuse en sortant en code 2. `SessionStart` ne convient pas, son code 2 est ignoré.*
- **La conversion du §8 en sections de prose** : dettes **D-19** et **D-22**, plus les constats **C-6** et **C-9**. Motif : c'est le gros morceau, il réécrit D-1 à D-22 d'un coup.
- **Les trois lignes fausses du `CLAUDE.md`** (méthode en v2.27, §9 contraste jamais mesuré, §3 891 lignes et bascule incomplète). Motif : même fichier, même passe que la conversion.
- **La remise à jour des parties I à III de `tasks/ROADMAP.md`**, qui ont plus d'un mois de retard, et l'inscription de `RV-3`, `P6` et `RV-4` au registre. Motif : ça mérite son propre passage, et les trois vivent déjà dans le journal de la session 21, qui est committé et servi — il n'y a pas d'évaporation à craindre.
- **La passe des tirets cadratins sur `index.html`** : 152 décisions occurrence par occurrence.
- **La passe d'accessibilité, dette D-20.** Elle exigera d'autoriser en toutes lettres la modification de la feuille de style.
- **Deux remontées au référentiel**, qui ne se font pas depuis ce dépôt : le `ship.md` du gabarit, et le `CLAUDE_METHOD_BLOCK.md` qui annonce v2.30 alors que le Core est en v2.33.

---

## Trous et questions ouvertes à me rappeler

1. **L'adresse du dépôt GitHub d'IBMiAPI n'est pas connue.** `https://github.com/lianazel/ibm-s36-to-rest-api` rendait **404** le 13 septembre 2026. La carte n'a donc qu'un bouton. Le jour où je te donne l'adresse, le bouton GitHub s'ajoute en une ligne.
2. **La famille B de la dette D-17**, les identités de clients, reste un arbitrage ouvert et non tranché. J'ai dit le 13 septembre que c'était logique de les garder, un portfolio étant un CV, mais **je ne l'ai pas tranché en toutes lettres**. La famille A, les noms d'objets et de programmes, est tranchée depuis le 11 août : retrait.
3. **Trente règles sur trente-neuf** du plancher restent non éprouvées une à une (constat `C-7`).
4. **`RV-6`, la trouvaille du 13 septembre.** Sur les poses `data-i18n` d'`index.html`, **huit** divergent entre le corps et le dictionnaire, par des guillemets d'attributs imbriqués, à DOM identique. Le contrôle de concordance général que **D-14** annonce naîtrait rouge sur ces huit. C'est pourquoi `P6` propose un contrôle **restreint**. *Le désaccord de compte est levé : la revue comptait 202 poses du corps, Cowork 203 occurrences du fichier entier ; l'écart est le `<title data-i18n="page_title">` de l'en-tête. Deux comptages justes, deux règles différentes.*
5. **La numérotation du dixième contrôle est prise.** La dette **D-8** annonce « un dixième contrôle de conformité » pour les rangs `data-nav-priority`. Le lien bilingue occupe ce numéro depuis hier : le contrôle de D-8 sera le onzième. Porté dans `changes.md`, pas au registre.
6. **Le relecteur de prompts a ajouté hier un contrôle que je ne lui demandais pas** : compter les `assert_dit` de `gate.sh` et vérifier que les deux routes arithmétiques concordent, 11 + 8 + 2 + 2 + 3 = 26 = 23 + 3. **À reprendre comme critère dans les prochains prompts** : il compte les assertions en face, là où mon critère ne comptait que les chemins dans la source.

---

Et si tu trouves que quelque chose dans ce message est faux, dis-le. Il a été écrit par ton prédécesseur, qui s'est trompé **dix fois** dans la journée qu'il vient de terminer, dont six relevées par le relecteur de prompts en deux refus, deux par lui-même à son banc d'essai, et deux dans des commandes données au chef de projet. Trois d'entre elles, nommées :

- Le prompt interdisait d'ajouter un cadratin à `index.html` et prescrivait, deux pages plus haut, un commentaire qui en contenait un. Le critère était **inatteignable** : 152 avant, 153 après. L'erreur de méthode est nommable : le banc d'essai avait été joué avec une version *raccourcie* du commentaire, pas avec celui du prompt. **Un rodage qui ne rejoue pas le texte livré ne mesure pas le texte livré.**
- La correction de cette erreur en a introduit deux autres, dont celle-ci : le §6 du cadrage annonçait un témoin à **dix** défauts alors que le même prompt le faisait passer à onze. La ligne était dans le seul paragraphe que le prompt autorisait à ouvrir. Elle avait simplement été manquée.
- La séquence de fusion donnée au chef de projet ne portait pas le `git checkout main` qui la précède. Il a lancé la commande depuis la branche, git a répondu « Already up to date », et il a cru à une erreur.
