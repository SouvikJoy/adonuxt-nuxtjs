'use strict';

const resolve = require('path').resolve;
const {
  axios,
  build,
  helmet,
  buildModules,
  gsap,
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

  gsap,

  colorMode,

  modules,

  head,

  css,

  components: false,

  // loading: '~/components/LoadingBar.vue',

  srcDir: resolve(__dirname, '..', 'resources'),

  pwa,

  styleResources,

  render,

  telemetry: false
};
