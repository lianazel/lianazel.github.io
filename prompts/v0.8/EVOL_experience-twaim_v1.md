# EVOL — La frise nomme enfin ce qui fait la différence

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : **v1** · **Date** : 12 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Ton premier geste est de l'enregistrer comme
> **premier commit de ta branche**, message `docs:`, attribution au Tech Lead. Jamais sur `main`.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué, ou pourquoi il est écarté |
|---|---|---|---|
| `STYLE_METHOD` | **1.1** | **Appliqué, et c'est le cœur du prompt** | **S-1** : aucun tiret cadratin dans le texte créé, sans exception. **S-2** : aucune affirmation sur soi, chaque phrase porte un fait ou un lien. **S-4** : le terme *harness engineering* est employé en anglais des deux côtés, et posé en français par une phrase qui dit qu'il est peu répandu ici. Le projet épingle la méthode v2.27 et le satellite est né en v2.28 : son contrat de ponctuation entrera au cadrage par l'incrément de montée de version, mais rien n'empêche de l'appliquer au texte neuf. |
| `UX_METHOD` | 1.1 | **Appliqué** | Un bloc entier s'ajoute en tête de frise, dans les deux langues. C'est le seul endroit où la cible petit écran est engagée (§7). |
| `SECURITY_METHOD` | 1.6 | **Appliqué sur deux points** | Aucune dépendance, aucun secret, aucun appel réseau au chargement. Les trois liens externes reprennent la convention déjà en place sur les treize liens existants : nouvel onglet et protection contre la page appelante. Et un **arbitrage de confidentialité** structure le §3. |
| `VISION_METHOD` | 1.2 | **Consulté, non instancié** | Dette **D-1**. Ce bloc allonge la frise et aucune mesure automatique ne le verra. La validation visuelle reste humaine, désormais outillée par la compétence d'aperçu par tunnel. |
| `ASSURANCE_METHOD` | 1.2 | **Consulté, écarté** | Aucune porte créée ni modifiée. Les contrôles 1 à 6 couvrent les clés neuves sans rien changer au filet. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Objectif, et il vient d'une mesure

**Le mot TWAIM n'apparaît nulle part dans le texte visible de la page.** Mesuré le 12 août 2026 sur
`index.html` à `9add85b` : une seule occurrence dans tout le fichier, et elle est dans un commentaire
de programme.

Le harnais est le différenciateur du portfolio. La page vend la modernisation IBM i depuis deux
incréments, la carte de compétences annonce du développement assisté par l'IA, et **rien ne dit que
tout cela est conduit par une méthode écrite**. Ce prompt comble ce trou, et un seul.

**Il ne touche à rien d'autre.** Ni au profil, ni au hero, ni au bloc « ce que je cherche », ni au
paragraphe de positionnement IBM i. Ceux-là forment l'incrément éditorial qui suivra.

---

## 2. Périmètre

- `index.html` : **un nouveau bloc `.exp`**, placé **en première position** de la frise, plus **onze
  clés** dans **chacun** des deux blocs de langue du dictionnaire.
- `scripts/i18n-allowlist.txt` : **deux entrées**, chacune avec son motif écrit.
- `CLAUDE.md` : **le seul nombre du §6** qui compte les entrées de la liste blanche.

> **Dérogation explicite, écrite d'avance.** `scripts/i18n-allowlist.txt` est un **registre de
> contenu**, pas une logique de porte. Il entre au périmètre pour la même raison qu'à l'incrément
> précédent. La mécanique du filet — `gate.sh`, `check-i18n.mjs`, les témoins et les fixtures —
> reste **rigoureusement interdite**.

---

## 3. Hors périmètre, ne pas y toucher

Les autres blocs d'expérience · la section Projets · les cartes de compétences, **y compris
l'étiquette `4 projets livrés`** qui relève de l'incrément éditorial · la barre de navigation · la
feuille de style · la mécanique du filet · **D-1, D-8, D-12, D-13, D-15, D-16, D-17, D-18** ·
`tasks/ROADMAP.md` · **les tirets cadratins déjà présents**, qui font l'objet d'un chantier distinct.

> **Aucun nombre de projets dans le texte créé.** Décision du chef de projet du 12 août 2026 : un
> compte de projets se périme à chaque projet, donc il ne monte pas sur la page. N'écris ni « trois
> projets », ni « quatre », ni aucune variante.

> **Aucune mention d'un dépôt privé.** Décision du 10 août 2026, confirmée le 12. Un lien qu'un
> lecteur ne peut pas ouvrir est une impasse. Si un projet n'est pas consultable, il ne figure pas.

> **La mémoire à deux niveaux ne s'attribue pas.** Le registre de leçons local et global est un
> mécanisme de la plateforme Claude Code, pas une pièce conçue par le chef de projet. Elle n'entre pas
> dans le texte, sous aucune formulation.

---

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. `main` est à jour avec son distant : `git rev-list --left-right --count main...origin/main` = `0 0`.
2. `VERSION` vaut `0.8.0`, donc ce prompt appartient bien à `prompts/v0.8/`.
3. Les **onze** clés `e13_title`, `e13_desc`, `x73` à `x78`, `y331`, `y332`, `y333`
   **n'existent dans aucun des deux blocs de langue**. Si l'une existe déjà, arrête-toi.
4. Le premier `.exp` du document est celui dont l'entreprise est `InfoSquad — Groupe InfoGones PCSoft`.
   C'est **avant lui** que le nouveau bloc s'insère.
5. `bash scripts/gate.sh` sort en code 0 avec **exactement 4 avertissements** avant toute modification.

---

## 5. Le bloc à créer

Il se construit **exactement comme ses voisins** : mêmes classes, mêmes styles en ligne, aucune classe
et aucune couleur nouvelle. Copie la structure du bloc Talentia, qui porte déjà une sous-carte.

### P1 · L'en-tête

| Élément | Clé | Français | Anglais |
|---|---|---|---|
| Titre | `e13_title` | `Conception du harnais de travail TWAIM` | `Building the TWAIM harness` |
| Entreprise | `x77` | `🧭 Projet personnel · Auto-formation intensive à Claude Code` | `🧭 Personal project · Self-taught on Claude Code` |
| Dates | `x73` | `Fév 2026 – Aujourd'hui` | `Feb 2026 – Present` |

La ligne d'entreprise porte un **point médian**, pas un cadratin. Les dates portent un **demi-cadratin**
de plage, comme les onze autres blocs : il ne se touche pas.

### P2 · Le paragraphe

Clé `e13_desc`.

**Français**

> Auto-formation intensive à Claude Code, et conception depuis zéro d'un harnais de travail avec l'IA.
> Deux agents aux rôles séparés, celui qui conçoit et celui qui exécute. Une méthode écrite avant le
> code, et des règles qui s'exécutent au lieu de se relire. Une pratique nommée
> <em>harness engineering</em> dans les pays anglophones, encore peu répandue en France.

**Anglais**

> Intensive self-directed learning of Claude Code, and the design from scratch of a working harness for
> AI. Two agents with separate roles, the one that designs and the one that executes. A method written
> before the code, and rules that run instead of being re-read. This is harness engineering.

> ⚠️ **« Auto-formation », pas « formation », et le mot compte.** Le chef de projet n'a été formé par
> aucun organisme : il a appris en lisant la littérature technique et en pratiquant. Correction du
> 12 août 2026. **Ne pas raccourcir en « Formation »** : ce serait faux, et ce serait plus faible.
> Le trait d'union d'« auto-formation » est un **trait d'union orthographique**, interne à un mot. Il
> n'entre dans aucun compte de ponctuation et ne se remplace pas.

**La dernière phrase diffère volontairement d'une langue à l'autre**, et c'est la règle S-4 appliquée.
Côté anglais, le terme désigne une discipline installée : on l'emploie sans précaution. Côté français,
il ne se pose sur rien, donc on le nomme et l'on dit qu'il est peu répandu ici. **Le retard du marché
devient la preuve de l'avance.** Ne pas « harmoniser » ces deux phrases.

### P3 · Les trois réalisations

Trois sous-cartes, dans cet ordre, construites comme celles du bloc Talentia.

| # | Titre | Clé du titre | Description | Clé |
|---|---|---|---|---|
| 1 | `🧭 Le harnais TWAIM` / `🧭 The TWAIM harness` | `x74` | voir ci-dessous | `y331` |
| 2 | `🔍 Ce site est construit sous ce harnais` / `🔍 This site is built under this harness` | `x75` | voir ci-dessous | `y332` |
| 3 | `📈 MetalWatch, suivi des cours mondiaux des métaux` / `📈 MetalWatch, world metal price tracking` | `x76` | voir ci-dessous | `y333` |

**`y331`, français**

> Méthode centrale et documents satellites, deux rôles séparés entre celui qui conçoit et celui qui
> exécute, portes de tests exécutables avec témoin volontairement défectueux, registre de décisions et
> prompts versionnés. Les prompts circulent par un canal dédié : deux dossiers qui font office de boîte
> aux lettres entre l'architecte et l'agent d'exécution, où rien ne s'écrase jamais et où un refus se dit.

**`y331`, anglais**

> A core method and its satellite documents, two separate roles between the one who designs and the one
> who executes, executable test gates with a deliberately broken fixture, a decision register and
> versioned prompts. Prompts travel through a dedicated channel: two folders acting as a mailbox between
> the architect and the execution agent, where nothing is ever overwritten and a refusal is stated.

**`y332`, français**

> **Le dépôt de ce site** est public. Les prompts de chaque incrément, le journal de session, le registre
> des leçons et la porte de tests s'y lisent. La méthode se vérifie sur pièces plutôt que sur parole.

**`y332`, anglais**

> **This site's repository** is public. The prompts for every increment, the session journal, the lessons
> register and the test gate can all be read there. The method is verifiable on evidence rather than on
> claims.

> 🚫 **Interdiction, et elle est absolue.** Le dépôt du **harnais** est **privé**. Aucune phrase de ce
> bloc ne doit pouvoir se lire comme si le harnais lui-même était consultable. C'est pourquoi le sujet
> de la première phrase est **ce site**, nommé explicitement, et non « le dépôt ». Ne réécris pas cette
> phrase en la raccourcissant : l'ambiguïté qu'elle évite est exactement celle que le chef de projet a
> relevée le 12 août 2026.

**`y333`, français**

> Tâche planifiée hébergée sur Supabase alimentant une base PostgreSQL, depuis l'interface metals.dev.

**`y333`, anglais**

> A scheduled job hosted on Supabase feeding a PostgreSQL database, from the metals.dev interface.

### P4 · Les trois liens, et ils vivent DANS les valeurs

**Chaque lien est écrit à l'intérieur de la valeur `y` de sa sous-carte**, en fin de description. Pas
de clé de libellé séparée, pas d'attribut posé dans le corps de la page.

**Pourquoi, et ce n'est pas un détail de style.** La bascule de langue remplace le **contenu** des
éléments porteurs d'un attribut de traduction. Elle ne touche **aucun attribut**, donc elle ne peut pas
changer une adresse. Or l'adresse de la présentation du harnais **doit changer avec la langue** :

| Sous-carte | Adresse française | Adresse anglaise | Libellé |
|---|---|---|---|
| 1 | `https://twaim-web.vercel.app/` | `https://twaim-web.vercel.app/en` | `Voir la présentation` / `See the presentation` |
| 2 | `https://github.com/lianazel/lianazel.github.io` | identique | `Voir le dépôt` / `See the repository` |
| 3 | `https://metalwatch-delta.vercel.app/` | identique | `Voir le site` / `See the site` |

En plaçant l'ancre complète dans la valeur, **l'adresse devient une donnée traduisible comme le reste**,
et la bascule la change sans qu'une seule ligne de programme soit modifiée. Le patron existe déjà dans
la page : les valeurs `y326` et `y327` encadrent un lien de cette manière.

**Convention obligatoire, déjà appliquée par les treize liens existants** : ouverture dans un nouvel
onglet et protection contre la page appelante, écrites dans la valeur elle-même. Aucun des trois n'est
chargé au démarrage : ce sont des liens, pas des ressources. L'invariant de sécurité n° 2 du cadrage
reste intact.

> ⚠️ **Le filet ne voit pas les adresses.** L'en-tête de `check-i18n.mjs` énonce cette limite : le
> contenu porté par un attribut échappe aux contrôles. Les deux adresses de la sous-carte 1 doivent donc
> être **vérifiées à l'œil**, dans les deux langues, et ce point figure explicitement dans la validation
> humaine due au chef de projet.

### P5 · Les étiquettes

Cinq, dans cet ordre, en `class="exp-tag"` comme celles des autres blocs :

`Claude Code` · `Supabase` · `PostgreSQL` · `Vercel` · `Harness engineering`

Les quatre premières sont des noms de produits, identiques dans les deux langues, donc sans clé.
**`Harness engineering` porte une clé, `x78`, avec la même valeur des deux côtés** : c'est un choix de
vocabulaire assumé, pas un oubli de traduction, et la clé le rend explicite. Le précédent maison est
`ia1`, qui porte « Architecture & specs » dans les deux blocs.

---

## 6. La liste blanche

Deux entrées à ajouter, chacune avec son motif, dans la zone des noms de produits :

```
Supabase           # plateforme d'hebergement, nom de produit
Vercel             # plateforme d'hebergement, nom de produit
```

`Claude`, `Code` et `PostgreSQL` y figurent déjà : ne les redouble pas.

**Puis mets à jour le seul nombre du §6 du `CLAUDE.md`**, qui annonce aujourd'hui 103 entrées. Compte-les
plutôt que de faire 103 + 2 : le nombre doit être **mesuré**, et sa règle de comptage est les lignes dont
le premier caractère n'est ni un dièse ni une espace.

---

## 7. Ce qui doit rester vrai après

- **Aucun tiret cadratin dans le texte créé.** Zéro, dans les deux langues, titres, paragraphes,
  descriptions et libellés de liens compris. Le compte de la page ne doit pas augmenter d'une unité.
  Règle de comptage à citer dans ton rapport : `grep -o '—' index.html | wc -l`, fichier entier,
  commentaires compris. Valeur avant travaux : **152 écrits**.
- **Le compte vu ne bouge pas non plus** : 49 par langue avant travaux, mesuré sur le texte rendu.
- **Le texte de ce prompt a été écrit sous cette contrainte et il la respecte déjà** : il ne contient
  aucun cadratin. Le seul tiret du bloc est le **demi-cadratin de plage** des dates, `Fév 2026 –
  Aujourd'hui`, identique aux onze autres blocs de la frise. C'est l'exception 3 de la règle S-1, elle
  est typographiquement correcte et **ne se remplace pas**.
- **Onze clés neuves de chaque côté**, symétriques, toutes employées une fois. Aucune clé de libellé de
  lien : les trois liens vivent dans les valeurs `y331`, `y332` et `y333`.
- **Porte verte, exactement 4 avertissements**, et ce sont les quatre de D-4.
- **`scripts/` intact à l'octet**, à la seule exception de la liste blanche.

---

## 8. Confidentialité

Le texte créé ne nomme **aucun client, aucun employeur, aucun objet appartenant à un tiers**. Les trois
projets cités appartiennent au chef de projet. Les trois adresses sont publiques et déjà en ligne.

**Ne profite pas de ce passage pour toucher aux noms relevés en D-17** dans les autres blocs. Ils font
l'objet d'un incrément à part.

---

## 9. Critères d'acceptation

1. Le nouveau bloc est le **premier** `.exp` du document, avant celui d'InfoSquad.
2. Il est construit avec les classes et les styles en ligne existants. **Aucune classe, aucune couleur,
   aucune règle de feuille de style nouvelle.**
3. Les onze clés existent **dans les deux blocs de langue**, employées une fois chacune.
4. Les deux dernières phrases du paragraphe **diffèrent entre les langues**, conformément au P2.
5. Les trois liens sont écrits **dans les valeurs `y`**, ouvrent dans un nouvel onglet avec la protection
   contre la page appelante, et **la bascule de langue fait passer le premier de `/` à `/en`**. Vérifié
   à l'œil dans les deux langues, puisque le filet ne voit pas les adresses.
6. **La première phrase de `y332` nomme « ce site »**, jamais « le dépôt » seul. Le dépôt du harnais est
   privé et rien ne doit laisser croire l'inverse.
7. **Zéro cadratin ajouté** : `152` écrits avant, `152` après, sous la règle de comptage du §7. Et
   `49` vus par langue avant, `49` après.
8. Porte verte, **exactement 4 avertissements**.
9. La liste blanche gagne deux entrées motivées, et le nombre du `CLAUDE.md` §6 est **mesuré**, pas calculé.
10. `gate.sh`, `check-i18n.mjs`, les témoins et les fixtures sont **intacts à l'octet**.
11. Ce prompt est le **premier commit de la branche**, attribué au Tech Lead.

---

## 10. Livrables

- `.pipeline/spec.md`, `.pipeline/changes.md`, `.pipeline/test-results.md`, `.pipeline/last-diff.patch`.
- `.pipeline/STATUS.md` = `READY — étape <N> — <horodatage ISO> — <branche> — tests <X/Y>` en **dernier
  geste**.
- Dans `changes.md`, **les deux comptes de cadratins avant et après, avec leur règle**. C'est le premier
  incrément qui s'exécute sous la convention écrite du 12 août : un compte de ponctuation porte son
  corpus dans son énoncé, « 49 vus », « 152 écrits », jamais un nombre nu.

---

## 11. Ce que ce prompt ne fait pas, et qui suit

L'incrément éditorial, immédiatement après : paragraphe de profil, bloc « ce que je cherche »,
paragraphe de positionnement IBM i, phrase d'honnêteté sur la trajectoire IBM i, retrait de l'étiquette
`4 projets livrés`, ajout de l'étiquette `Management par l'inclusion` à la carte Soft Skills, et les
rapprochements de vocabulaire entre les trois pièces qui parlent aujourd'hui séparément du même travail.

---

*Prompt déposé le 12 août 2026 par le Tech Lead. Déposer n'est pas transmettre : il attend la
désignation du chef de projet.*
