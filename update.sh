#!/bin/bash

set -e

BRANCH_LIST="branches-ess.txt"
FIXED_COMMIT="0e5e50755922b26afcbc1850241932669d8c12e2"  # der zu cherry-pickende Commit

while read -r BRANCH; do
  if [[ -z "$BRANCH" ]]; then
    continue
  fi

  echo "===> Wechsel zu $BRANCH"
  git checkout "$BRANCH"

  # git add .
  # git commit -m "chore: provide empty about component template"

  rm package-lock.json

  if git merge-base --is-ancestor "$FIXED_COMMIT" HEAD; then
    echo "Commit already present"
  else
    git cherry-pick "$FIXED_COMMIT" -X theirs
  fi
  
  # echo "===> Cherry-Pick von $FIXED_COMMIT"
  # git cherry-pick "$FIXED_COMMIT" -X theirs || (git add . && git cherry-pick --continue)
  # echo "Copying files..."

  # cp /tmp/package.json package.json
  # cp /tmp/date-cva.directive.ts apps/flights/src/app/domains/shared/ui-common/date/date-cva.directive.ts 
  
  #cp /tmp/pre-commit .husky/pre-commit 
  # git add .

  # git add .
  # git commit -m "chore(ent): update to ng 21 next.5 to showcase signal forms" || echo Weiter gehts ...


done < "$BRANCH_LIST"

echo "✅ Alle Cherry-Picks abgeschlossen."
