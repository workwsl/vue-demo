import Vue from 'vue'
import VueRouter from 'vue-router' // vue router
import routerMap from './router.js' // router config
// use vuerouter
Vue.use(VueRouter)

const App = Vue.extend({})
const router = new VueRouter()
// router config
routerMap(router)
router.start(App, '#app')
