import Vue from 'vue'
import Electron from 'vue-electron'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(Electron)
Vue.use(Router)
Vue.config.debug = true

const globalShortcut = electron.globalShortcut

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
