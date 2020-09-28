import store from './index'
import { changeStudentCondition, fetchStudent, setSelectLoading, fetchStudentBySaga } from "./action/student"
import { cancelAutoIncreate, autoIncreate } from "./action/number-action"

// 修改学生查询条件
// store.dispatch(changeStudentCondition({
//   page: 1,
//   sex: '女'
// }))

// 获取学生列表数据 thunk方式
// store.dispatch(fetchStudent())
// saga方式
// store.dispatch(fetchStudentBySaga())
// 执行自动增加
// store.dispatch(autoIncreate())

function autoIncreates(){
  store.dispatch(autoIncreate())
}
function cancelAutoIncreates(){
  store.dispatch(cancelAutoIncreate())
}
window.autoIncreates = autoIncreates
window.cancelAutoIncreates = cancelAutoIncreates
// store.dispatch(cancelAutoIncreate()) // 取消自动增加
// store.dispatch(setSelectLoading(true))
console.log(store.getState())
