# CHORE — README bilingue, révision 2 : la porte ne garantit pas ce que la phrase promet

**Projet** : `lianazel.github.io` · **Type** : CHORE (documentation) · **Version du prompt** : **v2** · **Date** : 12 août 2026
**Rédacteur** : Cowork (Tech Lead) · **Destinataire** : Claude Code
**Statut** : DÉPOSÉ — en attente de transmission par le chef de projet
**Révise** : `CHORE_readme-bilingue_v1.md`, **transmis et exécuté**. Le `README.md` existe déjà sur la
branche `chore/readme-bilingue`. Cette révision **corrige un paragraphe**, elle ne recommence rien.

> ⚠️ **Ce prompt n'est pas enregistré dans le dépôt.** Enregistre-le sur la **même branche**, message
> `docs:`, attribution au Tech Lead, avant de modifier le `README.md`.

---

## 1. L'erreur, et elle est de moi

Le `README.md` que la v1 t'a fait écrire affirme que la porte vérifie **« que chaque texte affiché
existe dans les deux langues »**.

**C'est faux, et tu as eu raison de refuser de le publier tel quel.** La porte annonce 384 suites de
texte visible, dont 219 seulement sont couvertes par un attribut de traduction. Les 165 autres passent
par la liste blanche, **qui ne vérifie rien en matière de bilinguisme** : l'en-tête du fichier le dit
lui-même, toute suite composée à cent pour cent de mots listés passe.

Un jour, un libellé français atterrira dans la version anglaise parce que ses mots figurent tous à la
liste, et la porte restera verte.

**Et c'est la même faute que celle du mot « orpheline », dans la même phrase.** J'ai tendu le filet sur
la seconde clause et laissé la première trop généreuse. Sur un document dont l'argument entier est
« vérifiez vous-même », une affirmation qui surcrédite la porte coûte la crédibilité de tout le reste.

---

## 2. Périmètre

`README.md`, **un paragraphe dans chaque langue**, et rien d'autre. Aucun autre fichier, aucune autre
section du README.

---

## 3. Le texte de remplacement, mot pour mot

### Section française, sous le titre « Comment il est vérifié »

Remplace le paragraphe qui commence par « Des contrôles écrits en JavaScript natif » par ceci, en
gardant le bloc de commande qui le précède :

````markdown
Des contrôles écrits en JavaScript natif, sans cadre de test tiers, parce que le projet n'a ni
construction ni paquet. Ils vérifient notamment que chaque texte **déclaré traduisible** existe dans
les deux langues, qu'aucune clé de traduction n'est présente dans une seule langue ni déclarée deux
fois, que les liens de navigation pointent vers des sections réelles, et que l'adresse de contact est
identique partout où elle apparaît.

Le texte visible **non déclaré traduisible** relève d'une autre règle : il doit être composé uniquement
de termes inscrits dans une liste blanche fermée, chacun accompagné du motif écrit qui l'y a fait
entrer. Cette liste est tenue à la main. **Elle déclare ce qui est réputé identique dans les deux
langues, elle ne le démontre pas.**
````

### Section anglaise, sous le titre « How it is verified »

````markdown
Checks written in plain JavaScript, with no third-party test framework, because the project has neither
a build nor a package manager. They verify, among other things, that every string **declared
translatable** exists in both languages, that no translation key exists in only one language or is
declared twice, that navigation links point to sections that actually exist, and that the contact
address is identical everywhere it appears.

Visible text that is **not declared translatable** falls under a different rule: it must consist only
of terms listed in a closed whitelist, each with the written reason that put it there. That list is
maintained by hand. **It states what is assumed identical in both languages, it does not prove it.**
````

---

## 4. Pourquoi cette version est plus forte, et pas seulement plus juste

La v1 promettait une garantie que la porte ne donne pas. La v2 décrit **deux régimes** et nomme la
limite du second.

Un lecteur technique qui ouvre `scripts/i18n-allowlist.txt` y trouve exactement ce que la phrase
annonce : un registre fermé, chaque entrée motivée, et un en-tête qui prévient de sa propre brèche.
**Le document et le code disent la même chose.** C'est précisément l'argument que le README défend.

Une limite énoncée vaut mieux qu'une garantie surestimée, sur un fichier dont personne ne vérifiera
jamais les affirmations à ta place.

---

## 5. Critères d'acceptation

1. Les deux paragraphes sont remplacés **mot pour mot** par ceux du §3.
2. **Aucune autre ligne du `README.md`** n'est modifiée, ni aucun autre fichier.
3. **Aucun tiret cadratin** dans le texte ajouté.
4. **Aucun nombre** : ni 384, ni 219, ni 165. Ils se périmeraient au premier incrément suivant, ce que
   la dette D-18 nomme.
5. La section française **ne contient toujours pas** le terme *harness engineering* ; l'anglaise le
   contient toujours.
6. Porte verte, **exactement 4 avertissements**.
7. Ce prompt est enregistré sur la **même branche**, avant la modification.

---

## 6. Ce que je ne te demande pas de faire

**La collision d'étiquettes `R-1` que tu as relevée n'entre pas dans cet incrément.** Tu as raison sur
le fond : deux objets sans rapport portent le même repère dans le même incrément, l'un venant de ta
spécification et l'autre de la revue. Ta proposition de préfixes distincts est bonne. Mais c'est une
**convention de projet**, donc une ligne du cadrage, donc un geste du Tech Lead. Je la traiterai avec
les dettes.

**Le point sur `tasks/JOURNAL_v0.2.md` non plus**, et il est plus important que le premier. Tu as
raison : la dette D-17 est formulée « sur la page » alors que la surface réelle est **le dépôt entier**,
et le README y dirige explicitement le lecteur. Rien de neuf n'est exposé par cet incrément, mais
l'énoncé de la dette est trop étroit. **Je corrige la ligne D-17 de mon côté, dans le prompt qui
l'inscrit au cadrage.**

---

## 7. Livrables

Les artefacts habituels, puis `.pipeline/STATUS.md` = `READY — …` en dernier geste.

Dans `changes.md`, une ligne sur ce que cette révision enseigne : **une phrase de documentation qui
décrit une garantie doit être écrite en regardant le contrôle, pas en se souvenant de son intention.**

---

*Prompt déposé le 12 août 2026 par le Tech Lead. Déposer n'est pas transmettre.*
