# CHORE — Sauver la rétro-analyse du harnais et verser ses constats au carnet de recherche

**Projet d'origine** : `lianazel.github.io` · **Type** : CHORE · **Version du prompt** : v1 · **Date** : 9 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code

> ⚠️ **Geste HORS DÉPÔT DE PROJET.** Ce prompt n'écrit **rien** dans le dépôt du portfolio. Il touche
> **le référentiel central**, sur la machine. Il fait l'objet d'un prompt dédié précisément pour ça :
> sa portée déborde le projet, il doit pouvoir être refusé indépendamment de tout chantier, et il
> doit laisser une ligne isolée et lisible dans la trace.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué |
|---|---|---|---|
| `AGENT_SCOPE_METHOD` | 1.1 | **Appliqué** | Geste hors dépôt de projet isolé dans son propre prompt. Aucun format de provenance neuf imposé : on reprend celui déjà en usage dans le carnet de recherche. |
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | Couche B — confinement : **ajout seul**, aucune réécriture, aucune suppression, aucun enregistrement. L'opération est réversible par retrait des lignes ajoutées. |
| `RD_METHOD` | — | **Appliqué** | Le carnet de recherche est le réceptacle prévu pour une proposition d'amélioration du framework. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau. Deux fichiers de documentation, locaux. |
| `UX_METHOD` · `SQL_METHOD` · `VISION_METHOD` · `LOOPING_METHOD` | — | **Écartés** | Aucune interface, aucune base de données, aucun rendu, aucun agent autonome. |

---

## 1. Contexte et objectif

Le 9 août 2026, à la demande du chef de projet, tu as produit une **rétro-analyse du harnais de
travail vu de l'intérieur**, à partir de la session 4 du portfolio. Elle vit aujourd'hui dans
`.pipeline/RAPPORT_RETROANALYSE_amaliorations_harnais.md` du dépôt du portfolio.

**Ce fichier est condamné.** `.pipeline/` est ignoré par le contrôle de version : le rapport ne part
pas au dépôt, ne survit pas à la fusion, et disparaîtra de l'histoire. Le rapport le dit lui-même, et
c'est précisément le constat **H-2** qu'il décrit — il en est la démonstration sur sa propre personne.

**Deux gestes, et rien d'autre** : sauver le rapport dans le référentiel central, puis verser au
carnet de recherche les trois constats qui relèvent du **framework** et non du portfolio.

## 2. Périmètre — deux fichiers, un seul dossier

**Le référentiel central**, et rien d'autre :
`C:\JobDirectory\CLAUDE_PROJECTS\_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY\Etude_technique`
— vu depuis le Linux intégré : `/mnt/c/JobDirectory/CLAUDE_PROJECTS/_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY/Etude_technique`.

### 2.1 Sauver le rapport

Copie le contenu de `.pipeline/RAPPORT_RETROANALYSE_amaliorations_harnais.md` vers :

```
Etude_technique/TWAIM_R&D/RETEX_HARNAIS_20260809_session4-portfolio.md
```

Trois ajustements, et aucun autre — **le corps du rapport ne se réécrit pas** :

1. **Le nom corrige la coquille** `amaliorations` → le fichier de destination est nommé ci-dessus, et
   il ne la reprend pas. Le chef de projet a validé la correction.
2. **L'avertissement d'auto-évaporation en tête du rapport devient faux** une fois le fichier
   versionné. Remplace-le par une mention de provenance : d'où vient ce rapport, quand, sur quelle
   assiette d'observation, et le fait qu'il a été **sauvé** de `.pipeline/` par le présent prompt —
   avec le nom de ce prompt. La démonstration de H-2 doit rester lisible : c'est sa valeur.
3. **Ajoute en fin de rapport** une ligne indiquant où ses constats ont été versés (§2.2), pour que
   le lien soit à double sens.

Si `TWAIM_R&D/` n'existe pas, **arrête-toi et signale** — ne crée aucun dossier de ta propre
initiative dans le référentiel.

### 2.2 Verser trois constats au carnet de recherche

Dans `Etude_technique/TWAIM_Kit/BACKLOG_RD.md`, **en ajout seul**, en respectant scrupuleusement le
format déjà en usage dans ce fichier — tu le lis d'abord, tu ne l'inventes pas :

| Constat | Ce qu'il porte |
|---|---|
| **H-1** | Le harnais n'a **aucune porte sur lui-même** : le produit a des contrôles bloquants, la méthode n'en a aucun ; toutes ses règles vivent dans des commentaires. Contradiction interne — il enseigne qu'une règle non gardée est une croyance, et n'en garde aucune des siennes. Piste chiffrée : la « méta-porte version pauvre », dix lignes, qui compte les points de contrôle et rougit si l'écart bouge sans mention. |
| **H-3** | La **frontière de mandat** produit des blocages récurrents : deux fois sur quatre sessions, le geste correct sortait du périmètre du prompt et rien ne l'a rattrapé ensuite. Piste : une clause de mandat élargi — *un défaut confirmé en revue et situé dans le rayon d'explosion de l'incrément est dans le mandat par construction*. |
| **H-6** | Le **niveau de version est décidé par le préfixe du nom de branche** dans le gabarit d'atterrissage. Déterministe, mais une sémantique déduite d'une convention de nommage dérive. Constat déjà relevé côté portfolio ; sa correction appartient au **gabarit source**, pas aux instances. |

Chaque entrée cite **le fait de la session 4 qui l'établit** et **l'empreinte du rapport sauvé** au
§2.1, de sorte que la piste puisse être remontée dans les deux sens.

### 2.3 Deux réserves du Tech Lead à inscrire avec H-1

Elles ne sont pas de toi, elles ne t'engagent pas, et elles doivent figurer pour que la piste ne soit
pas relue comme plus mûre qu'elle ne l'est :

1. **La méta-porte proposée n'est pas une preuve de morsure**, contrairement à ce qu'annonce le
   rapport. Elle détecte un **changement de compte** ; on peut la satisfaire en ajoutant une
   assertion qui n'assure rien. Utile et bon marché, mais la nommer « preuve de morsure » serait
   créditer un dispositif de ce qu'il ne fait pas — le travers même qui a aggravé la réserve R1.
2. **Le déclencheur de rituel proposé tombe sous H-1.** « La même classe de défaut pour la 3ᵉ fois »
   suppose que quelqu'un compte, et ce quelqu'un est aujourd'hui une mémoire humaine : c'est donc une
   règle non gardée, soit une croyance. Le compteur doit vivre quelque part — le registre des leçons
   peut le porter, par classe de défaut.

### 2.4 Ce qui n'est PAS versé, et pourquoi

- **H-2** et **H-4** ont un versant portfolio et y sont déjà traités (feuille de route du portfolio,
  constats C-1 et dette D-1). Ne les duplique pas dans le carnet de recherche.
- **H-5**, les agents muets pendant leur exécution, relève de l'**outillage d'agents** et non de la
  méthode : rien à en faire dans le carnet. Constat, pas action.

## 3. Interdits explicites

- **Ne touche aucun dépôt de projet** — ni le portfolio, ni un autre.
- **N'enregistre rien dans git**, où que ce soit. Ni dans le référentiel, ni ailleurs. Le chef de
  projet relit puis enregistre lui-même.
- **Ne modifie, ne réordonne, ne reformate aucune entrée existante** du carnet de recherche.
- **Ne « range » pas** le référentiel au passage, ne corrige pas ses fautes, ne fusionne pas de
  doublons, ne crée aucun dossier.
- **Ne réécris pas le corps du rapport** : les trois ajustements du §2.1, rien d'autre.
- N'installe rien, ne configure rien.

Si tu estimes qu'un autre fichier doit bouger : **ARRÊTE-TOI et signale.**

## 4. Prérequis vérifiables

**Si l'un de ces points n'est pas satisfait, ARRÊTE-TOI et signale-le.**

1. `.pipeline/RAPPORT_RETROANALYSE_amaliorations_harnais.md` **existe** dans le dépôt du portfolio, et
   son contenu est bien celui de la rétro-analyse du 9 août — vérifié par lecture, jamais par la date.
2. Le dossier du référentiel est **accessible en écriture** depuis le Linux intégré, et
   `TWAIM_Kit/BACKLOG_RD.md` ainsi que `TWAIM_R&D/` **existent** déjà.
3. Aucun fichier du même nom que la destination du §2.1 n'existe : si oui, **arrête-toi**, n'écrase
   rien.

## 5. Livrable

Un rapport de clôture **en chat**, qui indique : les deux chemins écrits, le nombre de lignes ajoutées
au carnet de recherche, le nombre d'entrées **avant et après** (l'ajout doit être strictement additif),
et la confirmation qu'aucun dépôt n'a été enregistré.

**Aucun fichier du portfolio ne change.** Le rapport d'origine reste dans `.pipeline/` : on le sauve,
on ne le déplace pas — ainsi la démonstration de H-2 reste vérifiable sur place jusqu'à la prochaine
fusion.

---

*Prompt déposé par Cowork. Il n'est exécutable qu'une fois transmis par le chef de projet.*
