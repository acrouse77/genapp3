<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="text-muted navbar-brand" href="#">
      <img src="static/img/mini-logo.png" style="margin-left: 20px; margin-right: 5px" height="50" class="text-muted d-inline-block" alt=""> Insight Genome
    </a> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa fa-bars"> Menu</i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item" style="margin-left:20px">
            <router-link :to="{name: 'introduction-page'}" class="col btn btn-outline-secondary  btn-lg"><i class="fa fa-info-circle nav-link" aria-hidden="true"> Introduction </i><span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item" style="margin-left:20px">
            <router-link :to="{name: 'chapter-page'}" class="col btn btn-outline-secondary   btn-lg"><i class="fa fa-book nav-link" aria-hidden="true"> Chapters </i><span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item" style="margin-left:20px">
            <router-link :to="{name: 'categories-page'}" class="col btn btn-outline-secondary   btn-lg"><i class="fa fa-bar-chart nav-link" aria-hidden="true"> Research </i><span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item" style="margin-left:20px">
            <router-link :to="{name: 'traits-page'}" class="col btn btn-outline-secondary   btn-lg"><i class="fa fa-eye nav-link" aria-hidden="true"> Traits </i><span class="sr-only">(current)</span></router-link>
          </li>
      </ul>
    </div> <!-- END CLASS = COLLAPSE -->
    <div class="col-1">
          <button class="btn btn-lg btn-outline-secondary fa fa-arrow-circle-o-left fa-3x fa-border nav-link" style="margin-right=10%" onclick="history.back();"></button>
      </div>
        <div class="col-1" >

          <button class="btn btn-lg btn-outline-secondary fa fa-arrow-circle-o-right fa-3x fa-border nav-link"  onclick="history.forward();"></button>
    </div>
  </nav>
  <div>
  <div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
<div class="strain"></div>
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
        <br /> RESEARCH ONLY APPLICATION</p>
        <div  style="margin-right: 10px">Genome ID: {{genomeidshow}}</div>  
        <div  style="margin-right: 10px">Participant ID: {{researchidshow}}</div>
    </div>
  </footer>
  </div>
</template>
<script>
// import store from 'renderer/vuex/store'
import fs from "fs";
import path from "path";

// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
// import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
// import faEye from '@fortawesome/fontawesome-free-solid/faEye'
// import faBook from '@fortawesome/fontawesome-free-solid/faBook'
// import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'

// REGEX TO MATCH SL FILE = ^SL(?=.*\d+).*json$
// let participantDataString = fs.readFileSync(path.join(__static, '/participantdata/participant.json'), 'utf8')
// var participantData = JSON.parse(participantDataString);
// let paticipant_getgeno = participantData.Participants.Genotypes;

// var part_geno_db_array = [];
// var Chr_Pos_check = [];

const webview = document.querySelector("webview");
const BrowserWindow = require("electron").BrowserWindow;
// var participantId = participantData.Participants.ID;
// var partIdText = participantId.toString();

export default {
  data() {
    return {
      participantId: "participantId not found",
      foundGenoFile: false,
      test: "test",
      image: "",
      file: null,
      researchID: null,
      genomeidshow: "NO GEN ID",
      researchidshow: "NO RES ID",
      state: "open",
      readpartdata: path.join(__static, '/participantdata/participant.json'),
      newdatapath: path.join(
        __static,
        "/participantdata/participantDataTEST.json"
      )
    };
  },
  name: "Insight_Genome",
  computed: {
    compparticipantData: function() {
      let genosread = fs.readFileSync(
        path.join(__static, "/participantdata/participantDataTEST.json"),
        "utf8"
      );
      var participantgenos = JSON.parse(genosread);
      // this.genomeidshow = participantgenos.genomeID
      // console.log(participantgenos.genomeID)
      return participantgenos;
    },
    checkstate: function() {
      let genosread = fs.readFileSync(
        path.join(__static, "/participantdata/participantDataTEST.json"),
        "utf8"
      );
      var participantgenos = JSON.parse(genosread);
      this.state = participantgenos.loader;
      return participantgenos.loader;
    },
    // coffee () {
    //   return faCoffee
    // },     
    // eye () {
    //   return faEye
    // },    
    // infocircle () {
    //   return faInfoCircle
    // },
    // book () {
    //   return faBook
    // },
    // chart () {
    //   return faChartBar
    // }
  },
  methods: {
    confirm() {
      // console.log("************* confirm method");
      var path = this.file.path;
      this.researchidshow = this.researchID;
      let newparticipantDataString = fs.readFileSync(path);
      var participantDataParse = JSON.parse(newparticipantDataString);
      // console.log('participantDataParse')
      // console.log(participantDataParse)
      // ADD GENOME ID AND RESEARCH PARTICIPANT ID TO THE FILE BEFORE WRITING

      // BREAK OUT THE SLNNNNN FROM REST BASED ON "_"
      let fullfilename = this.file.name.toString();
      let n = fullfilename.indexOf("_");
      // GET GENOMEID FROM FILE NAME
      let genomeid = fullfilename.substring(0, n);
      // console.log("genomeid")
      // console.log(genomeid)
      // UPDATE APP VIEW - ADD IDS AND CLOSED STATUS
      this.genomeidshow = genomeid;
      var input = participantDataParse["Participants"];
      input["genomeID"] = genomeid;
      input["researchID"] = this.researchidshow;
      input["loader"] = "closed";
      // console.log("input")
      // console.log(input)
      // ************************************************
      // ************************************************
      // THE FOLLOWING TAKES THE AMENDED FILE WHICH INCLUDES
      // THE GENOTYPES, THE FILE NAME, THE RESEARCH ID FOR PARTICIPANT
      // AND THE LOADER CHANGED TO CLOSE.
      // THE FILE IS STRINGIFIED AND THEN WRITTEN TO THE LOCAL DRIVE
      // ************************************************
      var participantDataWrite = JSON.stringify(input, null, "\t");
      fs.writeFileSync(this.newdatapath, participantDataWrite);
      // let genosread = fs.readFileSync(this.newdatapath, 'utf8')
      // var genos = JSON.parse(genosread)
      // // console.log("genos")
      // // console.log(genos)
      // console.log('this.state')
      // console.log(this.state)
    }
  },
  beforeMount: function() {
    this.genomeidshow = this.compparticipantData.genomeID
    console.log('this.compparticipantData.genomeID')
    console.log(this.compparticipantData.genomeID)
    this.researchidshow = this.compparticipantData.researchID
    console.log('this.compparticipantData.researchID')
    console.log(this.compparticipantData.researchID)
  },
  mounted: function() {
    // console.log('************* mounted')
    // console.log('this.checkstate')
    // console.log(this.checkstate)
    // console.log('this.state')
    // console.log(this.state)
    // alert('mounted this.state =' + this.state)
  }
  // components: {
  //   FontAwesomeIcon
  // }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:300);

@import "http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"; 

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
body {
  padding-top: 100px; /* This should be equal to the height of your header */
}
* {
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: #f7f7f7;
}
.navbar-brand {
  margin-top: 0px;
}
.btn {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 5%;
  margin-right: 5%;
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
.partID {
  background-color: #f7f7f7;
}
.header {
  margin: 0px;
  padding-top: 10px;
  background-color: #f7f7f7;
  border-width: 1px 0 0 0;
}
/* START NEW CSS */
$bg: #292929;
$blue: #13b6e2;
$gray: #dbdbdb;

@mixin animation-delay($time) {
	animation-delay: $time;
}

html, body {
	width: 100%;
	height: 100%;
	background-color: $bg;
	padding-top: 50px;
}

*, *:before, *:after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

.strain {
	width: 155px;
	height: 1px;
	background-color: $gray;
	position: relative;
	margin: 0px auto;
	margin-top: 28px;
	margin-bottom: 28px;
	animation-name: rotate-strain;
	animation-duration: 1.7s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-play-state: running;
	
	&:before {
		content: "";
		display: block;
		position: absolute;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: $blue;
		left: 0;
		margin-top: -9px;
		margin-left: -9px;
		animation-name: strain-size-left;
		animation-duration: 1.7s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-play-state: running;
	}
	
	&:after {
		content: "";
		display: block;
		position: absolute;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: $blue;
		right: 0;
		margin-top: -9px;
		margin-right: -9px;
		animation-name: strain-size-right;
		animation-duration: 1.7s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-play-state: running;
	}
	
	@for $i from 1 through 12 {
		&:nth-child(#{$i}), &:nth-child(#{$i}):before, &:nth-child(#{$i}):after {
			@include animation-delay((.15s * $i));
		}
	}	
}

@keyframes rotate-strain {
	0% {width: 155px;}
	25% {width: 0;}	
	50% {width: 155px;}	
	75% {width: 0;}
	100% {width: 155px;}
}

@keyframes strain-size-left {
	0% {transform: scale(1) translateX(0px);}	
	25% {transform: scale(.5);}	
	50% {transform: scale(1) translateX(155px);}	
	75% {transform: scale(1.5);}	
	100% {transform: scale(1) translateX(0px);}
}

@keyframes strain-size-right {
	0% {transform: scale(1) translateX(0px);}	
	25% {transform: scale(1.5);}	
	50% {transform: scale(1) translateX(-155px);}	
	75% {transform: scale(.5);}	
	100% {transform: scale(1) translateX(0px);}
}

</style>
