# EVOL — L'assertion du bloc 2/3 cesse de reposer sur un marqueur partagé

**Projet** : `lianazel.github.io` · **Type** : EVOL (`/ship`) · **Version du prompt** : v1 · **Date** : 9 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : PÉRIMÉ — remplacé avant exécution par `prompts/v0.4/EVOL_vivacite-du-filet_v1.md`
(ne traitait qu'une facette d'un défaut dont l'étendue mesurée est bien plus large)

> ⛔ **PÉRIMÉ — ne pas exécuter.** Ce prompt visait **une** facette du défaut : le marqueur `AVEUGLE`
> partagé par la famille de gardes. La mesure du 10 août 2026 a montré que le filet comptait
> **24 chemins bloquants pour 13 assertions**, et que **sept** d'entre eux pouvaient mourir la porte
> verte — le marqueur partagé n'en expliquant que trois. Le prompt remplaçant traite la porte
> **entière** et solde la dette **D-10**, ainsi que **D-9** au passage.
>
> Sa prémisse était par ailleurs trop optimiste : « la garde fonctionne aujourd'hui, l'assertion est
> vivante, aucune anomalie n'est constatée » — ce durcissement était en réalité un **trou de
> couverture déjà ouvert**, pas un danger futur.
>
> Fichier **conservé, jamais supprimé** : c'est la trace du moment où l'on n'avait vu qu'un tiers du
> problème, et cette trace vaut d'être gardée.

> Ce n'est **pas** un correctif. La garde fonctionne aujourd'hui, l'assertion est vivante, aucune
> anomalie n'est constatée. On ferme un danger **futur** : c'est un durcissement, donc une évolution,
> et aucun rapport de diagnostic n'est requis.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué |
|---|---|---|---|
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | §3 Couche A — la modification porte sur une **porte**. Toute assertion touchée doit être **prouvée vivante** par neutralisation de son contrôle, jamais relue. §7, case « toute porte fondée sur un motif : garde de non-vacuité en place ». |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau. Deux fichiers d'outillage local. |
| `UX_METHOD` | — | **Écarté** | Aucun changement d'interface : ni la page, ni le style, ni le dictionnaire ne sont touchés. |
| `SQL_METHOD` · `AGENT_SCOPE_METHOD` · `LOOPING_METHOD` · `VISION_METHOD` | — | **Écartés** | Aucune base de données. Aucun geste hors du dépôt. Aucun agent autonome. Aucun rendu. |

---

## 1. Objectif

Le bloc **2/3** de `scripts/gate.sh` vérifie que le témoin de cécité échoue **pour cécité**. Il le
fait en cherchant le marqueur `AVEUGLE` dans la sortie.

Or `AVEUGLE` est un **identifiant partagé** : plusieurs gardes peuvent l'émettre. C'est exactement la
configuration que la leçon du 9 août interdit — *une assertion posée sur un identifiant nu peut être
satisfaite par un autre contrôle*. L'incrément précédent a traité le symptôme en donnant au contrôle 7
sa propre voix, ce qui demande aux gardes **futures** de ne pas s'approcher du marqueur. Rien ne les
en empêche.

**Mesure déjà faite par toi, en session 4** : remplacer le motif `AVEUGLE` par la **phrase propre** de
la garde de non-vacuité du texte visible — **deux lignes** — supprime le danger mécaniquement. C'est
ce que réalise cet incrément.

## 2. Périmètre

### 2.1 Le changement

Dans `scripts/gate.sh`, bloc **2/3** : l'assertion qui prouve la cécité porte désormais **le message
propre** de la garde de non-vacuité du texte visible, et non plus le marqueur partagé.

Le principe, à inscrire en commentaire au-dessus : **une assertion de vivacité nomme le contrôle
qu'elle prouve vivant, jamais une catégorie que plusieurs contrôles peuvent émettre.** Une phrase
d'erreur n'appartient qu'à un contrôle ; un marqueur circule.

### 2.2 La preuve — sinon on n'a rien fait

Une assertion **ne se relit pas, elle se prouve**. Sur une copie **hors dépôt** :

1. Neutralise la garde de non-vacuité du **texte visible** (remplacement de `errors.push(` par
   `[].push(` dans ce seul bloc — un no-op valide, qui simule un contrôle *mort* et non un fichier
   cassé). `bash scripts/gate.sh` doit **rougir**, en nommant cette garde-là.
2. Vérifie que l'assertion du contrôle 7 dans ce même bloc **tient toujours** : neutralise sa garde de
   non-vacuité et confirme que la porte rougit avec son message à elle.
3. Vérifie qu'aucune des deux ne peut satisfaire l'autre : neutralise l'une, et lis dans la sortie que
   c'est bien **son** message qui manque.

Reporte les trois épreuves dans `.pipeline/test-results.md`, avec la sortie obtenue.

### 2.3 Le balayage des autres assertions

Reprends **toutes** les assertions de `gate.sh`, blocs 1/3 et 2/3, et vérifie que chacune porte le
message propre du contrôle qu'elle surveille. **Si l'une d'elles repose encore sur un identifiant nu
ou sur une catégorie partagée, corrige-la de la même façon** et prouve-la comme au §2.2.

C'est le cœur de l'incrément : on ne remplace pas un motif, on rétablit une propriété sur l'ensemble
du bloc.

### 2.4 Ce que tu signales sans y toucher

La constante qui porte le marqueur partagé est **exposée** dans `scripts/check-i18n.mjs`, ce qui
invite à sa réutilisation par une garde future. Si, une fois le §2.1 fait, cette exposition reste un
risque à tes yeux, **écris-le dans ton rapport de clôture** avec la mesure qui l'établit. Ne la
supprime pas et ne la déplace pas : ce serait un changement de portée non demandé.

### 2.5 Le cadrage

Si — et seulement si — le nombre d'assertions ou leur nature change, mets à jour la description du
filet au §6 du `CLAUDE.md` pour qu'elle reste exacte. **Ne touche à rien d'autre** dans ce fichier :
son §3 est périmé et fait l'objet d'un incrément séparé.

## 3. Interdits explicites

- **Ne touche pas** à `index.html`, ni au dictionnaire, ni à la feuille de style, ni à la liste
  blanche, ni aux quatre traductions orphelines.
- **N'ajoute aucun contrôle bloquant** : cet incrément durcit les assertions existantes, il n'élargit
  pas la couverture.
- **N'ajoute aucune dépendance**, aucun outil, aucun paquet.
- **Ne modifie pas `tasks/ROADMAP.md`** : il est tenu par le Tech Lead.
- **Ne fusionne pas, ne publie pas, ne supprime pas de branche.**

## 4. Prérequis vérifiables

**Si l'un de ces points n'est pas satisfait, ARRÊTE-TOI et signale-le.**

1. L'arbre de travail est **propre**, et `main` est à jour avec sa jumelle publiée — vérifié par
   comparaison de références **en direct**, jamais depuis un artefact.
2. `.pipeline/STATUS.md` est en `CLOSED`.
3. `bash scripts/gate.sh` est **vert avant que tu ne commences**.
4. La version du projet est bien **0.3.0** : ce prompt vit dans `prompts/v0.3/`, et un écart
   signalerait que tu n'es pas sur l'état attendu.

## 5. Livrables

- Branche de travail : `feat/assertion-vivacite`.
- `.pipeline/spec.md`, `.pipeline/changes.md`, `.pipeline/last-diff.patch`.
- `.pipeline/test-results.md` — sortie complète de la porte, **plus** les trois épreuves du §2.2 et
  celles du §2.3.
- Enregistrement sur la branche, indexation **précise**, jamais `-A`.
- Dernier geste : `.pipeline/STATUS.md` = `READY — …`.

---

*Prompt déposé par Cowork. Il n'est exécutable qu'une fois transmis par le chef de projet.*
