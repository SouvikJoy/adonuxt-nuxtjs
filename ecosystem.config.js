module.exports = {
  apps: [
    {
      name: 'Morgan Design',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
};
