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
    rm -rf ./$DOCS_DIR
}


download_docs_source() {
    # Downloads documentation source for the repo
    git -C "$DOCS_DIR_TARGET" pull || git clone --depth=1 https://github.com/cosmos/ibc-go.git $DOCS_DIR_TARGET

    if [ -z "$DOCS_NAME" ]; then
        echo "DOCS_NAME is unset. Set it to the name of the docs you are syncing (i.e. ibc-go)."
        panic
    fi

    # mkdir -p ./ibc-go ./ibc-go_versioned_sidebars ./ibc-go_versioned_docs ./static/img/ibc-go/ ./src/components/ibc-go/
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

    # core
    cp $DOCS_DIR/sidebars.js ./ibc-go/sidebars.js
    cp $DOCS_DIR/src/components/*.jsx ./src/components/ibc-go/

    # images
    cp -r $DOCS_DIR/static/img/* ./static/img/ibc-go/

    # update paths
    replace "./src/components/ibc-go" "static/img/" "static/img/ibc-go/"


}

fix_references() {
    OLD="../../../../docs/"; NEW="../../../../ibc-go/docs/"
    replace "./ibc-go_versioned_docs" "$OLD" "$NEW"
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




# To the core of latest (TBH maybe make the tutorials version specific?)

# replace reference:  -> ../../../../ibc/docs/

# find ./ibc-go_versioned_docs -type f -exec sed -i 's/..\/..\/..\/..\/docs\//..\/..\/..\/..\/ibc-go\/docs\//g' {} \;


# == Copy and replace images ==


# == Replace component patches ==

