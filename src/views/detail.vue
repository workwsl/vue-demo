<template>
<div class="">
  <cn-headersub title='详情'></cn-headersub>
  <div class="content">
    详情
  </div>
</template>
<script lang="">
  import headerSub from '../components/headerSub'
  // import { API } from '../common/api'
  import {getLoginState, getUserInfo} from '../vuex/getter'
  import {isLogin, setUserInfo} from '../vuex/actions'

  export default {
    // Options / Data
    data () {
      return {
        strToken: ''
      }
    },
    props: [],
    components: {
      'cn-headersub': headerSub
    },
    methods: {
    },
    vuex: {
      actions: {
        isLogin: isLogin,
        setUserInfo: setUserInfo
      },
      getters: {
        getLoginState: getLoginState,
        getUserInfo: getUserInfo
      }
    }
  }
</script>
