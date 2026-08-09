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

---

## 9 août 2026 — Une assertion posée sur un identifiant nu peut être satisfaite par un autre contrôle

**Type** : Erreur

**Contexte** : la porte `gate.sh` vérifie que le témoin défectueux échoue **en nommant** ses défauts,
et non seulement par son code de retour. Une revue a montré que 4 des 6 contrôles pouvaient mourir en
silence. Correction : une assertion par contrôle, chacune cherchant dans la sortie l'identifiant du
défaut semé — `only_fr` pour la symétrie, `dup_key` pour le doublon, etc.

**Erreur** : l'assertion `only_fr` était **vacueuse**. Contrôle de symétrie neutralisé en bac à
sable, la porte est restée **verte**. Cause : `only_fr` est aussi le nom d'une **clé orpheline**, que
le contrôle informatif annonce en `AVERTISSEMENT`. Le motif était satisfait par la sortie **d'un
autre contrôle**, non bloquant de surcroît. L'assertion censée fermer le trou de R1 le rouvrait —
même classe de défaut, dans sa propre correction.

**Correction/Pattern** : **une assertion de vivacité porte le MESSAGE PROPRE du contrôle qu'elle
prouve vivant, jamais un identifiant nu.** `presente en "fr" mais absente en "en" : only_fr`, pas
`only_fr`. Un identifiant circule — il apparaît dans les avertissements, les journaux, les messages
voisins. Une phrase d'erreur, elle, n'appartient qu'à un contrôle.

Corollaire de méthode : **une assertion ne se relit pas, elle se prouve.** Chacune des six a été
vérifiée en neutralisant son contrôle sur une copie hors dépôt (remplacement de `errors.push(` par
`[].push(` — no-op valide qui simule un contrôle *mort*, et non un fichier cassé qui se trahirait
par une exception). Sans cette épreuve, l'assertion vacueuse serait partie en production.

**Applicable globalement ?** : **Oui** — tout harnais de test qui asserte sur une sortie textuelle
(porte CI, contrôle de lint, test d'intégration lisant des journaux).

**Promue en global le 9 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Une assertion posée sur un identifiant nu peut être satisfaite par un autre
contrôle », avec l'empreinte `e092df8` de la présente jumelle locale. Geste porté par
`prompts/v0.2/CHORE_promotion-lecons-globales_v1.md`.

---

## 9 août 2026 — Une garde qu'on n'a pas vue mordre sur son défaut n'est pas une garde, c'est une croyance

**Type** : Erreur

**Contexte** : R2 signalait un angle mort — un balisage déséquilibré **gonfle** la couverture et vide
le contrôle en silence, là où les seuils de non-vacuité ne surveillent que le **manque**. La revue
proposait une condition précise : en fin d'extraction, erreur si la pile de balises n'est pas vide.

**Erreur** : la condition est plausible à la lecture, et **inopérante sur le scénario même qu'elle
vise**. `</body>` puis `</html>` referment tout, y compris la balise laissée ouverte : à la fin, la
pile **est** vide. Mesuré — un `<span data-i18n>` non fermé fait passer la page à **344 suites sur
344 « couvertes »**, le contrôle est mort, et la porte reste **verte** avec la garde en place. La
correction aurait été enregistrée, documentée, et parfaitement inutile.

**Correction/Pattern** : **avant d'adopter une correction de garde, la faire échouer sur le défaut
qu'elle prétend attraper.** Si elle ne rougit pas, elle ne corrige rien — quel que soit le sérieux de
qui l'a proposée, et quelle que soit sa cohérence apparente.

Deux compléments tirés du même incrément :

1. **Chercher le bon point d'observation.** Ici, le déséquilibre n'est visible qu'à l'instant du
   **dépilement multiple**, pas à la fin du parcours. Une garde placée au mauvais endroit peut être
   juste dans sa formulation et aveugle dans les faits.
2. **Mesurer les faux positifs AVANT de durcir.** Les trois cibles réelles comptaient 0 fermeture
   implicite et 0 fermeture orpheline : le durcissement ne coûtait rien au vert légitime. Sans ce
   relevé, on durcit à l'aveugle et on découvre la casse en production.

**Applicable globalement ?** : **Oui** — vaut pour toute garde, tout garde-fou de sécurité, toute
assertion défensive. Cousine directe de la leçon ci-dessus : l'une dit *prouve que ton assertion
détecte*, l'autre *prouve que ta garde attrape*.

**Promue en global le 9 août 2026 (validation du chef de projet)** — `~/.claude/lessons.md`, en ajout
seul, sous le titre « Une garde qu'on n'a pas vue mordre sur son défaut n'est pas une garde, c'est
une croyance », avec l'empreinte `e092df8` de la présente jumelle locale. Geste porté par
`prompts/v0.2/CHORE_promotion-lecons-globales_v1.md`.

---

## 9 août 2026 — Une assertion de vivacité se pose par chemin bloquant, pas par contrôle

**Type** : Erreur (relevée en revue)

**Contexte** : incrément « adresse de contact », 7ᵉ contrôle bloquant de `scripts/check-i18n.mjs`. Le
contrôle compare les trois occurrences de l'adresse dans la page, et une **garde de non-vacuité**
protège son extraction : chaque motif doit trouver exactement une occurrence, faute de quoi le
contrôle s'exécuterait sur du vide. `gate.sh` porte, depuis la revue du 9 août, la règle écrite dans
son propre commentaire : *tout nouveau contrôle bloquant ajoute ici son assertion, sinon il naîtra
invisible.*

**Erreur** : j'ai lu cette règle comme **une assertion par contrôle**, et j'en ai posé une — celle de
la divergence, semée dans le témoin défectueux. Or ce contrôle a **deux** chemins bloquants : la
comparaison, et la garde qui la rend possible. Le second n'était asserté nulle part.

Mesuré, pas déduit. Garde neutralisée (`errors.push(` → `[].push(` sur ce seul site), la porte reste
**verte**. Sur cette porte mutilée, j'ai composé la panne réelle : un remaniement anodin renomme la
classe `email-text`, la constante de `copyEmail()` reste sur l'ancienne adresse. Résultat : la page
affiche la nouvelle adresse, le bouton « Copier » place l'ancienne, **et la porte sort en code 0** —
c'est-à-dire exactement le mode de panne que ce contrôle venait d'être écrit pour fermer.

Aggravant : j'avais **documenté l'inverse** en décision de conception (« une seule branche, donc
aucune ne peut mourir sans que l'assertion s'en aperçoive »). L'affirmation était fausse et donnait
au lecteur une garantie qui n'existait pas.

**Correction/Pattern** : **compter les chemins qui peuvent pousser une erreur, pas les contrôles.**
Un contrôle qui protège son extraction par une garde en a au moins deux, et c'est **la garde** qui
meurt en silence — parce qu'une condition du type « si l'extraction a abouti » fait taire tout le
reste du contrôle sans rien signaler.

Deux compléments du même incident :

1. **La garde a besoin d'une cible où elle mord naturellement.** Ici, le témoin de cécité ne porte
   aucune adresse : la garde y tire ses erreurs à chaque exécution, l'ancrage est stable et gratuit.
   Chercher cette cible existante avant d'en fabriquer une.
2. **Une décision de conception écrite est une affirmation, donc elle s'éprouve comme le code.** La
   mienne a survécu à la spec, à l'implémentation et à mes propres tests parce que personne — moi le
   premier — n'a essayé de la faire mentir.

**Applicable globalement ?** : **Oui** — tout harnais de test dont un contrôle comporte une garde,
un préalable ou une condition de sortie anticipée (porte CI, règle de lint avec échappatoire, test
d'intégration qui saute quand une ressource manque). Raffinement direct de la leçon globale du
9 août 2026 (« une assertion posée sur un identifiant nu peut être satisfaite par un autre
contrôle ») : celle-ci disait *sur quoi* asseoir l'assertion, celle-là dit **combien** il en faut.
Candidate à promotion — arbitrage du chef de projet.
