<template>
<div class="">
  <cn-header title='分享'></cn-header>
  <div class="content">
    <cn-list :items='items'></cn-list>
  </div>
</div>
</template>
<script>
  import { API } from '../common/api'
  import Header from '../components/header'
  import List from '../components/list'
  import {getNavTabs, getNavTabStatus} from '../vuex/getter'
  import {setNavTabStatus} from '../vuex/actions'
  export default {
    // Options / Data
    data () {
      return {
        items: []
      }
    },
    components: {
      'cn-header': Header,
      'cn-list': List
    },
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
      let self = this
      self.setNavTabStatus(true)
      API.getTopics('share').then((response) => {
        self.items = response.body.data
      })
    }
  }
</script>
<style scoped>
</style>
