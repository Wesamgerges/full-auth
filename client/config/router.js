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

module.exports = {
    middleware: ['auth'],
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'login',
        path: '/login',
        component: resolve(__dirname, '../pages/auth/login.vue')
      })
    }
}