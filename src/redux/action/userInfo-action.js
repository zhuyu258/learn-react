import actionType from "./action-type"

// 添加用户
export function addUserInfoAction (state) {
  return {
    type: actionType.ADDUSERINFO,
    payload: state
  }
}

// 删除用户
export function deleteUserInfo (state) {
  return {
    type: actionType.DELETEUSERINFO,
    payload: state
  }
}

// 修改用户
export function updateUserInfo (state) {
  return {
    type: actionType.UPDATEUSERINFO,
    payload: state
  }
}
