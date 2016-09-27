<template>
  <div class="" v-show="getLoading">
    <div class="preloader-indicator-overlay"></div>
    <div class="preloader-indicator-modal"><span class="preloader preloader-white"></span></div>
  </div>
</template>
<script lang="">
  import {getLoading} from '../vuex/getter'
  export default {
    // Options / Data
    data () {
      return {}
    },
    vuex: {
      getters: {
        getLoading: getLoading
      }
    }
  }
</script>
