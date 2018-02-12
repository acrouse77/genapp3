'use strict'

import { app, BrowserWindow } from 'electron'
// ADDED TO TEST IF CAN REWRITE 
import fs from "fs";
import path from "path";

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 800,
    useContentSize: true,
    width: 1200,
    resizable: true

  })

  mainWindow.loadURL(winURL)
  // ADDED NEXT LINE TO SEE TOOLS AFTER BUILD
  mainWindow.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  let participantDataString = fs.readFileSync(path.join(__static, '/participantdata/participant.json'), 'utf8')
  var participantData = JSON.parse(participantDataString);

}

app.on('ready', 
  createWindow
  
)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
