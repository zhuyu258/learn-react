import React from "react"
import "../../../index.css"

function Summary(props){

    return (
        <div className="wrap">
            <h1>总结</h1>
            <h2>hook解决的问题</h2>
            <p>1. 解决了函数组件中无状态的问题</p>
            <p>2. 解决了函数组件中无生命周期问题</p>
            <p>3. 完善了函数组件的功能，函数组件比类组件更加简便</p>
            <h2>什么时候使用hook</h2>
            <p>hook只能在函数组件中使用，因为hook的出现就是为了增强函数组件，解决
                函数组件无状态和无生命周期的特性，而类组件中不存在这些问题，因此
                只能使用在函数组件中
            </p>
            <h2>hook的种类</h2>
            <p>1. useState  状态</p>
            <p>2. useEffect 生命周期</p>

            <p>react中推荐使用函数组件，有了hook函数组件理论上代替了类组件</p>
        </div>
    )
}

export default Summary