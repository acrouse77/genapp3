import Vue from 'vue'
import axios from 'axios'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'
import path from 'path'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
// import 'font-awesome/4.3.0/css/font-awesome.min.css'
// ADDED BY ANDY
global.jQuery = require('jquery')
window.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $
// require('bootstrap')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
