'use strict'

/*
|--------------------------------------------------------------------------
| Auth Configuration
|--------------------------------------------------------------------------
|
| This is general purpose file to define configuration for user Authentication.
|
|
*/
module.exports = {
        plugins: ['~/plugins/auth.js'],
        cookie: false,
        scopeKey: 'role',
        strategies: {
        local: {
            endpoints: {
                login:  { url: 'login', method: 'post', propertyName: 'data.token'  },
                user:   { url: 'user' , method: 'get' , propertyName: 'data'        },
                logout: false
            },
            tokenRequired: true,
            tokenType: 'Bearer'
        },
        facebook: {
            client_id: process.env.FB_CLIENT_ID,
            userinfo_endpoint: false,
            scope: ['public_profile', 'email'],
            //redirect_uri: 'http://localhost:3000/callback'
        },
        google: {
            client_id: process.env.GOOGLE_CLIENT_ID,
        },
    },
    redirect: {
        "logout": "/login", 
        "callback": "/auth/callback",
        home: '/login'       
    },
    maxAge: 86400,
     // watchLoggedIn: true,
     // rewriteRedirects: true
}