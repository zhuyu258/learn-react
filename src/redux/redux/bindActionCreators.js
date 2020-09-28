
export default function bindActionCreators (actions, dispath) {

  if(Object.prototype.toString.call(actions) === "[object Function]") {
    return function (...args){
      return dispath(actions(...args))
    }
  }else if(Object.prototype.toString.call(actions) === "[object Object]") {
    let obj = {}
    for (var variable in actions) {
      if (actions.hasOwnProperty(variable)) {
        const item = actions[variable]
        obj[variable] = function (...args){
          return dispath(item(...args))
        }
      }
    }
    return obj
  }else{
    throw new Error("actions是一个函数或者对象")
  }
}

// 调用形式
// 传入函数
// const actions = bindActionCreators(()=>{},dispath)
// actions(123)
// 传入对象
// const val = bindActionCreators({a:a},dispath)
// val.a(123)
