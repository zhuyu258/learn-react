import { take, call, put, takeEvery, delay } from 'redux-saga/effects'
import { studentConditionActionType, setSelectLoading, getStudentList } from '../action/student'

// 模拟ajax获取学生列表
function studnetService(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      if (Math.random() > 0.5) {
        res({students:[{id:1},{id:2}]})
      }else{
        rej('获取学生列表失败')
      }
    },2000)
  })
}

// ajax请求学生列表并且设置相应的请求状态和保存请求数据
function *getStudentSever(){
  // delay指定两秒之后往下执行
  yield delay(2000)
  // 设置加载状态为true
  yield put(setSelectLoading(true)) // put用于执行Action和dispatch一样
  /*
  请求学生列表
  如果call和apply中的异步函数返回reject失败，那么saga内部会使用throw抛出错误，
  所以一般都会使用try cathch进行捕获
  */
  try{
    const list = yield call(studnetService) // call 用于执行异步函数
    // 保存学生列表
    yield put(getStudentList(list))
  }catch(err){
    console.log(err)
  }finally{
    // 设置加载状态为false
    yield put(setSelectLoading(false))
  }
}

/*
  sage 任务
*/
export default function* (){
  while(true){ // 一直对这个任务进行监听，否则只监听一次
    const action = yield take(studentConditionActionType.selectLoading)  // take用于监听指定action的变化
    console.log('selectLoading action发生了变化',action)
    const getStudent = yield takeEvery(studentConditionActionType.studentListBySaga,getStudentSever)
  }
}
