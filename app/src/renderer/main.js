import Vue from 'vue';
import Electron from 'vue-electron';
import Router from 'vue-router';

import App from './App';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// ANDY ADDED THE NEXT LINE - TRYING TO GET THE LINKS TO GO TO THE TOP OF THE PAGE
const router = new Router({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

Vue.use(Electron);
Vue.use(Router);
Vue.config.debug = true;
// ANDY ADDED THE NEXT LINE - RIGHT CLICK DEBUGMENU
// debugMenu.install();  // activate context menu
require('electron-context-menu')({
  labels: {
    cut: 'Genome Cut',
    copy: 'Genome Copy',
    paste: 'Genome Paste',
    save: 'Genome Save Image',
    copyLink: 'Genome Copy Link',
    inspect: 'Inspect like a Genome'
  }
});

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
