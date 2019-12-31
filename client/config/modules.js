'use strict'
/*
|--------------------------------------------------------------------------
| Modules Configuration
|--------------------------------------------------------------------------
|
| This is general purpose file to define configuration for Nuxt.js modules.
|
*/
module.exports =  [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth', 
    'nuxt-fontawesome',
    ['@nuxtjs/dotenv', { /* module options */ }],
]