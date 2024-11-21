#!/bin/bash
set -e

CURRENT_DIR=$(pwd)
source ./scripts/helpers.sh
DOCS_NAME=ibc-go

DOCS_DIR_TARGET=dsource-ibc-go
DOCS_DIR=$CURRENT_DIR/$DOCS_DIR_TARGET/docs

# required for macos or you get 'sed: RE error: illegal byte sequence'
LC_CTYPE=C
LANG=C

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
    download_repo "ibc-go" "$(jq -r '.ibcgo' <latest.json)"

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
    cp -r $DOCS_DIR/events ./ibc-go
    cp -r $DOCS_DIR/tutorials ./ibc-go

    # versioned docs
    cp $DOCS_DIR/versions.json ./ibc-go_versions.json
    cp -r $DOCS_DIR/versioned_sidebars/* ./ibc-go_versioned_sidebars
    cp -r $DOCS_DIR/versioned_docs/* ./ibc-go_versioned_docs

    # find all directories in ./ibc-go_versioned_docs
    IBC_DIRS=`find ./ibc-go_versioned_docs/ -maxdepth 1 -name "version-*" -type d -exec echo {} \;`
    for dir in $IBC_DIRS; do
        cp -r $DOCS_DIR/architecture $dir/
        cp -r $DOCS_DIR/events $dir/
    done

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

    FILES=`find ./ibc-go_versioned_docs -type f -name "*.md"`
    for file in $FILES; do
        sed -i -e "s#(/architecture/#(/ibc-go/architecture/#g" $file
        sed -i -e "s#(/events/events#(/ibc-go/events/#g" $file
    done

    FILES=`find ./ibc-go -type f -name "*.md"`
    for file in $FILES; do
        sed -i -e "s#(/architecture/#(/ibc-go/architecture/#g" $file
        sed -i -e "s#(/events/events#(/ibc-go/events/#g" $file
    done
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
        find ./ibc-go -maxdepth 3 -type f -exec sed -i -e "s#$OLD_PATH#$NEW_PATH#g" {} \;
    done
}

# == MAIN ==
main
