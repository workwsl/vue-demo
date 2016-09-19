<template>
  <div class="">
    <cn-header :title='title' ></cn-header>
    <div class="content">
      <div class="list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-input">
                  <input type="text" placeholder="accessToken">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-block">
          <div class="row">
            <div class="col-100"><a  class="button button-big button-fill button-success">提交</a></div>
          </div>
      </div>
  </div>

</template>
<script lang="">
  import Header from '../components/header'
  export default {
    // Options / Data
    data () {
      return {
        title: '登录'
      }
    },
    props: [],
    components: {
      'cn-header': Header
    }

  }
</script>
