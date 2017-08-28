<style scoped>
  img {

  }
</style>
<template>
<div>
    <CAD></CAD>
    <!-- <Key class="section"></Key> -->
    <div class="section">
    <div class="container">

    <Geno3></Geno3>
    </div>
    </div>
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
