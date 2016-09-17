<template>
	<a class="tab-item external" v-link="{path:path,activeClass:'active',replace:true}">
        <span class="icon" v-bind:class="iconClass"></span>
        <span class="tab-label" v-text="label"></span>
    </a>
</template>
<script lang="">
  export default {
    // Options / Data
    data () {
      return {}
    },
    props: {
      path: '',
      icon: '',
      label: ''
    },
    computed: {
      iconClass () {
        return 'icon-' + this.icon
      }
    }

  }
</script>
