'use strict';

const resolve = require('path').resolve;
const {
  axios,
  build,
  buildModules,
  bootstrapVue,
  css,
  colorMode,
  head,
  modules,
  pwa,
  styleResources
} = require('../resources/config');

module.exports = {
  axios,

  build,

  buildModules,

  bootstrapVue,

  colorMode,

  modules,
  /*
   ** Headers of the page
   */
  head,
  /*
   ** Global CSS
   */
  css,
  /*
   ** Auto import components
   */
  components: false,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#744d82' },
  /*
   ** Point to resources
   */
  srcDir: resolve(__dirname, '..', 'resources'),

  pwa,

  styleResources,

  telemetry: false
};
