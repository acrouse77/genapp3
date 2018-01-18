<template>
  <div>
  <div class="container">
    <div class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <a class="text-muted navbar-brand" href="#">
          <img src="static/img/mini-logo.png" style="margin-left: 20px" height="30" class="text-muted d-inline-block" alt=""> Insight Genome
        </a>
        <router-link :to="{name: 'introduction-page'}" class="btn btn-outline-secondary btn-lg"><i class="fa fa-info-circle nav-link" aria-hidden="true"> Introduction </i><span class="sr-only">(current)</span></router-link>
        <router-link :to="{name: 'chapter-page'}" class="btn btn-outline-secondary btn-lg"><i class="fa fa-book nav-link" aria-hidden="true"> Chapters </i><span class="sr-only">(current)</span></router-link>
        <router-link :to="{name: 'categories-page'}" class="btn btn-outline-secondary btn-lg"><i class="fa fa-bar-chart nav-link" aria-hidden="true"> Research </i><span class="sr-only">(current)</span></router-link>
        <router-link :to="{name: 'traits-page'}" class="btn btn-outline-secondary btn-lg"><i class="fa fa-eye nav-link" aria-hidden="true"> Traits </i><span class="sr-only">(current)</span></router-link>
        <router-link :to="{name: 'traits-page'}" class="btn btn-outline-secondary btn-lg"><i class="fa fa-eye nav-link" aria-hidden="true"> Traits </i><span class="sr-only">(current)</span></router-link>
        <i class="btn btn-outline-secondary fa fa-arrow-circle-o-left fa-3x fa-border nav-link"  onclick="history.back();"></i>
        <i class="btn btn-outline-secondary fa fa-arrow-circle-o-right fa-3x fa-border nav-link"  onclick="history.forward();"></i>
        <h6 class="text-right" style="margin-right: 10px">Participant ID: {{genomeidshow}}</h6>
        <h6 class="text-right" style="margin-right: 10px">Participant ID: {{researchidshow}}</h6>
    </div>
  <div class="row uploadbar" v-show="state==='open'">
      <b-card class="col-4" style="margin-left:100px">
        <h4 slot="header">Select data to load</h4>
        <!-- Simple File -->
        <b-form-file id="file_input1" v-model="file" ></b-form-file>
          <br>
        <b-form-input v-model="researchID" type="text" placeholder="Enter the participant's identifier"></b-form-input>
          <br>
        <button class="btn btn-outline-secondary btn-lg" v-on:click="confirm">confirm</button>
      </b-card>
      <div class=" col-5" style="margin-left:100px">
      <b-card>
        <h4 slot="header">Review data to be loaded</h4>
        <b-list-group flush>
            <b-list-group-item><b>Selected file: </b>{{file && file.name}}</b-list-group-item>
            <b-list-group-item><b>Genome ID: </b>{{genomeidshow}}</b-list-group-item>
            <b-list-group-item><b>Particpant ID: </b>{{researchidshow}} </b-list-group-item>
        </b-list-group>
        <b-card-footer><button class="btn btn-outline-secondary btn-lg" v-on:click="close">Confirm and Close Loader</button></b-card-footer>
      </b-card>
      </div>
  </div>  
</div>
  <div>
    <router-view class="app" ></router-view>
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

const webview = document.querySelector('webview')
const BrowserWindow = require('electron').BrowserWindow

// console.log('participantData App.vue')
// console.log(participantData)

var participantId = participantData.Participants.ID
// console.log('participantId')
// console.log(participantId)
var partIdText = participantId.toString()
// console.log('partIdText')
// console.log(partIdText)

export default {
  data () {
    return {
      participantId: 'participantId not found',
      foundGenoFile: false,
      test: 'test',
      image: '',
      file: null,
      researchID: null,
      genomeidshow: 'NO GENOMEID FOUND',
      researchidshow: 'NO RESEARCH ID FOUND',
      state: 'open'
    }
  },
  name: 'insightrebuild5',
  methods: {
    open () {
      this.$refs.file_input1.click()
      var partfile = this.file
      console.log(partfile)
    },
    consolelog () {
      console.log(this.file)
    },
    confirm () {
      console.log("confirm button pressed")
      var path = this.file.path
      this.researchidshow = this.researchID
      let participantDataString = fs.readFileSync(path)
      var participantDataParse = JSON.parse(participantDataString)
      console.log(participantDataParse)
      // ADD GENOME ID AND RESEARCH PARTICIPANT ID TO THE FILE BEFORE WRITING
      // GET GENOMEID FROM FILE NAME
      let fullfilename = this.file.name.toString()
      let n = fullfilename.indexOf("_")
      let genomeid = fullfilename.substring(0, n)
      console.log("genomeid")
      console.log(genomeid)
      // UPDATE APP VIEW
      this.genomeidshow = genomeid
      var input = participantDataParse['Participants']
      input['genomeID'] = genomeid
      input['researchID'] = this.researchidshow
      console.log("input")
      console.log(input)
      // ******* STINGIFYPRE
      // ********
      var participantDataWrite = JSON.stringify(input, null, "\t")
      // REWRITE THE DATA FILE
      fs.writeFileSync('static/participantdata/participantDataTEST.json', participantDataWrite)
      let genosread = fs.readFileSync('static/participantdata/participantDataTEST.json', 'utf8')
      var genos = JSON.parse(genosread)
      console.log("genos")
      console.log(genos)
      let stateread = fs.readFileSync('static/referencedata/statecheck.json', 'utf8')
      var stateparse = JSON.parse(stateread)
      stateparse["loader"] = 'closed'
      console.log('stateparse')
      console.log(stateparse)
      console.log('this.state')
      console.log(this.state)
    },
    close () {
      let stateread = fs.readFileSync('static/referencedata/statecheck.json', 'utf8')
      var stateparse = JSON.parse(stateread)
      this.state = stateparse["loader"]
    }
  },
  created: function () {
    this.state = 'closed'
    let stateread = fs.readFileSync('static/referencedata/statecheck.json', 'utf8')
    var stateparse = JSON.parse(stateread)
    console.log("stateparse")
    console.log(stateparse)
    console.log("stateparse[loader]")
    console.log(stateparse['loader'])
    console.log('this.state')
    console.log(this.state)
    this.state = stateparse["loader"]
    console.log('this.state after state update')
    console.log(this.state)
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
    margin-bottom:100px;
}
body {
    padding-top: 100px; /* This should be equal to the height of your header */
}
.uploadbar{
  padding-top:100px
}
* {
  margin: 0;
  padding: 0;
}
.app{
  margin-top:100px;
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
