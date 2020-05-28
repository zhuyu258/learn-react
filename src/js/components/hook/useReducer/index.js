import React, { useState } from 'react'


/**
 * 1. action  行为和行为的描述 eg: { type: add, remark: '这是加一'}
 * 
 * 2. reducer 只是用来改变状态函数 最后返回改变之后的结果 需要两个参数 一个是状态 一个是action，
 *            (告诉reducer根据什么行为改变状态)
 * 
 * 3. dispath 分发reducer，需要两个参数一个是reducer一个是action
 * 
 * 4. useReducer  
 * 
 */

 function reducer(state,action){
    switch(action.type){
        case "add":
            return state + 1
        case "reduce":
            return state - 1
        default:
            return state
    }
 }


// 自实现useReducer
function useReducer(reducer,initialState,fn){
    const [state, setState] = useState(fn ? fn.call(initialState) : initialState)
    function dispath(action){
       let newState = reducer(state,action)
       setState(newState)
    }
    return [ state, dispath ]
}


export default function LearnUseReducer(){

    const [ state, dispath ] = useReducer(reducer,100)

    return (
        <div>
            <button onClick={()=>{ dispath({type:"add"}) }}>加1</button>
            { state }
            <button onClick={()=>{ dispath({type:"reduce"}) }}>减1</button>
        </div>
    )
}


