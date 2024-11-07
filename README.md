# Interchain Stack Documentation

Built with [Docusaurus 2](https://docusaurus.io/).

An aggregation of Interchain stack components documentation in 1 place.

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
$ npm run build
```

---

## Context

### dsource-

`dsource-` directories are "documentation sources". This is the upstream source of truth. They are shallow cloned so only the commits required are saved, keeping instances lightweight for local and CI development.

### Sync Latest Commits

The latest-commits script gathers recent commits from all repos into the `latest.json` file. This file is used in all `sync_*.sh` scripts to ensure that docs sync deterministically from PRs to main deployments. When a PR is merged, only the versions successfully previewed in the PR are deployed. If CI/CD fails, the PR will still contain the latest JSON changes, allowing for easier debugging or patching through `git bisect` or script adjustments.

### Helpers

`helpers.sh` is a script of useful shared logic across the `sync_*` scripts

### Sync Files

`sync_*.sh` files are used to pull the latest source code from the remote repo and move it into the docs instance. These use the `latest.json` commits.
