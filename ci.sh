#!/usr/bin/env bash

# Set-up access to the Progress NPM Registry and GitHub API
echo "@progress:registry=https://$PROGRESS_REGISTRY_HOST/" > .npmrc
echo "//$PROGRESS_REGISTRY_HOST/:_authToken=\"$PROGRESS_REGISTRY_TOKEN\"" >> .npmrc
export NPM_TOKEN=$PROGRESS_REGISTRY_TOKEN
export GH_TOKEN=$KENDOBOT_GH_TOKEN

set -o errexit
set -o verbose

git clean -xf

npm update
npm prune

npm run lint
npm run test
npm run build-package

