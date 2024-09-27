// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Interchain Stack',
  tagline: 'Your gateway into your Interchain future',
  url: 'https://docs.interchain.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'interchainio', // Usually your GitHub org/user name.
  projectName: 'dev-portal-docsite', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs', // TODO: change this to be onboarding?
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/interchainio/dev-portal-docsite/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ibc-go',
        path: 'ibc-go', // must match: plugin-id
        routeBasePath: 'ibc-go', // must match: plugin-id
        sidebarPath: require.resolve('./ibc-go/sidebars.js'),
        exclude: ["**/*.template.md"],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cosmos-sdk',
        path: 'cosmos-sdk',
        routeBasePath: 'cosmos-sdk',
        sidebarPath: require.resolve('./cosmos-sdk/sidebars.js'),
        exclude: ["**/*.template.md"],
      },
      // TODO: CosmWasm & cometBFT
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
        docsRouteBasePath: ["/"],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Interchain Docs',
        logo: {
          alt: 'Interchain docs site logo',
          src: 'img/logo.svg',
        },
        items: [
          // Onboarding documentation? (i.e. Spawn, or just quick start guides)
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Onboard',
          },
          {
            to: '/ibc-go',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'IBC-Go',
            activeBaseRegex: `/ibc-go/`,
          },
          {
            to: '/cosmos-sdk/learn',
            position: 'left',
            label: 'Cosmos-SDK',
            activeBaseRegex: `/cosmos-sdk/`,
          },
          // Version drop downs are merged via the theme/NavBarItem/DocsVersionDropdownNavbarItem.js
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'ibc-go', // must match: plugin-id and the url slug (www.com/ibc-go)
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'cosmos-sdk',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/interchainio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // TODO:
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //      label: 'Tutorial',
          //      to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/interchain',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/interchain_io',
              },
              {
                label: 'Github',
                href: 'https://github.com/interchainio',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Interchain Foundation. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
