#!/usr/bin/env bash

# ------------------------------------------------------
# load envs
# ------------------------------------------------------

function load_envs() {
  local STAGE=$1
  local ENV_FILENAME=".env"

  if [[ -n "${STAGE}" ]]; then
    ENV_FILENAME=".env.${STAGE}"
  fi

  set -o allexport
  [[ -f $ENV_FILENAME ]] && source $ENV_FILENAME
  set +o allexport
}

# ------------------------------------------------------
# generate
# ... create a new template doc
# ------------------------------------------------------

function generate() {
  load_envs ${STAGE}
  local BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
  local DIR="${BRANCH_DOCS_DIRECTORY:-docs/branch}"
  mkdir -p $DIR
  local DESTINATION_PATH="${DIR}/${BRANCH_NAME}.tpl.md"
  if [[ ! -f "${DESTINATION_PATH}" ]]; then
    echo "generating doc template: ${DESTINATION_PATH}"
    touch $DESTINATION_PATH
  else
    echo "doc template already exists: ${DESTINATION_PATH}"
  fi
}

# ------------------------------------------------------
# render
# ... render doc from template
# ------------------------------------------------------

function render() {
  load_envs ${STAGE}
  local BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
  local DIR="${BRANCH_DOCS_DIRECTORY:-docs}"
  mkdir -p $DIR
  local SOURCE_PATH="${DIR}/${BRANCH_NAME}.tpl.md"
  local DESTINATION_PATH="${SOURCE_PATH/.tpl.md/.md}"
  if [[ -f "${SOURCE_PATH}" ]]; then
    echo "rendering doc: ${DESTINATION_PATH} from template: ${SOURCE_PATH}"
    node scripts/docs.js render $SOURCE_PATH > $DESTINATION_PATH
  fi
}

"$@"
