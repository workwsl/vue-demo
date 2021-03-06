// 修改用户状态为已经登录
export const isLogin = ({dispatch}) => {
  dispatch('ISLOGIN')
}
// 设置用户信息
export const setUserInfo = ({dispatch}, loginName, userId, avatarUrl, token) => {
  dispatch('SETUSERINFO', loginName, userId, avatarUrl, token)
}
// 设置navtab状态
export const setNavTabStatus = ({dispatch}, status) => {
  dispatch('SETNAVTABSTATUS', status)
}

export const isLoading = ({dispatch}, status) => {
  dispatch('ISLOADING', status)
}
