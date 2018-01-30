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
        <Geno1></Geno1>
      
      </div>
    </div>
  </div>
</template>

<script>
import Geno from './AMD_Geno.vue'
import Geno1 from './AMD_Geno.1.vue'
import AMD from './assets/01-age-related-macular-degeneration.vue'
// import AMD from 'static/referencedata/01-age-related-macular-degeneration.vue'
import Key from './Key.vue'

export default {
  components: {
    Geno1,
    // Geno,
    AMD
    // Key
  },
  name: 'AMD-page',
  data () {
    return {

    }
  }
}
</script>
