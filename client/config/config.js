require('dotenv').config()

import build from './build.js'
import auth from './auth.js'
import router from './router.js'
import axios from './axios.js'
import { mode, env, server, head, extractCSS } from './app.js'
import bootstrapVue from './bootstrapVue.js'
import fontawesome from './fontawesome.js'
import modules from './modules.js'
import css from './css.js'
import plugins from './plugins.js'

export default {
    mode,
    build,
    modules,
    auth,
    router,
    plugins,
    axios,
    env, 
    server,
    head,
    css,
    extractCSS,
    bootstrapVue,
    fontawesome,
}