<template>
<div class="">
  <cn-header title='全部'></cn-header>
  <div class="content">
    <div class="list-block">
      <ul>
        <li class="item-content" v-for='item in items' v-link="{name:'all',params:{id:item.id}}">
          <div class="item-media"><img :src="item.author.avatar_url" alt="" width='44' /></div>
          <div class="item-inner">
            <div class="item-title">{{item.title}}</div>
            <div class="item-after">标签</div>
          </div>
        </li>
    </div>
  </div>
</div>
</template>
<script>
  import { API } from '../common/api'
  import Header from '../components/header'
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
      'cn-header': Header
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
      API.getTopics('all').then((response) => {
        self.items = response.body.data
      })
    }
  }
</script>
<style scoped>
</style>
