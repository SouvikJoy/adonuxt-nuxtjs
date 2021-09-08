'use strict';

const resolve = require('path').resolve;
const {
  axios,
  build,
  helmet,
  buildModules,
  css,
  colorMode,
  head,
  modules,
  pwa,
  styleResources,
  render
} = require('../resources/config');

module.exports = {
  axios,

  build,

  helmet,

  buildModules,

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
  loading: { color: '#1b2529' },
  /*
   ** Point to resources
   */
  srcDir: resolve(__dirname, '..', 'resources'),

  pwa,

  styleResources,

  render,

  telemetry: false
};
