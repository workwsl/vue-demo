<template>
  <div class="user">
    {{user.githubUsername}}
  </div>
</template>
<script>
  import {getNavTabs, getNavTabStatus} from '../vuex/getter'
  import {setNavTabStatus} from '../vuex/actions'
  import API from '../common/api'
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
        let loginname = transition.to.params.loginname
        API.userInfo(loginname).then((data) => {
          this.user = data.data
        })
      }
    },
    ready () {
      this.setNavTabStatus(false)
    }
  }
</script>
