import numberType from "../action/action-type"

// number的reducer
export default function Recuder (state = 10, action) {
  switch (action.type) {
    case numberType.INCREATE: // 加
      return state + action.payload
      break;
    case numberType.DECREATE: // 减
      return state - action.payload
      break;
    default:
     return state
  }
}
