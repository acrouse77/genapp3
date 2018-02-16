<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <home></home>
</template>


<script>
  import Home from './BatFilter/Home'
  // import bat from path.join (__static, '/referencedata/BAT.json')'./BatFilter/assets/BAT.json'

  export default {
    components: {
      Home
    },
    name: 'batfilter-page',
    data () {
      return {
        msg: 'Hello from vue-loader parent!'
        // bat: bat
      }
    }
  }
</script>
