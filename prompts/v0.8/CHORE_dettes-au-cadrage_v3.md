# CHORE — Révision 3 : deux nombres nus, une définition à deux critères, et un fichier qui ne peut pas dire sa propre taille

**Projet** : `lianazel.github.io` · **Type** : CHORE (documentation) · **Version du prompt** : **v3** · **Date** : 13 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Révise** : `CHORE_dettes-au-cadrage_v2.md`, **transmis et exécuté jusqu'à l'étape 4**. Les six lignes
et le bloc de conventions sont écrits dans `CLAUDE.md`, non enregistrés. **Cette révision corrige
quatre lignes et complète le bloc. Elle ne recommence rien et ne réécrit pas ce qui va.**

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Enregistre-le sur la **même branche**
> `chore/dettes-au-cadrage`, message `docs:`, attribution au Tech Lead, **avant** de reprendre
> `CLAUDE.md`. La v2 y est déjà, à `bc7586a` : ce commit n'est ni modifié ni remplacé, la v3 s'ajoute
> à sa suite. Un prompt transmis reste au dépôt même quand il est révisé, sinon la révision perd ce
> qu'elle révise.

---

## 0. Ce que la revue et la mesure ont établi, et ce que j'en fais

Ta revue a bloqué sur trois nombres. **Les trois étaient les miens, aucun ne venait de ton exécution.**
Le rapport `RAPPORT_MESURE_contraste-et-cles_v1.md` du 13 août les tranche. Voici mes arbitrages.

**① « dix noms » en D-17 était un compte sans unité.** Dix occurrences, huit noms distincts, et la
règle n'était écrite nulle part. Je ne remplace pas dix par huit : **j'écris le compte avec son corpus,
son unité et sa date**, ce qui est la convention adoptée le 12 août 2026. Elle manquait précisément à
la ligne dont la morale est qu'un balayage porte son motif.

**② « quatre liens » en D-20 ne correspondait à aucune unité.** Ta mesure donne six ancres, six
adresses, trois couples couleur/fond. Sous chacune des trois lectures, le défaut est **plus large** que
la ligne ne l'annonçait. Et tu as trouvé mieux qu'un compte : **une seule ancre porte la couleur en
style en ligne, les cinq autres la tiennent de `.btn-outline`.** Le remboursement n'est donc pas quatre
retouches, c'est une valeur et une règle. La ligne est réécrite entièrement.

> **Les deux nombres contestés étaient des comptes nus, et ils se sont trompés dans des directions
> opposées.** Dix surévaluait sous une lecture, quatre sous-évaluait sous les trois. C'est ce qui rend
> le diagnostic solide : ce n'est pas un biais d'optimisme, c'est l'absence d'unité. Un compte sans son
> unité n'est pas approximatif, il est **indécidable**, et sa justesse apparente est un tirage au sort.

**③ D-18 : ton relevé rend la ligne plus forte.** Même programme, même motif, deux entrées, empreintes
citées : l'écart de onze clés est réel et vaut exactement les onze clés du bloc TWAIM. La ligne citera
**trois couples**, dont un jamais mesuré. Trois couples en douze heures démontrent la maladie mieux
qu'un seul relevé, et un énoncé daté ne se périme pas.

**④ Ta question de définition est la trouvaille de l'incrément, et le défaut est dans mon §0.** Je
faisais reposer Héritage et Instrument sur **deux critères qui peuvent diverger**, l'origine et le
remède. Une définition à deux critères n'est pas une définition : c'est deux définitions qui se
ressemblent jusqu'au premier cas limite, et D-11 était ce cas. **Je tranche sur le remède seul**, parce
que la famille sert à répondre à une seule question, celle de savoir quel incrément rembourse la ligne.
L'origine devient un indice, jamais un test.

**Ton `indéterminable` sur D-11 est conservé et requalifié.** Une ligne dont deux sous-points appellent
deux remèdes différents n'est pas inclassable : elle **emballe deux dettes** et devra être coupée.
C'est une trouvaille, pas un défaut de classement.

**⑤ Un défaut que personne n'avait vu, et que je corrige de moi-même.** D-19 annonce `46 494`
caractères. Cet incrément fait grossir le fichier, donc **la ligne devient fausse à l'instant où elle
atterrit**, ce qui est très exactement la maladie que D-18 décrit, reproduite dans la ligne voisine.
Pire, elle n'a pas de solution par le nombre : écrire la taille d'arrivée change la taille, donc périme
le nombre qu'on vient d'écrire. **Un fichier ne peut pas énoncer sa propre taille.** Le §5 dit comment
on en sort.

---

## 1. Périmètre

`CLAUDE.md`, **la seule section §8**, et rien d'autre. Quatre gestes à l'intérieur :

1. **Compléter** le bloc de conventions placé avant le tableau, avec la définition des deux familles.
2. **Remplacer** une phrase de l'encadré de D-17.
3. **Remplacer** le paragraphe de mesure de D-18.
4. **Remplacer** la ligne D-20 entièrement, et **ajouter une phrase** à D-19.

**D-16 et D-21 ne sont pas touchées.** Les lignes D-1 à D-15 ne sont pas touchées. Aucune autre section
du cadrage, aucun autre fichier.

Les modifications non enregistrées déjà présentes dans `CLAUDE.md` **sont reprises en place**. Tu ne
repars pas de `main`, tu ne réécris pas ce qui va.

---

## 2. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. La branche courante est `chore/dettes-au-cadrage`.
2. `CLAUDE.md` porte bien les six lignes D-16 à D-21 et le bloc de conventions, non enregistrés.
3. Le rapport `.pipeline/RAPPORT_MESURE_contraste-et-cles_v1.md` existe et porte la date du 13 août 2026.
4. Les lignes D-1 à D-15 sont inchangées par rapport à `main` : leur empreinte est identique.

---

## 3. Le bloc de conventions, à compléter

Le bloc que tu as posé avant le tableau garde son contenu. **Ajoute à sa suite**, dans le même bloc,
avant le tableau des dettes :

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

---

## 4. Les trois remplacements, mot pour mot

### 4.1 · D-17, la phrase de l'encadré

Dans l'encadré qui commence par « La surface n'est pas la page », remplace la phrase qui va de
« Relevé le 12 août 2026 » jusqu'à « dirige explicitement le lecteur » par :

````markdown
Relevé le 13 août 2026 sur `8143241` : `tasks/JOURNAL_v0.2.md` est servi publiquement et porte **dix
occurrences** de ces chaînes, pour **huit noms distincts** ; `BALAS` y paraît trois fois, et
`OrderFlex` comme `ToolsLib` n'y figurent pas. Le `README.md` y dirige explicitement le lecteur.

> **Le compte porte son unité, et il le doit à une correction.** Une première rédaction écrivait « dix
> des noms », vrai en occurrences et faux en noms distincts, la règle n'étant écrite nulle part. Relevé
> en revue le 13 août 2026. Un compte sans son unité n'est pas approximatif, il est indécidable.
````

### 4.2 · D-18, le paragraphe de mesure

Remplace la phrase qui commence par « Mesuré le 12 août 2026 sur `9add85b` » et va jusqu'à la fin du
paragraphe de déviation par :

````markdown
Trois couples coexistent, tous les relevés étant produits par `scripts/check-i18n.mjs`, **même
programme et même motif**, sur des entrées différentes :

| Origine du couple | Déclarées par langue | Employées |
|---|---|---|
| déclaré au §3 du présent cadrage, **jamais mesuré** | 132 | 126 |
| mesuré à `9add85b`, 12 août 2026 au matin | 183 | 176 |
| mesuré à `8143241`, 12 août 2026 au soir | 194 | 187 |

L'écart de onze clés entre les deux relevés est **réel et non un artefact de méthode** : ce sont
exactement les onze clés du bloc TWAIM, fusionnées le soir même. Le §3 cite aussi `langBtn` comme clé
du dictionnaire ; elle n'en était déjà plus une à `9add85b`, et ce point n'a pas été re-vérifié depuis.

Le nombre du §3 ne s'est pas périmé une fois, il s'est périmé **deux fois dans la même journée**. Un
énoncé daté, lui, reste vrai indéfiniment : c'est le nombre nu qui pourrit, pas la mesure.
````

### 4.3 · D-20, la ligne entière

Remplace la ligne D-20 dans son intégralité, titre compris, par :

````markdown
### D-20 · Six ancres sont sous le seuil de contraste, et le compte précédent n'avait pas d'unité

**Déviation.** **Héritage.** Les ancres en `var(--c1)` `#6c63ff` affichent un contraste inférieur au
niveau AA des règles d'accessibilité, qui demande **4,5 pour 1** pour du texte courant. Mesuré le 13
août 2026 sur `8143241`, formule WCAG 2.1, fonds effectifs obtenus par **parcours d'arbre avec
composition alpha depuis la base opaque**, et non par balayage textuel.

**Six ancres sur vingt-trois** sont concernées, soit **six adresses distinctes** et **trois couples
couleur sur fond** :

| Couple | Ratio | Ancres concernées |
|---|---|---|
| `#6c63ff` sur `rgb(35,33,56)` | **3,60** | le lien de la sous-carte du bloc TWAIM |
| `#6c63ff` sur `rgb(26,24,48)` | **4,00** | quatre boutons contour de cartes de projet |
| `#6c63ff` sur `rgb(15,14,23)` | **4,44** | le bouton contour du bandeau d'accueil |

Les dix-sept autres ancres passent, de 6,96 à 19,17. Les liens `--c3` et `--c4` du même bloc sont à
9,76 et 6,96 : **le défaut appartient à la couleur, pas au motif de sous-carte.**

**Impact.** Lisibilité dégradée pour une partie des lecteurs, sur des liens qui sont le chemin de
sortie de la page. Le cadrage note depuis le 8 août 2026 que le contraste du thème sombre n'a jamais
été mesuré : c'est la première mesure réelle, et elle est rouge.

**Plan de remboursement.** **Aucune couleur nouvelle n'est nécessaire** : `--c1-soft` `#b0aaff` existe
déjà dans `:root` et donne **7,46 · 8,25 · 9,16** sur les trois fonds. Les trois passent AA, deux
passent AAA.

**Mais le geste n'est pas six retouches.** Une seule ancre porte la couleur en **style en ligne**,
celle du bloc TWAIM ; les cinq autres la tiennent de la règle de classe `.btn-outline`. Le
remboursement est donc **une valeur et une règle**, ce qui est plus court, et **touche la feuille de
style**, ce que l'incrément du bloc TWAIM avait explicitement interdit. Un incrément d'accessibilité
devra l'autoriser en toutes lettres.

> **Ce que cette mesure ne couvre pas, et qu'il faut lire avant de la croire complète.** Elle est
> **calculée depuis la feuille de style, pas lue dans un navigateur**. Elle ne couvre **que les
> ancres** : ni le texte courant, ni les étiquettes, ni les titres de sous-carte. Elle ne couvre
> **aucun état interactif**, et `.btn-outline:hover` inverse le fond, donc change le couple. Enfin les
> boutons `.btn-primary` sont posés sur un dégradé, dont le contraste varie le long du bouton : ils
> **n'ont pas été mesurés**, et tout chiffre les concernant serait faux. La passe d'accessibilité devra
> les traiter.

> **Une première rédaction annonçait « quatre liens ».** Le nombre ne correspondait à aucune des trois
> unités possibles, et sous chacune d'elles le défaut est plus large. Relevé en revue le 13 août 2026.
````

### 4.4 · D-19, une phrase à ajouter

À la fin de l'encadré de D-19 qui commence par « Cette ligne est écrite en connaissance de sa propre
ironie », **ajoute** :

````markdown
> Le nombre ci-dessus est celui d'**avant** cet incrément. Inscrire ces six lignes l'augmente, et la
> taille d'arrivée n'a pas sa place ici : l'écrire changerait la taille, donc périmerait le nombre à
> l'instant où il est écrit. **Un fichier ne peut pas énoncer sa propre taille.** Elle est relevée dans
> le journal de l'incrément, qui n'a pas ce problème.
````

---

## 5. Ce que tu ne fais pas

- **Aucune correction de contenu du site.** Ni les noms de D-17, ni le `.NET 8` de D-16, ni les nombres
  du §3, ni la couleur des ancres. Inscrire est le geste ; corriger sera décidé après, ligne par ligne.
- **Aucune modification de D-16, D-21, ni de D-1 à D-15.**
- **Aucun nombre de taille de `CLAUDE.md` écrit dans `CLAUDE.md`.** Il va dans `changes.md`, et là
  seulement.
- **Aucune couleur nouvelle**, aucune retouche de la feuille de style. `--c1-soft` est nommée dans la
  ligne, elle n'est appliquée nulle part.

---

## 6. Critères d'acceptation

1. Le bloc de conventions du §8 porte, en plus des repères, la **définition des deux familles au
   critère du remède seul**, mot pour mot du §3.
2. Les **quatre remplacements** du §4 sont appliqués mot pour mot.
3. Les classements des six lignes sont **inchangés** : Héritage pour D-16, D-17, D-20 ; Instrument pour
   D-18, D-19, D-21. Le nouveau critère les confirme, il ne les déplace pas.
4. **D-16 et D-21 sont inchangées**, ainsi que D-1 à D-15, empreinte à l'appui.
5. **Aucune autre section du `CLAUDE.md`**, et **aucun autre fichier** que `CLAUDE.md`, ce prompt et
   les artefacts de `.pipeline/`.
6. **Aucun tiret cadratin** dans le texte ajouté ou remplacé. Comptes de la page inchangés : `152`
   écrits, `49` vus par langue.
7. **Chaque nombre inscrit porte sa date, son commit et sa règle de comptage**, ou son unité quand il
   compte autre chose que des occurrences. C'est le critère central de cette révision : la revue en a
   fait tomber deux.
8. **La substance du rapport de mesure survit dans le cadrage.** `.pipeline/` ne part pas au dépôt ; un
   lecteur du seul `CLAUDE.md` doit pouvoir refaire les deux mesures avec ce qui y est écrit.
9. La **proposition de classement de D-1 à D-15** reste dans `changes.md`, mise à jour du nouveau
   critère : indique si le passage au remède seul déplace une ligne, et laquelle.
10. Porte verte, **exactement 4 avertissements**.
11. Ce prompt est enregistré sur la **même branche**, avant la reprise de `CLAUDE.md`.

---

## 7. Livrables

- Les artefacts habituels, puis `.pipeline/STATUS.md` = `READY — …` en **dernier geste**.
- Dans `changes.md`, **la taille du `CLAUDE.md` avant et après**, en caractères, avec sa règle de
  comptage et le commit de référence. C'est le nombre que D-19 surveille, et c'est le seul endroit
  honnête où il peut vivre.
- Dans `changes.md` toujours, la leçon de cet incrément, et il y en a deux :
  1. **Un compte sans son unité n'est pas approximatif, il est indécidable.** Deux nombres écrits par
     le Tech Lead sont tombés en revue, l'un trop haut, l'autre trop bas, aucun par excès de confiance :
     tous deux par absence de règle de comptage. La convention du 12 août 2026 existait déjà, elle
     n'avait pas été appliquée à ses propres énoncés.
  2. **Une définition qui porte deux critères n'est pas une définition.** Elle tient jusqu'au premier
     cas où les deux divergent, et ce cas arrive toujours. La question posée avant d'écrire a coûté
     un aller-retour et évité quinze classements faux.

---

*Prompt déposé le 13 août 2026 par le Tech Lead. Déposer n'est pas transmettre : il attend la
désignation du chef de projet.*
