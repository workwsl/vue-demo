<template>
<div class="page page-current">
  <nav-tab v-if='getNavTabStatus' :items='getNavTabs'></nav-tab>
  <router-view keep-live transition-mode="out-in" transition="fade"></router-view>
  <cn-loading></cn-loading>
</div>
</template>
<script>
import navTab from './components/navTab'
import Loading from './components/loading'
import store from './vuex/store'
import {getNavTabs, getNavTabStatus} from './vuex/getter'
import {setNavTabStatus} from './vuex/actions'
export default {
  data () {
    return {
      isIndex: true
    }
  },
  components: {
    navTab,
    'cn-loading': Loading
  },
  store: store,
  vuex: {
    actions: {
      setNavTabStatus: setNavTabStatus
    },
    getters: {
      getNavTabs: getNavTabs,
      getNavTabStatus: getNavTabStatus
    }
  },
  ready () {
    this.setNavTabStatus(true)
  }
}
</script>
<style>
.bar-tab~ .fade-transition >.content {
    bottom: 2.5rem
}
.fade-transition {
  transition: opacity .3s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
