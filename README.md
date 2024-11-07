# Interchain Stack Documentation

Built with [Docusaurus 2](https://docusaurus.io/).

An aggregation of Interchain stack components documentation into 1 place.

## Installation

Simply `fork` this repository, then:

```
$ npm install
```

## Sync Documentation

```bash
# Grabs the latest upstream repo commits to your local instance
$ make pull-latest

# Synchronizes the latest.json commits (from the previous command)
# to the documentation files.
$ make sync-docs
```

## Local Development

```
$ npm start
```

## Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
