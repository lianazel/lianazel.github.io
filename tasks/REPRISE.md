# Prompt de reprise — session Cowork suivante

> **Mode d'emploi.** Ce fichier n'est pas une note : c'est le **premier message** à coller tel quel
> au Cowork entrant. Il est écrit par le Cowork sortant, qui sait ; il est lu par le Cowork entrant,
> qui ne sait rien. Rédigé le **17 septembre 2026 à 19 h**, après le dernier push.
>
> **État de la séance close** : incrément atterri, poussé, aucune branche ouverte, aucune dérogation.

---

## 1. La phrase de démarrage

Tiens Man, tu te rappelles comment on travaille ?

**Référentiel de méthode** :
`C:\JobDirectory\CLAUDE_PROJECTS\_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY\Etude_technique`

**Projet** :
`C:\JobDirectory\CLAUDE_PROJECTS\_WEB\lianazelPortfolio\lianazelPortfolio\lianazel.github.io`

⚠️ **Attention à l'orthographe du chemin** : `lianazelPortfolio` prend une **minuscule initiale**, aux
**deux** niveaux. Le dossier est doublé — ce n'est pas une faute de frappe.

> Mesuré le 17 septembre : depuis WSL, le disque Windows est monté sous `/mnt/c`, qui **ne distingue
> pas les majuscules**. Une invite affichant `LianazelPortfolio` désigne donc le même dossier. Ne pas
> en conclure que le chemin est faux ; ne pas non plus s'en servir pour relâcher la règle ailleurs.

**Deux compteurs de session coexistent, ne pas les confondre.**

- Côté **Claude Code** : la session **23** est close (`.pipeline/STATUS.md` porte `CLOSED — session 23`).
- Côté **Cowork** : le numéro de la séance qui s'ouvre est à **confirmer par le chef de projet**. Je ne
  l'ai pas mesuré, donc je ne l'écris pas.

**Interdiction explicite** : ne recopier aucun de ces deux numéros dans un prérequis de prompt sans
l'avoir **lu le jour même** dans le fichier qui le porte.

---

## 2. La porte — ce qu'il faut lire, et dans quel ordre

Rien ne se dit au chef de projet entre la première et la dernière lecture. On lit tout, puis on rend
un rapport d'ouverture.

**Dans cet ordre exact :**

1. `Etude_technique/PEDAGOGY_PROFILE.local.md` — **en entier**
2. `Etude_technique/STYLE_PROFILE.local.md` — **en entier**

   *(la personne d'abord : règle du Core §5.1 depuis la v2.31)*

3. `CLAUDE.md` du projet — **en entier**
4. `.claude/settings.json` **ET** `.claude/settings.local.json` — **les deux, en entier**
5. `.pipeline/STATUS.md` — une seule ligne, en entier
6. `tasks/JOURNAL_v0.2.md` — **la dernière entrée**
7. `tasks/lessons.md` — les **titres** (`grep '^## '`) + les **trois dernières entrées**
8. `tasks/ROADMAP.md` — le tableau « Déjà livré », les **quatre titres de parties**, et la **partie IV
   en entier**
9. `scripts/check-i18n.mjs` — **l'en-tête**

**La table §8.1 du Core se lit au moment d'écrire, pas à l'ouverture.** Les satellites se chargent
quand le chantier du jour les déclenche, jamais « au cas où ».

### Les interdits d'outillage — mesurés, pas supposés

- **Aucune commande git lancée depuis la VM Cowork sur le dépôt du chef de projet.** Une seule y laisse
  un `.git/index.lock` insupprimable sur sa machine. L'état git se mesure **par lecture de fichiers** :
  `.git/HEAD`, `.git/refs/heads/*`, `.git/refs/remotes/origin/main`, `.git/packed-refs`,
  `.git/logs/HEAD`. Les `git status` et `git rev-list` passent par Claude Code ou par le chef de projet.
- **Ne jamais balayer un dossier depuis la VM** (`ls dir/* | wc -l`, `grep -r`). Elle ne porte que des
  copies mises en scène, pas le dépôt. Le 9 septembre elle a rendu **5** fichiers de test pour **8**.
  On mesure fichier par fichier, ou par le listage du dossier sur la machine du chef de projet.
- **`device_bash` est mort sur cette machine.** Re-testé le 17 septembre à 09:32 puis à 18:33 :
  `no Plan9 drive shares mounted`. Une mise à jour Windows du 8 septembre empêche l'espace de travail
  de monter les dossiers. Il reste `device_list_dir`, `device_stage_files`, `device_commit_files`.
- **Le pont refuse d'écrire dans `.claude/`.** Mesuré le 17 septembre : *« Writing to .claude is not
  permitted via remote tools »*. Toute modification de `.claude/settings.json` passe par le chef de
  projet, qui la colle lui-même.

### Les trois règles qui décident de la qualité du rapport d'ouverture

1. **Ne déclarer aucune lecture qui n'a pas été faite.**
2. **Ne citer aucun chiffre qui n'a pas été mesuré**, y compris un chiffre repris de ce message.
   Et **toujours dire de quelle des trois espèces il est** : `grep -c` compte des **lignes**,
   `grep -o | wc -l` compte des **occurrences**, et sans l'un ni l'autre ce sont des **objets**.
3. **Si un document et le dépôt se contredisent, le dépôt gagne, et on le signale.**

Le rapport d'ouverture nomme les **tranches lues** — fichier **et** section — jamais des fichiers
seuls. Et il donne les nombres mesurés avec leur unité de comptage.

---

## 3. La situation exacte

Mesurée le 17 septembre 2026 entre 18 h 50 et 19 h, par lecture de fichiers.

| Grandeur | Valeur mesurée | Où elle a été lue |
|---|---|---|
| `HEAD` | `ref: refs/heads/main` | `.git/HEAD` |
| `main` local | `f1f7d89` | `.git/refs/heads/main` |
| `origin/main` | `f1f7d89` | `.git/refs/remotes/origin/main` |
| Version | `0.11.2` | `VERSION` |
| État pipeline | `CLOSED — session 23`, 1 831 octets | `.pipeline/STATUS.md` |
| Leçons | **28 entrées** (lignes `^## `) | `tasks/lessons.md`, 77 511 octets |
| Le témoin | 16 220 octets | `scripts/temoin-mode.mjs` |
| Sa preuve | 16 794 octets | `scripts/test-temoin-mode.sh` |
| Réglages | 1 366 octets, 39 interdits `deny`, 1 `ask`, hook armé | `.claude/settings.json` |

**Local et distant sont au même commit.** Rien n'attend d'être poussé. Aucune branche de travail
ouverte : `chore/temoin-mode-permission` a été fusionnée (merge `02eea97`) puis supprimée.

**Les trois derniers commits**, heures de Paris :

| Commit | Objet | Heure |
|---|---|---|
| `c886d86` | `docs: journal session 23 + bump 0.11.1 -> 0.11.2 — clôture (merge 02eea97)` | 16:05:35 |
| `7e0621e` | `docs(lessons): une revue sans portee gelee n'est pas une porte` | 16:21:56 |
| `f1f7d89` | `chore: brancher le temoin de mode sur UserPromptSubmit` | 18:33:33 |

Poussé à **18:33:44**.

> **Une limite de ma mesure, dite en clair.** Je ne peux pas lancer `git status` depuis la VM. La
> dernière vue réelle du tampon date d'une capture d'écran du chef de projet à 18:52 : aucun fichier
> suivi modifié, neuf fichiers non suivis. Depuis, un seul fichier a bougé sur le disque — le journal
> de trace du témoin, qui est ignoré par git. **À vérifier d'un `git status` à l'ouverture.**

### Ce qui fait foi, et ce qui n'en fait pas

- `.pipeline/STATUS.md` et `tasks/JOURNAL_v0.2.md` **racontent** la séance. Ils ne sont **pas** la
  source de vérité : le dépôt l'est. Plusieurs fois le 17 septembre, un document du pipeline a
  contredit le disque — et c'est le disque qui avait raison.
- La procédure de référence pour poser le témoin sur un nouveau dépôt est le document Word
  `Etude_technique/TWAIM_TECHNICAL_DOCUMENTATION/TEC_IA_CLAUDE_MEP_HOOK_MODE_AMO.DOCX` —
  **26 421 octets, 14 pages, V1.0.3**. `00_INDEX.md` (6 166 octets) l'indexe.

### Les écarts mesurés, à traiter ou à assumer

**É-1 — Les trois réserves RV-32, RV-33 et RV-34 ne sont pas posées.** La revue finale du 17 septembre
à 15:56:07 les a relevées ; le chef de projet a décidé d'atterrir sans elles et de les poser ensuite en
commit ordinaire. Ce commit n'a pas eu lieu. Les trois sont **du commentaire seul, zéro ligne de
code** :

- **RV-32 (FAIL — la seule qui presse).** Une ligne de `scripts/temoin-mode.mjs` affirme que seul
  l'octet NUL est attrapé par le filtre. Faux, mesuré : NUL, ESC, une séquence ANSI, BEL, `é` et
  l'espace invisible U+200B sont **tous** attrapés. La phrase **sous-estime la garde** — un lecteur
  pourrait juger le filtre superflu et le retirer, alors qu'il est ce qui arrête la réécriture de
  terminal. Et la même affirmation est contredite plus bas dans le même fichier.
- **RV-33 (WARN).** L'en-tête énumère ses limites connues dans l'ordre a, b, **d**, c.
- **RV-34 (WARN).** La limite (d) dit « à sa décoration près ». Trop généreux : l'aplatissement écrase
  aussi les blancs intérieurs, donc la valeur imprimée n'a jamais été envoyée telle quelle.

**É-2 — Neuf fichiers non suivis dans `prompts/v0.11/`.** Huit sont les prompts du sujet abandonné
(`CHORE_garde-auto-mode` v1 à v4, `SPIKE_essai0-garde-auto-mode` v1 à v4) ; le neuvième est
`CHORE_badge-linkedin-png_v2.md`, sans rapport. Ils ne gênent rien mais apparaissent dans chaque
`git status`. **Décision non prise** : les commiter comme trace d'un sujet coupé, ou les effacer.

**É-3 — La règle de portée gelée n'est pas au référentiel.** Elle vit dans `tasks/lessons.md` (28ᵉ
entrée, 17 septembre), donc dans un projet. Sa place est `ASSURANCE_METHOD.md`, à côté de « Outil
d'inspection ≠ porte ». Le chef de projet a demandé qu'elle y soit portée **dans les meilleurs
délais**. Le texte prêt à poser est dans la leçon, avec son corollaire : **pas de verdict conditionnel**.

**É-4 — Un fichier de verrouillage Word traîne dans le référentiel.**
`Etude_technique/TWAIM_Kit/~$MCC_land_explique_simplement.docx`, 162 octets. C'est le verrou d'un
document qui a depuis déménagé dans `TWAIM_TECHNICAL_DOCUMENTATION/`. Ni Cowork ni Claude Code ne
peuvent l'effacer ; il faut une commande du chef de projet.

---

## 4. La tâche du jour

> ⚠️ **Le développement sur le portfolio est arrêté jusqu'à nouvel ordre.** Décision du chef de projet,
> 17 septembre 2026 au soir. Ne pas ouvrir d'incrément sur ce dépôt sans qu'il le demande.

**Poser le témoin de mode de permission sur un second dépôt — en pilote.**

Ce n'est pas un déploiement. C'est une **mesure**, et son objet n'est pas le témoin.

### Ce qui est déjà prouvé, et ce qui ne l'est pas

Le témoin fonctionne. Mesuré **une fois**, le 17 septembre 2026 à 18:48, sur ce dépôt, sur cette
machine. La ligne produite, sur un journal vide :

```
2026-09-17T16:48:08.776Z | mode=auto | lu=entier | octets=656
```

Elle a tranché les deux inconnues que le fichier déclarait : le champ `permission_mode` **arrive** sur
`UserPromptSubmit`, et ce que le témoin imprime **parvient** à l'agent, qui l'a cité dans sa réponse.

**Ce qui n'est pas prouvé : que le document suffit.** Il a été écrit à partir de l'expérience, jamais
déroulé par quelqu'un qui ne la connaissait pas. Une procédure que seul son auteur a lue est une
hypothèse, pas une procédure.

### Ce que la tâche mesure

Pas « est-ce que le témoin marche ». **« Est-ce que le document suffit à le poser sans rien deviner. »**

On suit le document **à la lettre**, du §3 au §12. Chaque fois qu'une ligne est fausse, ambiguë ou
manquante, on la note. Le livrable est cette liste, et la correction du document qui s'ensuit — avec
sa ligne au cartouche, en V1.0.4.

### Le choix du dépôt

Un dépôt où le chef de projet travaille souvent — sinon le témoin ne voit pas de vrai trafic — et qui
**n'est pas le référentiel**. Le référentiel est mono-session par construction
(`MULTISESSION_METHOD.md` §3) et se traite à part.

### Le point de méthode qui décide de la qualité

`ASSURANCE_METHOD.md`, couche A : **outil d'inspection ≠ porte**. Le témoin ne bloque rien et sort
toujours en 0 — c'est une lampe torche, assumée comme telle. Toute phrase qui laisserait croire
l'inverse est un défaut, et c'est exactement ce qui a coûté quatre revues le 17 septembre.

### Les pièges déjà payés — ne pas les redécouvrir

1. **Une session Claude Code déjà ouverte ne prend pas un hook ajouté après son démarrage.** Mesuré :
   déclaration posée à 17:04:53, plusieurs phrases tapées ensuite, **aucune trace nulle part** — ni dans
   le dépôt, ni dans le repli hors dépôt. Session neuve à 18:48 : la ligne apparaît au premier essai.
   La page des hooks dit que le fichier de réglages est « **normalement** » repris par un surveillant.
   Ce « normalement » est le mot qui compte. **Redémarrer, ne pas croire sur parole.**
2. **Le chemin du script doit être absolu**, via `$CLAUDE_PROJECT_DIR`. En relatif, le programme est
   introuvable dès que le système l'appelle depuis un autre répertoire, et il plante avant d'écrire
   quoi que ce soit.
3. **Un `timeout` est obligatoire.** Un hook `UserPromptSubmit` qui pend bloque le prompt tapé. Dix
   secondes suffisent : la cible est bornée à deux secondes d'attente.
4. **Le témoin écrit à côté de l'endroit d'où on l'appelle**, pas à côté de lui-même. Sur un dépôt sans
   `.pipeline/`, la trace part dans `/tmp`. Vérifier le prérequis du §3 **avant** de poser.
5. **Un essai lancé à la main écrit dans le même journal qu'une vraie phrase tapée**, et rien ne les
   distingue à la lecture. Vider le journal avant l'essai, et ne lire comme preuve que ce qui est
   arrivé **après**. Le 17 septembre, le journal du dépôt a été pollué **trois fois** par des sondes,
   dont une a laissé `bypassPermissions` comme dernière valeur affichée — l'instrument mentait, et dans
   la direction la plus inquiétante.
6. **Le fichier de réglages est un fichier de sécurité.** Une virgule oubliée le rend illisible, et
   Claude Code peut alors ignorer la totalité des interdits sans que rien ne prévienne. Vérifier le
   JSON après chaque modification, et compter les entrées `deny` avant et après.

### Le premier arbitrage à demander — avant d'écrire une ligne

**Sur quel dépôt pose-t-on le pilote ?** Ne pas le choisir à sa place : lui seul sait où il travaille
en ce moment, et le témoin n'a d'intérêt que là où il y a du trafic.

---

## 5. Ce qui n'est PAS au programme

- **Tout développement sur le portfolio.** Arrêté jusqu'à nouvel ordre, décision du chef de projet du
  17 septembre au soir.
- **Fermer le trou U+2028.** Trois voies proposées par la revue : comparer au brut, rogner sans
  écraser, ou journaliser un drapeau `aplati=oui|non` — avec une préférence du relecteur pour la
  troisième, qui rend l'instrument honnête sans toucher à ce qu'il mesure. *Motif d'exclusion* : c'est
  un **durcissement**, pas un correctif. Il exige son propre `/ship` avec son propre chemin de test, et
  le mélanger au pilote referait exactement la confusion qui a produit la boucle du 17 septembre.
- **Poser le témoin au niveau de la machine**, une fois pour toutes. Voie **écartée** par le chef de
  projet le 17 septembre au vu de la première mesure : la pose reste dépôt par dépôt, pour rester
  maître du système. Enregistré au §10.1 du document, avec ses trois motifs. *Motif d'exclusion* :
  arbitrage rendu, ne pas le rejouer.
- **Le mode multi-session (deux fenêtres tmux).** `MULTISESSION_METHOD.md` v0.3 existe et le Core §5.6
  porte son déclencheur, mais le pilote n'a jamais tourné et le `PROJECTS.md` qu'il réclame n'existe ni
  dans `Etude_technique/` ni dans `TWAIM_Kit/`. *Motif d'exclusion* : c'est un pari de vitesse, et la
  séance du 17 septembre a montré que le goulot n'est pas la production mais la validation par le chef
  de projet.
- **Le site `IBMiModern`.** Idée ouverte le 17 septembre : un recueil d'astuces de modernisation IBM i
  — DSPF, code, SQL, CL. Frontière décidée avec `IBMiAPI` : **si ça se raconte, c'est IBMiAPI ; si ça se
  copie-colle, c'est IBMiModern**. Noms mesurés libres le 17 septembre (`ibmimodern.com`, `ibmitips.com`,
  `ibmitips.fr`, et les deux comptes GitHub). Deux points tranchés : le nom retenu est **`IBMiModern`**,
  et le pied de page reprendra la mention de marques déjà en place sur `IBMiAPI`. *Motif d'exclusion* :
  aucun dépôt n'est ouvert, et rien n'est demandé.
- **La règle interdisant le nombre nu dans un commentaire.** Quatrième occurrence du même défaut le
  17 septembre (D-10, D-18, D-7, RV-28). Une leçon existe déjà dans `tasks/lessons.md`. Sa promotion en
  règle du cadrage est un sujet à part, et le jour où elle s'écrira il faudra que ce soit **une porte,
  pas un vœu** — une interdiction que rien ne peut faire échouer est une lampe torche.

---

## 6. Trous et questions ouvertes

1. **Le témoin ne commande rien.** Il informe l'agent, il ne l'arrête pas. Ce que l'agent doit faire de
   cette information reste entièrement à écrire. C'est le sujet tenté en premier le 16 septembre,
   refusé deux fois par le relecteur de prompts, puis abandonné et remplacé par l'instrument.
2. **Sa preuve ne tourne pas toute seule.** `scripts/test-temoin-mode.sh` se lance à la main et n'entre
   dans aucune porte automatique.
3. **`lu=entier` n'est vrai qu'une fois.** La charge utile mesurée fait **656 octets** sur un prompt de
   quatre caractères, alors que toutes les charges d'essai en faisaient 26. Un prompt long la fera
   grossir, et rien ne dit qu'elle arrivera encore d'un seul coup. Le témoin le dira le jour où ça
   changera — encore faut-il lire le journal.
4. **Ces 656 octets contiennent le texte tapé, en clair, dans un fichier.** La mise en garde du §3 du
   document n'est plus théorique. À reconsidérer avant de poser le témoin sur un dépôt où sont tapés
   des prompts sensibles.
5. **Le journal n'est pas infalsifiable.** N'importe qui lançant le script à la main y écrit une ligne
   indistinguable d'une vraie. Un journal dans lequel tout le monde peut écrire n'est pas tout à fait
   une trace. Sujet à part, non traité.

---

## 7. Et si quelque chose ici est faux

Si tu trouves que quelque chose dans ce message est faux, **dis-le**.

Il a été écrit par ton prédécesseur, qui s'est trompé **vingt et une fois** dans la journée qu'il vient
de terminer — seize comptées dans le prompt de reprise de la mi-journée, cinq de plus ensuite. Trois
d'entre elles, pour te donner le ton :

- Il a affirmé qu'**aucune des six pré-gardes de `/land` ne regardait le verdict de la revue**. Faux :
  la garde de revue fraîche en a deux, fraîcheur **et** verdict. Il l'avait déduit d'un tableau qui
  n'en affichait qu'une, sans le vérifier.
- Il a répété **deux fois** que le fichier de réglages était rechargé automatiquement, donc qu'aucun
  redémarrage n'était nécessaire. C'était **lu sur une page, jamais mesuré** — et la mesure a dit le
  contraire. Deux heures perdues.
- Il a écrit le matin que *« rien trouvé » et « je n'ai pas pu vérifier » sont deux conclusions
  différentes*, puis a rédigé dans l'heure une spécification employant **un seul mot pour quatre états
  distincts**. La revue l'a relevé.

Le chef de projet ne relit pas ce message avant de te le coller. Tu es le seul contrôle.

---

*Écrit le 17 septembre 2026 à 19 h par le Cowork sortant · tous les chiffres mesurés à cette heure-là,
par lecture de fichiers · aucune commande git lancée depuis la VM.*
