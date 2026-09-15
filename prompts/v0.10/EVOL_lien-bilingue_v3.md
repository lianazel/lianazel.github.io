# EVOL — Le lien de la carte IBMiAPI emmène la langue

**Destinataire** : Claude Code · **Dépôt** : `lianazel.github.io`
**Type** : `EVOL` · **Branche attendue** : `feat/lien-bilingue`
**Fil** : `tasks/ROADMAP.md` partie I, **E-3**, section « Décidé le 9 août — mécanisme du lien bilingue ». Ce prompt prend **ce mécanisme et rien d'autre** d'E-3. Voir « Ce que ce prompt NE fait PAS ».

> ⚠️ **Compteur de verdicts non-`SHIP` sur le nom `lien-bilingue` : 2**, lues dans `.pipeline/prompt-reviews.log` le 15 septembre 2026 : `BLOCK` à 12:15 sur le `_v1`, `NEEDS_WORK` à 12:33 sur le `_v2`. **Ce `_v3` est la dernière version admissible sous ce nom** : un `_v4` serait refusé sans relecture. Un refus de plus, et le sujet se reprend sous un nom neuf, avec un périmètre réellement autre.
>
> **Ce que le `NEEDS_WORK` reprochait au `_v2`.** Deux `FAILS`, tous deux retenus, tous deux **introduits par la révision** — le mode de panne qu'il fallait chercher :
>
> | Le reproche | Le remède, dans ce `_v3` |
> |---|---|
> | Le `CLAUDE.md` §6 l. 234 dit « **dix défauts semés** » pour `broken.html`, qui en portera onze. La ligne vit dans le §6, le seul paragraphe ouvert : rien n'empêchait de la corriger, elle avait été manquée | la pièce 5 passe de **7** à **11** retouches, et le critère 10 devient un **balayage mesuré** au lieu d'une liste à cocher |
> | Le prompt posait un absolu que son propre texte démentait : « aucun texte littéral prescrit ne porte de cadratin », alors que la pièce 2.3 prescrit `let hrefReport = '—';`. En AUTO MODE, l'agent se serait arrêté sur sa propre consigne | l'énoncé est **borné à `index.html`**, et l'exception est nommée. Le `'—'` de `hrefReport` **reste** : c'est la convention de la maison, et il part dans `check-i18n.mjs`, jamais dans `index.html` |
>
> **Les quatre `FAILS` du `_v1` restent soldés**, la relecture du `_v2` l'a vérifié par mesure. Les **dix `WARNS`** du `_v2` sont tous pris. Le prompt du 13 septembre, `EVOL_carte-ibmiapi-et-poc-wpf_v1`, interdisait nommément ce mécanisme : ces consignes-là sont levées.
>
> **La leçon des deux reprises, et elle vaut pour l'exécution aussi.** Les deux fois, le défaut était une **phrase du prompt contredite par une autre phrase du même prompt**, jamais une erreur de conception. Un compte écrit à deux endroits diverge toujours : c'est pourquoi le critère 10 ne demande plus de cocher des retouches, il **mesure l'absence des anciennes valeurs**.

---

## Le défaut, sa cause, et ce qui est déjà tranché

**Le défaut, constaté en production le 13 septembre 2026.** Portfolio en anglais, clic sur « Voir le site » de la carte IBMiAPI : le site appelé s'ouvre **en français**.

**La cause, et elle est simple.** Le bouton pointe l'adresse nue. Le site appelé ne reçoit donc aucune langue. **Il ne détecte pas la langue d'appel : il la reçoit, ou il devine.**

**Ce qui est déjà mesuré, et qu'il ne faut pas rechercher.** Lu dans le code du site appelé, `js/i18n.js`, le 13 septembre 2026, par le chef de projet :

- Ordre de résolution : `langue de l'adresse`, sinon `préférence mémorisée`, sinon `langue du navigateur`. Arbitré le 15 août 2026.
- La langue de l'adresse se porte par **`?lang=`**, lecture **stricte** : la valeur doit valoir exactement `fr` ou `en`. `EN` et `fr-FR` sont refusés.
- `https://lianazel.github.io/ibm-s36-to-rest-api/?lang=en` a été **ouvert et vérifié** : la page s'affiche en anglais.
- **`…/en` rend 404.** Le site est bilingue à une seule adresse, il n'a pas de chemin par langue.

**Point de conception tranché, à ne pas rouvrir : les deux langues portent le paramètre.** Le français prend `?lang=fr`, **pas** l'adresse nue. Motif mesuré : le site ne réécrit sa préférence mémorisée **que** si l'adresse porte un `lang` valide. Une adresse nue côté français laisserait un visiteur venu une fois en anglais coincé en anglais.

**Arbitrage du chef de projet, 15 septembre 2026, sortie (a)** : le mécanisme et sa porte partent **dans le même incrément**. Un mécanisme livré sans sa porte est la « lampe torche » que `ASSURANCE_METHOD` couche A refuse, et le filet actuel ne voit pas les attributs — son propre en-tête le dit.

---

## Mode d'exécution

**AUTO MODE ON : autorisé.**

**Motif, constatable.** Toutes les preuves de cet incrément sont des comptes (`grep -c`, `grep -o`), des tailles (`wc -c`), des empreintes (`sha256sum`) et des codes de sortie (`bash scripts/gate.sh`, `node scripts/check-i18n.mjs`). Aucune preuve de rendu n'est prescrite, aucun jugement d'aspect n'est demandé. La seule règle `ask` de `.claude/settings.json` est `mcp__playwright`, et ce prompt interdit nommément d'appeler Playwright.

**Aucune requête réseau, et ce n'est pas une précaution de style.** Le plancher de permissions porte `Bash(curl *)` et `Bash(wget *)` en `deny`, et `WebFetch` comme `WebSearch` en `deny`. La cible a **déjà été ouverte et vérifiée** par le chef de projet le 13 septembre 2026 : il n'y a rien à joindre. **Ne tente aucun appel réseau, et ne contourne aucun refus.**

**La borne reste entière** : usiner seul n'est pas conclure seul. Tu t'arrêtes à `READY`.

---

## Satellites consultés — table §8.1 du Core (v2.33)

**Lignes cochées :**

| Ligne §8.1 | Déclenchée par |
|---|---|
| `ASSURANCE_METHOD` couche A | on **crée une porte** : un contrôle bloquant, sa garde de non-vacuité, son témoin. Sections mobilisées : « Une porte se prouve à sa naissance et se surveille toute sa vie » (preuve de morsure **et** garde de non-vacuité), et « Outil d'inspection ≠ porte » — un mécanisme dont rien ne fait échouer la chaîne n'est pas protégé |
| `UX_METHOD` | on touche l'**interface** : la destination d'un bouton de la grille de projets. Section mobilisée : **§3.7**, *aucune chaîne de langue dans le JS*. Les deux adresses vont au dictionnaire, jamais dans le programme. Aucune règle de feuille de style, aucun libellé visible ne bouge |
| `STYLE_METHOD` + `STYLE_PROFILE.local.md` | on **produit du texte destiné à être lu** : les sept retouches de prose du §6 du `CLAUDE.md` (pièce 5) et la ligne ajoutée à l'en-tête du témoin (pièce 3.3). Règle mobilisée : **S-1**, le cadratin ne relie pas deux propositions. **Aucun texte littéral destiné à `index.html` ne porte de cadratin**, et le critère 7 le vérifie. *Une première rédaction rangeait cette ligne en « écartée », au motif qu'aucun texte n'était écrit, alors qu'elle en prescrivait huit. La ligne écartée à tort est précisément celle qui aurait attrapé le cadratin de la pièce 1.3.* |
| `AGENT_SCOPE_METHOD` | on **écrit hors du dépôt** : les copies de neutralisation du critère 8. Ce geste ne figure **pas** dans la liste fermée du §3, qui ne porte qu'une entrée, `A-1` (promotion d'une leçon vers `~/.claude/lessons.md`). Le §2 exige donc un **prompt dédié** : **le présent prompt est cette autorisation**, et elle est bornée au §« Ce qu'on écrit », critère 8 |

**Lignes écartées, avec leur motif. Elles sont falsifiables, c'est pour cela qu'elles sont là :**

| Ligne §8.1 | Pourquoi elle n'est pas déclenchée |
|---|---|
| `SECURITY_METHOD` §3.4, §3.5, §3.7, §3.10 | aucune clé, aucun secret, aucun jeton, aucune permission. `.claude/` n'est pas ouvert. **La garde `http`/`https` n'est pas une exigence de cette ligne** : c'est le point 4 du contrat E-3 du 9 août 2026 |
| `SECURITY_METHOD` §3.3 | aucune dépendance ajoutée, mise à jour ni remplacée. Le site reste à zéro dépendance, invariant §4-1 du `CLAUDE.md` |
| `SQL_METHOD` | aucune base de données, aucun schéma, aucune requête. Le site est statique et n'appelle rien |
| `VISION_METHOD` | aucun rendu n'est validé par une porte ici. La barrière de rendu n'est pas instanciée sur ce dépôt, c'est la dette **D-1**. La validation visuelle reste humaine, `CLAUDE.md` §2 |

**L'autorisation `AGENT_SCOPE_METHOD`, en toutes lettres et bornée.** Le critère 8 t'autorise à copier l'arborescence du dépôt dans un répertoire temporaire hors dépôt, à l'y modifier et à y lancer la porte. Trois bornes : **rien n'est écrit sous `~/.claude/`**, **rien ne revient** de cette copie dans l'arborescence du dépôt, et **aucun réglage de la machine n'est touché**. Les copies restent où elles sont en fin d'incrément, tu ne cherches pas à les effacer : `Bash(rm -r *)` et `Bash(rm -rf *)` sont en `deny` au plancher, la tentative serait refusée. **Dis dans `changes.md` où elles vivent.**

Les lignes structurellement impossibles sur ce dépôt ne sont pas récitées : base de données, multi-projets, agent en boucle autonome.

---

## Prérequis — chacun se mesure, chacun a sa conduite d'échec

Lance chaque commande **depuis la racine du dépôt**, telle qu'elle est écrite.

> ⚠️ **Un `grep -c` qui rend `0` sort en code 1.** C'est le comportement normal de `grep`, pas un échec du prérequis. Pour P3, P4 et P5, **le résultat attendu est la ligne affichée, pas le code de sortie**. Une chaîne de mesure qui s'arrête sur ce code 1 mesure son propre `set -e`, pas le dépôt : c'est arrivé le 13 septembre 2026.

| # | Ce qui doit être vrai | Commande | Attendu | Sinon |
|---|---|---|---|---|
| P1 | `index.html` est le fichier relevé, taille | `wc -c < index.html` | `102486` **octets** | **ARRÊTE-TOI** |
| P2 | Même fichier, empreinte | `sha256sum index.html` | `1dc626ce241c49c089ea2364a3ae9d505bd82b95344fa0f62c409fec4cb38c5a` | **ARRÊTE-TOI** : une retouche à taille constante passerait P1 |
| P3 | Le mécanisme n'existe pas encore | `grep -c 'data-i18n-href' index.html` | `0` **ligne** (code de sortie `1`) | **ARRÊTE-TOI** : s'il existe déjà, tout ce prompt est à revoir |
| P4 | Le préfixe de clé `p8_href` est libre | `grep -c 'p8_href' index.html` | `0` **ligne** (code de sortie `1`) | **ARRÊTE-TOI** |
| P5 | La chaîne `lang=fr` n'existe pas encore dans la page | `grep -c 'lang=fr' index.html` | `0` **ligne** (code de sortie `1`) | **ARRÊTE-TOI** et dis ce que tu as trouvé |
| P5b | La chaîne `lang=en` non plus | `grep -c 'lang=en' index.html` | `0` **ligne** (code de sortie `1`) | **ARRÊTE-TOI** et dis ce que tu as trouvé |
| P6 | La grille porte sept cartes | `grep -c 'class="proj-card' index.html` | `7` **lignes** | **ARRÊTE-TOI** et dis le compte trouvé |
| P7 | L'adresse du site IBMiAPI n'apparaît qu'une fois | `grep -c 'ibm-s36-to-rest-api' index.html` | `1` **ligne** | **ARRÊTE-TOI** |

> **P5b est neuf dans ce `_v3`.** Le critère 4 attend `1` ligne `lang=en` après travaux, mais aucun prérequis n'épinglait sa valeur d'avant : son symétrique `lang=fr` avait la sienne, pas lui. Mesuré le 15 septembre 2026 : `0`. L'asymétrie est fermée.
>
> **P5 ne dit pas « aucun `lang=` dans la page », et il ne faut pas le lui faire dire.** La balise racine porte `<html lang="fr">`, avec des guillemets : elle ne contient donc pas la chaîne `lang=fr`, et c'est pour cela que le compte est `0`. Mesuré le 15 septembre 2026. Ce prérequis vérifie que **le motif du critère 4 est libre**, rien de plus.
>
> **P7 ne dit pas non plus que la carte est la première de la grille.** Il dit que l'adresse n'apparaît qu'une fois, donc que le bouton est le seul porteur et qu'il n'y a pas de doublon à retoucher. La place de la carte a été posée le 13 septembre et n'est pas remise en cause ici.
| P8 | La porte est celle relevée, taille | `wc -c < scripts/gate.sh` | `17961` **octets** | **ARRÊTE-TOI** |
| P9 | Même fichier, empreinte | `sha256sum scripts/gate.sh` | `1130c632e738474c12ea72819b3676136740d970069fd5c107253c340b328dc8` | **ARRÊTE-TOI** |
| P10 | Le contrôleur est celui relevé, taille | `wc -c < scripts/check-i18n.mjs` | `32952` **octets** | **ARRÊTE-TOI** |
| P11 | Même fichier, empreinte | `sha256sum scripts/check-i18n.mjs` | `dccd95c9bc0e931ad580e143c7bd37c0fe0ed05720a87983defab2648a5ee955` | **ARRÊTE-TOI** |
| P12 | Le témoin défectueux est celui relevé | `sha256sum scripts/fixtures/broken.html` | `8f0c22d31bbdc346e876b9efe717d6966e0f64ac98f093ccea73f39fdade9b09` | **ARRÊTE-TOI** |
| P13 | Le témoin de cécité est celui relevé | `sha256sum scripts/fixtures/blind.html` | `bf00547c78277a4c2d55e419dc67a14395628a3c78d16b853f11673cf98b6334` | **ARRÊTE-TOI** |
| P14 | La liste blanche est celle relevée | `sha256sum scripts/i18n-allowlist.txt` | `8f69587cfd15fd02486b89ecb9874febcbc08d3e8a8242503c598dba50381635` | **ARRÊTE-TOI** |
| P15 | Le cadrage est celui relevé, taille | `wc -c < CLAUDE.md` | `61398` **octets** | **ARRÊTE-TOI** |
| P16 | Même fichier, empreinte | `sha256sum CLAUDE.md` | `1e5b26d54b8663e7440c704c7339c116f38976fbbe7c01bc53b5001564fd5312` | **ARRÊTE-TOI** |
| P17 | Le témoin du compte divergent est celui relevé | `sha256sum scripts/fixtures/compte-divergent.mjs` | `a9b2097b3957faf8f65f42a6b02e5a2ed3492ee8025523a0055e8690749d4acc` | **ARRÊTE-TOI** |

**P18 — le compte de chemins d'avant travaux.** Il exige un tube, donc il vit hors du tableau : une barre verticale échappée pour tenir dans une cellule a rendu une garde totalement inerte le 13 septembre 2026.

```
grep -o 'errors\.push(' scripts/check-i18n.mjs | wc -l
grep -o 'exit(1);' scripts/check-i18n.mjs | wc -l
```

Attendu : **21** et **4**, en **occurrences**. Ce sont exactement les valeurs de `CHEMINS_ERREUR` et `CHEMINS_SORTIE` du bloc 8/9 de `gate.sh`. Un écart ici : **ARRÊTE-TOI**, le compte déclaré a déjà divergé avant toi.

**P19 — le relevé d'avant travaux. Ce n'est pas une garde, ce sont les valeurs de référence des critères 6, 7 et 9.** Lance et note :

```
grep -o '—' index.html | wc -l
bash scripts/gate.sh
```

Attendu, mesuré par Cowork le 15 septembre 2026 : **152** cadratins en **occurrences**, fichier entier, commentaires compris · porte en **code 0**, **4 avertissements** (`e7_title`, `e7_desc`, `p3_title`, `p3_desc`, dette D-4) · et dans la ligne de rapport du site réel : **190 clés utilisées**, **197 / 197** déclarées, **105** termes de liste blanche. Si un de ces nombres diffère, **note l'écart et continue** : ces trois critères comparent l'avant et l'après.

---

## Ce qu'on écrit — cinq pièces, dans cet ordre

> **Ce montage a été joué en entier par Cowork le 15 septembre 2026, sur une copie hors dépôt, en recopiant les blocs de ce prompt tels quels — et cette fois les retouches de documentation avec.** Résultat mesuré : porte **verte, code 0**, neuf lignes `OK -`, **4 avertissements**, ligne de rapport `Liens bilingues  : 1 pose(s), 1 cle(s)`, **191** clés utilisées, **198 / 198** déclarées, **152** cadratins dans `index.html`, inchangé, et **26 comptes sur 26** conformes au balayage du critère 10. Les deux neutralisations du critère 8 rougissent chacune dans son bloc. Les valeurs attendues des critères viennent de là : elles sont mesurées, pas prévues.
>
> **Pourquoi « tels quels » est écrit, et ce n'est pas une formule.** Le rodage du `_v1` avait été joué avec une version *raccourcie* du commentaire de la pièce 1.3, pas avec celui du prompt. Il a donc mesuré 152 cadratins pour un prompt qui en produisait 153, et le relecteur a trouvé ce que le rodage aurait dû voir. **Un rodage qui ne rejoue pas le texte livré ne mesure pas le texte livré.**
>
> **Et pourquoi « les retouches de documentation avec ».** Le rodage du `_v2` ne touchait que le code : il ne pouvait donc pas voir que le `CLAUDE.md` §6 resterait à « dix défauts semés ». Le rodage de ce `_v3` applique les onze retouches, puis passe le balayage du critère 10 sur le résultat. **Un rodage qui ne touche pas la documentation ne prouve rien sur la documentation.**
>
> **Cela ne te dispense d'aucune mesure** : une copie n'est pas le dépôt, et c'est ton exécution qui fait foi.

### Pièce 1 — `index.html` : l'attribut, la clé, la bascule

**1.1 Le bouton de la carte IBMiAPI.** Il porte déjà `data-i18n="see_site"` pour son libellé. Il porte désormais **aussi** `data-i18n-href="p8_href"` pour sa destination — c'est le cas normal du point 1 du contrat E-3.

Et **son `href` écrit dans le corps devient** `https://lianazel.github.io/ibm-s36-to-rest-api/?lang=fr`. Pas l'adresse nue.

> **Pourquoi le corps porte déjà le paramètre.** C'est la dette **D-14**, soldée le 11 août 2026 : un visiteur qui ne bascule jamais lit ce qui est **écrit dans la page**, un visiteur qui bascule lit ce qui vient du **dictionnaire**. Si le corps portait l'adresse nue et le bloc `fr` l'adresse paramétrée, la page aurait deux comportements selon qu'on a basculé ou non. **Le corps est identique caractère pour caractère à la valeur `fr`.**

Rien d'autre ne change sur cette carte : ni classes, ni `target`, ni `rel`, ni libellé, ni étiquettes.

**1.2 La clé `p8_href`, dans les deux blocs de langue**, à la suite des autres clés `p8_` :

| Clé | Bloc `fr` | Bloc `en` |
|---|---|---|
| `p8_href` | `https://lianazel.github.io/ibm-s36-to-rest-api/?lang=fr` | `https://lianazel.github.io/ibm-s36-to-rest-api/?lang=en` |

**1.3 La bascule.** Dans `toggleLang()`, **après** la boucle existante sur `[data-i18n]` et **avant** l'appel à `renderMenu()`. **Quatre lignes de code**, précédées de **trois lignes de commentaire**, à écrire telles quelles :

```javascript
  // Les adresses qui changent de langue : meme dictionnaire, meme mecanisme de
  // cle, mais on ecrit dans href et non dans le contenu. La garde d'une ligne
  // refuse une valeur qui n'est pas http(s) : c'est par la qu'entre un schema
  // d'execution.
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const url = d[el.getAttribute('data-i18n-href')];
    if (typeof url === 'string' && /^https?:\/\//.test(url)) el.setAttribute('href', url);
  });
```

> ⚠️ **Ce commentaire ne porte aucun cadratin, et c'est délibéré.** Une première rédaction de ce prompt en mettait un, dans la phrase même qui commente la garde, alors que le critère 7 interdit d'ajouter un cadratin à `index.html`. Le prompt se contredisait à deux pages d'écart.
>
> **La règle, bornée : aucun texte littéral destiné à `index.html` ne porte de cadratin.** Si tu en vois un dans un bloc à recopier **vers `index.html`**, arrête-toi et dis-le.
>
> **L'exception, nommée, et il ne faut pas y toucher** : la pièce 2.3 prescrit `let hrefReport = '—';`, qui en porte un. Il part dans `check-i18n.mjs`, jamais dans `index.html`, et c'est la convention de la maison — `contactReport`, `budgetReport` et `navReport` sont initialisées de la même façon. **Le garder.** Le critère 7 ne mesure que `index.html` et n'en est pas menacé. *Une rédaction antérieure posait la règle en absolu et aurait fait s'arrêter l'agent sur ce `'—'` : un absolu qui ne supporte pas son propre texte n'est pas une règle, c'est un piège.*

**Aucune adresse n'est écrite dans le programme.** Le programme lit une clé, le dictionnaire porte la valeur. C'est `UX_METHOD` §3.7 et le `CLAUDE.md` §9, qui interdit toute chaîne de langue dans le JS.

### Pièce 2 — `scripts/check-i18n.mjs` : le contrôle 10 et sa garde

**2.1 L'extraction, au §1, juste après `usedKeys`.** Les clés d'adresse sont des clés de dictionnaire comme les autres : on les verse dans `usedKeys` pour qu'elles héritent **gratuitement** des contrôles 1 (complétude), 2 (symétrie) et 3 (doublon). C'est le point 2 du contrat E-3, et c'est ce qui évite d'écrire trois contrôles de plus.

```javascript
// Les cles d'adresse bilingue sont des cles de dictionnaire comme les autres :
// versees dans usedKeys, elles heritent des controles 1, 2 et 3 sans une ligne
// de plus. Contrat E-3 du 9 aout 2026, point 2.
const hrefKeys = [...html.matchAll(/data-i18n-href="([^"]*)"/g)]
  .map((m) => m[1])
  .filter((k) => k !== '');
for (const k of hrefKeys) usedKeys.add(k);
```

**2.2 Le contrôle, après le contrôle 9 et avant `report()`.** **Deux chemins bloquants, deux messages à voix propre**, et pas un de plus :

```javascript
// --- 13 bis. Controle 10 : le lien bilingue ---------------------------------
// CE QU'IL FAIT : il verifie que le mecanisme EXISTE, et que chaque valeur qu'il
// ecrira dans un href est bien une adresse http(s).
//
// CE QU'IL NE FAIT PAS, et il faut l'ecrire sous peine de lui crediter ce qu'il
// ne fait pas : il ne joint aucune adresse, il ne verifie pas qu'elle repond, et
// il ne verifie pas que la page visee est dans la bonne langue. Il verifie une
// FORME, pas une destination.
if (hrefKeys.length === 0) {
  // Garde de non-vacuite. Sans elle, retirer l'attribut de la page rendrait ce
  // controle aveugle EN RESTANT VERT. Voix propre, jamais le marqueur partage :
  // le bloc 1/9 de gate.sh porte une garde NEGATIVE sur ce marqueur.
  errors.push(
    'Aucun lien bilingue : aucun element ne porte data-i18n-href. ' +
    'Le controle du lien bilingue ne prouve plus rien.'
  );
} else {
  const refuses = [];
  for (const langue of ['fr', 'en']) {
    for (const key of new Set(hrefKeys)) {
      const found = blocks[langue].match(new RegExp(`\\b${key}\\s*:\\s*"([^"]*)"`));
      if (!found) continue;   // absence deja dite par le controle de completude
      if (!/^https?:\/\//.test(found[1])) refuses.push(`"${key}" en "${langue}" : ${found[1]}`);
    }
  }
  if (refuses.length) {
    errors.push(`Adresse de lien bilingue refusee (ni http:// ni https://) : ${refuses.join(' ; ')}`);
  }
  hrefReport = `${hrefKeys.length} pose(s), ${new Set(hrefKeys).size} cle(s)`;
}
```

**2.3 La ligne de rapport.** Déclare `let hrefReport = '—';` avec les autres variables de rapport, et ajoute dans `report()`, à la suite de `Libelles nav` :

```javascript
  console.log(`Liens bilingues  : ${hrefReport}`);
```

**Motif, et c'est une règle de la maison** : un vert muet ne prouve rien. Les lignes `Adresse contact`, `Budget largeur` et `Libelles nav` existent pour la même raison.

> **Le compte de chemins passe de 21 à 23 sites d'erreur.** Deux `errors.push` de plus, et **rien d'autre** : les `exit(1)` restent à 4. C'est la pièce 4 qui met le compte à jour, et la pièce 5 le cadrage.

### Pièce 3 — `scripts/fixtures/broken.html` : le onzième défaut

Le contrôle de schéma a besoin d'une cible où mordre. Elle se sème ici, et **pas dans un témoin neuf** : le fichier couvre déjà la famille « défaut par chemin », un fichier de plus serait un fichier de plus à tenir.

**3.1 Le balisage**, à la suite du bloc `.email-display` :

```html
<a href="#present" data-i18n="ok_key" data-i18n-href="bad_href">Titre correct</a>
```

Une ancre nue, sans conteneur et **sans classe neuve** : ce témoin n'a pas de feuille de style, une classe n'y servirait à rien.

L'ancre porte `data-i18n="ok_key"` pour la même raison que les deux éléments voisins : sans lui, son texte deviendrait un **second** défaut de couverture, et ce témoin promet un défaut par chemin, pas deux. `#present` existe déjà dans ce fichier : l'ancre ne doit pas être cassée, l'ancre cassée est le défaut n° 4 et elle a déjà son porteur.

**3.2 La clé, déclarée dans les deux blocs**, avec une valeur qui n'est pas une adresse `http(s)` :

```
bad_href:"javascript:void(0)"
```

Déclarée **dans `fr` et dans `en`**, valeur identique. Sinon elle ferait mordre la symétrie, et ce témoin prouverait deux fois le même chemin au lieu d'en prouver un neuf. La valeur choisie est **inerte** — ce fichier n'est jamais rendu par un navigateur — et elle est exactement la classe de valeur que la garde existe pour refuser.

**3.3 L'en-tête du témoin.** Ajoute le défaut à la liste numérotée, en **dixième** position :

> 10. une adresse de lien bilingue dont le schéma n'est pas accepté : la clé est déclarée dans les deux blocs, sa valeur n'est pas une adresse `http(s)`.

> ⚠️ **Un témoin est lu en entier, commentaires compris.** N'écris **pas** dans l'en-tête la valeur elle-même, ni le préfixe que le contrôle cherche. Décris le défaut en mots. Mesuré trois fois le 10 août 2026 : deux témoins échouaient sur le chemin *suivant* parce que leur commentaire citait ce dont ils prouvaient l'absence.

> **Et `scripts/fixtures/blind.html` n'est pas touché.** C'est son **absence** de `data-i18n-href` qui rend la garde de non-vacuité prouvable, exactement comme son absence d'adresse de contact et d'entrée de navigation. **Ne rien lui ajouter.**

### Pièce 4 — `scripts/gate.sh` : deux assertions et le compte

**4.1 Bloc 1/9**, à la suite des dix `assert_dit` existants :

```bash
assert_dit "$out_broken" 'Adresse de lien bilingue refusee'                       "schema du lien bilingue"
```

et l'`echo` de fin de bloc passe de « ses **dix** defauts semes » à « ses **onze** defauts semes ».

**4.2 Bloc 2/9**, à la suite des quatre `assert_dit` existants :

```bash
assert_dit "$out_blind" 'Aucun lien bilingue : aucun element ne porte data-i18n-href' "garde de non-vacuite du lien bilingue"
```

et l'`echo` de fin de bloc passe de « les **quatre** gardes » à « les **cinq** gardes ».

**4.3 Bloc 8/9** : `CHEMINS_ERREUR=21` devient `CHEMINS_ERREUR=23`. `CHEMINS_SORTIE` **ne bouge pas**, il reste à `4`.

**4.4 L'en-tête du fichier** : « Il y en a **VINGT-QUATRE** (21 + 3), et ce fichier porte donc **VINGT-QUATRE** assertions positives » devient **VINGT-SIX** (23 + 3) et **VINGT-SIX** assertions.

**4.5 Les trois commentaires qui comptent, et qu'on oublie parce qu'ils ne s'exécutent pas.** Un `echo` corrigé sous un commentaire périmé fait mentir le fichier à son lecteur suivant, et c'est le lecteur qui paiera :

| Où | De | À |
|---|---|---|
| bloc 1/9, au-dessus des `assert_dit` | `# DIX chemins prouves ici.` | `# ONZE chemins prouves ici.` |
| bloc 2/9, au-dessus des `assert_dit` | `# QUATRE chemins distincts tirent sur ce temoin` | `# CINQ chemins distincts tirent sur ce temoin` |
| bloc 2/9, trois lignes plus bas | `deux des quatre pouvaient mourir sans que rien ne rougisse` | `deux des quatre d'alors pouvaient mourir sans que rien ne rougisse` — c'est un **relevé daté du 10 août 2026**, il ne devient pas faux, il devient ambigu. L'incise le range du côté de l'histoire |

> **Un effet de bord à connaître, et il est bénin.** Le bloc **6/9** lance le contrôleur sur `scripts/fixtures/balisage-desequilibre.html`, qui ne porte aucun `data-i18n-href` : la garde de non-vacuité y tirera donc une erreur de plus. Son assertion cherche une **phrase contenue** dans la sortie, elle passe quand même. **Ne modifie pas ce témoin pour faire taire ce message.** Les témoins des blocs 3/9, 4/9 et 7/9 visent `index.html`, qui portera l'attribut : la garde y reste muette. Ceux du bloc 5/9 sortent avant le contrôle 10, leur dictionnaire étant introuvable.

> **La porte va rougir avant que tu aies fini, et c'est voulu.** Dès que les deux `errors.push` sont écrits et tant que `CHEMINS_ERREUR` vaut encore `21`, le bloc 8/9 échoue avec ce message exact, mesuré par Cowork le 15 septembre 2026 : `ECHEC - le compte des chemins bloquants a change : mesure « 23 4 », declare « 21 4 ».` **Ce n'est pas une casse**, c'est la garde qui fait son travail — elle force un regard sur l'inventaire. Tu la refermes en 4.3, pas en la contournant. Et son témoin `compte-divergent.mjs` **ne s'aligne jamais** sur le compte réel : ne le touche pas.

### Pièce 5 — `CLAUDE.md`, **le §6 et lui seul**

**Ce prompt autorise en toutes lettres l'ouverture du `CLAUDE.md`, exclusivement dans son §6 « Filet de tests ».** Tout autre paragraphe reste fermé, y compris ceux qui portent des lignes fausses connues. **Onze retouches**, toutes des nombres ou des phrases de ce §6, et la onzième est une non-retouche assumée :

| # | Où | De | À |
|---|---|---|---|
| C1 | « **Neuf contrôles bloquants** — chacun fait échouer la porte » | Neuf | **Dix**, et un item 10 est ajouté à la liste |
| C2 | La liste numérotée | 9 items | un **item 10**, dont le texte est donné en entier juste après ce tableau |
| C3 | « **Sept gardes de non-vacuité** » | Sept | **Huit**, et la nouvelle est nommée dans l'énumération : *le mécanisme de lien bilingue doit trouver au moins un élément porteur, sans quoi le contrôle 10 se tairait sur une page qui l'aurait perdu* |
| C4 | Titre « **Les 24 chemins bloquants** » | 24 | **26** |
| C5 | « **21 sites d'erreur** et **3 refus de travailler**, soit **24 chemins** pour **24 assertions** » | 21 / 24 / 24 | **23** / **26** / **26**, et la date de mesure devient le **15 septembre 2026** |
| C6 | Le tableau des familles | `Les neuf contrôles \| 10` et `Gardes de non-vacuité \| 7`, dont le détail dit « une par contrôle 7, 8 et 9 » | `Les dix contrôles \| 11` et `Gardes de non-vacuité \| 8`, détail « quatre sur l'extraction, une par contrôle 7, 8, 9 et 10 ». Total de la colonne : 11 + 8 + 2 + 2 + 3 = **26** |
| C7 | « **Ce que ce filet ne couvre pas** » : *« ni le contenu porté par un attribut (`href`, `title`, `aria-label`) »* | la phrase telle quelle | la même phrase, **nuancée** : le mécanisme de lien bilingue est désormais couvert **dans sa forme** par le contrôle 10, c'est-à-dire son existence et son schéma. Le reste demeure invisible au filet : qu'une adresse réponde, qu'elle mène à la bonne langue, et tout `title` ou `aria-label` |
| C8 | Le témoin défectueux : « **dix défauts semés**, un par chemin qu'il couvre » | dix | **onze**. *C'est la ligne que le `_v2` avait manquée : il faisait passer `gate.sh` à onze et laissait le cadrage à dix.* |
| C9 | La note « les unités diffèrent, à dessein » : « Ici : **24 chemins** = 21 sites d'erreur + **3** refus. Dans `gate.sh` : 21 et **4** » | 24 / 21 / 21 | **26 chemins = 23 + 3**, et dans `gate.sh` **23 et 4**. La note reste vraie dans son propos : les deux unités diffèrent toujours, à dessein |
| C10 | « Constaté sur **trois des vingt-quatre**. » | la phrase telle quelle | « Constaté le 10 août 2026 sur trois des vingt-quatre chemins **d'alors**. » *Le relevé ne devient pas faux, il devient ambigu : sans la date, le lecteur suivant ne peut pas trancher entre un énoncé historique et un compte périmé.* |
| C11 | Le pied du document, « *Version du projet : 0.10.0* » | — | **rien**. Le pied est hors §6 et **reste fermé** : `/land` s'occupe du numéro de version. Cette ligne est ici pour dire qu'elle a été regardée et écartée, pas oubliée |

**Le texte de l'item 10, à écrire tel quel.** Il dit ce que le contrôle fait **et ce qu'il ne fait pas**, parce qu'un contrôle se crédite exactement de ce qu'il énonce :

> 10. **Lien bilingue** : chaque élément porteur de `data-i18n-href` désigne une clé du dictionnaire, et la valeur de cette clé est une adresse `http` ou `https` dans les deux langues. Le contrôle vérifie une **forme**, jamais une destination : il ne joint aucune adresse, ne vérifie pas qu'elle réponde, ni qu'elle mène à la bonne langue. Il accepte `http://` en clair, la garde portant sur la forme de l'adresse et non sur la sûreté du transport. Un attribut **vide**, `data-i18n-href=""`, est ignoré en silence et n'a pas de chemin propre, contrairement au `data-i18n=""` du contrôle 5 : le programme n'écrirait rien, et le mécanisme n'a pas de clé à vérifier.

> ⚠️ **Collision de numérotation à signaler, pas à régler.** Le `CLAUDE.md` §8, dette **D-8**, annonce « un **dixième contrôle** de conformité » pour les rangs `data-nav-priority`. Ce prompt occupe le numéro 10 avec le lien bilingue, et il ferme le §8 à l'écriture. **Porte le constat dans `changes.md`** : D-8 désignera désormais un numéro déjà pris, et son contrôle sera le onzième. Aucun geste ici.

> **Ce qui ne change pas au §6, et c'est court.** « Preuve de morsure — **huit témoins** » : aucun fichier de témoin n'est créé, `broken.html` gagne un défaut et `blind.html` gagne une assertion dans `gate.sh`. Le compte de témoins reste **huit**. Et « huit blocs éprouvent la porte, le neuvième éprouve le site » reste vrai : aucun bloc n'est ajouté à `gate.sh`, les deux assertions neuves entrent dans des blocs existants.
>
> **En revanche, la note « les unités diffèrent, à dessein » change, et c'est la retouche C9.** Son propos reste vrai — les deux comptes mesurent deux choses différentes — mais ses trois nombres deviennent faux. *Le `_v2` la rangeait ici, du côté de ce qui ne change pas : un exécutant littéral l'aurait laissée à 24 / 21 / 21.*

---

## Ce qui doit rester vrai après

- **Le `href` du corps est identique caractère pour caractère à la valeur `p8_href` du bloc `fr`.** Dette D-14.
- **Aucune adresse, aucune chaîne de langue dans le programme.** Le JS lit une clé, jamais une valeur en dur.
- **Aucun cadratin ajouté à `index.html`** : le compte du fichier entier ne bouge pas d'une unité.
- **Aucune entrée ajoutée à la liste blanche** : `scripts/i18n-allowlist.txt` rend la même empreinte qu'à P14.
- **Aucune classe, aucune couleur, aucune règle de feuille de style nouvelle, ni dans `index.html` ni dans les témoins.** Le bloc `<style>` d'`index.html` n'apparaît dans aucun morceau du diff.
- **Aucune ancre `.btn-primary` ajoutée ni retirée** : la dette **D-20** est inchangée, ni en compte ni en nature.
- **`scripts/fixtures/blind.html`, `compte-divergent.mjs` et les cinq autres témoins** rendent les mêmes empreintes qu'avant.
- **`CLAUDE.md` n'est ouvert que dans son §6.** Aucun autre paragraphe n'apparaît au diff.

---

## Critères d'acceptation

Chacun couvre exactement ce qu'il affirme, ni plus. Aucun ne présuppose la réponse à la question qu'il mesure.

1. **Les prérequis P1 à P18 sont mesurés et rapportés avec leur valeur observée**, et P19 est relevé. Un écart sur P1 à P18 arrête le travail avant toute écriture.

2. **Le mécanisme est posé, une fois dans le corps et deux fois dans le programme** :

```
grep -o 'data-i18n-href' index.html | wc -l
```

Attendu : `3` **occurrences** — l'attribut sur le bouton, le sélecteur `querySelectorAll('[data-i18n-href]')`, et l'appel `getAttribute('data-i18n-href')`. **Trois, pas deux** : la boucle nomme l'attribut une fois pour chercher les éléments et une fois pour lire la clé de chacun.

3. **La clé vit à trois endroits** :

```
grep -o 'p8_href' index.html | wc -l
```

Attendu : `3` **occurrences** — la pose dans le corps, la déclaration `fr`, la déclaration `en`.

4. **Les deux paramètres sont là, et du bon côté**, comptes de **lignes** :
   - `grep -c 'lang=fr' index.html` rend `2` — le `href` du corps et le bloc `fr`
   - `grep -c 'lang=en' index.html` rend `1` — le bloc `en`
   - `grep -c -F 'ibm-s36-to-rest-api/"' index.html` rend `0` **ligne** (code de sortie `1`) : plus aucune adresse nue

5. **Porte verte** : `bash scripts/gate.sh` sort en **code 0**, avec **exactement 4 avertissements**, et ce sont les quatre de la dette **D-4**. Le relevé des lignes `OK -` est porté tel quel dans `test-results.md`.

6. **Le compte de chemins concorde des deux côtés**, en **occurrences** :

```
grep -o 'errors\.push(' scripts/check-i18n.mjs | wc -l
grep -o 'exit(1);' scripts/check-i18n.mjs | wc -l
grep -c 'CHEMINS_ERREUR=23' scripts/gate.sh
```

Attendu : `23`, `4`, `1` **ligne**. Et le bloc 8/9 affiche « 23 sites d'erreur et 4 sorties, conformes au declare ».

7. **Cadratins dans `index.html` : `152` occurrences avant, `152` après**, sous la règle de comptage de P19 — **fichier entier, commentaires compris**. Les deux nombres figurent dans `changes.md` avec leur règle.

   > **Deux règles de comptage coexistent, et il faut dire laquelle on applique.** `STYLE_METHOD` **S-1** compte les cadratins *du texte visible et des valeurs de dictionnaire, à l'exclusion de tout commentaire*. Ce critère applique la règle **de la maison**, plus large : le fichier entier, commentaires compris. Elle est la plus stricte des deux, donc la satisfaire satisfait aussi S-1. Un même fichier rend trois nombres défendables selon la règle retenue : c'est écrit dans S-1, et c'est pourquoi un compte sans sa règle est indécidable.

8. **Les deux chemins neufs sont prouvés vivants, isolément, par neutralisation.** C'est le critère qui distingue une porte d'une lampe torche, et il ne se relit pas, il se joue. **Sur une copie du dépôt hors arborescence**, deux fois, en repartant du propre à chaque fois :
   - **(8a)** neutralise la garde de non-vacuité — rends sa condition toujours fausse. Lance `bash scripts/gate.sh`. **Attendu, mesuré par Cowork le 15 septembre 2026** : code `1`, arrêt au bloc **2/9**, message
     `ECHEC - le temoin echoue SANS le message du chemin « garde de non-vacuite du lien bilingue » (motif attendu : Aucun lien bilingue : aucun element ne porte data-i18n-href) : chemin mort ?`
   - **(8b)** neutralise le contrôle de schéma — rends sa condition toujours fausse. Lance `bash scripts/gate.sh`. **Attendu, mesuré le même jour** : code `1`, arrêt au bloc **1/9**, message
     `ECHEC - le temoin echoue SANS le message du chemin « schema du lien bilingue » (motif attendu : Adresse de lien bilingue refusee) : chemin mort ?`

   **Où vivent ces copies** : dans un répertoire temporaire hors dépôt, que tu nommes dans `changes.md`. Elles **restent en place** en fin d'incrément : ne tente pas de les effacer, `Bash(rm -r *)` et `Bash(rm -rf *)` sont en `deny` au plancher et la commande serait refusée. Rien de ces copies ne revient dans l'arborescence du dépôt.

   > ⚠️ **Conduite d'échec, et elle manquait.** Aucune règle `ask` de `.claude/settings.json` ne vise l'écriture hors dépôt. Mais **la couche de session peut l'interposer quand même** : c'est exactement la couche non identifiée que le constat **C-7** décrit pour le refus shell sur `.claude/` — *« le refus est constaté, son auteur ne l'est pas »*. Si l'écriture hors dépôt est refusée, ou si une question t'est posée sur ce geste, **ARRÊTE-TOI et dis-le dans `test-results.md`** : en AUTO MODE, une question posée hors de la vue du chef de projet suspend l'incrément sans que personne ne le sache. Ne cherche pas de contournement, et ne rabats pas la campagne à l'intérieur du dépôt.

   Porte dans `test-results.md` **la sortie littérale des deux exécutions rouges**, et le constat que le dépôt est revenu vert après. Une neutralisation peut faire **passer** le témoin entier plutôt que le faire échouer autrement : la porte rougit alors par l'assertion de **morsure** (« la cible est PASSEE ») et non par celle de **message**. Les deux sont spécifiques à leur bloc, le chemin reste prouvé — écris laquelle des deux a parlé.

9. **La ligne de rapport du site réel est portée avant/après dans `changes.md`.** Attendu après travaux : `191` clés utilisées (contre `190`), `198 / 198` déclarées (contre `197 / 197`), `105` termes de liste blanche (inchangé), et la ligne `Liens bilingues` affichant `1 pose(s), 1 cle(s)`.

10. **Le balayage des comptes périmés.** C'est le critère qui remplace la liste à cocher, parce que les deux relectures ont buté sur la même chose : un compte écrit à deux endroits, corrigé à un seul. **Aucune de ces chaînes ne doit subsister**, et chacune se compte en **lignes** :

| Commande | Attendu, en **lignes** |
|---|---|
| `grep -c 'Neuf contrôles bloquants' CLAUDE.md` | `0` |
| `grep -c 'Sept gardes de non-vacuité' CLAUDE.md` | `0` |
| `grep -c 'Les neuf contrôles' CLAUDE.md` | `0` |
| `grep -c 'dix défauts semés' CLAUDE.md` | `0` |
| `grep -c '24 chemins' CLAUDE.md` | **`1`** |
| `grep -c '24 assertions' CLAUDE.md` | **`1`** |
| `grep -c '21 sites' CLAUDE.md` | **`1`** |
| `grep -c 'VINGT-QUATRE' scripts/gate.sh` | `0` |
| `grep -c 'DIX chemins prouves' scripts/gate.sh` | `0` |
| `grep -c 'dix defauts semes' scripts/gate.sh` | `0` |
| `grep -c 'QUATRE chemins distincts' scripts/gate.sh` | `0` |
| `grep -c 'quatre gardes de non-vacuite' scripts/gate.sh` | `0` |
| `grep -c 'CHEMINS_ERREUR=21' scripts/gate.sh` | `0` |

> ⚠️ **Trois attendus valent `1` et non `0`, et ce n'est pas une tolérance.** Les chaînes `24 chemins`, `24 assertions` et `21 sites` vivent **aussi** dans la ligne **D-10** du §8, qui raconte un solde du 10 août 2026. Ce §8 est **fermé à l'écriture** par ce prompt : la ligne doit rester telle quelle. Un `0` sur l'une de ces trois signifierait donc que le §8 a été ouvert, et **c'est un échec**, pas une réussite. Mesuré le 15 septembre 2026 : ces trois chaînes valent aujourd'hui `4`, `2` et `3` lignes, dont une chacune au §8.
>
> Les dix `0` sortent en code `1` : c'est le comportement normal de `grep`, jamais un échec du critère.

**Et le miroir, qui interdit de satisfaire le balayage en effaçant au lieu de corriger.** Chacune de ces chaînes doit exister au moins une fois :

```
grep -c 'Dix contrôles bloquants' CLAUDE.md
grep -c 'Huit gardes de non-vacuité' CLAUDE.md
grep -c '26 chemins' CLAUDE.md
grep -c '26 assertions' CLAUDE.md
grep -c 'Les dix contrôles' CLAUDE.md
grep -c 'onze défauts semés' CLAUDE.md
grep -c '23 sites' CLAUDE.md
grep -c 'VINGT-SIX' scripts/gate.sh
grep -c 'ONZE chemins prouves' scripts/gate.sh
grep -c 'onze defauts semes' scripts/gate.sh
grep -c 'CINQ chemins distincts' scripts/gate.sh
grep -c 'cinq gardes de non-vacuite' scripts/gate.sh
grep -c 'CHEMINS_ERREUR=23' scripts/gate.sh
```

Attendu : **au moins `1` ligne pour les treize.** Les treize valent `0` aujourd'hui, mesuré le 15 septembre 2026, donc aucune ne peut être satisfaite par hasard. Les vingt-six comptes vont dans `test-results.md`, avec leur unité.

11. **Le `CLAUDE.md` n'est ouvert que dans son §6.** Preuve à porter dans `changes.md` : la sortie de `git diff -U0 -- CLAUDE.md`, et le constat explicite qu'aucun autre paragraphe n'y figure — ni le §2, ni le §3, ni le §8, ni le §9, ni le §11, ni le pied du document.

12. **Les fichiers qui ne devaient pas bouger n'ont pas bougé** : `scripts/i18n-allowlist.txt`, `scripts/fixtures/blind.html`, `scripts/fixtures/compte-divergent.mjs` rendent les mêmes empreintes qu'aux prérequis. Trois `sha256sum`, relancés après travaux.

13. **Ce prompt est le premier enregistrement de la branche, et lui seul.** Le dossier `prompts/v0.10/` porte **trois** fichiers non suivis : les `_v1` et `_v2`, refusés, et ce `_v3`. **Le premier enregistrement ne prend que le `_v3`**, nommé explicitement, jamais le dossier :

    `git add prompts/v0.10/EVOL_lien-bilingue_v3.md`

    avec le message exact :

    `docs(prompt): prompts/v0.10/EVOL_lien-bilingue_v3.md`

    **Les `_v1` et `_v2` restent non suivis.** Leur sort appartient au chef de projet. *Mesuré le 15 septembre 2026 : aucun des trois fichiers ne porte une des chaînes de la dette **D-17**, les dix ont été comptées, toutes à `0` ligne. Le périmètre de cette dette ne grandirait donc pas si l'un d'eux était enregistré par mégarde. C'est une atténuation, pas une autorisation.*

---

## Livrables

- `.pipeline/spec.md`, `.pipeline/changes.md`, `.pipeline/test-results.md`, `.pipeline/review.md`.
- `.pipeline/STATUS.md` en **dernier geste** : `READY — <incrément> — <horodatage ISO> — feat/lien-bilingue — tests <X/Y>`.
- Dans `test-results.md` : les deux sorties rouges du critère 8, littérales.
- Dans `changes.md` : les deux comptes de cadratins avec leur règle, la ligne de rapport avant/après, la sortie de `git diff -U0 -- CLAUDE.md`, et la sortie de `git diff -U0 -- index.html`.

---

## Ce que ce prompt NE fait PAS

- **La carte TWAIM, la carte MetalWatch, la ligne « Cette page aussi »** : E-3 garde tout cela pour plus tard. **Mais le mécanisme est posé pour elles aussi** — et il faut l'écrire pour que l'incrément suivant ne le redécouvre pas : la carte TWAIM n'aura qu'à porter `data-i18n-href` et deux valeurs, `https://twaim-web.vercel.app/` et `https://twaim-web.vercel.app/en`. Le mécanisme ne connaît pas la forme de l'adresse : un paramètre de requête ici, un chemin là, il écrit ce que le dictionnaire porte. **Et la carte TWAIM prendra la première place de la grille**, au-dessus de la carte IBMiAPI. C'est un ordre connu d'avance, pas une dette.
- **Aucun badge « harnais IA TWAIM »** sur aucune carte : la règle E-3 l'interdit tant que la carte TWAIM qui l'explique n'existe pas.
- **Aucun bouton GitHub** sur la carte IBMiAPI : `https://github.com/lianazel/ibm-s36-to-rest-api` rendait **404** le 13 septembre 2026. Le jour où l'adresse est connue, le bouton s'ajoute en une ligne.
- **Le `CLAUDE.md` hors §6 n'est pas ouvert.** Ni le §2 et son pied, qui annoncent encore « Méthode v2.27 » là où le Core est en **v2.33** (mesuré le 15 septembre 2026) ; ni le §3, qui annonce `891` lignes pour un fichier qui en porte `1181` et qui décrit la bascule de langue **sans le mécanisme que cet incrément ajoute** — porte ce constat dans `changes.md`, ne le corrige pas ; ni le §9, qui écrit encore que le contraste du thème sombre n'a pas été mesuré alors que **D-20** le mesure au 13 août 2026 ; ni le §8 ; ni le **§11**, dont l'étape 3 confie encore la fusion à `/land` alors que `.claude/commands/land.md` écrit « ne merge jamais » — c'est le constat **C-6**, et la dernière section de ce prompt suit la commande, qui fait autorité, pas le §11. **Aucune dette n'est inscrite, aucune n'est soldée.**
- **Le §8 n'est pas converti en sections de prose** : dettes **D-19** et **D-22**, constats **C-6** et **C-9**. C'est un incrément à part entière, il réécrit D-1 à D-22 d'un coup.
- **`tasks/ROADMAP.md`, `tasks/lessons.md`** : non modifiés. Aucune leçon n'est écrite, ni au dépôt ni au registre global.
- **`tasks/JOURNAL_v0.2.md`** : écrit par `/land`, jamais par ce prompt.
- **`.claude/`** : jamais ouvert en écriture. **C'est une consigne de ce prompt, pas une garantie mécanique, et la nuance compte.** Le plancher porte `Edit(/.claude/**)`, qui ferme l'outil d'édition ; il ne porte **aucune** règle `Bash(...)` visant `.claude/`. Un refus a bien été constaté sur la redirection shell le 12 septembre 2026, mais **il n'a nommé aucune règle** et son auteur n'est pas établi : il peut venir de la couche de session. C'est écrit au constat **C-7** de `tasks/ROADMAP.md`, avec cette réserve. *Une rédaction antérieure affirmait que la règle `Edit()` fermait les deux chemins : elle reprenait un prompt du 13 septembre en laissant tomber sa réserve. Un énoncé repris d'un document n'est pas mesuré pour autant.*
- **Aucun contrôle de concordance corps / dictionnaire**, celui qu'annonce **D-14**. Il naîtrait **rouge** : la revue du 13 septembre 2026 a trouvé **huit** poses où le texte du corps diffère de la valeur `fr` par des guillemets d'attributs imbriqués, à DOM identique (réserve `RV-6`). Trois voies proposées, aucune engagée.
- **La ligne `e5_desc` n'est pas touchée**, ni dans le corps ni dans les deux blocs. Dette **D-17 famille B**, arbitrage du chef de projet **ouvert et non tranché**.
- **Aucune passe de cadratins** sur le reste du fichier : les `152` occurrences existantes ne sont pas touchées.
- **Aucune passe d'accessibilité**, dette **D-20**. Aucune couleur n'est changée, la feuille de style n'est pas ouverte.
- **Aucun appel réseau, aucun appel à Playwright**, aucune capture d'écran, aucun jugement d'aspect.
- **Aucun `git merge`, aucun `git push`, aucun `git tag`, aucun `/land` de ta part.** Tu t'arrêtes à `READY`.

---

## Ce qui reste au chef de projet, dans l'ordre

1. **Le fichier est déjà déposé** dans `prompts/v0.10/`. **Ne pas l'enregistrer à la main** : `/ship` en fait le premier commit de la branche.
2. **Lancer** `/ship prompts/v0.10/EVOL_lien-bilingue_v3.md`.
3. **Valider à l'œil, dans les deux langues.** Passer la page en anglais, cliquer « View live site » sur la carte IBMiAPI, et vérifier que le site s'ouvre **en anglais**. Puis repasser en français et vérifier qu'il s'ouvre en français. **Le filet ne voit pas cela** : il vérifie une forme, pas une destination. C'est la dette **D-1**, et la validation visuelle appartient au chef de projet, `CLAUDE.md` §2.
4. **Fusionner** sur `main`, avec la commande **exacte** que `/land` affichera s'il refuse — `.claude/commands/land.md` ligne 20, lue le 15 septembre 2026 :

   `git merge --no-ff feat/lien-bilingue -m "Merge branch 'feat/lien-bilingue'"`

   Le `-m` n'est pas décoratif : sans lui, le message de fusion diffère de celui que `/land` relève ensuite.
5. **Lancer** `/land feat/lien-bilingue`.
6. **Pousser** : `git push origin main`, puis supprimer la branche fusionnée.

---

*Prompt `_v3`, rédigé par Cowork le 15 septembre 2026 après le `BLOCK` sur le `_v1` et le `NEEDS_WORK` sur le `_v2` · six `FAILS` retenus au total, dix-sept `WARNS` pris · empreintes, tailles et comptes remesurés le même jour par lecture de fichiers, dépôt inchangé à `5c25a8f` · montage rejoué sur les blocs littéraux de ce fichier, retouches de documentation comprises · dépôt qui fait foi : `lianazel.github.io/prompts/v0.10/`.*
