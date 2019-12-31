import Auth from './auth'

import './middleware'

// Active schemes
import scheme_003d9a64 from './schemes/local.js'
import scheme_23514a38 from './schemes/oauth2.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"role","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/login","home":"/login","callback":"/auth/callback"},"vuex":{"namespace":"auth"},"cookie":false,"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local","maxAge":86400}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"login","method":"post","propertyName":"data.token"},"logout":false,"user":{"url":"user","method":"get","propertyName":"data"}},"_name":"local"}))

  // facebook
  $auth.registerStrategy('facebook', new scheme_23514a38($auth, {"client_id":"648458352266301","userinfo_endpoint":false,"scope":["public_profile","email"],"_name":"facebook","authorization_endpoint":"https://facebook.com/v2.12/dialog/oauth"}))

  // google
  $auth.registerStrategy('google', new scheme_23514a38($auth, {"client_id":"1067701340140-r3s0nd8u4t963s0vuib198vr18fd1otr.apps.googleusercontent.com","_name":"google","authorization_endpoint":"https://accounts.google.com/o/oauth2/auth","userinfo_endpoint":"https://www.googleapis.com/oauth2/v3/userinfo","scope":["openid","profile","email"]}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
