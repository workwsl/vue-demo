<template>
<div class="">
  <cn-headersub :title='detail.tab | getTabStr detail.good detail.top'></cn-headersub>
  <div class="content detail-content">
    {{{detail.content}}}
  </div>
</template>
<script lang="">
  import headerSub from '../components/headerSub'
  import { API } from '../common/api'
  import {getLoginState, getUserInfo} from '../vuex/getter'
  import {setNavTabStatus} from '../vuex/actions'

  export default {
    // Options / Data
    data () {
      return {
        strToken: '',
        detail: {}
      }
    },
    props: [],
    components: {
      'cn-headersub': headerSub
    },
    methods: {
    },
    route: {
      data (transition) {
        const self = this
        let id = transition.to.params.id
        API.getTopicsDetail(id).then((response) => {
          self.detail = response.body.data
        })
      }
    },
    vuex: {
      actions: {
        setNavTabStatus: setNavTabStatus
      },
      getters: {
        getLoginState: getLoginState,
        getUserInfo: getUserInfo
      }
    },
    ready () {
      this.setNavTabStatus(false)
    }
  }
</script>
<style lang="scss">
  .detail-content{
    padding:  10px;
    background-color: #fff;
    word-break: break-all;
    img{
      max-width:100%;
    }
  }
</style>
