# CLAUDE.md — lianazel.github.io (Portfolio JC Cherid)

> **Fichier de cadrage du projet.** Source de vérité pour les agents.
> Rédigé en **mode brownfield** : il **décrit ce qui existe**, il ne prescrit pas une cible idéale.
> Toute règle inscrite en invariant a été **vérifiée sur le code** le 8 août 2026.
> Ce qui n'est pas respecté aujourd'hui vit en § « Déviations connues », jamais en invariant.

---

## 1. Identité

| | |
|---|---|
| **Projet** | `lianazel.github.io` — portfolio professionnel de Jean-Christophe Cherid |
| **Nature** | site vitrine statique, **page unique** |
| **Dépôt** | `https://github.com/lianazel/lianazel.github.io` — branche `main` |
| **Hébergement** | GitHub Pages (publication directe depuis `main`, aucune étape de construction) |
| **Public visé** | recruteurs et clients potentiels, en français et en anglais |
| **Version** | voir le fichier `VERSION` à la racine et le pied de ce document |

---

## 2. Méthode de travail & agents

Ce projet applique la **Méthode de travail IA v2.27** (`TEC_IA_TWAIM_CORE.md`) et ses satellites.
Pour les détails **de ce projet** (architecture, sécurité, conventions), **le présent document prévaut**.

> **Référentiel central** : `C:\JobDirectory\CLAUDE_PROJECTS\_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY\Etude_technique`
> — commencer par `00_START_ICI.md`.

**Historique de rattachement** : le projet a été créé **avant** l'existence du harnais de travail. Il y a
été rattaché le 8 août 2026 par une passe d'alignement unique (rituel « projet existant »), et non par
les deux portes d'amorçage réservées aux projets neufs.

### Protocole diagnostic-avant-correctif (règle absolue)

Jamais de correction à l'aveugle. Anomalie non triviale (reproduite, présente sur plusieurs navigateurs,
liée au réseau) → `/diagnose` (lecture seule, produit un rapport de diagnostic) **puis** `/fix`.
Les corrections triviales (faute de frappe, valeur de couleur) se font directement.

**Durcissement ≠ correctif.** Une amélioration sans anomalie préexistante relève d'une évolution
(`/ship`), pas d'un correctif (`/fix`).

### Commandes (`.claude/commands/`)

`/ship` · `/diagnose` · `/fix` · `/land` · `/session-start`.
Ce projet est **équipé de `/land`** : `/session-close` y est **désactivée** et renvoie vers `/land`.

### Agents en lecture seule (`.claude/agents/`)

- `diagnostician` — phase de diagnostic, ne modifie rien.
- `reviewer` — revue contre les six engagements ; verdict `SHIP` / `NEEDS WORK` / `BLOCK`.
  Le `BLOCK` est un droit de veto argumenté, que le chef de projet peut lever explicitement.

**Prompts minces** : les agents lisent le présent document comme source de vérité, ils n'y recopient
pas les règles. **Aucun agent ne fusionne ni ne publie** : le chef de projet valide, puis publie
lui-même. La validation visuelle et comportementale lui appartient.

---

## 3. Architecture réelle

**Tout le site tient dans un seul fichier** : `index.html`, 891 lignes.

| Zone | Lignes | Contenu |
|---|---|---|
| Métadonnées | 1–6 | `<html lang="fr">`, jeu de caractères, cadrage d'affichage mobile |
| Feuille de style | 7–127 | intégralement **dans la page**, aucun fichier `.css` séparé |
| Corps | 129–610 | barre de navigation + 5 sections + pied de page |
| Programme | 611–889 | intégralement **dans la page**, aucun fichier `.js` séparé |

**Sections du corps**, dans l'ordre : `#hero` · `#skills` · `#experience` · `#projets` · `#contact`,
puis le pied de page. La barre de navigation pointe vers quatre d'entre elles.

**Palette** : définie par variables CSS dans `:root` (`--c1` à `--c4` et leurs variantes douces,
`--dark`, `--card`, `--text`, `--sub`). Thème sombre unique, pas de bascule clair/sombre.

**Bascule de langue** : un dictionnaire `t` à deux entrées (`fr`, `en`) porte **132 clés déclarées**
dans chaque langue, pour **126 utilisées** dans la page. L'écart de six se décompose en quatre
traductions orphelines (dette D-4) et deux clés lues par le programme lui-même (`langBtn`,
`copied_msg`), sans attribut correspondant. Chaque
élément traduisible porte un attribut `data-i18n="<clé>"` ; la fonction `toggleLang()` parcourt ces
éléments et remplace leur contenu. La langue par défaut est le français, et `document.documentElement.lang`
est mis à jour à chaque bascule.

**Animation d'apparition** : un `IntersectionObserver` ajoute la classe `visible` aux éléments `.reveal`
lorsqu'ils entrent dans la zone visible.

**Copie de l'adresse électronique** : `copyEmail()` utilise l'interface presse-papiers moderne, avec un
repli sur l'ancienne commande d'exécution pour les navigateurs qui ne la proposent pas.

---

## 4. Sécurité telle qu'appliquée

**Le point fort du projet, et il est réel : zéro dépendance externe.**

- Aucune bibliothèque chargée depuis un réseau de diffusion de contenu, aucun paquet, aucun gestionnaire
  de paquets. La surface d'attaque par la chaîne d'approvisionnement est **nulle**.
- Aucun appel réseau au chargement : aucune interface de programmation distante n'est consultée.
- Aucun secret dans le dépôt. Les seules données personnelles présentes sont **publiques par
  destination** : adresse électronique de contact, profil professionnel en ligne, dépôts publics.

### Invariants de sécurité (vérifiés le 8 août 2026)

1. **Aucune dépendance externe ne doit être introduite** sans décision explicite du chef de projet.
   Toute nouvelle dépendance déclenche l'application de `SECURITY_METHOD` §3.3 : version exacte,
   publiée depuis plus de 72 heures, installation sans exécution de scripts, audit.
2. **Aucune ressource chargée depuis un domaine tiers** (police, script, feuille de style). Si cela
   devait changer, le contrôle d'intégrité de sous-ressource devient obligatoire.
3. **Aucun secret**, aucune clé, aucun jeton dans le dépôt — le dépôt est **public**.
4. **Aucune saisie utilisateur n'est traitée** : le site n'a ni formulaire, ni champ de recherche, ni
   paramètre d'adresse interprété. Cet invariant tombe dès qu'un formulaire est ajouté ; à ce
   moment-là, validation des entrées et échappement des sorties deviennent obligatoires.

---

## 5. Conventions observées

- **Langue du code** : anglais (identifiants, noms de fonctions). **Commentaires** : français.
- **Interface** : bilingue français/anglais, dictionnaire fermé.
- **Style** : déclarations CSS compactes, souvent sur une seule ligne, regroupées par bloc commenté
  en majuscules (`/* NAV */`, `/* IDENTITY */`…). Cette forme est **volontaire** et cohérente sur
  tout le fichier — ne pas la reformater au passage.
- **Messages d'enregistrement** : format conventionnel (`feat:`, `fix:`, `docs:`, `chore:`).

---

## 6. Filet de tests

Ce projet **n'a aucun cadre de test tiers**, et n'en a pas besoin : il n'y a ni construction, ni
paquet, ni serveur. Le filet est constitué de **contrôles écrits en JavaScript natif**, exécutés par
l'interpréteur déjà présent sur la machine.

**Commande** : `bash scripts/gate.sh`

Cet enrobage est la seule entrée légitime : il éprouve d'abord les deux témoins, puis le site.
L'appel direct à `node scripts/check-i18n.mjs` **saute la preuve de morsure** — il sert au diagnostic
ponctuel, jamais de filet.

**Sept contrôles bloquants** — chacun fait échouer la porte :

1. **Complétude du dictionnaire** — toute clé `data-i18n` présente dans la page possède une
   traduction en français **et** en anglais. Une clé manquante afficherait du texte non traduit à un
   recruteur : c'est le défaut le plus coûteux du projet.
2. **Symétrie** — aucune clé présente dans une langue et absente de l'autre.
3. **Absence de doublon** — une clé déclarée deux fois dans la même langue est silencieusement écrasée
   par la seconde déclaration.
4. **Intégrité des ancres** — chaque lien interne de la barre de navigation pointe vers une section
   qui existe réellement.
5. **Attribut de traduction vide** — un `data-i18n=""` ne désigne aucune clé et ne serait jamais traduit.
6. **Couverture du texte visible** — tout texte visible de la page est **soit** couvert par un attribut
   `data-i18n`, **soit** composé uniquement de termes inscrits dans la liste blanche
   `scripts/i18n-allowlist.txt` (104 entrées, chacune avec son motif écrit). Y ajouter un terme est un
   geste conscient et tracé, jamais un contournement silencieux.
7. **Cohérence de l'adresse de contact** — les trois occurrences d'`index.html` (lien `mailto:`, texte
   affiché, constante de `copyEmail()`) portent la même adresse. Le contrôle **ne connaît aucune adresse
   en dur** : il les compare entre elles, sans quoi il deviendrait faux au prochain changement.

**Deux gardes de non-vacuité**, qui interdisent le pire mode de défaillance — une porte **aveugle qui
reste verte** : l'extraction du texte visible doit trouver un volume plausible de suites, et chacune des
trois extractions de l'adresse doit trouver **exactement une** occurrence. Ces deux gardes parlent de
voix distinctes, à dessein : un marqueur partagé permettrait à l'une de satisfaire l'assertion de
l'autre, et une garde morte passerait inaperçue (mesuré, voir le commentaire du contrôle 7).

**Deux avertissements informatifs**, qui ne bloquent pas : clé traduite jamais utilisée (dette D-4,
quatre attendues) et entrée de liste blanche jamais utilisée.

**Ce que ce filet ne couvre pas**, et il faut le savoir : la mise en page, le rendu visuel, le
comportement sur téléphone. Aucun contrôle automatisé ne les surveille aujourd'hui — voir la dette
D-1 ci-dessous. **La validation visuelle reste entièrement humaine.** Il ne voit pas davantage une
traduction *fausse*, ni le contenu porté par un attribut (`href`, `title`, `aria-label`) : l'en-tête de
`check-i18n.mjs` énumère ces limites, et il fait autorité sur elles.

**Preuve de morsure — deux témoins**, et le filet les éprouve avant le site :

- `scripts/fixtures/broken.html`, **témoin défectueux** : sept défauts semés, un par contrôle bloquant.
  Il doit échouer **en nommant** chacun d'eux — `gate.sh` porte une assertion par contrôle, posée sur
  le **message propre** du contrôle et jamais sur un identifiant nu.
- `scripts/fixtures/blind.html`, **témoin de cécité** : page saine sur les contrôles 1 à 6 mais presque
  vide de texte, soit l'état exact que produirait une extraction cassée. Il doit échouer **pour cécité**.
  Ne portant aucune adresse de contact, il fait aussi mordre la garde du contrôle 7 — et c'est ce qui
  rend cette garde prouvable : `gate.sh` 2/3 assied dessus sa seconde assertion.

Un filet qui passe sur un témoin est en panne, pas en bonne santé — il doit être réparé avant toute
livraison. Et une assertion ne se relit pas : **elle se prouve**, en neutralisant son contrôle sur une
copie hors dépôt et en vérifiant que la porte rougit.

---

## 7. Anti-patterns observés — à ne pas introduire

- **Ne pas découper le fichier unique sans mandat explicite.** La page unique est un choix cohérent
  avec l'hébergement (publication directe, aucune étape de construction). Un découpage en fichiers
  séparés est une évolution à décider, pas un nettoyage à faire au passage.
- **Ne pas introduire de bibliothèque** pour un besoin que quinze lignes de JavaScript natif couvrent.
  Le projet en est la démonstration : animation d'apparition, bascule de langue et copie presse-papiers
  sont écrites à la main, sans dépendance.
- **Ne pas reformater la feuille de style.** Le style compact est une convention du projet.
- **Ne pas ajouter de clé de traduction dans une seule langue.** Le dictionnaire est fermé ; un oubli
  n'est pas un manque discret, c'est une erreur qui doit sauter aux yeux — et le filet de tests la voit.
- **Ne pas retirer l'attribut `lang` de la balise racine** ni sa mise à jour à la bascule : c'est ce
  qui permet aux lecteurs d'écran de prononcer correctement le contenu.

---

## 8. Déviations connues et dette assumée

Ces points **ne sont pas des invariants** : le code ne les respecte pas aujourd'hui, et les inscrire
comme règles produirait des alertes sur du code parfaitement sain.

| # | Déviation | Impact | Plan de remboursement |
|---|---|---|---|
| **D-1** | **Aucune barrière sur le rendu.** Rien ne détecte un débordement ou une mise en page cassée avant publication. | Un défaut visuel peut atteindre la production sans être vu. | Poser une barrière de rendu (satellite `VISION_METHOD`, palier local). **Décision reportée par le chef de projet le 8 août 2026** — à reprendre. |
| **D-2** | **Conception grand écran d'abord.** Les deux règles d'adaptation sont écrites en largeur **maximale** (`max-width: 600px` et `700px`), donc en dégradation depuis le grand écran. La méthode impose l'inverse. | Aucun défaut visible constaté ; écart de méthode. | Inverser le sens des règles d'adaptation au prochain toucher significatif de la feuille de style. Ne pas le faire en bloc. |
| **D-3** | **Deux clés dupliquées** dans le bloc anglais du dictionnaire (`copy_btn`, `copied_msg`). Les valeurs étant identiques, l'écrasement est **sans effet visible**. | Nul aujourd'hui ; piège si les valeurs divergent un jour. | Corrigé lors de la passe d'alignement du 8 août 2026 (suppression des deux déclarations redondantes). |
| **D-4** | **Quatre clés traduites jamais utilisées** : `e7_title`, `e7_desc`, `p3_title`, `p3_desc`. Soit du contenu retiré dont la traduction est restée, soit des attributs `data-i18n` oubliés sur des éléments existants. | Nul. | À trancher au prochain toucher du contenu : rebrancher ou supprimer. Le filet de tests les signale **sans bloquer**. |
| **D-5** | **Police système non embarquée.** Le style demande `Segoe UI` sans la fournir. Sur un poste qui ne l'a pas, le navigateur retombe sur une police sensiblement plus large. | Rendu différent hors environnement Windows — **et mesures faussées** pour tout outil d'inspection tournant sous Linux. | Aucune action sur le site. **Conséquence à retenir** : toute mesure de mise en page faite ailleurs que sous Windows doit d'abord prouver quelle police a réellement été utilisée. |
| **D-6** | **Repli sur une commande dépréciée** (`document.execCommand('copy')`) dans la copie de l'adresse. | Nul — c'est un repli, le chemin moderne est prioritaire. | Retirer le jour où les navigateurs ciblés le rendent inutile. |

---

## 9. Expérience utilisateur

**Cible imposée par la méthode : petit écran d'abord**, enrichi vers le grand écran.
**État réel** : l'inverse (déviation D-2). Tout **nouveau** bloc d'interface s'écrit en petit écran
d'abord, sans réécrire l'existant en bloc.

Barre de navigation actuelle, de gauche à droite : identité (initiales, nom, localisation) · liens
vers Compétences, Expérience, Projets · bouton de bascule de langue. En dessous de 600 pixels de
largeur, le détail de localisation disparaît et les espacements se resserrent — c'est le comportement
de débordement voulu, et le bouton de langue ne disparaît jamais.

**Accessibilité constatée** : aucune image dans la page, donc aucun texte alternatif manquant. Les
liens portent un intitulé explicite. Le contraste du thème sombre n'a **pas** été mesuré — à faire.

---

## 10. Passation pour revue

- **Prompts du Tech Lead vers Claude Code** : dans `prompts/v<version mineure>/`, préfixés par leur
  type (`AUDIT`, `CORRECTIF`, `EVOL`, `CHORE`, `SPIKE`). Ce dossier est **enregistré dans le dépôt** :
  relecture anti-secret obligatoire avant tout enregistrement.
- **Artefacts de travail** dans `.pipeline/` (ignoré par le contrôle de version) : `spec.md`,
  `changes.md`, `test-results.md`, `review.md`, rapports de diagnostic.
- **Revue sans capture d'écran.** Le Tech Lead a accès au dépôt en lecture : il revoit le code en
  **ouvrant les fichiers**. Au dernier geste d'un `/ship` ou d'un `/fix`, Claude Code écrit
  `.pipeline/STATUS.md` avec une ligne unique
  `READY — étape <N> — <horodatage> — <branche> — tests <X/Y>`. C'est le feu vert de revue.
- **Règles de lecture côté Tech Lead** : (1) lire seulement après clôture, jamais pendant ;
  (2) vérifier l'incrément **par le contenu** du fichier, jamais par sa date de modification ;
  (3) l'état de publication vers le dépôt distant ne se déduit **jamais** d'un artefact — seule une
  comparaison de références en direct fait foi.

---

## 11. Séquence de fin d'incrément

1. **Claude Code** — `/ship` ou `/fix` : enregistrement sur la branche de travail + `STATUS = READY`.
2. **Tech Lead** — revue contre les six engagements → verdict.
3. **Chef de projet** — accord, puis **Claude Code** `/land <branche>` : fusion, filet de tests vert,
   incrément de version, journal, `STATUS = CLOSED`, enregistrement de clôture, **arrêt avant publication**.
4. **Chef de projet** — `git push origin main`.
5. **Chef de projet** — suppression de la branche fusionnée.
6. **Tech Lead** — clôture de session, **uniquement** une fois la publication faite.

---

*Version du projet : **0.2.1** · Cadrage rédigé le 8 août 2026 · Méthode v2.27.*
