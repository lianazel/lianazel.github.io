# TEMOIN DE CADRAGE MUET — preuve que la garde du budget de largeur mord

Ce fichier ne fait **PAS** partie du cadrage du projet. Il tient lieu de `CLAUDE.md` pour une seule
execution de la porte, afin de prouver que le **controle 8** refuse de travailler sans reference.

Il est volontairement **depourvu du jeton d'ancrage** du budget de largeur. Il ne contient donc ni la
largeur d'ecran minimale visee, ni la place utile qui en decoule.

Attendu : `node scripts/check-i18n.mjs index.html --cadrage=scripts/fixtures/cadrage-sans-budget.md`
doit **echouer** avec un message contenant « Budget de largeur introuvable dans le cadrage ».
S'il retourne 0, la garde est morte : le controle 8 pourrait alors se taire en silence sur un cadrage
ampute, et une adresse trop large passerait sans que rien ne rougisse.

**Ne pas ajouter de budget ici** : ce serait desarmer la preuve. C'est l'absence qui est utile,
exactement comme l'absence d'adresse de contact dans `blind.html`.

Pourquoi un fichier separe plutot qu'une valeur en dur dans le script : le budget est ecrit dans le
cadrage et lu la-bas, pour qu'il n'en existe qu'une seule copie. Une garde de lisibilite devient alors
necessaire — et une garde sans temoin ou elle mord naturellement naitrait invisible, ce que la revue
du 9 aout 2026 a deja constate une fois de trop.
