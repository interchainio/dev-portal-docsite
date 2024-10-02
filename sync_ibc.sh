#!/bin/bash
#
# To run this script, ensure you have setup the docusaurus.config.js first for new repos.
# This then migrates it over to here.
#

CURRENT_DIR=$(pwd)
source ./sync_helpers.sh
DOCS_NAME=ibc-go

DOCS_DIR_TARGET=dsource-ibc-go
DOCS_DIR=$CURRENT_DIR/$DOCS_DIR_TARGET/docs


main() {
    download_docs_source

    copy_over_core

    fix_references
    fix_components
}

# == HELPER FUNCTIONS ==
unsafe_cleanup_ibc_go() {
    # useful for testing this script locally and resetting state
    rm -rf ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs ./static/img/$DOCS_NAME/ ./src/components/$DOCS_NAME/
    rm -rf ./$DOCS_DIR ./${DOCS_NAME}_versions.json
}


download_docs_source() {
    # Downloads documentation source for the repo
    git -C "$DOCS_DIR_TARGET" pull || git clone --depth 1 https://github.com/cosmos/ibc-go.git $DOCS_DIR_TARGET

    if [ -z "$DOCS_NAME" ]; then
        echo "DOCS_NAME is unset. Set it to the name of the docs you are syncing (i.e. ibc-go)."
        panic
    fi

    mkdir -p ./$DOCS_NAME ./${DOCS_NAME}_versioned_sidebars ./${DOCS_NAME}_versioned_docs ./static/img/$DOCS_NAME/ ./src/components/$DOCS_NAME/
}


copy_over_core() {
    # docs
    cp -r $DOCS_DIR/docs ./ibc-go
    cp -r $DOCS_DIR/architecture ./ibc-go
    cp -r $DOCS_DIR/tutorials ./ibc-go

    # versioned docs
    cp $DOCS_DIR/versions.json ./ibc-go_versions.json
    cp -r $DOCS_DIR/versioned_sidebars/* ./ibc-go_versioned_sidebars
    cp -r $DOCS_DIR/versioned_docs/* ./ibc-go_versioned_docs

    cp -r $DOCS_DIR/architecture ./ibc-go_versioned_docs/version-v4.6.x
    cp -r $DOCS_DIR/architecture ./ibc-go_versioned_docs/version-v5.4.x
    cp -r $DOCS_DIR/architecture ./ibc-go_versioned_docs/version-v6.3.x
    cp -r $DOCS_DIR/architecture ./ibc-go_versioned_docs/version-v7.8.x
    cp -r $DOCS_DIR/architecture ./ibc-go_versioned_docs/version-v8.5.x

    # core
    cp $DOCS_DIR/sidebars.js ./ibc-go/sidebars.js
    cp $DOCS_DIR/src/components/*.jsx ./src/components/ibc-go/

    # images
    cp -r $DOCS_DIR/static/img/* ./static/img/ibc-go/

    # update component import references
    replace "./src/components/ibc-go" "static/img/" "static/img/ibc-go/"
}

fix_references() {
    OLD="../../../../docs/"; NEW="../../../../ibc-go/docs/"
    replace "./ibc-go_versioned_docs" "$OLD" "$NEW"

    # TODO: smart find would be very nice here (get the parent of the folder and search for relative position of the architecture/ directory)

    replace "./ibc-go/docs" "(/architecture" "(../../architecture"
    replace "./ibc-go/middleware" "(/architecture" "(../../architecture"

    # replace "./ibc-go_versioned_docs" "(/architecture" "(../../architecture" # TODO: this may be wrong

    replace "./ibc-go_versioned_docs/version-v8.5.x/*/" "(../../architecture" "(../architecture"
    replace "./ibc-go_versioned_docs/version-v7.8.x/*/" "(../../architecture" "(../architecture"

    # added `slug: /ibc-go/architecture/`` to architecture/ 00-index
}

fix_components() {
    for file in ./src/components/ibc-go/*.jsx; do
        # HighlightBox.jsx
        BASE_NAME=$(basename $file)
        # HighlightBox
        COMPONENT_NAME=$(echo $BASE_NAME | cut -d'.' -f1)

        # change to the new format for these components
        OLD_PATH="src/components/$COMPONENT_NAME"
        NEW_PATH="src/components/ibc-go/$COMPONENT_NAME"
        find ./ibc-go -maxdepth 3 -type f -exec sed -i "s#$OLD_PATH#$NEW_PATH#g" {} \;
    done
}

# == MAIN ==
main
