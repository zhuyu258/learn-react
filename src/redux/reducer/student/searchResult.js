/*
学生数据的查询结果
*/
import { studentConditionActionType } from "../../action/student"

// 初始数据
const initState = {
  students: [],
  total: 0,
  loading: false
}

// 获取学生列表数据
export default function getStudentList (state = initState, {type, payload}){
  switch (type) {
    case studentConditionActionType.studentList:  // 改变学生列表
      return {
        ...state,
        ...payload,
      }
    case studentConditionActionType.selectLoading: // 改变loading
      return {
        ...state,
        loading: payload,
      }
    default:
      return state
  }
}
