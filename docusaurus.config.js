// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Happy Hacking Space - Writings',
  tagline: 'Happy Hacking Space',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://happyhackingspace.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/writings',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'happyhackingspace', // Usually your GitHub org/user name.
  projectName: 'writings', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         
        },
        blog: false,
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Happy Hacking Space - Writings',
      logo: {
        alt: 'Happy Hacking Space',
        src: 'img/hhs-white.avif',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          href: 'https://github.com/happyhackingspace',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     // {
        //     //   label: 'Tutorial',
        //     //   to: '/',
        //     // },
        //   ],
        // },
        {
          title: 'Community',
          items: [
           
            {
              label: 'Discord',
              href: 'https://discord.gg/y53dY3C8',
            },
            {
              label: 'X',
              href: 'https://x.com/happyhackingspace',
            },
            {
              label:"Github",
              href:"https://github.com/happyhackingspace"
            }
          ],
        },
        {
          title: 'More',
          items: [
           
            {
              label: 'GitHub',
              href: 'https://github.com/happyhackingspace',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Happy Hacking Space`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark', // Set the default theme to dark
      disableSwitch: false, // Allow toggling between themes (set to true to disable toggling)
      respectPrefersColorScheme: false, // Ignore system color scheme preferences
    },
  }),
};

export default config;
