import React,{ useLayoutEffect, useState } from "react"

/*
  useLayoutEffect
 和useEffect用法一样，只是执行的时机不一样

  和useEffect的区别：
  它们的执行时机不同
  useEffect: Dom渲染完成，并且页面呈现出来之后执行,此阶段操作dom会出现闪烁的效果
  useLayoutEffect: Dom更新完成，但是页面还未呈现出来,和componentDidMount和componentDidUpdate
                   一样，此阶段适合去操作Dom
*/

function UseLayoutEffect(){
  const [ num, setNum] = useState(0.11)

  return (
    <>
      <p>{num}</p>
      <button onClick={()=>{ setNum(num+3)}}>加3</button>
    </>
  )

}

export default UseLayoutEffect
