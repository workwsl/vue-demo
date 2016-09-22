<template>
  <div class="">
    <cn-header :left-show='leftshow' :right-show='rightshow' :title='title' ></cn-header>
    <div class="content">
      <p>我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白,我的左右两边有留白</p>
    </div>
  </div>
</template>
<script>
  import Header from '../components/header'
  export default {
    // Options / Data
    data () {
      return {
        leftshow: true,
        rightshow: true,
        title: '全部'
      }
    },
    components: {
      'cn-header': Header
    }
  }
</script>
