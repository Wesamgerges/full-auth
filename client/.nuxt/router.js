import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4cd0027e = () => interopDefault(import('../pages/auth/callback.vue' /* webpackChunkName: "pages/auth/callback" */))
const _32da0700 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _3dbdf184 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth/callback",
    component: _4cd0027e,
    name: "auth-callback"
  }, {
    path: "/auth/login",
    component: _32da0700,
    name: "auth-login"
  }, {
    path: "/",
    component: _3dbdf184,
    name: "index"
  }, {
    path: "/login",
    component: _32da0700,
    name: "login"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
