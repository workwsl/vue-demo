<template>
<div class="page page-current">
  <nav-tab :items='getNavTabs'></nav-tab>
  <router-view keep-live transition-mode="out-in" transition="fade"></router-view>
</div>
</template>
<script>
import navTab from './components/navTab'
import store from './vuex/store'
import {getNavTabs} from './vuex/getter'
export default {
  data () {
    return {
      isIndex: true
    }
  },
  components: {
    navTab
  },
  store: store,
  vuex: {
    getters: {
      getNavTabs: getNavTabs
    }
  }
}
</script>
<style>
.fade-transition {
  transition: opacity .3s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
