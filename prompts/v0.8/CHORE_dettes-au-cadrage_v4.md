# CHORE — Révision 4 : le Tech Lead écrivait pour une forme que le fichier n'a pas

**Projet** : `lianazel.github.io` · **Type** : CHORE (documentation) · **Version du prompt** : **v4** · **Date** : 13 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Révise** : `CHORE_dettes-au-cadrage_v3.md`, **transmis**. Tu t'es arrêté avant d'écrire, et ton
blocage est fondé. Cette révision **remplace intégralement les textes du §3 de la v3**. Le reste de
ton travail, écrit sous la v2, **ne bouge pas**.

> ⚠️ **Trois prompts manquent au dépôt.** `_v1.md` et `_v3.md` sont **non suivis** sur le disque, seule
> la v2 est enregistrée à `bc7586a`. Les trois ont été transmis, donc les trois appartiennent à
> l'histoire de cet incrément. **Ton premier geste : enregistrer `_v1.md`, `_v3.md` et ce `_v4.md`**
> sur la branche `chore/dettes-au-cadrage`, message `docs:`, attribution au Tech Lead. Une chaîne de
> révisions dont il manque deux maillons ne se relit pas.

---

## 0. L'erreur est entière, et elle est de moi

**Le §8 du `CLAUDE.md` est un tableau markdown à quatre cellules.** Zéro titre `### D-n`. Vérifié par
le Tech Lead le 13 août 2026 sur la branche : chaque dette est une ligne à quatre cellules, et les
vingt et une lignes ont cette forme sans exception.

La v3 donnait des textes contenant des tableaux, des lignes vides, un titre et des blocs de citation.
**Quatre blocs sur cinq ne pouvaient pas entrer dans leur destination**, et pour D-20 la ligne serait
passée de quatre cellules à une vingtaine, cassant le tableau jusqu'à sa fin. Ton relevé est exact.

**Ce qui a produit la faute mérite d'être nommé, parce qu'elle n'est pas d'inattention.** La v2
donnait sa matière **en prose** et te laissait la mettre en cellule ; tu l'as fait, et la revue a
contrôlé la transposition. La v3, elle, exigeait « mot pour mot » un texte dont la forme était
incompatible avec la cible : **deux instructions qui se contredisent**. J'ai écrit dans la mise en
forme de mon prompt en croyant écrire dans celle du fichier, sans jamais regarder le fichier. C'est,
pour la huitième fois de ces deux jours, **un instrument qui mesure à côté de sa cible**. Cette fois
l'instrument était ma représentation du §8.

**Je ne prends aucune de tes trois options, j'en prends une quatrième, et c'est la plus coûteuse pour
moi.** Ta préférence allait à **A**, autoriser la transposition en cellule, et ton raisonnement est
bon : c'est le moindre geste et la revue sait contrôler une transposition. Je l'écarte pour une seule
raison, qui est de méthode. **A remplace un critère mécanique par un critère de jugement** : « sans
perte de substance » se discute, « mot pour mot » se vérifie. Sur un incrément dont l'objet même est
que les énoncés soient contrôlables, affaiblir le critère de contrôle serait une faute de plus.

**B** réécrirait D-1 à D-15, ce que le périmètre interdit, et tu as raison d'y voir un incrément à part
entière. Il en devient un : voir D-22 ci-dessous.

**Reste ta troisième option, et c'est la bonne : les remplacements sont écrits en contenu de cellule.**
Le travail est fait ici, pas chez toi. La forme du fichier de destination est la responsabilité de
celui qui écrit le prompt, et c'est moi.

---

## 1. Périmètre

`CLAUDE.md`, **la seule section §8**, et rien d'autre. Cinq gestes :

1. **Compléter** le bloc de conventions, avant le tableau, avec la définition des deux familles.
2. **Remplacer** une phrase dans la cellule `Déviation` de **D-17**.
3. **Remplacer** une phrase dans la cellule `Déviation` de **D-18**.
4. **Remplacer** une phrase dans la cellule `Plan de remboursement` de **D-19**.
5. **Remplacer les trois cellules** de **D-20**, et **ajouter une ligne D-22**.

**D-16 et D-21 ne sont pas touchées. D-1 à D-15 ne sont pas touchées.** Aucune autre section du
cadrage. Aucun autre fichier que `CLAUDE.md`, les trois prompts à enregistrer et les artefacts de
`.pipeline/`.

Les modifications non enregistrées déjà présentes **sont reprises en place**. Tu ne repars pas de
`main`, tu ne réécris pas ce qui va, et le classement des six lignes reste celui de la v2.

---

## 2. Préconditions vérifiables

1. Branche courante `chore/dettes-au-cadrage`, `CLAUDE.md` modifié non enregistré.
2. Le §8 se termine aujourd'hui à **D-21**. Si une ligne D-22 existe déjà, arrête-toi.
3. Les lignes D-1 à D-15 sont identiques à `main`, empreinte à l'appui.
4. `prompts/v0.8/CHORE_dettes-au-cadrage_v1.md` et `_v3.md` existent sur le disque et sont non suivis.

---

## 3. La règle de forme, valable pour tout ce qui suit

Tout texte des §4.2 à §4.6 est **du contenu de cellule**. Il ne contient donc **aucune barre verticale,
aucune ligne vide, aucun titre, aucun bloc de citation**. Les énumérations qui seraient des tableaux
ailleurs sont séparées par le point médian `·`, et les notes de portée sont en italique.

**Ce n'est pas une contrainte de style, c'est la forme de la destination.** Ne la « réharmonise » pas,
ne rétablis pas les tableaux, ne coupe pas les lignes longues : une cellule est une ligne, aussi longue
soit-elle.

---

## 4. Les remplacements, mot pour mot

### 4.1 · Le bloc de conventions, à compléter

Ce bloc vit **avant le tableau**, donc la règle du §3 ne s'y applique pas. **Ajoute à sa suite**, après
le paragraphe qui se termine par « c'est le lecteur suivant qui paiera » :

````markdown
**Les deux familles de dette.** Chaque ligne porte sa famille en tête de sa déviation. Le critère est
**le remède, et lui seul** : ce qu'il faut changer pour rembourser la ligne.

| Famille | Ce qu'il faut changer pour rembourser |
|---|---|
| **Héritage** | le contenu publié, c'est-à-dire la page et tout ce que le dépôt sert |
| **Instrument** | ce qui mesure ou décrit le site : le cadrage, la porte, les nombres qu'ils déclarent |

L'origine du défaut est un indice utile, elle n'est **pas** le critère : un défaut ancien peut se
rembourser dans l'instrument, un défaut récent dans la page. Une ligne dont deux sous-points appellent
deux remèdes différents n'est pas inclassable, elle **emballe deux dettes** et doit être coupée avant
d'être classée.
````

### 4.2 · D-17, cellule `Déviation`

**Cherche** la phrase suivante, qui commence par l'émoji d'alerte :

```
⚠️ **La surface n'est pas la page, c'est le dépôt entier** : relevé le 12 août 2026, `tasks/JOURNAL_v0.2.md` est servi publiquement et porte **dix** de ces noms, et le `README.md` y dirige le lecteur. C'est la leçon du 6 août : *ce qui est servi est lisible.*
```

**Remplace-la par** :

```
⚠️ **La surface n'est pas la page, c'est le dépôt entier** : relevé le 13 août 2026 sur `8143241`, `tasks/JOURNAL_v0.2.md` est servi publiquement et porte **dix occurrences** de ces chaînes pour **huit noms distincts**, `BALAS` y paraissant trois fois et `OrderFlex` comme `ToolsLib` n'y figurant pas, et le `README.md` y dirige le lecteur. C'est la leçon du 6 août : *ce qui est servi est lisible.* *Une première rédaction écrivait « dix de ces noms », vrai en occurrences et faux en noms distincts, la règle de comptage n'étant écrite nulle part : relevé en revue le 13 août 2026. Un compte sans son unité n'est pas approximatif, il est indécidable.*
```

### 4.3 · D-18, cellule `Déviation`

**Cherche** :

```
Mesuré le 12 août 2026 sur `9add85b` : **183 déclarées, 176 utilisées**, et `langBtn` n'est plus une clé.
```

**Remplace-la par** :

```
Trois couples coexistent, tous produits par `scripts/check-i18n.mjs`, **même programme et même motif**, sur des entrées différentes : **132 / 126** déclaré au §3 et **jamais mesuré** · **183 / 176** mesuré à `9add85b` le 12 août 2026 au matin · **194 / 187** mesuré à `8143241` le 12 août 2026 au soir, les déclarations étant comptées par bloc de langue et les emplois sur le fichier entier. L'écart de **onze clés** entre les deux relevés est **réel et non un artefact de méthode** : ce sont exactement les onze clés du bloc TWAIM, fusionnées le soir même. `langBtn` n'était déjà plus une clé à `9add85b`, point non re-vérifié depuis. Le nombre du §3 ne s'est pas périmé une fois, il s'est périmé **deux fois dans la même journée**, et un énoncé daté, lui, reste vrai indéfiniment.
```

### 4.4 · D-19, cellule `Plan de remboursement`

**Cherche** la note en italique qui termine la cellule :

```
*À instruire par le Tech Lead avant tout geste. Cette ligne est écrite en connaissance de son ironie : l'inscrire allonge le fichier qu'elle dénonce.*
```

**Remplace-la par** :

```
*À instruire par le Tech Lead avant tout geste. Cette ligne est écrite en connaissance de son ironie : l'inscrire allonge le fichier qu'elle dénonce. Le **46 494** de la déviation est celui d'**avant** cet incrément ; la taille d'arrivée n'a pas sa place ici, car l'écrire changerait la taille et périmerait le nombre à l'instant même où il est écrit. **Un fichier ne peut pas énoncer sa propre taille.** Elle est relevée dans le journal de l'incrément, qui n'a pas ce problème.*
```

### 4.5 · D-20, les trois cellules

**Remplace les trois cellules de la ligne D-20**, en conservant la première cellule `**D-20**` telle
quelle. Le repère de la ligne ne change pas.

**Cellule `Déviation`** :

```
**Héritage.** **Six ancres sont sous le seuil de contraste, et le compte précédent n'avait pas d'unité.** Les ancres en `var(--c1)` `#6c63ff` affichent un contraste inférieur au niveau AA, qui demande **4,5 pour 1** pour du texte courant. Mesuré le 13 août 2026 sur `8143241`, formule WCAG 2.1, fonds effectifs obtenus par **parcours d'arbre avec composition alpha depuis la base opaque** et non par balayage textuel, un balayage donnant le mauvais conteneur pour les boutons contour. **Six ancres sur vingt-trois** sont concernées, soit **six adresses distinctes** et **trois couples couleur sur fond** : `#6c63ff` sur `rgb(35,33,56)` à **3,60**, le lien de la sous-carte du bloc TWAIM · `#6c63ff` sur `rgb(26,24,48)` à **4,00**, quatre boutons contour de cartes de projet · `#6c63ff` sur `rgb(15,14,23)` à **4,44**, le bouton contour du bandeau d'accueil. Les dix-sept autres ancres passent, de 6,96 à 19,17, et les liens `--c3` et `--c4` du même bloc sont à 9,76 et 6,96 : **le défaut appartient à la couleur, pas au motif de sous-carte**. *Une première rédaction annonçait « quatre liens », nombre qui ne correspondait à aucune des trois unités possibles et sous-estimait le défaut sous chacune d'elles : relevé en revue le 13 août 2026.*
```

**Cellule `Impact`** :

```
Lisibilité dégradée pour une partie des lecteurs, sur des liens qui sont le **chemin de sortie de la page**. Le §9 note depuis le 8 août 2026 que le contraste du thème sombre n'a jamais été mesuré : **c'est la première mesure réelle, et elle est rouge**.
```

**Cellule `Plan de remboursement`** :

```
**Aucune couleur nouvelle n'est nécessaire** : `--c1-soft` `#b0aaff` existe déjà dans `:root` et donne **7,46 · 8,25 · 9,16** sur les trois fonds, les trois passant AA et deux passant AAA. **Mais le geste n'est pas six retouches** : une seule ancre porte la couleur en **style en ligne**, celle du bloc TWAIM, les cinq autres la tenant de la règle de classe `.btn-outline`. Le remboursement est donc **une valeur et une règle**, plus court qu'il n'y paraît, mais il **touche la feuille de style**, ce que l'incrément du bloc TWAIM avait explicitement interdit : un incrément d'accessibilité devra l'autoriser en toutes lettres. *Ce que la mesure ne couvre pas, et qu'il faut lire avant de la croire complète : elle est **calculée depuis la feuille de style, pas lue dans un navigateur** · elle ne couvre **que les ancres**, ni le texte courant, ni les étiquettes, ni les titres de sous-carte · elle ne couvre **aucun état interactif**, et `.btn-outline:hover` inverse le fond donc change le couple · les boutons `.btn-primary` sont posés sur un dégradé dont le contraste varie le long du bouton, ils **n'ont pas été mesurés** et tout chiffre les concernant serait faux.* *Mesurée et inscrite le 13 août 2026.*
```

### 4.6 · D-22, ligne nouvelle à la suite de D-21

**Ajoute** cette ligne entière, après D-21 :

```
| **D-22** | **Instrument.** **Le §8 a dépassé la forme du tableau.** Le registre est un tableau markdown à quatre cellules, et une cellule n'admet ni barre verticale, ni ligne vide, ni titre, ni bloc de citation. Or les lignes portent désormais des inventaires, des relevés à plusieurs colonnes et des notes de portée, qui n'y entrent qu'**aplatis**. **Constaté le 13 août 2026** : l'agent d'exécution a refusé une révision dont quatre blocs sur cinq étaient structurellement incompatibles avec leur destination, et pour la seule ligne D-20 le tableau serait passé de quatre cellules à une vingtaine, cassé jusqu'à sa fin. | Nul sur le comportement, et le registre reste exact. Mais **il se lit mal**, chaque relevé chiffré y perd la colonne qui le rendait lisible, et l'écart se creuse à chaque dette mesurée. Le volume ainsi produit pèse aussi dans ce que **D-19** surveille. | Convertir le §8 en sections de prose, une par dette, ce qui rendrait au registre les tableaux, les titres et les notes. **Le geste réécrit D-1 à D-15** et ne peut donc pas voyager avec une inscription de dette : c'est un incrément à part entière, à instruire avec **D-19**, les deux portant sur la forme du cadrage. |
```

---

## 5. Ce que tu ne fais pas

- **Aucune correction de contenu du site.** Ni les noms de D-17, ni le `.NET 8` de D-16, ni les nombres
  du §3, ni la couleur des ancres. `--c1-soft` est nommée dans une ligne, elle n'est appliquée nulle part.
- **Aucune modification de D-16, D-21, ni de D-1 à D-15.**
- **Aucune conversion du §8**, malgré D-22 qui la recommande. L'inscrire est le geste ; la faire sera
  un autre incrément.
- **Aucun nombre de taille de `CLAUDE.md` écrit dans `CLAUDE.md`.**

---

## 6. Critères d'acceptation

1. Les cinq gestes du §1 sont appliqués, et les textes des §4.2 à §4.6 le sont **mot pour mot**.
2. **Le tableau du §8 parse toujours** : chaque ligne de dette porte exactement **cinq barres
   verticales**, donc quatre cellules, de D-1 à D-22 sans exception. C'est la vérification qui aurait
   arrêté la v3, fais-la explicitement et rapporte-la.
3. **Aucun des textes insérés en cellule ne contient de barre verticale, de ligne vide, de titre ou de
   bloc de citation.** Contrôle-le et rapporte-le.
4. Le bloc de conventions porte, en plus des repères, la **définition des deux familles au critère du
   remède seul**.
5. Le registre se termine à **D-22**. Les classements de D-16 à D-21 sont **inchangés** : Héritage pour
   D-16, D-17, D-20 ; Instrument pour D-18, D-19, D-21. D-22 est Instrument.
6. **D-16, D-21 et D-1 à D-15 inchangées**, empreinte à l'appui.
7. **Aucune autre section du `CLAUDE.md`**, aucun autre fichier que `CLAUDE.md`, les trois prompts et
   les artefacts de `.pipeline/`.
8. **Aucun tiret cadratin** dans le texte ajouté. Comptes de la page inchangés : `152` écrits, `49` vus
   par langue.
9. **Chaque nombre inscrit porte sa date, son commit et sa règle de comptage**, ou son unité quand il
   compte autre chose que des occurrences.
10. **La substance du rapport de mesure survit dans le cadrage** : `.pipeline/` ne part pas au dépôt, et
    un lecteur du seul `CLAUDE.md` doit pouvoir refaire les deux mesures avec ce qui y est écrit.
11. La **proposition de classement de D-1 à D-15** reste dans `changes.md`, mise à jour du critère du
    remède seul : indique si le passage déplace une ligne, et laquelle.
12. `_v1.md`, `_v3.md` et `_v4.md` sont enregistrés sur la branche, avant la reprise de `CLAUDE.md`.
13. Porte verte, **exactement 4 avertissements**.

---

## 7. Livrables

- Les artefacts habituels, puis `.pipeline/STATUS.md` = `READY — …` en **dernier geste**.
- Dans `changes.md`, **la taille du `CLAUDE.md` avant et après**, en caractères, avec sa règle de
  comptage et le commit de référence. C'est le seul endroit honnête où ce nombre peut vivre.
- Dans `changes.md` toujours, les trois leçons de cet incrément :
  1. **Un compte sans son unité n'est pas approximatif, il est indécidable.** Deux nombres écrits par
     le Tech Lead sont tombés en revue, l'un trop haut, l'autre trop bas, aucun par excès de confiance :
     tous deux par absence de règle de comptage.
  2. **Une définition qui porte deux critères n'est pas une définition.** Elle tient jusqu'au premier
     cas où les deux divergent, et ce cas arrive toujours.
  3. **Un prompt qui exige « mot pour mot » doit avoir regardé la forme du fichier de destination.**
     La v3 exigeait la fidélité littérale d'un texte que sa cible ne pouvait pas contenir : deux
     instructions contradictoires dans le même document. Le coût a été un aller-retour ; le coût si tu
     avais obéi aurait été un registre cassé sur six lignes.

---

*Prompt déposé le 13 août 2026 par le Tech Lead. Déposer n'est pas transmettre : il attend la
désignation du chef de projet.*
