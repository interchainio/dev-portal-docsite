#!/bin/bash
#
# To run this script, ensure you have setup the docusaurus.config.js first for new repos.
# This then migrates it over to here.
#

CURRENT_DIR=$(pwd)
source ./sync_helpers.sh
DOCS_NAME=onboarding

DOCS_DIR_TARGET=dsource-onboarding
DOCS_DIR=$CURRENT_DIR/$DOCS_DIR_TARGET/docs

main() {
    download_docs_source

    copy_over_core

    fix_references
    # fix_components
}

# == HELPER FUNCTIONS ==
unsafe_cleanup_ibc_go() {
    # useful for testing this script locally and resetting state
    rm -rf ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs ./static/img/$DOCS_NAME/ ./src/components/$DOCS_NAME/
    rm -rf ./$DOCS_DIR ./${DOCS_NAME}_versions.json
}


download_docs_source() {
    # Downloads documentation source for the repo
    git -C "$DOCS_DIR_TARGET" pull || git clone --depth 1 https://github.com/rollchains/spawn.git $DOCS_DIR_TARGET

    if [ -z "$DOCS_NAME" ]; then
        echo "DOCS_NAME is unset. Set it to the name of the docs you are syncing (i.e. ibc-go)."
        panic
    fi

    mkdir -p ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs ./static/img/$DOCS_NAME/
}

copy_over_core() {
    # docs
    cp -r $DOCS_DIR/docs ./${DOCS_NAME}

    # versioned docs
    cp $DOCS_DIR/versions.json ./${DOCS_NAME}_versions.json
    cp -r $DOCS_DIR/versioned_sidebars/* ./${DOCS_NAME}_versioned_sidebars
    cp -r $DOCS_DIR/versioned_docs/* ./${DOCS_NAME}_versioned_docs

    # core
    cp $DOCS_DIR/sidebars.js ./${DOCS_NAME}/sidebars.js

    # images
    cp -r $DOCS_DIR/static/img/* ./static/img/${DOCS_NAME}/
}

fix_references() {
    # update component import references
    # replace "./src/components/${DOCS_NAME}" "static/img/" "static/img/${DOCS_NAME}/"

    replace "./${DOCS_NAME}_versioned_docs" '<!-- markdown-link-check-disable -->' ''
    replace "./${DOCS_NAME}_versioned_docs" '<!-- markdown-link-check-enable -->' ''
}

# == MAIN ==
main
