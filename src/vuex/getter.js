// 获取登录状态
export const getLoginState = (state) => {
  return state.isLogin
}
// 获取登录用户信息
export const getUserInfo = (state) => {
  return state.userInfo
}
// 获取底部navtabslist
export const getNavTabs = (state) => {
  return state.navTabs
}
// 获取底部navtabs 显示状态
export const getNavTabStatus = (state) => {
  return state.navTabShow
}

export const getLoading = (state) => {
  return state.loading
}
