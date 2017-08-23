<style>
.btn-primary{
  /*font-size: 2rem;*/
  margin-top: .75rem;
}
.card-deck {
    /*display: table;*/
    width: 100%;
    margin-bottom: .75rem;
    table-layout: fixed;
    
  }
  .card{
    margin: .75rem;
    border-spacing: 1.25rem 0;
    border-color:  #fff;
  }
</style>


<template>
  <div class="container">
    <div class="card card-inverse card-primary text-center">
      <div class="card-block">
        <h1>Select from the systems below to compare your genome to 100's of research studies:</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-10 offset-lg-1">
      <!--<div class="card-deck-wrapper ">-->
        <div class="card-deck" id="categories">
          <!-- CARD -->
          <!--<div class="col-xs-3 col-md-3 col-lg-3">-->
          <div class="card radius shadowDepth1 col-xs-3 col-md-3 col-lg-3" v-for="category in categories">
            <div class="card__image border-tlr-radius">
              <img :src="'static/img/categories/'+ category.name + '.png'" :alt="category"  class="card-img-top img-fluid border-tlr-radius"/>
            </div> <!-- end of card image -->
            <div class="card__content card__padding">
              <router-link :to="{name: 'categorylist-page' , params: {category: category.name }}" class="btn btn-primary btn-block">{{category.name}}</router-link>
            </div> <!-- end of card content -->
          </div> <!-- end of card -->
           <!-- </div> end of col -->
        </div> <!-- end of card-deck -->
       <!-- </div>end of card-deck-wrapper -->
    </div> <!-- end of column -->
    </div> <!-- end of row -->
  </div> <!-- end of container -->
</template>

<script>
export default {
  data () {
    return {
      categories: [{ 'name': 'Cardiovascular' }, { 'name': 'Vitamins' }, { 'name': 'Pathogen response' }, { 'name': 'Blood' }, { 'name': 'Eye' }, { 'name': 'Muscle' }, { 'name': 'Brain' }, { 'name': 'Dental' }, { 'name': 'Drug Response' }, { 'name': 'Skeletal' }, { 'name': 'Metabolic' }, { 'name': 'Skin' }, { 'name': 'Reproductive' }, { 'name': 'Renal' }, { 'name': 'Pulmonary' }, { 'name': 'GI' }, { 'name': 'Ocular' }, { 'name': 'Liver' }, { 'name': 'Immune' }, { 'name': 'Endocrine' }, { 'name': 'Cancer' }, { 'name': 'Other' }, { 'name': 'Physical attributes' }]
    }
  }
}
</script>
