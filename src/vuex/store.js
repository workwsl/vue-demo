import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: false,
  userInfo: {
    'avatar_url': '',
    'loginname': '',
    'token': '',
    'userId': ''
  }
}

const mutations = {
  // 设置登录
  ISLOGIN: (state) => {
    state.isLogin = true
  },
  // 退出登录
  OUTLOGIN: (state) => {
    state.isLogin = false
  },
  // 设置用户信息
  SETUSERINFO: (state, loginname, userId, avatarUrl, token) => {
    state.loginname = loginname
    state.userId = userId
    state.avatar_url = avatarUrl
    state.token = token
  }
}

export default new Vuex.Store({state, mutations})
