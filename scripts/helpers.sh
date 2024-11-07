#!/bin/bash
# This file is sourced in from the others to provide helper functions.

# replace replaces text in files at a given location. it has extra safety checks and makes it prettier
replace() {
    # replace "./cosmos-sdk/docs" "https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/docs" "./img/cosmos-sdk"
    # replace "./cosmos-sdk/docs" "https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/docs" "./img/cosmos-sdk" "ignore_this_dir/"
    location=$1
    old=$2
    new=$3
    # optional 4th argument to specify directories to ignore
    ignore_path=$4

    case $location in
        "/" | "$HOME") echo "Invalid location for saftey. -> $location"; panic ;;
        /*) echo "absolute path is not allowed for saftey reasons: $location"; panic ;;
    esac

    if [ $location == ".." ] || [ $location == "../" ] || [ $location == "./" ] || [ $location == "." ]; then
        echo "Invalid location for saftey. -> $location"
        panic
    fi


    # see if $location is a directory or a file
    if [ ! -f $location ] && [ ! -d $location ]; then
        echo "File or directory '$location' does not exist."
        panic
    fi

    echo "Replacing '$old' with '$new' in $location"
    if [ -z "$ignore_path" ]; then
        find "$location" -maxdepth 10 -type f -exec sed -i "s#$old#$new#g" {} \;
    else
        find "$location" -maxdepth 10 -type f -not -path "*$ignore_path*" -exec sed -i "s#$old#$new#g" {} \;
    fi
}

# cp-improved is a wrapper around cp that creates the directory if it doesn't exist
cp-improved() {
    if [ ! -d "$2" ]; then
        mkdir -p "$2"
    fi
    cp -R "$1" "$2"
}

panic() {
    kill -INT $$
}

# --- Downloads ---

download_cometbft() {
    if [ -z "$1" ]; then
        echo "download_cometbft requires 1 argument: download_cometbft \$DOCS_DIR_TARGET"
        panic
    fi
    DOCS_DIR_TARGET=$1
    git -C "$DOCS_DIR_TARGET" pull || git clone --depth 1 https://github.com/cometbft/cometbft.git $DOCS_DIR_TARGET
}

download_ibcgo() {
    if [ -z "$1" ]; then
        echo "download_ibcgo requires 1 argument: download_ibcgo \$DOCS_DIR_TARGET"
        panic
    fi
    DOCS_DIR_TARGET=$1
    git -C "$DOCS_DIR_TARGET" pull || git clone --depth 1 https://github.com/cosmos/ibc-go.git $DOCS_DIR_TARGET
}

download_onboarding() {
    if [ -z "$1" ]; then
        echo "download_onboarding requires 1 argument: download_onboarding \$DOCS_DIR_TARGET"
        panic
    fi
    DOCS_DIR_TARGET=$1
    git -C "$DOCS_DIR_TARGET" pull || git clone --depth 1 https://github.com/rollchains/spawn.git $DOCS_DIR_TARGET
}

download_cosmossdk() {
    if [ -z "$1" ] || [ -z "$2" ]; then
        echo "download_cosmossdk requires 2 arguments: download_cosmossdk \$DOCS_DIR_TARGET \$MAIN_SDK_DIR_TARGET"
        panic
    fi

    DOCS_DIR_TARGET=$1
    MAIN_SDK_DIR_TARGET=$2
    git -C "$DOCS_DIR_TARGET" pull || git clone --depth 1 https://github.com/cosmos/cosmos-sdk-docs.git $DOCS_DIR_TARGET
    git -C "$MAIN_SDK_DIR_TARGET" pull || git clone --depth 1 https://github.com/cosmos/cosmos-sdk.git $MAIN_SDK_DIR_TARGET
}
