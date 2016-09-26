<template>
  <div class="">
    <cn-header title='精华'></cn-header>
    <div class="content">
      精华精华精华精华
    </div>
  </div>
</template>
<script>
  import Header from '../components/header'
  import {getNavTabs, getNavTabStatus} from '../vuex/getter'
  import {setNavTabStatus} from '../vuex/actions'
  export default {
    // Options / Data
    data () {
      return {
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
      this.setNavTabStatus(true)
    }
  }
</script>
