<template>
  <div class="bar bar-tab">
     <template v-for="item in items" track-by="$index">
      <!-- <nav-item   :path="{{item.path}}" :label="{{item.name}}" :icon="{{item.icon}}"> </nav-item> -->
      <a class="tab-item external" v-link="{path:item.path,activeClass:'active',replace:true}">
            <span class="icon icon-{{item.icon}}"></span>
            <span class="tab-label" v-text="item.name"></span>
      </a>
    </template>
  </div>
</template>
<script lang="">
  import {getLoginState} from '../vuex/getter'
  import {isLogin} from '../vuex/actions'
  export default {
    // Options / Data
    ready () {
    },
    data () {
      return {}
    },
    props: ['isShow', 'items'],
    computed: {},
    components: {
    },
    methods: {},
    vuex: {
      actions: {
        isLogin: isLogin
      },
      getters: {
        getLoginState: getLoginState
      }
    }
  }
</script>
vscript
