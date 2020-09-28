import React,{ useRef,useImperativeHandle, useState } from "react"

/*
  useImperativeHandle
  解决的问题：
  通过Ref获取函数组件的实例，但是没法使用函数组件中的方法，因此可以通过
  useImperativeHandle解决这个问题

  接收三个参数：
  第一个: Ref
  第二个：一个函数，返回一个值
  第三个: 要变化的依赖
*/

function Test(props,ref){
  let [num,setNum] = useState(0)
  function add(){
    setNum(num++)
  }
  useImperativeHandle(ref,()=>{
    return { // 返回一个对象 ref相当于 ref.current={add:fn}
      add: add
    }
  },[])

  return <h3>这是useImperativeHandle {num}</h3>
}


const TestWrap = React.forwardRef(Test)

export default function UseImperativeHandle(){
  const testRef = useRef()
   return (
     <>
        <TestWrap ref={testRef} />
        <button onClick={()=>{ testRef.current.add()}}>通过Ref直接调用子组件的add实现子组件加1</button>
     </>
   )
}
