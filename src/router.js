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
    '/list': {
      name: 'list',
      component: (resolve) => {
        require(['./views/list'], resolve)
      }
    },
    '/search': {
      name: 'search',
      component: (resolve) => {
        require(['./views/search'], resolve)
      }
    },
    '/message': {
      name: 'message',
      component: (resolve) => {
        require(['./views/message'], resolve)
      },
      auth: true
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
