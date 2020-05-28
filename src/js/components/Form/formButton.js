import React from 'react'
import {Consumer} from './formContext'

export default function FormButton(props){
  return(
    // 函数组件使用上下文中的消费者进行接收上下文的数据
    <Consumer>
    {
      (ctxs)=>{ // 消费者内部是一个函数 参数就是上下文传递的数据
        return (
          <button
            onClick={()=>{
              ctxs.submit && ctxs.submit()
            }}
          >
            {props.children}
          </button>
        )
      }
    }

    </Consumer>
  )
}
