# Interchain Stack Documentation



An aggregation of Interchain stack components documentation in 1 place. Built with [Docusaurus 2](https://docusaurus.io/) and deployed at <https://dev-portal-docsite.netlify.app/>.

## Architecture

Review the [Architecture and considerations](./ARCHITECTURE.md) documentation to become familiar with the problem, designs, and expectations for maintainers and upstream developers.

## Installation

Simply `fork` this repository, then:

```bash
# MacOS: Install Homebrew & update bash to version >= 4
# /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# brew install bash
# bash --version

# Installs packages
$ npm install

# Gets latest upstream commits
$ make latest-commits

# Syncs docs site from the commits set in latest.json
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
