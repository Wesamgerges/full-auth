'use strict'

/*
|--------------------------------------------------------------------------
| Axios Configuration
|--------------------------------------------------------------------------
|
| This is general purpose file to define configuration for axios.
| The below config is for the ally provider. Make sure to save it inside
| config/axios.js file.
|
|
*/
/*
** Axios module configuration
** See https://axios.nuxtjs.org/options
*/
module.exports = {
    baseURL: process.env.API_BASE_URL
}