# CORRECTIF — Budget de largeur sur petit écran : blocs Contact et Compétences

**Projet** : `lianazel.github.io` · **Type** : CORRECTIF (`/fix`) · **Version du prompt** : v2 · **Date** : 9 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : EXÉCUTÉ — 9 août 2026 · branche `fix/budget-largeur-mobile` · fusion `8687284` · version 0.3.0 → 0.3.1

> **Basé sur `.pipeline/RAPPORT_DIAGNOSTIC_pastille-contact_v1.md`.** Aucune correction n'est fondée
> sur une hypothèse : chaque geste ci-dessous renvoie à une cause racine numérotée de ce rapport.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué |
|---|---|---|---|
| `UX_METHOD` | 1.0 | **Appliqué** | §1 — **petit écran d'abord**. Les règles ajoutées s'écrivent en largeur **minimale**, jamais maximale : cet incrément est la première tranche du remboursement de la dette D-2, dont le plan prescrit explicitement de ne **pas** la solder en bloc. |
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | §3 Couche A — le contrôle ajouté est une **porte** : défaut semé dans le témoin, assertion positive dans la porte, et **preuve de morsure** par neutralisation. §7, garde de non-vacuité. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau, aucune saisie utilisateur. |
| `VISION_METHOD` | — | **Introuvable** | Prescrit par la table §8.1 du référentiel pour le rendu web à valider ; le fichier n'existe pas. Écarté par absence. La validation visuelle reste **entièrement humaine** (dette D-1). |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` | — | **Écartés** | Aucune base de données, aucun geste hors du dépôt, aucun agent autonome. |

---

## 1. Le défaut, et sa cause

Le diagnostic établit que **162 pixels sur 320 — la moitié de l'écran — sont consommés par du
rembourrage avant tout contenu**, et que ce rembourrage est **constant de 320 à 1 100 pixels** :
aucune des deux règles d'adaptation existantes ne touche le bloc Contact ni le bloc Compétences
(causes **C1** et **C2**).

Deux défauts **certains** en découlent, tous deux invisibles au défilement à cause de
`body{overflow-x:hidden}` (cause **C5**) :

- la **pastille de contact** déborde de sa carte sur **tout téléphone en portrait** — le seuil de
  tenue est de 452 à 479 pixels de fenêtre, contre 428 au maximum sur les appareils courants ;
- les **cartes de compétences** débordent de **24 pixels**, le plancher de colonne étant fixé à
  280 pixels dans un espace qui n'en offre que 256. Défaut **purement géométrique**, sans aucune
  incertitude de police.

## 2. Ce qu'il faut obtenir — et non comment l'écrire

### 2.1 Rendre le budget de largeur adaptatif (causes C1 et C2)

Sur le chemin `section` → `.contact-card` et sur le chemin `section` → `.skills-grid`, le rembourrage
latéral doit **se réduire sur petit écran**. Les règles que tu ajoutes s'écrivent en **largeur
minimale** (`min-width`), pas maximale : on n'aggrave pas la dette D-2 en la remboursant.

Ne touche **pas** aux deux règles en largeur maximale existantes (lignes 33 et 101) : elles
concernent la barre de navigation et la grille de projets, hors périmètre.

### 2.2 Donner à la pastille le droit de se replier (cause C3)

**L'arithmétique du diagnostic est sans appel** : à 320 pixels de fenêtre, la pastille demande 290 à
317 pixels. Même en ramenant tout le rembourrage à quelques pixels, la place disponible ne peut pas
atteindre 317. **Réduire le rembourrage ne suffit donc pas** — c'est nécessaire, ce n'est pas
suffisant.

Le résultat à obtenir : quand la place manque, **le bouton « Copier » passe sous l'adresse**. La
pastille cesse alors d'être une pilule d'une ligne pour devenir un bloc à deux niveaux. C'est un
changement de forme visible, assumé, et il devra être validé à l'œil.

> ⛔ **Interdit — et c'est la seule chose que je t'interdis absolument ici.** **L'adresse elle-même ne
> se coupe jamais.** Ni `word-break`, ni `overflow-wrap`, ni aucun mécanisme qui scinderait
> `devnetasimov451@proton.me` en deux morceaux. Une adresse électronique coupée au milieu d'un
> domaine se recopie mal et se lit mal — sur un portfolio destiné à des recruteurs, ce serait pire
> que le débordement qu'on corrige. C'est le point **R3** du diagnostic.

### 2.3 Supprimer le plancher de la grille de compétences

Le plancher de colonne doit cesser de dépasser la place disponible sur petit écran. Le résultat à
obtenir : à 320 pixels, aucune carte de compétence ne dépasse son conteneur — et la grille conserve
son comportement actuel dès que la place le permet.

### 2.4 Écrire le budget dans le cadrage (recommandation R4)

Le défaut a duré parce que **personne ne pouvait comparer une largeur exigée à une largeur
disponible : ces deux nombres n'existaient nulle part.**

Ajoute au `CLAUDE.md`, dans la section consacrée à l'expérience utilisateur, **deux nombres et une
phrase** : la largeur d'écran minimale visée par le projet, et la place utile qui en découle à
l'intérieur de la carte de contact **après ton correctif**. Sans ce budget écrit, le contrôle du §2.5
n'a pas de référence, et la prochaine adresse plus longue rouvrira le dossier.

> ⚠️ **Le sens de dérivation n'est pas négociable.** Le budget **découle de la mise en page**, jamais
> de l'adresse du jour. Tu établis d'abord la place que ta correction offre réellement à la largeur
> minimale visée, **puis** tu l'inscris. Tu ne regardes pas ce que l'adresse actuelle exige pour en
> déduire un budget qui l'accueille : ce serait calibrer la porte sur son propre cas de test, elle
> passerait par construction et ne prouverait rien — exactement le travers que le contrôle 7 évite en
> ne connaissant aucune adresse en dur.
>
> **Si l'adresse actuelle n'entre pas dans le budget ainsi obtenu, c'est la mise en page qu'il faut
> corriger davantage.** Écris ce raisonnement, et le nombre obtenu, dans `.pipeline/spec.md`.

**Ne touche à rien d'autre** dans `CLAUDE.md` : son §3 est périmé et fait l'objet d'un incrément
séparé.

### 2.5 Poser le contrôle de budget textuel (recommandation R5 du §5 du diagnostic)

Un **huitième contrôle bloquant** dans `scripts/check-i18n.mjs`.

**Ce qu'il mesure, et c'est le point corrigé en v2 : la largeur de l'adresse SEULE** — longueur de la
chaîne × **borne haute** de largeur de caractère — ne dépasse pas la largeur disponible inscrite au
§2.4.

**Pourquoi l'adresse seule, et non la pastille entière.** Le §2.2 donne au bouton le droit de passer
sous l'adresse : la largeur de la pastille devient donc une grandeur variable, qui dépend de la
disposition retenue par le moteur de rendu. L'adresse, elle, ne se coupe **jamais** — c'est la seule
interdiction absolue de ce prompt. Elle est donc **l'atome insécable** du bloc, et le seul objet dont
le débordement est à la fois certain, calculable sans rendu, et fatal à la mise en page. C'est lui
qu'il faut garder.

Trois exigences, aucune facultative :

1. **Borne haute obligatoire.** Le calcul emploie la largeur de caractère la plus **large** de
   l'intervalle du diagnostic, jamais la plus étroite : c'est le seul sens dans lequel « ça passe »
   est une conclusion solide. Le rapport donne l'intervalle et sa justification.
2. **Garde de non-vacuité.** Si l'extraction ne trouve pas l'adresse, c'est une **erreur**, pas un
   succès. Le contrôle 7 sait déjà extraire cette chaîne : réemploie ce chemin plutôt que d'en écrire
   un second.
3. **Message propre.** L'erreur nomme la largeur exigée, le budget, et l'écart — dans une phrase qui
   n'appartient qu'à ce contrôle, jamais un identifiant nu.

**Preuve de morsure, comme les sept autres** : défaut semé dans `scripts/fixtures/broken.html`,
assertion positive dans `scripts/gate.sh` posée sur le **message propre**, compte des assertions mis
à jour dans le commentaire du bloc. Puis **prouve l'assertion vivante** en neutralisant ce seul
contrôle sur une copie hors dépôt (`errors.push(` → `[].push(`) et en vérifiant que la porte rougit.
Reporte l'épreuve dans `.pipeline/test-results.md`.

> Ce contrôle aurait rougi sur l'incrément `f04a876`. C'est sa raison d'être : fermer précisément le
> mode de panne qu'on vient de vivre.

## 3. Hors périmètre — explicitement

- **La barre de navigation.** Le diagnostic **prédit** un débordement de `nav ul` sans le constater
  (cas B du I5). On ne corrige pas sur une prédiction, et ce bloc est refondu par E-2. **N'y touche
  pas.**
- **`body{overflow-x:hidden}`.** Ne le retire pas. Il masque le symptôme, mais son retrait ferait
  apparaître des barres de défilement en production tant que d'autres causes subsistent. C'est une
  décision de fin de chantier (point R7 du diagnostic).
- **Le titre du Hero et les badges de date** (cas C du I5) : cas limites sans conclusion solide.
- **Aucun rognage ajouté** sur la carte de contact : cela tronquerait l'adresse, ce qui serait pire
  que le débordement (cause C6).
- **Aucune dépendance**, aucun outil, aucun paquet. **Ne reformate pas** la feuille de style : le
  style compact est une convention du projet.
- **Ne modifie pas `tasks/ROADMAP.md`** : il est tenu par le Tech Lead.
- **Ne fusionne pas, ne publie pas, ne supprime pas de branche.**

## 4. Prérequis vérifiables

**Si l'un de ces points n'est pas satisfait, ARRÊTE-TOI et signale-le.**

1. `.pipeline/RAPPORT_DIAGNOSTIC_pastille-contact_v1.md` **existe** et porte bien sur ce sujet — c'est
   le fondement de ce correctif. Vérifie-le par son contenu.
2. L'arbre de travail est propre **à l'exception** de `tasks/ROADMAP.md` (modifié) et de
   `prompts/v0.3/` (non suivi) : ce sont des dépôts du Tech Lead, à indexer avec cet incrément.
3. `main` est à jour avec sa jumelle publiée, vérifié en direct.
4. `bash scripts/gate.sh` est **vert avant que tu ne commences**.

## 5. Livrables

- Branche de travail : `fix/budget-largeur-mobile`.
- `.pipeline/spec.md` · `.pipeline/changes.md` · `.pipeline/last-diff.patch`.
- `.pipeline/test-results.md` — sortie complète de la porte **plus** l'épreuve du §2.5.
- Enregistrement sur la branche, indexation **précise**, jamais `-A`, incluant `tasks/ROADMAP.md` et
  `prompts/v0.3/`.
- Dernier geste : `.pipeline/STATUS.md` = `READY — …`.

## 6. Ce que tu ne peux pas valider, et qu'il faut écrire

Ce projet n'a **aucune barrière de rendu** (dette D-1), et une mesure faite hors Windows serait
faussée (dette D-5). **Ne tente pas de mesurer le rendu, et ne « corrige » rien par précaution.**

Écris en toutes lettres dans ton rapport de clôture les points qui reviennent à l'humain :

- l'aspect de la pastille **repliée** à 320, 360 et 375 pixels — c'est un changement de forme, pas un
  simple ajustement ;
- le bloc Compétences aux mêmes largeurs ;
- les **deux langues** : le bouton anglais « Copy » est plus court d'environ 8 pixels et déplace
  légèrement les seuils ;
- l'état transitoire **« Copié ! » / « Copied! »**, qui élargit la pastille pendant deux secondes.

---

*Prompt déposé par Cowork. Il n'est exécutable qu'une fois transmis par le chef de projet.*
