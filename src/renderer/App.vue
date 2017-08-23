<!-- <template>
  <div id="app">
    <router-view></router-view>
  </div>
</template> -->
<template>
  <div>
    <!-- START NAVBAR -->
    <nav class="navbar navbar-light navbar-fixed-top bg-faded">
        <form class="form-inline ">
          <div class="col-1">
            <a href="/#/landingpage" >  <img src="static/img/mini-logo.png" class="navbar-brand" style="margin-left: 5px; margin-right: 25px;"></a>
          </div>
          <div class="col-11">
            <div class="row">
            <!--<a href="/#"><i class="fa fa-home nav-link text-muted" aria-hidden="true"> Home </i><span class="sr-only">(current)</span></a>-->
                <a href="/#/introduction" class="col-2 btn btn-outline-secondary btn-sm"><i class="fa fa-info-circle nav-link text-muted" aria-hidden="true"> Introduction </i><span class="sr-only">(current)</span></a>
                <router-link :to="{ name: 'introduction-page' }" class="col-2 btn btn-primary btn-sm"> Introduction </router-link>
                <router-link :to="{ name: 'chapter-page' }" class="col-2 btn btn-primary btn-sm"> Chapters </router-link>
                <router-link :to="{ name: 'categories-page' }" class="col-2 btn btn-primary btn-sm"> Research studies </router-link>
                <router-link :to="{ name: 'traits-page' }" class="col-2 btn btn-primary btn-sm"> Traits </router-link>

               <!-- <a href="/#/chapter" class="col-2 btn btn-outline-secondary btn-sm"><i class="fa fa-book nav-link text-muted" aria-hidden="true"> Chapters </i><span class="sr-only">(current)</span></a>
                <a href="/#/categories" class="col-2 btn btn-outline-secondary btn-sm"><i class="fa fa-bar-chart nav-link text-muted" aria-hidden="true"> Research studies </i><span class="sr-only">(current)</span></a>
                <a href="/#/traits" class="col-2 btn btn-outline-secondary btn-sm"><i class="fa fa-eye nav-link text-muted" aria-hidden="true"> Traits </i><span class="sr-only">(current)</span></a>-->
                  <div class="text-right col-2">
                    <h4>Participant ID: {{participantId}}</h4>
                  </div>


              </div>
          </div>
        </form>
    </nav>


    <div id="#app">

        <router-view></router-view>
    </div>
    <footer class="footer">
    <div class="container">
      <!-- <div v-if="!image">
        <h2>Select an image</h2>
        <input type="file" @change="onFileChange">
      </div>
      <div v-else>
        <img :src="image" />
        <button @click="removeImage">Remove image</button>
      </div> -->
      <div class="container">
      <!--UPLOAD-->
      <!-- <div class="upload" id="uploadbox">
        <input class="upload-input" id="upload-input" type="file" @change="onFileChange"/>
        <input class="upload-filename" :value="uploadfile.name" readonly="readonly"/>
        <label class="upload-button" for="upload-input">SELECT IMAGE</label>
        <div id="filedrag" @dragover="FileDragHover" @dragleave="FileDragHover" @drop="onFileChange">or drop files here</div><img class="upload-img" :src="uploadfile.image"/>
      </div> -->
      <!-- <label class="btn btn-default btn-file">
    Browse <input type="file" style="display: none;">
</label> -->
        <!-- <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
          <h1>Upload images</h1>
            <div class="dropbox">
                <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file">
                  <p v-if="isInitial">
                    Drag your file(s) here to begin<br> or click to browse
                  </p>
                  <p v-if="isSaving">
                    Uploading {{ fileCount }} files...
                  </p>
              </div>
          </form> -->
    </div>
        <p class="text-muted"><H1>DISCLAIMER </H1>
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

* {
  margin: 0;
  padding: 0;
}

.btn {
  margin-left: 2%;
  margin-right: 2%;
}
.fa { font-family: "FontAwesome";
}
</style>
