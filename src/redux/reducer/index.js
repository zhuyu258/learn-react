import NumberReducer from "./number-reducer"
import UserInfoReducer from "./userInfo-reducer"
import Student from "./student"
import { combineReducers } from "redux"

// 自实现合并多个reducer为一个reducer
// export default function reducer (state={}, action){
//   return {
//     userInfo: UserInfoReducer(state.userInfo,action),
//     number: NumberReducer(state.number,action)
//   }
// }

// 通过redux的combineReducers合并多个reducer
export default combineReducers({
  userInfo: UserInfoReducer,
  number: NumberReducer,
  student: Student,
})
