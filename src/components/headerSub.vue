<template>
  <header class="bar bar-nav">
      <a @click='goBack()'  class="icon icon-left pull-left"></a>
      <h1 class="title">{{title}}</h1>
  </header>
</template>

<script lang="">
  export default {
    // Options / Data
    data () {
      return {}
    },
    props: ['title'],
    methods: {
      goBack () {
        window.history.go(-1)
        // console.log(this.$router.from.path)
      }
    }
  }
</script>
