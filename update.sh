#!/bin/bash

set -e

BRANCH_LIST="ent-branches.txt"
FIXED_COMMIT="edecfbf20703dac0092c"  # der zu cherry-pickende Commit

while read -r BRANCH; do
  if [[ -z "$BRANCH" ]]; then
    continue
  fi

  echo "===> Wechsel zu $BRANCH"
  git checkout "$BRANCH"

  echo "===> Cherry-Pick von $FIXED_COMMIT"
  # git cherry-pick "$FIXED_COMMIT" -X theirs || (git add . && git cherry-pick --continue)

  # cp /tmp/package.json package.json
  #cp /tmp/pre-commit .husky/pre-commit 
  # git add .
  git checkout lab08a-testing -- src/app/next-flights/next-flights.component.ts
  git checkout lab08a-testing -- src/app/next-flights/checkin/checkin.component.ts

  git checkout lab08a-testing -- src/styles.css

  git checkout lab08a-testing -- src/app/navbar/navbar.component.html
  git checkout lab08a-testing -- src/app/sidebar/sidebar.component.html
  git add .
  git commit -m "chore(ent): update to ngrx 20"


done < "$BRANCH_LIST"

echo "✅ Alle Cherry-Picks abgeschlossen."
