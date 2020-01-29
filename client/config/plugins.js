'use strict'
/*
|--------------------------------------------------------------------------
| Plugins Configuration
|--------------------------------------------------------------------------
|
| This is general purpose file to define configuration for Nuxt.js Plugins.
| Plugins to load before mounting the App
|
*/
module.exports =  [   
   { src:'~plugins/auth.js', ssr: false }
]