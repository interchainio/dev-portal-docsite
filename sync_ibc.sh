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

    # find all directories in ./ibc-go_versioned_docs
    IBC_DIRS=`find ./ibc-go_versioned_docs/ -maxdepth 1 -name "version-*" -type d -exec echo {} \;`
    for dir in $IBC_DIRS; do
        cp -r $DOCS_DIR/architecture $dir/
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

    # TODO: wip of fixing here
    # Relative path replacements (if a file is at the root of the docs, it is just ../../ibc-go/architecture, if it is nested 1 level, it is ../../../ibc-go/architecture, etc.
    FILES=`find ./ibc-go_versioned_docs -type f -name "*.md"`
    for file in $FILES; do
        # RELATIVE_PATH=$(echo $file | grep -o "/" | wc -l)
        # # remove 1 from the relative path since that is the file itself
        # RELATIVE_PATH=$((RELATIVE_PATH-1))

        # echo "$RELATIVE_PATH : $file"

        # NEW_STRING=$(printf "../%.0s" $(seq 1 $RELATIVE_PATH))
        # NEW_STRING=${NEW_STRING%?} # remove the last /

        sed -i "s#(/architecture/#(/ibc-go/architecture/#g" $file
    done

    FILES=`find ./ibc-go -type f -name "*.md"`
    for file in $FILES; do
        RELATIVE_PATH=$(echo $file | grep -o "/" | wc -l)
        # remove 2 (since we dont need to reference the ibc-go directory like we do in the versioned docs)
        RELATIVE_PATH=$((RELATIVE_PATH-2))

        # if ! grep -q "(/architecture" $file ; then
        #     continue
        # fi

        # echo "$RELATIVE_PATH : $file"

        # NEW_STRING=$(printf "../%.0s" $(seq 1 $RELATIVE_PATH))
        # NEW_STRING=${NEW_STRING%?} # remove the last /

        sed -i "s#(/architecture/#(/ibc-go/architecture/#g" $file
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
        find ./ibc-go -maxdepth 3 -type f -exec sed -i "s#$OLD_PATH#$NEW_PATH#g" {} \;
    done
}

# == MAIN ==
main
