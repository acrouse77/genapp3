<style scope>
.card {
    min-width: 200px
}

th {
    text-align: center;
}

/*.tr_top {
    border-top: 2px;
    padding: 0.25rem !important;;
  vertical-align: top;
  border-top: 1px solid #eceeef;
}*/
.table td, .table th {
    padding: .4rem;
}

.tr_alt {
    border-top: 1px
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
    background-color: #1E8BFD;
    /*GREEN*/
    color: white;
}

.heterozygous {
    background-color: #FDDA1E;
    /*BLUE*/
    color: white;
}

.homozygous {
    background-color: #FD901E;
    /*RED*/
    color: white;
}

.notfound {
    background-color: #000000;
    /*BLACK*/
    color: white;
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


.rounded {
    border-radius: 10px;
}

.col-centered {
    float: none;
    margin: 0 auto;
}

#myDIV {
    width: 100%;
    padding: 50px 0;
    text-align: center;
    background-color: lightblue;
    margin-top:20px;
}

</style>

<template>
<div class="row">
<div class="section">
    <div class="container">
<div class="row">
    <!--<h1>insert key table here</h1>-->
    <div class="col-lg-12 col-md-12 col-sm-12">

        <div v-if="show_genoTableOne" class="col-lg-12 col-md-12 col-sm-12 col-centered">
            <div style="background-color: #FD901E; margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px;">

                <p v-html="genoTableOne"></p>

            </div>
            <hr class="style18">
        </div>
        <div v-if="show_genoTableTwo" class="col-lg-12 col-md-12 col-sm-12 col-centered">
            <div style="background-color: #1E8BFD; margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px;">
                <p v-html="genoTableTwo"></p>

            </div>
            <hr class="style18">
        </div>
        <!-- <div v-if="show_genoTableThree" class="col-lg-12 col-md-12 col-sm-12 col-centered">
            <div style="background-color: #7A9195; margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px;">
                <p v-html="genoTableThree"></p>

            </div>
            <hr class="style18">
        </div> -->
        <!-- <div v-if="show_genoTableFour" class="text-muted col-lg-12 col-md-12 col-sm-12 col-centered">
            <div style=" background-color: #33383D; margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px;">
                <p v-html="genoTableFour"></p>

            </div>
            <hr class="style18">
        </div> -->
        <!--<div class="card card-inverse card-primary text-center">
            <div class="card-block">
                <blockquote class="card-blockquote">
                <h2 class="card-text">Reminder: the genomic variants in the table(s) above are based on research findings rather than clinical finding.</h2>
                </blockquote>
            </div>
        </div>-->

    </div>
    </div>
    </div>
</div>

</div>

</template>

<script>
import chapterSnps from './assets/data/RA_ordered.json'
import finreduced from './assets/data/RA.json'
import genos from './assets/data/hj.json'

var _ = require('underscore')
// import Vue from 'vue'
// import genos from './assets/data/SL159977_bear.json'

console.log('chapterSnps CAD')
console.log(chapterSnps)

console.log('finreduced')
console.log(finreduced)

console.log('genos')
console.log(genos)
// MAKE POPOVER WORK
// $(function () {
//   $('[data-toggle="popover"]').popover()
// })

// SHOWING THAT VARIABLE CAN BE SET TO VALUE AND USED IN JSON INPUT FOR where
// var chr2 = 2;
// var geno_test = _.where(finreduced, {chr: chr2, chrPos:234668570});

export default {
  props: ['selectCat'],
  methods: {
    printPDF () {
            // console.log("require electron")
            // const BrowserWindow = require('electron')
            // console.log("new browserwindow")
            // let win = new BrowserWindow({width: 800, height: 1500})
            // console.log("loadurl")
            // win.loadURL('http://github.com')
            // console.log("contents")

            // let contents = win.webContents
            // console.log("contents")
            // console.log(contents)

            // printpdf stuff follows
    //   console.log('printPDF')
    //   console.log('document')
    //   console.log(document)

      var fs = require('fs')
            // var pdf = require('html-pdf');
      var htmldoc = document.documentElement.outerHTML
      fs.writeFile('test1.html', htmldoc, 'utf8')

    //   console.log('htmldoc')
    //   console.log(typeof (htmldoc))
    //   console.log(htmldoc)

            // var fs = require('fs');
            // var pdf = require('html-pdf');
            // var html = fs.readFileSync('test1.html', 'utf8');
            // var options = {
            //   format: 'Letter',
            //   "base": "/img/"
            //   };

            // pdf.create(htmldoc, options).toFile('./businesscard.pdf', function(err, res) {
            //   if (err) return console.log(err);
            //   console.log(res); // { filename: '/app/businesscard.pdf' }
            // });
    },
    testHTMLtoPDF () {
            // var fs = require('fs'),
            //     convertFactory = require('electron-html-to');
            //
            // var conversion = convertFactory({
            //     converterPath: convertFactory.converters.PDF
            // });
            //
            // conversion({
            //     html: '<h1>Hello World</h1>'
            // }, function(err, result) {
            //     if (err) {
            //         return console.error(err);
            //     }
            //
            //     console.log(result.numberOfPages);
            //     result.stream.pipe(fs.createWriteStream('/path/to/anywhere.pdf'));
            //     conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
            // });
    }

  },
  data () {
    return {
      msg: 'Hello from vue-loader!',
      msg1: '<h1>Hello from vue-loader!</h1>',
      pubtable: '',
      sorttable: '',
      focus_groupedData: '',
      pmID_groupedData: '',
      tableGroupedData: '',
      final_groupedData: '',
      genoTable: '',
      genoTableOne: '',
      genoTableTwo: '',
      genoTableThree: '',
      genoTableFour: '',
      show_genoTableOne: false,
      show_genoTableTwo: false,
      show_genoTableThree: false,
      show_genoTableFour: false,

      todisplay: []

    }
  },
  created: function () {
        // console.log('created ran')
        // GET PARAMS
    // var urlarray = window.location.hash.split('/')
    // var n = urlarray.length - 1
    // var getparam = decodeURI(urlarray[n])

        // GET OBJECTS WITH GENOTYPES OF PARTICIPANTS
    var genotypes = genos.Participants.Genotypes
    // console.log('genotypes')
    // console.log(genotypes)
        // VARIABLE TO CREATE HTML FOR DISPLAY OF TABLE
    var focustable = ''
    var studyGeno = []

        // EXAMPLE DATA FROM final_reduced data
        // {"cat":"Blood","type":"Symptom","focus":"Cholelithiasis-related traits in sickle cell anemia","date":"6/22/12","sizeInitRep":905,"ethRep":"African American/Afro-Caribbean","pmID":22558097,"auth":"Milton JN","pubDate":"4/27/12","journ":"PLoS One","pubLink":"http://www.ncbi.nlm.nih.gov/pubmed/22558097","studyName":"A genome-wide association study of total bilirubin and cholelithiasis risk in sickle cell anemia.","studySize":"905 African American cases","repSize":"2,152 African American cases","include":"EX","snpIndex":7626,"chr":2,"chrPos":234668570,"repGene":"UGT1A1, UGT1A10","mapGene":"UGT1A10;UGT1A8;UGT1A7;UGT1A6;UGT1A5;UGT1A9;UGT1A4;UGT1A1;UGT1A3","snpID":"rs887829-A","riskAllele":"A","riskAlleleFreq":0.45,"pVal":5e-25,"mlog":24.30103,"pValText":"","OR":0.19,"ConfIntText":"[NR] unit increase","Plat":"Illumina [569,615]","FilterStatus":"Filter 5: RAs on quantitative traits","in LD block (trait)":""}

        // UPDATE THE GENO file to include participant geno, genotype and table for display
    $.each(chapterSnps, function (index, value) {
            // console.log("value");
            // console.log(value);
      // var open = require('open')
      var loc = value.chrPos
      var ch = value.chr
      // var partValue = ''
      var count = 9999
      var format
      format = ''
      var partGeno = _.where(genotypes, {
        Chr_id: ch,
        Chr_pos: loc
      })

      var partGenoObj = value
      if (partGeno.length === 0) {
                // if (typeof.partGeno === undefined) {
        // var partGenoObj = value
        // console.log('partGeno')
        // console.log(partGeno)
                // console.log("typeof.partGeno")
                // console.log(typeof partGeno)

                // console.log("1 partGeno is undefined");
        partGenoObj.Geno = '-:-'
                // console.log("2 partGenoObj")
                // console.log(partGenoObj)
        partGenoObj.genoGroup = 'not found'
        count = 5

                // console.log("count");
                // console.log(count);
        partGenoObj.genoTable = 3
        studyGeno.push(partGenoObj)
        this.show_genoTableThree = true
      } else if (partGeno[0].Geno === 'blocked') {
        // var partGenoObj = value
        console.log('this is blocked')
        format = 'blocked'
        partGenoObj.genoGroup = 'blocked'
        partGenoObj.genoTable = 4
        studyGeno.push(partGenoObj)
        this.show_genoTableFour = true
      } else {
        // var partGenoObj = value
        var risk = new RegExp(value.riskAllele, 'g')
        var gen = partGeno[0].Geno
        count = (gen.match(risk) || []).length
        format = ''
        // console.log('1 partGeno is defined')
        // console.log('2 partGeno[0].Geno')
        // console.log(partGeno[0].Geno)

                // ADD PART GENO TO CHAPTER DATA
        partGenoObj.Geno = partGeno[0].Geno
                // console.log("3 partGenoObj")
                // console.log(partGenoObj)

        switch (count) {
          case 0:
            format = 'norisk'
            partGenoObj.genoGroup = 'norisk'
            partGenoObj.genoTable = 2
            studyGeno.push(partGenoObj)
            this.show_genoTableTwo = true

                        // console.log("format")
                        // console.log(format)
            break
          case 1:
            format = 'heterozygous'
            partGenoObj.genoGroup = 'heterozygous'
            partGenoObj.genoTable = 1
            this.show_genoTableOne = true
                        // console.log("format")
                        // console.log(format)
            studyGeno.push(partGenoObj)
            break
          case 2:
            format = 'homozygous'
            partGenoObj.genoGroup = 'homozygous'
            partGenoObj.genoTable = 1
            this.show_genoTableOne = true

                        // console.log("format")
                        // console.log(format)
            studyGeno.push(partGenoObj)
            break
        }
      }
    }) // END UPDATE Geno

        // GROUP TABLES BY TABLEGROUP = GROUPS BASED ON IF THE PARTICIPANT MATCHES THE RISK VARIANT
    var tableGroupedData = _.groupBy(studyGeno, function (d) {
      return d.genoTable
    })
        // console.log("tableGroupedData.1");
        // console.log(tableGroupedData);

    this.tableGroupedData = tableGroupedData // THIS IS SHOW THE TEXT OF THE JSON ON THE PAGE - CAN DELETE AFTER TROUBLE SHOOTING

        // END NEW TABLE GROUPING ****************************

        // START HTML BUILD ****************************
    var genoTable = ''
    var genoTableOne = ''
    var genoTableTwo = ''
    var genoTableThree = ''
    var genoTableFour = ''

    // console.log('tableGroupedData')
    // console.log(tableGroupedData)

    $.each(tableGroupedData, function (index, value) {
                // SORT TABLE TO GROUP SNP AND ORDER BY OR
      var sortTable = _.sortBy(value, function (d) {
        return d.orderID
      })

    //   console.log('sortTable')
    //   console.log(sortTable)

      genoTable = genoTable.concat(

                    '<table class="table table table-hover">' +
                    '<thead>' +
                    '<tr class="tr_top">' +
                    '<th width="20%" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Gene:" data-content="the specific gene in which the variant is located. In some cases a gene may have more than one name listed. ">Gene</th>' +
                    '<th width="15%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="snpID:" data-content="the unique identifier for the particular variant">snpID</th>' +
                    '<th width="10%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Chromosome:" data-content="the chromosome on which the particular variant is located.">Chrom.</th>' +
                    '<th width="10%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Your Genotype:" data-content="your DNA result at the particular variant location.  Genotypes are typically a combination of two DNA letter (A,T,G,C) - one inherited from each parent.">Your Genotype</th>' +
                    '<th width="10%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Risk allele:" data-content="at a variant location, the particular DNA letter found to be associated with an altered disease risk.">Risk allele</th>' +
                    // '<th width="10%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Reference:" data-content="research publication number.  See references at bottom of page.">Ref.</th>' +
                    '<th width="10%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Odds Ratio:" data-content="the estimated impact of the presence of the risk allele at this location.">Odds Ratio</th>' +
                    // '<th width="5%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Study Ethnicity Focus:" data-content="the ethnic background of the population in a study is important for understanding the impact for you.  The data shown is most relevant for people whose ethnicitiy is similar to that of the study.">Population strength</th>' +
                    // '<th width="5%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Population strength:" data-content="">Population strength</th>' +
                    // '<th width="5%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Gene:" data-content="">Rep. Size</th>' +
                    '<th width="5%" align="center" data-container="body" data-placement="top" data-trigger="hover" data-toggle="popover" title="Study Info.:" data-content="click to access more details about the research studies that have investigated the variant\'s impact.">Study Info.</th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>'
                )

                // MAKE THE ROWS OF THE TABLE
      $.each(sortTable, function (sortTableIndex, sortTableValue) {
        if (sortTableValue.order === 1) {
          genoTable = genoTable.concat(
                            '<tr class="tr_top" >' +
                            '<td scope="row" align="center" >' + sortTableValue.repGene + '</th>' +
                            '<td  align="center">' + sortTableValue.snpID + '</td>' +
                            '<td align="center">' + sortTableValue.chr + '</td>' +
                            '<td align="center">' + sortTableValue.Geno + '</td>' +
                            '<td align="center">' + sortTableValue.riskAllele + '</td>' +
                            // '<td align="center">' + 'Ref.' + '</td>' +
                            '<td align="center">' + sortTableValue.OR + '</td>' +
                            // '<td align="center" >' + 'EUR' + '</td>' +
                            // '<td align="center" >' + '++++' + '</td>' +
                            // '<td align="center" >' + '++++' + '</td>' +
                            // "<td align=\"center\"> <i class=\"fa fa-info-circle\" aria-hidden=\"true\" ></i></td>" +
                            '<td><i class="btn fa fa-info-circle" data-toggle="collapse" data-target="#collapseExample_SNPID' + sortTableValue.snpIndex +
                            '"aria-expanded="false" aria-controls="collapseExample"></i></td>' +
                            '</tr>' +
                            '<tr class="collapse"  id="collapseExample_SNPID' + sortTableValue.snpIndex + '">' +
                            '<td colspan="11">' +
                            '<div class="card">' +
                            '<div class="card-header rounded">' +
                            'Publication Information:' +
                            '</div>' +
                            '<div class="card-block">' +
                            '<h2 class="card-title"> <em>' + sortTableValue.studyName + '</em></h2>' +
                            // "<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>" +
                            '</div>' +

                            '<div class="card-block">' +
                            '<h3>Study size and ancestry (when available) of studied population: </h3>' +
                            '<div class="row">' +
                            '<div class=" col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1 ">' +
                            '<p><strong>Initial study: </strong>' + ' ' + sortTableValue.studySize + '<br />' +
                            '<strong>Replication study: </strong>' + ' ' + sortTableValue.repSize + '<br /></p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="card-block">' +
                            '<p><h3>Citation: </h3>' +
                            '<div class="row">' +
                            '<div class=" col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1 ">' +
                            '<strong>Journal: </strong>' + ' ' + sortTableValue.journ + '<br />' +
                            '<strong>Publication date: </strong>' + ' ' + sortTableValue.pubDate + '<br />' +
                            // '<strong>First Author: </strong>' + ' ' + sortTableValue.auth + '<br />' +
                            '<strong>Pubmed ID: </strong>' + ' ' + sortTableValue.pmID + '<br /></p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            // "<h1 class=\"card-title\">" + sortTableValue.studyName + "</h1>" +
                            // "<h2 class=\"card-subtitle mb-2 text-muted\">" + "h2 text" + "</h2>" +
                            // "<p class=\"card-text\">" + "With supporting text below as a natural lead-in to additional content." + "</p>" +
                            '<div class="card-footer">' +
                            // '<a href="' + sortTableValue.pubLink + '">link to pubmed</a> ' +
                            // "<small class=\"text-muted\"> Copy this link for reference to the article in pubmed: " + sortTableValue.pubLink + "</small>" +
                            '</div>' +
                            '</div>' +
                            '</td>' +
                            '</tr>'

                        )
        } else {
          genoTable = genoTable.concat(
                            '<tr class="tr_alt">' +
                            '<th scope="row" colspan="5" align="center"></th>' +
                            // '<td align="center" >' + 'Ref.' + '</td>' +
                            '<td align="center" >' + sortTableValue.OR + '</td>' +
                            // '<td align="center">' + 'EUR' + '</td>' +
                            // '<td align="center" >' + '++++' + '</td>' +
                            // '<td align="center" >' + '++++' + '</td>' +
                            '<td><i class="btn fa fa-info-circle" data-toggle="collapse" data-target="#collapseExample_SNPID' + sortTableValue.snpIndex +
                            '"aria-expanded="false" aria-controls="collapseExample"></i></td>' +
                            '</tr>' +
                            '<tr class="collapse"  id="collapseExample_SNPID' + sortTableValue.snpIndex + '">' +
                            '<td colspan="11">' +

                            '<div class="card">' +
                            '<div class="card-header rounded">' +
                            'Publication Information:' +
                            '</div>' +
                            '<div class="card-block">' +
                            '<h2 class="card-title"> <em>' + sortTableValue.studyName + '</em></h2>' +
                            // "<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>" +
                            '</div>' +

                            '<div class="card-block">' +
                            '<h3>Study size and ancestry (when available) of studied population: </h3>' +
                            '<div class="row">' +
                            '<div class=" col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1 ">' +
                            '<p><strong>Initial study: </strong>' + ' ' + sortTableValue.studySize + '<br />' +
                            '<strong>Replication study: </strong>' + ' ' + sortTableValue.repSize + '<br /></p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="card-block">' +
                            '<p><h3>Citation: </h3>' +
                            '<div class="row">' +
                            '<div class=" col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1 ">' +
                            '<strong>Journal: </strong>' + ' ' + sortTableValue.journ + '<br />' +
                            '<strong>Publication date: </strong>' + ' ' + sortTableValue.pubDate + '<br />' +
                            // '<strong>First Author: </strong>' + ' ' + sortTableValue.auth + '<br />' +
                            '<strong>Pubmed ID: </strong>' + ' ' + sortTableValue.pmID + '<br /></p>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            // "<h1 class=\"card-title\">" + sortTableValue.studyName + "</h1>" +
                            // "<h2 class=\"card-subtitle mb-2 text-muted\">" + "h2 text" + "</h2>" +
                            // "<p class=\"card-text\">" + "With supporting text below as a natural lead-in to additional content." + "</p>" +
                            '<div class="card-footer">' +
                            // '<a href="' + sortTableValue.pubLink + '">link to pubmed</a> ' +
                            // "<small class=\"text-muted\"> Copy this link for reference to the article in pubmed: " + sortTableValue.pubLink + "</small>" +
                            '</div>' +
                            '</div>' +
                            '</td>' +
                            '</tr>'
                        )
        }
      }) // END OF EACH FOR ROW A TABLE

                // ------------------------------------
                // END THE TABLE

      genoTable = genoTable.concat(
                    '</tbody>' +
                    '</table>' +

                    // ------------------------------------
                    // END THE CARD
                    '</div>' +
                    '</div>' +
                    // ------------------------------------
                    // STYLED BREAK
                    '<br>'
                )
                // ASSIGN THE HTML OF FOR THE TABLE TO THE APPROPRIATE SECTION
                // console.log("sortTableValue[0].genoTable");
                // console.log(sortTableValue[0].genoTable);

                // console.log("genoTable");
                // console.log(genoTable);

                // console.log("sortTableValue");
                // console.log(sortTableValue);

      var genTableID = value[0].genoTable
                // console.log("genoTable");
                // console.log(genoTable);
      switch (genTableID) {
        case 1:
                        // ADD THE HEADER OF EACH STUDY
          genoTableOne = genoTableOne.concat(
                            '<div class="card">' +
                            '<div class="card-block card-inverse " style="background-color: #FD901E;">' +
                            '<h1 class="card-title">' + 'Risk Increasing Variants:</h1>' +
                            '<p class="card-text">' +
                            'Variants in this table are those in which your genotype includes one or more copies of the risk increasing allele. ' + '</p>' +
                            '</div>' +
                            '<div class="card-block">' +
                            genoTable
                        )

                        // genoTableOne = genoTable;
          genoTable = ''
                        // console.log(value[0].genoTable);
                        // console.log("test concat genoTable");
                        // console.log(genoTable);
          break
        case 2:
                        // ADD THE HEADER OF EACH STUDY
          genoTableTwo = genoTableTwo.concat(
                            '<div class="card">' +
                            '<div class="card-block card-inverse card-primary">' +
                            '<h1 class="card-title">' + 'Risk Neutral Variants:</h1>' +
                            '<p class="card-text">' + 'These variants reflect research rather than clinical findings. The variants shown in this table are those where your genotype did not match the risk variant. ' + '</p>' +
                            '</div>' +
                            '<div class="card-block">' +
                            genoTable
                        )
                        // genoTableTwo = genoTable;
          genoTable = ''
                        // console.log(value[0].genoTable);
                        // console.log("genoTableTwo");
          break
        case 3:
                        // ADD THE HEADER OF EACH STUDY
          genoTableThree = genoTableThree.concat(
                            '<div class="card">' +
                            '<div class="card-block card-secondary">' +
                            '<h1 class="card-title">' + 'Undetermined Genotypes:  </h1>' +
                            '<p class="card-text">' + 'There was insufficient data to determine your genotype at the following locations.  Therefore, your genotype could not be distinguished as higher or lower risk.' +
                            '</p>' +
                            '</div>' +

                            '<div class="card-block">' +
                            genoTable
                        )
                        // genoTableThree = genoTable;
          genoTable = ''
                        // console.log(value[0].genoTable);
                        // console.log("genoTableThree");
          break
        case 4:
                        // ADD THE HEADER OF EACH STUDY
          genoTableFour = genoTableFour.concat(
                            '<div class="card">' +
                            '<div class="card-block  style="background-color: #333; border-color: #333;">' +
                            '<h1 class="card-title">' + 'Opted Out Variants:</h1>' +
                            '<p class="card-text">' +
                            'During the consent process, you opted out of learning genetic information for one or more diseases. The associated variants are listed in the table below, but your genotype(s) were not analyzed and have been excluded from the Guide.' +
                            '</p>' +
                            '</div>' +
                            '<div class="card-block">' +
                            genoTable
                        )
                        // genoTableFour = genoTable;
          genoTable = ''
                        // console.log(value[0].genoTable);
                        // console.log("genoTableFour");
      }
                // RESET genoTable
      genoTable = ''
    } //  END OF ALL TABLES)

        )
        // ASSIGN THE HTML FOR EACH TABLE

    this.genoTableOne = genoTableOne
    this.genoTableTwo = genoTableTwo
    this.genoTableThree = genoTableThree
    this.genoTableFour = genoTableFour

        // AND MAKE THEM VISIBLE
    if (genoTableOne.length !== 0) {
      this.show_genoTableOne = true
            // console.log("this.show_genoTableOne = true;")
    }
        // console.log("genoTableOne");
        // console.log(typeof genoTableOne);
        // console.log(genoTableOne.length);

    if (genoTableTwo.length !== 0) {
      this.show_genoTableTwo = true
            // console.log("this.show_genoTableTwo = true;")
    }
        // console.log("genoTableTwo");
        // console.log(typeof genoTableTwo);
        // console.log(genoTableTwo.length);

    if (genoTableThree.length !== 0) {
      this.show_genoTableThree = true
            // console.log("this.show_genoTableThree = true;")
    }
        // console.log("genoTableThree");
        // console.log(typeof genoTableThree);
        // console.log(genoTableThree.length);

    if (genoTableFour.length !== 0) {
      this.show_genoTableFour = true
            // console.log("this.show_genoTableFour = true;")
    }
        // console.log("genoTableFour");
        // console.log(genoTableFour);
        // console.log(typeof genoTableFour);
        // console.log("genoTableFour.length");
        // console.log(genoTableFour.length);
        // console.log("this.show_genoTableFour");
        // console.log(this.show_genoTableFour);

        // ****************************************************
        // START WORKING SECTION SHOWING DATA BY
        // GROUPING BY FOCUS - Hematocrit
    var groupedData = _.groupBy(finreduced, function (d) {
      return d.focus
    })

    $.each(groupedData, function (index, value) {
            // if (error) {
            //     // handle error
            //     console.log("broke just after starting html function")
            // }
            // console.log("started html function")
            // ADD THE HEADER OF EACH STUDY
      focustable = focustable.concat(

                '<div class="card">' +
                '<div class="card-block card-inverse card-primary">' +
                '<h1 class="card-title">' + value[0].studyName + '</h1>' +
                '<p class="card-text">' + 'Initial study size: ' + value[0].studySize + '</p>' +
                '<p class="card-text"> Replication study size: ' + value[0].repSize + '</p>' +
                '<p class="card-text"> Pubmed ID of publication: ' + value[0].pmID + '</p>' +
                '</div>' +
                '<div class="card-block">'
            )
            // ------------------------------------
            // START THE table
      focustable = focustable.concat(
                '<table class="table table-bordered">' +
                '<thead>' +
                '<tr>' +
                '<th>Gene</th>' +
                '<th align="center">snpID</th>' +
                '<th align="center">Chrom.</th>' +
                '<th align="center">Position</th>' +
                '<th align="center">Risk allele</th>' +
                '<th align="center">Odds Ratio</th>' +
                "<th align=\"center\">Participant's genotype</th>" +

                '</tr>' +
                '</thead>' +
                '<tbody>'
            )

      $.each(value, function (ind, val) {
                // if (error) {
                //     // handle error
                //     console.log("loc")
                //     console.log(loc)
                //     console.log("ch")
                //     console.log(ch)
                // }
        var loc = val.chrPos
        var ch = val.chr
        var partValue = ''
                // console.log("loc")
                // console.log(loc)
                // console.log("ch")
                // console.log(ch)
        var partGeno = _.where(genotypes, {
          Chr_id: ch,
          Chr_pos: loc
        })
                // console.log("partGeno")
                // console.log(partGeno)

                // CHECK TO SEE IF THERE IS A MATCH IN GENO
        if (partGeno.length === 0) {
                    // console.log("partGeno is undefined");
          partValue = 'Not called'
        } else {
          var gen = partGeno[0].Geno
                    // console.log("partGeno[0].Geno")
                    // console.log(partGeno[0].Geno)
          partValue = partGeno[0].Geno

          var risk = new RegExp(val.riskAllele, 'g')
                    // console.log("temp *********");
                    // console.log(risk);
          var count = (gen.match(risk) || []).length
                    // console.log("count");
                    // console.log(count);
          var format = ''
          switch (count) {
            case 0:
              format = 'norisk'
                            // console.log("format")
                            // console.log(format)
              break
            case 1:
              format = 'heterozygous'
                            // console.log("format")
                            // console.log(format)
              break
            case 2:
              format = 'homozygous'
                            // console.log("format")
                            // console.log(format)
          }
        } // END ELSE

                // ------------------------------------
                // ADD ROW FOR EACH VARIANT IN THE STUDY
        focustable = focustable.concat(
                    '<tr>' +
                    '<tr scope="row" align="center">' + val.repGene + '</th>' +
                    '<td align="center">' + val.snpID + '</td>' +
                    '<td align="center">' + val.chr + '</td>' +
                    '<td align="center">' + val.chrPos + '</td>' +
                    '<td align="center">' + val.riskAllele + '</td>' +
                    '<td align="center">' + val.OR + '</td>' +
                    '<td align="center" class="' + format + '">' + partValue + '</td>' +
                    '</tr>'
                )
      })
            // ------------------------------------
            // END THE TABLE
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
    }) // END OF EXCH(FOCUSCAT...

        // SET DATA pubtable TO FOCUSTABLE value
    this.pubtable = focustable
  },
  computed: {

  }

}
</script>
