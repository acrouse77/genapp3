/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Set environment for development
process.env.NODE_ENV = 'development'

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: true })

// Install `vue-devtools`
require('electron').app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })
})
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
})

// Require `main` process to boot app
require('./index')
