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
    # cosmos-sdk nested docs, pull in as references
    BASE_DIR=./cosmos-sdk/docs/build/modules/bank/v2; mkdir -p $BASE_DIR; cp $MAIN_SDK_DIR/x/bank/v2/README.md $BASE_DIR
    BASE_DIR=./cosmos-sdk/docs/build/modules/tx; mkdir -p $BASE_DIR; cp $MAIN_SDK_DIR/x/tx/README.md $BASE_DIR
    BASE_DIR=./cosmos-sdk/docs/build/modules/validate; mkdir -p $BASE_DIR; cp $MAIN_SDK_DIR/x/validate/README.md $BASE_DIR

    # This is just cosmetic so the docs engine doesn't throw a 'Docs markdown link couldn't be resolved' error fiel filenames in backticks.
    # e.g. `CHANGELOG.md`.
    touch ./cosmos-sdk/docs/build/migrations/CHANGELOG.md
    touch ./cosmos-sdk_versioned_docs/version-{0.50,0.47}/build/migrations/CHANGELOG.md

    # this excludes a dir because of bad relative paths used in only 1 location.
    replace "./cosmos-sdk_versioned_docs" "\./01-app-go-v2.md" "../../build/building-apps/01-app-go-v2.md" "building-apps/"
    replace "./cosmos-sdk" "../run-node" "../../user/run-node/"

    # TODO: is this the correct location of this? the latest docs?
    OLD_PATH="../../architecture/"; NEW_PATH="../../build/architecture/"
    replace "./cosmos-sdk" "$OLD_PATH" "$NEW_PATH"
    replace "./cosmos-sdk_versioned_docs" "$OLD_PATH" "$NEW_PATH"
}


# == MAIN ==
main
