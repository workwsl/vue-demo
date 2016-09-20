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
                  <input type="text" placeholder="accessToken" v-model="strToken">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-block">
          <div class="row">
            <div class="col-100"><a @click='login' class="button button-big button-fill button-success">提交</a></div>
          </div>
      </div>
  </div>

</template>
<script lang="">
  import { API } from '../common/api'
  import Header from '../components/header'
  export default {
    // Options / Data
    data () {
      return {
        title: '登录',
        strToken: ''
      }
    },
    props: [],
    components: {
      'cn-header': Header
    },
    methods: {
      login: function () {
        console.log(API)
        API.login(this.strToken).then(function (data) {
          window.localStorage.setItem('userId', data.data.id)
        })
      }
    }

  }
</script>
