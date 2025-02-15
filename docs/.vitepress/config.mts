import { defineConfig,type DefaultTheme } from "vitepress";


// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: "/documentacionTurnosApp/",
  lang: "es-AR",
  title: "TurnosApp",
  ignoreDeadLinks: true,
  description: "Aqui encontraras toda la documentacion sobre la app",

  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    search: {
      provider: "local",
    },

    sidebar: {
      '/front/': { base: '/front/', items: sidebarFront() },  
      '/back/': { base: '/back/', items: sidebarBack() },
      '/tareas/': { base: '/tareas/', items: sidebarTareas() },
      '/apis/': { base: '/apis/', items: sidebarApi() },
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Siguiente'
    },
    
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
    editLink: {
      pattern: 'https://github.com/agustinyedro/documentacionTurnosApp/edit/main/docs/:path',
      text: 'Editar esta página en GitHub'
    },
    outline: {
      level: 'deep',
      label: 'En esta página'
    },
    lastUpdated: {
      text: 'Ultima actualizacion',
      formatOptions: {
        dateStyle: 'short',

      }
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "Inicio", link: "/" },
    { text: "Frontend", link: "/front/inicioFront", activeMatch: "/front/" },
    { text: "Backend", link: "/back/inicioBack", activeMatch: "/back/" },
    { text:"API", link: "/apis/inicio", activeMatch: "/apis/" },
    { text: "Tareas", link: "/tareas/tareasIndex", activeMatch: "/tareas/" },
  ]
}

function sidebarFront(): DefaultTheme.SidebarItem[] { 
  return [
    {
      text: "Frontend",
      items: [
        { text: "Inicio", link: "/" },
        { text: "Inicio Fron", link: "inicioFront" }, // Correcto, apunta a front/index.md
        { text: "Calendario", link: "calendario" }, // Se agrega el prefijo correcto
        { text: "Consultorio", link: "consultorio" }, // Se agrega el prefijo correcto
      ],
      collapsed: false
    },
  ];
}

function sidebarBack(): DefaultTheme.SidebarItem[] { 
  return [
    {
      text: "Backend",
      items: [
        { text: "Inicio", link: "inicioBack" },
        { text: "Rutas", link: "rutas" },
        { text: "Auth", link: "auth" },
      ],
    },
  ]
}
function sidebarTareas(): DefaultTheme.SidebarItem[] { 
  return [
    {
      text: "Tareas",
      items: [
        { text: "Tarea 1", link: "/tarea1" },
        { text: "Tarea 2", link: "/tarea2" },
        { text: "Tarea 3", link: "/tarea3" },
      ],
    },
  ]
}

function sidebarApi(): DefaultTheme.SidebarItem[] { 
  return [
    {
      text: "API",
      items: [
        { text: "Inicio", link: "inicio" },
        { text: "Auth", link: "auth" },
        { text: "Tratamientos", link: "tratamientos" },
        { text: "Pacientes", link: "pacientes" },
        { text: "Turnos", link: "turnos" },
        { text: "Consultorios", link: "consultorios" },
        { text:"Whatsapp", link: "whatsapp" },
      ],
    },
  ]
}