import actionType from "../action/action-type"

// 用户信息的Reducer
export default (state = { }, action) => {
  switch (action.type) {
  case actionType.ADDUSERINFO: // 添加
    return { ...state, ...action.payload }
  case actionType.UPDATEUSERINFO: // 修改
    return state.filter(item=>item.id!==action.payload.id)
  case actionType.DELETEUSERINFO: // 删除
    return state.map(item=>{
      if(item.id === action.payload.id){
        item = {...item, ...action.payload}
      }
      return item
    })
  default:
    return state
  }
}
