<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
<template>
<div class="col-lg-10 col-md-10 col-sm-10 offset-lg-2 offset-md-2 offset-sm-2">
    <CAD class="col-lg-10 col-md-10 col-sm-10"></CAD>
    <!-- <Key class="section"></Key> -->
    <Geno3></Geno3>
</div>
</template>

<script>
  import Geno3 from './CAD_Geno3.vue'
  import CAD from './assets/02-Coronary-Artery-Disease2.vue'
  import Key from './Key.vue'

  export default {
    components: {
      CAD,
      Key,
      Geno3
    },
    name: 'chapter-cad-page',
    data () {
      return {

      }
    }
  }
</script>
