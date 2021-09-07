'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Morgan-Design - %s',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Textile Company Website'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },

  buildModules: [
    '@nuxtjs/color-mode',
    'nuxt-windicss',
    '@nuxtjs/svg'
  ],

  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ''
  },
  router: {
    linkExactActiveClass: 'text-yellow-700 border-b-4 border-b-yellow-500'
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    '~assets/sass/global.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources'),

  telemetry: false
}
