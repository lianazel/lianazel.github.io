# CHORE — Alignement du portfolio sur le harnais de travail

**Projet** : `lianazel.github.io` (Portfolio JC Cherid)
**Type** : CHORE (outillage) · **Version** : v1 · **Date de rédaction** : 8 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code, et lui seul
**Branche de travail** : `chore/alignement-harnais`

---

## Bloc — Satellites consultés

**Appliqués :**

- `TEC_IA_TWAIM_CORE.md` v2.27 — §4.1 (nommage et rangement des prompts, règle du périmètre),
  §4.2 (`CLAUDE.md`), §5.1 (ouverture de session), §5.5 (projets équipés de `/land`),
  §6.3 (porte d'outillage : tout projet doit avoir son `.claude/`), §6.4 (arborescence).
- `TWAIM_Kit/ONBOARDING_BROWNFIELD.md` — rituel de rétrofit sur projet existant. Temps 1 (drop-in)
  et Temps 2 (`CLAUDE.md` **descriptif**, jamais prescriptif) sont exécutés par le présent prompt ;
  Temps 3 (essai à chaud) est l'incrément suivant.
- `ASSURANCE_METHOD.md` couche A — une porte se livre avec sa **preuve de morsure**. Le filet posé
  ici embarque un témoin volontairement défectueux et refuse de rendre un vert si ce témoin passe.
- `SECURITY_METHOD.md` §3.3 — appliqué **en négatif, et c'est une contrainte dure** : ce chantier
  n'ajoute **aucune** dépendance, aucun gestionnaire de paquets, aucun fichier de manifeste. Tout le
  filet de tests est écrit en JavaScript natif. La surface d'attaque du projet reste nulle.
- `AGENT_SCOPE_METHOD.md` — appliqué **en négatif** : ce chantier n'écrit **rien** hors du dépôt.
  Aucune installation, aucune configuration machine, aucun enregistrement de serveur d'outils.
- `UX_METHOD.md` — consulté pour la section « Expérience utilisateur » du `CLAUDE.md` : la cible
  petit-écran-d'abord y est posée comme **cible**, et l'écart du code existant en **dette**, pas en règle.

**Écartés, avec motif :**

- `SQL_METHOD.md` — le projet n'a aucune base de données.
- `VISION_METHOD.md` — la barrière de rendu est **reportée par décision du chef de projet du 8 août 2026**.
  Elle est inscrite comme dette D-1 dans le `CLAUDE.md`, pas oubliée.
- `LOOPING_METHOD.md` et `LOOPING_AUDIT_METHOD.md` — aucun agent n'agit ici sans validation humaine.
- `MULTISESSION_METHOD.md` — un seul projet, une seule fenêtre.
- `PEDAGOGY_METHOD.md` — régit la façon de s'adresser au chef de projet ; le présent document
  s'adresse exclusivement à Claude Code.
- `RD_METHOD.md` — ce prompt ne porte aucune proposition de recherche.

---

## Contexte — à lire avant d'agir

Ce projet a été créé **avant** l'existence du harnais de travail. Il n'a aujourd'hui ni fichier de
cadrage, ni agents, ni commandes, ni journal, ni filet de tests. Le dépôt contient **un seul fichier
utile** : `index.html`.

**Ce prompt s'exécute en direct, sans slash command** — et c'est la seule fois. La raison est
mécanique : ce chantier **installe les commandes elles-mêmes**, il ne peut donc pas être porté par
l'une d'elles. Tous les incréments suivants passeront par `/ship`, `/diagnose`, `/fix` et `/land`.

Les fichiers à poser sont fournis prêts à l'emploi dans le dossier de livraison indiqué au §2. Ils ont
été rédigés et **essayés** par le Tech Lead ; tu les copies, tu ne les réécris pas.

---

## Périmètre

**Dans le périmètre :**

1. Poser le fichier de cadrage `CLAUDE.md`, validé par le chef de projet.
2. Instancier `.claude/` (agents et commandes) depuis le gabarit du référentiel.
3. Créer `.pipeline/`, `tasks/`, `prompts/`, `scripts/`, `VERSION`, `.gitignore`.
4. Poser le filet de tests et sa preuve de morsure.
5. Corriger deux déclarations redondantes dans le dictionnaire anglais (détail au §8).

**Hors périmètre — ne fais rien de tout cela :**

- **Aucune installation**, d'aucune sorte : ni paquet, ni navigateur, ni serveur d'outils. En
  particulier, **n'installe pas Playwright** : le chef de projet l'a explicitement reporté.
- **Aucune écriture hors du dépôt** : pas de fichier de configuration machine, pas de tâche planifiée.
- **Aucune retouche de `index.html`** au-delà des deux lignes du §8 : ni reformatage de la feuille de
  style, ni découpage en fichiers séparés, ni changement du sens des règles d'adaptation d'écran.
  Ces sujets sont inscrits comme dette dans le `CLAUDE.md` et se rembourseront au fil des touchers.
- **Aucune publication** vers le dépôt distant, aucune fusion. Tu t'arrêtes au dépôt sur ta branche.

---

## ÉTAPE 0 — Confrontation

Confronte ce prompt à tes règles permanentes : instructions machine, registre global des leçons,
règles chargées automatiquement. Si une instruction ci-dessous **contredit** l'une d'elles,
**arrête-toi et signale la contradiction** avant d'agir. Tu n'exécutes pas fidèlement un contrat qui
viole une règle permanente : tu rends la main. Le rédacteur peut se tromper.

## ÉTAPE 1 — Pré-conditions vérifiables

Vérifie, dans cet ordre. **Si l'une échoue, arrête-toi et signale-le** — n'essaie pas de la réparer.

1. Le répertoire de travail est bien la racine du dépôt `lianazel.github.io`, et `index.html` s'y trouve.
2. `git status --porcelain` ne renvoie **rien** (aucune modification en attente).
3. `git rev-list --left-right --count main...origin/main` renvoie `0	0` (branche locale et distante alignées).
4. Le dossier de livraison du §2 existe et contient les cinq fichiers annoncés.
5. Le gabarit d'agents est lisible à l'emplacement du §3.

## ÉTAPE 2 — Source des fichiers fournis

Dossier de livraison, **hors du dépôt** (ne le copie pas dans le dépôt, prends-y les fichiers un à un) :

```
C:\JobDirectory\CLAUDE_PROJECTS\_WEB\lianazelPortfolio\lianazelPortfolio\_livraison_cowork_20260808\
```

Sous Linux intégré à Windows, le même dossier s'écrit :

```
/mnt/c/JobDirectory/CLAUDE_PROJECTS/_WEB/lianazelPortfolio/lianazelPortfolio/_livraison_cowork_20260808/
```

Il contient :

| Fichier fourni | Destination dans le dépôt |
|---|---|
| `CLAUDE.md` | `CLAUDE.md` (racine) |
| `check-i18n.mjs` | `scripts/check-i18n.mjs` |
| `gate.sh` | `scripts/gate.sh` (rendre exécutable) |
| `broken.html` | `scripts/fixtures/broken.html` |
| `CHORE_alignement-harnais_v1.md` | `prompts/v0.1/CHORE_alignement-harnais_v1.md` |

## ÉTAPE 3 — Branche de travail

```bash
git checkout -b chore/alignement-harnais
```

## ÉTAPE 4 — Fichier d'exclusion du contrôle de version

Crée `.gitignore` à la racine (il n'en existe aucun aujourd'hui) :

```gitignore
# Secrets — garde de premier niveau, ne jamais retirer
.env
.env.*
*.key
*.pem

# Reglages de poste — propres a la machine, jamais partages
.claude/settings.local.json

# Systeme
.DS_Store
Thumbs.db
```

> **Ne mets pas `.pipeline/` dans ce fichier.** Le dossier lui-même est suivi ; c'est son **propre**
> fichier d'exclusion interne (créé à l'étape 6 : `*` puis `!.gitignore`) qui écarte son contenu.
> L'ignorer ici rendrait impossible l'enregistrement de ce fichier interne à l'étape 10, et le
> dossier n'existerait pas sur un poste fraîchement cloné.

## ÉTAPE 5 — Outillage projet (`.claude/`)

Copie le contenu de `.claude` du gabarit :

```
/mnt/c/JobDirectory/CLAUDE_PROJECTS/_CLAUDE_TEAM_WORKFLOW_AI_METHODOLOGY/Etude_technique/TWAIM_Kit/_TEMPLATE_AGENTS/.claude
```

vers `.claude/` à la racine du dépôt (agents et commandes), puis **remplace les balises** dans
**tous** les fichiers copiés :

| Balise | Valeur à écrire |
|---|---|
| `<!-- NOM_PROJET -->` | `lianazel.github.io — Portfolio JC` |
| `<!-- FRAMEWORK_TEST -->` | `aucun cadre tiers — contrôles Node natifs` |
| `<!-- TEST_CMD -->` | `bash scripts/gate.sh` |
| `<!-- TEST_PERIMETRE -->` | `dictionnaire bilingue (complétude, symétrie, doublons) et ancres de navigation` |
| `<!-- ORDRE_ICONES -->` | `identité · liens de section · bouton de langue (le bouton de langue ne disparaît jamais)` |

Dans la section « expérience utilisateur » des fichiers du gabarit, **garde la variante web/mobile**
et supprime la variante bureau/ligne de commande.

Vérifie ensuite qu'**aucune balise `<!-- ... -->` de gabarit ne subsiste** dans `.claude/` :

```bash
grep -rn '<!-- [A-Z_]* -->' .claude/ && echo "BALISES RESTANTES — corriger" || echo "aucune balise restante"
```

`settings.local.json`, s'il apparaît, **n'est pas enregistré** dans le dépôt — la règle d'exclusion
posée à l'étape 4 s'en charge mécaniquement. Vérifie-le : `git check-ignore -v .claude/settings.local.json`
doit citer cette règle.

## ÉTAPE 6 — Dossiers de travail

```bash
mkdir -p .pipeline tasks prompts/v0.1 scripts/fixtures
printf '*\n!.gitignore\n' > .pipeline/.gitignore
echo '0.1.0' > VERSION
```

Crée les trois fichiers de `tasks/` :

- **`tasks/JOURNAL_v0.1.md`** — titre `# Journal — lianazel.github.io v0.1`, puis une première
  entrée décrivant le présent alignement (date, branche, hash de l'enregistrement, contenu posé).
- **`tasks/lessons.md`** — titre `# Registre local des leçons — lianazel.github.io`, et une première
  entrée : *« Un contrôle de complétude naïf, ancré en début de ligne, a produit vingt faux défauts
  sur ce dictionnaire parce que plusieurs clés tiennent sur une même ligne. Un indicateur mal choisi
  fabrique exactement le défaut qu'il est censé détecter : vérifier l'indicateur avant de croire sa
  sortie. — 8 août 2026, passe d'alignement. »*
- **`tasks/ROADMAP.md`** — titre `# Feuille de route — lianazel.github.io`, reprenant les six
  déviations D-1 à D-6 du `CLAUDE.md` par ordre de priorité, D-1 en tête.

## ÉTAPE 7 — Filet de tests

Copie les trois fichiers du §2 (`check-i18n.mjs`, `gate.sh`, `broken.html`) à leur destination, puis :

```bash
chmod +x scripts/gate.sh
```

**Ne modifie ni le contrôle ni le témoin.** Le témoin est défectueux **volontairement** : c'est la
preuve que la porte mord. Le « réparer » désarmerait le filet.

## ÉTAPE 8 — Correction ciblée du dictionnaire (deux lignes, périmètre strict)

Le bloc anglais du dictionnaire déclare **deux fois** `copy_btn` et `copied_msg`. Les valeurs étant
identiques, l'écrasement est sans effet visible aujourd'hui — mais la porte de l'étape 9 refuse les
doublons, à raison : le jour où les deux valeurs divergeraient, le défaut serait silencieux.

Dans `index.html`, dans le bloc `en:` **uniquement**, supprime les **deux dernières** déclarations
redondantes, celles qui précèdent immédiatement `langBtn:"🇫🇷 Français"` :

```js
    copy_btn:"Copy",
    copied_msg:"Copied!",
    langBtn:"🇫🇷 Français"
```

devient :

```js
    langBtn:"🇫🇷 Français"
```

**Les déclarations plus haut dans le bloc `en:` sont conservées.** Aucune autre ligne de `index.html`
ne doit bouger.

## ÉTAPE 9 — Vérification de la porte (les deux sens, obligatoires)

```bash
bash scripts/gate.sh ; echo "code de sortie : $?"
```

Résultat attendu, et rien d'autre :

- la preuve de morsure annonce que le témoin **échoue comme attendu** ;
- le site réel passe avec **0 erreur bloquante** et **4 avertissements** (les quatre clés traduites
  jamais utilisées — dette D-4, informative et non bloquante) ;
- **code de sortie 0**.

Puis vérifie que la porte sait dire non — sans rien modifier de façon permanente :

```bash
cp index.html /tmp/idx.bak
sed -i '0,/data-i18n="nav_skills"/s//data-i18n="cle_inexistante"/' index.html
bash scripts/gate.sh ; echo "code de sortie attendu 1 : $?"
cp /tmp/idx.bak index.html
git diff --stat index.html   # doit ne montrer QUE la correction de l'etape 8
```

Si l'un des deux sens ne se comporte pas comme décrit, **arrête-toi et signale**. Une porte dont on
n'a pas constaté les deux sens n'est pas une porte.

## ÉTAPE 10 — Passation

1. **Enregistrement sur la branche, indexation précise — jamais `git add -A`** :

```bash
git add CLAUDE.md VERSION .gitignore index.html \
        .claude/ scripts/ tasks/ prompts/v0.1/ .pipeline/.gitignore
git status --short          # relire : aucun fichier non attendu
git commit -m "chore: alignement du projet sur le harnais de travail (cadrage, agents, filet de tests)"
```

2. **Relecture anti-secret avant de conclure** : `prompts/` et `CLAUDE.md` sont enregistrés dans un
   dépôt **public**. Vérifie qu'aucun jeton, aucune clé, aucun chemin machine sensible n'y figure.
   Les chemins du référentiel présents dans ce prompt et dans le `CLAUDE.md` sont **assumés** : ils
   pointent vers un dossier local, ne contiennent aucun identifiant, et servent l'exploitabilité.

3. **Écris `.pipeline/STATUS.md`** — dernier geste, ligne unique :

```
READY — alignement harnais — <horodatage ISO> — chore/alignement-harnais — tests 1/1
```

4. **Arrête-toi.** Ne fusionne pas, ne publie pas, ne supprime aucune branche. Le Tech Lead revoit,
   puis le chef de projet décide de l'atterrissage par `/land`.

---

## Rapport attendu de ta part

- Liste exhaustive des fichiers créés et modifiés.
- Sortie complète de `bash scripts/gate.sh` dans les deux sens (site sain, site cassé).
- Sortie de `git diff --stat index.html` prouvant que seule la correction de l'étape 8 y figure.
- Sortie du contrôle de balises restantes de l'étape 5.
- Tout écart entre ce prompt et ce que tu as trouvé sur le terrain.

---

*Prompt rédigé par Cowork le 8 août 2026 · à ranger dans `prompts/v0.1/` · gelé dès sa transmission :
toute évolution donne lieu à une révision `_v2`, jamais à une retouche en place.*
