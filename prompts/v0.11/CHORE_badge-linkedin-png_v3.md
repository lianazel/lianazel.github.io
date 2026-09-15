# CHORE — Reproduire le PNG du badge LinkedIn

| | |
|---|---|
| **Type** | `CHORE` |
| **Dépôt** | `lianazel.github.io` |
| **Version du dépôt à l'écriture** | `0.11.0` |
| **Écrit le** | 15 septembre 2026, par Cowork |
| **Révision** | `_v3`. Le `_v2` a été refusé `NEEDS_WORK`, 4 fails. Voir §9. |
| **Destinataire** | Claude Code, côté WSL |

## Mode d'exécution

**AUTO MODE ON : refusé.**

Motif, et il se constate : l'objet du chantier est un **rendu**. La règle du mode d'exécution
(Core v2.33) interdit le mode automatique dès qu'une preuve de rendu est en jeu. L'agent mesure des
dimensions, des largeurs et des empreintes ; il ne constate pas qu'une carte est correcte à l'œil.

## Règle du premier enregistrement

Le premier commit de la branche `chore/badge-linkedin-png` porte ce prompt, sous la forme imposée :

```
docs(prompt): prompts/v0.11/CHORE_badge-linkedin-png_v3.md
```

## Satellites consultés — table §8.1 du Core, les douze lignes

| Ligne du chantier | Verdict | Motif |
|---|---|---|
| ajoute, met à jour ou remplace une **dépendance** | écartée | rien n'est installé, §3 |
| touche une **clé, un secret, un jeton, une permission** | écartée | aucun secret n'est lu ni écrit |
| fait analyser un **artefact d'origine externe** | écartée | le HTML vient de Cowork, aucune pièce tierce |
| crée ou modifie une **porte, une garde, un test bloquant** | écartée | aucune porte n'est créée ni touchée |
| touche l'**interface** (composant, mise en page, interaction, libellé visible) | écartée | le badge est une image hors dépôt, pas une interface du site : aucun composant, aucune interaction |
| touche une **base de données** | écartée | aucune |
| **écrit hors du dépôt** | **COCHÉE** | `AGENT_SCOPE_METHOD`. Les PNG naissent hors du dépôt, et la liste fermée du §3 de ce satellite ne porte qu'une entrée, la promotion d'une leçon. Ce chantier n'en est pas, d'où ce prompt dédié |
| concerne le **rendu web à valider** (géométrie, régression visuelle) | **COCHÉE** | `VISION_METHOD` v1.2. Le chantier pilote un navigateur, asserte une géométrie (1200 × 630) et compare des pixels à une référence : ce sont ses deux gates, gate structurel et gate pixel, sous forme primitive. Son §1 rappelle que le jugement esthétique reste humain, ce que le §8 applique |
| introduit un **agent agissant sans validation humaine immédiate** | écartée | AUTO MODE refusé, l'agent s'arrête à son compte rendu |
| pilote **plusieurs projets en parallèle** | écartée | un seul dépôt |
| produit **un texte destiné à être lu** | écartée | le texte du badge est déjà figé dans le HTML fourni ; ce chantier n'en rédige aucun |
| exige d'**adapter une explication** au chef de projet | écartée | le destinataire du prompt est l'agent ; le compte rendu est une liste de mesures |

## Ce que l'auteur a joué, et ce qu'il n'a pas pu jouer

Déclaration exigée par la leçon du 15 septembre 2026, *un rodage qui ne rejoue pas le texte livré ne
mesure pas le texte livré*.

| Critère | Joué par l'auteur avant livraison ? |
|---|---|
| 1, 3, 4, 8a, 9, 10 | **Oui**, mesuré le 15 septembre 2026 sur les fichiers en place |
| 2 | **Non** : aucun navigateur Windows côté Cowork |
| 5, 6a, 6b | **Non** : `Segoe UI` est absente du conteneur Cowork |
| 8b | **Non** : la reproductibilité d'un rendu Chrome n'a pas pu être éprouvée côté Windows. **C'est pourquoi ce critère a deux branches, et qu'aucune n'est un échec en soi.** |

---

## 1. L'état de départ, mesuré

**Le `_v1` a déjà été exécuté le 15 septembre 2026.** Les trois fichiers sont en place. Ce chantier
ne les crée donc pas : il **reproduit** les deux PNG par-dessus, et prouve que le rendu est
reproductible.

Dossier de travail, **5 objets** mesurés le 15 septembre 2026 :

| Fichier | Octets | sha256 |
|---|---|---|
| `badge-linkedin.html` | 5 136 | `1f686eb98807fd2ae7e35d72203a5d797a5fe551cca6893fbbaa8c57372682aa` |
| `badge-linkedin-1200x630.png` | 211 431 | `c011ab31b7555b52d816e57d155f9ac2debb580651dddf57ecb776f7fb205835` |
| `badge-linkedin-2400x1260.png` | 630 785 | `e89d085a1ad431f3ca3a1b88012c2f4181c023737d3432c63a6af4ff8b569fc3` |
| `DOC_ETAPE_lianazel-github-io_20260808.docx` | 13 750 | hors périmètre |
| `TEC_CLAUDE_IA_..._MEMO.md` | 1 801 | hors périmètre |

Les trois empreintes ci-dessus sont la **référence** du gate pixel.

## 2. Ce que cet incrément fait

1. Vérifie que le HTML en place est bien celui décrit ici, par son empreinte.
2. Trouve un navigateur de la famille Chromium **déjà installé** sur la machine Windows.
3. **Réécrit** les deux PNG, en 1200 × 630 et en 2400 × 1260.
4. Compare leurs empreintes à la référence du §1.
5. **Prouve** quelle police a servi, par deux routes indépendantes.
6. Rend son compte, chiffres en tête.

## 3. Ce que cet incrément NE fait PAS

- **Il n'installe rien.** Ni `npm`, ni `npx`, ni `pip`, ni un navigateur, ni une police, ni
  Playwright, ni Puppeteer. L'invariant n° 1 du §4 du cadrage l'interdit sans décision explicite du
  chef de projet, et elle n'a pas été prise. Un navigateur **déjà présent** n'est pas une dépendance
  introduite.
- **Il ne modifie aucun fichier suivi par git, autre que ce prompt lui-même.** Ni `index.html`, ni
  `CLAUDE.md`, ni `scripts/`, ni `tasks/`, ni `VERSION`.
- **Il ne crée aucun fichier.** Il en réécrit deux. Le compte d'objets du dossier de travail ne
  change pas.
- **Il ne modifie pas le HTML.** S'il ne convient pas, il le dit et s'arrête.
- **Il ne fusionne rien et ne publie rien.** `/land` et `git push origin main` restent au chef de
  projet, §11 du cadrage.
- **Il ne téléverse rien**, ni sur GitHub, ni sur LinkedIn.
- **Il ne juge pas le rendu.** `VISION_METHOD` §1 : le jugement esthétique reste humain.
- **Il n'emploie jamais `rm -r`, `rm -rf` ni `rm -fr`.** Les trois sont dans la liste `deny` de
  `.claude/settings.json`, mesuré le 15 septembre 2026. D'où les fichiers temporaires à plat de
  l'ÉTAPE 4, et leur nettoyage par `rm _tmp-*`.

## 4. Les emplacements, et de quel côté ils se lisent

| Quoi | Chemin WSL |
|---|---|
| Dossier de travail | `/mnt/c/JobDirectory/CLAUDE_PROJECTS/_WEB/lianazelPortfolio/Etude_technique/` |
| HTML d'entrée | `.../Etude_technique/badge-linkedin.html` |
| PNG 1× | `.../Etude_technique/badge-linkedin-1200x630.png` |
| PNG 2× | `.../Etude_technique/badge-linkedin-2400x1260.png` |

> ⚠️ **Piège de côté.** Le navigateur est un programme **Windows**. Lancé depuis WSL, il lit ses
> arguments comme des chemins **Windows**. Toute adresse passée au navigateur se convertit par
> `wslpath -w`. Les commandes de fichiers restent en chemins WSL.

## 5. Les étapes

### ÉTAPE 0 — Prouver la cible et relever l'état de départ

```bash
cd /mnt/c/JobDirectory/CLAUDE_PROJECTS/_WEB/lianazelPortfolio/Etude_technique
ls -1 | wc -l
sha256sum badge-linkedin.html badge-linkedin-1200x630.png badge-linkedin-2400x1260.png
```

Attendu : **5** objets, et les trois empreintes du §1. Si le HTML diverge, s'arrêter et le dire.

### ÉTAPE 1 — Trouver le navigateur, sans rien installer

Chercher dans cet ordre, s'arrêter au premier trouvé, **nommer le chemin retenu**, et relever la
version par `"$BROWSER" --version` :

```bash
ls "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe"
ls "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"
ls "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
ls "/mnt/c/Program Files/Microsoft/Edge/Application/msedge.exe"
```

Si aucun n'existe, s'arrêter. Ne pas en installer un.

### ÉTAPE 2 — Réécrire le PNG 1×

`BROWSER` étant le chemin trouvé et `WIN_DIR` le résultat de `wslpath -w <dossier de travail>` :

```bash
"$BROWSER" --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --force-device-scale-factor=1 \
  --screenshot="$WIN_DIR\badge-linkedin-1200x630.png" \
  "file:///$(wslpath -w .../badge-linkedin.html | tr '\\' '/')"
```

### ÉTAPE 3 — Réécrire le PNG 2×

Même commande avec `--force-device-scale-factor=2` et le nom `badge-linkedin-2400x1260.png`. La
taille de fenêtre **reste** `1200,630`.

Si la sortie ne fait pas 2400 × 1260, le dire et s'arrêter. **Ne pas agrandir l'image après coup.**

### ÉTAPE 4 — Prouver quelle police a servi, par deux routes

> ⚠️ **La pile de polices est `'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial,
> sans-serif`. Sur Windows, `system-ui` RÉSOUT vers `Segoe UI`.** Un témoin qui ne retire que
> `'Segoe UI', ` ne teste donc rien. C'est l'erreur du `_v1`, mesurée à l'exécution.

> ⚠️ **Tous les fichiers temporaires de cette étape se posent À PLAT dans le dossier de travail,
> préfixés `_tmp-`. Aucun sous-dossier.** Motif mesuré : le plancher de permissions
> `.claude/settings.json` refuse `Bash(rm -r *)`, `Bash(rm -rf *)` et `Bash(rm -fr *)`. Un
> sous-dossier temporaire serait donc créé sans pouvoir être retiré. Le nettoyage se fait par
> `rm _tmp-*`, jamais avec `-r`.

**Route A, la largeur, et voici par quel moyen.** Écrire un fichier `_tmp-mesure-police.html` qui,
au chargement, emploie un contexte `canvas` 2D : pour chacune des trois piles ci-dessous, poser
`ctx.font` à la **même taille**, appeler `ctx.measureText('CHERID Jean-Christophe')`, et écrire les
trois largeurs dans le corps du document. Le relever par
`"$BROWSER" --headless=new --dump-dom "file:///…/_tmp-mesure-police.html"`.

| Pile mesurée | Attendu |
|---|---|
| celle du badge, entière | largeur X |
| `'Segoe UI'` seule | **égale à X** |
| la pile privée de `'Segoe UI'` **et** de `system-ui` | **différente de X** |

Si la troisième égale X, `Segoe UI` n'a pas servi. S'arrêter et le dire.

*`canvas.measureText` via `--dump-dom` est le moyen employé avec succès à l'exécution du `_v1`. Il
est nommé ici plutôt que laissé à l'initiative de l'agent, parce que le mauvais moyen, lui, est
interdit trois lignes plus bas.*

**Route B, l'empreinte du rendu.** Copier le HTML **à plat** en `_tmp-sans-segoe.html` dans le
dossier de travail, y retirer `'Segoe UI', system-ui, `, en produire un PNG 1× sous le nom
`_tmp-sans-segoe.png`, et comparer son empreinte à celle du livrable.

| Résultat | Ce qu'il prouve |
|---|---|
| empreintes **différentes** | `Segoe UI` a bien servi. Résultat attendu. |
| empreintes **identiques** | `Segoe UI` n'a pas servi. S'arrêter et le dire. |

**Nettoyage : `rm _tmp-*`.** Le compte de fichiers temporaires n'est pas fixé ici, l'absence de
résidu l'est.

> ⛔ **Ne pas employer `document.fonts.check` comme preuve.** Mesuré le 15 septembre 2026 par Claude
> Code : il rend `true` pour une police inexistante.
>
> ⛔ **Ne pas citer une police absente de la machine dans un tableau de mesure.** Le canevas retombe
> silencieusement sur son défaut et le chiffre porte alors un faux nom.

### ÉTAPE 5 — Mesurer et rendre compte

```bash
cd /mnt/c/JobDirectory/CLAUDE_PROJECTS/_WEB/lianazelPortfolio/Etude_technique
ls -1 | wc -l
sha256sum badge-linkedin-1200x630.png badge-linkedin-2400x1260.png
wc -c badge-linkedin-1200x630.png badge-linkedin-2400x1260.png
file badge-linkedin-1200x630.png badge-linkedin-2400x1260.png
```

---

## 6. Critères de recette

| # | Critère | Comment on le mesure |
|---|---|---|
| 1 | Le HTML porte l'empreinte `1f686eb9…72682aa` et **5136** octets | `sha256sum`, `wc -c` |
| 2 | Le chemin **et la version** du navigateur sont nommés | lecture du compte rendu |
| 3 | `badge-linkedin-1200x630.png` fait **1200 × 630** | `file` |
| 4 | `badge-linkedin-2400x1260.png` fait **2400 × 1260**, rendu à l'échelle | `file` |
| 5 | Les deux PNG ont des empreintes différentes entre eux | `sha256sum` |
| 6a | Route A : la pile privée de `'Segoe UI'` **et** de `system-ui` rend une largeur différente | mesure de largeur |
| 6b | Route B : le PNG rendu sans ces deux entrées a une empreinte différente du livrable | `sha256sum` |
| 7 | Aucun fichier `_tmp-*` ne subsiste, et aucun sous-dossier n'a été créé | `ls -1` |
| 8a | Le dossier de travail contient **5** objets avant le premier geste et **5** après le nettoyage, **delta 0** | `ls -1 \| wc -l` |
| 8b | Les deux PNG sont réécrits. **Deux branches, aucune n'est un échec** : voir ci-dessous | `sha256sum` |
| 9 | Aucun fichier suivi n'a changé, hormis ce prompt | `.git/refs/heads/main` lu avant et après |
| 10 | Aucune commande d'installation n'a été lancée | relecture de la trace de session |

**Le critère 8b, en détail.**

| Branche | Ce qu'elle veut dire | Ce que l'agent fait |
|---|---|---|
| empreintes **identiques** à la référence du §1 | le rendu est reproductible. Résultat attendu, gate pixel vert | il le déclare et s'arrête |
| empreintes **différentes** | ce n'est **pas** un échec : une version de navigateur différente suffit à changer l'encodage PNG sans changer un pixel visible | il rend les deux empreintes, les deux tailles en octets, la version du navigateur, et **laisse le chef de projet trancher en regardant l'image** |

**Le critère 9 se mesure par lecture de fichier, jamais par `git status`.** Une commande git lancée
par un agent laisse un `.git/index.lock` insupprimable sur cette machine.

## 7. Ce qui est livré

Les deux PNG réécrits dans le dossier de travail, et un compte rendu portant les mesures du §6.
**Aucun fichier n'est créé** : le dossier contient toujours 5 objets.

Puis, et **cela n'appartient pas à l'agent** :

1. Le chef de projet ouvre le 1200 × 630 et juge le rendu.
2. Il téléverse le 2400 × 1260 dans **Settings → Social preview** du dépôt GitHub.
3. Il téléverse le 1200 × 630 dans son post LinkedIn, et colle l'adresse du portfolio en clair dans
   le texte du post.

## 8. Le jugement du rendu n'est pas automatisable ici

`VISION_METHOD` §1 : *aucun des deux gates ne juge l'esthétique. Le jugement esthétique reste
humain.* Ce chantier applique la règle. L'agent ouvre le PNG pour une seule garde de non-vacuité,
vérifier qu'il n'est pas noir ou vide, et rien de plus.

## 9. Ce que le `_v2` a coûté

Refusé `NEEDS_WORK`, 4 fails, tous justes.

| Fail | Ce qui était faux | Corrigé par |
|---|---|---|
| C2 | Le critère 8 attendait « 3 fichiers de plus », alors que le `_v1` les avait déjà déposés. Delta réel : 0 | §1 et critère 8a, mesurés |
| C5 | Le §7 annonçait « deux PNG » quand le critère 8 en attendait trois de plus, et ce troisième était le HTML que l'ÉTAPE 0 exige déjà présent | §7 et §3 réécrits : rien n'est créé, deux fichiers sont réécrits |
| C3 | Le bloc des satellites §8.1 était absent, et la ligne `VISION` déclenchée n'était nommée nulle part | bloc « Satellites consultés » ci-dessus, douze lignes |
| C4 | La règle du premier enregistrement ne portait ni `docs(prompt):` ni le chemin complet | bloc « Règle du premier enregistrement » ci-dessus, au numéro `_v3` |

Et les deux frictions signalées en `warn`, qui auraient bloqué l'exécution :

| Friction | Corrigée par |
|---|---|
| La Route B faisait créer un dossier temporaire, donc appeler `rm -r`, qui est dans la liste `deny` | temporaires **à plat**, préfixés `_tmp-`, nettoyés par `rm _tmp-*`, §3 et ÉTAPE 4 |
| La Route A ne disait pas par quel moyen mesurer une largeur, tout en interdisant `document.fonts.check` trois lignes plus bas | `canvas.measureText` via `--dump-dom` nommé en toutes lettres, ÉTAPE 4 |

**La cause commune des deux premiers est la même que celle du critère 6 du `_v1`** : un critère écrit
sans avoir été rejoué contre l'état réel du terrain. Le `_v2` a recopié le critère 8 du `_v1` sans
remesurer le dossier après l'exécution du `_v1`. D'où le tableau « Ce que l'auteur a joué » en tête,
qui rend cette omission visible au lieu de la laisser passer.

---

*Prompt écrit par Cowork le 15 septembre 2026. Révision `_v3` après refus `NEEDS_WORK` du `_v2`.
Verrou des trois refus : 1 verdict non-SHIP inscrit pour ce sujet, il en reste deux.*
