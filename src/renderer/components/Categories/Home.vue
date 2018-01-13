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
        
    
    <b-card-group columns>
        <b-card v-for="category in categories" :key="category" align="center">
            <div class="card__image border-tlr-radius">
              <img :src="'static/img/categories/'+ category.name + '.png'" :alt="category" style="border-radius: 50px 27px 50px 50px / 25px 25px 25px 25px; width: 250px" />
            </div> 
            <div align="center">
              <router-link :to="{name: 'categorylist-page' , params: {category: category.name }}" class="btn btn-primary btn-block" style="width: 250px;">{{category.name}}</router-link>
            </div> 
        </b-card>
    </b-card-group>

</div> <!-- end of container -->
</template>

<script>
export default {
  data () {
    return {
      categories: [{ 'name': 'Cardiovascular' }, { 'name': 'Blood' }, { 'name': 'Muscle' }, { 'name': 'Brain' }, { 'name': 'Dental' }, { 'name': 'Drug Response' }, { 'name': 'Skeletal' }, { 'name': 'Metabolic' }, { 'name': 'Skin' }, { 'name': 'Reproductive' }, { 'name': 'Renal' }, { 'name': 'Pulmonary' }, { 'name': 'GI' }, { 'name': 'Ocular' }, { 'name': 'Liver' }, { 'name': 'Immune' }, { 'name': 'Endocrine' }, { 'name': 'Cancer' }]
    }
  }
}
</script>
