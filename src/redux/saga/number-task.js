import { takeEvery, fork, delay, put, cancel, take, cancelled } from 'redux-saga/effects'
import actionTypes from '../action/action-type'
import { getIncreateAction } from "../action/number-action"

// action的INCREATE发生变化的时候执行这个函数
function *increateCallBack(){
  console.log('actionTypes.INCREATE变化了我被要执行')
}

// action的DECREATE发生变化的时候执行这个函数
function *decreateCallBack(){
  console.log('actionTypes.DECREATE变化了我被要执行')
}

// 自动增加  开始 - 结束 - 开始 - 结束
// 当监听到开始之后，如果没有监听到后面的结束，那么一直处于监听结束中的yield，不管执行多少次开始都不会被监听到
// 只有当结束监听到之后才会执行下一轮的while

function* autoIncreate(){
  while(true){
    yield take(actionTypes.AUTOINCREATE) // 监听自动添加 会阻塞后面的执行  开始
    const task = yield fork(function* (){ // 开启一个新的任务去执行AUTOINCREATE变化之后就触发增加，不会阻塞下面的执行
      try{
        while(true){
          yield delay(2000)
          yield put(getIncreateAction(1))
        }
      }finally{
        if (yield cancelled()) { // cancelled判断当前任务是否执行完毕
          console.log('任务执行完毕')
        }

      }
    })
    yield take(actionTypes.CANCELAUTOIECREATE) // 监听取消自动增加  会阻塞后面的执行  结束
    yield cancel(task) // 取消上面的任务
  }
}

/*
  sage 任务
*/
export default function* (){
    const action1 = yield takeEvery(actionTypes.INCREATE,increateCallBack)  // takeEvery监听指定的action,并且不会阻塞
    const action2 = yield takeEvery(actionTypes.DECREATE,decreateCallBack)
    const action3 = yield fork(autoIncreate) // 开启一个新的任务
    console.log('number action发生了变化',action1,action2)
}
