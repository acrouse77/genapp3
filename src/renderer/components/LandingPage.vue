<template>
  <div>
    <!-- <Home></Home> -->
    <Banner ></Banner>
  </div>
</template>

<script>
  import Banner from './Banner'
  // import Links from './LandingPageView/Links'
  // import Versions from './LandingPageView/Versions'
  // import Home from './LandingPageView/Home'
  export default {
    components: {
      Banner
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
