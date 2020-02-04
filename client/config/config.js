console.log(process.env.API_BASE_URL)

import { mode, env, server, head, extractCSS } from './app.js'
import modules from './modules.js'
import build from './build.js'
import auth from './auth.js'
import router from './router.js'
import axios from './axios.js'

import bootstrapVue from './bootstrapVue.js'
import fontawesome from './fontawesome.js'

import css from './css.js'
// import plugins from './plugins.js'
console.log(auth)
export default {
    modules,
    mode,
    build,
    
    auth,
    router,
    //plugins,
    axios,
    env, 
    server,
    head,
    css,
    extractCSS,
    bootstrapVue,
    fontawesome,
}