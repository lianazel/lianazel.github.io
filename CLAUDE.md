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

Cet enrobage est la seule entrée légitime : **huit blocs éprouvent la porte, le neuvième éprouve le
site**. L'appel direct à `node scripts/check-i18n.mjs` **saute la preuve de morsure** — il sert au
diagnostic ponctuel, jamais de filet.

**Neuf contrôles bloquants** — chacun fait échouer la porte :

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
8. **Budget de largeur** — l'adresse affichée entre dans la place utile déclarée au §9. Le contrôle mesure
   **l'adresse seule** : le bouton pouvant passer sous elle, la largeur de la pastille est variable, tandis
   que l'adresse ne se coupe jamais — c'est l'**atome insécable** du bloc. Calcul en **borne haute** de
   largeur de caractère, seul sens où « ça passe » est une conclusion solide. Le budget **n'est pas recopié
   dans le script** : il est lu au §9, qui en est la source unique.
9. **Largeur des libellés de navigation** — le libellé de menu le plus long, **des deux langues**, tient
   dans la largeur utile du panneau déclarée au §9. Le contrôle mesure **un libellé seul, jamais leur
   somme** : dans le panneau les entrées s'empilent. **Il est provisoire** — la porte structurelle de
   `VISION_METHOD` couvre la même propriété en la mesurant sur un rendu réel ; le jour où ce satellite
   sera instancié (dette D-1), ce contrôle arithmétique deviendra redondant. Il **ne garantit pas** que le
   socle de la barre tienne : voir le commentaire au-dessus du contrôle, qui dit pourquoi.

**Sept gardes de non-vacuité**, qui interdisent le pire mode de défaillance — une porte **aveugle qui
reste verte** : l'extraction du texte visible doit trouver un volume plausible de suites **et** de
suites couvertes ; la liste blanche doit être chargée et non vide ; le balisage doit être équilibré,
sans quoi une balise ouverte gonfle la couverture et vide le contrôle 6 par **excès** ; chacune des
trois extractions de l'adresse doit trouver **exactement une** occurrence ; le budget du §9 doit être
lisible, faute de quoi le contrôle 8 se tairait sur un cadrage amputé ; et les libellés de navigation
doivent être trouvés, sans quoi le contrôle 9 se tairait sur un balisage remanié. Ces gardes parlent de **voix
distinctes**, à dessein : un marqueur partagé permettrait à l'une de satisfaire l'assertion de l'autre,
et une garde morte passerait inaperçue (mesuré, voir le commentaire du contrôle 7).

**Le compte se fait par chemin bloquant, jamais par contrôle.** Un contrôle qui protège son extraction
par une garde en porte deux, et c'est la garde qui meurt en silence — chacune a donc son assertion et
son témoin.

### Les 24 chemins bloquants — l'inventaire, et il est mesuré

**Mesuré le 10 août 2026**, en comptant dans le fichier : `check-i18n.mjs` porte **21 sites d'erreur**
et **3 refus de travailler** (options invalides, cible illisible), soit **24 chemins bloquants** pour
**24 assertions** dans `gate.sh`. Chacune est posée sur le **message propre** de son chemin, et
**chacune a été prouvée vivante isolément** — jamais relue.

| Famille | Chemins | Détail |
|---|---|---|
| Les neuf contrôles | **10** | la **symétrie en compte deux** : FR→EN et EN→FR sont deux branches distinctes |
| Gardes de non-vacuité | **7** | quatre sur l'extraction, une par contrôle 7, 8 et 9 |
| Structure du dictionnaire | **2** | déclaration introuvable · blocs de langue introuvables |
| Tenue de la liste blanche | **2** | fichier illisible · entrée sans motif |
| Refus de travailler | **3** | option numérique invalide · option de chemin vide · cible illisible |

> **Un compte équivalent est surveillé — mais il est déclaré dans `gate.sh`, pas ici.** Le bloc 8/9
> **compte** les chemins dans la source et les compare à **ses propres constantes**
> (`CHEMINS_ERREUR` / `CHEMINS_SORTIE`) : divergence = erreur bloquante, avec le geste à faire dans le
> message. Cette garde a son propre témoin, `compte-divergent.mjs`, sans quoi elle naîtrait invisible
> comme les autres.
>
> ⚠️ **Deux précisions, sans quoi ce paragraphe surcréditerait la porte** — et ce serait la maladie
> D-7 réintroduite dans la section même qui solde D-10 :
>
> 1. **`gate.sh` ne lit jamais ce document pour ce compte.** Le nombre du tableau ci-dessus reste un
>    nombre écrit, tenu à la main. Si les deux divergent, **rien ne rougit** : c'est le lecteur qui
>    doit le voir. La discipline du budget de largeur — un seul endroit, lu par le contrôle — n'a pas
>    été transposée ici, et ce n'est pas un oubli : le §9 est lu parce qu'il est un **contrat**, alors
>    que ce compte-ci est un **fait de la source**, dont la source est l'autorité.
> 2. **Les unités diffèrent, à dessein.** Ici : **24 chemins** = 21 sites d'erreur + **3** refus de
>    travailler. Dans `gate.sh` : 21 et **4**, parce qu'il compte les `exit(1)` du fichier, dont la
>    sortie finale de `report()` — qui n'est pas un chemin. Deux comptes justes de deux choses
>    différentes ; ne pas « corriger » l'un pour qu'il ressemble à l'autre.
>
> ⛔ **Ce que la garde ne fait pas** : elle ne prouve **pas** que le nouveau chemin soit asserté. Elle
> force un regard ; seule la campagne de neutralisation prouve, et elle est manuelle.

**Deux avertissements informatifs**, qui ne bloquent pas : clé traduite jamais utilisée (dette D-4,
quatre attendues) et entrée de liste blanche jamais utilisée.

**Ce que ce filet ne couvre pas**, et il faut le savoir : la mise en page, le rendu visuel, le
comportement sur téléphone. Aucun contrôle automatisé ne les surveille aujourd'hui — voir la dette
D-1 ci-dessous. **La validation visuelle reste entièrement humaine.** Il ne voit pas davantage une
traduction *fausse*, ni le contenu porté par un attribut (`href`, `title`, `aria-label`) : l'en-tête de
`check-i18n.mjs` énumère ces limites, et il fait autorité sur elles.

**Preuve de morsure — huit témoins** (en sept puces : la structure du dictionnaire en compte deux),
et le filet les éprouve avant le site :

- `scripts/fixtures/broken.html`, **témoin défectueux** : dix défauts semés, un par chemin qu'il
  couvre. Il doit échouer **en nommant** chacun d'eux. La **symétrie y est semée dans les deux sens** —
  `only_fr` et `only_en` : deux branches de code, deux défauts, deux assertions.
- `scripts/fixtures/blind.html`, **témoin de cécité** : page saine sur les contrôles 1 à 6 mais presque
  vide de texte, soit l'état exact que produirait une extraction cassée. Ne portant **ni adresse de
  contact ni entrée de navigation prioritaire**, il fait aussi mordre les gardes des contrôles **7 et
  9**. **Ne rien lui ajouter de tout cela** : c'est l'absence qui est utile.
- `scripts/fixtures/cadrage-sans-budget.md`, **témoin de cadrage muet** : tient lieu de `CLAUDE.md` le
  temps d'une exécution, sans le jeton d'ancrage du budget. **Ne rien y ajouter.**
- `scripts/fixtures/allowlist-sans-motif.txt`, **liste blanche mal tenue** : une entrée valide — pour
  que la liste ne soit pas vide et que le témoin prouve le bon chemin — et une entrée sans motif.
- `scripts/fixtures/dict-absent.html` et `scripts/fixtures/dict-malforme.html`, **structure du
  dictionnaire** : le premier n'a pas de déclaration, le second en a une sans blocs de langue. Deux
  chemins distincts, donc deux témoins — celui qui n'a rien ne peut pas prouver celui qui a du cassé.
- `scripts/fixtures/balisage-desequilibre.html`, **extraction non fiable** : une balise ouverte
  qu'un ancêtre emporte. Il est **séparé de `broken.html` à dessein** — une balise ouverte y rendrait
  « couvert » tout le texte suivant et éteindrait le défaut de couverture, donc l'assertion voisine.
  Un témoin qui casse la preuve d'un autre contrôle n'est pas un témoin.
- `scripts/fixtures/compte-divergent.mjs`, **compte divergent** : jamais exécuté, seulement compté.
  Il porte volontairement un nombre de chemins différent du déclaré, ce qui rend la garde du bloc 8/9
  prouvable. **Ne pas l'aligner sur le compte réel.**

Les trois **refus de travailler** n'ont besoin d'aucun fichier : trois invocations invalides suffisent.

> ⚠️ **Un témoin est lu en entier, commentaires compris.** Écrire dans un commentaire le jeton que le
> contrôle recherche le fait trouver **là**. Mesuré trois fois le 10 août 2026, dont deux témoins qui
> échouaient sur le chemin *suivant* parce que leur commentaire citait ce dont ils prouvaient
> l'absence. Les en-têtes concernés portent l'avertissement.

Un filet qui passe sur un témoin est en panne, pas en bonne santé — il doit être réparé avant toute
livraison. Et une assertion ne se relit pas : **elle se prouve**, en neutralisant son contrôle sur une
copie hors dépôt et en vérifiant que la porte rougit **en nommant ce chemin-là**.

> **Une neutralisation peut faire *passer* le témoin entier plutôt que le faire échouer autrement** —
> c'est le cas quand le chemin mort était la seule erreur de sa cible. La porte rougit alors par son
> assertion de **morsure** (« la cible est PASSEE ») et non par celle de **message**. Les deux sont
> spécifiques à leur bloc : le chemin reste prouvé. Constaté sur trois des vingt-quatre.

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
| **D-1** | **Aucune barrière sur le rendu.** Rien dans le dépôt ne détecte un débordement ou une mise en page cassée avant publication. Le satellite `VISION_METHOD` **existe** (v1.2, `TWAIM_R&D/VISION_METHOD/`) : il n'est pas absent, il n'est **pas instancié ici**. | Un défaut visuel peut atteindre la production sans être vu — **et c'est arrivé**. **Incident daté du 10 août 2026** : l'incrément E-2a a livré un menu de débordement qui ne s'armait à **aucune largeur de téléphone réel**, parce que la barre passant à la ligne, le signal `scrollWidth > clientWidth` ne pouvait rien voir de 360 à 601 px. Porte verte, revue passée, défaut visible en production sur un iPhone 14 Pro Max, dans les deux langues. La porte ne voit aucun pixel : elle ne pouvait pas l'attraper. | Instancier la porte **structurelle** de `VISION_METHOD` (géométrie, débordement, plusieurs largeurs, deux langues). Elle exige un navigateur piloté et une configuration : l'invariant de sécurité n° 1 en fait une **décision du chef de projet**, non prise à ce jour. En attendant, la mesure se fait **hors dépôt**, à la main — c'est une béquille, pas une barrière. |
| **D-2** | **Conception grand écran d'abord — il ne reste qu'une règle.** `max-width:700px` sur la grille de projets, et rien d'autre. Les rembourrages de `section` et `.contact-card` (9 août), puis la **barre de navigation** en deux passes (9 août E-2a, 10 août correctif V1), sont tous en `min-width`. **Aucune règle en `max-width` n'a été ajoutée depuis le 8 août.** | Aucun défaut visible ; écart de méthode sur la seule règle restante. | **Non soldée, mais à une règle près.** Reste la grille de projets, à inverser au prochain toucher de ce bloc. *Note de couture : les deux blocs d'enrichissement ne partagent pas le même seuil — `602px` pour la barre (pour que 601 tienne encore sur une rangée, mesuré), `601px` pour `section` et `.contact-card`. Écart d'un pixel, sans conflit de propriétés, à aligner le jour où l'un des deux est retouché.* |
| **D-3** | **Deux clés dupliquées** dans le bloc anglais du dictionnaire (`copy_btn`, `copied_msg`). Les valeurs étant identiques, l'écrasement est **sans effet visible**. | Nul aujourd'hui ; piège si les valeurs divergent un jour. | Corrigé lors de la passe d'alignement du 8 août 2026 (suppression des deux déclarations redondantes). |
| **D-4** | **Quatre clés traduites jamais utilisées** : `e7_title`, `e7_desc`, `p3_title`, `p3_desc`. Soit du contenu retiré dont la traduction est restée, soit des attributs `data-i18n` oubliés sur des éléments existants. | Nul. | À trancher au prochain toucher du contenu : rebrancher ou supprimer. Le filet de tests les signale **sans bloquer**. |
| **D-5** | **Police système non embarquée.** Le style demande `Segoe UI` sans la fournir. Sur un poste qui ne l'a pas, le navigateur retombe sur une police sensiblement plus large. | Rendu différent hors environnement Windows — **et mesures faussées** pour tout outil d'inspection tournant sous Linux. | Aucune action sur le site. **Conséquence à retenir** : toute mesure de mise en page faite ailleurs que sous Windows doit d'abord prouver quelle police a réellement été utilisée. |
| **D-6** | **Repli sur une commande dépréciée** (`document.execCommand('copy')`) dans la copie de l'adresse. | Nul — c'est un repli, le chemin moderne est prioritaire. | Retirer le jour où les navigateurs ciblés le rendent inutile. |
| **D-7** | **Le budget de largeur du §9 est déclaré, jamais mesuré.** Le contrôle 8 compare l'adresse à un nombre écrit dans ce document ; rien ne relie ce nombre aux rembourrages réels de la feuille de style. **Mesuré le 9 août 2026** : le correctif du budget de largeur annulé à 100 %, la porte reste **verte** et continue d'annoncer « 254 px disponibles » alors que la place réelle est retombée à 158. | La porte ferme la cause **aggravante** (un contenu qui s'allonge) et **pas** la cause dominante C1 du diagnostic (un rembourrage qui régresse). Un futur toucher de `section` ou `.contact-card` peut rouvrir le débordement sans qu'aucun contrôle ne rougisse. | Faire **dériver** le budget de la feuille : le contrôle lit les rembourrages réels, recalcule la place utile, et la compare au nombre du §9 — divergence = erreur bloquante. Le §9 reste la source du **contrat**, la feuille devient la source du **fait**. Piste chiffrée au §5-2 du rapport de diagnostic ; relève d'un `/ship`, pas d'un correctif (§2 « durcissement ≠ correctif »). |
| **D-8** | **Le contrôle 9 ne voit que les `<li>` porteurs de `data-nav-priority`.** Une entrée ajoutée **sans** l'attribut sort de la mesure **et** met un `NaN` dans le tri de priorité. **Mesuré le 9 août 2026** : entrée de 44 caractères ajoutée sans attribut → **380 px exigés pour 288 déclarés**, la porte annonce toujours « 4 libellé(s) » et sort en **code 0**. Et `Number(undefined)` valant `NaN`, le comparateur rend `NaN` — traité comme « égal » — d'où l'ordre de retrait `skills > exp > proj > contact` au lieu de `contact > skills > exp > proj` : **Projets quitterait la barre avant Contact**, l'inverse exact du tableau du §9. | **Bloquant pour E-2a bis / E-2b**, dont l'objet est précisément d'ajouter des entrées de navigation. Un seul attribut oublié éteint la garde et inverse la priorité, en silence. | Un **dixième contrôle** de conformité : comparer le nombre de `<li>` de `#nav-links` au nombre d'entrées porteuses d'un rang **numérique et unique**, et confronter ces rangs au tableau du §9. Divergence = erreur bloquante à voix propre, avec son défaut semé et son assertion. Et `layoutNav` doit refuser de trier sur un rang non numérique plutôt que de produire un ordre arbitraire. **À faire avant E-2b, pas après.** |
| **D-9** | ~~La garde du budget exige deux valeurs et en consomme trois.~~ | — | **Soldée le 10 août 2026.** Garde portée à `values.length < 3`, message à « trois attendues », et le repli `?? null` sur la troisième valeur retiré — il laissait croire que le panneau était facultatif. Un §9 amputé de sa troisième valeur nomme désormais le budget manquant au lieu de faire accuser un contrôle mort. |
| **D-10** | ~~Le filet compte 21 sites d'erreur pour 13 assertions.~~ | — | **Soldée le 10 août 2026**, incrément dédié. **24 chemins bloquants pour 24 assertions**, chacune sur son message propre, **chacune prouvée vivante isolément** par neutralisation sur copie hors dépôt. Le marqueur partagé `AVEUGLE` reste affiché mais **plus aucune assertion de vivacité ne s'y appuie** — il n'en subsiste qu'une mention, en garde **négative** au bloc 1/9, où un marqueur partagé est légitime parce qu'on y vérifie une **absence**. **Cinq témoins ajoutés**, une option `--allowlist=` ouverte pour donner une prise aux trois chemins qui n'en avaient aucune, et le compte des chemins est désormais **mesuré** par le bloc 8/9. Le décompte de la dette était d'ailleurs **faux par défaut** : il annonçait 21 en oubliant les trois refus de travailler. |
| **D-11** | **Deux points mineurs relevés en revue le 9 août 2026.** (a) `ResizeObserver` observe `nav`, l'élément que son propre rappel redimensionne : pas de divergence — `layoutNav` est idempotente et sa sortie ne dépend que de la largeur — mais une notification supplémentaire par franchissement de seuil, et vraisemblablement un `ResizeObserver loop completed with undelivered notifications` en console. (b) **Sans JavaScript à 320 px, les liens sont ROGNÉS, pas débordés** : `#nav-links{overflow:hidden}` est inconditionnel. | (a) bruit de console, aucun effet fonctionnel. (b) l'état sans JavaScript n'est pas pire qu'avant l'incrément — c'est exactement l'état d'avant — mais il n'est pas « propre » : le menu est le seul remède, et il exige le programme. | (a) **La cause est éteinte depuis le 10 août 2026** : le panneau étant sorti du flux (`position:absolute`), la barre ne change plus de hauteur à l'ouverture — **mesuré, elle reste à 65 px** là où elle passait à 200. L'observateur ne reçoit donc plus la notification qu'il se déclenchait à lui-même. Reste le cas du franchissement de seuil, où la hauteur change réellement : ne réagir qu'au changement de **largeur**, deux lignes. (b) rien à corriger : à énoncer justement, ce que fait la présente ligne. |
| **D-12** | **La barre occupe deux rangées de 602 px à 900 px au moins.** **Mesuré deux fois** le 10 août 2026, indépendamment, dans les deux langues : **114 px de haut contre 65**. Au-dessus du seuil, l'identité riche revient (449 px) et le droit de passer à la ligne avec elle ; une rangée complète exigerait **983 px** de fenêtre. | **C'est le défaut visible qui reste après le correctif du 10 août**, et il touche tablettes, fenêtres de bureau réduites et écrans partagés. **Préexistant** — il ne vient pas de ce correctif, qui n'a fait que le rendre net en soldant le régime téléphone. **E-2b l'aggravera** : la section « À propos » ajoutera des entrées, donc de la largeur. | Trois voies, à instruire : dégraisser l'identité riche (le détail de localisation coûte à lui seul ~293 px) · étendre le régime compact au-delà de 601 px · ou assumer les deux rangées et l'écrire comme un choix. **Hors mandat du correctif du 10 août** ; à trancher **avant E-2b**, pas après. |
| **D-13** | **L'en-tête de `scripts/fixtures/blind.html` annonce « gate.sh 2/3 »**, alors que le bloc est **2/9** depuis la session 9. La référence était **déjà fausse avant** cet incrément — le bloc était 2/4 depuis le 9 août — et l'est d'un cran de plus depuis. | Nul sur le comportement : c'est un commentaire. Trompeur pour qui lit le témoin en cherchant le bloc correspondant, et le témoin est précisément le fichier qu'on lit quand la porte se comporte mal. | Une ligne, au prochain toucher légitime des témoins. Non fait ici : `blind.html` est hors périmètre des deux incréments qui l'ont côtoyé, et une référence périmée ne justifie pas d'ouvrir un fichier protégé. |
| **D-14** | ~~La page change de contenu à la première bascule de langue.~~ | — | **Constatée le 10 août 2026, soldée le 11.** **Mécanisme** : la bascule fait `el.innerHTML = d[k]` ; tant que le visiteur n'y touche pas il lit le texte **écrit dans la page**, ensuite celui du **dictionnaire**. Six clés portaient deux textes différents — `nav_skills`, `nav_exp`, `nav_proj`, `nav_contact` (étiquettes de section empruntant les clés du menu) et `e5_desc`, `e6_desc` (descriptions écrites deux fois dans deux registres, **aucune complète**). Soldé par quatre clés neuves `tag_*` et la fusion des deux descriptions. **Ce qui reste vrai après** : rien n'empêche la classe de défaut de revenir — le texte de la page et sa valeur au dictionnaire restent **deux copies que rien ne compare**. Le contrôle de concordance est l'incrément suivant, écrit **contre un fichier déjà propre** pour qu'il ne naisse pas rouge. |
| **D-15** | **Les commentaires de la frise d'expérience sont les restes d'un ordre antérieur : 7 faux sur 10.** **Mesuré le 11 août 2026**, en confrontant chaque commentaire de bloc à l'entreprise réellement affichée. Ce ne sont **pas des étourderies isolées, c'est un miroir** : les commentaires suivent l'ordre chronologique **croissant**, les blocs s'affichent en **décroissant** — `Pyrénées Informatique` ↔ `InfoSquad`, `STEF-TFE` ↔ `Sifa Logistique`, `Toyota France` ↔ `Groupe Prenant`. S'y ajoutent **`e4_title` employée par deux blocs différents** (lignes 345 et 442 — deux postes, deux entreprises, une seule clé) et une clé de description dont le numéro ne correspond pas à son bloc. | Nul sur le rendu : rien n'est cassé, rien ne s'affiche de faux. **Trompeur au moment précis où l'on se fie aux commentaires** — c'est-à-dire quand on édite la frise. `e4_title` est plus sérieuse : c'est **exactement le couplage que D-14 vient de supprimer**, encore vivant à trois lignes du code corrigé, et il produira la même divergence silencieuse le jour où l'un des deux postes changera de titre. | **Un réalignement en bloc, pas des retouches.** Le plan initial de cette ligne budgétait « deux repères » : il était faux d'un facteur quatre et aurait fait corriger au cas par cas un défaut systématique. Au prochain toucher de la frise. Non fait ici : hors périmètre du correctif, et dissocier `e4_title` touche le dictionnaire dans les deux langues — c'est un incrément, pas une retouche au passage. |

---

## 9. Expérience utilisateur

**Cible imposée par la méthode : petit écran d'abord**, enrichi vers le grand écran.
**État réel** : l'inverse (déviation D-2). Tout **nouveau** bloc d'interface s'écrit en petit écran
d'abord, sans réécrire l'existant en bloc.

Barre de navigation, de gauche à droite : identité (initiales, nom, localisation) · liens vers
Compétences, Expérience, Projets, Contact · bouton à trois barres · bouton de bascule de langue.
La règle d'adaptation de la barre est écrite en **largeur minimale** depuis le 9 août 2026 : les
valeurs de base sont celles du téléphone, et l'on élargit au-dessus du seuil.

### Menu de débordement — ordre de priorité

Quand la place manque, les entrées quittent la barre et rejoignent un panneau replié. **Le débordement
se décide sur la place réellement disponible, jamais sur un nombre fixe d'entrées** : un seuil du type
« sous 600 px on masque trois entrées » deviendrait faux au premier libellé ajouté ou traduit.

**Ce rang fait foi ici, et le balisage s'y conforme** (`data-nav-priority`) — rang 1 = **dernière** à
quitter la barre :

| Rang | Entrée | Pourquoi ce rang |
|---|---|---|
| 1 | **Projets** | Dernière à partir : c'est là que vivra la carte du harnais, le différenciateur du portfolio. |
| 2 | **Expérience** | Trente-cinq ans de parcours : ce qu'un recruteur vient chercher. |
| 3 | **Compétences** | Première section après le hero, atteinte en un défilement. |
| 4 | **Contact** | Part en premier : **déjà redondant** — le bloc de contact est en bas de page et le hero porte un bouton « Me contacter ». Deux chemins y mènent déjà. |

> ⚠️ **Rien ne relie mécaniquement les attributs du balisage à ce tableau**, et c'est pire qu'une
> simple divergence invisible : un attribut **oublié** met un `NaN` dans le tri, ce que la comparaison
> traite comme « égal » — l'ordre de retrait redevient alors celui du document, et **Projets partirait
> avant Contact**. Le même oubli éteint le contrôle 9. **Mesuré, et bloquant pour E-2b** : voir la
> dette **D-8**.

**La barre ne passe pas à la ligne sur téléphone**, et c'est le cœur du correctif du 10 août 2026.
Tant qu'elle en avait le droit, la liste des liens descendait d'une rangée et y retrouvait sa largeur
naturelle : `scrollWidth` **égalait** `clientWidth` de 360 à 601 px, et le programme ne pouvait
structurellement voir aucun débordement — le menu ne s'armait jamais. **Une barre qui passe à la ligne
n'est plus une barre.** Le droit de passer à la ligne revient **au-dessus de 601 px**, où il est
nécessaire : l'identité riche y occupe 449 px et une rangée complète exigerait **983 px** de fenêtre.

**Sur téléphone, l'identité est réduite** : le logo `<Dev />` et son séparateur ne s'affichent pas, la
ligne de localisation non plus. Le nom complet reste. C'est la variante V1, décidée le 10 août 2026 —
motif : le logo n'apporte rien, alors que le socle dépassait de 116 px à 320.

**Sans JavaScript** : le panneau reste en flux et vide, le bouton à trois barres est masqué, et les
quatre liens demeurent dans la barre — donc, à 320 px en français, **le dernier libellé est rogné**
(`#nav-links{overflow:hidden}` est inconditionnel). Le menu est le seul remède, et il exige le programme.

### Le bouton de langue ne disparaît jamais — il rétrécit

**Invariant.** Sous le seuil, le bouton ne garde que le drapeau et deux lettres (`EN` / `FR`) au lieu
de `🇬🇧 English` / `🇫🇷 Français`. **On dégrade, on ne masque pas.**

**La raison, qui n'est pas évidente et doit rester écrite** : la langue n'est pas un réglage, c'est **la
condition pour lire quoi que ce soit**. Un visiteur anglophone arrivé sur la version française doit
pouvoir basculer **avant** d'avoir compris l'interface — donc sans avoir à deviner qu'un bouton à trois
barres cache une entrée nommée, en français, « Réglages ».

Conséquence de conception : le libellé vit en **trois morceaux** dans le dictionnaire (drapeau,
abréviation, mot), et le raccourcissement relève de la **présentation**. Aucune chaîne de langue n'est
écrite dans le programme — l'écriture directe qui doublait l'attribut de traduction a été supprimée le
9 août 2026, avant qu'elle ne devienne fausse en faisant varier ce libellé.

**Accessibilité constatée** : aucune image dans la page, donc aucun texte alternatif manquant. Les
liens portent un intitulé explicite. Le contraste du thème sombre n'a **pas** été mesuré — à faire.

### Budget de largeur (`budget-largeur`)

> ### Plancher d'écran : **360 px**, décidé le 10 août 2026
>
> Le projet vise désormais une largeur d'écran minimale de **360 px** — décision du chef de projet du
> 10 août 2026, prise avec la variante V1 de la barre. En dessous, la barre reste fonctionnelle mais
> l'identité est réduite à son strict nécessaire.
>
> **À 320 px, sous le plancher, le comportement dépend de la police — et il faut les deux bornes.**
> Une seule d'entre elles serait un mensonge partout ailleurs que sur le poste qui l'a mesurée.
>
> | Police effectivement résolue | Socle | Bouton de langue | Mesuré par |
> |---|---|---|---|
> | **`Segoe UI`** (poste Windows, ou WSL2 exposant les polices Windows) | 313 px pour 320 | entier, **7 px de marge** | Claude Code, 10 août 2026 |
> | **Police de repli** — donc **tout téléphone réel** | > 320 | **débordement de 5 px**, dans les deux langues | Tech Lead, 10 août 2026 |
>
> **Sur un téléphone à 320 px, le bouton de langue déborde donc de 5 px.** C'est une dégradation
> **datée et bornée**, sous le plancher de 360 px où elle est assumée — pas un défaut tu. Au-dessus du
> plancher, aucune des deux bornes ne déborde.
>
> **Sur pointeur grossier**, la règle `(hover:none) and (pointer:coarse)` porte le rembourrage du bouton
> à trois barres de `.45rem` à `.7rem` : mesuré, il passe de 38 à **42 px** — et non 46, car il se
> comprime. Aucun rognage supplémentaire, mais la **cible tactile est réduite de 4 px** par rapport à
> l'intention de la règle.
>
> **Preuve de police (dette D-5)** : mesure différentielle sur « CHERID Jean-Christophe » à `.82rem` —
> `Segoe UI` 155,83 px · repli générique 161,73 px · DejaVu Sans 182,36 px. Les trois diffèrent, donc
> `Segoe UI` **était bien résolue** lors de la mesure de la première borne. La dette exige cette preuve
> avant toute mesure de mise en page faite hors Windows.

### Les six états de la barre — l'énumération qui rend la prochaine campagne falsifiable

Une mesure de rendu ne vaut que par ce qu'elle **dit ne pas avoir couvert**. La barre est un composant
à états : voici les siens, sur trois axes, soit **huit combinaisons**.

| Axe | États |
|---|---|
| **Menu** | fermé · **ouvert** |
| **Langue** | français · anglais |
| **Pointeur** | fin (survol disponible) · **grossier** (tactile) |

**Deux conditions supplémentaires** ne se combinent pas comme les autres et s'énumèrent à part :
**avec / sans JavaScript** (sans lui, le menu n'existe pas et les liens sont rognés), et le **régime**
(téléphone ≤ 601 px · riche ≥ 602 px).

**Ce que la campagne du 10 août a réellement couvert** : les huit combinaisons des trois axes, à 320,
375, 430 et 601 px. **Ce qu'elle n'a pas couvert** : le comportement sans JavaScript, le clavier
(ouverture, `Échap`, retour du focus), et Safari iOS — toutes les mesures viennent d'un moteur Chromium.

> **La règle qui en découle** : un composant à états ne se mesure jamais dans un seul de ses états, et
> l'artefact de mesure **énumère les cases non couvertes** au lieu de déclarer « inchangé ». Le
> 10 août 2026, une campagne de 14 largeurs × 2 langues a manqué un défaut majeur parce qu'elle
> n'avait couvert **qu'un seul état du menu** — celui qui n'était pas cassé.
>
> ⚠️ **Les deux budgets ci-dessous restent calculés à 320 px, et c'est délibéré.** Ils deviennent une
> **marge** : leur dérivation reste vraie, aucun nombre écrit ne devient faux, et le contrôle 9 reste
> plus sévère que nécessaire. **Ne pas les « corriger » à 360 par cohérence apparente** — ce serait
> desserrer deux gardes sans rien mesurer.

Le projet vise une largeur d'écran minimale de `320px`. À cette largeur, la carte de contact offre
`254px` utiles à son contenu — c'est la place restante une fois retirés les rembourrages latéraux de
la section et de la carte, et les bordures.

**Le calcul, pour qu'il se refasse sans ouvrir la feuille** : `320 − 2×16 (section) − 2×16 (carte)
− 2×1 (bordures) = 254`. Les deux rembourrages sont les valeurs de base, en `1rem`, restaurées à
`2rem` et `3rem` au-dessus du point de rupture.

Le **panneau du menu de débordement** dispose, à la même largeur d'écran, de `289px` utiles.
**Re-dérivé le 10 août 2026**, la géométrie du panneau ayant changé : il est désormais **sorti du flux**
(`position:absolute`) et couvre toute la largeur de la barre, avec son propre rembourrage. Le calcul est
donc `320 − 2×12` (rembourrage du panneau, `.75rem`) `− 2×3,2` (rembourrage latéral des liens,
`.nav-panel a { padding:.7rem .2rem }`) = **289,6**, arrondi à l'entier inférieur.

C'est la référence du **contrôle 9**, qui vérifie qu'un libellé de navigation y tient. **Longueur
maximale admissible : 33 caractères** ; le plus long aujourd'hui, « Compétences », en fait 11.

> Ce nombre a été **recalculé, pas conservé**. L'ancienne valeur de 281 px dérivait d'un panneau qui
> vivait dans le flux de la barre ; elle serait restée « sûre » par excès, mais fausse. C'est la
> discipline que la dette **D-7** impose : un nombre déclaré doit être vrai, pas seulement prudent.

**Ces trois nombres** — largeur d'écran minimale, place utile dans la carte, place utile dans le
panneau — sont lus ici même par les contrôles 8 et 9.

**Ces nombres sont la référence des contrôles 8 et 9**, qui les lisent ici même plutôt que de
les recopier — une valeur écrite à deux endroits finit toujours par diverger.

> ⚠️ **Ce sont un contrat, pas une mesure.** Rien ne relie ces nombres aux rembourrages réels de la
> feuille de style : le contrôle 8 fait confiance à ce qui est écrit ici. **Les recalculer à la main
> après tout toucher de `section` ou de `.contact-card`** — c'est la dette **D-7**, et elle a été
> mesurée : correctif CSS annulé, la porte reste verte en annonçant toujours 254 px.

**Le sens de dérivation est inverse de l'intuition et il ne se renverse pas** — le budget découle de
la mise en page, jamais du contenu du jour. Si un contenu n'entre pas dans le budget, c'est la mise en
page qu'on corrige, pas le budget qu'on desserre : un budget ajusté au cas qu'il doit surveiller ne
surveille plus rien.

**Marge disponible, à connaître avant de changer d'adresse** : l'adresse actuelle exige 235,55 px, il
reste **18,45 px**. La plus longue adresse admissible sous ce budget fait **27 caractères**. Au-delà,
le §9 prescrit de corriger la mise en page — mais les rembourrages sont déjà à `1rem` et il n'y a plus
grand-chose à reprendre sans toucher la carte elle-même.

**Limite du modèle** : tous les rembourrages sont en `rem`. Si l'utilisateur agrandit la police par
défaut de son navigateur, le besoin croît **et** la place décroît, tandis que le budget reste en
pixels fixes. Le contrôle 8 est aveugle à ce cas.

*Établi le 9 août 2026, après le diagnostic du débordement de la pastille de contact. Avant ce
correctif, la même mesure donnait **158 px** — la moitié de l'écran partait en rembourrage constant,
et la pastille en réclamait 290 au minimum.*

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
  comparaison de références en direct fait foi ;
  (4) **ce qu'affiche un navigateur est un artefact ; ce que sert le serveur est la référence.**

### La règle (4), et l'incident qui l'a produite

**10 août 2026.** Le correctif de la barre mobile venait d'être publié. Sur un iPhone réel, la barre
affichait toujours l'ancien comportement — logo présent, localisation présente, trois rangées. Un
quart d'heure de doute avant de comprendre : **le site publié était à jour, c'était Safari qui servait
sa copie en cache.**

Ce qui a tranché n'est pas une intuition, c'est une **récupération directe** de
`https://lianazel.github.io/index.html`, où les règles de la version publiée étaient bien présentes.
Et un second signal, indépendant : la localisation s'affichait **sans son détail** — combinaison qui
n'existe que dans la version précédente, jamais dans la nouvelle.

**C'est exactement la règle (3), un cran plus loin.** Là, l'artefact trompeur était un fichier de
`.pipeline/` ; ici, c'est l'écran d'un téléphone. Dans les deux cas, **quelque chose s'interpose entre
le fait et ce qu'on en voit** — un rapport écrit hier, ou un cache.

**En pratique** : avant de conclure qu'une publication n'a pas pris, récupérer la page servie et y
chercher un **marqueur de la version attendue** — une règle, une classe, une valeur qui n'existait pas
avant. Et pour lever un doute sur un appareil, ouvrir l'adresse avec une chaîne de requête
(`…/?v=2`) : c'est non destructif, et ça force une récupération neuve.

> **Le piège est d'autant plus vicieux qu'il ressemble à un défaut réel.** Une capture d'écran qui
> montre l'ancien comportement est indiscernable d'une régression — sauf si l'on va lire ce que le
> serveur envoie vraiment.

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

*Version du projet : **0.6.0** · Cadrage rédigé le 8 août 2026 · Méthode v2.27.*
