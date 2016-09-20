import Vue from 'vue'
import { config } from '../config'
function ajax (url, params, method) {
  Vue.http.options.headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
  }
  // Vue.http.options.xhr = {
  //   withCredentials: true
  // }
  Vue.http.options.emulateJSON = true
  return Vue.http({
    url: config.baseUrl + url,
    method: method || 'POST',
    params: params || {}
  })
}

function fetch (url, params, method) {
  return ajax(url, params, method)
}

export { fetch }
