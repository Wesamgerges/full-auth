'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('login', 'Auth/AuthenticationController.login')
  Route.post('register', 'Auth/AuthenticationController.register')
  Route.post('auth', 'Auth/AuthenticationController.verifyToken')

  Route.post('user/signin/:strategy', 'Auth/AuthenticationController.signin')
  Route.get('user', 'Auth/AuthenticationController.user').middleware(['auth'])
 
}).prefix('api/v1')

Route.get('login/google', 'Auth/LoginController.redirect')
Route.get('auth/google/callback', 'Auth/LoginController.callback')

Route.get('/', () => {
  return { greeting: 'Hello From Full Auth' }
})

