<template>
<div>
        <div class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
              <a class="text-muted navbar-brand" href="#">
                <img src="static/img/mini-logo.png" style="margin-left: 20px; margin-right: 5px" height="50" class="text-muted d-inline-block" alt=""> Insight Genome
              </a>            
              <router-link :to="{name: 'introduction-page'}" class="col btn btn-outline-secondary btn-md btn-lg"><i class="fa fa-info-circle nav-link" aria-hidden="true"> Introduction </i><span class="sr-only">(current)</span></router-link>
              <router-link :to="{name: 'chapter-page'}" class="col btn btn-outline-secondary  btn-md btn-lg"><i class="fa fa-book nav-link" aria-hidden="true"> Chapters </i><span class="sr-only">(current)</span></router-link>
              <router-link :to="{name: 'categories-page'}" class="col btn btn-outline-secondary  btn-md btn-lg"><i class="fa fa-bar-chart nav-link" aria-hidden="true"> Research </i><span class="sr-only">(current)</span></router-link>
              <router-link :to="{name: 'traits-page'}" class="col btn btn-outline-secondary  btn-md btn-lg"><i class="fa fa-eye nav-link" aria-hidden="true"> Traits </i><span class="sr-only">(current)</span></router-link>
          <div class="col-2">
            <i class="btn btn-outline-secondary fa fa-arrow-circle-o-right fa-3x fa-border nav-link float-right"  onclick="history.forward();"></i>
            <i class="btn btn-outline-secondary fa fa-arrow-circle-o-left fa-3x fa-border nav-link float-right"  onclick="history.back();"></i>
          </div>
          <div class="container-fluid text-left">
              <div class="col-2 text-left" style="margin-right: 10px">Genome ID: {{genomeidshow}}</div>  
              <div class="col-2 text-left" style="margin-right: 10px">Participant ID: {{researchidshow}}</div>
              <div class="col-7 text-left" style="margin-right: 10px"></div>
          </div>
      </div>
 <!--  <div class="row uploadbar" v-show="checkstate!=='closed' || state ==='open'" style="margin-bottom: 20px;">
      <div class="col-4" style="margin-left:100px">
        <b-card>
          <h4 slot="header">Select data to load</h4>
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
  </div> -->


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
import fs from "fs";
import path from "path";

// REGEX TO MATCH SL FILE = ^SL(?=.*\d+).*json$
let participantDataString = fs.readFileSync(path.join(__static, '/participantdata/participant.json'), 'utf8')
var participantData = JSON.parse(participantDataString);
let paticipant_getgeno = participantData.Participants.Genotypes;

var part_geno_db_array = [];
var Chr_Pos_check = [];

// console.log('length.paticipant_getgeno')
// console.log(paticipant_getgeno.length)
// $.each(paticipant_getgeno, function(index, value) {
//   // console.log(value)
//   value["Chr_Pos"] = value.Chr + "_" + value.Pos;

//   if ($.inArray(value["Chr_Pos"], Chr_Pos_check) === -1) {
//     Chr_Pos_check.push(value["Chr_Pos"]);
//     part_geno_db_array.push(value);
//   }
//   return part_geno_db_array;
// });
// console.log('Chr_Pos_check')
// console.log(Chr_Pos_check)
// console.log('part_geno_db_array uniqued')
// console.log(part_geno_db_array)
// console.log('length.paticipant_getgeno')
// console.log(paticipant_getgeno.length)
// console.log('length.part_geno_db_array')
// console.log(part_geno_db_array.length)

// let unique = [...new Set(Chr_Pos_check)];
// // console.log('unique');
// // console.log(unique);
// console.log('unique.length');
// console.log(unique.length);

// var newcountarr = []
// var sort_part_geno_db_array = part_geno_db_array.sort()
// // console.log('sort_part_geno_db_array')
// // console.log(sort_part_geno_db_array)
// for (var i = 0; i < paticipant_getgeno.length; i++) {
//   newcountarr.push(paticipant_getgeno[i].Chr_Pos)
//   // return newcountarr
// }
// // console.log('newcountarr')
// // console.log(newcountarr)

// var newcountarrsort = newcountarr.sort()
// // console.log('newcountarrsort')
// // console.log(newcountarrsort)
// var finddup = []
// for (var i = 0; i < newcountarrsort.length; i++) {
//   var n = i++
//   if (newcountarrsort[i] === newcountarrsort[n] ) {
//     finddup.push(newcountarrsort[i]);
//     // console.log('newcountarrsort[i]  i = ' + i)
//     // console.log(newcountarrsort[i])
//   }
// }

// // **************************************************************************
// // CREATE NEW DATASTORE
// // **************************************************************************
// var partgenosdb = new Datastore({
//   filename: path.join(__static, "/participantdata/participant.db"),
//   autoload: true
// });

// // **************************************************************************
// // RESET DATABASE TO - REMOVE ALL DOCUMENTS
// // **************************************************************************
// // Removing all documents with the 'match-all' query
// partgenosdb.count({}, function(err, count) {
//   // console.log("partgenosdb count before remove all");
//   // console.log(count);
// });
// partgenosdb.remove({}, { multi: true }, function(err, numRemoved) {
//   // console.log("numRemoved");
//   // console.log(numRemoved);
// });
// partgenosdb.count({}, function(err, count) {
//   // console.log("partgenosdb count after remove all");
//   // console.log(count);
// });
// // **************************************************************************
// // TESTING UNIQUE INDEX
// // **************************************************************************
// partgenosdb.removeIndex("chr_pos", function(err) {});
// // Using a unique constraint with the index
// // partgenosdb.ensureIndex({ fieldName: 'chr_pos', unique: true }, function (err) {
// //   if(err){
// //     console.log('err')
// //     console.log(err)
// //     alert('err = ' + err)
// //     return;
// //   }
// //   else {
// //     console.log('indexed')
// //     console.log('err')
// //     console.log(err)
// //   }
// // });
// // **************************************************************************
// // INSERT DOCUEMNTS FROM GENOTYPE JSON
// // **************************************************************************
// partgenosdb.insert(part_geno_db_array, function(err, newDoc) {
//   // inserting participant's genos
//   // newDoc is the newly inserted document, including its _id
//   // newDoc has no key called notToBeSaved since its value was undefined
//   // console.log("part_geno_db_array newDoc");
//   // console.log(newDoc);
//   // console.log("err");
//   // console.log(err);
// });
// partgenosdb.count({}, function(err, count) {
//   // console.log("partgenosdb count after putting all back");
//   // console.log(count);
// });
// // **************************************************************************
// // TEST FINDING A DOCUMENT IN THE DB
// // **************************************************************************
// partgenosdb.find({ Pos: "124214448" }, function(err, docs) {
//   // console.log("docs from partgenosdb");
//   // console.log(docs);
//   // docs is an array containing documents Mars, Earth, Jupiter
//   // If no document is found, docs is equal to []
// });
// // **************************************************************************
// // FIND ALL DOC IN DB - MAY BE MORE THAN JUST INSERTED
// // **************************************************************************
// // partgenosdb.persistence.compactDatafile
// partgenosdb.find({}, function(err, docs) {
//   // console.log("all docs from db");
//   // console.log(docs);
// });

// partgenosdb.count({}, function(err, count) {
//   // console.log("partgenosdb count");
//   // console.log(count);
// });

const webview = document.querySelector("webview");
const BrowserWindow = require("electron").BrowserWindow;
var participantId = participantData.Participants.ID;
var partIdText = participantId.toString();

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
    }
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
    },
    close() {
      // console.log("************* close method");
      //  ******************************************************
      //
      // let genosread = fs.readFileSync(path.join(__static, '/participantdata/participantDataTEST.json'), 'utf8')
      // var participantgenos = JSON.parse(genosread)
      // var getgeno = JSON.stringify(participantgenos.Genotypes, null, "\t")
      // console.log('participantgenos.Genotypes')
      // console.log(participantgenos.Genotypes)
      // partgenosdb.insert(getgeno, function (err, newDoc) {
      // // inserting participant's genos
      // // newDoc is the newly inserted document, including its _id
      // // newDoc has no key called notToBeSaved since its value was undefined
      // })
      // console.log('************* geno in db')

      // // partgenosdb.find({}, function (err, docs) {
      // // console.log('all docs from db')
      // // console.log(docs)
      // // });
      // console.log('partgenosdb db')
      // console.log(partgenosdb)

      // ******************************************************
      // let genosread = fs.readFileSync(this.newdatapath, 'utf8')
      // var genos = JSON.parse(genosread)
      this.state = "closed";
      // console.log('this.state')
      // console.log(this.state)
      // console.log('genos[loader]')
      // console.log(genos['loader'])
      // console.log('this.checkstate')
      // console.log(this.checkstate)
      // console.log('this.checkstate')
      // console.log(this.checkstate)
      // console.log('this.state')
      // console.log(this.state)
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
  beforeMount: function() {
  
  },
  mounted: function() {
    // console.log('************* mounted')
    // console.log('this.checkstate')
    // console.log(this.checkstate)
    // console.log('this.state')
    // console.log(this.state)
    // alert('mounted this.state =' + this.state)
  }
};
</script>

<style>
/*@import url(https://fonts.googleapis.com/css?family=Lato:300);*/

@import "http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css";

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  margin-bottom: 10px;
}
body {
  padding-top: 125px; /* This should be equal to the height of your header */
}
.uploadbar {
  padding-top: 100px;
}
* {
  margin: 0;
  padding: 0;
}
.app {
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
.partID {
  background-color: #f7f7f7;
}
.header {
  margin: 0px;
  padding-top: 10px;
  background-color: #f7f7f7;
  border-width: 1px 0 0 0;
}
</style>
