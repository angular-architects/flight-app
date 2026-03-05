#!/bin/bash

set -e

BRANCH_LIST="branches-ess.txt"
FIXED_COMMIT="02e792ba57d6956142fd567"  # der zu cherry-pickende Commit

while read -r BRANCH; do
  if [[ -z "$BRANCH" ]]; then
    continue
  fi

  echo "===> Wechsel zu $BRANCH"
  git checkout "$BRANCH"


  git cherry-pick "$FIXED_COMMIT" -X theirs

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
