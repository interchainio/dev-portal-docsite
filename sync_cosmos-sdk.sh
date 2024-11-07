#!/bin/bash
#
# To run this script, ensure you have setup the docusaurus.config.js first for new repos.
# This then migrates it over to here.
#

CURRENT_DIR=$(pwd)
source ./sync_helpers.sh
DOCS_NAME=cosmos-sdk

DOCS_DIR_TARGET=dsource-cosmos-sdk
DOCS_DIR=$CURRENT_DIR/$DOCS_DIR_TARGET

MAIN_SDK_DIR_TARGET=dsource-cosmos-sdk-main
MAIN_SDK_DIR=$CURRENT_DIR/$MAIN_SDK_DIR_TARGET

main() {
    download_docs_source

    copy_over_core
    update_sidebar

    HACK_fix_relative_links
}

# == HELPER FUNCTIONS ==
unsafe_cleanup_cosmossdk() {
    # useful for testing this script locally and resetting state
    rm -rf ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs ./static/img/$DOCS_NAME/ ./src/components/$DOCS_NAME/
    rm -rf ./$DOCS_DIR ./$MAIN_SDK_DIR ./${DOCS_NAME}_versions.json
}

download_docs_source() {
    # Downloads documentation source for the repo
    git -C "$DOCS_DIR_TARGET" pull || git clone --depth 1 https://github.com/cosmos/cosmos-sdk-docs.git $DOCS_DIR_TARGET

    # TODO: ideally we get off of this? or put all in the main repo yea? talk w/ Julien.
    git -C "$MAIN_SDK_DIR_TARGET" pull || git clone --depth 1 https://github.com/cosmos/cosmos-sdk.git $MAIN_SDK_DIR_TARGET

    if [ -z "$DOCS_NAME" ]; then
        echo "DOCS_NAME is unset. Set it to the name of the docs you are syncing (i.e. cosmos-sdk)."
        panic
    fi

    mkdir -p ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs ./static/img/$DOCS_NAME/ ./src/components/$DOCS_NAME/
}

copy_over_core() {
    # docs
    cp -r $DOCS_DIR/docs ./cosmos-sdk

    # versioned docs
    cp $DOCS_DIR/versions.json ./cosmos-sdk_versions.json
    cp -r $DOCS_DIR/versioned_sidebars/* ./cosmos-sdk_versioned_sidebars
    cp -r $DOCS_DIR/versioned_docs/* ./cosmos-sdk_versioned_docs

    # core
    cp -r $DOCS_DIR/src/components/* ./src/components/cosmos-sdk/
    cp $DOCS_DIR/sidebars.js ./cosmos-sdk/sidebars.js

    # images
    cp -r $DOCS_DIR/static/img/* ./static/img/cosmos-sdk/
    replace "./src/components/cosmos-sdk" "static/img/" "static/img/cosmos-sdk/"

    ### -----
    ## Core docs from main repo

    # architecture from main
    cp -r $MAIN_SDK_DIR/docs/architecture ./cosmos-sdk
    cp -r $MAIN_SDK_DIR/docs/rfc ./cosmos-sdk/docs
    cp -r $MAIN_SDK_DIR/docs/user/run-node ./cosmos-sdk/docs/build
    cp-improved $MAIN_SDK_DIR/x/bank/v2/README.md ./cosmos-sdk/docs/build/modules/bank/v2

    # TODO: make these so we iterate all versioned docs
    cp -r $MAIN_SDK_DIR/docs/architecture ./cosmos-sdk_versioned_docs/version-0.52
    cp -r $MAIN_SDK_DIR/docs/rfc ./cosmos-sdk_versioned_docs/version-0.52
    cp -r $MAIN_SDK_DIR/docs/user/run-node ./cosmos-sdk_versioned_docs/version-0.52/build
    cp-improved $MAIN_SDK_DIR/simapp/CHANGELOG.md ./cosmos-sdk_versioned_docs/version-0.52/build/migrations/simapp
    cp-improved $MAIN_SDK_DIR/x/tx/README.md ./cosmos-sdk_versioned_docs/version-0.52/build/modules/tx
    cp-improved $MAIN_SDK_DIR/x/bank/v2/README.md ./cosmos-sdk_versioned_docs/version-0.52/build/modules/bank/v2
}

update_sidebar() {
    # modify the sidebar dirNames -> match the new location format (due to multiple nested versions)
    # We replace the " as well as to not modify the name of the sidebars, just the location contents
    replace "./cosmos-sdk/sidebars.js" '"learn"' '"docs/learn"'
    replace "./cosmos-sdk/sidebars.js" '"build"' '"docs/build"'
    replace "./cosmos-sdk/sidebars.js" '"user"' '"docs/user"'
    replace "./cosmos-sdk/sidebars.js" '"tutorials"' '"docs/tutorials"'
}

new_fix_relative() {
    # copy over architecture
}

# TODO: ideally we do not have to do this, but some links are broken upstream.
HACK_fix_relative_links() {
    # cosmos-sdk nested docs, pull in as references
    # BASE_DIR=./cosmos-sdk/docs/build/modules/bank/v2; mkdir -p $BASE_DIR; cp $MAIN_SDK_DIR/x/bank/v2/README.md $BASE_DIR
    # BASE_DIR=./cosmos-sdk/docs/build/modules/tx; mkdir -p $BASE_DIR; cp $MAIN_SDK_DIR/x/tx/README.md $BASE_DIR
    # BASE_DIR=./cosmos-sdk/docs/build/modules/validate; mkdir -p $BASE_DIR; cp $MAIN_SDK_DIR/x/validate/README.md $BASE_DIR

    # This is just cosmetic so the docs engine doesn't throw a 'Docs markdown link couldn't be resolved' error for filenames in backticks.
    # e.g. `CHANGELOG.md`.
    replace "./cosmos-sdk" "\`CHANGELOG.md\`" "CHANGELOG"
    replace "./cosmos-sdk_versioned_docs" "\`CHANGELOG.md\`" "CHANGELOG"
    # # `UPGRADING.md`
    replace "./cosmos-sdk" "\`UPGRADING.md\`" "UPGRADING"
    replace "./cosmos-sdk_versioned_docs" "\`UPGRADING.md\`" "UPGRADING"

    # # fix typo
    replace "./cosmos-sdk" "pacakges" "packages"
    replace "./cosmos-sdk_versioned_docs" "pacakges" "packages"
}


# == MAIN ==
main
