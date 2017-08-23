<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
<template>
  <div class="col-lg-10 col-md-10 col-sm-10 offset-lg-2 offset-md-2 offset-sm-2">
    <RA class="col-lg-10 col-md-10 col-sm-10"></RA>
    <geno ></geno>
  </div>

</template>

<script>
  import Geno from './RA_Geno'
  import RA from './assets/03-Rheumatoid-arthritis.vue'
  import Key from './Key.vue'

  export default {
    components: {
      Geno,
      RA,
      Key
    },
    name: 'AMD-page',
    data () {
      return {

      }
    }
  }
</script>
