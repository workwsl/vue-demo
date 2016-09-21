<template>
<div class="page page-current">
  <bar v-if="isIndex" class="bar bar-tab">
    <bar-item path="/list" label="全部" icon="menu"></bar-item>
    <bar-item path="/search" label="精华" icon="star"></bar-item>
    <bar-item path="/share" label="分享" icon="share"></bar-item>
    <bar-item path="/message" label="问答" icon="friends"></bar-item>
    <bar-item path="/job" label="招聘" icon="gift"></bar-item>
  </bar>
  <router-view keep-live transition-mode="out-in" transition="fade"></router-view>
</div>
</template>
<script>
import Bar from './components/bar'
import BarItem from './components/nav'
export default {
  data () {
    return {
      isIndex: true
    }
  },
  components: {
    Bar,
    BarItem
  }
}
</script>
<style>
.fade-transition {
  transition: opacity .3s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
