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
console.log(process.env.SERVER_URL)
module.exports = {
    mode: 'spa',
    env: {
        baseUrl: process.env.BASE_URL,
        apiBaseUrl: process.env.SERVER_URL + "/api/v1",
        serverUrl: process.env.SERVER_URL
    },    
   
    server: {
        // port: process.env.PORT, // default: 3000
        // host: process.env.HOST// default: localhost
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