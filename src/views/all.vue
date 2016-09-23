<template>
  <div class="">
    <cn-header :left='left' :right='right' :title='title' ></cn-header>
    <div class="content">
      <p>我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白</p>
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
        left: {
          show: true,
          type: 'user'
        },
        right: {
          show: true,
          type: 'edit'
        },
        title: '全部'
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
