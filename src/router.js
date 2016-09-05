/**
 * router config
 * @param  {[type]} router [vue-router]
 * @return {[type]}        [vue-router]
 */
export default (router) => {
  router.map({
    '/foo': {
      component: (resolve) => {
        require(['./components/Foo.vue'], resolve)
      }
    },
    '/bar': {
      component: (resolve) => {
        require(['./components/Bar.vue'], resolve)
      }
    }
  })
}
