#!/bin/bash
# This file is sourced in from the others to provide helper functions.

# map of names -> their repo counterparts upstream
# !IMPORTANT: names must match the dsource-<name> variables found in the sync_*.sh scripts
declare -A REPO_PAIRS
REPO_PAIRS[cometbft]="https://github.com/cometbft/cometbft.git"
REPO_PAIRS[ibc-go]="https://github.com/cosmos/ibc-go.git"
REPO_PAIRS[onboarding]="https://github.com/rollchains/spawn.git"
REPO_PAIRS[cosmos-sdk]="https://github.com/cosmos/cosmos-sdk-docs.git"
REPO_PAIRS[cosmos-sdk-main]="https://github.com/cosmos/cosmos-sdk.git"

#
# 'replace' replaces text in files at a given location. it has extra safety checks and makes it prettier
#
# example usage:
# - replace "./cosmos-sdk/docs" "https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/docs" "./img/cosmos-sdk"
# - replace "./cosmos-sdk/docs" "https://raw.githubusercontent.com/cosmos/cosmos-sdk/main/docs" "./img/cosmos-sdk" "ignore_this_dir/"
#
replace() {
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

#
# cp-improved is a wrapper around cp that creates the directory if it doesn't exist
#
cp-improved() {
    if [ ! -d "$2" ]; then
        mkdir -p "$2"
    fi
    cp -R "$1" "$2"
}

#
# panic kills the script if something goes wrong
#
panic() {
    kill -INT $$
}

# --- Downloads ---

#
# __checkout_commit is a 'private' helper function that fetches the latest commit or a specific commit
# depending on the input argument context.
#
__checkout_commit() {
    if [ -n "$2" ]; then
        echo "Checking out $1 commit $2"
        git -C $1 fetch --depth 1 origin $2
        git -C $1 reset --hard $2
    else
        echo "No commit specified for $1, pulling latest"
        git -C $1 fetch --depth 1 origin
        branch=$(git -C $1 rev-parse --abbrev-ref HEAD) # usually main, but just incase
        git -C $1 reset --hard origin/$branch
    fi
}



# download_repo downloads a repo from git using the human name provided (such as ibc-go).
# It then checkouts the commit or latest, depending on if the input arguments are provided
# to do so.
#
# Example usage:
# download_repo cometbft 00f7bda2ef730307370475d77d68685b9cb4dd01
# download_repo cometbft # downloads latest
download_repo() {
    echo "Downloading $1"
    if [ -z "${REPO_PAIRS[$1]}" ]; then
        echo "Repo $1 not found in REPO_PAIRS"
        panic
    fi

    loc="dsource-$1"
    git -C "$loc" pull || git clone --depth 1 ${REPO_PAIRS[$1]} "$loc"
    __checkout_commit "$loc" "$2"
}
