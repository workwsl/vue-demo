// 修改用户状态为已经登录
export const isLogin = ({dispatch}) => {
  dispatch('ISLOGIN')
}
// 设置用户信息
export const setUserInfo = ({dispatch}, loginName, userId, avatarUrl, token) => {
  dispatch('SETUSERINFO', loginName, userId, avatarUrl, token)
}
