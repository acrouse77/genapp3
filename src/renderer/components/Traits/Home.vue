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
    background-color: #4CAF50;
    /*GREEN*/
    color: white;
}

.heterozygous {
    background-color: #4c57af;
    /*BLUE*/
    color: white;
}

.homozygous {
    background-color: #af4c4c;
    /*RED*/
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
</style>

<template>
    <div class="row">
        <!-- TABLE FOR EACH PUBLICATION -->
        <div class="col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">

            <!-- <hr class="style18"> -->
        <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Caffeine Metabolism</h1>
                        <div class="float-right col-4">
                        <img src="static/img/coffee_trait.jpg" class="img-fluid text-center img-thumbnail">
                        </div>
                    <p class="card-text">Some individuals find that they need to consume more coffee in the morning that their friends or family in order to feel a stimulating effect. Variation in the CYP1A2 gene may influence whether someone is fast or slow caffeine metabolizer,
                        which in turn affects whether that individual receives the same effect from a particular amount of caffeine as others. In general, individuals who are slower metabolizers of caffeine experience a larger effect from the same amount
                        of caffeine as a fast metabolizer.
                    </p>
                </div>
                <div class="card-block">
                    <h2>Gene: CYP1A2 Variant: rs762551</h2>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Genotype</th>
                                <th>Impact on Trait</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-success text-white">
                                <th scope="row" align="center">Your Genotype</th>
                                <td align="center">A/A</td>
                                <td align="center">Fast caffeine metabolizer</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">A/C</td>
                                <td align="center">Slow caffeine metabolizer</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">C/C</td>
                                <td align="center">Slow caffeine metabolizer</td>
                            </tr>
                        </tbody>
                    </table>
                    <P>
                        Variation at this location in the CYP1A2 gene has been associated with the speed of caffeine metabolism in humans. The CYP1A2 gene encodes a member of a family of proteins that are responsible for metabolism of nutrients and medications . Individuals
                        who have the letter “C” at this location in one or both of of their copies of this genetic region are more likely to slow caffeine metabolizers while an individual who has the letter “A” at this location in both of their copies
                        of this gene is more likely to be a fast caffeine metabolizer [PMID 18759349].
                    </P>
                </div>
            </div>
        </div>

            <br>
            <!-- <hr class="style18"> -->
            <!-- START TRAIT -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Ear Wax Type</h1>
                    <p class="card-text"></p>
                    <p class="card-text">Earwax is ubiquitous to everyone but you may not know that it comes two types - wet and dry. Wet earwax is the most common form in most populations (except East Asian) and can be described as yellow to brown colored and sticky. The
                        less common dry earwax is often described as grey in color and as the name suggests, is dry and flakey. Earwax type is determined by variation in a single gene, ABCC11. No matter which type of earwax you have, it serves an important
                        job in your body keeping your ear canals clean.

                    </p>
                </div>
                <div class="card-block">
                    <h2>Gene: ABCC11 Variant: rs17822931</h2>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Genotype</th>
                                <th>Impact on Trait</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">C/C</td>
                                <td align="center">Wet</td>
                            </tr>
                            <tr class="bg-success text-white">
                                <th scope="row" align="center">Your Genotype</th>
                                <td align="center">C/T</td>
                                <td align="center">Wet</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">T/T</td>
                                <td align="center">Dry</td>
                            </tr>
                        </tbody>
                    </table>
                    <P>
                        Variation at this location within the ABCC11 gene has been shown to solely determine earwax type in humans. Wet earwax is the dominant version of this single-gene trait. Individuals who have the letter “C” at this location in one or both of their copies
                        ABCC11 will have wet earwax while individuals who have two “T”s will have dry [PMID 16444273].
                    </P>
                </div>
            </div>
            </div>
            <br>
            <!-- <hr class="style18"> -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <!-- START TRAIT -->
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Alcohol Flush Reaction</h1>
                    <p class="card-text"></p>
                    <p class="card-text">The effect that alcohol consumption has on an individual is dependent on a variety of factors, including the speed to which its chemicals are broken down and removed from the body. A subset of people have what is known as a flush reaction
                        after consuming alcohol - which can present as dizziness, nausea, headaches and flushing (turning red). This reaction can be severe and highly uncomfortable. Research has shown that whether a person has a flush reaction after consuming
                        alcohol is due to genetic variation within two genes, ALDH2 and ADH1B, which encode important enzymes in the alcohol metabolism process.

                    </p>
                </div>
                <div class="card-block">
                    <h2>Gene: ALDH2 Variant: rs671</h2>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Genotype</th>
                                <th>Impact on Trait</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-success text-white">
                                <th scope="row" align="center">Your Genotype</th>
                                <td align="center">G/G</td>
                                <td align="center">Little to no flushing</td>
                            </tr>
                            <tr >
                                <th scope="row" align="center"></th>
                                <td align="center">G/A</td>
                                <td align="center">Moderate flushing</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">A/A</td>
                                <td align="center">Extreme flushing</td>
                            </tr>
                        </tbody>
                    </table>
                    <P>
                        Variation at this location in the ALDH2 gene has been associated with likelihood of the alcohol flush reaction in humans. Individuals who have the letter “A” at this location in one or both of of their copies of this genetic region have an increased likelihood
                        of flushing [PMID 10441588]. </P>
                </div>
            </div>
            </div>
            <br>

            <!-- <hr class="style18"> -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <!-- START TRAIT -->
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Asparagus Anosmia</h1>
                    <p class="card-text"></p>
                    <p class="card-text">Some individuals are able to detect a striking odor in their urine after consuming asparagus while others lack this olfactory ability. A person who is unable to detect this chemical are said to have “anosmia” which means “inability
                        to smell.” When asparagus is ingested, enzymes in the body break down its chemicals including methanethiol, which is thought to be the culprit for the characteristic asparagus urine odor. People with asparagus anosmia still produce
                        the acid and odor; but variation in their olfactory (smell) receptors make them unable to detect the odor.
                    </p>
                </div>
                <div class="card-block">
                    <h2>Gene: Near OR2M7 Variant: rs4481887</h2>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Genotype</th>
                                <th>Impact on Trait</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">G/G</td>
                                <td align="center">Typical odds of smelling asparagus</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">G/A</td>
                                <td align="center">Increased odds of smelling asparagus</td>
                            </tr>
                            <tr class="bg-success text-white">
                                <th scope="row" align="center">Your Genotype</th>
                                <td align="center">A/A</td>
                                <td align="center">Increased odds of smelling asparagus</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Variation at this location near the OR2M7 gene has been associated with asparagus anosmia in humans. Individuals who have the letter “A” at this location in one or both of of their copies of this genetic region have an increased likelihood of smelling
                        asparagus in urine [PMID 20585627].
                    </p>
                </div>
            </div>
            </div>
            <br>
            <hr class="style18">

            <!-- START TRAIT -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Blond Hair and Your Genes</h1>
<!-- <span class="pull-right"> -->
                    <!-- <div class="text-right-right col-md-3 col-lg-3 col-sm-3">
                      <img src="static/img/eye_trait.png" style="max-height: 100px;"class="rounded  img-thumbnail">
                    </div> -->
                  <!-- </span> -->
                    <p class="card-text">Blond hair color is determined by a pigment called melanin. People with higher levels of the brown-black form of melanin have darker hair and those with lower levels have lighter hair that may be considered blond. Roughly 20 percent of 23andMe customers report having either light blond or dark blond hair. Several genetic variants have been found to influence whether or not someone has blond hair. This report provides results for three variants that are known to play a very strong role in determining blond hair color.</p>
                    <p class="card-text">There are two types of melanin: a brown-black form known as eumelanin and a yellow-red form known as pheomelanin. The amount of eumelanin and pheomelanin you produce has important consequences on the way you look. In most people, eumelanin levels dominate, leading to variation in brown-black pigmentation. People with higher levels of eumelanin have darker hair and those with lower levels of eumelanin have lighter hair that may be considered blond. A small subset of the world's population has high levels of pheomelanin, leading to red hair and light skin color.
                    </p>
                    <p class="card-text">One marker (rs12821256) that affects pigmentation is near a gene called KITLG. The KITLG gene is believed to affect pigmentation by controlling the movement, survival, and growth of melanin-producing cells called melanocytes. A second marker (rs1667394) we report on is located near the OCA2 gene, which codes for a protein located in melanocytes.                    </p>
                    <p class="card-text">About twenty percent of 23andMe customers report having blond hair, though this number varies greatly based on ethnic background. Blond hair is most common in Northern European populations, with hair color going from light to dark as you move from Northern to Southern Europe. Blond hair is also occasionally found in non-European populations, but the genetics underlying blond hair in such groups is unique. For instance, roughly five to ten percent of Solomon Islanders have blond hair that is caused by a single genetic variant in a gene called TYRP1.</p>
                    <p class="card-text">rs12913832 is a SNP near the OCA2 gene that may be functionally linked to blue or brown eye color, due to a lowering of promoter activity of the OCA2 gene. Blue eye color is associated with the rs12913832(G;G) genotype.[PMID 18172690, PMID 18252222]rs12913832-T (brown eye) homozygotes compared to rs12913832-C (blue eye). correlations with skin, eye, and hair color variation.</p>
                </div>
                <div class="card-block">
                    <h2>Genes: HERC2, KITLG and SLC24A4</h2>
                    <h2><strong>You have 2 of 3 known indicators blond hair.  If you are of european decent then you are very likely to have blond.
                    </strong></h2>

                    <br />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>SNP ID</th>
                                <th>Your Genotype</th>
                                <th>Impact on Trait</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th scope="row" align="center">rs1667394</th>
                                <td align="center">A/A</td>
                                <td align="center">less likely to have blond hair and blue eyes</td>
                            </tr>
                            <tr >
                                <th scope="row" align="center">rs12821256</th>
                                <td align="center">C/T</td>
                                <td align="center">less likely to have blond hair and blue eyes</td>
                            </tr>
                            <tr class="bg-success text-white">
                                <th scope="row" align="center">rs12913832</th>
                                <td align="center">T/T</td>
                                <td align="center">associated with brown eyes</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                      A 2007 study based on the Icelanders and Dutch concluded that individuals with an rs12821256(C) allele were ~2x fold more likely to have blond than brown hair color. The specific odds ratio claimed per (C) allele is 2.32, p = 5.5 x 10-14.[PMID 17952075]
<br />
                      [PMID 24880339OA] A molecular basis for classic blond hair color in Europeans: This article shows how changing just rs12821256 from (T) to (C) in a transgenic mouse leads to lighter hair color.
<br />
                      [PMID 18483556OA] A genome-wide association study identifies novel alleles associated with hair color and skin pigmentation.
                      <br />
                      [PMID 20042077OA] Genetic determinants of hair and eye colours in the Scottish and Danish populations.
<br />
                      [PMID 20585627OA] Web-based, participant-driven studies yield novel genetic associations for common traits.
                    </p>
                </div>
            </div>
            <br>
            <!-- <hr class="style18"> -->



        </div>

</div>
</div>
</div>
</template>

<script>
// import bat from './assets/BAT.json';
// import finreduced from './assets/final_reduced.json';
// var _ = require("underscore");
// import Vue from 'vue';
// import genos from './assets/SL159977_bear.json'

// SHOWING THAT VARIABLE CAN BE SET TO VALUE AND USED IN JSON INPUT FOR where
// var chr2 = 2;
// var geno_test = _.where(finreduced, {chr: chr2, chrPos:234668570});

export default {
  props: ['selectCat'],
  methods: {

  },
  data () {
    return {
            // msg: 'Hello from vue-loader!',
            // msg1: '<h1>Hello from vue-loader!</h1>',
            // pubtable: "",
            // //selfocus: "Hematocrit",
            // batable: bat,
            // //batlist:list,
            // todisplay: []
            // heterozygous: false,
            // homozygous: false,
            // norisk: false
            // catparam: getparam
            // selectCat: "Not Cancer",
    }
  },
    // created: function() {
    //     console.log('created ran')
    //     //GET PARAMS
    //     var urlarray = window.location.hash.split("/")
    //     var n = urlarray.length - 1
    //     var getparam = decodeURI(urlarray[n])
    //
    //     //console.log("before genotypes")
    //     var genotypes = genos.Participants.Genotypes
    //     // var geno_test = _.where(genotypes, {Chr: "13" });
    //     // console.log("geno_test")
    //     // console.log(geno_test)
    //     //console.log("window.location")
    //     //console.log(catparam)
    //     //console.log(window.location)
    //
    //     //VARIABLE TO CREATE HTML FOR DISPLAY OF TABLE
    //     var focustable = ""
    //
    //     //EXAMPLE DATA FROM final_reduced data
    //     //{"cat":"Blood","type":"Symptom","focus":"Cholelithiasis-related traits in sickle cell anemia","date":"6/22/12","sizeInitRep":905,"ethRep":"African American/Afro-Caribbean","pmID":22558097,"auth":"Milton JN","pubDate":"4/27/12","journ":"PLoS One","pubLink":"http://www.ncbi.nlm.nih.gov/pubmed/22558097","studyName":"A genome-wide association study of total bilirubin and cholelithiasis risk in sickle cell anemia.","studySize":"905 African American cases","repSize":"2,152 African American cases","include":"EX","snpIndex":7626,"chr":2,"chrPos":234668570,"repGene":"UGT1A1, UGT1A10","mapGene":"UGT1A10;UGT1A8;UGT1A7;UGT1A6;UGT1A5;UGT1A9;UGT1A4;UGT1A1;UGT1A3","snpID":"rs887829-A","riskAllele":"A","riskAlleleFreq":0.45,"pVal":5e-25,"mlog":24.30103,"pValText":"","OR":0.19,"ConfIntText":"[NR] unit increase","Plat":"Illumina [569,615]","FilterStatus":"Filter 5: RAs on quantitative traits","in LD block (trait)":""}
    //
    //
    //     //GROUPING BY FOCUS - Hematocrit
    //     var groupedData = _.groupBy(finreduced, function(d) {
    //         return d.focus
    //     });
    //
    //     var focuscat = _.groupBy(groupedData[getparam], function(d) {
    //         return d.pmID
    //     });
    //     //console.log(focuscat)
    //
    //
    //
    //     $.each(focuscat, function(index, value) {
    //
    //         //ADD THE HEADER OF EACH STUDY
    //         focustable = focustable.concat(
    //
    //
    //         )
    //
    //     }) //END OF EXCH(FOCUSCAT...
    //
    //     //SET DATA pubtable TO FOCUSTABLE value
    //     this.pubtable = focustable
    // },
  computed: {

  }

}
</script>
