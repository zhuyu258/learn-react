import type from "./action-type"

// 创建action函数
export function getIncreateAction(val){
  return {
    type: type.INCREATE, // 必须有此属性
    payload: val, // 附件数据 可选
  }
}

export function getDecreateAction(val){
  return {
    type: type.DECREATE,
    payload: val, // 附件数据 可选
  }
}

// 自动增加n
export function autoIncreate(n){
  return {
    type: type.AUTOINCREATE,
    payload: n
  }
}

// 取消自动增加
export function cancelAutoIncreate(){
  return {
    type: type.CANCELAUTOIECREATE,
  }
}
