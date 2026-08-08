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

## 8 août 2026 — Un gabarit porte deux syntaxes de marqueur ; le contrôle n'en connaissait qu'une

**Type** : Erreur (relevée par le chef de projet)
**Contexte** : Instanciation de `.claude/` depuis `_TEMPLATE_AGENTS`. Le contrôle de fin
d'instanciation cherchait `<!-- BALISE -->` et a répondu « aucune balise restante ».

`land.md` contenait pourtant un second marqueur non substitué, `<manifeste-version>`, écrit en
**chevrons simples**. Le contrôle ne l'a pas vu, et la commande `/land` est partie en dépôt avec un
`git add <manifeste-version>` inexécutable — plus une ÉTAPE 4 qui nommait `pyproject.toml` ou
`package.json`, deux fichiers que ce projet n'a pas et **ne doit pas avoir**.

**Correction/Pattern** : trois règles.

1. **Un contrôle de substitution énumère toutes les syntaxes de marqueur du gabarit**, pas la plus
   visible. Ici : commentaire HTML **et** chevrons simples. Un contrôle vert sur une seule forme est
   un faux vert — il fabrique la confiance qu'il devrait mesurer.
2. **La seconde forme ne se tranche pas par expression régulière.** Sur ce gabarit, 13 marqueurs en
   chevrons subsistent légitimement (`<branche>`, `<slug>`, `<ISO>`, `<hash>`…) : ce sont des
   **paramètres d'exécution**, remplis quand la commande tourne. `<manifeste-version>` était d'une
   autre nature — une **valeur de projet**, connue dès l'instanciation. Le discriminant est
   sémantique : *cette valeur est-elle connue au moment où l'on instancie, ou seulement au moment où
   l'on exécute ?* Le contrôle **énumère et fait relire l'inventaire** ; il ne prétend pas juger seul.
3. **Un chemin prescrit par une commande se garde par une vérification d'existence.** `/land` écrit
   désormais le manifeste réel de ce projet (`VERSION`) et **s'arrête** s'il ne le trouve pas, au lieu
   d'en deviner un autre. Un manifeste absent est une anomalie de dépôt, pas un cas à rattraper.

**Applicable globalement ?** : Oui — tout écosystème à gabarits (kits d'agents, `cookiecutter`,
scaffolding, `.github` org-templates, snippets partagés). Cousine directe de la leçon globale du
15 juin 2026 (« faire évoluer le framework = modifier le TEMPLATE d'abord »), qu'elle complète par
l'aval : *la descente gabarit → instance a besoin d'un contrôle qui couvre toutes les formes de
marqueur, sinon la spécialisation est incomplète en silence.*

**Promue en global le 8 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Un gabarit porte plusieurs syntaxes de marqueur : le contrôle de substitution
doit toutes les couvrir, et la seconde forme ne se tranche pas par regex », avec l'empreinte `ea01e91`
de la présente jumelle locale.

> **Note de périmètre** : le gabarit du référentiel porte le même défaut aux deux endroits. Il n'a
> **pas** été touché — décision du chef de projet du 8 août 2026 : il sera corrigé séparément, dans
> son propre dépôt, par son propre rituel.
