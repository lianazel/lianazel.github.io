# CHORE — La troisième leçon du 13 août : la boucle, et la règle qui la borne

**Projet** : `lianazel.github.io` · **Type** : CHORE (documentation) · **Version du prompt** : **v1** · **Date** : 13 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code

Un seul fichier : `tasks/lessons.md`. Une entrée ajoutée à la fin.
Rien d'autre, aucun autre fichier, aucune ligne existante modifiée.

---

## Étape 0 · Une question de placement, à vérifier avant d'écrire

Enregistre ce prompt dans le bucket qu'impose la règle du projet, la version étant lue dans `VERSION`
et non dans `package.json`, qui n'existe pas ici.

Et signale-moi ceci **sans le corriger** : les cinq prompts de l'incrément précédent vivent dans
`prompts/v0.8/` alors que `VERSION` portait déjà `0.9.1`. Si c'est une déviation, dis-le.
**Ne la répare pas.**

---

## L'entrée à ajouter

Même forme que les deux leçons du 13 août : titre daté, Type, Contexte, Erreur, Correction/Pattern,
Applicable globalement.

**Titre** — 13 août 2026 : une révision est une soupape, pas un mode de travail.

**Type** — Erreur de méthode, relevée par le chef de projet.

**Contexte** — L'incrément « dettes au cadrage » a demandé cinq révisions du prompt, dont deux
arrêtées avant toute écriture, pour un travail de documentation seule. Cinq rédactions, trois arrêts,
deux revues complètes.

**Erreur** — L'erreur n'est aucun des défauts pris un par un. Ils étaient réels et chacun a été
correctement attrapé. L'erreur est que rien ne bornait la boucle : le harnais autorise une révision de
plus, indéfiniment, et personne ne comptait.

La cause profonde est une taille d'incrément. Six dettes sans rapport entre elles, plus une convention
de repères, plus une taxonomie de familles, plus le classement de quinze lignes anciennes, dans une
seule consigne. Un défaut n'importe où obligeait à réécrire le tout. Découpé en six petits travaux,
chacun aurait échoué au plus une fois, et une correction n'aurait coûté que sa ligne.

Deuxième cause, de rédaction : un arbitrage qui tenait en un caractère a exigé une révision entière du
prompt, parce que le texte était imposé mot pour mot et qu'un mot imposé engage son auteur.

**Correction / Pattern** — Règle des trois révisions, inscrite au référentiel le 13 août 2026 :
au-delà de trois, on ne révise plus, on découpe.

1. Une quatrième révision n'est pas une correction, c'est le signe que la forme de l'incrément est
   fausse, pas sa rédaction.
2. À ce point, ce qui est déjà juste atterrit, et ce qui résiste devient un incrément séparé et plus
   petit.
3. Un arbitrage qui tient en un mot ne voyage jamais dans une révision : il est transmis comme
   décision et tracé comme tel.
4. Le compte se tient à voix haute : au dépôt de la troisième révision, le Tech Lead le dit et propose
   le découpage.

Écris aussi que rien ne fait respecter cette règle : aucun contrôle ne compte les révisions d'un
prompt, et elle n'a encore rien attrapé. C'est une intention datée tant qu'un premier cas réel ne l'a
pas éprouvée.

**Applicable globalement** — Oui. Le geste : compter les révisions à voix haute, et traiter la
troisième comme un signal de découpage plutôt que comme une étape.

---

## Une observation à porter dans le même esprit

Le filet est resté vert du début à la fin des cinq révisions. Il n'avait rien à dire : il vérifie le
site, pas les documents de la méthode. Le prompt est la seule pièce de la chaîne qui ne passe par
aucune porte, et c'est celle qui gouverne toutes les autres. Écris-le dans la leçon. C'est un constat,
pas un chantier : le remède s'instruira au référentiel.

---

## Critères

1. Une seule entrée ajoutée, en fin de `tasks/lessons.md`.
2. Aucune ligne existante modifiée, aucun autre fichier.
3. Aucun tiret cadratin dans le texte ajouté.
4. Aucun nombre qui puisse se périmer : pas de taille de fichier, pas de compte de lignes du registre.
   Les comptes de révisions, d'arrêts et de revues sont des faits datés et clos, ils peuvent rester.
5. Porte verte, exactement 4 avertissements.
6. Ce prompt est le premier commit de la branche, attribué au Tech Lead.
