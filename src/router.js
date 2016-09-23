/**
 * router config
 * @param  {[type]} router [vue-router]
 * @return {[type]}        [vue-router]
 */
export default (router) => {
  router.map({
    '/': {
      name: 'index',
      component: (resolve) => {
        require(['./views/index'], resolve)
      }
    },
    '/user/:loginname': {
      name: 'user',
      component: (resolve) => {
        require(['./views/user'], resolve)
      },
      auth: true
    },
    '/all': {
      name: 'all',
      component: (resolve) => {
        require(['./views/all'], resolve)
      }
    },
    '/good': {
      name: 'good',
      component: (resolve) => {
        require(['./views/good'], resolve)
      }
    },
    '/ask': {
      name: 'ask',
      component: (resolve) => {
        require(['./views/ask'], resolve)
      }
    },
    '/share': {
      name: 'share',
      component: (resolve) => {
        require(['./views/share'], resolve)
      }
    },
    '/job': {
      name: 'job',
      component: (resolve) => {
        require(['./views/job'], resolve)
      }
    },
    '/login': {
      name: 'login',
      component: (resolve) => {
        require(['./views/login'], resolve)
      }
    },
    /* 404路由 */
    '*': {
      name: 'index',
      component: (resolve) => {
        require(['./views/index'], resolve)
      }
    }
  })
}
