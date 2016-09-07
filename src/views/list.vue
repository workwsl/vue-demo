<template>
  <cn-header></cn-header>
  <cn-nav></cn-nav>
  <div class="content">
    <p>我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白</p>
  </div>

</template>
<script>
  import Header from '../components/header'
  import Nav from '../components/nav'
  export default {
    // Options / Data
    data () {
      return {}
    },
    props: [],
    computed: {},
    methods: {},
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
    components: {
      'cn-header': Header,
      'cn-nav': Nav
    }
    // transitions: {},
    // partials: {},
    // Options / Misc
    // parent: null,
    // events: {},
    // mixins: [],
    // name: ''
  }
</script>
