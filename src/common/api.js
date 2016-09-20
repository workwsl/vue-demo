import { fetch } from './common'
/**
 * [API config]
 * @type {Object}
 */
const API = {
  // 登陆
  login: function (accesstoken) {
    return fetch('accesstoken', {accesstoken})
  }
}

export { API }
