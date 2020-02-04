require('dotenv').config()
var config = require('./config/config.js')

export default {
  modules:      config.modules,
  mode:         config.mode,
  head:         config.head,
  loading:      config.loading,
  css:          config.css,
  extractCSS:   config.extractCSS,
  env:          config.env,
  server:       config.server,
  //plugins:      config.plugins,
  bootstrapVue: config.bootstrapVue,
  fontawesome:  config.fontawesome,
  axios:        config.axios,
  router:       config.router,
  auth:         config.auth,
  build:        config.build,
}