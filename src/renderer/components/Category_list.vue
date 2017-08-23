<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <home selectCat="Cancer"></home>
</template>

<script>

  import Home from './Category_list/Home'
  // import Home from './Category_list/list'

  export default {
    components: {
      Home

    },
    name: 'categorylist-page'
  }

</script>
