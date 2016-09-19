<template>
  <header class="bar bar-nav">
    <a v-if="leftShow" class="icon icon-me pull-left"></a>
    <a  v-if="rightShow" class="icon icon-edit pull-right"></a>
    <h1 class="title">{{title}}</h1>
  </header>
</template>
<script lang="">
  export default {
    // Options / Data
    data () {
      return {}
    },
    props: ['title', 'leftShow', 'rightShow'],
    computed: {},
    methods: {}// ,
    // watch: {},
    // Options / DOM
    // el () {},
    // replace: true,
    // template: '',
    // Options / Lifecycle Hooks
    // init () {},
    // crated () {},
    // beforeCompile () {},
    // compiled () {},
    // ready () {},
    // attached () {},
    // detached () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    // directives: {},
    // elementDirectives: {},
    // filters: {},
    // components: {},
    // transitions: {},
    // partials: {},
    // Options / Misc
    // parent: null,
    // events: {},
    // mixins: [],
    // name: ''
  }
</script>
