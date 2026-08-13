# MESURE — Contraste des ancres du thème sombre

**Projet** : `lianazel.github.io` · **Version** : v1 · **Date** : 13 août 2026
**Établi sur** : `8143241` · **Auteur** : Claude Code, à la demande du Tech Lead
**Ce que ce fichier sert** : la ligne **D-20** du registre pointe ici. Le cadrage garde le strict
nécessaire, le relevé vit ici et se remplace **sans toucher au cadrage**.

> **Pourquoi ce fichier est versionné.** Une mesure inscrite en toutes lettres dans une ligne de
> registre périme la prose de cette ligne à chaque nouvelle passe. Cet incrément l'a démontré trois
> fois : `quatre liens`, puis `six ancres`, puis `treize ancres`. Un registre pointe, il ne recopie pas.

---

## 1. La règle de calcul, énoncée une fois et appliquée partout

### Formule

WCAG 2.1, sans variante :

```
c_lin = c/12.92                  si c ≤ 0.04045
c_lin = ((c+0.055)/1.055)^2.4    sinon
L     = 0.2126·R + 0.7152·G + 0.0722·B
ratio = (L_clair + 0.05) / (L_sombre + 0.05)
```

### Composition des fonds

Alpha en espace sRGB, **depuis la base opaque vers le haut** : `res = a·fg + (1−a)·bg`.
Les fonds effectifs sont obtenus par **parcours d'arbre** : chaque ancre hérite du fond de son plus
proche ancêtre qui en déclare un. **Un balayage textuel ne suffit pas** — il donne le mauvais
conteneur pour les boutons contour, dont le fond est `transparent`.

### Route d'arrondi — **non arrondie**, et c'est un arbitrage

**On compose en pleine précision et l'on arrondit une seule fois, à la fin, sur le rapport.**

```
rgba(255,255,255,.04) sur --card #1a1830  →  (35,16 · 33,24 · 56,28)
puis WCAG                                 →  3,605  →  3,60
```

**Cette route seule est employée dans tout ce fichier et dans la ligne D-20.** Aucun nombre n'y est
calculé depuis un fond pré-arrondi.

> ### ⚠️ L'objection, et elle est sérieuse
>
> **La route arrondie décrit mieux la couleur réellement peinte.** Le composite n'est pas un
> intermédiaire de calcul : c'est une couleur physique, que le compositeur **quantifie sur huit bits
> par canal** avant de l'afficher. Ce qu'un œil reçoit est `rgb(35,33,56)`, pas `(35,16 · 33,24 ·
> 56,28)`. Et un outil d'audit qui lit la couleur affichée trouvera la valeur quantifiée.
>
> Sur un critère d'accessibilité, qui parle de ce qu'un lecteur **voit**, cet argument l'emporte sur
> l'hygiène numérique.
>
> **L'écart, mesuré, est d'un centième et ne déplace aucun verdict :**
>
> | Couple, sur le fond de sous-carte | Non arrondie | Arrondie | AA | AAA |
> |---|---|---|---|---|
> | `--c1` `#6c63ff` | **3,60** | 3,62 | échoue des deux côtés | — |
> | `--c1-soft` `#b0aaff` | **7,44** | 7,46 | passe des deux côtés | passe des deux côtés |
>
> **Pourquoi la route non arrondie a été retenue malgré cela** — arbitrage du chef de projet du
> 13 août 2026 : aucun verdict ne change · `3,60` est déjà écrit dans **trois prompts enregistrés**,
> qui ne se réécrivent pas · `7,44` est déjà au journal · et la route arrondie créerait un écart entre
> le cadrage et des pièces gelées, sans note pour l'expliquer.
>
> **Ce qu'il faudra faire le jour venu** : adopter la route arrondie **dès qu'un outil d'audit lira la
> couleur affichée**, parce qu'il ne pourra rendre que la valeur quantifiée. Ce jour-là, ce fichier
> change de route et D-20 n'a pas à bouger : c'est précisément ce que ce fichier existe pour permettre.

---

## 2. Le corpus, nommé — ce que « vingt-trois ancres » recouvre

**Vingt-trois est le nombre d'éléments `<a>` du corps de la page tel qu'il est rendu**, c'est-à-dire
entre la fin de la feuille de style et l'ouverture du programme, commentaires HTML retirés.

**Un lecteur qui fait `grep -c "<a "` sur `index.html` obtient vingt-neuf, et il a raison.**
L'écart de six s'explique entièrement :

| Origine | Nombre |
|---|---|
| Ancres du corps de la page | **23** |
| Ancres vivant **dans les valeurs du dictionnaire** — trois clés `y331`, `y332`, `y333`, chacune en deux langues | **6** |
| **Total dans le fichier** | **29** |

**Les six du dictionnaire ne sont pas comptées ici**, et il faut savoir pourquoi : trois d'entre elles
sont les **doublons français** des ancres déjà présentes dans le corps — la page écrite en français les
porte déjà — et les trois autres sont leurs **équivalents anglais**, qui ne s'affichent qu'après une
bascule de langue. **Le rendu anglais n'a pas été mesuré** : voir les angles morts au §6.

---

## 3. Le relevé, ancre par ancre

**Vingt-trois ancres. Treize sous le seuil AA de 4,5 pour 1.**

### Famille A — six ancres en `var(--c1)` sur fond plat

| # | Localisation | Premier plan | Fond effectif | Ratio | AA |
|---|---|---|---|---|---|
| 1 | lien de la sous-carte du bloc TWAIM | `#6c63ff` | `rgb(35,16 · 33,24 · 56,28)` | **3,60** | échec |
| 2 | bouton contour, carte GrainWatch | `#6c63ff` | `#1a1830` | **4,00** | échec |
| 3 | bouton contour, carte GrainTrack3D | `#6c63ff` | `#1a1830` | **4,00** | échec |
| 4 | bouton contour, carte FuelMapPrice | `#6c63ff` | `#1a1830` | **4,00** | échec |
| 5 | bouton contour, carte CryptoAnalyser | `#6c63ff` | `#1a1830` | **4,00** | échec |
| 6 | bouton contour du bandeau d'accueil | `#6c63ff` | `#0f0e17` | **4,44** | échec |

**Six adresses distinctes**, aucune répétée. **Trois couples couleur sur fond.**

**Un fait qui change le remède** : une seule de ces six porte la couleur en **style en ligne**, la
n° 1. Les cinq autres la tiennent de la règle de classe `.btn-outline`, qui déclare
`color:var(--c1)` sur `background:transparent`.

### Famille B — sept boutons `.btn-primary`, texte blanc sur dégradé

Règle : `background:linear-gradient(135deg,var(--c1),var(--c2)); color:#fff`.

| Point du dégradé | Couleur | Ratio |
|---|---|---|
| Départ, `--c1` | `#6c63ff` | **4,32** |
| Arrivée, `--c2` | `#f64f59` | **3,40** |
| **Étendue sur 101 points échantillonnés** | | **3,40 à 4,44** |
| **Points atteignant 4,5** | | **0 sur 101** |

**Aucun point du dégradé n'atteint le seuil.** Les sept échouent, partout, quel que soit l'endroit du
bouton où le texte se pose.

> **Ces sept-là avaient été déclarés conformes par erreur.** Une rédaction antérieure de D-20 les
> incluait dans une fourchette « 6,96 à 19,17 », avec un ratio de 17,25 calculé contre **le fond du
> conteneur** et non contre le dégradé. **Un chiffre calculé sur le mauvais fond n'est pas une mesure
> imprécise, c'est une mesure d'autre chose.**

### Les dix ancres qui passent

| Localisation | Premier plan | Fond | Ratio |
|---|---|---|---|
| Quatre liens de la barre de navigation | `--sub` `#a7a9be` | `#0f0e17` | 8,27 |
| Lien du dépôt, sous-carte TWAIM | `--c3` `#43e97b` | `rgb(35,16 · 33,24 · 56,28)` | 9,76 |
| Lien MetalWatch, sous-carte TWAIM | `--c4` `#f7971e` | idem | 6,96 |
| Lien `timeshare400.com` | `--c3` | `#1a1830` | 10,83 |
| Lien `ville-soa.fr` | `--c4` | `#1a1830` | 7,72 |
| Deux liens `.clink` du bloc contact | `--text` `#fffffe` | `#1a1830` | 17,24 |

**Le défaut appartient à la couleur, pas au motif** : dans la même sous-carte, `--c3` et `--c4`
passent largement là où `--c1` échoue.

---

## 4. Les couleurs de remplacement, mesurées

`--c1-soft` `#b0aaff` **existe déjà dans `:root`** et est déjà employée ailleurs dans la page.

| Fond | `--c1` | `--c1-soft` | Gain | AA | AAA |
|---|---|---|---|---|---|
| Sous-carte, `rgb(35,16 · 33,24 · 56,28)` | 3,60 | **7,44** | +3,84 | passe | **passe** |
| Carte de projet, `#1a1830` | 4,00 | **8,25** | +4,25 | passe | **passe** |
| Fond de page, `#0f0e17` | 4,44 | **9,16** | +4,72 | passe | **passe** |

**Aucune couleur nouvelle n'est nécessaire pour la famille A.**

**La famille B n'a pas de remplacement mesuré.** Le dégradé porte du texte blanc sur toute son
étendue et aucun point n'atteint le seuil : le remède touche **le dégradé lui-même ou le texte qu'il
porte**, et cela reste à instruire.

---

## 5. Le remède est trois fois plus long qu'il n'y paraît

`color:var(--c1);text-decoration:underline` apparaît **trois fois** dans `index.html` :

| Emplacement | Ce que c'est |
|---|---|
| le corps de la page | ce qu'un visiteur voit avant toute bascule |
| valeur `y331`, bloc `fr` | ce qu'il voit après un aller-retour de langue |
| valeur `y331`, bloc `en` | ce que voit un lecteur anglophone |

**La bascule fait `el.innerHTML = d[k]`.** Corriger le seul corps produit un lien conforme **jusqu'à la
première bascule de langue**, après quoi la couleur fautive revient, **dans les deux sens**.

C'est la mécanique de la dette **D-14**, soldée le 11 août 2026. Le motif est structurel et dépasse ce
cas : **tout balisage placé dans une valeur du dictionnaire est une copie que rien ne compare.**

---

## 6. Les angles morts, en toutes lettres

**À lire avant de croire ce relevé complet.**

1. **La mesure est calculée depuis la feuille de style, pas lue dans un navigateur.** Aucun pixel n'a
   été inspecté.
2. **Seules les ancres sont couvertes.** Ni le texte courant, ni les étiquettes, ni les titres de
   sous-carte, ni les libellés en `--cN-soft`.
3. **Aucun état interactif** : `:hover`, `:focus`, `:visited` ne sont pas mesurés. `.btn-outline:hover`
   **inverse le fond**, donc change le couple, donc change le ratio.
4. **Les six ancres qui vivent dans les valeurs du dictionnaire ne sont pas dans le corpus**, et le
   **rendu anglais n'a pas été mesuré**. Une couleur qui ne serait fautive qu'après une bascule de
   langue échapperait entièrement à ce relevé.
5. **Le dégradé est échantillonné, pas intégré** : 101 points le long du parcours. Le rendu réel
   dépend de l'angle, de la taille du bouton et du tramage du moteur.
6. **Aucun contrôle automatique ne surveille rien de tout ceci.** Ce fichier est un relevé daté, pas
   une barrière. Il vaut pour `8143241` et pour lui seul.

---

## 7. Comment refaire la mesure

La route n'est pas reproductible par une expression régulière : il faut le parcours d'arbre. Le
programme employé lit `:root`, résout les variables, empile les fonds déclarés en ligne ou par classe,
compose les couches translucides depuis la base opaque **sans arrondir**, puis applique la formule du
§1 et arrondit le rapport au centième.

**Le contrôle le plus simple, pour un lecteur pressé** : prendre `#6c63ff` et `#1a1830`, appliquer la
formule, trouver **4,00**. C'est le couple sans composition, donc sans question d'arrondi.

---

*Établi le 13 août 2026 sur `8143241`. La ligne D-20 du `CLAUDE.md` pointe vers ce fichier ; c'est ici
que la mesure se met à jour, pas dans le registre.*
