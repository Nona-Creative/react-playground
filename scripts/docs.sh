#!/usr/bin/env bash

# import .env
set -o allexport
[[ -f .env ]] && source .env
set +o allexport

# ------------------------------------------------------
# generate
# ------------------------------------------------------

function generate() {
  local BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
  local DIR=${BRANCH_DOCS_DIRECTORY:-docs}
  local DESTINATION_PATH="${DIR}/${BRANCH_NAME}.tpl.md"
  if [[ ! -f "$DESTINATION_PATH" ]]; then
    touch $DESTINATION_PATH
  fi
}

# ------------------------------------------------------
# render
# ------------------------------------------------------

function render() {
  local BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
  local DIR=${BRANCH_DOCS_DIRECTORY:-docs}
  local SOURCE_PATH="${DIR}/${BRANCH_NAME}.tpl.md"
  local DESTINATION_PATH="${SOURCE_PATH/.tpl.md/.md}"
  if test -f "$SOURCE_PATH"; then
    node scripts/docs.js render $SOURCE_PATH > $DESTINATION_PATH
  fi
}

"$@"
