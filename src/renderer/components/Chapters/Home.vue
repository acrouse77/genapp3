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
hr.style18top {
  height: 30px;
  border-style: solid;
  border-color: #8c8b8b;
  border-width: 1px 0 0 0;
  border-radius: 20px;
}
hr.style18bottom:before {
  display: block;
  content: "";
  height: 30px;
  margin-top: -31px;
  border-style: solid;
  border-color: #8c8b8b;
  border-width: 0 0 1px 0;
  border-radius: 20px;
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
.faderow {
    width: 100%;
    margin-bottom: 5px;
    padding-bottom: 5px;
    /*border-bottom: 3px solid #777;*/
    max-height: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    content: "";
    position: relative; top:0px;
    font-size: 20px;
    margin-left: 20px;
}

.faderow:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 150px, white);
}
</style>

<template>
<div>
    <b-jumbotron header="Disease focused chapters">
        <h2><i>Select a chapter below for a detailed review of specific diseases and the impact of your genome's sequence.</i></h2>
        
    </b-jumbotron>
    <div class="row">
        <div class=" container col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">
            <!-- CHAPTER -->
            <!-- END CHAPTER -->
            <br>
            <hr class="style18top">

            <div class="row">
                <h1 style="margin-left: 20px;">Coronary Artery Disease</h1>
            </div>
            <div class="card-group">
                <div class="card" style="border-color: #FFFFFF">
                    <img class="card-img-top img-fluid" src="static/img/CAD_intro.jpeg" alt="Card image cap">
                </div>
                <div class="card" style="border-color: #FFFFFF">
                    <div class="card-block faderow">
                        <p>
                            Coronary artery disease (CAD) is a cardiovascular disease in which blood flow to the heart is disrupted.1,2  It is the number one cause of death in industrialized societies, including the United States.3  In 2010, 1 out of every 6 deaths in the U.S. was
                            caused by CAD.3  The most common process for CAD is atherosclerosis, in which plaque builds up on the walls of an individual’s coronary arteries, which leads to the hardening and narrowing of these vessels over time.4
                        </p>
                        </div>
                        <div class="card-block" style="margin-left: 20px; margin-top: 20px;">
                            <div class="container text-center">
                                <a href="#/chapter/cad" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true" style="position:relative;top:-30px;">Select Chapter</a>
                            </div>
                        </div>
                </div>
            </div>
            <!-- CHAPTER -->
            <!-- END CHAPTER -->
            <br>
            <hr class="style18">

            <div class="row">
                <h1 style="margin-left: 20px;">Rheumatoid Arthritis</h1>
            </div>
            <div class="card-group">
                <div class="card" style="border-color: #FFFFFF">
                    <img class="card-img-top img-fluid" src="static/img/RA_intro.jpeg" alt="Card image cap">
                </div>
                <div class="card" style="border-color: #FFFFFF">
                    <div class="card-block faderow">
                      <p>
                          Rheumatoid arthritis (RA) is an autoimmune disorder primarily characterized by chronic joint inflammation, especially in the smaller joints of the feet and hands. Over time, this inflammation can cause joint damage and lead to limitations on movement
                          and activity. RA can also lead to inflammation of other tissues as well as weight loss, anemia, a low grade fever, and a decrease in energy.1 RA is thought to affect up to 1% of the population worldwide.2 Most individuals develop
                          symptoms in mid- to late adulthood, and, often, symptoms will appear and subside in a pattern of flares and remissions throughout a person’s lifetime.1
                      </p>
                        </div>
                        <div class="card-block" style="margin-left: 20px; margin-top: 20px;">
                            <div class="container text-center">
                                <a href="#/chapter/ra" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true" style="position:relative;top:-30px;">Select Chapter</a>
                            </div>
                        </div>
                </div>
            </div>
            <!-- CHAPTER -->
            <!-- END CHAPTER -->
            <br>
            <hr class="style18">

            <div class="row">
                <h1 style="margin-left: 20px;">Age-related macular degeneration (AMD)</h1>
            </div>
            <div class="card-group">
                <div class="card" style="border-color: #FFFFFF">
                    <img class="card-img-top img-fluid" src="static/img/AMD_intro.jpeg" alt="Card image cap">
                </div>
                <div class="card" style="border-color: #FFFFFF">
                    <div class="card-block faderow">
                      <p>
                          Age-related macular degeneration (AMD) is an eye disease characterized by loss of central vision due to changes in the macular region of the retina.1 In the United States, AMD has an estimated prevalence of 1 in 2,000 individuals. The prevalence increases
                          with age, affecting more than 11.5% of the population over age 80.2 AMD is the leading cause of blindness in developed countries.3 Quality of life can be greatly impacted by AMD, as central vision loss is likely to affect a
                          person’s ability to perform daily activities such as reading, driving, and recognizing faces.4
                      </p>
                        </div>
                        <div class="card-block" style="margin-left: 20px; margin-top: 20px;">
                            <div class="container text-center">
                                <a href="#/chapter/amd" class="btn btn-primary btn-lg btn-block active" role="button" aria-pressed="true" style="position:relative;top:-30px;">Select Chapter</a>
                            </div>
                        </div>
                </div>
            </div>
            <!-- CHAPTER -->
            <hr class="style18bottom">
        </div>
    </div>
    <!-- TESTING  -->
</div>
<!-- END TESTING  -->
</template>

<script>

</script>
