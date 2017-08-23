<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
  .py-5 {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  .lead{
    margin-bottom: 20px;
      font-size: 16px;
      font-weight: 200;
      line-height: 1.4
  }
  .header{
    margin-top: 30px
  }
  h1,
  .h1 {
      font-size: 36px
  }
  h2,
  .h2 {
      font-size: 30px
  }
  h3,
  .h3 {
      font-size: 24px;
      font-weight: bold
  }
  h4,
  .h4 {
      font-size: 18px
  }
  h5,
  .h5 {
      font-size: 14px
  }
  h6,
  .h6 {
      font-size: 12px
  }
  h2,
  h3 {
      orphans: 3;
      widows: 3
  }
  h2,
  h3 {
      page-break-after: avoid
  }
</style>
<template>
  <div>
    <home></home>

  </div>

</template>

<script>

  import Home from './Chapters/Home'

  export default {
    components: {
      Home
    },
    name: 'chapters-page',
    data () {
      return {

      }
    }
  }
</script>
