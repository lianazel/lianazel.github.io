# CHORE — Quatre dettes entrent au registre

**Projet** : `lianazel.github.io` · **Type** : CHORE (documentation) · **Version du prompt** : **v1** · **Date** : 12 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Ton premier geste est de l'enregistrer comme
> **premier commit de ta branche**, message `docs:`, attribution au Tech Lead. Jamais sur `main`.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué, ou pourquoi il est écarté |
|---|---|---|---|
| `STYLE_METHOD` | 1.1 | **Appliqué** | **S-1** : aucun tiret cadratin dans le texte ajouté au cadrage. Tout compte cité porte **son corpus et sa date**, conformément à la convention écrite le 12 août 2026. |
| `SECURITY_METHOD` | 1.6 | **Appliqué sur un point** | La ligne D-17 nomme des chaînes présentes sur un site public. Elle décrit **où elles sont**, elle n'en ajoute aucune et n'en retire aucune. |
| `ASSURANCE_METHOD` · `UX_METHOD` · `VISION_METHOD` | — | **Écartés** | Aucune porte, aucune interface, aucun rendu. Ce prompt ne touche que de la documentation. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `MULTISESSION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Un seul projet. |

---

## 1. Objectif

**Trois dettes vivent au journal et pas au registre**, une quatrième n'est écrite nulle part, et **deux
autres viennent d'être mesurées à la revue du bloc TWAIM** sans avoir de foyer durable. Le
journal est de l'histoire ; le tableau du §8 du `CLAUDE.md` est la **source de vérité vivante** que lit
un agent à l'ouverture. Tant que ces lignes n'y sont pas, la source de vérité du projet ignore quatre
défauts connus.

Ce prompt ne corrige **aucun** de ces défauts. Il les **inscrit**.

---

## 2. Périmètre

`CLAUDE.md`, **le seul tableau du §8**, et rien d'autre. Quatre lignes ajoutées à la suite de D-15.

---

## 3. Hors périmètre, ne pas y toucher

`index.html` · `scripts/` · `tasks/` · `prompts/` · toutes les autres sections du `CLAUDE.md`, **y
compris le §3 dont D-18 parle** et le §6 dont l'incrément précédent s'est occupé.

> **Aucune correction de contenu.** Ni les noms de D-17, ni le `.NET 8` de D-16, ni les nombres du §3.
> Les inscrire est le geste ; les corriger sera décidé après, ligne par ligne.

---

## 4. Préconditions vérifiables

Vérifie-les ; ne les suppose pas. Si l'une manque, **arrête-toi et dis laquelle**.

1. `main` est à jour avec son distant : `git rev-list --left-right --count main...origin/main` = `0 0`.
2. **L'incrément du bloc TWAIM est fusionné** : la clé `e13_title` existe dans les deux blocs de langue
   d'`index.html`. Sinon **arrête-toi et signale-le** : les deux incréments touchent le même fichier de
   cadrage et ne doivent pas se croiser.
3. Le tableau du §8 se termine aujourd'hui à **D-15**. Si une ligne D-16 ou au-delà existe déjà,
   arrête-toi.

---

## 5. Les quatre lignes

Même format que les quinze existantes : `#` · `Déviation` · `Impact` · `Plan de remboursement`.

### D-16 · Un numéro de version que rien ne mesure

**Déviation.** Le bloc d'expérience de Talentia Software annonce `.NET 8` dans son paragraphe et dans
ses étiquettes. Le POC relu dans le code est en `.NET 6`, et la sous-carte du POC l'affiche. La page
porte donc deux numéros de version pour une même mission, à quatre lignes d'écart.

**Impact.** Nul sur le rendu. Un lecteur technique y lira une contradiction plutôt qu'une nuance.
Aucun des deux nombres n'est mesurable depuis le dépôt.

**Plan de remboursement.** **Ni confirmer ni corriger.** Le chef de projet ne se souvient pas de la
version de la mission ; la trancher au jugé produirait une affirmation fausse sur une page dont c'est
la règle de n'en porter aucune. À vérifier un jour sur une fiche de mission, puis à corriger.
*Constatée le 11 août 2026, inscrite le 12.*

### D-17 · Des noms appartenant à des tiers sont affichés sur la page

**Déviation.** Deux familles, et elles ne relèvent pas du même arbitrage.

**Famille A, noms d'objets, de projets et de programmes.** Cinq occurrences, couvertes par la règle du
chef de projet du 11 août 2026 : aucun nom d'objet client sur le site.

| Chaîne | Où elle vit |
|---|---|
| `VN_3EN1_DEMAT` | titre de sous-carte **écrit en dur** dans le corps, plus une entrée de liste blanche motivée |
| `Solution HOME-SERVICE` | valeur de dictionnaire, blocs `fr` et `en` |
| `FluxProd.exe` | valeur de dictionnaire, blocs `fr` et `en` |
| `Projet OrderFlex` | valeur de dictionnaire, blocs `fr` et `en` |
| `Solution ToolsLib` | valeur de dictionnaire, blocs `fr` et `en` |

**Famille B, identités de clients.** Cinq entrées, **arbitrage ouvert et non tranché** : citer ses
clients est une pratique de curriculum vitae ordinaire, et la règle du 11 août parle d'objets, pas
d'entreprises. `PICARD SURGELÉS` · `MNM` et sa raison sociale en clair · `BALAS` · `Media Performance`
· `MasterPrint`. Les deux dernières sont **indéterminables depuis le code** : savoir si un nom désigne
un produit du marché ou l'outil interne d'un client est un fait du domaine.

**Impact.** Ces chaînes sont en ligne. Aucune n'est un secret, mais aucune n'a fait l'objet d'une
décision.

> ⚠️ **La surface n'est pas la page, c'est le dépôt entier.** Relevé le 12 août 2026 : `tasks/JOURNAL_v0.2.md`
> est servi publiquement et porte **dix** des noms inventoriés ci-dessus, et le `README.md` y dirige
> explicitement le lecteur. Rien de neuf n'y est exposé, ces fichiers étaient déjà servis. Mais **l'énoncé
> de cette dette était trop étroit** : elle dit « sur la page » quand il faut lire « dans tout ce qui est
> servi ». C'est la leçon globale du 6 août : *ce qui est servi est lisible, la confidentialité couvre
> tout le livré, pas les seules pages.* Le périmètre de remboursement couvre donc aussi les journaux,
> les prompts et les artefacts committés.

**Plan de remboursement.** Famille A : retrait, dans un incrément dédié, avec des intitulés lisibles
choisis par le chef de projet. Famille B : sa décision, séparément. **Ne pas traiter les deux ensemble.**

> **Ce que l'inventaire enseigne au-delà de son contenu, et c'est le plus utile.** Il a été
> **sous-estimé deux fois**. Un premier balayage cherchait quatre majuscules collées et manquait les
> composés à trait d'union. Un second, écrit pour corriger le premier, ajoutait les séparateurs et les
> sigles et manquait la casse chameau, donc `OrderFlex` et `ToolsLib`. Les deux ont conclu à un
> inventaire complet. **Le troisième motif n'a rien trouvé de plus : c'est une lecture d'écran qui a
> livré les deux derniers.** Quand un balayage sert à établir une **absence**, son motif s'écrit avec
> l'inventaire, sinon la conclusion vaut pour le motif et non pour la famille.

### D-18 · Le §3 déclare des nombres que rien ne lit

**Déviation.** Le §3 annonce `132` clés déclarées pour `126` utilisées, et cite `langBtn` comme clé du
dictionnaire. Mesuré le 12 août 2026 sur `9add85b` : **183 déclarées, 176 utilisées**, et `langBtn`
n'est plus une clé.

**Impact.** Nul sur le comportement. Trompeur pour l'agent qui lit le cadrage comme source de vérité,
et le défaut se reproduit **à chaque incrément** puisque rien ne relie ces nombres au fichier.

**Plan de remboursement.** **Corriger le nombre ne rembourse rien**, cela ne fait que redater le même
défaut : il sera faux au prochain incrément. Deux sorties réelles, à trancher par le Tech Lead : le
**retirer** du cadrage, ou le faire **lire par la porte** comme le budget de largeur du §9 l'est déjà.
C'est la maladie D-7 appliquée à un compte de contenu.

### D-19 · Le cadrage pèse plus du double de son plafond

**Déviation.** La méthode fixe un seuil d'alerte de **20 000 caractères** pour un fichier de cadrage.
Ce document en compte **46 494**, mesurés le 12 août 2026 par `wc -m` sur le fichier entier.
**232 % du plafond**, et cela n'était écrit nulle part.

**Impact.** Un cadrage trop volumineux dégrade la précision de l'agent qui le lit à chaque ouverture.
C'est le motif même du seuil.

**Plan de remboursement.** **Modulariser, pas raboter** : raboter la prose érode le sens et repousse le
mur. Deux leviers utiles, et un piège. Les leviers : la **fiche de règle à portée de chemin**, chargée
seulement quand l'agent ouvre un fichier correspondant, et le **simple pointeur** vers ce qui fait
autorité. Le piège : une **inclusion de fichier ne libère aucun contexte**, le contenu est déplié au
démarrage comme s'il était collé sur place. On externalise l'illustration, **jamais l'obligation**.
*À instruire par le Tech Lead avant tout geste.*

> **Cette ligne est écrite en connaissance de sa propre ironie** : l'inscrire allonge le fichier
> qu'elle dénonce. C'est assumé. Une dette qui n'est pas écrite ne se rembourse jamais, et la
> modularisation prévue rendra ces caractères largement.

### D-20 · Quatre liens sont sous le seuil de contraste

**Déviation.** Les liens en `var(--c1)` posés sur le fond des sous-cartes affichent un contraste
d'environ **3,6 pour 1**, mesuré le 12 août 2026 par l'agent de revue, là où le niveau AA des règles
d'accessibilité demande **4,5 pour 1** pour du texte courant. Quatre liens sont concernés, dont un seul
est récent.

**Impact.** Lisibilité dégradée pour une partie des lecteurs. Le cadrage note depuis le 8 août que le
contraste du thème sombre n'a jamais été mesuré : c'est la première mesure réelle, et elle est rouge.

**Plan de remboursement.** **Aucune couleur nouvelle n'est nécessaire** : `--c1-soft` existe déjà dans
la palette et donne environ **7,4 pour 1**. Mais corriger le seul lien récent créerait une incohérence
visuelle avec les trois autres. C'est donc une **passe d'accessibilité sur la page entière**, incrément
à part, qui mesurera aussi les autres couples de couleurs. *Mesurée le 12 août 2026, inscrite le même
jour.*

### D-21 · La pastille de dates n'a pas de garde

**Déviation.** La pastille de dates du nouveau bloc devient la plus large de la frise : **199,4 px pour
206 px utiles** à 320 px de large, mesuré le 12 août 2026. Il reste **6,6 px**. La règle
`.exp-date` interdit le retour à la ligne, donc une date plus longue déborderait au lieu de se couper.

**Impact.** Nul aujourd'hui, la marge existe. Une date de vingt-trois caractères ou plus déborderait,
et **rien ne le verrait** : aucun contrôle du filet ne surveille cette largeur, contrairement à
l'adresse de contact et aux libellés de navigation, qui ont chacun la leur.

**Plan de remboursement.** Un contrôle de largeur sur le même patron que les contrôles 8 et 9, avec sa
garde de non-vacuité et son témoin. À décider quand une entrée de frise sera ajoutée, puisque c'est le
seul geste qui peut déclencher le défaut.

---

## 6. Critères d'acceptation

1. Le tableau du §8 porte **six lignes de plus**, D-16 à D-21, dans cet ordre, après D-15.
2. **Aucune autre section du `CLAUDE.md` n'est modifiée**, et notamment ni le §3 ni le §6.
3. **Aucun fichier hors `CLAUDE.md` n'est modifié.**
4. **Aucun tiret cadratin** dans le texte ajouté. Comptes de la page inchangés : `152` écrits,
   `49` vus par langue.
5. Chaque nombre cité dans les quatre lignes porte **sa date** et, quand il en a une, **sa règle de
   comptage**.
6. Porte verte, **exactement 4 avertissements**. Le filet ne lit pas le §8, mais il doit rester vert.
7. Ce prompt est le **premier commit de la branche**, attribué au Tech Lead.

---

## 7. Livrables

- `.pipeline/spec.md`, `.pipeline/changes.md`, `.pipeline/test-results.md`, `.pipeline/last-diff.patch`.
- `.pipeline/STATUS.md` = `READY — étape <N> — <horodatage ISO> — <branche> — tests <X/Y>` en **dernier
  geste**.
- Dans `changes.md`, **la taille du `CLAUDE.md` avant et après**, en caractères, avec sa règle de
  comptage. C'est le nombre que D-19 surveille, et il augmente du fait de cet incrément : l'écrire est
  la seule façon honnête de poser cette ligne.

---

*Prompt déposé le 12 août 2026 par le Tech Lead. Déposer n'est pas transmettre : il attend la
désignation du chef de projet.*
