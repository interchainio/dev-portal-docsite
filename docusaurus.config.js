// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const validDocs = findValidDocsAndReturnIDsArray();
console.log("Valid docs folders found: ", validDocs);

function mapValidPluginsToContentDocs(docs) {
  return docs.map((id) => {
    return getPluginContentDocs(id);
  });
}

function mapValidPluginsToDropDownVersions(docs) {
  return docs.map((id) => {
    return getPluginDropDownVersions(id);
  });
}

var baseURL = "/"
if (process.env.IS_GH_PAGES) {
  baseURL = "/dev-portal-docsite/"
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Interchain Stack",
  tagline: "Your gateway into your Interchain future",
  url: "https://docs-interchain.io", // TODO:
  baseUrl: baseURL,
  onBrokenLinks: "warn", // TODO: throw for prod
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "interchainio", // Usually your GitHub org/user name.
  projectName: "dev-portal-docsite", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: "docs", // TODO: change this to be onboarding?
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/interchainio/dev-portal-docsite/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    // !NOTE: docusaurus/plugin-client-redirects does not work with this version of docusaurus. Check src/theme/NotFound.js for a workaround
    ...mapValidPluginsToContentDocs(validDocs),
    [
      // requires cheerio 1.0.0-rc.12, 1.0.0 is API breaking; https://github.com/cmfcmf/docusaurus-search-local/pull/218
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    ],
    // [
    //   "@gracefullight/docusaurus-plugin-microsoft-clarity",
    //   { projectId: "of10fgfl3n" }, // TODO: change to proper project ID @ clarity.microsoft.com
    // ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("postcss-import"));
          postcssOptions.plugins.push(require("tailwindcss/nesting"));
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'in_progress_website',
        content:
          'The Interchain Stack Docsite is in MVP state; please submit comments with the feedback button. The Ask AI button is also very powerful.',
        backgroundColor: '#20232a',
        textColor: '#fff',
        isCloseable: true,
      },
      navbar: {
        logo: {
          alt: "Interchain Docs",
          src: "img/interchain_logo.svg",
          href: "/",
        },
        items: [
          // new items require updating:
          {
            type: "doc",
            position: "left",
            docId: "intro",
            label: "Onboard",
          },
          {
            to: "/ibc-go", // To highlight the navbar item, you must link to a document, not a top-level directory
            position: "left",
            label: "IBC-Go",
            activeBaseRegex: `/ibc-go/`,
          },
          {
            to: "/cosmos-sdk/learn",
            position: "left",
            label: "CosmosSDK",
            activeBaseRegex: `/cosmos-sdk/`,
          },
          {
            // TODO:
            // to: '/cometbft',
            to: 'https://docs.cometbft.com/',
            position: 'left',
            label: 'CometBFT',
            activeBaseRegex: `/cometbft/`,
          },
          {
            // TODO:
            // to: '/cosmwasm',
            to: 'https://docs.cosmwasm.com/',
            position: 'left',
            label: 'CosmWasm',
            activeBaseRegex: `/cosmwasm/`,
          },
          // Version drop downs are merged via the theme/NavBarItem/DocsVersionDropdownNavbarItem.js
          ...mapValidPluginsToDropDownVersions(validDocs),
          {
            href: "https://github.com/interchainio/dev-portal-docsite/",
            html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="github-icon">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.300049C5.4 0.300049 0 5.70005 0 12.3001C0 17.6001 3.4 22.1001 8.2 23.7001C8.8 23.8001 9 23.4001 9 23.1001C9 22.8001 9 22.1001 9 21.1001C5.7 21.8001 5 19.5001 5 19.5001C4.5 18.1001 3.7 17.7001 3.7 17.7001C2.5 17.0001 3.7 17.0001 3.7 17.0001C4.9 17.1001 5.5 18.2001 5.5 18.2001C6.6 20.0001 8.3 19.5001 9 19.2001C9.1 18.4001 9.4 17.9001 9.8 17.6001C7.1 17.3001 4.3 16.3001 4.3 11.7001C4.3 10.4001 4.8 9.30005 5.5 8.50005C5.5 8.10005 5 6.90005 5.7 5.30005C5.7 5.30005 6.7 5.00005 9 6.50005C10 6.20005 11 6.10005 12 6.10005C13 6.10005 14 6.20005 15 6.50005C17.3 4.90005 18.3 5.30005 18.3 5.30005C19 7.00005 18.5 8.20005 18.4 8.50005C19.2 9.30005 19.6 10.4001 19.6 11.7001C19.6 16.3001 16.8 17.3001 14.1 17.6001C14.5 18.0001 14.9 18.7001 14.9 19.8001C14.9 21.4001 14.9 22.7001 14.9 23.1001C14.9 23.4001 15.1 23.8001 15.7 23.7001C20.5 22.1001 23.9 17.6001 23.9 12.3001C24 5.70005 18.6 0.300049 12 0.300049Z" fill="currentColor"/>
            </svg>
            `,
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {},
        //   {
        //     items: [
        //       {
        //         html: `<a href="https://github.com/cosmos"><img src="/img/cosmossdk-brandmark.svg" alt="Cosmos-SDK"></a>`,
        //       },
        //       {
        //         html: `<a href="https://github.com/cosmos/ibc-go"><img src="/img/ibc-brandmark.svg" alt="IBC-Go"></a>`,
        //       },
        //     ],
        //   },
          {
            title: "Stack Components",
            items: [
              {
                label: "IBC-Go",
                href: "https://github.com/cosmos/ibc-go",
              },
              {
                label: "CosmosSDK",
                href: "https://github.com/cosmos/cosmos-sdk",
              },
              {
                label: "CometBFT",
                href: "https://github.com/cometbft/cometbft",
              },
              {
                label: "CosmWasm",
                href: "https://github.com/CosmWasm/cosmwasm",
              },
              {
                label: "Go Relayer",
                href: "https://github.com/cosmos/relayer",
              },
              {
                label: "Hermes Relayer",
                href: "https://hermes.informal.systems/",
              },
              {
                label: "IBC-rs",
                href: "https://github.com/cosmos/ibc-rs",
              },
              {
                label: "Interchaintest",
                href: "https://github.com/strangelove-ventures/interchaintest",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/interchain",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/interchain_io",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@interchain_io",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                href: "https://interchain.io/privacy",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} <a href="https://interchain.io/">Interchain Foundation</a>. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: [
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "be413c15-3002-497e-9e30-676ea0039a9e",
      "data-project-name": "InterchainStack",
      "data-project-color": "#FFF",
      "data-modal-disclaimer": "InterchainGPT is a fine-tuned LLM for the Interchain with access to Interchain Stack developer documentation and resources. Please note that answers are generated by an AI so please use your best judgement before implementing",
      "data-modal-image":
        "img/InterchainGPT-Icon.svg",
      "data-project-logo":
        "img/InterchainGPT-Icon.svg",
      "data-button-text-color": "#000",
      "data-user-analytics-fingerprint-enabled": "true",
      async: true,
    },
  ]
};

function getPluginContentDocs(id) {
  return [
    "@docusaurus/plugin-content-docs",
    {
      id: id,
      path: id, // must match: plugin-id
      routeBasePath: id, // must match: plugin-id
      sidebarPath: require.resolve(`./${id}/sidebars.js`),
      exclude: ["**/*.template.md"],
    },
  ];
}

function getPluginDropDownVersions(id) {
  return {
    type: "docsVersionDropdown",
    docsPluginId: id, // must match: plugin-id and the url slug (www.com/ibc-go)
    position: "right",
    dropdownActiveClassDisabled: true,
  };
}

function findValidDocsAndReturnIDsArray() {
  const fs = require("fs");
  const path = require("path");
  const dirs = fs.readdirSync("./");

  const validDocs = [];
  dirs.forEach((dir) => {
    if (
      fs.existsSync(path.join(dir, "sidebars.js")) &&
      fs.existsSync(path.join(dir, "docs"))
    ) {
      if (dir.startsWith("dsource-")) {
        return;
      }

      validDocs.push(dir);
    }
  });
  return validDocs;
}

module.exports = config;
