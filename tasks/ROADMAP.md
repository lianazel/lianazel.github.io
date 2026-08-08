# Feuille de route — lianazel.github.io

> Reprend les six déviations connues du `CLAUDE.md` §8, **par ordre de priorité de remboursement**.
> Le `CLAUDE.md` reste la source de vérité : ce document ordonne, il ne redéfinit pas.
> Aucune de ces lignes n'est un invariant — le code ne les respecte pas aujourd'hui, et c'est assumé.

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
