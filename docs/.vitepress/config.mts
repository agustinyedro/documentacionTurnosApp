import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang:'es-AR',
  title: "TurnosApp",
  description: "Aqui encontraras toda la documentacion sobre la app",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Backend',
        items: [
          { text: 'Inicio', link: '/inicioBack' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        collapsed: true,
      },
      {
        text: 'Frontend',
        items: [
          { text: '', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        collapsed: true
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/agustinyedro' },
      { icon: 'twitter', link: 'https://twitter.com/Agustinyedro' }
    ],
    footer: {
      message: 'Publicado bajo <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">Licencia MIT</a>.',
      copyright: 'Derechos de autor © 2025-present <a href="https://github.com/agustinyedro">Agustin Yedro</a>'
    }
  }
})
