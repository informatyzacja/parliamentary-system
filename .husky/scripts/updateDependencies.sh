#!/usr/bin/env sh

# exit script if running on CI
if [ "$CI" = "true" ]; then
  exit 0
fi

# https://dev.to/zirkelc/automatically-install-npm-dependencies-on-git-pull-bg0
IFS=$'\n'
PACKAGE_LOCK_REGEX="^yarn\.lock"
# check if lockfile was changed
PACKAGES="$(git diff --name-only HEAD@{1} HEAD | grep -E "$PACKAGE_LOCK_REGEX" || true)"
if [ ! -z "$PACKAGES" ]; then
  echo "📦 Lockfile was changed. Running yarn install to update your dependencies..."
  yarn install
fi
