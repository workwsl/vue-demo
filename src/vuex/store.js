import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: false,
  navTabShow: false,
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
    state.userInfo.loginname = loginname
    state.userInfo.userId = userId
    state.userInfo.avatar_url = avatarUrl
    state.userInfo.token = token
  },
  // 设置navtab状态
  SETNAVTABSTATUS: (state, status) => {
    state.navTabShow = status
  }
}

export default new Vuex.Store({state, mutations})
