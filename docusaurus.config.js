// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const validDocs = findValidDocsAndReturnIDsArray();
console.log('Valid docs folders found: ', validDocs);

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

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Interchain Stack',
  tagline: 'Your gateway into your Interchain future',
  url: 'https://docs.interchain.io',
  baseUrl: '/',
  onBrokenLinks: 'warn', // TODO: throw for prod
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
    // !NOTE: docusaurus/plugin-client-redirects does not work with this version of docusaurus. Check src/theme/NotFound.js for a workaround
    ...mapValidPluginsToContentDocs(validDocs),
    [ // requires cheerio 1.0.0-rc.12, 1.0.0 is API breaking; https://github.com/cmfcmf/docusaurus-search-local/pull/218
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
      },
    ],
    // [
    //   "@gracefullight/docusaurus-plugin-microsoft-clarity",
    //   { projectId: "of10fgfl3n" }, // TODO: change to proper project ID @ clarity.microsoft.com
    // ],
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
          {
            to: '/cometbft',
            position: 'left',
            label: 'Comet BFT',
            activeBaseRegex: `/cometbft/`,
          },
          // Version drop downs are merged via the theme/NavBarItem/DocsVersionDropdownNavbarItem.js
          ...mapValidPluginsToDropDownVersions(validDocs),
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

function getPluginContentDocs(id) {
  return [
    '@docusaurus/plugin-content-docs',
    {
      id: id,
      path: id, // must match: plugin-id
      routeBasePath: id, // must match: plugin-id
      sidebarPath: require.resolve(`./${id}/sidebars.js`),
      exclude: ["**/*.template.md"],
    },
  ]
}

function getPluginDropDownVersions(id) {
  return {
    type: 'docsVersionDropdown',
    docsPluginId: id, // must match: plugin-id and the url slug (www.com/ibc-go)
    position: 'right',
    dropdownActiveClassDisabled: true,
  }
}

function findValidDocsAndReturnIDsArray() {
  const fs = require('fs');
  const path = require('path');
  const dirs = fs.readdirSync('./');

  const validDocs = [];
  dirs.forEach(dir => {
    if (fs.existsSync(path.join(dir, 'sidebars.js')) && fs.existsSync(path.join(dir, 'docs'))) {
      if (dir.startsWith('dsource-')) {
        return;
      }

      validDocs.push(dir);
    }
  });
  return validDocs;
}

module.exports = config;
