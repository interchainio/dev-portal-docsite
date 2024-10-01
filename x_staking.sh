# SDK team needs multiple nested version docs.


MODULE_NAME="x-staking"

echo '[
  "v2",
  "v1"
]' > ${MODULE_NAME}_versions.json


# Sidebars
mkdir -p ${MODULE_NAME}_versioned_sidebars
echo '{"defaultSidebar": [{"type":"autogenerated","dirName": "."}]}' > ${MODULE_NAME}_versioned_sidebars/version-v2-sidebars.json
echo '{"defaultSidebar": [{"type":"autogenerated","dirName": "."}]}' > ${MODULE_NAME}_versioned_sidebars/version-v1-sidebars.json

# Versioned Docs
mkdir -p ${MODULE_NAME}_versioned_docs/version-{v2,v1}

echo '---
slug: /
---
# Index Docs for v1' > ${MODULE_NAME}_versioned_docs/version-v1/00-index.md

echo '---
slug: /
---
# Index Docs for v2' > ${MODULE_NAME}_versioned_docs/version-v2/00-index.md

mkdir -p ${MODULE_NAME}/docs
echo -e "---
slug: /
---
# Index docs for main" > ${MODULE_NAME}/docs/00-index.md


# echo default sidebar into x-core
echo '/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import(@docusaurus/plugin-content-docs).SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  defaultSidebar: [{ type: "autogenerated", dirName: "." }],
};

module.exports = sidebars;
' > ${MODULE_NAME}/sidebars.js

# TODO: temp hack to have a list of modules
echo '## Modules
- [x/staking](../../../x-staking)
' >> cosmos-sdk/docs/learn/00-index.md
