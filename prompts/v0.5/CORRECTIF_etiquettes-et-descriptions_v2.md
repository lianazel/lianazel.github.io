# CORRECTIF — La page dit la même chose avant et après une bascule de langue

**Projet** : `lianazel.github.io` · **Type** : CORRECTIF (`/fix`) · **Version du prompt** : **v2** · **Date** : 10 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Solde** : dette **D-14**, et lève un des deux verrous d'**E-2b**.
**Remplace** : `CORRECTIF_etiquettes-et-descriptions_v1.md`, **jamais transmis** — deux défauts relevés
par Claude Code à la lecture, avant exécution. Le v1 reçoit son bandeau de péremption (§5, P4).

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Ton premier geste est de l'enregistrer comme
> **premier commit de ta branche**, message `docs:`, attribution au Tech Lead dans le corps. Jamais
> directement sur `main`.

> ⛔ **Écart de procédure, assumé et déclaré.** Un correctif exige normalement un `/diagnose`
> produisant un `RAPPORT_DIAGNOSTIC`. **Il n'y en aura pas.** La cause est établie, mesurée et
> **reproduite par deux parties indépendantes** — l'agent de revue a trouvé `e6_desc`, le triage
> complet a livré `e5_desc`, et aucun des deux ne regardait le travail de l'autre. Le §1 tient lieu de
> rapport. Décision du chef de projet du 10 août 2026. Famille de `RD-018`, cérémonie proportionnée au
> risque. **Si tu juges le diagnostic insuffisant, arrête-toi et dis-le : c'est un motif recevable.**

---

## Ce que la v1 disait de faux — lis-le, ça conditionne le §6

**1. Le critère d'identité à l'octet était impossible à tenir.** La v1 exigeait que le texte de la page
et la valeur française soient identiques **à l'octet**, sur toutes les clés touchées. C'est
irréalisable dès qu'une clé porte de la mise en forme : une valeur de dictionnaire est une chaîne
délimitée par des **guillemets doubles**, elle ne peut donc pas en contenir. La convention de la maison
le reflète déjà, sur deux précédents — `hero_role` et `loc` : la page écrit `class="grad"`, le
dictionnaire écrit `class='grad'`. Le §6 est réécrit en conséquence.

**2. Les dettes citées n'existaient nulle part.** La v1 annonçait solder « la dette D-14 », et le
prompt précédent mettait « D-13 » hors périmètre. Le §8 du cadrage s'arrête à **D-12**. On ne solde
pas une dette qui n'a jamais été écrite : le §5 P3 les crée.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué — ou pourquoi il est écarté |
|---|---|---|---|
| `UX_METHOD` | 1.1 | **Appliqué** | Libellés visibles, deux langues. Les descriptions fusionnées **s'allongent** : seul point où la cible petit écran d'abord est engagée, et il n'est pas prouvable ici (§7). |
| `VISION_METHOD` | 1.2 | **Consulté, non instancié** | Dette **D-1**. Deux paragraphes de la frise gagnent une à deux lignes ; les étiquettes ne changent pas de longueur. |
| `ASSURANCE_METHOD` | 1.2 | **Consulté, écarté pour cet incrément** | Aucune porte créée ni modifiée. **Le contrôle qui fermerait cette classe de défaut fait l'objet de l'incrément suivant, à dessein** — voir §3. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau, aucune saisie traitée. Du texte. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Diagnostic établi — tient lieu de rapport

**Le mécanisme, nommé.** `index.html`, la boucle de bascule : `el.innerHTML = d[k]`. Tant que le
visiteur n'a pas touché au bouton de langue, il lit le texte **écrit dans la page** ; dès la première
bascule — y compris pour revenir au français — il lit celui du **dictionnaire**. Quand les deux
diffèrent, la page change de contenu sans que rien ne le signale.

**Les quatre divergences de contenu réel** (triage complet mesuré : 161 concordances, 4 divergences) :

| Clé | En arrivant | Après une bascule |
|---|---|---|
| `nav_exp` (étiquette de section) | `// parcours` | `// Expérience` |
| `nav_proj` (étiquette de section) | `// réalisations` | `// Projets` |
| `e5_desc` (Atoll-Solutions) | contexte : groupe **BALAS**, équipe R&D | pile technique, **BALAS disparaît** |
| `e6_desc` (Toyota France) | outils métiers web, API Java sur OS/400 | liste d'outils, contenu différent |

**Deux divergences de plus, invisibles et de même nature** : `nav_skills` et `nav_contact` diffèrent
par la seule casse, masquée par `text-transform:uppercase`. Traitées ici parce que **c'est le couplage
qu'on supprime, pas ses symptômes visibles**.

**La cause.** Quatre étiquettes de section **empruntent les clés de la barre de navigation**, qui n'ont
pas le même vocabulaire — une barre oriente, un titre raconte. Les deux descriptions d'expérience ont
été écrites dans la page, puis réécrites dans un autre registre au dictionnaire, sans que l'une
remplace l'autre. **Aucune n'était complète** : l'une porte le contexte, l'autre la pile technique.

**Ce qu'aucune porte ne peut voir.** Les clés sont présentes, symétriques, complètes. Le filet ne juge
jamais si une phrase **dit vrai** — limite n° 1 déclarée dans l'en-tête de `check-i18n.mjs`.

**Aggravant.** Le couplage est un **piège pour E-2b** : changer un libellé de menu changerait
silencieusement quatre titres de section.

## 2. Périmètre

`index.html` **et** `CLAUDE.md` (§8 uniquement, création des lignes de dette). Rien d'autre.

## 3. Hors périmètre — ne pas y toucher

`scripts/` sous toutes ses formes · les clés `nav_*`, qui **conservent exactement leur valeur** et
restent utilisées par la barre de navigation · le contenu de `blind.html` · **D-8** · **D-12** ·
**E-3** · `tasks/ROADMAP.md`.

> **Le contrôle qui fermerait cette classe de défaut n'est PAS dans cet incrément, et c'est
> délibéré.** Il touchera `scripts/`, exigera son témoin défectueux et son assertion de vivacité, et
> il doit être écrit contre un fichier **déjà propre** — sinon il naît rouge et l'on est tenté de
> l'assouplir. Prompt suivant.

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. `main` est à jour avec son distant (`git rev-list --left-right --count main...origin/main` = `0 0`),
   porte la phrase `Qualité avant vitesse`, et aucune branche `feat/accroche-*` ne subsiste.
2. L'arbre de travail est propre **à l'exception des prompts non enregistrés**.
3. `bash scripts/gate.sh` sort en **code 0** avec **exactement 4 avertissements**.
4. Le défaut est encore vivant : les quatre étiquettes portent encore un attribut `data-i18n="nav_*"`,
   et `e5_desc` / `e6_desc` divergent encore de leur valeur au dictionnaire. Sinon, quelqu'un est passé
   avant toi — arrête-toi.

## 5. Spécification — des propriétés, pas des gestes

### P1 · Les étiquettes de section ne dépendent plus du menu

Les quatre `<span>` de classe `section-tag` portent **quatre clés nouvelles**, présentes dans **les
deux blocs de langue**. Noms proposés — retiens-les sauf raison contraire écrite : `tag_skills`,
`tag_exp`, `tag_proj`, `tag_contact`.

| Clé | Français | Anglais |
|---|---|---|
| `tag_skills` | `compétences` | `skills` |
| `tag_exp` | `parcours` | `background` |
| `tag_proj` | `réalisations` | `selected work` |
| `tag_contact` | `contact` | `contact` |

**En minuscules** : la feuille de style les met en capitales (`text-transform:uppercase`). Ne pas
capitaliser à la main — ce serait changer le rendu sans le vouloir.

### P2 · Les deux descriptions d'expérience disent la même chose aux deux emplacements

**`e5_desc` — Atoll-Solutions**

*Français* :
> Start-up créée et détenue par le groupe **BALAS**, acteur majeur du secteur du bâtiment. Membre de l'équipe R&D pour la conception d'une solution innovante de gestion de projets — applications desktop et mobiles. Windev, C#, .NET et WPF.

*Anglais* :
> A start-up founded and owned by the **BALAS** group, a major player in the construction industry. Member of the R&D team designing an innovative project-management solution — desktop and mobile applications. Windev, C#, .NET and WPF.

**`e6_desc` — Toyota France**

*Français* :
> Gestion et développement de projets ventes & logistique sur IBM AS/400 : outils métiers web, systèmes de livraison automatisés, intégration d'API Java sur OS/400. Adelia Studio, RPG IV, RPG ILE, CLLE, API système OS/400, SQL, Windev 20 et Webdev 20.

*Anglais* :
> Management and development of sales & logistics projects on IBM AS/400: web business tools, automated delivery systems, Java API integration on OS/400. Adelia Studio, RPG IV, RPG ILE, CLLE, OS/400 system APIs, SQL, Windev 20 and Webdev 20.

**« BALAS » reste en gras, avec sa couleur, aux deux emplacements** — sa disparition à la bascule fait
partie du défaut. La mise en forme entre donc dans les deux valeurs de dictionnaire, **selon la
convention établie** (voir P5).

### P3 · Le cadrage porte enfin les dettes qu'on cite

Trois lignes à créer au §8, dans le format du tableau existant. **Sans elles, cet incrément solderait
une dette qui n'a jamais été écrite.**

- **D-13** — *ouverte*. L'en-tête de `scripts/fixtures/blind.html` annonce « gate.sh 2/3 » ; le bloc
  est **2/9** depuis la session 9. Faux avant, plus faux après. Impact nul, trompeur pour qui lit.
  Remboursement : au prochain toucher légitime des témoins.
- **D-14** — *constatée et soldée le 10 août 2026 par le présent incrément*. Décrire le mécanisme
  (texte de la page ≠ valeur au dictionnaire, bascule qui substitue), les six clés concernées, et
  **ce qui reste vrai après** : rien n'empêche la classe de défaut de revenir, le contrôle de
  concordance étant l'incrément suivant.
- **D-15** — *ouverte*. Un commentaire de bloc annonce « Groupe Prenant (2020-2023) » au-dessus du
  bloc **Toyota France**, et la description de ce bloc porte une clé dont le numéro ne correspond pas
  à son titre. Rien de cassé ; un repère faux pour qui édite. Remboursement : au prochain toucher de
  la frise d'expérience.

### P4 · Le prompt v1 est marqué périmé

`prompts/v0.5/CORRECTIF_etiquettes-et-descriptions_v1.md` reçoit un bandeau ⛔ et le statut **PÉRIMÉ**,
motif : remplacé avant exécution par la v2, qui corrige un critère de preuve intenable et l'absence
des lignes de dette. **Fichier conservé, jamais supprimé.**

### P5 · La convention de mise en forme — la relire, ne pas l'inventer

Deux précédents la fixent, `hero_role` et `loc` : **la page écrit les attributs avec des guillemets
doubles, le dictionnaire avec des guillemets simples.** C'est structurel, pas stylistique — une valeur
de dictionnaire est délimitée par des guillemets doubles.

**C'est la seule différence tolérée entre les deux emplacements**, et elle ne concerne que les
guillemets d'attribut. Tout le reste — chaque lettre, chaque espace, chaque tiret — doit coïncider.

> **Ne recopie aucun caractère depuis ce prompt sans le comparer à l'existant.** Apostrophes, tirets,
> espaces avant les deux-points : la page a ses conventions, ce document a les siennes, et elles ne
> coïncident pas forcément. *(La v1 affirmait le contraire sur l'apostrophe, et se trompait.)*

## 6. Preuve exigée

1. **Comparaison par programme, jamais par relecture.**
   - Les **cinq clés sans mise en forme** (`tag_skills`, `tag_exp`, `tag_proj`, `tag_contact`,
     `e6_desc`) : le texte de la page et la valeur française sont **identiques à l'octet**.
   - **`e5_desc`**, qui porte du gras : identiques **après normalisation des seuls guillemets
     d'attribut**. Tu dois **prouver que la normalisation se limite à cela** — montre le différentiel
     caractère par caractère entre les deux chaînes, et qu'il ne contient rien d'autre que des
     `"` ↔ `'` en position d'attribut.
2. **Le triage complet, rejoué après correction** : il donnait 161 concordances et 4 divergences de
   contenu réel. Il doit donner **zéro divergence**. C'est le critère falsifiable de l'incrément.
3. `bash scripts/gate.sh` en **code 0** avec **exactement 4 avertissements** — pas cinq. Un cinquième
   signifierait une clé nouvelle jamais employée.
4. **Le compte de clés par langue, avant et après** : `+4` de chaque côté, et **symétrique**. Écris
   les deux valeurs.
5. `git diff` ne porte que sur `index.html` et `CLAUDE.md`. **`scripts/` intact, à prouver.**

## 7. Validation humaine due avant publication

Rien de ce qui suit n'est prouvable ici (dette **D-1**) :

- **le défaut lui-même** : ouvrir la page, basculer en anglais, revenir au français, et vérifier que
  les quatre étiquettes et les deux descriptions **ne bougent plus** ;
- **les deux paragraphes d'expérience à 320 et 375 px** — ils s'allongent d'une à deux lignes ; c'est
  le seul endroit où cet incrément peut abîmer la mise en page ;
- **le gras de BALAS**, présent au chargement **et** après bascule.

## 8. Livrables

`.pipeline/spec.md` · `.pipeline/changes.md` (avec le différentiel) · `.pipeline/test-results.md`
(les comparaisons par programme, le différentiel caractère par caractère de `e5_desc`, le triage
rejoué, les comptes de clés) · revue par l'agent `reviewer` · `STATUS.md` = `READY`.
**STOP avant `git push`.**

## 9. Critères d'acceptation

1. Les quatre étiquettes portent des clés nouvelles ; aucune ne porte plus de clé `nav_*`.
2. Les six clés touchées coïncident entre la page et le dictionnaire français selon la règle du §6.1,
   **prouvé par programme**.
3. Le triage rejoué donne **zéro divergence de contenu réel**.
4. Porte verte, **exactement 4 avertissements**.
5. Comptes de clés symétriques, `+4` de chaque côté.
6. Les lignes **D-13**, **D-14**, **D-15** existent au §8 du cadrage.
7. Le v1 porte son bandeau de péremption et n'a pas été supprimé.
8. `scripts/` **rigoureusement intact**.
9. Le présent prompt est le **premier commit de la branche**, attribué au Tech Lead.
