<template>
<div class="">
  <cn-headersub :title='title'></cn-headersub>
  <div class="content">
    <div class="list-block">
      <ul>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-input"> <input type="text" placeholder="accessToken" v-model="strToken"> </div>
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
  import headerSub from '../components/headerSub'
  import { API } from '../common/api'
  import {getLoginState, getUserInfo} from '../vuex/getter'
  import {setNavTabStatus} from '../vuex/actions'

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
      'cn-headersub': headerSub
    },
    methods: {
      login: function () {
        // let strToken = this.strToken
        API.login(this.strToken).then((data) => {
          let info = data.data
          this.setUserInfo(info.loginname, info.userId, info.avatar_url, info.token)
          this.isLogin()
          const redirect = decodeURIComponent(this.$route.query.redirect || '/')
          this.$route.router.go(redirect)
        })
      }
    },
    vuex: {
      actions: {
        setNavTabStatus: setNavTabStatus
      },
      getters: {
        getLoginState: getLoginState,
        getUserInfo: getUserInfo
      }
    },
    ready () {
      this.setNavTabStatus(false)
    }
  }
</script>
