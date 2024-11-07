#!/bin/bash
#
# Run this file from the root of the directory:
#
# bash ./scripts/sync_cosmos-sdk.sh
#
set -e

CURRENT_DIR=$(pwd)
source "./scripts/helpers.sh"
DOCS_NAME=cosmos-sdk

DOCS_DIR_TARGET=dsource-cosmos-sdk
DOCS_DIR=$CURRENT_DIR/$DOCS_DIR_TARGET

MAIN_SDK_DIR_TARGET=dsource-cosmos-sdk-main
MAIN_SDK_DIR=$CURRENT_DIR/$MAIN_SDK_DIR_TARGET

main() {
    download_docs_source

    copy_over_core
    update_sidebar

    copy_over_main_repo_core

    HACK_fix_relative_links
}

# == HELPER FUNCTIONS ==
unsafe_cleanup_cosmossdk() {
    # useful for testing this script locally and resetting state
    rm -rf ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs ./static/img/$DOCS_NAME/ ./src/components/$DOCS_NAME/
    rm -rf ./$DOCS_DIR ./$MAIN_SDK_DIR ./${DOCS_NAME}_versions.json
}


download_docs_source() {
    download_repo "cosmos-sdk" "$(jq -r '.cosmossdk' <latest.json)"
    download_repo "cosmos-sdk-main" "$(jq -r '.cosmossdkmain' <latest.json)"

    if [ -z "$DOCS_NAME" ]; then
        echo "DOCS_NAME is unset. Set it to the name of the docs you are syncing (i.e. cosmos-sdk)."
        panic
    fi

    mkdir -p ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs ./static/img/$DOCS_NAME/ ./src/components/$DOCS_NAME/
}


copy_over_core() {
    # versioned docs
    cp -r $DOCS_DIR/docs ./cosmos-sdk
    cp $DOCS_DIR/versions.json ./cosmos-sdk_versions.json
    cp -r $DOCS_DIR/versioned_sidebars/* ./cosmos-sdk_versioned_sidebars
    cp -r $DOCS_DIR/versioned_docs/* ./cosmos-sdk_versioned_docs

    # core components
    cp -r $DOCS_DIR/src/components/* ./src/components/cosmos-sdk/
    cp $DOCS_DIR/sidebars.js ./cosmos-sdk/sidebars.js

    # core images
    cp -r $DOCS_DIR/static/img/* ./static/img/cosmos-sdk/
    replace "./src/components/cosmos-sdk" "static/img/" "static/img/cosmos-sdk/"
}

copy_over_main_repo_core() {
    MAIN_DIRS=("./cosmos-sdk/docs" "./cosmos-sdk_versioned_docs/version-0.52" "./cosmos-sdk_versioned_docs/version-0.50")
    for dir in "${MAIN_DIRS[@]}"; do
        cp -r $MAIN_SDK_DIR/docs/architecture $dir
        cp -r $MAIN_SDK_DIR/docs/rfc $dir
        cp -r $MAIN_SDK_DIR/docs/user/run-node $dir/build
    done

    # next
    cp-improved $MAIN_SDK_DIR/x/bank/v2/README.md ./cosmos-sdk/docs/build/modules/bank/v2

    # v0.52
    cp-improved $MAIN_SDK_DIR/simapp/CHANGELOG.md ./cosmos-sdk_versioned_docs/version-0.52/build/migrations/simapp
    cp-improved $MAIN_SDK_DIR/x/tx/README.md ./cosmos-sdk_versioned_docs/version-0.52/build/modules/tx
    cp-improved $MAIN_SDK_DIR/x/bank/v2/README.md ./cosmos-sdk_versioned_docs/version-0.52/build/modules/bank/v2

    # v0.50
    touch ./cosmos-sdk_versioned_docs/version-0.50/build/modules/README.md # TODO: fix upstream
    touch ./cosmos-sdk_versioned_docs/version-0.50/build/abci/01-app-go-v2.md # TODO: fix upstream
}


update_sidebar() {
    # modify the sidebar dirNames -> match the new location format (due to multiple nested versions)
    # We replace the " as well as to not modify the name of the sidebars, just the location contents
    replace "./cosmos-sdk/sidebars.js" '"learn"' '"docs/learn"'
    replace "./cosmos-sdk/sidebars.js" '"build"' '"docs/build"'
    replace "./cosmos-sdk/sidebars.js" '"user"' '"docs/user"'
    replace "./cosmos-sdk/sidebars.js" '"tutorials"' '"docs/tutorials"'
}


# TODO: ideally we do not have to do this, but some links are broken upstream.
HACK_fix_relative_links() {
    # This is just cosmetic so the docs engine doesn't throw a 'Docs markdown link couldn't be resolved' error for filenames in backticks.
    # e.g. `CHANGELOG.md`. (Unless we copy these over to this new docs site location, which imo is better to do)
    replace "./cosmos-sdk" "\`CHANGELOG.md\`" "CHANGELOG"
    replace "./cosmos-sdk_versioned_docs" "\`CHANGELOG.md\`" "CHANGELOG"
    # # `UPGRADING.md`
    replace "./cosmos-sdk" "\`UPGRADING.md\`" "UPGRADING"
    replace "./cosmos-sdk_versioned_docs" "\`UPGRADING.md\`" "UPGRADING"

    # fix typo
    replace "./cosmos-sdk" "pacakges" "packages"
    replace "./cosmos-sdk_versioned_docs" "pacakges" "packages"

    replace "./cosmos-sdk/docs/build" "github.com/cometbft/cometbft" "https://github.com/cometbft/cometbft"
    replace "./cosmos-sdk_versioned_docs" "github.com/cometbft/cometbft" "https://github.com/cometbft/cometbft"
}


# == MAIN ==
main
