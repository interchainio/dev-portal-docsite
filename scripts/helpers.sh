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
__checkout_commit() {
    if [ -n "$2" ]; then
        echo "Checking out $1 commit $2"
        git -C $1 fetch --depth 1 origin $2
        git -C $1 reset --hard $2
    fi
}

# download_cometbft dsource-cometbft 978b84614992cb009b2e37500b6b3a598665a535
download_cometbft() {
    echo "Downloading cometbft at $1"
    git -C "$1" pull || git clone --depth 1 https://github.com/cometbft/cometbft.git $1
    __checkout_commit $1 $2
}

# download_ibcgo dsource-ibcgo <commit>
download_ibcgo() {
    echo "Downloading ibc-go at $1"
    git -C "$1" pull || git clone --depth 1 https://github.com/cosmos/ibc-go.git $1
    __checkout_commit $1 $2
}

download_onboarding() {
    echo "Downloading onboarding at $1"
    git -C "$1" pull || git clone --depth 1 https://github.com/rollchains/spawn.git $1
    __checkout_commit $1 $2
}

download_cosmossdk() {
    echo "Downloading cosmos-sdk-docs at $1"
    git -C "$1" pull || git clone --depth 1 https://github.com/cosmos/cosmos-sdk-docs.git $1
    __checkout_commit $1 $2
}

download_cosmossdk_main() {
    echo "Downloading cosmos-sdk at $1"
    git -C "$1" pull || git clone --depth 1 https://github.com/cosmos/cosmos-sdk.git $1
    __checkout_commit $1 $2
}
