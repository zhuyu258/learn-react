import React, { useMemo, useState } from "react"

/*
  useMemo
  用于固定返回的任何值，用于性能优化

  接收两个参数：
  1. 函数：返回一个用于固定的值
  2. 数组：依赖的数据

  解决问题：
  有些数据在首次执行之后就不会随便状态的变化而重新执行，
  此时就可以使用useMemo来固定数据的变化

  和useCallback的区别，
  useCallback: 用于固定函数
  useMemo: 用于固定任何返回的值

*/

export default function MemoHook(){
  const [ range, setRange] = useState({min:0,max:10})
  const [ num, setNum ] = useState(0)

  // list在组件首次渲染之后就不会随着其他状态的变化而重新执行，所以使用了useMemo
  const list = useMemo(()=>{
    let list = []
    for(let i = range.min;i < range.max;i++){
      console.log('list执行了')
      list.push(<span>{i}</span>)
    }
    return list // 返回固定的list
  },[range])

  return (
    <>
      {
        list && list.map(item=>{
          return item
        })
      }
      <input value={num} onChange={()=>{setNum(num+1)}}/>
    </>
  )
}
