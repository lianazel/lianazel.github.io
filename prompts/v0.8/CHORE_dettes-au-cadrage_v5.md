# CHORE — Révision 5 : une ligne de registre n'est pas un relevé, et ce sera la dernière révision

**Projet** : `lianazel.github.io` · **Type** : CHORE (documentation) · **Version du prompt** : **v5** · **Date** : 13 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Révise** : `CHORE_dettes-au-cadrage_v4.md`, **transmis et exécuté**, treize critères sur treize tenus.
Les deux réserves bloquantes portent sur le **texte imposé**, pas sur ton exécution. Cette révision
**corrige quatre endroits et ajoute un fichier**. Tout le reste de ton travail reste en place.

> ⚠️ **Enregistre ce prompt** sur la branche `chore/dettes-au-cadrage`, message `docs:`, attribution
> au Tech Lead, avant de reprendre `CLAUDE.md`. Les quatre premières révisions sont déjà à `76dab3c`
> et `bc7586a` : elles ne bougent pas.

---

## 0. Pourquoi cet incrément a produit cinq révisions, et pourquoi il s'arrête là

**Les échecs ne sont pas répartis, ils sont tous au même endroit.** D-16, D-18, D-19, D-21 et D-22
n'ont pas bougé depuis leur rédaction. Ce qui casse, à chaque tour, c'est **D-20** et les comptes qui
l'entourent : quatre liens, puis six ancres, maintenant treize.

**La cause est de forme, pas d'attention.** D-20 est un relevé de mesure complet écrit dans une ligne
de registre, alors que sa mesure est encore en mouvement. Chaque passe périme la prose de la
précédente. C'est structurel : inscrire une mesure mouvante dans une source de vérité **produit** des
révisions, et une v6 arriverait par le même chemin.

**Le remède est donc de forme.** Une ligne de registre porte une déviation, un impact et un plan, avec
**un** nombre portant son corpus. Le relevé complet, sa méthode et ses angles morts vivent dans un
**fichier de mesure enregistré au dépôt**, remplaçable sans toucher au cadrage. C'est le §4 de ce
prompt.

**Et l'arbitrage de la v4 est corrigé à moitié.** J'avais imposé le texte mot pour mot contre ta
recommandation de transposition, pour garder un critère mécanique. Le principe tenait, le coût était
sous-estimé : chaque mot imposé est un mot dont je réponds. **La règle devient donc mixte** : texte
littéral pour les énoncés courts qui portent une définition ou une convention, **substance et
contraintes** pour les documents longs et descriptifs. Le fichier de mesure du §4 est du second type,
et tu l'écris.

---

## 1. Les deux réserves bloquantes, et ce que j'en fais

**RV-9, et elle est grave.** Ma cellule `Déviation` déclarait « les dix-sept autres ancres passent, de
6,96 à 19,17 », ce qui incluait sept boutons `.btn-primary` dont ma cellule `Plan`, deux cellules plus
loin, disait qu'ils **n'avaient pas été mesurés et que tout chiffre les concernant serait faux**. Une
ligne ne peut pas déclarer conformes des éléments qu'elle déclare non mesurés. Ta mesure du dégradé
tranche : **aucun des 101 points échantillonnés n'atteint le seuil**, étendue de 3,40 à 4,44. L'état
réel est **treize ancres sur vingt-trois**, pas six.

> **Ce que cette réserve enseigne, et qui vaut plus que la correction.** Tu avais écrit l'angle mort
> dans ton propre rapport de mesure. Je l'ai recopié dans la cellule `Plan` **sans voir qu'il
> contredisait la cellule `Déviation` que je venais d'écrire**. Une réserve posée dans un document et
> une affirmation posée dans un autre ne se rencontrent jamais toutes seules. **Le seul endroit où
> elles se confrontent, c'est une relecture qui les tient ensemble**, et je ne l'ai pas faite.

**RV-10.** La couleur fautive de l'ancre TWAIM existe en **trois exemplaires**, une dans le corps et
une dans chaque bloc de langue. La bascule faisant `el.innerHTML = d[k]`, corriger le seul corps donne
un lien conforme jusqu'à la première bascule. C'est la mécanique de D-14, soldée l'avant-veille. Le
remède n'est pas « une valeur et une règle », c'est **trois copies d'une valeur, et une règle**.

**Les cinq réserves mineures sont acceptées** et traitées ci-dessous : RV-11 route d'arrondi, RV-12
corpus du vingt-trois, RV-13 définition d'Héritage, RV-15 argument du déplacement de D-5, RV-18 commit
manquant du 46 494.

**RV-13 est la plus importante des cinq, et c'est un vrai défaut de ma définition.** Écrire que
Héritage couvre « tout ce que le dépôt sert » fait d'Instrument un **sous-ensemble** d'Héritage,
puisque le dépôt sert aussi le cadrage et la porte. Tu as raison : le clivage décidable est le
**destinataire de ce que le remède change**, pas la publication, qui couvre tout.

---

## 2. Périmètre

`CLAUDE.md` et **un fichier neuf**. Cinq gestes :

1. **Corriger** la définition des deux familles dans le bloc de conventions du §8.
2. **Remplacer les trois cellules** de **D-20**.
3. **Ajouter une phrase** à la cellule `Plan de remboursement` de **D-17**.
4. **Ajouter le commit** au `46 494` de **D-19**.
5. **Créer** `tasks/MESURE_contraste-ancres_v1.md`, enregistré au dépôt.

**Rien d'autre.** D-16, D-18, D-21, D-22 et D-1 à D-15 ne sont pas touchées, ni aucune autre section
du cadrage, ni `index.html`, ni `scripts/`.

---

## 3. Préconditions vérifiables

1. Branche `chore/dettes-au-cadrage`, `CLAUDE.md` modifié non enregistré.
2. Le §8 porte 22 lignes, de D-1 à D-22, chacune à cinq barres verticales.
3. `tasks/MESURE_contraste-ancres_v1.md` n'existe pas. S'il existe, arrête-toi.
4. Les quatre prompts précédents sont enregistrés. Si l'un manque, dis lequel.

---

## 4. Le fichier de mesure, et c'est toi qui l'écris

**Crée `tasks/MESURE_contraste-ancres_v1.md`, enregistré au dépôt.** Je te donne la substance et les
contraintes, **pas le texte** : c'est un document long et descriptif, tu en as la matière et moi pas.

**Pourquoi ce fichier existe.** `.pipeline/` s'auto-ignore : ton rapport du 13 août **ne partirait pas
au dépôt**, et la substance d'une mesure qui a coûté deux passes disparaîtrait au premier nettoyage.
Le cadrage doit pouvoir **pointer** vers un relevé au lieu de le recopier, sans quoi chaque nouvelle
mesure oblige à réécrire une ligne de registre. C'est le défaut que cet incrément vient de démontrer
trois fois.

**Ce que le fichier doit porter :**

1. **La formule et la route de calcul**, reproductibles : WCAG 2.1, composition alpha en sRGB depuis
   la base opaque, parcours d'arbre pour les fonds effectifs, et la **règle d'arrondi**, énoncée une
   fois et appliquée partout. C'est la réserve RV-11 : `3,60` et `3,62` désignent le même couple par
   deux routes différentes, et un seul des deux doit survivre.
2. **Le corpus, nommé** : ce que « vingt-trois ancres » recouvre exactement, et pourquoi
   `grep -c "<a "` donne vingt-neuf. C'est la réserve RV-12.
3. **Le relevé par ancre** : localisation, premier plan, fond effectif, ratio, verdict.
4. **La mesure du dégradé** des `.btn-primary` : échantillonnage, étendue, nombre de points atteignant
   le seuil.
5. **Les couleurs de remplacement mesurées**, dont `--c1-soft` sur les trois fonds.
6. **Les angles morts, en toutes lettres et sans les adoucir** : mesure calculée depuis la feuille de
   style et non lue dans un navigateur · seules les ancres couvertes, ni texte courant, ni étiquettes,
   ni titres · aucun état interactif, et `.btn-outline:hover` inverse le fond · **et les six ancres
   qui vivent dans les valeurs du dictionnaire**, dont le rendu anglais n'a pas été mesuré.

**Contraintes :** aucun tiret cadratin · aucun nom de tiers · aucun chemin de machine · tout compte
porte son corpus, son unité et sa date · le fichier porte le commit sur lequel il a été établi.

---

## 5. Les quatre corrections du `CLAUDE.md`, mot pour mot

### 5.1 · Le bloc des familles, à corriger

**Cherche** le tableau des deux familles et le paragraphe qui le suit, dans le bloc de conventions.
**Remplace le tout** par :

````markdown
| Famille | Ce que le remède change |
|---|---|
| **Héritage** | ce qu'un **visiteur** lit : la page, et tout texte servi qu'un visiteur peut ouvrir |
| **Instrument** | ce qui **pilote le travail** : le cadrage, la porte, les conventions, et les nombres qu'ils déclarent |

**Le critère n'est pas la publication, qui couvre tout, mais le destinataire de ce que le remède
change.** Le dépôt sert aussi le cadrage et la porte : classer sur « ce qui est publié » ferait
d'`Instrument` un sous-ensemble d'`Héritage`. Un même fichier peut donc relever des deux selon le
remède : retirer un nom d'un journal servi change ce qu'un visiteur lit, donc `Héritage` ; en changer
la structure change ce qui pilote le travail, donc `Instrument`.

L'origine du défaut est un indice utile, elle n'est **pas** le critère : un défaut ancien peut se
rembourser dans l'instrument, un défaut récent dans la page. Une ligne dont deux sous-points appellent
deux remèdes différents n'est pas inclassable, elle **emballe deux dettes** et doit être coupée avant
d'être classée.
````

### 5.2 · D-20, les trois cellules

**Cellule `Déviation`** :

```
**Héritage.** **Le contraste du thème sombre est rouge, et pas seulement là où on le croyait.** Première mesure systématique le 13 août 2026 sur `8143241`, formule WCAG 2.1, seuil AA de **4,5 pour 1** pour du texte courant, fonds effectifs obtenus par parcours d'arbre avec composition alpha depuis la base opaque, ratios arrondis au centième par cette seule route. Sur les **vingt-trois ancres du corps rendu en français**, **treize sont sous le seuil**, en deux familles : **six ancres en `var(--c1)` `#6c63ff`** sur fond plat, à **3,60** sur le fond des sous-cartes, **4,00** sur celui des cartes de projet, **4,44** sur le fond de page ; et **sept boutons `.btn-primary`**, texte blanc sur dégradé, dont **aucun des 101 points échantillonnés** le long du dégradé n'atteint le seuil, l'étendue allant de **3,40** à **4,44**. Le relevé par ancre, la méthode et les angles morts vivent dans `tasks/MESURE_contraste-ancres_v1.md`, et c'est là qu'ils se mettent à jour. *Deux rédactions antérieures ont annoncé « quatre liens » puis « six ancres » : la première ne correspondait à aucune unité de comptage, la seconde déclarait conformes, dans cette cellule, les sept boutons qu'elle disait deux cellules plus loin n'avoir pas mesurés. Relevé en revue le 13 août 2026.*
```

**Cellule `Impact`** :

```
Lisibilité dégradée pour une partie des lecteurs, sur les liens et les boutons qui sont le **chemin de sortie de la page**. Le §9 note depuis le 8 août 2026 que le contraste du thème sombre n'a jamais été mesuré : c'est la première mesure, et **plus de la moitié des ancres mesurées échouent**.
```

**Cellule `Plan de remboursement`** :

```
**La première famille a un remède connu et gratuit** : `--c1-soft` `#b0aaff` existe déjà dans `:root` et donne **7,46 · 8,25 · 9,16** sur les trois fonds, les trois passant AA et deux passant AAA. **La seconde n'en a pas** : le dégradé porte du texte blanc sur toute son étendue et aucun point n'atteint le seuil, donc le remède touche le dégradé lui-même ou le texte qu'il porte, ce qui reste à instruire. **Et le geste est trois fois plus long qu'il n'y paraît** : la couleur fautive de l'ancre du bloc TWAIM existe en **trois exemplaires**, une dans le corps et une dans chaque bloc de langue du dictionnaire ; la bascule faisant `el.innerHTML = d[k]`, ne corriger que le corps donne un lien conforme **jusqu'à la première bascule de langue**, après quoi la couleur fautive revient. C'est la mécanique de **D-14**, soldée le 11 août 2026. Le remboursement est donc une **passe d'accessibilité sur la page entière**, incrément à part, qui devra **toucher la feuille de style**, ce que l'incrément du bloc TWAIM avait explicitement interdit et qu'il faudra autoriser en toutes lettres.
```

### 5.3 · D-17, une phrase à ajouter

**Cherche** dans la cellule `Plan de remboursement` la phrase : `Le périmètre couvre aussi les journaux, les prompts et les artefacts committés.`

**Remplace-la par** :

```
Le périmètre couvre aussi les journaux, les prompts et les artefacts committés, **et il grandit tout seul** : chaque prompt enregistré qui cite ces chaînes l'agrandit, sans qu'aucun contrôle ne le signale. C'est une raison de traiter la famille A tôt plutôt que tard.
```

### 5.4 · D-19, le commit manquant

**Cherche** : `mesurés le 12 août 2026 par `wc -m` sur le fichier entier`

**Remplace par** :

```
mesurés le 12 août 2026 sur `8143241` par `wc -m` sur le fichier entier
```

---

## 6. Ce que tu corriges dans `changes.md`

**RV-15, l'argument du déplacement de D-5.** Il était appuyé sur « la conséquence actionnable », qui
n'est pas le critère. **Réécris-le sur le critère adopté** : le remède de D-5 est une règle de mesure,
donc il change ce qui pilote le travail, donc `Instrument`. La conclusion ne bouge pas, l'argument
oui.

**Et note ce que ce déplacement a enseigné** : le remède n'était pas dans la première phrase de la
cellule, qui dit « aucune action sur le site » et se lit comme une absence de remède. Un classement
qui s'arrête à la première phrase se trompe.

**Ta correction de D-8 est acquise** : 7 / 6 / 2, avec `indéterminable` pour D-8 et D-11.

---

## 7. Ce que tu ne fais pas

- **Aucune correction du site.** Ni couleur, ni feuille de style, ni `index.html`.
- **Aucune modification de D-16, D-18, D-21, D-22, ni de D-1 à D-15.**
- **Aucun relevé chiffré nouveau dans le `CLAUDE.md`.** Les nombres du relevé vont dans le fichier de
  mesure ; le cadrage en garde le strict nécessaire et **pointe** vers lui.
- **Aucun nombre de taille de `CLAUDE.md` écrit dans `CLAUDE.md`.**

---

## 8. Critères d'acceptation

1. Les quatre corrections du §5 sont appliquées **mot pour mot**.
2. `tasks/MESURE_contraste-ancres_v1.md` existe, enregistré, et porte les six points du §4.
3. **Le §8 parse toujours** : 22 lignes de D-1 à D-22, **cinq barres verticales chacune**, sans
   exception. Contrôle-le et rapporte-le.
4. **Aucun texte inséré en cellule ne contient de barre verticale, de ligne vide, de titre ou de bloc
   de citation.** Contrôle-le et rapporte-le.
5. **Plus aucune cellule de D-20 ne déclare conforme un élément déclaré non mesuré ailleurs dans la
   même ligne.** C'est la réserve RV-9 : vérifie-la explicitement, elle est le motif de cette révision.
6. **Une seule route d'arrondi** dans tout le fichier de mesure et dans D-20. Plus de `3,60` face à
   `3,62`.
7. **Tout compte porte son corpus** : « vingt-trois ancres » dit lesquelles, dans le cadrage comme
   dans le fichier de mesure.
8. D-16, D-18, D-21, D-22 et D-1 à D-15 **inchangées**, empreinte à l'appui.
9. **Aucun tiret cadratin** dans le texte ajouté, ni dans le fichier neuf. `index.html` non ouvert,
   `152` écrits inchangés.
10. `changes.md` porte l'argument de D-5 réécrit sur le critère du remède.
11. Porte verte, **exactement 4 avertissements**.
12. Ce prompt est enregistré sur la branche avant la reprise de `CLAUDE.md`.

---

## 9. Livrables

- Les artefacts habituels, puis `.pipeline/STATUS.md` = `READY — …` en **dernier geste**.
- Dans `changes.md`, la taille du `CLAUDE.md` avant et après, avec sa règle de comptage et son commit.
- Dans `changes.md`, la leçon de cette révision, et elle est la plus utile des cinq :
  **une réserve écrite dans un document et une affirmation écrite dans un autre ne se rencontrent
  jamais d'elles-mêmes.** L'angle mort des boutons sur dégradé était posé, correctement, dans le
  rapport de mesure. Il a été recopié dans une cellule sans être confronté à la cellule voisine, qui
  affirmait le contraire. Le seul instrument qui les confronte est **une relecture qui les tient
  ensemble**, et aucune porte ne la remplace.
- Une phrase pour le journal au moment du `/land` : l'enregistrement des prompts a publié **trente
  occurrences de plus** des noms de D-17, ce qui n'est pas une divulgation puisque les dix sont déjà
  servis, mais agrandit le périmètre de remboursement que D-17 déclare.

---

*Prompt déposé le 13 août 2026 par le Tech Lead. Déposer n'est pas transmettre.*
