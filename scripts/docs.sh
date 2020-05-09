#!/usr/bin/env bash

# ------------------------------------------------------
# generate
# ------------------------------------------------------

function generate() {
  local BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
  local DESTINATION_PATH="docs/${BRANCH_NAME}.tpl.md"
  if [[ ! -f "$DESTINATION_PATH" ]]; then
    touch $DESTINATION_PATH
  fi
}

# ------------------------------------------------------
# render
# ------------------------------------------------------

function render() {
  local BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
  local SOURCE_PATH="docs/${BRANCH_NAME}.tpl.md"
  local DESTINATION_PATH="${SOURCE_PATH/.tpl.md/.md}"
  if test -f "$SOURCE_PATH"; then
    node scripts/docs.js render $SOURCE_PATH > $DESTINATION_PATH
  fi
}

"$@"
