<style scope>
.card {
    min-width: 200px
}

.card-block {
    min-height: 75px
}

.jumbotron-buffer {
    min-height: 40px
}

.bat_jumbotron {
    margin-top: 4rem
}

.norisk {
    background-color: #496e9c !important;/*BLUE*/
    color: white !important;
}

.heterozygous {
    background-color: #17978E !important;/*BLUE*/
    color: white !important;
}

.homozygous {
    background-color: #F68026 !important;/*RED*/
    color: white !important;
}

hr.style18 {
    height: 30px;
    border-style: solid;
    border-color: #8c8b8b;
    border-width: 1px 0 0 0;
    border-radius: 20px;
}

hr.style18:before {
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: #8c8b8b;
    border-width: 0 0 1px 0;
    border-radius: 20px;
}
</style>

<template>
    <div class="section" style="margin-top:0px auto;">
        <div class="container">
        <div><h2>{{topic}}</h2></div>
                
                    <b-card bg-variant="dark" text-variant="white" style="margin-top:50px;">
                        <p class="card-text">
                            <h2>Your genotype is matched to variants found in each study below:</h2>
                        </p>
                        <b-list-group flush>
                            <b-list-group-item class="norisk">Homozygous Lower - Both of your copies match the lower risk allele</b-list-group-item>
                            <b-list-group-item class="heterozygous">Heterozygous - One of your copies match the lower risk allele</b-list-group-item>
                            <b-list-group-item class="homozygous">Homozygous Higher - Both of your copies match the higher risk allele</b-list-group-item>
                        </b-list-group>
                    </b-card>
        </div>
        <!-- TABLE FOR EACH PUBLICATION -->
        <div class="section" style="margin:20px; auto;">
            <div class="container">
                <p v-html="pubtable"></p>
            </div>
            <div class="container">
                <p >SORRY NO RESULTS</p>
            </div>
        </div>
    </div>
</template>

<script>
import fs from 'fs'
import path from 'path'

// let batread = fs.readFileSync(path.join(__static, '/referencedata/BAT.json'), 'utf8')
// var bat = JSON.parse(batread)

let genosread = fs.readFileSync(path.join(__static, '/participantdata/participantDataTEST.json'), 'utf8')
var genos = JSON.parse(genosread)

let finreducedread = fs.readFileSync(path.join(__static, '/referencedata/final_reduced.json'), 'utf8')
var finreduced = JSON.parse(finreducedread)

var _ = require('underscore')
// import genos from '/app/dist/data/SL159977_bear.json'
// SHOWING THAT VARIABLE CAN BE SET TO VALUE AND USED IN JSON INPUT FOR where
// var chr2 = 2;
// var geno_test = _.where(finreduced, {chr: chr2, chrPos:234668570});

export default {
  props: ['selectCat'],
  methods: {

  },
  data () {
    return {
      msg: 'Hello from vue-loader!',
      msg1: '',
      topic: '',
    //   batable: bat,
      todisplay: [],
      showresults: 1 
    }
  },

  created: function () {
    console.log('created ran')
            // GET PARAMS
    var urlarray = window.location.hash.split('/')
    var n = urlarray.length - 1
    var getparam = decodeURI(urlarray[n])
    this.topic = getparam
    var genotypes = genos.Genotypes
    // console.log("genotypes")
    // console.log(genotypes)
        // VARIABLE TO CREATE HTML FOR DISPLAY OF TABLE
    var focustable = ''
// ****************************************
// CHECK FOR STUDIES - ONLY SHOW IF AT LEAST ONE GENO FROM PARTICIPANT
// ****************************************

    // ****************************************
    // GET ALL DATA WHERE FOR THE STUDIES
    // ****************************************

    var checkdata = _.where(finreduced, {
        focus: getparam
        })

    // ****************************************
    // GET PMID FOR EACH VARIANT THAT HAS DATA FROM THE PARTICIPANT
    // ****************************************
    var pubcheck = []

    $.each(checkdata, function (index, value) {

        let poscheck = value.chrPos.toString()
        let chrcheck = value.chr.toString()
        
        var checkpubs = _.where(genotypes, {
            Chr: chrcheck,
            Pos: poscheck
        })
        let pubmatch = checkpubs.length
        // console.log('checkpubs')
        // console.log(checkpubs)
        // console.log('value.pmID')
        // console.log(value.pmID)
        // console.log('pubmatch')
        // console.log(pubmatch)
        if (pubmatch > 0) {
            pubcheck.push(value.pmID)
        }

    })

    // ****************************************
    // UNIQUE THE PMID LIST - THIS LIST WILL BE USED BELOW TO ENSURE TABLES FOR STUDIES WITH NO DATA ARE NOT STARTED
    // ****************************************
    // console.log('pubcheck')
    // console.log(pubcheck)
    var uniqpubs = _.uniq(pubcheck)
    console.log('uniqpubs.length')
    console.log(uniqpubs.length)

    console.log('this.pubtable')
    console.log(this.pubtable)


// EXAMPLE DATA FROM final_reduced data
// {"cat":"Blood","type":"Symptom","focus":"Cholelithiasis-related traits in sickle cell anemia","date":"6/22/12","sizeInitRep":905,"ethRep":"African American/Afro-Caribbean","pmID":22558097,"auth":"Milton JN","pubDate":"4/27/12","journ":"PLoS One","pubLink":"http://www.ncbi.nlm.nih.gov/pubmed/22558097","studyName":"A genome-wide association study of total bilirubin and cholelithiasis risk in sickle cell anemia.","studySize":"905 African American cases","repSize":"2,152 African American cases","include":"EX","snpIndex":7626,"chr":2,"chrPos":234668570,"repGene":"UGT1A1, UGT1A10","mapGene":"UGT1A10;UGT1A8;UGT1A7;UGT1A6;UGT1A5;UGT1A9;UGT1A4;UGT1A1;UGT1A3","snpID":"rs887829-A","riskAllele":"A","riskAlleleFreq":0.45,"pVal":5e-25,"mlog":24.30103,"pValText":"","OR":0.19,"ConfIntText":"[NR] unit increase","Plat":"Illumina [569,615]","FilterStatus":"Filter 5: RAs on quantitative traits","in LD block (trait)":""}

// ****************************************
// DATA IS GROUPED BY FOCUS AND THEN BY PMID TO BREAK OUT EACH PUCLICATION
// ****************************************
    var groupedData = _.groupBy(finreduced, function (d) {
      return d.focus
    })

    var focuscat = _.groupBy(groupedData[getparam], function (d) {
      return d.pmID
    })
    console.log('focuscat')
    console.log(focuscat)

    // ****************************************
    // THIS IS THE DATA FROM THE FINREDUCED SET = SINGLE STUDY
    // ****************************************
    var counter = 1
    $.each(focuscat, function (index, value) {
        // ****************************************
        // USE LIST OF PMID TO DECIDE TO MAKE TABLE OR NOT
        // ****************************************  
        let checkpmid = _.contains(uniqpubs, value[0].pmID) 
        console.log('checkpmid')     
        console.log(checkpmid)    
        if(checkpmid){

        // ****************************************
        // MAKE HEADER OF CARD TO CONTAIN TABLE
        // ****************************************          
            focustable = focustable.concat(

                        // '<div class="card" style="border-radius: 25px; border: 1px solid; padding: 5px; border-color: rgb(140, 139, 139)">' +
                        '<div class="card">' +
                        '<div class="card-block card-inverse card-primary">' +
                        '<h1 class="card-header"> Study #' + counter + ':<br>' + value[0].studyName + '</h1>' +
                        // '<h1 class="card-title">' + value[0].studyName + '</h1>' +
                        '<p class="card-text">' + 'Initial study size: ' + value[0].studySize + '</p>' +
                        '<p class="card-text"> Replication study size: ' + value[0].repSize + '</p>' +
                        '</div>' +
                        '<div class="card-block">'
                    )
            // ****************************************
            // ADD TO COUNTER FOR EACH PUB
            // ****************************************             
            counter++
            // ****************************************
            // START THE TABLE - HEADER
            // **************************************** 
            focustable = focustable.concat(
                            '<table class="table table-bordered">' +
                            '<thead>' +
                            '<tr>' +
                            '<th width="20%" scope="row" align="center">Gene</th>' +
                            '<th width="15%" align="center">snpID</th>' +
                            '<th width="5%" align="center">Chrom.</th>' +
                            '<th width="10%" align="center">Position</th>' +
                            '<th width="10%" align="center">Risk allele</th>' +
                            '<th width="15%" align="center">Odds Ratio</th>' +
                            "<th width=\"25%\" align=\"center\">Participant's genotype</th>" +

                            '</tr>' +
                            '</thead>' +
                            '<tbody>'
                        )

                // ****************************************
                // THIS IS THE DATA FROM THE FINREDUCED SET - WILL MATCH TO PARTICIPANT GENO DATA
                // ****************************************
                $.each(value, function (ind, val) {
                    var loc = val.chrPos.toString()
                    var ch = val.chr.toString()
                // ****************************************
                // GET THE PARTICIPANT GENOTYPES
                // ****************************************
                    var partGeno = _.where(genotypes, {
                    Chr: ch,
                    Pos: loc
                    })
                    this.showresults = partGeno
                // ****************************************
                // IF THERE IS NO MATCH THEN IGNORE
                // ****************************************

                    if (partGeno.length === 0) {
                    console.log('partGeno[0].Geno = 0')
                    //   console.log(partGeno)
                    } else {
                // ****************************************
                // IF THERE IS A MATCH THEN GET THE RISK ALLELE AND COMPARE TO PARTICIPANT GENO
                // ****************************************
                    //   console.log("val.riskAllele")
                    //   console.log(val.riskAllele)
                    var gen = partGeno[0].Gen
                    var risk = new RegExp(val.riskAllele, 'g')
                    //   console.log('temp *********')
                    //   console.log("risk")
                    //   console.log(risk)
                    var matchgen = gen.match(risk)
                    //   console.log("matchgen")
                    //   console.log(matchgen)
                    var count = (gen.match(risk) || []).length
                    //   console.log('count')
                    //   console.log(count)
                    var format = ''
                    switch (count) {
                        case 0:
                        format = 'norisk'
                        //   console.log('format')
                        //   console.log(format)
                        break
                        case 1:
                        format = 'heterozygous'
                        //   console.log('format')
                        //   console.log(format)
                        break
                        case 2:
                        format = 'homozygous'
                        //   console.log('format')
                        //   console.log(format)
                    }
            // ****************************************
            // THE TABLE - BUILD 1 ROW FOR EACH GENO AND SET THE FORMAT BASED ON MATCH TO RISK ALLELE
            // **************************************** 
                    focustable = focustable.concat(
                                        '<tr>' +
                                        '<th scope="row" align="center">' + val.mapGene + '</th>' +
                                        '<td align="center">' + val.snpID + '</td>' +
                                        '<td align="center">' + val.chr + '</td>' +
                                        '<td align="center">' + val.chrPos + '</td>' +
                                        '<td align="center">' + val.riskAllele + '</td>' +
                                        '<td align="center">' + val.OR + '</td>' +
                                        '<td align="center" class="' + format + '">' + partGeno[0].Gen + '</td>' +
                                        '</tr>'
                                    )
                    }
                })
            // ****************************************
            // THE TABLE - END THE TABLE AFTER LOOPING THROUGH EACH VARIANT
            // **************************************** 
                    focustable = focustable.concat(
                                    '</tbody>' +
                                    '</table>' +

                                    // ------------------------------------
                                    // END THE CARD
                                    '</div>' +
                                    '</div>' +
                                    // ------------------------------------
                                    // STYLED BREAK
                                    '<br><hr class="style18">'
                                )
                }    // END OF IF
            }) // END OF BUILDING A TABLE IN HTML

        // SET DATA pubtable TO FOCUSTABLE value
        if(uniqpubs.length === 0) {
            this.pubtable = "<h1>No data was found for for this catagory</h1>"
        }
        else this.pubtable = focustable
  }

}
</script>
