#!/bin/bash

# Syncs the latest commits from the upstream as a change file.

source ./helpers.sh

# these names should match each sync_* file for simplicity
download_cometbft "dsource-cometbft"
COMETBFT_COMMIT=$(git -C "dsource-cometbft" rev-parse HEAD)

download_ibcgo "dsource-ibc-go"
IBC_GO_COMMIT=$(git -C "dsource-ibc-go" rev-parse HEAD)

download_onboarding "dsource-onboarding"
SPAWN_ONBOARDING_COMMIT=$(git -C "dsource-onboarding" rev-parse HEAD)

download_cosmossdk "dsource-cosmos-sdk" "dsource-cosmos-sdk-main"
COSMOS_SDK_COMMIT=$(git -C "dsource-cosmos-sdk" rev-parse HEAD)
COSMOS_SDK_MAIN_COMMIT=$(git -C "dsource-cosmos-sdk-main" rev-parse HEAD)

# ---

json_string=$(
  jq --null-input \
    --arg cometbft "$COMETBFT_COMMIT" \
    --arg ibcgo "$IBC_GO_COMMIT" \
    --arg onboarding "$SPAWN_ONBOARDING_COMMIT" \
    --arg cosmossdk "$COSMOS_SDK_COMMIT" \
    --arg cosmossdkmain "$COSMOS_SDK_MAIN_COMMIT" \
    '{cometbft: $cometbft, ibcgo: $ibcgo, onboarding: $onboarding, cosmossdk: $cosmossdk, cosmossdkmain: $cosmossdkmain}'
)

# jq pretty pint json_string -> latest.json
echo $json_string | jq '.' >latest.json
