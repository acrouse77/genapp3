<template>
  <div>
  <div class="container">
  <div class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
          <a class="text-muted navbar-brand" href="#">
            <img src="static/img/mini-logo.png" style="margin-left: 20px" height="30" class="text-muted d-inline-block" alt=""> Insight Genome
          </a>
          <router-link :to="{name: 'introduction-page'}" class="btn btn-outline-secondary btn-md"><i class="fa fa-info-circle nav-link" aria-hidden="true"> Introduction </i><span class="sr-only">(current)</span></router-link>
          <router-link :to="{name: 'chapter-page'}" class="btn btn-outline-secondary btn-md"><i class="fa fa-book nav-link" aria-hidden="true"> Chapters </i><span class="sr-only">(current)</span></router-link>
          <router-link :to="{name: 'categories-page'}" class="btn btn-outline-secondary btn-md "><i class="fa fa-bar-chart nav-link" aria-hidden="true"> Research </i><span class="sr-only">(current)</span></router-link>
          <router-link :to="{name: 'traits-page'}" class="btn btn-outline-secondary btn-md"><i class="fa fa-eye nav-link" aria-hidden="true"> Traits </i><span class="sr-only">(current)</span></router-link>
          <i class="btn btn-outline-secondary fa fa-arrow-circle-o-left fa-3x fa-border nav-link float-right"  onclick="history.back();"></i>
          <i class="btn btn-outline-secondary fa fa-arrow-circle-o-right fa-3x fa-border nav-link float-right"  onclick="history.forward();"></i>
      <div class="row" style="margin-left: 20px;">    
          <h6 class="text-right" style="margin-right: 10px">Genome ID: {{genomeidshow}}</h6>
          <h6 class="text-right" style="margin-right: 10px">Participant ID: {{researchidshow}}</h6>
          <h6 class="text-right" style="margin-right: 10px">state: {{state}}</h6>
          
      </div>
    </div>
  <div class="row uploadbar" v-show="checkstate!=='closed' && state ==='open'">
      <div class="col-4" style="margin-left:100px">
        <b-card>
          <h4 slot="header">Select data to load</h4>
          <!-- Simple File -->
          <b-form-file id="file_input1" v-model="file" ></b-form-file>
            <br>
          <b-form-input v-model="researchID" type="text" placeholder="Enter the participant's identifier"></b-form-input>
            <br>
          <button class="btn btn-outline-secondary btn-lg" v-on:click="confirm">confirm</button>
        </b-card>
      </div>
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
        <br />> RESEARCH ONLY APPLICATION</p>
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
// console.log('participantData first?')
// console.log(participantData)
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
      state: 'open',
      // readpartdata: path.join(__static, '/participantdata/participant.json'),
      newdatapath: path.join(__static, '/participantdata/participantDataTEST.json')
    }
  },
  name: 'insightrebuild5',
  computed: {
    compparticipantData: function(){
    let genosread = fs.readFileSync(path.join(__static, '/participantdata/participantDataTEST.json'), 'utf8')
    var participantgenos = JSON.parse(genosread)
    return participantgenos
    },
    checkstate: function(){
    let genosread = fs.readFileSync(path.join(__static, '/participantdata/participantDataTEST.json'), 'utf8')
    var participantgenos = JSON.parse(genosread)
    return participantgenos.loader
    }
  },
  methods: {
    confirm () {
    console.log('************* confirm method')
      var path = this.file.path
      this.researchidshow = this.researchID
      let newparticipantDataString = fs.readFileSync(path)
      var participantDataParse = JSON.parse(newparticipantDataString)
      console.log('participantDataParse')
      console.log(participantDataParse)
      // ADD GENOME ID AND RESEARCH PARTICIPANT ID TO THE FILE BEFORE WRITING

      // BREAK OUT THE SLNNNNN FROM REST BASED ON "_"
      let fullfilename = this.file.name.toString()
      let n = fullfilename.indexOf("_")
      // GET GENOMEID FROM FILE NAME
      let genomeid = fullfilename.substring(0, n)
      console.log("genomeid")
      console.log(genomeid)
      // UPDATE APP VIEW - ADD IDS AND CLOSED STATUS
      this.genomeidshow = genomeid
      var input = participantDataParse['Participants']
      input['genomeID'] = genomeid
      input['researchID'] = this.researchidshow
      input['loader'] = 'closed'
      console.log("input")
      console.log(input)
      // ************************************************
      // ************************************************
      // THE FOLLOWING TAKES THE AMENDED FILE WHICH INCLUDES 
      // THE GENOTYPES, THE FILE NAME, THE RESEARCH ID FOR PARTICIPANT
      // AND THE LOADER CHANGED TO CLOSE.
      // THE FILE IS STRINGIFIED AND THEN WRITTEN TO THE LOCAL DRIVE
      // ************************************************
      var participantDataWrite = JSON.stringify(input, null, "\t")
      fs.writeFileSync(this.newdatapath, participantDataWrite)
      // let genosread = fs.readFileSync(this.newdatapath, 'utf8')
      // var genos = JSON.parse(genosread)
      // // console.log("genos")
      // // console.log(genos)
      // console.log('this.state')
      // console.log(this.state)
    },
    close () {
    console.log('************* close method')
      // let genosread = fs.readFileSync(this.newdatapath, 'utf8')
      // var genos = JSON.parse(genosread)
      this.state = 'closed'
      // console.log('this.state')
      // console.log(this.state)
      // console.log('genos[loader]')
      // console.log(genos['loader'])
      // console.log('this.checkstate')
      // console.log(this.checkstate)
      console.log('this.checkstate')
      console.log(this.checkstate)
      console.log('this.state')
      console.log(this.state)
    }
    // openinput () {
    //   console.log('openinput')
    //   this.state = 'open'
    // }
  },
  // beforeCreate: function () {
  //   alert('beforeCreate this.state =' + this.state)
  // },
  // created: function () {
  //   alert('created this.state =' + this.state)
  // },
  beforeMount: function () {
    // alert('beforeMount this.state =' + this.state)
    // console.log("compparticipantData")
    // console.log(this.compparticipantData)
    // console.log("checkstate")
    // console.log(this.checkstate)    
    // let exampledata = fs.readFileSync('static/participantdata/participant.json', 'utf8')
    // let genosread = fs.readFileSync('static/participantdata/participantDataTEST.json', 'utf8')
    // var genos = JSON.parse(genosread)
    // console.log('genos')
    // console.log(genos)
    // console.log('genos.loader')
    // console.log(genos.loader)
    // this.state = genos.loader
    // this.genomeidshow = genos.genomeID
    // this.researchidshow = genos.ID
    // var examplegenos = JSON.parse(exampledata)
    // this.state = participantData['loader']
    // alert('beforeMount2 this.state =' + this.state)
    // console.log('participantData second?')
    // console.log(participantData)
    // console.log("examplegenos")
    // console.log(examplegenos)
    // console.log('examplegenos.Participants.loader')
    // console.log(examplegenos.Participants.loader)
    // this.state = examplegenos.Participants.loader
    // console.log('this.state')
    // console.log(this.state)
    // alert('beforeMount this.state =' + this.state)
    // alert('beforeMount newdatapath = ' + this.newdatapath)
    // alert('beforeMount genosread = ' + genosread)
  },
  mounted: function(){
    console.log('************* mounted')
    console.log('this.checkstate')
    console.log(this.checkstate)
    console.log('this.state')
    console.log(this.state)
    // alert('mounted this.state =' + this.state)
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
