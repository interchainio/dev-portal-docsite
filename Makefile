## build-docs: Build the documentation to static files.
.PHONY: build-docs
build-docs:
	@npm ci && npm run build

## serve-docs: Run docs server
.PHONY: serve-docs
serve-docs:
	@npm run serve

## dev-docs: Run dev docs instance
.PHONY: dev-docs
dev-docs:
	@npm run start

## pull-latest: Pulls the latest commits from upstream
.PHONY: pull-latest
pull-latest:
	@bash pull-latest.sh

## sync-docs: Grab the latest upstream documentation
.PHONY: sync-docs
sync-docs:
	@bash ./scripts/sync_cosmos-sdk.sh
	@bash ./scripts/sync_ibc.sh
	@bash ./scripts/sync_onboarding.sh

.PHONY: help
help: Makefile
	@echo
	@echo " Choose a command run in 'dev-portal'"
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo


