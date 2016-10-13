<template>
<div class="">
  <cn-headersub :title='detail.tab | getTabStr detail.good detail.top'></cn-headersub>
  <div class="content detail-content">
    <h1 class="detail-title">{{detail.title}}</h1> {{{detail.content}}}
  </div>
</template>
<script>
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
.detail-content {
    padding: 10px;
    background-color: #fff;
    word-break: break-all;
    .detail-title {
        padding: 5px;
        margin: 15px;
        font-size: 18px;
        color: #2c3e50;
        line-height: 1.5;
        background-color: #f0f0f0;
        border-radius: 5px;
    }
    img {
        max-width: 100%;
    }
    .markdown-text {
        font-size: 14px;
    }
}
</style>
