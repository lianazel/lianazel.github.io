# CHORE — Promotion de deux leçons vers le registre global

**Projet d'origine** : `lianazel.github.io` · **Type** : CHORE · **Version** : v1 · **Date** : 9 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code

> ⚠️ **Geste HORS DÉPÔT.** Ce prompt n'écrit **rien** dans un dépôt de projet. Il touche **un seul
> fichier**, sur la machine : le registre global des leçons. Il fait l'objet d'un prompt dédié
> précisément pour ça — sa portée déborde le projet, il doit pouvoir être refusé indépendamment de
> tout chantier, et il doit laisser une ligne lisible et isolée dans la trace.

---

## Satellites consultés

| Satellite | Version | Statut | Ce qui en est appliqué |
|---|---|---|---|
| `AGENT_SCOPE_METHOD` | 1.1 | **Appliqué** | Geste hors dépôt isolé dans son propre prompt ; format de provenance **déjà en usage** dans le registre global, pas un format neuf imposé par ce prompt. |
| `ASSURANCE_METHOD` | 1.2 | **Appliqué** | Couche B — confinement : ajout seul, aucune réécriture, aucune suppression ; l'opération est réversible par retrait des lignes ajoutées. |
| `SECURITY_METHOD` | 1.6 | **Écarté** | Aucune dépendance, aucun secret, aucun réseau. Le fichier touché est local et personnel. |
| `UX_METHOD` · `SQL_METHOD` · `VISION_METHOD` | — | **Écartés** | Aucune interface, aucune base de données, aucun rendu. |

---

## 1. Objectif

Deux leçons inscrites au registre **local** du portfolio le 9 août 2026 portent la mention
« Applicable globalement : **Oui** — candidate à promotion ». Le chef de projet a validé leur
promotion. Il s'agit de les reporter dans le **registre global** des leçons, en **ajout seul**.

Les deux titres exacts, dans `tasks/lessons.md` du portfolio :

1. **« Une assertion posée sur un identifiant nu peut être satisfaite par un autre contrôle »**
2. **« Une garde qu'on n'a pas vue mordre sur son défaut n'est pas une garde, c'est une croyance »**

## 2. Périmètre — un seul fichier

**Le registre global des leçons**, et rien d'autre : `~/.claude/lessons.md`.

**Interdits explicites, et ils ne se discutent pas :**

- ne touche **aucun dépôt** — ni le portfolio, ni un autre projet, ni le référentiel ;
- **n'enregistre rien** dans git, où que ce soit ;
- ne modifie, ne réordonne, ne reformate **aucune entrée existante** du registre global ;
- ne « range » pas le fichier au passage, ne corrige pas ses fautes, ne fusionne pas de doublons ;
- n'installe rien, ne configure rien.

Si tu estimes qu'un autre fichier doit bouger : **ARRÊTE-TOI et signale**.

## 3. Prérequis vérifiables

**Si l'un de ces points n'est pas satisfait, ARRÊTE-TOI et signale-le.**

1. `~/.claude/lessons.md` **existe**. S'il est absent, ne le crée pas de ta propre initiative :
   signale-le, c'est une anomalie d'environnement, pas un cas à rattraper.
2. Le dépôt du portfolio est **propre et poussé** : le commit de clôture `e092df8` est présent sur
   `origin/main`, vérifié **en direct** par comparaison de références, jamais depuis un artefact.
   C'est lui qui porte les deux leçons locales : promouvoir une jumelle qui n'existe pas encore
   publiquement laisserait le registre global pointer dans le vide.
3. Les deux entrées existent bien dans `tasks/lessons.md` du portfolio, sous les titres cités au §1.

## 4. Le format — celui du fichier, pas le tien

**Lis d'abord `~/.claude/lessons.md` en entier**, et **calque le format des entrées existantes** :
structure des titres, niveau de sous-titres, formulation de la ligne de provenance. Le registre
global suit une convention en usage depuis mai 2026 ; ce prompt ne lui en impose aucune autre.

> **Règle de méthode, à appliquer telle quelle** : si la convention du fichier diffère de ce que tu
> aurais écrit spontanément, **c'est la convention du fichier qui gagne**. Une règle d'un jour qui
> heurte une pratique de plusieurs mois, c'est la règle qui est en tort.

Chaque entrée promue doit porter, dans la forme du fichier :

- son **titre**, repris à l'identique de la jumelle locale ;
- son **corps**, transposé au niveau global : le fond est conservé, mais les détails purement
  locaux (noms de fichiers du portfolio, identifiants de clés du dictionnaire) sont soit retirés,
  soit clairement présentés comme **l'exemple d'origine** et non comme la règle ;
- sa **provenance**, avec au minimum : la date, le projet d'origine (`lianazel.github.io`), et
  l'empreinte du commit qui porte la jumelle locale (`e092df8`).

## 5. Ajout seul — la garde principale

**Aucune ligne existante ne disparaît, aucune ne change.** Les deux entrées s'ajoutent, à
l'emplacement que la convention du fichier impose (fin de fichier, ou tête de liste si le registre
est antéchronologique — regarde comment il est ordonné avant d'écrire).

**Idempotence** : si une entrée portant l'un de ces deux titres est **déjà présente**, tu la sautes
et tu le signales. Tu ne la mets pas à jour, tu ne la dédoublonnes pas.

**Preuve avant / après** : relève le nombre de lignes et le nombre d'entrées du fichier **avant** et
**après**. Le compte d'entrées doit augmenter d'exactement deux, ou d'un, ou de zéro si les deux
existaient déjà — jamais diminuer. Une diminution signifie que tu as écrasé quelque chose : dans ce
cas, **restaure et signale**.

## 6. Rapport attendu

Affiche, dans cet ordre :

1. l'état du prérequis n° 2, avec la commande et sa sortie ;
2. la convention constatée dans le registre global, en deux lignes ;
3. le **texte exact ajouté**, intégralement ;
4. le comptage avant / après.

Aucun fichier d'artefact n'est attendu — ce chantier ne vit pas dans un dépôt. Le rapport à l'écran
**est** le livrable.

## 7. Ce que ce prompt ne fait pas

- Il ne promeut **que ces deux leçons**. D'autres leçons du même registre local portent aussi la
  mention « applicable globalement » : elles ne sont **pas** dans ce mandat.
- Il ne touche pas au registre **local**, qui reste la source et conserve sa jumelle.
- Il n'ajoute aucune leçon née d'ailleurs, même si elle te paraît évidente.

---

*Prompt du Tech Lead · geste hors dépôt, isolé par la règle du périmètre · relu, aucun secret.*
