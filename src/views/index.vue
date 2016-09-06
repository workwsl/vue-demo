<template>
  <img src="../assets/logo.png" class="logo" alt="vue" />
</template>

<script>
  export default {
    ready () {
      setTimeout(() => {
        this.$route.router.go({name: 'list'})
      }, 2000)
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
