// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import { manualSidebar } from './src/manual-sidebar.mjs'

export default defineConfig({
  site: 'https://docs.gingerwallet.io',
  base: '/',
  redirects: {
    '/why-ginger/difference': '/why-ginger/',
  },

  integrations: [
    starlight({
      title: 'GingerWallet Documentation',
      description: 'Documentation for GingerWallet',
      lastUpdated: false,

      logo: {
        src: './src/assets/logo.svg',
        // The logo is a wordmark that reads on both themes, so it replaces the
        // site title (the VuePress theme hid `.vp-site-name` for the same reason).
        replacesTitle: true,
      },

      favicon: '/ginger-icon.png',

      head: [
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '16x16 24x24 32x32 48x48 256x256' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/ginger-icon.png' } },
      ],

      // Pagefind powers the search box. It is on by default; kept explicit so the
      // dependency is obvious.
      pagefind: true,

      customCss: ['./src/styles/custom.css'],

      // Adds the top-level section links to the header (the old VuePress navbar).
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        Head: './src/components/Head.astro',
        Search: './src/components/Search.astro',
        Hero: './src/components/Hero.astro',
        SocialIcons: './src/components/SocialIcons.astro',
      },

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/GingerPrivacy/GingerWallet',
        },
      ],

      sidebar: manualSidebar(),
    }),
  ],
})
