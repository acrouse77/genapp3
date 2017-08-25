<style scoped>
  img {
    width: 450px;
  }
</style>
<template>
  <div>
    <Banner></Banner>
        <home ></home>
    <!--<home class="col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1"></home> -->
    <!-- <Intro class="col-lg-10 col-md-10 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1"></Intro> -->
  </div>
</template>
<script>
  import Banner from './Banner'
  import Home from './Introduction/Home'
  import Intro from './Introduction/assets/Guide-Introduction'
  export default {
    components: {
      Home,
      Banner,
      Intro
    },
    name: 'introduction-page'
  }
</script>
