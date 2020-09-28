import searchCondition from "./searchCondition"
import searchResult from "./searchResult"
import { combineReducers } from "redux"


export default combineReducers({  // 进行细分，每个大状态下进行合并
  searchCondition,
  searchResult,
})
