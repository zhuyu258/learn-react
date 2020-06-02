import React,{ useContext} from "react"
// 通过useContext获取上下文的值
const ctx = React.createContext()

function Test(){
  const value = useContext(ctx)
  return <h2>上下文中的值：{value}</h2>
}

export default function ContextHook(){
  return (
    <div>
      <ctx.Provider value="312">
        <Test />
      </ctx.Provider>
    </div>
  )
}
