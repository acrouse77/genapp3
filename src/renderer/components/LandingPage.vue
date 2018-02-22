<template>
  <div>
    <!-- <Home></Home> -->
    <Banner ></Banner>
 <!--   <helixone ></helixone>
    <helixtwo ></helixtwo> -->
  </div>
</template>

<script>
  import Banner from './Banner'
  import helixone from './helixone'
  import helixtwo from './helixtwo'

  // import Links from './LandingPageView/Links'
  // import Versions from './LandingPageView/Versions'
  // import Home from './LandingPageView/Home'
  export default {
    components: {
      Banner
      // helixone,
      // helixtwo
      // Links,
      // Versions,
      // Home
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  img {
    margin-top: -250px;
    width: 450px;
  }
</style>
