#!/bin/bash

set -e

BRANCH_LIST="ent-branches.txt"
FIXED_COMMIT="a3dd3b8874e71a0396"  # der zu cherry-pickende Commit

while read -r BRANCH; do
  if [[ -z "$BRANCH" ]]; then
    continue
  fi

  echo "===> Wechsel zu $BRANCH"
  git checkout "$BRANCH"

  # Prüfen, ob Commit schon im Branch enthalten ist
  if git cherry "$BRANCH" "$FIXED_COMMIT" | grep -q '^-'; then
    echo "⏩ Commit bereits in $BRANCH – überspringe."
    continue
  fi

  echo "===> Cherry-Pick von $FIXED_COMMIT"
  git cherry-pick "$FIXED_COMMIT"

done < "$BRANCH_LIST"

echo "✅ Alle Cherry-Picks abgeschlossen."
