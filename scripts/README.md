# Scripts

All the files in this directory are to be called from the root of the directory.

Most of these are wrapped within a `Makefile` for ease of use.


## Context

### dsource-

directories are "documentation sources". This is the upstream source of truth. They are shallow cloned so only the commits required are saved, keeping instances lightweight for local and CI development.

### Sync Latest Commits

pulls the latest commits from all repos into the `latest.json` file in the root of the repo. This is then used in all the `sync_*.sh` scripts as the commit to use. It allows for deterministic syncing of docs from PRs to main deployments. This way if a PR is merged, the docs will only reflect those successful versions seen in the preview. It also helps so if the CI/CD fails for some reason, the PR will just contain the latest json changes and we can git bisect or write a patch into the scripts.

### helpers
* `helpers.sh` is a script of useful shared logic across the `sync_*` scripts

### Sync Files
* `sync_*.sh` files are used to pull the latest source code from the remote repo and move it into the docs instance.
