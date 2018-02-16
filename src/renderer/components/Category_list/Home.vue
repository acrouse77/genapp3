<style>
.card {
    min-width: 200px
}

.card-block {
    min-height: 75px
}

.jumbotron-buffer {
    min-height: 40px
}
</style>

<template>
<div class="container">
<div class="row">

    <!-- COLUMNS FOR DISEASE AND MEDICAL TRAITS -->
    <!--<div class="row">-->
      <!-- {{getDisease}} {{makehtml}} -->
        <div class="container bot-section">
            <!--<div class="card-deck-wrapper">-->
                <div class="card-deck">
                    <div class="col-6" v-if="diseasesLength > 0">
                        <div class="card" >
                            <div class="bg-primary text-white">
                                <h1 class="card-title" style="margin-left:5px">Diseases</h1>
                                <p style="margin-left:5px">A disease is something one can be diagnosed with.</p>
                            </div>
                            <ul class="list-unstyled">
                                <li class="list-group-item" v-for="disease in diseases">
                                    <router-link :to="{name: 'tableview-page', params: {focus: disease.name }}"> {{ disease.name }} </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6" v-if="medTraitsLength > 0">
                        <div class="card" >
                            <div class="bg-success text-white">
                                <h1 class="card-title" style="margin-left:5px">Medical traits</h1>
                                <p style="margin-left:5px">Measured to help diagnose a disease.</p>
                            </div>
                            <ul class="list-unstyled">
                              <li class="list-group-item" v-for="medtrait in medtraits">
                                  <router-link :to="{name: 'tableview-page', params: {focus: medtrait.name }}"> {{ medtrait.name }} </router-link>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <!--</div>-->
        </div>
    <!--</div>-->
</div>
<!-- TESTING  -->
</div>
<!-- v-cloak hides any un-compiled data bindings until the Vue instance is ready. -->



<!-- END TESTING  -->
</template>

<script>
import fs from "fs";
import path from "path";

var _ = require('underscore')
// import Vue from 'vue'

export default {
  props: ['selectCat'],
  methods: {
    getCat_dis: function (diseases) {
      return diseases // {
              // console.log("getCat_dis msg = " )
              // return catagory.System === "Cancer" && catagory.Type === "Disease"
        //  })
    }
  },
  data () {
    return {
      catparam: '', // getparam,
      diseases: [],
      medtraits: [],
      diseasesLength: 0,
      medTraitsLength: 0
    }
  },
  created: function () {
    console.log('created ran')
      // GET PARAMS
    var urlarray = window.location.hash.split('/')
    console.log(urlarray)
    var n = urlarray.length - 1
    var getparam = decodeURI(urlarray[n])
    console.log('getparam')
    console.log(getparam)
    let categoryread = fs.readFileSync(path.join(__static, '/referencedata/categories.json'), 'utf8')
    var categories = JSON.parse(categoryread)

      // GROUPING BY FOCUS - eg. Hematocrit
    var catGroupedData = _.groupBy(categories, function (d) {
      return d.category
    })

    var typeGroupedData = _.groupBy(catGroupedData[getparam], function (d) {
      return d.type
    })


    this.diseases = typeGroupedData['Disease']
    this.medtraits = typeGroupedData['Medical Traits']
    try {
        this.diseasesLength = this.diseases.length;
    }
    catch(error) {
    console.log(error);
        this.diseasesLength = 0
    // expected output: SyntaxError: unterminated string literal
    // Note - error messages will vary depending on browser
    }
    try {
        this.medTraitsLength = this.medtraits.length;
    }
    catch(error) {
    console.log(error);
        this.medTraitsLength = 0
    // expected output: SyntaxError: unterminated string literal
    // Note - error messages will vary depending on browser
    }


    // this.diseasesLength = this.diseases.length
    // this.medTraitsLength = this.medtraits.length
    console.log('typeGroupedData')
    console.log(typeGroupedData)
    console.log('diseases')
    console.log(typeGroupedData['Disease'])
    console.log('Medical Traits')
    console.log(typeGroupedData['Medical Traits'])
    console.log('Medical Traits length')
    // console.log(typeGroupedData['Medical Traits'].length)
    var getmedtraits = typeGroupedData['Medical Traits']
    console.log("this.diseases")
    console.log(this.diseases)
    console.log("this.diseases.length")
    console.log(this.diseases.length)
  }

}
</script>
