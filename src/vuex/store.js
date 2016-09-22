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
  },
  navTabs: [{
    name: '全部',
    icon: 'menu',
    path: '/all'
  }, {
    name: '精华',
    icon: 'star',
    path: '/good'
  }, {
    name: '分享',
    icon: 'share',
    path: '/share'
  }, {
    name: '问答',
    icon: 'friends',
    path: '/ask'
  }, {
    name: '招聘',
    icon: 'gift',
    path: '/job'
  }]
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
