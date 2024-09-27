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
        find $location -maxdepth 5 -type f -exec sed -i "s#$old#$new#g" {} \;
    else
        find $location -maxdepth 5 -type f -not -path "*$ignore_path*" -exec sed -i "s#$old#$new#g" {} \;
    fi
}

panic() {
    kill -INT $$
}
