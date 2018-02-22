<script>
import fs from 'fs'
import path from 'path'

let AMDread = fs.readFileSync(path.join(__static, '/referencedata/RA_ordered.json'), 'utf8')
var chapter = JSON.parse(AMDread)

let finreducedread = fs.readFileSync(path.join(__static, '/referencedata/RA.json'), 'utf8')
var finreduced = JSON.parse(finreducedread)

let genosread = fs.readFileSync(path.join(__static, '/participantdata/participantDataTEST.json'), 'utf8')
var genos = JSON.parse(genosread)

var _ = require('underscore')

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
      todisplay: [],
      table1: false,
      table2: false

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
    var currentsnpID = ''

    var goodresult = []
    var badresult = []
    var countall = 0

    console.log('chapter')
    console.log(chapter)
    $.each(chapter, function (index, value) {
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
      console.log('value')
      console.log(value)
      if (partGeno.length === 0) {
        partGenoObj.Geno = '-:-'

        partGenoObj.genoGroup = 'not found'
        count = 5
        format = ''
        partGenoObj.genoTable = 3
        studyGeno.push(partGenoObj)
        this.show_genoTableThree = true

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
        // console.log("count risk ale:" + count)
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
            // console.log('norisk')
            partGenoObj.genoTable = 2
            // *********************************************
            // ONLY ADD UNIQUE TO ARRAY FOR COUNTING
            // *********************************************
            currentsnpID = partGenoObj.snpID
            if ($.inArray(currentsnpID, goodresult) === -1) {
            //   console.log("new HET")
              goodresult.push(partGenoObj.snpID)
            //   console.log('partGenoObj.snpID')
            //   console.log(partGenoObj.snpID)
            //   console.log('length.goodresult')
            //   console.log(goodresult.length)
            }
            partGenoObj.alleleCount = 0
            this.show_genoTableTwo = true
            studyGeno.push(partGenoObj)
            countall++
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
              currentsnpID = partGenoObj.snpID
                if ($.inArray(currentsnpID, goodresult) === -1) {
                //   console.log("new HET")
                goodresult.push(partGenoObj.snpID)
                // console.log('partGenoObj.snpID')
                // console.log(partGenoObj.snpID)
                // console.log('length.goodresult')
                // console.log(goodresult.length)
                }
              this.goodcount = this.goodcount + 1
            //   console.log(this.goodcount)
            //   console.log(this.goodcount)
            } else if (partGenoObj.model === 'dom') {
              partGenoObj.ORcalc = partGenoObj.OR
              partGenoObj.genoTable = 1
              currentsnpID = partGenoObj.snpID
                if ($.inArray(currentsnpID, badresult) === -1) {
                //   console.log("new HET")
                badresult.push(partGenoObj.snpID)
                // console.log('partGenoObj.snpID')
                // console.log(partGenoObj.snpID)
                // console.log('length.goodresult')
                // console.log(goodresult.length)
                }
            } else if (partGenoObj.model === 'add') {
              partGenoObj.ORcalc = partGenoObj.OR
              partGenoObj.genoTable = 1
              currentsnpID = partGenoObj.snpID
                if ($.inArray(currentsnpID, badresult) === -1) {
                //   console.log("new HET")
                badresult.push(partGenoObj.snpID)
                // console.log('partGenoObj.snpID')
                // console.log(partGenoObj.snpID)
                // console.log('length.goodresult')
                // console.log(goodresult.length)
                }
            } else {
              partGenoObj.ORcalc = 42
              partGenoObj.genoTable = 1
            }

                        // console.log("format")
            studyGeno.push(partGenoObj)
            countall++
            // console.log("countall:" + countall)

            break
          case 2:
            format = 'homozygous'
            partGenoObj.genoGroup = 'homozygous'
            partGenoObj.genoTable = 1
            partGenoObj.alleleCount = 2
            this.show_genoTableOne = true
              currentsnpID = partGenoObj.snpID
                if ($.inArray(currentsnpID, badresult) === -1) {
                //   console.log("new HET")
                badresult.push(partGenoObj.snpID)
                // console.log('partGenoObj.snpID')
                // console.log(partGenoObj.snpID)
                // console.log('length.goodresult')
                // console.log(goodresult.length)
                //   this.goodcount = goodresult.length
                }
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
            studyGeno.push(partGenoObj)
            countall++
            // console.log("countall:" + countall)
            break
        }
            // console.log('studyGeno')
            // console.log(studyGeno)
      }
    }) // END UPDATE Geno

        // GROUP TABLES BY TABLEGROUP = GROUPS BASED ON IF THE PARTICIPANT MATCHES THE RISK VARIANT
    var tableGroupedData = _.groupBy(studyGeno, function (d) {
      return d.genoTable
    })
    // console.log("tableGroupedData.1")
    // console.log(tableGroupedData)

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

    $.each(tableGroupedData, function (index, value) {
    // *********************************************
    // CREATE TABLE 1 FROM GENOTYABLE = 1
    // *********************************************
    var genTableID = value[0].genoTable
    console.log("genTableID:" + genTableID)
    switch(genTableID){
        case 1:
        var genoTable = ''
        // SORT TABLE TO GROUP SNP AND ORDER BY OR
            var sortTable = _.sortBy(value, function (d) {
            return d.orderID
            })
            // console.log('sortTable')
            // console.log(sortTable)            
            // console.log('genoTable')
            // console.log(genoTable)
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
                                    '<td width="10%" align="center">' + sortTableValue.Geno + '</td>' +
                                    '<td width="10%" align="center">' + sortTableValue.riskAllele + '</td>' +
                                    '<td width="5%" align="center">' + sortTableValue.OR + '</td>' +
                                    '<td width="10%" align="center" >' + sortTableValue.genoGroup.substring(0, 4) + '</td>' +
                                    '<td width="5%" align="center" >' + sortTableValue.ORcalc + '</td>' +
                                    '<td width="10%" align="center" >' + sortTableValue.model + '</td>' +
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
                                    '<td align="center" >' + sortTableValue.OR + '</td>' +
                                    '<td align="center" >' + sortTableValue.genoGroup.substring(0, 4) + '</td>' +
                                    '<td align="center" >' + sortTableValue.ORcalc + '</td>' +
                                    '<td align="center" >' + sortTableValue.model + '</td>' +
                                    '<td><i class="btn fa fa-info-circle" data-toggle="collapse" data-target="#collapseExample_SNPID' + sortTableValue.snpIndex +
                                    '"aria-expanded="false" aria-controls="collapseExample"></i></td>' +
                                    '</tr>' +
                                    '<tr class="collapse" id="collapseExample_SNPID' + sortTableValue.snpIndex + '">' +
                                            '<td colspan="9" align="center">' +
                                                '<div class="s8 box col-11" align="left">' +
                                                    '<div class="cit-header">' +
                                                        'Publication Information:' +
                                                    '</div>' +
                                                    '<div class="cit-info">' +
                                                        '<div class="cit-title">Title: <i>' + sortTableValue.studyName + '</i></div>' +
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
                                                            'Pubmed ID: ' + ' ' + sortTableValue.pmID + '<br /></p>' +
                                                        '</div>' +
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

                            '<br>'
                        )
            genoTableOne = genoTable
    break
    case 2:
    // *********************************************
    // CREATE TABLE 2 FROM GENOTABLE = 2
    // *********************************************
        var genoTable = ''
        // SORT TABLE TO GROUP SNP AND ORDER BY OR
        var sortTable = _.sortBy(value, function (d) {
        return d.orderID
        })
        // console.log('sortTable')
        // console.log(sortTable)
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
                                '<td  width="20%" align="center">' + sortTableValue.snpID + '</td>' +
                                '<td width="20%" align="center">' + sortTableValue.Geno + '</td>' +
                                '<td width="20%" align="center">' + sortTableValue.riskAllele + '</td>' +
                                // '<td width="5%" align="center">' + sortTableValue.OR + '</td>' +
                                // '<td width="10%" align="center" >' + sortTableValue.genoGroup.substring(0, 4) + '</td>' +
                                // '<td width="5%" align="center" >' + sortTableValue.ORcalc + '</td>' +
                                // '<td width="10%" align="center" >' + sortTableValue.model + '</td>' +
                                '<div><td width="20%"><i class="btn fa fa-info-circle fa-align-center" style="text-align:center" data-toggle="collapse" data-target="#collapseExample_SNPID' + sortTableValue.snpIndex +
                                '"aria-expanded="false" aria-controls="collapseExample"></i></td>' +
                                '</tr>' +
                                    '<tr class="collapse" id="collapseExample_SNPID' + sortTableValue.snpIndex + '">' +
                                            '<td colspan="9" align="center">' +
                                                '<div class="s8 box col-11" align="left">' +
                                                    '<div class="cit-header">' +
                                                        'Publication Information:' +
                                                    '</div>' +
                                                    '<div class="cit-info">' +
                                                        '<div class="cit-title">Title: <i>' + sortTableValue.studyName + '</i></div>' +
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
                                // '<td align="center" >' + sortTableValue.OR + '</td>' +
                                // '<td align="center" >' + sortTableValue.genoGroup.substring(0, 4) + '</td>' +
                                // '<td align="center" >' + sortTableValue.ORcalc + '</td>' +
                                // '<td align="center" >' + sortTableValue.model + '</td>' +
                                '<td><i class="btn fa fa-info-circle" data-toggle="collapse" data-target="#collapseExample_SNPID' + sortTableValue.snpIndex +
                                '"aria-expanded="false" aria-controls="collapseExample"></i></td>' +
                                '</tr>' +
                                '<tr class="collapse" id="collapseExample_SNPID' + sortTableValue.snpIndex + '">' +
                                            '<td colspan="9" align="center">' +
                                                '<div class="s8 box col-11" align="left">' +
                                                    '<div class="cit-header">' +
                                                        'Publication Information:' +
                                                    '</div>' +
                                                    '<div class="cit-info">' +
                                                        '<div class="cit-title">Title: <i>' + sortTableValue.studyName + '</i></div>' +
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
                                                            'Pubmed ID: ' + ' ' + sortTableValue.pmID + '<br /></p>' +
                                                        '</div>' +
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

                        '<br>'
                    )
        genoTableTwo = genoTable
    break
    }
    } //  END OF ALL TABLES)
        )
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
    // console.log('END OF CODE length.goodresult')
    // console.log('goodresult.length')
    // console.log(goodresult.length)
    this.goodcount = goodresult.length
    // console.log('badresult.length')
    // console.log(badresult.length)
    this.badcount = badresult.length
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
  methods: {
      tableonebutton () {
       this.table1 = !this.table1   
      },
      tabletwobutton () {
       this.table2 = !this.table2  
      }
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

td,th {
  text-align: center;
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
.tblbutton {
    background-color: white;
    margin-top: 10px;
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
                <div class="tableheader row" style="background-color: #FD901E;">
                    <div class="col-9">
                        <p><h1>Risk Increasing Variants: {{badcount}}</h1></p>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-lg tblbutton" v-on:click="tableonebutton">View Details</button>
                    </div>
                        <p class="card-text">
                            Variants in this table are those in which your genotype includes one or more copies of the risk increasing allele.
                        </p>
                </div>
                <div class="card-block" v-show="table1">
                    <div>
                        <table class="table table table-hover" style="margin-bottom:0px">
                            <thead>
                                <tr class="tr_top">
                                    
                                    <th width="20%" align="center" v-b-popover.hover.top="'The specific gene in which the variant is located. In some cases a gene may have more than one name listed.'" title="Gene:"> Gene</th>

                                    <th width="15%" align="center" v-b-popover.hover.top="'The unique identifier for the particular variant'" title="snpID:"  data-content="the unique identifier for the particular variant">snpID</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'Your DNA result at the particular variant location.  Genotypes are typically a combination of two DNA letter (A,T,G,C) - one inherited from each parent.'" title="Your Genotype:">Your Genotype</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'At a variant location, the particular DNA letter found to be associated with an altered disease risk.'" title="Risk allele:" data-content="">Risk allele</th>
                                    <th width="5%" align="center" v-b-popover.hover.top="'This number represents the estimated impact of the presence of the risk allele at this location. ************ (should this be removed?)'" title="Odds Ratio:" data-content="research publication number.  See references at bottom of page.">OR</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'Shown for reviewers to check calculations - to be removed'" title=" Calcualted Odds Ratio:">Zyg?</th>
                                    <th width="5%" align="center" v-b-popover.hover.top="'This number represents the estimated impact of the risk allele based on your genotype and the model used in the publication. A higher odds ratio means there is a higher risk.'" title=" Calcualted Odds Ratio:">OR calc</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'The type of inheritance pattern required to see the phenotype.  \'add\' means additive.  In this model, each allele adds additional risk. \'rec\' means recessive. In this model, only the homozygous genotype has an increased risk. \'dom\' means dominant.  In this model one or two risk alleles result in the same total risk.'" title="Inheritance model:" data-content="Hom het or add.">model</th>
                                    <th width="10%" align="center" v-b-popover.hover.top="'Click to access more details about the research studies that have investigated the variant\'s impact. If multiple studies have implicated a variant, then multiple rows are shown below.'" title="Study Info.:">Study Info.</th>
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
                <div class="tableheader row" style="background-color: #1E8BFD;">
                    <div class="col-9">
                    <p><h1>Risk Neutral Variants: {{goodcount}}</h1></p>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-lg tblbutton" v-on:click="tabletwobutton">View Details</button>
                    </div>
                        <p class="card-text">
                        The variants shown in this table are those where your genotype did not match the risk variant.                        </p>
                </div>
                <div class="card-block" v-show="table2">
                    <div>
                        <table class="table table table-hover" style="margin-bottom:0px">
                            <thead>
                                <tr class="tr_top" style="text-align:center">
                                    
                                    <th width="20%" align="center" style="text-align:center" v-b-popover.hover.top="'the specific gene in which the variant is located. In some cases a gene may have more than one name listed.'" title="Gene:"> Gene</th>

                                    <th width="20%" align="center" style="text-align:center" v-b-popover.hover.top="'the unique identifier for the particular variant'" title="snpID:"  data-content="the unique identifier for the particular variant">snpID</th>
                                    <th width="20%" align="center" style="text-align:center" v-b-popover.hover.top="'your DNA result at the particular variant location.  Genotypes are typically a combination of two DNA letter (A,T,G,C) - one inherited from each parent.'" title="Your Genotype:">Your Genotype</th>
                                    <th width="20%" align="center" style="text-align:center" v-b-popover.hover.top="'at a variant location, the particular DNA letter found to be associated with an altered disease risk.'" title="Risk allele:" data-content="">Risk allele</th>
                                    <th width="20%" align="center" style="text-align:center" v-b-popover.hover.top="'click to access more details about the research studies that have investigated the variant\'s impact.'" title="Study Info.:">Study Info.</th>
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

    </div> <!-- end card -->
    </div> <!-- end rounded style -->
    </div>
    </div>
    </div>
    </div>
</div>

</div>

</template>