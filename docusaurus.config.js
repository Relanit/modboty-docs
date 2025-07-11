// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ModBoty',
  tagline: 'Добро пожаловать на страницу документации',
  url: 'https://mdocs.relanit.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Relanit', // Usually your GitHub org/user name.
  projectName: 'modboty-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // sidebarCollapsed: false,
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          className: 'logo',
          alt: 'ModBoty',
          src: 'img/logo1.svg',
        },
        items: [
          {
            href: "https://www.donationalerts.com/r/relanit",
            label: "Поддержать разработчика",
            position: 'left'
          },
          {
            href: 'https://github.com/relanit/modboty-docs',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: ' ',
                href: 'https://t.me/modboty',
                className: 'footer-telegram-link'
              },
              {
                label: ' ',
                href: 'https://twitch.tv/modboty',
                className: 'footer-twitch-link'
              },
              {
                label: ' ',
                href: 'https://discordapp.com/users/632210040245452811',
                className: 'header-discord-link'
              },
              {
                label: ' ',
                href: 'https://github.com/relanit',
                className: 'header-github-link',
              },
            ],
          },
        ],
        copyright: ` © ${new Date().getFullYear()} Relanit. Не связано с Twitch.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'Z31MKU62TV',
  
        // Public API key: it is safe to commit it
        apiKey: '976f9eb651c47d3e1d383199c78866d2',
  
        indexName: 'modboty',
  
        // Optional: see doc section below
        contextualSearch: true,

        debug: false,
  
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/modboty-docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        // searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',
      },
      metadata: [{name: 'keywords', content: 'Twitch, бот, модератор, модерация, 7тв, 7tv, команды, чат'}],
    }),
    // themes: [
    //   ['@easyops-cn/docusaurus-search-local', ({hashed: true, language: ["ru", "en"], searchBarShortcutHint: false, indexBlog: false})],
    // ],
};

module.exports = config;
