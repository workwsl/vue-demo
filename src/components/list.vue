<template>
<div class="list-block  media-list posts-list">
  <ul>
    <li class="item-content" v-for='item in items' v-link="{name:'tab',params:{tab:item.tab,id:item.id}}">
      <div class="item-media"><img :src="item.author.avatar_url" alt="" width='44' /></div>
      <div class="item-inner">
        <div class="item-title-row">
          <div class="item-title" :class="item.tab | getTabClassName item.good item.top " :title="item.tab | getTabStr item.good item.top" v-text="item.title"></div>
        </div>
        <div class="item-subtitle">
          <div class="info"> <time>{{item.reply_count}}/{{item.visit_count}}  </time> <time style="text-align:right">  {{item.last_reply_at | getLastTimeStr true}}  </time> </div>
        </div>
    </li>
  </ul>
  </div>
  <cn-loading></cn-loading>

</template>
<script>
  import Loading from '../components/loading'
  export default {
    // Options / Data
    data () {
      return {
      }
    },
    components: {
      'cn-loading': Loading
    },
    props: ['items']
  }
</script>
<style lang="scss" scoped>
.list-block {
  margin: 0;
}
.item-subtitle{
  flex: 1;
  .info{
    display: flex;
    font-size: 14px;
    color:#666;
    time{
      flex:1;
    }
  }
}
.posts-list .item-title {
  &::before {
    content: attr(title);
    margin-right: 10px;
    color: #ffffff;
    padding: 5px 6px;
    font-size: 10px;
    font-weight: 400;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
  }
  &.top:before {
    background: #E74C3C;
  }
  &.ask:before {
    background: #3498DB;
  }
  &.share:before {
    background: #1ABC9C;
  }
  &.job:before {
      background: #9B59B6;
  }
  &.good:before {
      background: #E67E22;
  }
}
</style>
