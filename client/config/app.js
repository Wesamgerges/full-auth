'use strict'

/*
|--------------------------------------------------------------------------
| App Configuration
|--------------------------------------------------------------------------
|
| This is general purpose file to define configuration for app.
| Like env, server, head, link..etc
|
|
*/

module.exports = {
    mode: 'spa',
    env: {
        baseUrl: process.env.HOST,
        apiBaseUrl: process.env.API_BASE_URL,
    },    
   
    server: {
        // port: 8000, // default: 3000
        // host: '0.0.0.0' // default: localhost
    },

    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#007bff' }, 
    extractCSS: true,
}