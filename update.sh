#!/bin/bash

set -e

BRANCH_LIST="ent-branches.txt"
FIXED_COMMIT="786f548f6dac6cad89229d76931"  # der zu cherry-pickende Commit

while read -r BRANCH; do
  if [[ -z "$BRANCH" ]]; then
    continue
  fi

  echo "===> Wechsel zu $BRANCH"
  git checkout "$BRANCH"

  echo "===> Cherry-Pick von $FIXED_COMMIT"
  # git cherry-pick "$FIXED_COMMIT" -X theirs
  cp /tmp/package.json package.json
  #cp /tmp/pre-commit .husky/pre-commit 
  git add .
  git commit -m "chore(ent): update to ngrx 20"


done < "$BRANCH_LIST"

echo "✅ Alle Cherry-Picks abgeschlossen."
