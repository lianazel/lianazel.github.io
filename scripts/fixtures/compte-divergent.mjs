// TEMOIN DE COMPTE DIVERGENT — preuve que la garde du compte des chemins mord.
// Ce fichier ne fait PAS partie de la porte et n'est JAMAIS execute : gate.sh
// se contente d'y compter des motifs, exactement comme il les compte dans
// check-i18n.mjs.
//
// CE QU'IL PROUVE : la garde du bloc 8/9 compare le nombre de chemins bloquants
// reellement presents dans la source au nombre declare dans gate.sh. Cette
// garde est elle-meme un chemin bloquant — et une garde sans temoin nait
// invisible, c'est la lecon du 9 aout 2026. Elle vaut aussi, et surtout, pour
// la garde qui surveille les gardes : sans ce fichier, le controle cense
// detecter qu'un chemin a ete ajoute sans assertion pourrait mourir en
// silence, et on croirait l'inventaire surveille alors qu'il ne le serait plus.
//
// Il porte volontairement DEUX sites d'erreur bloquante et UNE sortie anticipee,
// la ou la source en porte vingt-et-un et quatre. Les deux comptes divergent
// donc, et gate.sh exige que la garde le dise.
//
// ATTENTION — LE COMMENTAIRE COMPTE, LUI AUSSI. La mesure est un comptage de
// motif dans du texte : ecrire le motif dans un commentaire l'incremente. La
// premiere redaction de ce fichier annoncait « deux sites » et en portait trois,
// le troisieme etant dans la phrase qui les annoncait. C'est, en miniature et
// des la premiere minute, le defaut meme que cet increment repare : un nombre
// declare que rien ne mesurait, et faux. Ne pas nommer le motif ici.
//
// NE PAS l'aligner sur le compte reel — ce serait desarmer la preuve. Si le
// compte de check-i18n.mjs devait un jour tomber a deux et un, c'est CE fichier
// qu'il faudrait changer, pas la garde.

const errors = [];

export function faux(entree) {
  if (!entree) errors.push('premier chemin bloquant, sans objet');
  if (entree === 'autre') errors.push('second chemin bloquant, sans objet');
  if (errors.length) {
    exit(1);
  }
}
