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
  export default {
    // Options / Data
    ready () {
      console.log(this.items)
    },
    data () {
      return {}
    },
    props: ['isShow', 'items'],
    computed: {},
    components: {
    },
    methods: {}
  }
</script>
vscript
