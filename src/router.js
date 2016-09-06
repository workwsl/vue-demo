/**
 * router config
 * @param  {[type]} router [vue-router]
 * @return {[type]}        [vue-router]
 */
export default (router) => {
  router.map({
    '/': {
      component: (resolve) => {
        require(['./views/index'], resolve)
      }
    },
    '/list': {
      name: 'list',
      component: (resolve) => {
        require(['./views/list'], resolve)
      }
    }
  })
}
