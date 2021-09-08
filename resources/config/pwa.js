/* =========================================================================================
 File Name: pwa.js
 Description: Nuxt PWA configuration
 ========================================================================================== */
module.exports = {
  icon: {
    fileName: 'icon.png'
  },
  manifest: {
    lang: 'en-US',
    name: process.env.APP_NAME,
    short_name: process.env.APP_SHORT_NAME,
    description: process.env.APP_DESCRIPTION,
    categories: ['Textile', 'Fashion'],
    theme_color: process.env.THEME_COLOR,
    background_color: '#fff',
    crossorigin: 'use-credentials',
    orientation: 'portrait-primary'
  }
};
