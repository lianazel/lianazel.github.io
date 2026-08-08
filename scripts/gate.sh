#!/usr/bin/env bash
# Porte de qualite du portfolio — filet de tests appele par /ship et /land.
# Deux contrôles, dans cet ordre :
#   1. la preuve de morsure : le temoin defectueux DOIT echouer ;
#   2. le site reel DOIT passer.
# Un filet qui passe sur le temoin est en panne, pas en bonne sante.
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT" || exit 1

echo "--- 1/2 · Preuve de morsure (le temoin doit echouer) ---"
if node scripts/check-i18n.mjs scripts/fixtures/broken.html >/dev/null 2>&1; then
  echo "ECHEC - la porte ne mord plus : le temoin defectueux est passe."
  echo "        Reparer scripts/check-i18n.mjs AVANT toute livraison."
  exit 1
fi
echo "OK - le temoin echoue comme attendu."
echo ""

echo "--- 2/2 · Site reel (doit passer) ---"
node scripts/check-i18n.mjs index.html
