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
  userInfo: (namne) => {
    return fetch('user/' + namne)
  }
}

export { API }
