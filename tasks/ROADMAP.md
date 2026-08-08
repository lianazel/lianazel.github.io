# Feuille de route — lianazel.github.io

> Deux parties. **Les évolutions demandées** par le chef de projet, qui ouvrent les prochains
> incréments. Puis **la dette connue** — les six déviations du `CLAUDE.md` §8, par ordre de
> remboursement. Le `CLAUDE.md` reste la source de vérité : ce document ordonne, il ne redéfinit pas.
> Aucune ligne de la seconde partie n'est un invariant — le code ne les respecte pas, et c'est assumé.

---

# Partie I — Évolutions demandées (8 août 2026)

## E-1 — Parité linguistique complète · **priorité 1**

**Demande** : « il ne doit plus rester un mot de français lorsque l'on passe en anglais ».

**Constat mesuré le 8 août 2026** — ce n'est pas un résidu, c'est une zone entière du contenu :
**29 fragments de texte visible** ne portent aucun attribut de traduction, et restent donc en
français après bascule. Ils se concentrent sur la section **Expérience**, la plus lue par un
recruteur :

- **toutes les dates de poste** — « Fév 2020 – Avr 2023 », « Sept 2001 – Juin 2005 », « Oct 2005 – Oct 2007 » ;
- **des intitulés** — « Développeur », « Analyste ingénieur », « Développeur AS/400 — Migrations & Outils » ;
- « Base de données », « Formation — Cursus DBA Oracle 9i », « Cursus sur site » ;
- **des phrases entières** — « Solution développée en partie sur une partition AS/400 partagée aux
  USA… », « Conversion des spools au format PDF, chargement dynamique de la… ».

**Le contrôle ne peut pas être entièrement automatique**, et c'est le point de conception. Sur les
167 mots hors dictionnaire, la majorité sont des noms propres et des termes techniques qui ne se
traduisent **pas** : Windev, .NET, HFSQL, Oracle, GitHub, AS/400, PostgreSQL, JWT. Aucune machine ne
distingue seule « Cursus » de « Adelia ». *(Même leçon que celle du 8 août sur les marqueurs de
gabarit : un contrôle peut énumérer, il ne peut pas juger la sémantique — s'il prétend le faire, il
fabrique le faux vert suivant.)*

**Forme retenue pour la porte** : tout texte visible doit être **soit** couvert par un attribut de
traduction, **soit** inscrit dans une **liste blanche explicite** de termes non traduisibles, versionnée
à côté du contrôle. Ajouter un terme à cette liste devient alors un geste conscient et tracé, jamais un
contournement silencieux.

**Périmètre de l'incrément** : élargir `scripts/check-i18n.mjs` (avec sa preuve de morsure), poser la
liste blanche, puis rattraper les 29 fragments — traduction et attribut. Ne touche pas au rendu.

---

## E-2 — Petit écran d'abord et menu de débordement · priorité 2

**Demande** : création d'un menu de débordement (« hamburger ») avec les options de navigation, et
passage de la feuille de style au petit écran d'abord.

**Un seul incrément, pas deux.** Ce sont les mêmes règles d'adaptation que l'on réécrit : le menu de
débordement *est* un comportement de petit écran. Les séparer ferait toucher deux fois la même feuille
de style — ce que le `CLAUDE.md` §7 déconseille explicitement.

**Cet incrément solde la dette D-2** : il est le « prochain toucher significatif de la feuille de
style » que son plan de remboursement attendait.

**Précédent maison à réutiliser** : TwaimWeb porte déjà une barre en menu de débordement avec
priorité d'effacement des entrées. Satellite à charger : `UX_METHOD`.

**Ordre imposé — après E-1, et pour une raison mécanique** : ce chantier **ajoute des libellés
visibles**. Si la porte de parité linguistique n'existe pas encore, ils naîtront non traduits et il
faudra repasser derrière.

> ⚠️ **Décision attendue avant d'ouvrir E-2.** Refondre la barre de navigation et inverser toutes les
> règles d'adaptation est le chantier **le plus exposé au défaut visuel** — débordement, chevauchement,
> comportement au seuil de bascule. Or rien ne le détecte aujourd'hui : c'est la dette **D-1**, reportée
> le 8 août alors qu'aucune refonte n'était prévue. Le calcul a changé. Deux issues, et une seule
> mauvaise : poser la barrière de rendu avant E-2, **ou** assumer explicitement que la validation du
> menu sera manuelle, sur tous les seuils, à chaque itération — et l'écrire. La mauvaise issue est de
> ne pas trancher.

---

## E-3 — Cartes de projets : badge de légitimité et ajout de MetalWatch · priorité 3

**Règle posée le 8 août 2026, et elle commande tout le reste** : le badge « harnais IA TWAIM » n'est
pas décoratif, c'est une **affirmation vérifiable**. Il ne se pose que sur un projet **réellement
piloté par le harnais** — cadrage, agents et commandes, journal, consignes versionnées, et au moins
une porte qui mord. Le portfolio dit vrai, ou il ne dit rien.

### État vérifié le 8 août 2026

| Projet | Cadrage | Agents / commandes | `tasks/` | `prompts/` | Porte | Badge légitime ? |
|---|---|---|---|---|---|---|
| **MetalWatch** | ✓ | ✓ (5) | ✓ complet | ✓ | ✓ rendu | **oui** |
| **GFMCC** | ✓ | ✓ (6) | ✓ | ✓ v0.1→v0.8 | ✓ | **oui** |
| GrainWatch | ✓ 310 l. | ✗ | ✓ journal, leçons, 12 rapports | ✗ | ✗ | non |
| GrainTrack3D | ✓ 259 l. | ✗ | ✓ leçons | ✗ | ✗ | non |
| FuelMapPrice | ✓ 155 l. | ✗ | ✗ | ✗ | ✗ | non |
| CryptoAnalyser | — | ✗ | ✗ | ✗ | ✗ | non |

*Nuance à conserver : GrainWatch porte douze rapports de diagnostic et de correctif. La **méthode** y a
bien été appliquée ; c'est l'**outillage** qui manque. « Pas outillé » ne veut pas dire « bâclé ».*

### Décidé

- **Aucun badge** sur GrainWatch, GrainTrack3D, FuelMapPrice, CryptoAnalyser tant qu'ils ne sont pas
  réalignés. Le badge suivra le réalignement, jamais l'inverse.
- **Ajouter une carte MetalWatch**, absente du portfolio alors qu'elle est le meilleur exemple :
  > Suivi des cours de sept métaux précieux et industriels. Collecte automatique, stockage en base,
  > graphiques interactifs. Architecture conçue par mes soins et pilotée de bout en bout avec le
  > harnais IA TWAIM.
  >
  > Badges : `Next.js 14` · `TypeScript` · `Supabase` · `Chart.js` · `harnais IA TWAIM`
  > Bouton : « Voir le site » → `https://metalwatch-delta.vercel.app/` — **pas** de bouton GitHub,
  > le dépôt est privé.

  *Rédigé depuis la photo du 4 août 2026 (boîte aux lettres) : identité et pile technique, stables.
  À confirmer avant livraison.*

### ⏸ En suspens — trois décisions du chef de projet

1. **Three.js** — la vitrine 3D de MetalWatch est-elle visible en production ? Si oui, elle mérite son
   badge : c'est un différenciateur.
2. **Dépôt privé** — carte sans mention (retenu par défaut), ou badge « privé » explicite ?
3. **GFMCC** — carte ou pas ? Il est légitime, mais sans dépôt public ni site sa carte n'aurait **aucun
   bouton**, au milieu de six qui en ont. Description retenue si la carte se fait, **volontairement
   neutre** — elle ne nomme aucun outillage interne : *« outil de sauvegarde chiffrée de configuration
   de poste — archive AES-256, transfert entre machines »*. Argument à valoriser dans les deux cas :
   **zéro dépendance PyPI**, bibliothèque standard uniquement.

### Contrainte d'ordonnancement

Cet incrément **ajoute du texte visible** — libellés de badges, description de carte. Il se fait donc
**dans E-1** ou **après lui**, jamais avant : sinon ces libellés naissent non traduits, et l'on repasse
derrière.

---

# Partie II — Dette connue

---

## D-1 — Aucune barrière sur le rendu · **priorité 1**

Rien ne détecte un débordement ou une mise en page cassée avant publication : un défaut visuel peut
atteindre la production sans être vu. C'est le seul point de cette liste dont l'impact est
**potentiellement visible par un recruteur**, d'où sa place en tête.

**Remboursement** : poser une barrière de rendu (satellite `VISION_METHOD`, palier local).
**État** : **reportée par décision du chef de projet le 8 août 2026** — à reprendre, pas abandonnée.
La validation visuelle reste entièrement humaine tant que cette barrière n'existe pas.

---

## D-2 — Conception grand écran d'abord · priorité 2

Les deux règles d'adaptation sont écrites en largeur **maximale** (`max-width: 600px` et `700px`),
donc en dégradation depuis le grand écran ; la méthode impose l'inverse. Aucun défaut visible
constaté à ce jour : c'est un écart de méthode, pas un bug.

**Remboursement** : inverser le sens des règles d'adaptation **au prochain toucher significatif de la
feuille de style**, jamais en bloc. Tout **nouveau** bloc d'interface s'écrit dès maintenant en petit
écran d'abord.

---

## D-4 — Quatre clés traduites jamais utilisées · priorité 3

`e7_title`, `e7_desc`, `p3_title`, `p3_desc` sont traduites dans les deux langues mais aucun élément
ne les réclame. Soit du contenu retiré dont la traduction est restée, soit des attributs `data-i18n`
oubliés sur des éléments existants. Impact nul.

**Remboursement** : trancher au prochain toucher du contenu — rebrancher ou supprimer. Le filet de
tests les signale en **avertissement**, sans bloquer : ce sont les quatre avertissements attendus de
`bash scripts/gate.sh`.

---

## D-6 — Repli sur une commande dépréciée · priorité 4

`document.execCommand('copy')` sert de repli à la copie de l'adresse électronique. Impact nul : le
chemin moderne est prioritaire, le repli ne s'exécute que si l'interface presse-papiers est absente.

**Remboursement** : retirer le jour où les navigateurs ciblés le rendent inutile. Aucune urgence.

---

## D-5 — Police système non embarquée · priorité 5 (aucune action sur le site)

Le style demande `Segoe UI` sans la fournir ; hors environnement Windows, le navigateur retombe sur
une police sensiblement plus large.

**Remboursement** : **aucune action sur le site** — le repli est acceptable.
**Conséquence à retenir**, et elle conditionne D-1 : toute mesure de mise en page faite ailleurs que
sous Windows doit d'abord **prouver quelle police a réellement été utilisée**, sous peine de mesurer
un rendu qui n'existe chez personne.

---

## D-3 — Deux clés dupliquées dans le bloc anglais · **soldée**

`copy_btn` et `copied_msg` étaient déclarées deux fois dans le bloc `en:` du dictionnaire. Les valeurs
étant identiques, l'écrasement était sans effet visible — mais le défaut serait devenu silencieux le
jour où elles auraient divergé.

**Remboursement** : **fait le 8 août 2026**, passe d'alignement — suppression des deux déclarations
redondantes de fin de bloc. Le contrôle de doublon du filet de tests interdit désormais la récidive.
