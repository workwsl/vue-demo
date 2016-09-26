<template>
<div class="user">
  <cn-headersub title='用户信息'></cn-headersub>
  <div class="content">
     {{user.loginname}} <img :src="user.avatar_url" alt="" /> <br> {{user.create_at}} <br> 参与的:{{user.recent_replies}} <br> 发布的:{{user.recent_topics}}
  </div>
</div>
</template>
<script>
  import headerSub from '../components/headerSub'
  import {getNavTabs, getNavTabStatus} from '../vuex/getter'
  import {setNavTabStatus} from '../vuex/actions'
  import { API } from '../common/api'
  export default {
    // Options / Data
    data () {
      return {
        user: {}
      }
    },
    props: [],
    computed: {},
    methods: {},
    components: {
      'cn-headersub': headerSub
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
    route: {
      data (transition) {
        const self = this
        let loginname = transition.to.params.loginname
        API.userInfo(loginname).then((response) => {
          self.user = response.body.data
        })
      }
    },
    ready () {
      this.setNavTabStatus(false)
    }
  }
</script>
