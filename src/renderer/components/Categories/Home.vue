<style scope>
.btn-primary{
  /*font-size: 2rem;*/
  margin-top: .75rem;
}
.card-deck {
    /*display: table;*/
    width: 100%;
    margin-bottom: .75rem;
    table-layout: fixed;
    border-color: transparent !important;
  }
  .card{
    margin: .75rem;
    border-spacing: 1.25rem 0;
    margin: 0px !important;
    border-color: transparent !important;
  }
  .card-body{
    margin: 0px !important;
    border-color: transparent !important;   
  }
  .categorybutton{
    text-align: center;
  }
  
</style>
<template>
  <div class="container">
    <div class="card card-inverse card-primary text-center">
      <div class="card-block">
        <h1>Select from the systems below to compare your genome to 100's of research studies:</h1>
      </div>
    </div>
    <div class="card-columns">
      <div class="card" v-for="(category,index) in categories" align="center">
        <img class="card-img-top" :src="'static/img/categories/'+ category + '.png'" style="border-radius: 50px 27px 50px 50px / 25px 25px 25px 25px; width: 250px">
        <div class="card-body">
            <div align="center">
              <router-link :to="{name: 'categorylist-page' , params: {category: category}}" class="btn btn-primary btn-block" style="width: 250px;">{{category}}</router-link>
            </div> 
        </div>
      </div>
    </div>
<!-- end of container
    <b-card-group columns>
        <b-card v-for="category in categories" :key="category" align="center">
            <div class="card__image border-tlr-radius">
              <img :src="'static/img/categories/'+ category.name + '.png'" :alt="category" style="border-radius: 50px 27px 50px 50px / 25px 25px 25px 25px; width: 250px" />
            </div> 
            <div align="center">
              <router-link :to="{name: 'categorylist-page' , params: {category: category.name }}" class="btn btn-primary btn-block" style="width: 250px;">{{category.name}}</router-link>
            </div> 
        </b-card>
    </b-card-group> -->
    </div>  

</template>

<script>
export default {
  data () {
    return {
      // categories: [{ 'name': 'Cardiovascular' }, { 'name': 'Blood' }, { 'name': 'Muscle' }, { 'name': 'Brain' }, { 'name': 'Dental' }, { 'name': 'Drug Response' }, { 'name': 'Skeletal' }, { 'name': 'Metabolic' }, { 'name': 'Skin' }, { 'name': 'Reproductive' }, { 'name': 'Renal' }, { 'name': 'Pulmonary' }, { 'name': 'GI' }, { 'name': 'Ocular' }, { 'name': 'Liver' }, { 'name': 'Immune' }, { 'name': 'Endocrine' }, { 'name': 'Cancer' }]
      categories: ['Cardiovascular', 'Blood', 'Muscle', 'Brain', 'Dental', 'Drug Response', 'Skeletal', 'Metabolic', 'Skin', 'Reproductive', 'Renal', 'Pulmonary', 'GI', 'Ocular', 'Liver', 'Immune', 'Endocrine', 'Cancer']
    }
  }
}
</script>
