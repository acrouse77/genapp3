<style scoped>
img {
  margin-top: -25px;
  width: 450px;
}
</style>
<template>
  <div>
    <RA></RA>
    <div class="section">
      <div class="container">

        <Geno></Geno>
      </div>
    </div>
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
