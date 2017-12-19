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
    <div class="container" style="margin-top:100 auto;">
        <!-- TABLE FOR EACH PUBLICATION -->
        <div class="col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">

            <!-- <hr class="style18"> -->
        <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Caffeine Metabolism</h1>
                        <div class="float-right col-4">
                        <b-btn v-b-toggle.collapse2 class="m-1"><img src="static/img/coffee_trait.jpg" class="img-fluid text-center img-thumbnail"></b-btn>
                        </div>
                    
                </div>
                
                <div class="card-block">
                <b-collapse id="collapse2">
                    <p class="card-text">Some individuals find that they need to consume more coffee in the morning that their friends or family in order to feel a stimulating effect. Variation in the CYP1A2 gene may influence whether someone is fast or slow caffeine metabolizer,
                        which in turn affects whether that individual receives the same effect from a particular amount of caffeine as others. In general, individuals who are slower metabolizers of caffeine experience a larger effect from the same amount
                        of caffeine as a fast metabolizer.
                    </p>
                    <p><h5>Gene: CYP1A2 Variant: rs762551</h5></p>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Genotype</th>
                                <th>Impact on Trait</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-bind:class="[true ? 'bg-success text-white': '']">
                                <th scope="row" align="center">Your Genotype</th>
                                <td align="center">A/A</td>
                                <td align="center">Fast caffeine metabolizer</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">A/C</td>
                                <td align="center">Slow caffeine metabolizer</td>
                            </tr>
                            <tr v-bind:class="[rs762551=== 'C/C'? 'bg-success text-white': '']">
                                <th scope="row" align="center"></th>
                                <td align="center">C/C</td>
                                <td align="center">Slow caffeine metabolizer</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Variation at this location in the CYP1A2 gene has been associated with the speed of caffeine metabolism in humans. The CYP1A2 gene encodes a member of a family of proteins that are responsible for metabolism of nutrients and medications . Individuals
                        who have the letter “C” at this location in one or both of their copies of this genetic region are more likely to slow caffeine metabolizers while an individual who has the letter “A” at this location in both of their copies
                        of this gene is more likely to be a fast caffeine metabolizer [PMID 18759349].
                    </p>
                    </b-collapse>
                </div>
                
            </div>
        </div>
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
                    <p><h5>Gene: CYP1A2 Variant: rs762551</h5></p>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Genotype</th>
                                <th>Impact on Trait</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-bind:class="[true ? 'bg-success text-white': '']">
                                <th scope="row" align="center">Your Genotype</th>
                                <td align="center">A/A</td>
                                <td align="center">Fast caffeine metabolizer</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">A/C</td>
                                <td align="center">Slow caffeine metabolizer</td>
                            </tr>
                            <tr v-bind:class="[rs762551=== 'C/C'? 'bg-success text-white': '']">
                                <th scope="row" align="center"></th>
                                <td align="center">C/C</td>
                                <td align="center">Slow caffeine metabolizer</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Variation at this location in the CYP1A2 gene has been associated with the speed of caffeine metabolism in humans. The CYP1A2 gene encodes a member of a family of proteins that are responsible for metabolism of nutrients and medications . Individuals
                        who have the letter “C” at this location in one or both of their copies of this genetic region are more likely to slow caffeine metabolizers while an individual who has the letter “A” at this location in both of their copies
                        of this gene is more likely to be a fast caffeine metabolizer [PMID 18759349].
                    </p>
                </div>
            </div>
        </div>

            <br>
            <!-- <hr class="style18"> -->
            <!-- START TRAIT -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Stink-Free Armpits and Ear Wax Type</h1>
                        <div class="float-right col-4">
                        <img src="static/img/armpit.jpg" class="img-fluid text-center img-thumbnail">
                        </div>
                    <p class="card-text"></p>
                    <p class="card-text">2% of people of european decent, many east asians and almost all Koreans are the lucky few who do not have to wear deoderant.  A variant in the ABCC11 gene prevents their armpits from producing an offensive odor.  This variant is thought 
                    to affect apocrine sweat glands by reducing secretion of odorous molecules and its precursors.  This make using deoderant unneccesary for the select lucky few.  
                    </p>
                    <p>This variant also affects earwax consistancy.  Earwax is ubiquitous to everyone but you may not know that it comes two types - wet and dry. Wet earwax is the most common form in most populations (except East Asian) and can be described as yellow to brown colored and sticky. The
                        less common dry earwax is often described as grey in color and as the name suggests, is dry and flakey. Earwax type is determined by variation in a single gene, ABCC11. No matter which type of earwax you have, it serves an important
                        job in your body keeping your ear canals clean.
                    </p>
                </div>
                <div class="card-block">
                    <p><h5>Gene: ABCC11 Variant: rs17822931</h5></p>
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
                    <p>
                        Variation at this location within the  gene has been shown to solely determine earwax type in humans. Wet earwax is the dominant version of this single-gene trait. Individuals who have the letter “C” at this location in one or both of their copies
                        ABCC11 will have wet earwax while individuals who have two “T”s will have dry [PMID 16444273].
                    </p>
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
                    <p><h5>Gene: ALDH2 Variant: rs671</h5></p>
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
                    <p>
                        Variation at this location in the ALDH2 gene has been associated with likelihood of the alcohol flush reaction in humans. Individuals who have the letter “A” at this location in one or both of their copies of this genetic region have an increased likelihood
                        of flushing [PMID 10441588]. </p>
                </div>
            </div>
            </div>
            <br>

            
            <!-- <hr class="style18"> -->
            <!-- START TRAIT -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Norovirus Susceptibility and Resistance</h1>
                    <p class="card-text"></p>
                    <p class="card-text">Norovirus is a highly contagious cause of gastroenteritis. Common on cruise ships and in other close quarters, norovirus can cause symptoms such as nausea, vomiting, and diarrhea, leading in some cases to serious dehydration. Although most people are susceptible to experiencing symptoms following a norovirus infection, some individuals with particular variation in the FUT2 gene are actually resistant to norovirus and may not exhibit symptoms after exposure to the virus.
                    </p>
                </div>
                <div class="card-block">
                    <p><h5>Gene: FUT2 Variant: rs601338</h5></p>
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
                                <td align="center">Susceptible</td>
                            </tr>
                            <tr >
                                <th scope="row" align="center"></th>
                                <td align="center">G/A</td>
                                <td align="center">Susceptible</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">A/A</td>
                                <td align="center">Resistant</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Variation at this location in the FUT2 gene has been associated with differing susceptibility/resistance to norovirus infection. Individuals who have the letter “A” at this location in both of their copies of this gene are resistant to norovirus infection [PMID 16306606]. 
                        </p>
                </div>
                </div>
            </div>
            
            <br>

            <!-- <hr class="style18"> -->
            <!-- START TRAIT -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Photic Sneeze Reflex</h1>
                    <p class="card-text"></p>
                    <p class="card-text">For some individuals, walking outside on a bright sunny day can cause an involuntary sneeze or series of sneezes in response to the sudden light. Variation in a particular area of chromosome 2, between the genes ZEB2 and PABPCP2, has been shown to influence a person’s likelihood to reflexively sneeze in response to sunlight or other forms of sudden bright light. 
                    </p>
                </div>
                <div class="card-block">
                    <p><h5>On chromosome 2 between the genes ZEB2 and PABPCP2 Variant: rs10427255</h5></p>
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
                                <td align="center">C/C</td>
                                <td align="center">Increased odds of photic sneeze reflex</td>
                            </tr>
                            <tr >
                                <th scope="row" align="center"></th>
                                <td align="center">C/T</td>
                                <td align="center">Somewhat increased odds of photic sneeze reflex</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">T/T</td>
                                <td align="center">Decreased odds of photic sneeze reflex</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Variation at this location on chromosome 2 has been associated with differing likelihood of experiencing photic sneeze reflex. Individuals who have the letter “C” at this location in one or both of their copies of this genetic region are more likely to experience photic sneeze reflex, with those with a “C” in both copies the most likely to sneeze in response to bright light [PMID 20585627]. 
                        </p>
              </div>
            </div>
            </div>
            <br>

            <!-- <hr class="style18"> -->

            <!-- <hr class="style18"> -->
            <!-- START TRAIT -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Lactose Intolerance</h1>
                    <p class="card-text"></p>
                    <p class="card-text">The ability to digest milk varies over a lifespan and between people. The enzyme lactase, a key player in the digestion of milk, is found in high quantities among infants but often wanes as a person grows into adulthood. For some individuals, genetic variation causes the enzyme lactase to persist throughout life leading to a lifelong ability to digest milk.</p>
                </div>
                <div class="card-block">
                    <p><h5>Gene: MCM6 Variant: rs4988235</h5></p>
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
                                <td align="center">C/C</td>
                                <td align="center">Likely to be lactose intolerant</td>
                            </tr>
                            <tr >
                                <th scope="row" align="center"></th>
                                <td align="center">C/T</td>
                                <td align="center">Likely to be able to digest milk</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">T/T</td>
                                <td align="center">Likely to be able to digest milk</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Variation at this location in the MCM6 gene has been associated with likelihood of lactose intolerance in humans. The MCM6 gene encodes a protein that helps regulate the nearby lactase gene. Individuals who have the letter “T” at this location in one or both of their copies of this genetic region are likely to be able to digest milk while an individual who has the letter “C” at this location in both of their copies of this gene are likely to be lactose intolerant 
                        </p>
              </div>
            </div>
            </div>
            <br>

            <!-- END TRAIT <hr class="style18"> -->
            <!-- <hr class="style18"> -->
            <!-- START TRAIT -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Bitter Taste Perception</h1>
                    <p class="card-text"></p>
                    <p class="card-text">The ability to perceive bitter taste varies between populations and among individuals within a particular population.  For some people, the inability to perceive bitter taste in some foods is linked to particular genetic variants.  Individuals who are able to perceive bitter taste may gravitate away from certain foods and substances, while those who cannot perceive this taste may select these foods with no understanding of why others might avoid them.</p>
                </div>
                <div class="card-block">
                    <p><h5>Gene: TAS2R38 Variant: rs713598</h5></p>
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
                                <td align="center">May be unable to taste bitter in some foods</td>
                            </tr>
                            <tr >
                                <th scope="row" align="center"></th>
                                <td align="center">C/G</td>
                                <td align="center">Can taste bitter</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">C/C</td>
                                <td align="center">Can taste bitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Variation at this location in the TAS2R38 gene has been associated with likelihood being able to perceive bitter taste in humans. The TAS2R38 gene is one of many “taste receptor” genes that encode proteins important for perception of a variety of different flavors. Individuals who have the letter “C” at this location in one or both of their copies of this genetic region are likely to be able to perceive bitter taste while an individual who has the letter “G” at this location in both of their copies of this gene may not be able to perceive bitter taste in some foods [PMID 12595690].</p>
              </div>
            </div>
            </div>
            <br>

            <!-- END TRAIT <hr class="style18"> -->

            <!-- <hr class="style18"> -->
            <!-- START TRAIT -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Sprint vs Endurance</h1>
                    <p class="card-text"></p>
                    <p class="card-text">When it comes to athletics, some individuals perform better in short bursts of high-energy activity, while others tend to perform better in long-term events.  There are thousands of genes that control muscle structure and function, and genetic variation in one particular gene, ACTN3, has been associated with muscle performance and the likelihood of an individual being a sprinter or endurance athlete.</p>
                </div>
                <div class="card-block">
                    <p><h5>Gene: ACTN3 Variant: rs1815739</h5></p>
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
                                <td align="center">C/C</td>
                                <td align="center">Likely sprinter</td>
                            </tr>
                            <tr >
                                <th scope="row" align="center"></th>
                                <td align="center">C/T</td>
                                <td align="center">Likely sprinter</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">T/T</td>
                                <td align="center">Likely endurance athlete</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Variation at this location in the ACTN3 gene has been associated with muscle performance and likelihood of being a sprinter or endurance athlete in humans. The ACTN3 gene is one of a group of genes that encode structural proteins important in skeletal muscle. Individuals who have the letter “C” at this location in one or both of their copies of this genetic region are slightly more likely to be sprinters while an individual who has the letter “T” at this location in both of their copies of this gene is more likely to be an endurance athlete [PMID 18043716].</p>
              </div>
            </div>
            </div>
            <br>

            <!-- END TRAIT <hr class="style18"> -->

            <!-- <hr class="style18"> -->
            <!-- START TRAIT -->
            <div class="float-right" style="margin: 15px;  padding: 15px; border: 1px solid #cecece; border-radius: 25px; ">
            <div class="card">
                <div class="card-block card-inverse card-primary">
                    <h1 class="card-title">Freckling</h1>
                    <p class="card-text"></p>
                    <p class="card-text">Skin pigmentation varies among individuals and populations all over the globe.  Some individuals have darker hair and skin that tans easily, while others have light or red hair and skin that tends to freckle or burn when exposed to the sun.  Genetic variation in the MC1R gene can make a person more likely to have freckles than others.</p>
                </div>
                <div class="card-block">
                    <p><h5>Gene: MC1R Variant: rs1805007</h5></p>
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
                                <td align="center">C/C</td>
                                <td align="center">Less likely to freckle</td>
                            </tr>
                            <tr >
                                <th scope="row" align="center"></th>
                                <td align="center">C/T</td>
                                <td align="center">Likely to freckle</td>
                            </tr>
                            <tr>
                                <th scope="row" align="center"></th>
                                <td align="center">T/T</td>
                                <td align="center">Likely to freckle</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Variation at this location in the MC1R gene has been associated with increased likelihood of freckling in humans. The MC1R gene encodes the melanocortin 1 receptor, which is involved in skin pigmentation. Individuals who have the letter “T” at this location in one or both of their copies of this genetic region are more likely to freckle while an individual who has the letter “C” at this location in both of their copies of this gene is less likely to have freckles [PMID 9571181].</p>
              </div>
            </div>
            </div>
            <br>

            <!-- END TRAIT <hr class="style18"> -->


</div>
</div>
</div>
</template>

<script>
import fs from 'fs'
import path from 'path'

let AMDread = fs.readFileSync(path.join(__static, '/referencedata/AMD_ordered2.json'), 'utf8')
var AMD = JSON.parse(AMDread)

let finreducedread = fs.readFileSync(path.join(__static, '/referencedata/AMD.json'), 'utf8')
var finreduced = JSON.parse(finreducedread)

let genosread = fs.readFileSync(path.join(__static, '/participantdata/participant.json'), 'utf8')
var genos = JSON.parse(genosread)

var _ = require('underscore')
// SHOWING THAT VARIABLE CAN BE SET TO VALUE AND USED IN JSON INPUT FOR where
// var chr2 = 2;
// var geno_test = _.where(finreduced, {chr: chr2, chrPos:234668570});

export default {
  props: ['selectCat'],
  methods: {

  },
  data () {
    return {
      rs762551: 'A/C'
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
  created: function () {
        // console.log('created ran')
        // GET PARAMS
    // var urlarray = window.location.hash.split('/')
    // var n = urlarray.length - 1
    // var getparam = decodeURI(urlarray[n])

    // GET OBJECTS WITH GENOTYPES OF PARTICIPANTS
    var genotypes = genos.Participants.Genotypes
    console.log('genotypes')
    console.log(genotypes)
  },
  computed: {

  }

}
</script>
