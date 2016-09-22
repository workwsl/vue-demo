<template>
  <div class="">
    <img src="../assets/logo.png" class="logo" alt="vue" />
  </div>

</template>

<script>
  export default {
    ready () {
      this.$route.router.go({name: 'all'})
      console.log('index')
    }
  }
</script>

<style scoped>
  .logo{
    max-width: 100%;
    margin: 40% auto 0;
    display: block;
  }
</style>
