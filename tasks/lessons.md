# Registre local des leçons — lianazel.github.io

> Format : `## [DATE] — [Titre court]`, puis Type / Contexte / Erreur-Approche / Correction-Pattern /
> Applicable globalement. Une leçon universelle est promue dans `~/.claude/lessons.md` **en ajout
> seul**, après validation du chef de projet.

## 8 août 2026 — Vérifier l'indicateur avant de croire sa sortie

**Type** : Erreur
**Contexte** : Passe d'alignement du projet sur le harnais de travail. Écriture du contrôle de
complétude du dictionnaire bilingue d'`index.html`.

Un contrôle de complétude naïf, ancré en début de ligne, a produit vingt faux défauts sur ce
dictionnaire parce que plusieurs clés tiennent sur une même ligne. Un indicateur mal choisi fabrique
exactement le défaut qu'il est censé détecter : vérifier l'indicateur avant de croire sa sortie.

**Correction/Pattern** : un motif de reconnaissance de clé doit s'ancrer sur la **syntaxe réelle**
(accolade ouvrante ou virgule précédant l'identifiant), jamais sur la mise en forme du fichier — le
retour à la ligne est une convention d'écriture, pas une structure. Corollaire de méthode : quand un
contrôle nouvellement écrit rougit massivement sur du code réputé sain, la première hypothèse est le
contrôle, pas le code. C'est ce que la preuve de morsure verrouille dans l'autre sens :
`scripts/fixtures/broken.html` prouve que la porte sait dire non.

**Applicable globalement ?** : Oui — cousin de la leçon globale du 9 juin 2026 (« prouver une
propriété structurelle par l'AST/la syntaxe, jamais par `grep` du mot »). À proposer en promotion au
chef de projet.
