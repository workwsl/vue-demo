<template>
  <header class="bar bar-nav">
      <a @click='goUser()'  class="icon icon-me pull-left"></a>
      <h1 class="title">{{title}}</h1>
  </header>
</template>
<script lang="">
  import {getLoginState, getUserInfo} from '../vuex/getter'
  export default {
    // Options / Data
    data () {
      return {
        name: ''
      }
    },
    props: ['title'],
    vuex: {
      getters: {
        getLoginState: getLoginState,
        getUserInfo: getUserInfo
      }
    },
    methods: {
      goUser () {
        let loginStatus = this.getLoginState
        let redirect = encodeURIComponent(this.$route.path)
        if (loginStatus) {
          let userInfo = this.getUserInfo
          this.$route.router.go({name: 'user', params: { loginname: userInfo.loginname }})
        } else {
          this.$route.router.go({name: 'login', query: {redirect}})
        }
      }
    }
  }
</script>
