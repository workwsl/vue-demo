import Vue from 'vue'
import VueRouter from 'vue-router' // vue router
import routerMap from './router' // router config
import App from './main.vue'
// use vuerouter
Vue.use(VueRouter)

const router = new VueRouter()
// router config
routerMap(router)
router.start(App, '#app')
