<style scoped>
img {
    margin-top: -25px;
    width: 450px;
}


</style>
<template>
  <div>
    <AMD></AMD>
    <div class="section">
      <div class="container">

        <Geno></Geno>
      </div>
    </div>
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
