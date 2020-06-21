#!/usr/bin/env bash

# ------------------------------------------------------
# exit if changes
# ------------------------------------------------------

function exit-if-changes() {
  local CHANGES=$(git ls-files --other --exclude-standard --directory | egrep -v '/$')
  if [[ "${CHANGES}" ]] ; then
    echo "There are uncommitted changes, please commit"
    exit 2
  fi
  git diff --exit-code || (echo "There are uncommitted changes, please commit" && exit 2)
}

# ------------------------------------------------------
# fetch all special branches
# ------------------------------------------------------

function checkout-remote-special() {
  read -ra branches <<< $(git branch -r | awk -v search="origin/${1}" 'substr($1, 1, length(search)) == search { print }')
  local BRANCH_NAME
  for i in "${!branches[@]}"; do
    BRANCH_NAME="${branches[$i]/origin\//}"
    git checkout $BRANCH_NAME
  done
}

function checkout-special() {
  local BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
  checkout-remote-special "iso__"
  checkout-remote-special "int__"
  checkout-remote-special "feat__"
  git checkout $BRANCH_NAME
}

"$@"
