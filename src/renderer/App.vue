<!-- <template>
  <div id="app">
    <router-view></router-view>
  </div>
</template> -->
<template>
  <div>
  <div class="Container">
<ul class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <a class="text-muted navbar-brand" href="#">
        <img src="static/img/mini-logo.png" style="margin-left: 20px" height="30" class="text-muted d-inline-block" alt=""> Insight Genome
      </a>
  
    <a href="/#/introduction" class="btn btn-outline-secondary btn-lg"><i class="fa fa-info-circle nav-link" aria-hidden="true"> Introduction </i><span class="sr-only">(current)</span></a>
    <a href="/#/chapter" class="btn btn-outline-secondary btn-lg"><i class="fa fa fa-book nav-link" aria-hidden="true"> Chapters </i><span class="sr-only">(current)</span></a>
    <a href="/#/categories" class="btn btn-outline-secondary btn-lg"><i class="fa fa fa-bar-chart nav-link" aria-hidden="true"> Research </i><span class="sr-only">(current)</span></a>
    <a href="/#/traits" class="btn btn-outline-secondary btn-lg"><i class="fa fa fa-eye nav-link" aria-hidden="true"> Traits </i><span class="sr-only">(current)</span></a>

<h6 class="text-right"style="margin-right: 10px">Participant ID: {{participantId}}</h6>
</ul>
</div>
  </nav>
  <div id="#app" class="app">
    <router-view></router-view>
  </div>
  <footer class="footer">
    <div class="container">
      <div class="container">
      </div>
      <p class="text-muted">
        <H1>DISCLAIMER </H1>
        <!--<BR /> RESEARCH ONLY - DON'T EVEN CONSIDER THINKING THIS IS NOT RESEARCH OR MIKE WILL GET YOU.</p>-->
        <BR /> RESEARCH ONLY APPLICATION</p>
    </div>
  </footer>
  </div>
</template>
<script>
// import store from 'renderer/vuex/store'
import fs from 'fs'
import path from 'path'

let participantDataString = fs.readFileSync(path.join(__static, '/participantdata/participant.json'), 'utf8')
var participantData = JSON.parse(participantDataString)

// import participantData from './static/participantdata/hj.json'
const webview = document.querySelector('webview')
const BrowserWindow = require('electron').BrowserWindow
//  app/src/renderer/App.vue

console.log('participantData App.vue')
console.log(participantData)

var participantId = participantData.Participants.ID
console.log('participantId')
console.log(participantId)
var partIdText = participantId.toString()
console.log('partIdText')
console.log(partIdText)

export default {
  data () {
    return {
      participantId: 'participantId not found',
      foundGenoFile: false,
      test: 'test',
      image: ''
    }
  },
  name: 'insightrebuild5',
  created: function () {
    console.log('created')
    var participantId = participantData.Participants.ID
    console.log('var participantId')
    console.log(participantId)
    this.participantId = participantId
    console.log('this participantId')
    console.log(participantId)
  }
}
</script>

<style>
/*@import url(https://fonts.googleapis.com/css?family=Lato:300);*/

@import 'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css';
.fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}
* {
  margin: 0;
  padding: 0;
}
.navbar{
  background-color: #f7f7f7;
}
.navbar-brand{
  margin-top:0px;
  
}
.btn {
  margin-top:5px;
  margin-bottom:10px;
  margin-left: 2%;
  margin-right: 2%;
}

.fa {
  font-family: "FontAwesome";
}
.btn-hover {
  font-weight: normal;
  color: #333333;
  cursor: pointer;
  background-color: inherit;
  border-color: transparent;
}

.btn-hover-alt {
  font-weight: normal;
  color: #ffffff;
  cursor: pointer;
  background-color: inherit;
  border-color: transparent;
}
</style>
