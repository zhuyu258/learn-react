
export default function createStore (reducer, initVal) {
  let newReducer = reducer,
        state = initVal,
        arr = [];

  // dispatch
  function dispatch (action, state) {
    if(!action.type){
      throw new Error("action.type不能为空")
    }
    state = newReducer(action,state)
    // 触发监听器存储的函数
    arr.forEach(item=>{
      item && item()
    })
  }

  // 获取状态
  function getState () {
    return state
  }

  // 监听状态的变化，dispatch执行就会被调用
  function subscribe(fn) {
    arr.push(fn)
    return function(){ // 返回一个函数用于移除监听器
      arr.splice(arr.indexOf(fn),1)
    }
  }

  // createStore初次执行的时候执行dispath
  dispatch({
    type: `@@redux/INIT${Math.random().toString(36).substr(2,7).split("").join(".")}`
  })

  return {
    dispatch,
    getState,
    subscribe,
  }
}
