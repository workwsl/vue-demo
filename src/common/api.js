import { fetch } from './common'
/**
 * [API config]
 * @type {Object}
 */
const API = {
  // 登陆
  login: (accesstoken) => {
    return fetch('accesstoken', {accesstoken})
  },
  userInfo: (name) => {
    return fetch('user/' + name, null, 'GET')
  },
  getTopics: (tab) => {
    return fetch('topics', {tab}, 'GET')
  }
}

export { API }
