# EVOL — Parité linguistique complète

**Projet** : `lianazel.github.io` (Portfolio JC Cherid)
**Type** : EVOL (`/ship`) · **Version** : v1 · **Date de rédaction** : 8 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué |
|---|---|---|---|
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | Couche A — preuve de morsure à la naissance de la porte ; **garde de non-vacuité** (une porte fondée sur une extraction peut devenir aveugle en restant verte) ; « outil d'inspection ≠ porte » (le contrôle doit faire échouer, code de retour 1) ; porte de périmètre de diff (§ « Périmètre déclaré » ci-dessous) ; limite déclarée de la parité linguistique — elle attrape une divergence de **structure**, jamais une traduction périmée. |
| `UX_METHOD` | 1.0/1.1 | **Appliqué partiellement** | §3.7, corollaire i18n uniquement : **aucune chaîne de langue codée en dur dans le programme** — tout libellé traduisible passe par le dictionnaire. Le reste du satellite (petit écran d'abord, menu de débordement, tactile) est **hors de cet incrément**. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance ajoutée, aucun secret, aucune clé, aucune saisie utilisateur, aucun appel réseau introduit. Les invariants de sécurité du `CLAUDE.md` §4 restent intacts et cet incrément ne les touche pas. |
| `AGENT_SCOPE_METHOD` | 1.1 | **Écarté** | Tous les gestes de cet incrément sont **à l'intérieur du dépôt**. Aucun fichier machine, aucune configuration globale, aucun outillage installé. |
| `SQL_METHOD` | — | **Écarté** | Aucune base de données dans ce projet. |
| `VISION_METHOD` | — | **Écarté** | Cet incrément ne modifie **aucune** règle de style, aucune géométrie, aucun point de rupture. Le rendu n'est pas en jeu. |
| `LOOPING_METHOD` | — | **Écarté** | Aucun agent autonome, aucune exécution différée. |

---

## 1. Objectif

Aujourd'hui, la bascule en anglais laisse du texte français à l'écran, principalement dans la section
Expérience — celle que lit un recruteur. La demande est sans ambiguïté : **il ne doit plus rester un mot
de français lorsque l'on passe en anglais.**

Cet incrément livre deux choses indissociables :

1. **une porte** qui refuse désormais tout texte visible non traduisible et non déclaré ;
2. **le rattrapage** du texte aujourd'hui non couvert.

Elles voyagent ensemble et ne se séparent pas : la porte seule rendrait le filet rouge, le rattrapage
seul laisserait le défaut revenir au premier ajout de contenu.

## 2. Pourquoi le contrôle ne peut pas être entièrement automatique

Une machine sait énumérer le texte visible qui n'est pas relié au dictionnaire. Elle ne sait **pas**
décider que « Cursus » se traduit et qu'« Adelia » ne se traduit pas. Un contrôle qui prétendrait
trancher cette sémantique fabriquerait exactement le faux vert qu'il est censé empêcher.

La forme retenue est donc : **tout texte visible est soit couvert par un attribut de traduction, soit
inscrit dans une liste blanche explicite et versionnée.** Ajouter un terme à cette liste devient un
geste conscient, écrit et relisible — jamais un contournement silencieux.

## 3. Prérequis vérifiables

Avant toute écriture, vérifie ces trois points. **Si l'un d'eux n'est pas satisfait, ARRÊTE-TOI et
signale-le au lieu de contourner.**

1. La branche `main` est propre et alignée sur `origin/main`.
2. `bash scripts/gate.sh` passe sur l'état de départ : le témoin défectueux échoue, le site réel
   renvoie 0 erreur bloquante et 4 avertissements (dette D-4, les quatre clés orphelines).
3. `scripts/check-i18n.mjs`, `scripts/gate.sh` et `scripts/fixtures/broken.html` existent et sont
   ceux décrits dans le `CLAUDE.md` §6.

## 4. Périmètre déclaré

**Fichiers que cet incrément doit toucher, et eux seuls :**

| Fichier | Nature |
|---|---|
| `scripts/check-i18n.mjs` | modifié — élargissement du contrôle |
| `scripts/i18n-allowlist.txt` | **créé** — la liste blanche versionnée |
| `scripts/fixtures/broken.html` | modifié — un défaut supplémentaire |
| `scripts/fixtures/blind.html` | **créé** — témoin de cécité |
| `scripts/gate.sh` | modifié — un troisième contrôle |
| `index.html` | modifié — attributs et traductions |

Plus les artefacts de `.pipeline/`, qui ne sont pas suivis par le contrôle de version.

**Toute modification en dehors de cette liste est une dérive de périmètre.** Si tu estimes qu'un autre
fichier doit bouger, **ARRÊTE-TOI et signale-le** — ne le fais pas au passage. En particulier :
`CLAUDE.md`, `tasks/`, `VERSION` et `.claude/` ne sont **pas** de ton ressort dans cet incrément — le
fichier de version est incrémenté par `/land`, pas ici.

## 5. Ce qu'il faut faire

### 5.1 — Élargir `scripts/check-i18n.mjs` : contrôle de couverture du texte visible

Les quatre contrôles existants (complétude, symétrie, doublon, ancres) **restent inchangés**. On en
ajoute un cinquième.

**Extraction.** Le contrôle doit, sur le fichier cible :

- retirer les commentaires HTML, les blocs `<script>` et les blocs `<style>` ;
- parcourir le balisage en tenant une **pile de balises ouvertes**, et collecter chaque suite de texte
  située entre deux balises ;
- considérer une suite de texte comme **couverte** si l'un de ses éléments ancêtres porte un attribut
  `data-i18n` ;
- **ignorer par construction** toute suite de texte ne contenant **aucune lettre** — séparateurs,
  émojis, nombres, ponctuation. Ce n'est pas une exception accordée au cas par cas, c'est une règle
  écrite : sans lettre, il n'y a rien à traduire. Cela évite d'encombrer la liste blanche de bruit.

Le contenu de l'élément `<title>` entre dans le périmètre : il s'affiche dans l'onglet du navigateur et
doit basculer comme le reste.

**Verdict.** Pour chaque suite de texte non couverte contenant au moins une lettre : découpe-la en mots
et confronte chaque mot à la liste blanche. S'il subsiste **un seul mot** absent de la liste, c'est une
**erreur bloquante** — message citant le mot fautif et la suite de texte complète, tronquée si elle est
longue, pour que la correction soit évidente à la lecture.

**Ce contrôle fait échouer.** Code de retour 1 si au moins une erreur bloquante est relevée. Un contrôle
qui se contente d'afficher n'est pas une porte.

### 5.2 — La garde de non-vacuité (exigence non négociable)

Ce nouveau contrôle repose sur une **extraction**. Une extraction cassée ne renvoie rien, tout paraît
couvert, et **la porte devient verte alors qu'elle est aveugle** — c'est son pire mode de défaillance,
parce qu'il est silencieux.

Le contrôle doit donc, avant de rendre son verdict, asserter sur le fichier réel :

- qu'il a trouvé **au moins 200 suites de texte visible** ;
- qu'il en a trouvé **au moins 100 de couvertes** ;
- que la liste blanche a été chargée et qu'elle n'est **pas vide**.

Si l'une de ces trois assertions échoue, le contrôle **échoue** avec un message sans ambiguïté, du type
`la porte est AVEUGLE, pas verte`. Les seuils sont volontairement **souples et exprimés en « au
moins »** : on se protège de la cécité, pas de l'évolution légitime du contenu.

**Mesures de référence relevées le 8 août 2026 sur l'état actuel du site** — 342 suites de texte
visible, dont 144 couvertes et 198 non couvertes, parmi lesquelles 179 contiennent au moins une lettre.
Ces nombres sont une **indication de calibrage**, pas un contrat : ton extraction n'est pas obligée de
tomber sur exactement les mêmes. En revanche, si elle en trouve **moins de 200 ou plus de 600**, c'est
que l'extraction est fautive, pas la page : **ARRÊTE-TOI et signale**. Un contrôle qui rougit ou verdit
massivement sur du code réputé sain accuse d'abord le contrôle.

### 5.3 — Poser la liste blanche `scripts/i18n-allowlist.txt`

Un terme par ligne, avec un motif écrit à côté. Format :

```
Windev    # nom de produit PC Soft
AS/400    # nom de plateforme IBM
Adelia    # nom d'atelier de génie logiciel
```

Règles de tenue :

- lignes vides et lignes commençant par `#` ignorées ;
- comparaison **sensible à la casse** — c'est plus explicite, et cela évite qu'un mot commun se glisse
  dans la liste par la petite porte ;
- **chaque entrée porte son motif.** Une entrée sans motif est refusée par le contrôle : la liste doit
  rester relisible par un humain qui ne l'a pas écrite ;
- le contrôle signale en **avertissement, sans bloquer**, toute entrée de la liste qui n'a servi à rien
  lors du passage. Une liste blanche qui accumule des entrées mortes finit par tout autoriser.

**Tu proposes cette liste, tu ne la valides pas.** Reporte-la intégralement dans `.pipeline/changes.md`,
terme par terme avec son motif, pour qu'elle soit relue. Le discriminant à appliquer : *ce mot
désignerait-il la même chose dans un CV rédigé en anglais ?* Un nom de produit, de société, de langage,
de norme ou de lieu : oui, il entre dans la liste. Un intitulé de poste, un mois, un nom de domaine
fonctionnel, une phrase : non, il se traduit.

### 5.4 — Les deux témoins, et le filet qui les éprouve

**`scripts/fixtures/broken.html`** reçoit un sixième défaut délibéré : une suite de texte visible en
français, non couverte par un attribut de traduction et absente de la liste blanche. Complète le
commentaire d'en-tête du fichier, qui énumère les défauts semés.

**`scripts/fixtures/blind.html`** est un fichier neuf : un témoin sur lequel l'**extraction ne trouve
rien** (ou trop peu). Il sert à prouver que la garde de non-vacuité **mord réellement**. Sans lui, cette
garde est une intention, pas une porte.

**`scripts/gate.sh`** passe de deux à trois contrôles, dans cet ordre :

1. le témoin défectueux **doit** échouer ;
2. le témoin de cécité **doit** échouer, **et son message de sortie doit contenir le mot `AVEUGLE`** —
   vérifie-le, sinon le témoin pourrait échouer pour une tout autre raison et la preuve ne vaudrait
   rien ;
3. le site réel **doit** passer.

### 5.5 — Rattraper le texte non couvert dans `index.html`

Pour chaque suite de texte que le nouveau contrôle refuse et qui ne relève pas de la liste blanche :
pose un attribut `data-i18n` sur l'élément qui la porte, ajoute la clé dans le bloc français **et** dans
le bloc anglais du dictionnaire.

Ce que le relevé du 8 août fait apparaître, à titre d'orientation — la liste n'est pas limitative et
c'est ton extraction qui fait foi :

- le titre de la page, aujourd'hui figé en français dans l'onglet du navigateur ;
- **toutes les périodes de poste** (`Fév 2020 – Avr 2023`, `Sept 2001 – Juin 2005`, `Août 1989 – Août
  1999`…) — les mois sont en français ;
- **les intitulés de poste** : `Développeur`, `Analyste ingénieur`, `Développeur / Chef de projet`,
  `Développeur AS/400 — Migrations & Outils`, `Développeur AS/400 — Équipe Système` ;
- les libellés de rubriques et de domaines : `Stack`, `Outils`, `Base de données`, `Système`,
  `Formation — Cursus DBA Oracle 9i`, `Cursus sur site`, `Cursus 2005`, `Santé / Médical`,
  `Assurance / Mutuelle`, `Transports / Gestion Entrepôts / Froid Négatif`, `Migration SQL` ;
- la ligne d'identité sous le nom : `Développeur · Architecte technique` ;
- **les phrases entières** de la section Expérience, dont celle sur la partition AS/400 partagée aux
  États-Unis et celle sur le déploiement à Saint-Ouen-l'Aumône.

**Nommage des clés** : suis la convention déjà en place dans le dictionnaire. Ne renomme aucune clé
existante.

**Reporte dans `.pipeline/changes.md` un tableau `clé | français | anglais`** de tout ce que tu ajoutes.
C'est ce tableau qui sera relu — pas le diff du dictionnaire.

### 5.6 — Les quatre clés orphelines (dette D-4)

`e7_title`, `e7_desc`, `p3_title`, `p3_desc` sont traduites mais réclamées par aucun élément. Le plan de
remboursement du `CLAUDE.md` dit « trancher au prochain toucher du contenu » — c'est maintenant.

**Ne décide pas seul.** Vérifie si ces clés correspondent à du contenu encore présent dans la page mais
privé de son attribut, ou à du contenu retiré. **Écris le constat dans `.pipeline/changes.md` et laisse
les clés en place.** Elles restent en avertissement non bloquant. Si le constat montre qu'un élément
existant a simplement perdu son attribut, dis-le explicitement — mais ne rebranche rien dans cet
incrément.

## 6. Contraintes à ne pas enfreindre

- **Aucune dépendance externe.** Ni paquet, ni bibliothèque, ni analyseur syntaxique tiers, ni
  ressource chargée depuis un domaine tiers. Le contrôle s'écrit avec la bibliothèque standard de Node,
  comme l'existant. C'est un invariant du projet, pas une préférence.
- **Ne reformate pas la feuille de style**, et ne touche à aucune règle d'adaptation : le sens des
  points de rupture est un autre chantier.
- **Ne découpe pas le fichier unique.**
- **Aucune chaîne de langue codée en dur dans le programme** — tout libellé traduisible passe par le
  dictionnaire.
- **Le dictionnaire reste fermé et symétrique** : jamais une clé dans une seule langue, jamais un
  doublon.
- **Ne retire pas l'attribut `lang` de la balise racine** ni sa mise à jour à la bascule.
- **Le dépôt et le site sont publics** : aucun secret, aucun jeton, aucun chemin de machine dans les
  fichiers que tu écris. Relis avant d'enregistrer.

## 7. Limite de la porte — à déclarer, pas à masquer

Ce contrôle attrape une **absence de couverture du texte visible**. Trois choses lui échappent, et il
faut les écrire :

1. il n'attrape **pas** une traduction fausse, ni une traduction devenue périmée — deux chaînes
   présentes dans les deux langues lui suffisent ;
2. il n'attrape **pas** le contenu porté par un **attribut** plutôt que par du texte : adresse d'un
   lien, infobulle, libellé d'accessibilité. Un lien qui pointerait vers une page française depuis la
   version anglaise passerait donc silencieusement ;
3. il ne dit **rien** du rendu : un texte traduit mais qui déborde de son cadre lui est invisible.

Écris ces trois limites dans le commentaire d'en-tête du contrôle et dans `.pipeline/changes.md`. Une
porte dont on tait le périmètre finit par être créditée de ce qu'elle ne fait pas.

## 8. Critères d'acceptation

1. `bash scripts/gate.sh` : les deux témoins échouent pour la bonne raison, le site réel passe avec
   **0 erreur bloquante**. Les quatre avertissements de la dette D-4 restent attendus.
2. La garde de non-vacuité a été **vue échouer** sur `blind.html`, avec le message qui la nomme.
3. Le sixième défaut de `broken.html` a été **vu échouer** puis le témoin remis en état.
4. Après bascule en anglais, il ne subsiste aucun mot de français à l'écran, hors termes inscrits dans
   la liste blanche avec leur motif.
5. Le diff ne touche que les six fichiers du périmètre déclaré.
6. `.pipeline/changes.md` contient : le tableau des traductions ajoutées, la liste blanche justifiée
   terme par terme, le constat sur les quatre clés orphelines, et la limite de la porte.

## 9. Hors périmètre — ne le fais pas, même si ça démange

- Le menu de débordement et le passage au petit écran d'abord.
- La barrière de rendu visuel.
- Les badges des cartes de projets et l'ajout d'une carte.
- Le rebranchement ou la suppression des quatre clés orphelines.
- Toute correction de style, d'espacement ou de couleur relevée au passage : signale-la dans
  `.pipeline/changes.md`, ne la corrige pas.

---

*Prompt rédigé par le Tech Lead · dépôt public : relu et exempt de secret.*
