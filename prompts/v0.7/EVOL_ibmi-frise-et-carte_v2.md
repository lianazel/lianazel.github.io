# EVOL — La page dit enfin ce que le parcours prouve sur IBM i

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : **v2** · **Date** : 11 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Remplace** : `EVOL_realisation-analyse-systeme_v1.md`, **jamais transmis**, conservé avec son bandeau
de péremption. Trois décisions du chef de projet ont élargi le périmètre : voir ci-dessous.

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Ton premier geste est de l'enregistrer comme
> **premier commit de ta branche**, message `docs:`, attribution au Tech Lead. Jamais sur `main`.

---

## Ce que la v1 ne savait pas

**1. `DDS` sort de la page.** Décision du chef de projet : le sigle ne dit rien au lecteur visé. Même
raison que pour « Legacy » à l'incrément précédent, un cran plus bas : un intitulé que le recruteur ne
décode pas ne le renseigne pas, il l'exclut. L'entrée sort donc aussi de la liste blanche.

**2. La carte de compétences gagne l'ouverture aux services web**, parce qu'une pièce est arrivée. Le
chef de projet a produit deux documents techniques de sa main : un POC .NET **entièrement opérationnel**
qui expose une base **DB2/400 sur IBM i en API REST**, documenté sous Swagger et déployé sur IIS.
L'étiquette n'est donc pas une intention, c'est un fait daté.

**3. Le bloc Talentia était muet sur l'essentiel.** Il annonce « API REST en .NET 8 / C# et migration
de données » et **ne nomme ni IBM i ni DB2/400**. La preuve la plus récente du positionnement de la
page était sur la page, invisible.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué, ou pourquoi il est écarté |
|---|---|---|---|
| `STYLE_METHOD` | **1.1** | **Appliqué partiellement, et c'est motivé** | Le projet épingle la méthode **v2.27** ; le satellite est né en **v2.28** et son contrat de ponctuation arrivera par l'incrément de montée de version. Une seule chose en est tirée ici, sur du texte **nouveau** : **aucun tiret cadratin dans les libellés créés**. On n'en ajoute pas alors qu'un chantier est ouvert pour en retirer. S-3 est également en jeu : c'est la règle qui fait sortir `DDS`. |
| `UX_METHOD` | 1.1 | **Appliqué** | Libellés visibles, deux langues. Deux blocs d'expérience s'allongent et une carte de compétences reste à huit étiquettes : c'est le seul endroit où la cible petit écran est engagée (§7). |
| `VISION_METHOD` | 1.2 | **Consulté, non instancié** | Dette **D-1**. Aucun de ces allongements ne sera vu par une mesure automatique. |
| `ASSURANCE_METHOD` | 1.2 | **Consulté, écarté** | Aucune porte créée ni modifiée. Les contrôles de symétrie et de couverture couvrent les clés nouvelles. |
| `SECURITY_METHOD` | 1.6 | **Appliqué sur un point précis** | Aucune dépendance, aucun secret, aucun réseau. Mais **un arbitrage de confidentialité** structure la spécification : voir §1 et §9. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Objectif, et il vient de faits, pas d'intuitions

**Fait n° 1, 10 août 2026.** Un recruteur demande au chef de projet s'il a pratiqué le RPG en **format
libre**. Il ne sait pas répondre. La réponse est oui, vérifiée depuis dans ses sources de 2015 :
**douze programmes sur quatorze** en contiennent. Le mot n'est nulle part sur la page.

**Fait n° 2, novembre 2023 à février 2024.** Le chef de projet conçoit et documente un POC .NET qui
expose une base DB2/400 en API REST. Relevé dans le code, ce jour : **quatre projets, 24 fichiers C#,
3 778 lignes**, `Dapper`, le pilote `IBM.Data.DB2.iSeries`, Swagger, **quatre points d'entrée** HTTP.
**39 propriétés annotées** portent le nom de colonne DB2 réel, à six caractères, pendant que la
propriété porte le nom métier restitué dans le flux JSON ; un service parcourt le modèle **par
réflexion** pour en construire la correspondance, et va jusqu'à **fabriquer des types à l'exécution**.
Le bloc Talentia de la page n'en dit pas un mot.

**Fait n° 3, vérifié le 11 août 2026.** L'environnement System/36 est **toujours documenté dans IBM i
7.6**, release annoncée en avril 2025. Une plateforme vendue aujourd'hui reste compatible avec une
machine de 1983. C'est ce qui explique qu'une table de production porte encore des noms de colonnes de
six caractères, et c'est pourquoi la modernisation y est un travail d'**adaptation**, pas de
remplacement.

**Arbitrage de confidentialité, tranché par le chef de projet le 11 août 2026.** Les noms d'objets des
clients (bibliothèques, programmes, fichiers, colonnes, profils, adresses) **ne montent pas sur le
site**, ni pour Toyota, ni pour Talentia. On décrit l'architecture et les technologies. `QHST` fait
exception : c'est un objet **standard IBM**, pas un objet client.

## 2. Périmètre

- `index.html` : la carte de compétences IBM i, le bloc d'expérience **Toyota France**, le bloc
  d'expérience **Talentia Software**, et les deux blocs de langue.
- `scripts/i18n-allowlist.txt` : **retrait de `DDS`**, et ajout des noms de produits nouveaux si le
  contrôle les réclame (§5, P6).
- `CLAUDE.md` : **le seul nombre du §6** qui compte les entrées de la liste blanche.

> **Dérogation explicite, et elle est motivée.** Le périmètre de l'incrément précédent excluait
> `scripts/` en bloc, ce qui rangeait du mauvais côté un fichier qui est un **registre de contenu**, pas
> une logique de porte. La dérogation avait été accordée oralement ; elle est ici **écrite d'avance**.
> La mécanique du filet (`gate.sh`, `check-i18n.mjs`, témoins, fixtures) reste **rigoureusement
> interdite**.

## 3. Hors périmètre, ne pas y toucher

Les cinq autres cartes de compétences · les autres blocs d'expérience · les quatre réalisations
existantes de Toyota · la section Projets · **les tirets cadratins déjà présents, qui font l'objet d'un
chantier distinct** · la feuille de style · **la mécanique du filet** · **D-1**, **D-8**, **D-12**,
**D-13**, **D-15** · `tasks/ROADMAP.md`.

> **`.NET 8` dans le bloc Talentia : ne pas y toucher, ni pour confirmer, ni pour corriger.** Le POC
> relu est en `.NET 6`, la mission a pu couvrir les deux, et le chef de projet ne s'en souvient pas.
> Un nombre qu'on ne peut pas mesurer ne se réécrit pas au jugé : il devient une ligne de dette,
> **D-16**, à ouvrir par le Tech Lead. La réalisation nouvelle porte `.NET 6`, qui est mesuré.

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. `main` est à jour avec son distant (`git rev-list --left-right --count main...origin/main` = `0 0`).
2. **L'incrément de la carte IBM i est fusionné** : la clé `sk3_title` existe dans les deux blocs de
   langue, et les clés `ibm1`, `ibm2`, `ibm3` aussi. Sans lui, les réemplois de §5 sont impossibles.
3. L'arbre de travail est propre **à l'exception des prompts non enregistrés**.
4. `bash scripts/gate.sh` sort en **code 0** avec **exactement 4 avertissements**, et ce sont les
   quatre clés orphelines connues (`e7_title`, `e7_desc`, `p3_title`, `p3_desc`, dette D-4).
5. Les clés `ibm4`, `x71`, `x72`, `y329`, `y330` **n'existent pas encore**. Si l'une existe,
   arrête-toi : les numéros libres ont changé.
6. `DDS` est présent **une fois** dans `scripts/i18n-allowlist.txt` et **une fois** dans la page.

## 5. Spécification — des propriétés, pas des gestes

### P1 · La carte de compétences retire un sigle et gagne une preuve

Huit étiquettes, dans cet ordre, en `class="tag red"` comme les actuelles :

| # | Étiquette (français) | Clé | Anglais |
|---|---|---|---|
| 1 | `RPG III/IV/ILE` | — | — |
| 2 | `RPG format libre` | `ibm1` (existante) | `RPG free-format` |
| 3 | `CLLE` | — | — |
| 4 | `SQL incorporé` | `ibm2` (existante) | `Embedded SQL` |
| 5 | `DB2/400` | — | — |
| 6 | `API système OS/400` | `ibm3` (existante) | `OS/400 system APIs` |
| 7 | `API REST sur DB2/400` | **`ibm4`** | `REST API on DB2/400` |
| 8 | `Adelia` | — | — |

**`DDS` disparaît.** Le titre de la carte ne change pas.

### P2 · Le paragraphe Toyota nomme le format libre et le SQL incorporé

La clé `e6_desc` **existe déjà** : seule sa **valeur** change, dans les deux blocs.

| Langue | Valeur attendue |
|---|---|
| `fr` | `Gestion et développement de projets ventes & logistique sur IBM AS/400 : outils métiers web, systèmes de livraison automatisés, intégration d'API Java sur OS/400. Adelia Studio, RPG IV, RPG ILE et format libre, CLLE, SQL incorporé, API système OS/400, Windev 20 et Webdev 20.` |
| `en` | `Management and development of sales & logistics projects on IBM AS/400: web business tools, automated delivery systems, Java API integration on OS/400. Adelia Studio, RPG IV, RPG ILE and free-format, CLLE, embedded SQL, OS/400 system APIs, Windev 20 and Webdev 20.` |

Le texte visible de la page porte la même valeur que le dictionnaire français : **deux copies**, leçon
D-14.

### P3 · Une cinquième réalisation chez Toyota, en dernière position

Elle se place **après** la carte JVM OS/400, construite **exactement comme ses quatre voisines** :
mêmes classes, même structure, même filet coloré, **aucune couleur ni classe nouvelle**.

| Élément | Clé | Français | Anglais |
|---|---|---|---|
| Titre | **`x71`** | `🔎 Analyse de l'historique système & surveillance des sous-systèmes` | `🔎 System history analysis & subsystem monitoring` |
| Description | **`y329`** | `Outil d'exploitation lisant le journal système QHST : contrôle que les travaux de nuit se sont exécutés conformément à une matrice de référence, met en évidence ceux qui manquent, et surveille l'état des sous-systèmes. Toute anomalie est consignée et notifiée par mail à l'exploitation.` | `Operations tool reading the QHST system log: checks that night jobs ran according to a reference matrix, flags those that did not, and monitors subsystem health. Any anomaly is logged and emailed to the operations team.` |

**Étiquettes**, dans cet ordre, en `class="exp-tag"` :

| # | Étiquette | Clé |
|---|---|---|
| 1 | `RPG-ILE` | — |
| 2 | `RPG format libre` | `ibm1` (existante) |
| 3 | `CLLE` | — |
| 4 | `SQL incorporé` | `ibm2` (existante) |
| 5 | `API système OS/400` | `ibm3` (existante) |
| 6 | `Windev` | — |

### P4 · Le bloc Talentia nomme enfin la plateforme

La clé `e3_desc` **existe déjà**. **Conserve sa phrase actuelle mot pour mot, dans les deux langues,
et ajoute une seconde phrase** :

| Langue | Phrase à ajouter |
|---|---|
| `fr` | `Exposition de données métier vers des consommateurs web, y compris depuis une base DB2/400 sur IBM i.` |
| `en` | `Exposing business data to web consumers, including from a DB2/400 database on IBM i.` |

**Ne réécris pas la première phrase**, et en particulier **ne touche pas au `.NET 8`** qu'elle contient
(§3).

### P5 · Une réalisation chez Talentia, la première de ce bloc

Le bloc Talentia n'a aujourd'hui **aucune sous-carte de réalisation**. Il en reçoit **une**, construite
**exactement comme celles des blocs Toyota et Groupe Prenant** : mêmes classes, même structure, filet
coloré pris parmi les couleurs déjà employées. **Aucune classe, aucune couleur, aucun style nouveau.**

| Élément | Clé | Français | Anglais |
|---|---|---|---|
| Titre | **`x72`** | `🔌 POC · API REST sur DB2/400` | `🔌 POC · REST API on DB2/400` |
| Description | **`y330`** | `Démonstration qu'une base DB2/400 s'expose en API REST sans rien réécrire de l'existant. La difficulté n'est pas le protocole : une partie des tables est héritée des années 1980, où un nom de colonne tient en six caractères. Modèles de données annotés et résolus par réflexion pour restituer des noms métier lisibles dans le flux JSON, jusqu'à la construction de types à l'exécution. Filtres de recherche interprétés avec garde-fous, requêtes paramétrées, documentation Swagger, déploiement sur IIS.` | `Proof that a DB2/400 database can be exposed as a REST API without rewriting anything. The protocol was never the hard part: some tables date back to the 1980s, where a column name fits in six characters. Annotated data models resolved by reflection to restore readable business names in the JSON payload, going as far as building types at runtime. Interpreted search filters with guard rails, parameterized queries, Swagger documentation, IIS deployment.` |

**Étiquettes**, dans cet ordre, en `class="exp-tag"`, aucune traduite : `.NET 6` · `C#` · `Dapper` ·
`DB2/400` · `Swagger` · `IIS`.

### P6 · La liste blanche suit la page, et le cadrage suit la liste blanche

`DDS` **sort** de `scripts/i18n-allowlist.txt` : conservée, elle deviendrait une entrée orpheline, et
une liste qui garde des entrées mortes finit par tout autoriser.

Les noms de produits que le contrôle réclamerait pour les étiquettes nouvelles (`Dapper`, `IIS`, et
tout autre) **peuvent être ajoutés**, à trois conditions : ce sont des **noms de produits**, chacun
reçoit son **motif écrit** dans le fichier comme les 102 entrées existantes, et **la liste complète des
ajouts figure dans les livrables**. Aucun ajout pour contourner un défaut de traduction.

**Le `CLAUDE.md` §6 annonce un nombre d'entrées.** Il est faux dès que la liste change. Remets-le en
cohérence et **écris les deux valeurs** dans les livrables. C'est la régression documentaire R-2 de
l'incrément précédent, et elle ne se reproduit pas.

### P7 · Aucun tiret cadratin dans le texte créé

Ni dans les titres, ni dans les descriptions, ni dans les étiquettes, dans aucune des deux langues. Les
cadratins **déjà présents** ailleurs ne se touchent pas.

### P8 · Aucun nom d'objet client

Ni bibliothèque, ni programme, ni fichier, ni colonne, ni profil, ni adresse réseau, dans aucun des
textes ajoutés. `QHST` est la seule référence système, et elle est standard IBM.

## 6. Preuve exigée

1. `bash scripts/gate.sh` en **code 0** avec **exactement 4 avertissements**, pas cinq.
2. **Comptes d'emploi, prouvés par programme, pas à l'œil** : `ibm4`, `x71`, `x72`, `y329`, `y330`
   employées **une fois** ; `ibm1`, `ibm2`, `ibm3` employées **deux fois** chacune, **valeurs
   inchangées**. Écris les huit comptes.
3. **Comptes de clés par langue, avant et après** : `+5` de chaque côté, et **symétrique**. Écris les
   deux valeurs.
4. **Aucun tiret cadratin ajouté.** Compte avant et après, **avec la convention de comptage employée**,
   et cite la ligne du livrable où cette convention est définie. Le compte doit être **strictement
   identique**. Un critère chiffré sans convention écrite n'est pas falsifiable : c'est le constat R-4
   de la revue précédente, et cette rédaction est sa réponse.
5. **Liste blanche** : `DDS` absente, ajouts listés un par un avec leur motif, **compte avant et
   après**, et le `CLAUDE.md` §6 remis en cohérence avec les deux valeurs écrites.
6. **La mécanique du filet est intacte** : `gate.sh`, `check-i18n.mjs`, témoins et fixtures, à prouver.
7. `git diff` ne porte que sur `index.html`, `scripts/i18n-allowlist.txt` et `CLAUDE.md`, et à
   l'intérieur d'`index.html`, que sur la carte IBM i, les blocs Toyota et Talentia, et les deux blocs
   de dictionnaire.

## 7. Validation humaine due avant publication

Rien de ce qui suit n'est prouvable ici (dette **D-1**) :

- **Le bloc Toyota passe à cinq réalisations et devient le plus long de la frise.** À regarder à
  **320, 375 et 900 px**, dans les deux langues.
- **Le bloc Talentia reçoit sa première sous-carte** et change de forme. Même contrôle.
- **Les étiquettes les plus longues** : `API REST sur DB2/400` sur la carte de compétences, et
  `API système OS/400` dans la frise. Aucune ne doit déborder.
- **Les deux titres nouveaux en anglais**, plus longs que leurs équivalents français.

## 8. Livrables

`.pipeline/spec.md` · `.pipeline/changes.md` · `.pipeline/test-results.md` (les huit comptes d'emploi,
comptes de clés, compte de cadratins avant et après **avec sa convention**, comptes de liste blanche
avant et après, liste des ajouts avec motifs) · revue par l'agent `reviewer` · `STATUS.md` = `READY`.
**STOP avant `git push`.**

## 9. Critères d'acceptation

1. La carte de compétences porte les huit étiquettes de P1, dans l'ordre. **`DDS` n'y est plus**,
   `API REST sur DB2/400` y est, portée par `ibm4`.
2. `e6_desc` porte les deux valeurs de P2, et le texte visible est identique à la valeur française.
3. La cinquième réalisation Toyota existe, en dernière position, construite comme ses voisines.
4. `e3_desc` a **conservé sa première phrase mot pour mot** dans les deux langues et gagné la seconde.
   **`.NET 8` est intact.**
5. La réalisation Talentia existe, construite comme celles des autres blocs, sans classe ni couleur
   nouvelle.
6. Les cinq clés nouvelles existent **dans les deux blocs de langue** et sont employées **une fois** ;
   `ibm1` à `ibm3` sont employées **deux fois**, valeurs inchangées.
7. Porte verte, **exactement 4 avertissements**, et ce sont les quatre de D-4.
8. Comptes de clés symétriques, `+5` de chaque côté.
9. **Le compte de cadratins de la page est inchangé**, sous une convention écrite dans le livrable.
10. `DDS` est absente de la liste blanche ; chaque ajout porte son motif ; le `CLAUDE.md` §6 est
    cohérent avec le fichier.
11. **Aucun nom d'objet client** dans le texte ajouté.
12. **La mécanique du filet est rigoureusement intacte.**
13. Le présent prompt est le **premier commit de la branche**, attribué au Tech Lead.
