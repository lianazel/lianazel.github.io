# CORRECTIF — La page dit la même chose avant et après une bascule de langue

**Projet** : `lianazel.github.io` · **Type** : CORRECTIF (`/fix`) · **Version du prompt** : v1 · **Date** : 10 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : PÉRIMÉ — remplacé avant exécution par `CORRECTIF_etiquettes-et-descriptions_v2.md`
(critère de preuve intenable, et dettes citées qui n'existaient pas au cadrage)
**Solde** : dette **D-14**, et lève un des deux verrous d'**E-2b**.

> ⛔ **PÉRIMÉ — ne pas exécuter.** Remplacé **avant toute exécution** par la v2, sur deux défauts
> relevés à la lecture :
>
> 1. **Son critère de preuve était intenable.** Le §6 exigeait l'identité **à l'octet** entre le texte
>    de la page et la valeur française sur *toutes* les clés touchées. C'est impossible dès qu'une clé
>    porte de la mise en forme : une valeur de dictionnaire est délimitée par des **guillemets
>    doubles**, elle ne peut donc pas en contenir. La maison a déjà sa convention — `hero_role` et
>    `loc` écrivent `class='grad'` au dictionnaire là où la page écrit `class="grad"`. La v2 réécrit
>    le critère : identité à l'octet sur les clés sans mise en forme, et pour `e5_desc`, différentiel
>    **caractère par caractère** prouvant que l'écart se limite aux guillemets d'attribut.
> 2. **Les dettes citées n'existaient nulle part.** Elle annonçait solder « la dette D-14 » quand le
>    §8 du cadrage s'arrêtait à D-12. On ne solde pas une dette qui n'a jamais été écrite : la v2 les
>    crée d'abord.
>
> Fichier **conservé, jamais supprimé** : c'est la trace d'un critère de preuve qui paraissait plus
> exigeant qu'il n'était applicable — et un critère inapplicable finit par être assoupli plutôt que
> tenu.

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Ton premier geste est de l'enregistrer comme
> **premier commit de ta branche**, message `docs:`, attribution au Tech Lead dans le corps. Jamais
> directement sur `main`.

> ⛔ **Écart de procédure, assumé et déclaré — lis-le avant de commencer.** Un correctif exige
> normalement un `/diagnose` produisant un `RAPPORT_DIAGNOSTIC`. **Il n'y en aura pas.** La cause est
> établie, mesurée et **reproduite par deux parties indépendantes** — l'agent de revue de l'incrément
> précédent, puis le Tech Lead sur l'état publié. Le §1 ci-dessous **tient lieu de rapport**. Décision
> du chef de projet du 10 août 2026, prise explicitement, écrite ici plutôt que passée sous silence.
> Famille de `RD-018` — cérémonie proportionnée au risque. **Si tu juges le diagnostic insuffisant,
> arrête-toi et dis-le : c'est un motif d'arrêt recevable.**

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué — ou pourquoi il est écarté |
|---|---|---|---|
| `UX_METHOD` | 1.1 | **Appliqué** | Libellés visibles, deux langues. Les descriptions fusionnées **s'allongent** : c'est le seul point où la cible petit écran d'abord est engagée, et il n'est pas prouvable ici (voir §7). |
| `VISION_METHOD` | 1.2 | **Consulté, non instancié** | Dette **D-1**. Deux paragraphes de la frise d'expérience gagnent une à deux lignes ; les étiquettes ne changent pas de longueur. Aucune mesure automatique ne le prouvera. |
| `ASSURANCE_METHOD` | 1.2 | **Consulté, écarté pour cet incrément** | Aucune porte créée ni modifiée. **Le contrôle qui fermerait cette classe de défaut fait l'objet de l'incrément suivant, à dessein** — voir §3. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau, aucune saisie traitée. Du texte. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Diagnostic établi — tient lieu de rapport

**Le mécanisme.** Six éléments de la page portent un attribut de traduction dont la **valeur au
dictionnaire diffère du texte écrit dans la page**. Tant que le visiteur n'a pas touché au bouton de
langue, il lit le texte de la page ; **dès la première bascule — y compris pour revenir au français —
il lit celui du dictionnaire**. La page change donc de contenu sans que rien ne le signale.

**Les quatre divergences de contenu réel** (triage complet mesuré : 161 concordances, 4 divergences) :

| Clé | Ce qu'on lit en arrivant | Ce qu'on lit après une bascule |
|---|---|---|
| `nav_exp` (étiquette de section) | `// parcours` | `// Expérience` |
| `nav_proj` (étiquette de section) | `// réalisations` | `// Projets` |
| `e5_desc` (Atoll-Solutions) | contexte : groupe **BALAS**, équipe R&D | pile technique, **BALAS disparaît** |
| `e6_desc` (Toyota France) | outils métiers web, API Java sur OS/400 | liste d'outils, contenu différent |

**Deux divergences supplémentaires, invisibles mais de même nature** : `nav_skills` et `nav_contact`
diffèrent par la seule casse, masquée par `text-transform:uppercase`. Elles sont traitées ici parce
que **c'est le couplage qu'on supprime, pas ses symptômes visibles**.

**La cause.** Quatre étiquettes de section **empruntent les clés de la barre de navigation**
(`nav_*`), qui n'ont pas le même vocabulaire — une barre oriente, un titre raconte. Les deux
descriptions d'expérience, elles, ont été écrites dans la page puis réécrites dans un autre registre
au dictionnaire, sans que l'une remplace l'autre.

**Ce qu'aucune porte ne peut voir.** Les clés sont présentes, symétriques, complètes. Le filet ne
juge jamais si une phrase **dit vrai** — c'est la limite n° 1 déclarée dans l'en-tête de
`check-i18n.mjs`. Trouvé en mesurant le périmètre d'un contrôle candidat, pas par une alerte.

**Aggravant.** Le couplage est un **piège pour E-2b** : changer un libellé de menu changerait
silencieusement quatre titres de section.

## 2. Périmètre

`index.html` **uniquement**.

## 3. Hors périmètre — ne pas y toucher

`scripts/` sous toutes ses formes · les clés `nav_*`, qui **conservent leur valeur** et restent
utilisées par la barre de navigation · le commentaire de bloc trompeur qui annonce « Groupe Prenant »
au-dessus de Toyota (**dette, inscrite, pas ici**) · **D-8** · **D-12** · **E-3** · `tasks/ROADMAP.md`.

> **Le contrôle qui fermerait cette classe de défaut n'est PAS dans cet incrément, et c'est
> délibéré.** Il touchera `scripts/`, exigera son témoin défectueux et son assertion de vivacité —
> toute la machinerie de la session 9 — et il doit être écrit contre un fichier **déjà propre**,
> sinon il naît rouge et l'on est tenté de l'assouplir. Il fait l'objet du prompt suivant.

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. **L'incrément de l'accroche est atterri** : `main` porte la phrase `Qualité avant vitesse`, aucune
   branche `feat/accroche-*` ne subsiste, et `main` est à jour avec son distant
   (`git rev-list --left-right --count main...origin/main` = `0 0`).
2. L'arbre de travail est propre **à l'exception du présent prompt**.
3. `bash scripts/gate.sh` sort en **code 0** avec **exactement 4 avertissements**.
4. Les quatre étiquettes de section portent **encore** un attribut `data-i18n="nav_*"`, et les deux
   descriptions divergent **encore** de leur valeur au dictionnaire. Si ce n'est plus le cas,
   quelqu'un est passé avant toi — arrête-toi.

## 5. Spécification — des propriétés, pas des gestes

### P1 · Les étiquettes de section ne dépendent plus du menu

Les quatre `<span>` de classe `section-tag` portent **quatre clés nouvelles**, présentes dans **les
deux blocs de langue**. Nom proposé — retiens-le sauf raison contraire écrite : `tag_skills`,
`tag_exp`, `tag_proj`, `tag_contact`.

| Clé | Français | Anglais |
|---|---|---|
| `tag_skills` | `compétences` | `skills` |
| `tag_exp` | `parcours` | `background` |
| `tag_proj` | `réalisations` | `selected work` |
| `tag_contact` | `contact` | `contact` |

**En minuscules** : la feuille de style les met en capitales (`text-transform:uppercase`). Ne pas
capitaliser à la main — ce serait changer le rendu sans le vouloir.

Le texte écrit dans la page et la valeur française doivent être **identiques**.

### P2 · Les deux descriptions d'expérience disent la même chose dans les deux emplacements

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

### Trois points de vigilance, tirés de l'existant

1. **Le nom BALAS est en gras dans la page**, avec une couleur en attribut de style. Cette mise en
   forme doit **entrer dans les deux valeurs de dictionnaire**, sinon le gras disparaît à la bascule —
   c'est une partie du défaut. Les valeurs du dictionnaire sont des chaînes délimitées par des
   guillemets doubles : la mise en forme s'y écrit donc avec des **apostrophes simples**. Le fichier
   porte déjà ce motif ailleurs — **le relire et le suivre, ne pas l'inventer**.
2. **Ne recopie aucun caractère depuis ce prompt sans le comparer à l'existant.** Apostrophes, tirets,
   espaces avant les deux-points : la page a ses conventions, ce document a les siennes, et elles ne
   coïncident pas forcément. *(Le prompt précédent affirmait le contraire et se trompait.)*
3. **Les clés `nav_*` gardent exactement leur valeur actuelle.** On les découple, on ne les touche pas.

## 6. Preuve exigée

1. **Comparaison par programme, jamais par relecture** : pour les six clés touchées, le texte écrit
   dans la page et la valeur française sont **identiques à l'octet**. Joins la sortie.
2. **Le triage complet, rejoué après correction** : il donnait 161 concordances et 4 divergences de
   contenu réel. Il doit donner **zéro divergence**. C'est le critère falsifiable de cet incrément.
3. `bash scripts/gate.sh` en **code 0** avec **exactement 4 avertissements** — pas cinq. Un
   cinquième signifierait une clé nouvelle jamais employée.
4. **Le compte de clés par langue, avant et après** : il doit augmenter de **quatre de chaque côté**,
   et rester **symétrique**. Écris les deux valeurs.
5. `git diff` ne porte que sur `index.html`. `scripts/` intact, à prouver.

## 7. Validation humaine due avant publication

Rien de ce qui suit n'est prouvable ici (dette **D-1**) :

- **le défaut lui-même** : ouvrir la page, basculer en anglais puis revenir au français, et vérifier
  que les quatre étiquettes et les deux descriptions **ne bougent plus** ;
- **les deux paragraphes d'expérience à 320 et 375 px** — ils s'allongent d'une à deux lignes, c'est
  le seul endroit où cet incrément peut abîmer la mise en page ;
- **le gras de BALAS**, présent au chargement **et** après bascule.

## 8. Livrables

`.pipeline/spec.md` · `.pipeline/changes.md` (avec le différentiel) · `.pipeline/test-results.md`
(les comparaisons par programme, le triage rejoué, les comptes de clés) · revue par l'agent
`reviewer` · `STATUS.md` = `READY`. **STOP avant `git push`.**

## 9. Critères d'acceptation

1. Les quatre étiquettes portent des clés nouvelles ; aucune ne porte plus de clé `nav_*`.
2. Les six clés touchées sont identiques entre la page et le dictionnaire français, **prouvé par
   programme**.
3. Le triage rejoué donne **zéro divergence de contenu réel**.
4. Porte verte, **exactement 4 avertissements**.
5. Comptes de clés symétriques, `+4` de chaque côté.
6. `scripts/` **rigoureusement intact**.
7. Le prompt est le **premier commit de la branche**, attribué au Tech Lead.
