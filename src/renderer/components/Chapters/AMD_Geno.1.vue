<script>
import fs from 'fs'
import path from 'path'

let AMDread = fs.readFileSync(path.join(__static, '/referencedata/AMD_ordered2.json'), 'utf8')
var AMD = JSON.parse(AMDread)

let finreducedread = fs.readFileSync(path.join(__static, '/referencedata/AMD.json'), 'utf8')
var finreduced = JSON.parse(finreducedread)

let genosread = fs.readFileSync(path.join(__static, '/participantdata/participantDataTEST.json'), 'utf8')
var genos = JSON.parse(genosread)
// import AMD from './assets/data/AMD_ordered2.json'
// import finreduced from './assets/data/AMD.json'
// import genos from './assets/data/hj.json'
var _ = require('underscore')
// import genos from './assets/data/SL159977_bear.json'

// console.log('AMD')
// console.log(AMD)
// console.log('finreduced')
// console.log(finreduced)

export default {
  props: ['selectCat'],
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
      goodcount: '',
      badcount: '',
      todisplay: []

    }
  },
  created: function () {
    // GET OBJECTS WITH GENOTYPES OF PARTICIPANTS
    var genotypes = genos.Genotypes
    // VARIABLE TO CREATE HTML FOR DISPLAY OF TABLE
    var focustable = ''
    var studyGeno = []
    var goodcount = 0
    var badcount = 0
    var lookup = {}
        // *******
    // var gooditems = json.DATA
    // var baditems = json.DATA
    var goodresult = []
    var badresult = []

    $.each(AMD, function (index, value) {
      var loc = value.chrPos.toString()
      var ch = value.chr.toString()

      var count = 9999
      var format
      format = ''

      var partGeno = _.where(genotypes, {
        Chr: ch,
        Pos: loc
      })

      var partGenoObj = value
      if (partGeno.length === 0) {
        partGenoObj.Geno = '-:-'
        // console.log("2 partGenoObj")
        // console.log(partGenoObj)
        partGenoObj.genoGroup = 'not found'
        count = 5
        format = ''
        partGenoObj.genoTable = 3
        studyGeno.push(partGenoObj)
        this.show_genoTableThree = true
        goodresult.push(partGeno.snpIndex)
        console.log('partGeno.snpIndex')
        console.log(partGeno.snpIndex)
        console.log('goodresult')
        console.log(goodresult)
      } else if (partGeno[0].Geno === 'blocked') {
        // var partGenoObj = value
        // console.log('this is blocked')
        format = 'blocked'
        partGenoObj.genoGroup = 'blocked'
        partGenoObj.genoTable = 4
        studyGeno.push(partGenoObj)
        this.show_genoTableFour = true
      } else {
        // var partGenoObj = value
        // console.log('check for risk variant')
        // console.log('value')
        // console.log(value)
        var risk = new RegExp(value.riskAllele, 'g')
        // console.log('risk')
        // console.log(risk)
        // console.log('typeof risk')
        // console.log(typeof risk)
        // console.log('partGeno[0]')
        // console.log(partGeno[0])
        var gen = partGeno[0].Gen
        // console.log('gen')
        // console.log(gen)
        count = (gen.match(risk) || []).length
        format = ''
        partGenoObj.Geno = partGeno[0].Gen
        // console.log("3 partGenoObj")
        // console.log(partGenoObj)

        switch (count) {
          case 0:
            // *********************************************
            // NOTHING MATCHES RISK ALLELE
            // *********************************************
            format = 'norisk'
            partGenoObj.genoGroup = 'norisk'
            console.log('norisk')
            partGenoObj.genoTable = 2
            // *********************************************
            // ONLY ADD UNIQUE TO ARRAY FOR COUNTING
            // *********************************************
            var currentsnpID = partGenoObj.snpID
            // if ($.inArray(currentsnpID, goodresult) > -1) {
            //   console.log("duplicate")
            // }
            if ($.inArray(currentsnpID, goodresult) === -1) {
              console.log("new HET")
              goodresult.push(partGenoObj.snpID)
              console.log('length.goodresult')
              console.log(goodresult.length)
              this.goodcount = goodresult.length
            }
            partGenoObj.alleleCount = 0
            this.show_genoTableTwo = true
            studyGeno.push(partGenoObj)
            break
          case 1:
            // *********************************************
            // HETEROZYGOUS FOR RISK ALLELE
            // *********************************************
            format = 'heterozygous'
            partGenoObj.genoGroup = 'heterozygous'
            partGenoObj.alleleCount = 1
            this.show_genoTableOne = true
            // *********************************************
            // ONLY ADD UNIQUE TO ARRAY FOR COUNTING
            // *********************************************
            if (partGenoObj.model === 'rec') {
              partGenoObj.ORcalc = partGenoObj.OR
              partGenoObj.genoTable = 2
              if ($.inArray(currentsnpID, goodresult) === -1) {
                console.log("new")
                goodresult.push(partGenoObj.snpID)
                console.log('length.goodresult')
                console.log(goodresult.length)
                this.goodcount = goodresult.length
              }
              this.goodcount = this.goodcount + 1
            //   console.log(this.goodcount)
            //   console.log(this.goodcount)
            } else if (partGenoObj.model === 'dom') {
              partGenoObj.ORcalc = partGenoObj.OR
              partGenoObj.genoTable = 1
            } else if (partGenoObj.model === 'add') {
              partGenoObj.ORcalc = partGenoObj.OR
              partGenoObj.genoTable = 1
            } else {
              partGenoObj.ORcalc = 42
              partGenoObj.genoTable = 1
            }

                        // console.log("format")
            studyGeno.push(partGenoObj)
            break
          case 2:
            format = 'homozygous'
            partGenoObj.genoGroup = 'homozygous'
            partGenoObj.genoTable = 1
            partGenoObj.alleleCount = 2
            this.show_genoTableOne = true
            if (partGenoObj.model === 'rec') {
              partGenoObj.ORcalc = partGenoObj.OR
              partGenoObj.genoTable = 1
            } else if (partGenoObj.model === 'dom') {
              partGenoObj.ORcalc = partGenoObj.OR
              partGenoObj.genoTable = 1
            } else if (partGenoObj.model === 'add') {
              partGenoObj.ORcalc = partGenoObj.OR * 2
              partGenoObj.genoTable = 1
            } else {
              partGenoObj.ORcalc = 42
              partGenoObj.genoTable = 1
            }

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
    console.log("tableGroupedData.1")
    console.log(tableGroupedData)

    // this.tableGroupedData = tableGroupedData // THIS IS SHOW THE TEXT OF THE JSON ON THE PAGE - CAN DELETE AFTER TROUBLE SHOOTING

    // END NEW TABLE GROUPING ****************************

    // START HTML BUILD ****************************
    var genoTable = ''
    var genoTableOne = ''
    var genoTableTwo = ''
    var genoTableThree = ''
    var genoTableFour = ''

    // console.log('tableGroupedData')
    // console.log(tableGroupedData)

    // *********************************************
    // tableGroupedData IS GROUPED INTO TABLE 1 (RISK) AND TABLE 2 (RISK NEUTRAL)
    // BELOW IS TO FORMAT TABLE 1 THEN TABLE 2 IN THE HTML TO BE DISPLAYED
    // *********************************************

    // $.each(tableGroupedData, function (index, value) {
                // SORT TABLE TO GROUP SNP AND ORDER BY OR
    // *********************************************
    // CREATE TABLE 1 FROM GENOTYABLE = 1
    // *********************************************
    var soratTableOne = tableGroupedData[1]
    var sortTable = _.sortBy(soratTableOne, function (d) {
      return d.orderID
    })

    //   console.log('sortTable')
    //   console.log(sortTable)

    genoTable = genoTable.concat(

                    '<table class="table table table-hover">' +
                    '<tbody>'
                )

                // MAKE THE ROWS OF THE TABLE
    $.each(sortTable, function (sortTableIndex, sortTableValue) {
      if (sortTableValue.order === 1) {
        genoTable = genoTable.concat(
                            '<tr class="tr_top" >' +
                            '<td width="20%" scope="row" align="center" >' + sortTableValue.repGene + '</td>' +
                            '<td  width="15%" align="center">' + sortTableValue.snpID + '</td>' +
                            // '<td align="center">' + sortTableValue.chr + '-' + sortTableValue.chrPos + '</td>' +
                            '<td width="10%" align="center">' + sortTableValue.Geno + '</td>' +
                            '<td width="10%" align="center">' + sortTableValue.riskAllele + '</td>' +
                            // '<td align="center">' + 'Ref.' + '</td>' +
                            '<td width="5%" align="center">' + sortTableValue.OR + '</td>' +
                            '<td width="10%" align="center" >' + sortTableValue.genoGroup.substring(0, 4) + '</td>' +
                            '<td width="5%" align="center" >' + sortTableValue.ORcalc + '</td>' +
                            '<td width="10%" align="center" >' + sortTableValue.model + '</td>' +
                            // '<td align="center" >' + '++++' + '</td>' +
                            // '<td align="center" >' + '++++' + '</td>' +
                            // "<td align=\"center\"> <i class=\"fa fa-info-circle\" aria-hidden=\"true\" ></i></td>" +
                            '<div><td width="10%"><i class="btn fa fa-info-circle" data-toggle="collapse" data-target="#collapseExample_SNPID' + sortTableValue.snpIndex +
                            '"aria-expanded="false" aria-controls="collapseExample"></i></td>' +
                            '</tr>' +
                                '<tr class="collapse"  id="collapseExample_SNPID' + sortTableValue.snpIndex + '">' +
                                    '<td colspan="9" align="center">' +
                                        '<div class="s8 box col-11" align="left">' +
                                            '<div class="cit-header">' +
                                                'Publication Information:' +
                                            '</div>' +
                                            '<div class="cit-info">' +
                                                '<div class="cit-title">Title: <i>' + sortTableValue.studyName + '</i></div>' +
                                                // "<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>" +
                                                '<div class="cit-size">' +
                                                    'Study size and ancestry (when available) of studied population:' +
                                                        '<div class=" col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1 ">' +
                                                            '<p>Initial study: ' + ' ' + sortTableValue.studySize + '<br />' +
                                                            'Replication study:' + ' ' + sortTableValue.repSize + '<br /></p>' +
                                                        '</div>' +
                                                '</div>' +
                                                '<p>Citation:' +
                                                '<div>' +
                                                    'Journal:  ' + ' ' + sortTableValue.journ + '<br />' +
                                                    'Publication date: ' + ' ' + sortTableValue.pubDate + '<br />' +
                                                    // '<strong>First Author: </strong>' + ' ' + sortTableValue.auth + '<br />' +
                                                    'Pubmed ID: ' + ' ' + sortTableValue.pmID + '<br /></p>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</td>' +
                                '</tr>'

                        )
      } else {
        genoTable = genoTable.concat(
                            '<tr class="tr_alt">' +
                            '<th scope="row" colspan="4" align="center"></th>' +
                            // '<td align="center" >' + 'Ref.' + '</td>' +
                            '<td align="center" >' + sortTableValue.OR + '</td>' +
                            '<td align="center" >' + sortTableValue.genoGroup.substring(0, 4) + '</td>' +
                            '<td align="center" >' + sortTableValue.ORcalc + '</td>' +
                            '<td align="center" >' + sortTableValue.model + '</td>' +
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
                    // '</div>' +
                    // '</div>' +
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
          console.log('case 1')
          genoTableOne = genoTable
          this.goodcount = this.goodcount + 1
          console.log(this.goodcount)
                        // ADD THE HEADER OF EACH STUDY
        //   genoTableOne = genoTableOne.concat(
        //                     '<div class="card">' +
        //                     '<div class="card-block card-inverse " style="background-color: #FD901E;">' +
        //                     '<h1 class="card-title">' + 'Risk Increasing Variants:</h1>' +
        //                     '<p class="card-text">' +
        //                     'Variants in this table are those in which your genotype includes one or more copies of the risk increasing allele. ' + '</p>' +
        //                     '</div>' +
        //                     '<div class="card-block">' +
        //                     genoTable
        //                 )
          genoTable = ''
                        // console.log(value[0].genoTable);
                        // console.log("test concat genoTable");
                        // console.log(genoTable);
          break
        case 2:
          console.log('case 2')
                        // ADD THE HEADER OF EACH STUDY
          genoTableTwo = genoTable
        //   genoTableTwo.concat(
        //                     '<div class="card">' +
        //                     '<div class="card-block card-inverse card-primary">' +
        //                     '<h1 class="card-title">' + 'Risk Neutral Variants:</h1>' +
        //                     '<p class="card-text">' + 'These variants reflect research rather than clinical findings. The variants shown in this table are those where your genotype did not match the risk variant. ' + '</p>' +
        //                     '</div>' +
        //                     '<div class="card-block">' +
        //                     genoTable
        //                 )
                        // genoTableTwo = genoTable;
          genoTable = ''
                        // console.log(value[0].genoTable);
                        // console.log("genoTableTwo");
          break
        case 3:
          console.log('case 3')
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
          console.log('case 4')
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
    // } //  END OF ALL TABLES)
        // )
    // *********************************************
    // PARENTHESIS AND CURLY BRACKET ABOVE IS END OF SECTION THAT USED TO FORMAT THE TABLES WHEN THEY HAD SAME DATA
    // *********************************************
    
    // *********************************************
    // ASSIGN THE HTML FOR EACH TABLE
    // *********************************************

    this.genoTableOne = genoTableOne
    this.genoTableTwo = genoTableTwo
    this.genoTableThree = genoTableThree
    this.genoTableFour = genoTableFour
    console.log('END OF CODE length.goodresult')
    console.log(goodresult.length)
    this.goodcount = goodresult.length
    // console.log('genoTableOne')
    // console.log(genoTableOne)
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
                // '</tbody>' +
                // '</table>' +

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

table {
  table-layout: fixed;
}
.tableheader{
    color:white; 
    padding-left:20px;
    padding-bottom:10px;
    border-width: 5px;
}
.tableheader .card-text{
    font-size: 20px;
    font-weight: normal;
}

.cit-header{
    border-bottom: 1px solid darkgrey;
    padding:10px;
    margin:5px;
    font-size: 30px;
    font-weight: normal;
    border-radius: 10px 10px 0px 0px;

}
.citation{
    margin:10px;
    padding:0px;
    border-radius: 10px 10px 0px 0px;

    background-color: rgb(235, 231, 231);

}
.cit-info{
    padding:20px;
}
.cit-title{
    font-size: 20px;
    font-weight: normal;
    padding-bottom: 25px;
}
.cit-size{
    font-size: 20px;
    font-weight: normal;
    padding-bottom: 25px;
}
/*==================================================
 * Effect 2
 * ===============================================*/
.box {
    width:70%;
    background:#FFF;
    margin:40px auto;
    min-height: 100px;
    display:inline-block;
    position:relative;
    border:1px solid #ccc;
    padding:5px;
    background:#f2f2f2;
    margin-bottom:30px;
    box-shadow: 0 8px 6px -6px black;
}

.effect2{
  position: relative;
}
.effect2:before, .effect2:after
{
  z-index: -1;
  position: absolute;
  content: "";
  bottom: 15px;
  left: 10px;
  width: 50%;
  top: 80%;
  max-width:300px;
  background: #777;
  -webkit-box-shadow: 0 15px 10px #777;
  -moz-box-shadow: 0 15px 10px #777;
  box-shadow: 0 15px 10px #777;
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  -o-transform: rotate(-3deg);
  -ms-transform: rotate(-3deg);
  transform: rotate(-3deg);
}
.effect2:after
{
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -o-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  transform: rotate(3deg);
  right: 10px;
  left: auto;
}
.s8:before, .s8:after {
   z-index: -1;
   position: absolute;
   content: "";
   bottom: 25px;
   left: 10px;
   width: 50%;
   top: 80%;
   max-width:300px;
   background: #777;
   -webkit-box-shadow: 0 35px 20px #777;
   -moz-box-shadow: 0 35px 20px #777;
   box-shadow: 0 35px 20px #777;
   -webkit-transform: rotate(-8deg);
   -moz-transform: rotate(-8deg);
   -o-transform: rotate(-8deg);
   -ms-transform: rotate(-8deg);
   transform: rotate(-8deg);
}
.s8:after {
   -webkit-transform: rotate(8deg);
   -moz-transform: rotate(8deg);
   -o-transform: rotate(8deg);
   -ms-transform: rotate(8deg);
   transform: rotate(8deg);
   right: 10px;
   left: auto;
}

</style>

<template>
<div class="row">
<div class="section">
    <div class="container">
<div class="row">
    <div v-if="show_genoTableOne">
        <div style="background-color: #FD901E; margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px;">
            <div class="card" style="border: 1px;">
                <div class="tableheader" style="background-color: #FD901E;">
                    <p><h1>Risk Increasing Variants: {{goodcount}}</h1></p>
                    <p class="card-text">
                        Variants in this table are those in which your genotype includes one or more copies of the risk increasing allele.
                    </p>
                    <p>count {{goodcount}}</p>
                </div>
                <div class="card-block">
                    <div>
                        <table class="table table table-hover" style="margin-bottom:0px">
                            <thead>
                                <tr class="tr_top">
                                    
                                    <th width="20%" align="center" v-b-popover.hover.top="'the specific gene in which the variant is located. In some cases a gene may have more than one name listed.'" title="Gene:"> Gene</th>

                                    <th width="15%" align="center" v-b-popover.hover.top="'the unique identifier for the particular variant'" title="snpID:"  data-content="the unique identifier for the particular variant">snpID</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'your DNA result at the particular variant location.  Genotypes are typically a combination of two DNA letter (A,T,G,C) - one inherited from each parent.'" title="Your Genotype:">Your Genotype</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'at a variant location, the particular DNA letter found to be associated with an altered disease risk.'" title="Risk allele:" data-content="">Risk allele</th>
                                    <th width="5%" align="center" v-b-popover.hover.top="'this number represents the estimated impact of the presence of the risk allele at this location. ************ (should this be removed?)'" title="Odds Ratio:" data-content="research publication number.  See references at bottom of page.">OR</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'shown for reviewers to check calculations - to be removed'" title=" Calcualted Odds Ratio:">Zyg?</th>
                                    <th width="5%" align="center" v-b-popover.hover.top="'this number represents the estimated impact of the risk allele based on your genotype and the model used in the publication.'" title=" Calcualted Odds Ratio:">OR calc</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'the type of inheritance patern required to see the phenotype.  \'add\' means additive.  In this model, each allele adds additional risk. \'rec\' means recessive. In this model, only the homozygous genotype has an increased risk. \'dom\' means dominant.  In this model one or two risk alleles result in the same total risk.'" title="Inheritance model:" data-content="Hom het or add.">model</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'click to access more details about the research studies that have investigated the variant\'s impact.'" title="Study Info.:">Study Info.</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                        <div v-html="genoTableOne"></div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="style18">
    </div>        
    

        <div v-if="show_genoTableTwo">
            <div style="background-color: #1E8BFD; margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px;">
            <div class="card" style="border: 1px;">
                <div class="tableheader" style="background-color: #1E8BFD;">
                    <p><h1>Risk Neutral Variants:</h1></p>
                    <p class="card-text">
                        These variants reflect research rather than clinical findings. The variants shown in this table are those where your genotype did not match the risk variant.
                    </p>
                </div>
                <div class="card-block">
                    <div>
                        <table class="table table table-hover" style="margin-bottom:0px">
                            <thead>
                                <tr class="tr_top">
                                    
                                    <th width="20%" align="center" v-b-popover.hover.top="'the specific gene in which the variant is located. In some cases a gene may have more than one name listed.'" title="Gene:"> Gene</th>

                                    <th width="15%" align="center" v-b-popover.hover.top="'the unique identifier for the particular variant'" title="snpID:"  data-content="the unique identifier for the particular variant">snpID</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'your DNA result at the particular variant location.  Genotypes are typically a combination of two DNA letter (A,T,G,C) - one inherited from each parent.'" title="Your Genotype:">Your Genotype</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'at a variant location, the particular DNA letter found to be associated with an altered disease risk.'" title="Risk allele:" data-content="">Risk allele</th>
                                    <th width="5%" align="center" v-b-popover.hover.top="'this number represents the estimated impact of the presence of the risk allele at this location. ************ (should this be removed?)'" title="Odds Ratio:" data-content="research publication number.  See references at bottom of page.">OR</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'shown for reviewers to check calculations - to be removed'" title=" Calcualted Odds Ratio:">Zyg?</th>
                                    <th width="5%" align="center" v-b-popover.hover.top="'this number represents the estimated impact of the risk allele based on your genotype and the model used in the publication.'" title=" Calcualted Odds Ratio:">OR calc</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'the type of inheritance patern required to see the phenotype.  \'add\' means additive.  In this model, each allele adds additional risk. \'rec\' means recessive. In this model, only the homozygous genotype has an increased risk. \'dom\' means dominant.  In this model one or two risk alleles result in the same total risk.'" title="Inheritance model:" data-content="Hom het or add.">model</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'click to access more details about the research studies that have investigated the variant\'s impact.'" title="Study Info.:">Study Info.</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                        <div v-html="genoTableTwo"></div>
                    </div>
                </div>
            </div>
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
    </div> <!-- end card -->
    </div> <!-- end rounded style -->
    </div>
    </div>
    </div>
    </div>
</div>

</div>

</template>
