import React, { useCallback, useState} from "react"

/*
 useCallback
 固定函数的引用。用于性能优化，
 接收两个参数:
 1. 要固定的函数
 2. 要变化的依赖
 解决的问题：
 当状态没有改变的时候，引用的函数发生变化，
 组件还是会被更新执行，所以当状态没有变化的时候不希望组件更新
*/


// 因为传给Test的函数没有使用useCallback固定函数的引用地址，所以每次父元素更新他就会跟着更新
class Test extends React.PureComponent{
  render(){
    console.log("test发生变化")
    return(
      <p onClick={this.props.handle}>{ this.props.num }</p>
    )
  }
}

// Test2使用了useCallback固定传入函数的引用地址，所以即使父级更新了，传入给Test2的状态没有变化。
// Test2就不会被更新
class Test2 extends React.PureComponent{
  render(){
    console.log("test2发生变化")
    return(
      <p onClick={this.props.handle}>{ this.props.num }</p>
    )
  }
}

export default function CallBack(){
  const  [num, setNum]  = useState(0)
  const [ state,setState ] = useState(0)
  // 固定了Test2传入的函数地址，只有State变化的时候才返回新的函数地址
  const handle = useCallback(()=>{
    setState(state+1)
  },[state])
  return(
    <>
      <Test  num={state} handle={()=>{}}/>
      <Test2 num={state} handle={handle} />
      <input value={num} onChange={(e)=>{ setNum(parseInt(e.target.value))}} />
    </>
  )
}
