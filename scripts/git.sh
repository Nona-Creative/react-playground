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
}

"$@"
