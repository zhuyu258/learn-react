import React from "react";
import "../../../index.css";
import { useState,useEffect } from 'react'

function UseEffect(){
    const [num, setNum] = useState(0)
    console.log(num)
    useEffect(() => {
        console.log('副作用函数')
        return () => { // 清理函数 用于清理副作用
           console.log('清理函数')
        }
    }) 
    useEffect(() => {
        console.log('副作用函数2')
        let timer = setInterval(()=>{
            setNum(num+1)
            console.log(num) // 0
        },1000)
        
        return () => { // 清理函数 用于清理副作用
           console.log('清理函数2')
           clearInterval(timer)
        }
    },[]) // 这里是空数组，什么都不依赖，副作用不会执行，即使里面的改变了状态还是
   
    return (
        <div className="wrap">
            <h1>学习hook之useEffect</h1>
            <h3>解决的问题：</h3>
            <p>解决了函数组件中没有生命周期的问题</p>
            <h3>和类组件中生命周期的区别：</h3>
            <p>useEffect的副作用函数的执行是在ui渲染完之后执行，它是异步执行，而类组件中的生命周期是在
                DOM元素更新完成之后UI渲染之前
            </p>
            <h3>useEffect</h3>
            <p>useEffect是一个函数，不返回任何值，有两个参数，分别是副作用函数和依赖属性数组
            </p>
            <p>第一个参数(副作用函数)：函数中因该写具有副作用的代码，相当于类组件中componentDidMount
                或者componentWillReceiveProps或componentWillUpdate，副作用函数可以有返回值。
                返回值为一个函数，该函数叫做清理函数，相当于类组件中componentWillUnmount
            </p>
            <p>第二个参数(依赖属性数组)：数组中传入第一个函数(副作用函数)中具有依赖的属性，当依赖
                属性发生变化的时候才去执行副作用函数，第二个参数可选，如果不传递只要
                组件更新就会执行副作用函数，如果传递一个空数组，副作用函数只会在首次加载的时候执行一次，
                并且清理函数会在组件卸载的时候执行一次，并且函数组件不再被更新。因为React会认为它是什么都不依赖的，
                所以就不会发生变化
            </p>
            <h3>清理函数：</h3>
            <p>清理函数运行的时间点：每次组件卸载的时候(也就是每次运行副作用函数之前,)</p>
            <p>组件首次渲染不会执行</p>
            <h3>注意：</h3>
            <p>useEffect不能放在if和循环中</p>
            <p>eg:测试清理函数和副作用函数的运行时机</p>
            <p>{num}</p>
            <button onClick={()=>{ setNum(num+1) }}>加1</button>
        </div>
    )

}

export default UseEffect
 