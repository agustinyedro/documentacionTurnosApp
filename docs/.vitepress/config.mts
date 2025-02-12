import { defineConfig,type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "es-AR",
  title: "TurnosApp",
  
  description: "Aqui encontraras toda la documentacion sobre la app",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Frontend", link: "/front/Frontend" },
      { text: "Backend", link: "/back/Backend" },
    ],
    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Backend",
        items: [{ text: "Inicio", link: "/inicioBack" }],
        collapsed: true,
      },
      {
        text: "Frontend",
        items: [
          { text: "Inicio", link: "/front/Frontend" },
          { text:"Calendario", link: "/front/calendario"},
          { text: "Consultorio", link: "/front/consultorio" },
        ],
        collapsed: true,
      },
      {
        text: "Tareas",
        items: [
          { text: "Tarea 1", link: "/tarea1" },
          { text: "Tarea 2", link: "/tarea2" },
          { text: "Tarea 3", link: "/tarea3" },
        ],
        collapsed: true,

      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/agustinyedro" },
      { icon: "twitter", link: "https://twitter.com/Agustinyedro" },
    ],
    footer: {
      message:
        'Publicado bajo <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">Licencia MIT</a>.',
      copyright:
        'Derechos de autor © 2025-presente <a href="https://github.com/agustinyedro">Agustin Yedro</a> & <a href="">Maximiliano Pedano</a>',
    },
    lastUpdated: {
      text: 'Actualizado en',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
 
  },
});
