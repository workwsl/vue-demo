import Vue from 'vue'
import VueRouter from 'vue-router' // vue router
import VueResource from 'vue-resource' // vue-resource
import routerMap from './router' // router config
import App from './app'
import store from './vuex/store'
import { getLoginState } from './vuex/getter'

Vue.config.debug = true
// use vuerouter
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter()
// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((transition) => {
  let auth = getLoginState(store.state)
  if (transition.to.auth) {
    if (auth) {
      transition.next()
    } else {
      var redirect = encodeURIComponent(transition.to.path)
      transition.redirect({name: 'login', query: {redirect}})
    }
  } else {
    transition.next()
  }
})
// router config
routerMap(router)
router.start(App, '#app')
