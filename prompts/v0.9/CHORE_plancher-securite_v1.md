# CHORE — Plancher de sécurité : poser la liste d'interdits du harnais

**Destinataire** : Claude Code · **Dépôt** : `lianazel.github.io` · **Version produit au dépôt** : 0.9.3
**Branche à créer** : `chore/plancher-securite`

---

## Mode d'exécution

**AUTO MODE ON : autorisé.**

**Motif, constatable.** Aucune preuve de cet incrément ne se joue devant un témoin humain. Il n'y a
aucun rendu à regarder, aucun jugement d'aspect, et le dépôt ne déclare aucun serveur MCP, donc aucun
appel ne tombe sous une règle `ask`. La porte que cet incrément pose **ne s'éprouve pas ici** : une
règle de permission ne mord qu'à la relance, son essai 0 est un prompt séparé joué en session neuve.
Les deux seules vérifications de cet incrément sont mécaniques : un `diff` et le filet `scripts/gate.sh`.

**Borne.** Autorisé à usiner seul ne veut pas dire autorisé à conclure seul. Tu t'arrêtes à
`.pipeline/STATUS.md = READY`. Le merge, le `/land` et le push restent des gestes du chef de projet.

---

## Satellites consultés

**Appliqués.**

- `SECURITY_METHOD` **§3.5** (moindre privilège) : c'est l'objet même de l'incrément. La liste `deny`
  restreint les permissions de l'agent au strict nécessaire.
- `SECURITY_METHOD` **§3.4** (secrets) : `prompts/` est committé et le dépôt est **public**. Scrub
  obligatoire avant enregistrement.
- `SECURITY_METHOD` **§3.7** (garde-fou anti-secret) : lu. Ce dépôt n'a **aucun** hook `pre-commit`.
  Cet incrément **n'en pose pas** : ce serait une seconde porte dans le même lot. Le constat est
  reporté au chef de projet, pas traité ici.
- `SECURITY_METHOD` **§3.10** (travaux planifiés exposés en HTTP) : lu au titre de la ligne §8.1
  « touche une permission ». Sans objet sur ce dépôt : site statique publié par GitHub Pages, aucun
  travail planifié, aucun point d'entrée serveur.
- `ASSURANCE_METHOD` **couche A**, « une porte se prouve à sa naissance », précision du 4 septembre
  2026 : pour une règle qui s'exécute **hors du code** (permission d'agent), la preuve de morsure a une
  forme imposée, l'**essai 0**, committé **avec** la règle et joué en **session neuve**, en **commande
  littérale**. C'est ce qui impose le second fichier déposé par cet incrément.
- `STYLE_METHOD` + profil d'instance : les deux fichiers déposés dans `prompts/v0.9/` partent dans un
  dépôt public. Contrainte de rédaction ci-dessous, liée à la dette **D-17**.

**Écartés, avec motif.**

- `AGENT_SCOPE_METHOD` : **hésitation réelle, tranchée**. Le fichier `.claude/settings.local.json`
  porte `"Bash(git *)"` dans sa liste `allow`, et ce geste aurait pu entrer ici. Il est **retiré du
  prompt** : ce fichier est exclu du dépôt par `.gitignore` ligne 8 et déclaré « réglage de poste,
  propre à la machine ». La règle du périmètre (Core §4.1, v2.25) veut qu'un geste hors dépôt fasse
  l'objet d'un prompt distinct, et la doctrine du gabarit veut qu'une garde que l'agent pourrait
  réécrire n'en soit pas une. **Ce geste appartient au chef de projet.**
- `UX_METHOD` et `VISION_METHOD` : aucune ligne d'interface, aucun pixel. `index.html` n'est pas ouvert.

---

## Prérequis, à vérifier avant tout geste

Vérifie les quatre points suivants. **Si l'un d'eux est faux, ARRÊTE-TOI et signale-le**, sans créer
de branche et sans rien enregistrer.

1. `.pipeline/STATUS.md` porte un état `CLOSED`. Rien n'est en cours d'usinage.
2. Le fichier `VERSION` à la racine contient `0.9.3`.
3. Le fichier `.claude/settings.json` **n'existe pas** dans ce dépôt.
4. `main` est à jour et l'arbre de travail est propre.

---

## Ce que cet incrément fait — trois gestes, dans cet ordre

### Geste 1 — premier enregistrement

Crée la branche `chore/plancher-securite` et enregistre le présent prompt, **seul**, avec le message
exact :

```
docs(prompt): prompts/v0.9/CHORE_plancher-securite_v1.md
```

### Geste 2 — poser `.claude/settings.json`

Crée le fichier `.claude/settings.json` avec **exactement** le contenu ci-dessous. Fins de ligne
**LF**, une ligne vide finale, aucun ajout, aucun retrait, aucune réindentation.

```json
{
  "permissions": {
    "deny": [
      "Bash(git push)",
      "Bash(git push *)",
      "Bash(git merge *)",
      "Bash(git tag *)",
      "Bash(git reset --hard *)",
      "Bash(git clean *)",
      "Bash(git rebase *)",
      "Bash(git restore *)",
      "Bash(git checkout -- *)",
      "Bash(git checkout .)",
      "Bash(git branch -D *)",
      "Bash(git remote *)",
      "Bash(gh *)",
      "Bash(npm install *)",
      "Bash(npm ci *)",
      "Bash(npm i *)",
      "Bash(npm exec *)",
      "Bash(npx *)",
      "Bash(yarn *)",
      "Bash(pnpm *)",
      "Bash(pip install *)",
      "Bash(pip3 install *)",
      "Bash(python -m pip *)",
      "Bash(python3 -m pip *)",
      "Bash(curl *)",
      "Bash(wget *)",
      "Bash(ssh *)",
      "Bash(scp *)",
      "Bash(sudo *)",
      "Bash(rm -rf *)",
      "Bash(rm -fr *)",
      "Bash(rm -r *)",
      "WebFetch",
      "WebSearch",
      "Read(~/.ssh/**)",
      "Edit(/.claude/**)",
      "Edit(/.git/**)",
      "Edit(~/.claude/**)",
      "mcp__playwright__browser_run_code_unsafe"
    ],
    "ask": [
      "mcp__playwright"
    ]
  }
}
```

**Origine de ce bloc** : `Etude_technique/TWAIM_Kit/_TEMPLATE_AGENTS/.claude/settings.json`, mesuré le
12 septembre 2026 à **1 111 octets**, **48 lignes**, **40 lignes de règles** (39 `deny` + 1 `ask`),
fins de ligne LF. Ces trois nombres sont les critères d'acceptation 1 à 3 ci-dessous.

La règle `ask` sur `mcp__playwright` et la règle `deny` sur `browser_run_code_unsafe` sont **inertes**
sur ce dépôt, qui ne déclare aucun serveur MCP. Elles restent dans le fichier : la copie est conforme
au gabarit, et la règle devient active le jour où un navigateur MCP est branché. **Ne les retire pas.**

### Geste 3 — déposer le prompt d'essai 0 et clore

Le fichier `prompts/v0.9/SPIKE_essai0-plancher_v1.md` est déjà présent dans l'arbre de travail,
déposé par Cowork. **Ne le modifie pas, ne le relis pas pour l'améliorer.** Enregistre-le avec
`.claude/settings.json` dans un second enregistrement, message :

```
chore(securite): plancher de permissions + prompt d'essai 0
```

Puis lance `bash scripts/gate.sh`, écris `.pipeline/changes.md`, `.pipeline/test-results.md` et
`.pipeline/review.md`, et termine par `.pipeline/STATUS.md = READY`.

---

## Contrainte de rédaction, liée à la dette D-17

Le dépôt est public et `prompts/` est servi. **Aucun des noms d'objets ou de clients listés à la ligne
D-17 du §8 du `CLAUDE.md` ne doit apparaître** dans les fichiers que tu enregistres, y compris dans
les artefacts `.pipeline/` que tu rédiges. Chaque prompt enregistré qui cite ces chaînes agrandit le
périmètre de la dette, et rien ne le signale.

---

## Ce que cet incrément NE fait PAS

Nommément, fichier par fichier :

- **`index.html`** : non ouvert, non modifié.
- **`scripts/gate.sh`, `scripts/check-i18n.mjs`, `scripts/i18n-allowlist.txt`, `scripts/fixtures/*`** :
  non ouverts, non modifiés. Le filet est **lancé**, il n'est pas touché.
- **`.claude/agents/diagnostician.md`, `.claude/agents/reviewer.md`** : inchangés.
- **`.claude/commands/ship.md`, `land.md`, `fix.md`, `diagnose.md`, `session-start.md`,
  `session-close.md`** : inchangés. Leur mise à niveau est un incrément séparé.
- **`.claude/agents/prompt-reviewer.md`** : **non créé ici.** Incrément séparé.
- **`.claude/settings.local.json`** : non ouvert, non modifié. Geste du chef de projet.
- **`CLAUDE.md`** : **seule** la ligne de pied de page change, et seulement au `/land`, pour le numéro
  de version. Le §2 « Méthode de travail & agents », le §8 « Déviations connues » et le §9
  « Expérience utilisateur » ne bougent d'aucun caractère. **Aucune section « Règles de sécurité »
  n'est ajoutée ici.**
- **`tasks/ROADMAP.md`, `tasks/lessons.md`** : non modifiés. Aucune leçon n'est écrite par cet incrément.
- **`~/.claude/settings.json`** (plancher machine, hors dépôt) : jamais ouvert, jamais modifié.
- **Aucune dette D-1 à D-22 n'est soldée**, aucune n'est inscrite.
- **Aucun essai 0 n'est joué dans cette session.** Une règle posée ici est **non éprouvée**, et tes
  artefacts doivent le dire en ces termes.

---

## Critères d'acceptation

| # | Critère | Comment il se vérifie |
|---|---|---|
| 1 | `.claude/settings.json` existe et pèse **1 111 octets** | `wc -c .claude/settings.json` |
| 2 | Il compte **48 lignes** | `wc -l .claude/settings.json` |
| 3 | Il compte **40 lignes de règles** | `grep -c '^      "' .claude/settings.json` |
| 4 | Le JSON est valide | `node -e "JSON.parse(require('fs').readFileSync('.claude/settings.json','utf8'))"` |
| 5 | Le filet sort en **code 0**, avec **4 avertissements** attendus (dette D-4) | `bash scripts/gate.sh` |
| 6 | Le diff de la branche ne nomme que **trois fichiers** | `git diff --name-only main...HEAD` doit rendre exactement `.claude/settings.json`, `prompts/v0.9/CHORE_plancher-securite_v1.md`, `prompts/v0.9/SPIKE_essai0-plancher_v1.md` |
| 7 | Le fichier `VERSION` vaut toujours `0.9.3` à `READY` | le bump appartient au `/land` |

Si le critère 5 échoue, **arrête-toi** : le filet ne touche pas aux permissions, un rouge ici signale
autre chose et cet incrément n'a pas le mandat de le réparer.

---

## Après `READY` — ce qui appartient au chef de projet

Rien de ce paragraphe n'est une instruction pour toi. Il est là pour que la passation soit lisible :
revue, merge, `/land` (bump patch 0.9.3 → 0.9.4), push, puis **session neuve** pour l'essai 0.

---

*Prompt rédigé par Cowork le 12 septembre 2026 · révision v1 · un seul exemplaire, dépôt qui fait foi :
`lianazel.github.io/prompts/v0.9/`.*
