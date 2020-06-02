import React, { useEffect, useState, useRef } from 'react'

/*
UseRef
   返回一个固定的引用
  接收参数：
   接收一个值
   返回一个对象{current:值}

  和creactRef区别：
  useRef：每次组件更新都是返回一个固定的引用
  createRef: 每次组件的更新都是返回一个新的引用 

*/

function Test(props){
  return(
    <p>{props.num}</p>
  )
}


export default function UseRef(){
  const [ num, setNum] = useState(0)
  const testRef = useRef(num)
  console.log(testRef.current)
  useEffect(()=>{
    let timer = setInterval(()=>{
      testRef.current++
      setNum(testRef.current)
    },2000)
    return ()=>{
      clearInterval(timer)
    }
  },[])

  return(
    <>
      <Test num={testRef.current}/>
    </>
  )
}
