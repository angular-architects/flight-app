#!/bin/bash

set -e

BRANCH_LIST="ent-branches.txt"
FIXED_COMMIT="a2edb30e8fa08bfd"  # der zu cherry-pickende Commit

while read -r BRANCH; do
  if [[ -z "$BRANCH" ]]; then
    continue
  fi

  echo "===> Wechsel zu $BRANCH"
  git checkout "$BRANCH"

  echo "===> Cherry-Pick von $FIXED_COMMIT"
  git cherry-pick "$FIXED_COMMIT"

done < "$BRANCH_LIST"

echo "✅ Alle Cherry-Picks abgeschlossen."
