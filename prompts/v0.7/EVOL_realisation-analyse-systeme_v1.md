> 🚫 **PÉRIMÉ — NE PAS TRAITER.** Remplacé le 11 août 2026 par
> `EVOL_ibmi-frise-et-carte_v2.md`, **avant toute transmission**. Trois décisions du chef de projet ont
> élargi le périmètre : retrait de `DDS`, ajout de l'étiquette `API REST sur DB2/400`, et enrichissement
> du bloc Talentia avec le POC. Ce fichier est conservé comme trace de ce que l'on savait à sa
> rédaction, pas comme instruction.

# EVOL — La preuve IBM i manquait dans la frise

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : **v1** · **Date** : 11 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Ton premier geste est de l'enregistrer comme
> **premier commit de ta branche**, message `docs:`, attribution au Tech Lead. Jamais sur `main`.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué, ou pourquoi il est écarté |
|---|---|---|---|
| `STYLE_METHOD` | **1.0** | **Appliqué partiellement, et c'est motivé** | Le projet épingle la méthode **v2.27** ; le satellite est né en **v2.28** et son contrat de ponctuation arrivera par l'incrément de montée de version. Ici, une seule chose en est tirée, et elle porte sur du texte **nouveau** : **aucun tiret cadratin dans les libellés créés**. On n'en ajoute pas alors qu'un chantier est ouvert pour en retirer. |
| `UX_METHOD` | 1.1 | **Appliqué** | Libellés visibles, deux langues. Une cinquième réalisation allonge le bloc Toyota, déjà le plus long de la frise : c'est le seul point où la cible petit écran est engagée (§7). |
| `VISION_METHOD` | 1.2 | **Consulté, non instancié** | Dette **D-1**. L'allongement du bloc ne sera vu par aucune mesure automatique. |
| `ASSURANCE_METHOD` | 1.2 | **Consulté, écarté** | Aucune porte créée ni modifiée. Les contrôles de symétrie et de couverture couvrent les clés nouvelles. |
| `SECURITY_METHOD` | 1.6 | **Appliqué sur un point précis** | Aucune dépendance, aucun secret, aucun réseau. Mais **un arbitrage de confidentialité** structure la spécification : voir §1 et §5. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Objectif, et il vient d'un fait

**La page vend la modernisation IBM i depuis l'incrément précédent. La frise, elle, ne la prouve pas.**

Le bloc Toyota porte quatre réalisations. Trois sont des projets web ou Adelia ; la quatrième
touche la JVM sur OS/400. **Aucune ne montre du RPG écrit**, et le paragraphe de tête ne nomme pas le
**format libre**, qui est exactement la question qu'un recruteur a posée au chef de projet le
10 août 2026 et à laquelle il n'a pas su répondre.

La réalisation qui le prouve existe pourtant, documentée : un outil d'exploitation qui lit le journal
système `QHST`, vérifie que les travaux de nuit se sont exécutés conformément à une matrice de
référence, et surveille l'état des sous-systèmes. Relevé fait dans la documentation technique
d'origine : **26 programmes** (13 RPGLE, un SQLRPGLE, 12 CLLE), **neuf API système distinctes**, une
douzaine de fichiers décrits en DDS, et un volet Windev pour le rapport et le mailing.

**Arbitrage de confidentialité, tranché par le chef de projet le 11 août 2026.** Les noms d'objets du
client (bibliothèque, programmes, fichiers) **ne montent pas sur le site**. On décrit l'architecture et
les technologies, jamais les objets d'un système appartenant à un ancien employeur. `QHST` fait
exception et reste : c'est un objet **standard IBM**, pas un objet Toyota.

## 2. Périmètre

`index.html` **uniquement** : le paragraphe de description du bloc Toyota, une carte de réalisation
nouvelle dans ce même bloc, et les deux blocs de langue.

## 3. Hors périmètre, ne pas y toucher

Les quatre réalisations existantes du bloc Toyota · les autres blocs d'expérience · les cartes de
compétences · le reste de la page · **les tirets cadratins déjà présents, qui font l'objet d'un
chantier distinct** · la feuille de style · `scripts/` **sous toutes ses formes, y compris
`scripts/i18n-allowlist.txt`** · **D-1**, **D-8**, **D-12**, **D-13**, **D-15** · `tasks/ROADMAP.md`.

> **Si un terme de cet incrément manquait à la liste blanche, arrête-toi et dis-le.** Ne l'ajoute pas
> de ta propre initiative. Le relevé du Tech Lead (§4) dit qu'aucun ajout n'est nécessaire ; si la
> porte te contredit, c'est le relevé qui est faux, et il doit être corrigé avant toute autre chose.

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. `main` est à jour avec son distant (`git rev-list --left-right --count main...origin/main` = `0 0`).
2. **L'incrément de la carte IBM i est fusionné** : la clé `sk3_title` existe dans les deux blocs de
   langue. Sans lui, les clés `ibm1` à `ibm3` réemployées ici n'existent pas.
3. L'arbre de travail est propre **à l'exception des prompts non enregistrés**.
4. `bash scripts/gate.sh` sort en **code 0** avec **exactement 4 avertissements**, et ce sont les
   quatre clés orphelines connues (`e7_title`, `e7_desc`, `p3_title`, `p3_desc`, dette D-4).
5. Les clés `x71` et `y329` **n'existent pas encore**. Si l'une existe, arrête-toi : quelqu'un est
   passé avant toi, et le numéro libre a changé.

## 5. Spécification — des propriétés, pas des gestes

### P1 · Le paragraphe du bloc Toyota nomme le format libre et le SQL incorporé

La clé `e6_desc` **existe déjà** : seule sa **valeur** change, dans les deux blocs.

| Langue | Valeur attendue |
|---|---|
| `fr` | `Gestion et développement de projets ventes & logistique sur IBM AS/400 : outils métiers web, systèmes de livraison automatisés, intégration d'API Java sur OS/400. Adelia Studio, RPG IV, RPG ILE et format libre, CLLE, SQL incorporé, API système OS/400, Windev 20 et Webdev 20.` |
| `en` | `Management and development of sales & logistics projects on IBM AS/400: web business tools, automated delivery systems, Java API integration on OS/400. Adelia Studio, RPG IV, RPG ILE and free-format, CLLE, embedded SQL, OS/400 system APIs, Windev 20 and Webdev 20.` |

**Deux changements seulement, et ils sont factuels** : le format libre apparaît, et `SQL` devient
`SQL incorporé` parce que le programme concerné est un `SQLRPGLE`. Le texte visible de la page porte la
même valeur que le dictionnaire français : ce sont **deux copies**, la leçon D-14 s'applique.

### P2 · Une cinquième réalisation, en dernière position du bloc Toyota

Elle se place **après** la carte JVM OS/400, et elle est construite **exactement comme ses quatre
voisines** : mêmes classes, même structure, même mécanique de filet coloré. **Aucune couleur, aucune
classe, aucun style nouveau** n'est introduit ; la couleur du filet est prise parmi celles déjà
employées dans ce bloc.

| Élément | Clé | Français | Anglais |
|---|---|---|---|
| Titre | **`x71`** | `🔎 Analyse de l'historique système & surveillance des sous-systèmes` | `🔎 System history analysis & subsystem monitoring` |
| Description | **`y329`** | `Outil d'exploitation lisant le journal système QHST : contrôle que les travaux de nuit se sont exécutés conformément à une matrice de référence, met en évidence ceux qui manquent, et surveille l'état des sous-systèmes. Toute anomalie est consignée et notifiée par mail à l'exploitation.` | `Operations tool reading the QHST system log: checks that night jobs ran according to a reference matrix, flags those that did not, and monitors subsystem health. Any anomaly is logged and emailed to the operations team.` |

**Étiquettes**, dans cet ordre, en `class="exp-tag"` comme celles des quatre voisines :

| # | Étiquette (français) | Clé | Anglais |
|---|---|---|---|
| 1 | `RPG-ILE` | — | — |
| 2 | `RPG format libre` | **`ibm1`** (réemployée) | `RPG free-format` |
| 3 | `SQL incorporé` | **`ibm2`** (réemployée) | `Embedded SQL` |
| 4 | `CLLE` | — | — |
| 5 | `DDS` | — | — |
| 6 | `API système OS/400` | **`ibm3`** (réemployée) | `OS/400 system APIs` |
| 7 | `Windev` | — | — |

### P2 bis · Le réemploi de `ibm1`, `ibm2` et `ibm3` est délibéré, et ce n'est pas un couplage

Ces trois clés sont déjà employées par la carte de compétences IBM i. Elles le seront désormais
**deux fois chacune**. C'est un choix, écrit ici pour qu'il ne soit pas rouvert :

- Les deux emplois désignent **le même terme technique**. Une divergence de formulation entre la carte
  de compétences et la frise serait un défaut, pas une liberté.
- Le précédent existe et il est daté : le **11 août 2026**, la clé `e4_title` partagée par deux blocs
  d'expérience a été qualifiée de couplage par l'agent de revue, par Claude Code et par le Tech Lead.
  Le chef de projet a tranché en une phrase : il avait réellement occupé le même poste. **Une clé
  partagée n'est un défaut que si les deux textes peuvent légitimement diverger.** Dette **D-15**.

**Conséquence sur la preuve** : le critère « chaque clé nouvelle employée une fois » ne s'applique
**qu'à `x71` et `y329`**. Pour `ibm1`, `ibm2` et `ibm3`, la valeur attendue est **deux**.

### P3 · Aucun tiret cadratin dans le texte créé

Ni dans le titre, ni dans la description, ni dans les étiquettes, dans aucune des deux langues. Les
cadratins **déjà présents** ailleurs dans le bloc ne se touchent pas : ils relèvent du chantier de
nettoyage, pas de celui-ci.

### P4 · Rien d'autre ne bouge

Aucune autre réalisation, aucun autre bloc, aucune autre clé. Le différentiel doit être lisible en une
lecture.

## 6. Preuve exigée

1. `bash scripts/gate.sh` en **code 0** avec **exactement 4 avertissements**, pas cinq. Un cinquième
   signifierait une clé nouvelle jamais employée dans la page.
2. **`x71` et `y329` sont employées exactement une fois** ; **`ibm1`, `ibm2` et `ibm3` exactement deux
   fois**. Le prouver par programme, pas à l'œil, et écrire les cinq comptes.
3. **Le compte de clés par langue, avant et après** : `+2` de chaque côté, et **symétrique**. Écris les
   deux valeurs.
4. **Aucun tiret cadratin ajouté.** Écris le compte avant et après, **avec la convention de comptage
   employée**, et cite la ligne du livrable où cette convention est définie. Le compte doit être
   **strictement identique**. Une convention non écrite rend le nombre non falsifiable : c'est le
   constat R-4 de la revue de l'incrément précédent.
5. **Aucune entrée ajoutée à `scripts/i18n-allowlist.txt`**, et `scripts/` intact, à prouver.
6. `git diff` ne porte que sur `index.html`, et à l'intérieur, que sur le bloc Toyota et les deux blocs
   de dictionnaire.

## 7. Validation humaine due avant publication

Rien de ce qui suit n'est prouvable ici (dette **D-1**) :

- **Le bloc Toyota passe de quatre à cinq réalisations et devient nettement le plus long de la frise.**
  À regarder à **320, 375 et 900 px**, dans les deux langues.
- **Les sept étiquettes de la nouvelle carte** : les voisines en portent deux à cinq. `API système
  OS/400` est la plus longue de tout le bloc et ne doit pas déborder.
- **Le titre en anglais**, qui est le plus long des cinq.

## 8. Livrables

`.pipeline/spec.md` · `.pipeline/changes.md` · `.pipeline/test-results.md` (les cinq comptes d'emploi,
comptes de clés, compte de cadratins avant et après **avec sa convention**) · revue par l'agent
`reviewer` · `STATUS.md` = `READY`. **STOP avant `git push`.**

## 9. Critères d'acceptation

1. `e6_desc` porte les deux valeurs de P1, et le texte visible de la page est identique à la valeur
   française.
2. La cinquième réalisation existe, en dernière position du bloc Toyota, construite comme ses voisines,
   sans classe ni couleur nouvelle.
3. `x71` et `y329` existent **dans les deux blocs de langue** et sont employées **une fois**.
4. `ibm1`, `ibm2` et `ibm3` sont employées **deux fois** chacune, et **leurs valeurs n'ont pas changé**.
5. Porte verte, **exactement 4 avertissements**, et ce sont les quatre de D-4.
6. Comptes de clés symétriques, `+2` de chaque côté.
7. **Le compte de cadratins de la page est inchangé**, sous une convention écrite dans le livrable.
8. Aucun nom d'objet du client (bibliothèque, programme, fichier) ne figure dans le texte ajouté.
   `QHST` est la seule référence système, et elle est standard IBM.
9. `scripts/` **rigoureusement intact**, liste blanche comprise.
10. Le présent prompt est le **premier commit de la branche**, attribué au Tech Lead.
