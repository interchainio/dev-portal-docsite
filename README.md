# Interchain Stack Documentation

Built with [Docusaurus 2](https://docusaurus.io/).

An aggregation of Interchain stack components documentation in 1 place. <https://dev-portal-docsite.netlify.app/>

## Installation

Simply `fork` this repository, then:

```bash
# Installs packages
$ npm install

# Gets latest upstream commits
$ make latest-commits

# Syncs the commits to docs into the site
$ make sync-docs
```

## Local Development

```bash
$ npm start
```

## Build

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```bash
$ npm run build:local
```

## Build with Latest

This command runs package install, doc sync, and the build in 1 command. It is mainly used for upstream CI/CD with deployments.

```bash
$ npm run build
```

---

## Context

Every external documentation repo is not saved here for efficiency. Teams modify their upstream docs where they feel comfortable. This pipeline downloads, modifies, and builds the external docs to fit the aggregated use-case in a developer experience friendly way. Git commits are used for deterministic syncing even if an auto generated merge takes a period of time. This keep PRs small and clean while allowing for faster git clones as this repo expands. This commit based approach has checks with CI/CD to ensure the latest changes are still valid and no broken links are found. if they are, a reviewer can test it on their machine locally to verify what scripts need to be modified. Once approved and merged the CI/CD will deploy the changes to the live site.

### dsource-

`dsource-` directories are "documentation sources". This is the upstream source of truth. They are shallow cloned so only the commits required are saved, keeping instances lightweight for local and CI development.

### Sync Latest Commits

The latest-commits script gathers recent commits from all repos into the `latest.json` file. This file is used in all `sync_*.sh` scripts to ensure that docs sync deterministically from PRs to main deployments. When a PR is merged, only the versions successfully previewed in the PR are deployed. If CI/CD fails, the PR will still contain the latest JSON changes, allowing for easier debugging or patching through `git bisect` or script adjustments.

### Helpers

`helpers.sh` is a script of useful shared logic across the `sync_*` scripts

### Sync Files

`sync_*.sh` files are used to pull the latest source code from the remote repo and move it into the docs instance. These use the `latest.json` commits.
