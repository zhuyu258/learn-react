
// 学生state type
export const studentConditionActionType = {
  change: Symbol("change"),
  studentList: Symbol("studentList"),
  selectLoading: Symbol("selectLoading"),
  studentListBySaga:Symbol('studentListBySaga')
}

// 修改学生查询条件
export function changeStudentCondition(newState) {
  return {
    type: studentConditionActionType.change,
    payload: newState
  }
}

// 获取学生数据
export function getStudentList(newState) {
  return {
    type: studentConditionActionType.studentList,
    payload: newState
  }
}

// 通过ajax请求学生数据 使用的是thunk中间件
export function fetchStudent () {
  return async function (dispatch, getState) {
    console.log(getState())
    const studentCondition  = getState().student.searchCondition // 获取查询条件
    dispatch(setSelectLoading(true)) // 设置加载状态为true
    const list = await (function () { // 模拟获取学生数据
      return new Promise((res,rej)=>{
        setTimeout(function(){
          return res({students:[{id:1},{id:2}]})
        },2000)
      })
    })()
    console.log('list',list)
    dispatch(getStudentList(list))
    dispatch(setSelectLoading(false)) // 设置加载状态为false
  }
}

// 通过alax请求学生数据,使用的是redux-saga
export function fetchStudentBySaga () {
  return {
    type: studentConditionActionType.studentListBySaga
  }
}

// 设置查询状态loading
export function setSelectLoading(newState) {
  return {
    type: studentConditionActionType.selectLoading,
    payload: newState
  }
}
