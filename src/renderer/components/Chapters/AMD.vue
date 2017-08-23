<style scoped>
img {
    margin-top: -25px;
    width: 450px;
}


</style>
<template>
<div class="col-lg-10 col-md-10 col-sm-10 offset-lg-2 offset-md-2 offset-sm-2">
    <AMD class="col-lg-10 col-md-10 col-sm-10"></AMD>
    <!-- <Key class="section"></Key> -->
    <Geno></Geno>
</div>
</template>

<script>
import Geno from './AMD_Geno.vue'
import AMD from './assets/01-age-related-macular-degeneration.vue'
import Key from './Key.vue'

export default {
  components: {
    Geno,
    AMD,
    Key
  },
  name: 'AMD-page',
  data () {
    return {

    }
  }
}
</script>
