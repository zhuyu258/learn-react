/*
  查询条件
*/

import { studentConditionActionType } from '../../action/student'

// 初始默认值
const initState = {
  page: 0,
  size: 10,
  sex: 1,
  key: '哈哈'
}

export default function (state = initState, { type, payload}) {
  switch (type) {
    case studentConditionActionType.change: // 修改查询条件
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
