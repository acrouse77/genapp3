<style>

.card{
  min-width: 200px
}
.card-block{
  min-height: 75px
}
.jumbotron-buffer{
  min-height: 40px
}
</style>

<template>
  <div class="container">
    <div class="row jumbotron-buffer">

  </div>
     <div class="jumbotron">
       <div class="container-fluid top-section">
         <div class="col-lg-3">
           <img  src="/img/catagories/cancer_cell.png">
         </div>
         <div class="col-lg-9">

         <h1 class="display-3 text-left" >{{ $route.params.selectCat }}= selectCat = {{selectCat}} or {{paramSelect}}</h1>
         <h1 class="display-4 text-left">DISEASES AND MEDICAL INDICATORS</h1>
         <h2 v-text="$route.params.selectCat"></h2>
         <p>
           You are currently at <code>`{{ $route.path }}`</code> on the <code>`{{ $route.name }}`</code> view.
         </p>
         </div>
         <div class="row">
         <div class="col-xs-6">
           <div class="card">
             <div class="card-block card-inverse card-primary">
               <h1 class="card-title">Medical traits</h1>
               <p class="card-text">Measured to help diagnose a disease.</p>
             </div>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item" v-for="category in getCat_symptom(categories)"> {{ category.Focus }}</li>
             </ul>
           </div>
         </div>
         </div>
     </div>
   </div>
  </div>
    <!-- TESTING  -->

    <!-- END TESTING  -->


</template>

<script>

export default {
  props: ['bat'],
  data () {
    return {
      msg: 'Hello from vue-loader!'
      // selectCat: "Cancer",
    }
  },
  watch: {

  },
  methods: {
    getCat: function (bat) {
      return bat.filter(function (group) {
        return group.Category === 'Blood'
      })
    }

  },
  computed: {

  }

}
</script>
