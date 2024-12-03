# Interchain Stack Documentation

<https://dev-portal-docsite.netlify.app/>

An aggregation of Interchain stack components documentation in 1 place like the [Cosmos-SDK](https://github.com/cosmos/cosmos-sdk), [IBC-Go](https://github.com/cosmos/ibc-go), and [CometBFT](https://github.com/cometbft/cometbft). Built with [Docusaurus 2](https://docusaurus.io/).

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

# Architecture

### Problem

Interchain resources have a problem. All the documentation for inter-connected components (SDK, IBC, CometBFT, etc) is maintained by different teams, in different repositories, and distributed via different websites and styles. The interchain needs a place where all core documentation can sit so it is easily accessible. The solution is to pull down upstream documentation and modify it to fit our needs. This removes the requirement for documentation to live here, provides better DevUX for upstream maintainers, and allows this docs site to fully focus on design and aggregation.

### Solution Overview

Every external documentation repo is not saved here for efficiency. Teams modify their upstream docs where they feel comfortable. This pipeline downloads, modifies, and builds the external docs to fit the aggregated use-case in a developer experience friendly way. Git commits are used for deterministic syncing even if an auto generated merge takes a period of time. This keep PRs small and clean while allowing for faster git clones as this repo expands. This commit based approach has checks with CI/CD to ensure the latest changes are still valid and no broken links are found. if they are, a reviewer can test it on their machine locally to verify what scripts need to be modified. Once approved and merged the CI/CD will deploy the changes to the live site.

### Flow
* Developer updates and adds some cosmos-sdk documentation in the upstream `cosmos/cosmos-sdk` repo `docs/` folder.
* [A cron schedule](#cicd) runs at some period in the future. It shallow clones the components and gets the git hash. Then saves it to a file
* The cron action then pushes a PR which runs the normal validation CI and deploys it to a preview instance.
* A reviewer approves and merges if it's good
* if the CI fails (i.e. broken links), the reviewer must either:
    - tag the upstream team that something on their end broken
    - fix the local replace script to format to this repositories needs to get CI to pass
* Once in main, the commit hash file is used as the shallow docs clones for the CI to then build and deploy it to production
* The site is then deployed to netlify and/or github pages.

**NOTE** kapa.ai bot support will not be available locally & requires registering your domain in the dashboard. If you get CORS errors, this is why.

### Considerations

#### Docusaurus
The only engine with support for multiple versions and multiple documentation topics in 1 site is docusaurus. Originally the plan was to go with Nextra, but it would require each documentation site to be its own subdomain (i.e. sdk.website.com). This results in each site being run independently, just under 1 domain. While this is technically the easier approach a requirement for the docs-site is no hard redirects. This means all content must be accessible via URL slugs (i.e. `.com/<slug>`) and all loaded on connection to the site initially. This narrowed it down to Docusaurus. Coincidentally both the Cosmos-SDK and IBC-Go already used docusaurus too.

#### Web Hosting
Web hosting supports [netlify](./.github/workflows/deploy-netlify.yaml) and [github pages](./.github/workflows/deploy-github-pages.yaml) since docusaurus generates static sites. This allows developers to use 1 or the other depending on their conformability with either. For production, the Interchain Foundation uses the netlify action.

#### Developer Experience
Developer experience for both upstream and this repositories maintainers is a key consideration in the design. Stack components should be able to host their documentation anywhere
- Dedicated documentation repo
- nested /docs directory within a parent repo
- Within this repo itself (*not advised, but possible)*
Giving flexibility to the developer to continue on with their normal workflows.

#### Rapid Iteration
Dynamic loading is used with the docusaurus config to enable faster build/run iteration. This is done by checking for specific files (like a sidebar.js in a folder name). If this is found then that folder name (which matches a topic such as `cosmos-sdk`) is loaded in. If you only need to test 1 topic, you only have to sync that topics docs via the `scripts/*.sh` file. Each are independent and load without dependencies on other documentation topics. If you want to load all documentation, use the `make` file.

#### Versioning

tldr; each component (topic) can use its normal versions. If using child components which don't match the parents semantic versioning, just create a new component topic for the module.

Each stack component topic needs its own semantic versions (i.e. `cosmos-sdk`: v0.47 & v0.50, `ibc-go` v7.x & v8.x). Developers upstream can reference these direct path links which will then smart redirect for the user without redirecting locally. If a component changes to child packages with different versioning (as the cosmos-sdk is working to do with v0.52 and v1 modules), each child package would become its own topic. This way you can have `cosmos-sdk` v0.52 and `x/staking` v1 and v2. Both v1 and v2 may be compatible with the same version of other components, allowing you to support other packages as well.

A rough example demo for how child versioned modules would work is [provided here](https://youtu.be/iG1avX7F6eo?si=HJP1NRkKAXYUTnDp&t=28). This is done via a [re-direct](./src/theme/NotFound.js) in the NotFound since redirect plugins only work for complete builds (this NotFound patch allows it to work for local dev starts too). So that `cosmos-sdk/x-staking/v1` -> `/x-staking/v1`

## Implementations

### Sync Latest Commits

The `latest-commits` makefile command gathers recent commits from all repos into the `latest.json` file which is committed. This file is used in all `sync_*.sh` scripts to ensure that docs sync deterministically from PRs to main deployments. When a PR is merged, only the versions successfully previewed in the PR are deployed. If CI/CD fails, the PR will still contain the latest JSON changes, allowing for easier debugging or patching through `git bisect` or script adjustments.

### CI/CD

There is a [cron action](./.github/workflows/cron-latest-commits.yaml) that shallow clones the components repositories just for their commit hash & documentation source files. This creates a PR (requires a PAT to run workflows) that then runs the validation workflows and uploads to a preview image on netlify. This preview integration is done in the netlify UI itself. This is why `npm run build` does more than just build the docs, but also syncs the latest docs. If you are working locally you probably just want `npm run build:local` for your first time.

Once the PR is approved (reviewer ensures the validation like noBrokenLinks passes & that the preview looks good), it merges to main and will be deployed. This is based on the `latest.json` commits which were auto generated in the cron action to start.

### dsource- directories

`dsource-` directories are "documentation sources". This is the upstream source of truth. They are shallow cloned so only the commits required are saved, keeping instances lightweight for local and CI development. All docs are found here and are shallow cloned based on the commits found in `latest.json`

### Helpers

`helpers.sh` is a script of useful shared logic across the `sync_*` scripts

### Sync Files

`sync_*.sh` files are used to pull the latest source code from the remote repo and move it into the docs instance. These use the `latest.json` commits.
