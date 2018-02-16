<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
<template>
  <home></home> 
  <printall></printall>
</template>
<!--<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <links></links>
  </div>
</template>-->

<script>

  import Home from './BatFilterDetailed/Home'
  import printall from './BatFilter/PrintAll'

  export default {
    components: {

      Home,
      printall
    },
    name: 'batfilterdetailed-page'
  }
</script>
