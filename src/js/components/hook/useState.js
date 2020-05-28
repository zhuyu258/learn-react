import React from "react";
import "../../../index.css";
import { useState,useEffect } from 'react'

function LearnUseState(props){
    // 定义状态并且传入一个值作为初始值
    const [ val, setVal ] = useState({x:0,y:0})
    const [ num, setNum ] = useState(100)

    const addX = () => {
        setVal({ // 改变状态中的x属性，每次改变都会替换掉之前的值，所以这个需要先扩展开之前再修改
            ...val,
            x: val.x + 1
        })
    }

    const addY = () => { // 同一个事件中修改多次修改不同的状态是可以正常修改
        setVal({
            ...val,
            y: val.y + 1
        })
        setNum(num-1) 
    }

    const reduceNum = () => {
        // 多次调用只执行最后一次，因为一个事件中要等到事件执行完毕之后才去修改状态，所以多次修改同一个状态
        // 会被最后一次覆盖掉，
        setNum(num-1) // 这里的num是100
        console.log(num) // 100
        setNum(num-2) // 这里的num是100, 这里会覆盖掉前面的修改
    }

    const addNum = () => {
        // 通过传递一个函数多次修改同一个状态
        setNum((num)=>{ return num + 1}) // 放入数组中
        console.log(num) // 100
        setNum((num)=>{ return num + 1}) // 放入数组中
        setNum((num)=>{ return num + 1}) // 103 放入数组中 并且依次执行数组中的函数,把修改后的值传入下一个函数中
    }


    return (
        <div className="wrap">
            <h2>学习hook之useState</h2>
            <h3>解决的问题：</h3>
            <p>useState主要解决了函数组件中无状态的问题，可以通过useState在函数组件中
                定义并且使用状态
            </p>
            <h3>和类组件中状态的区别：</h3>
            <p>类组件中状态只能定义一个(state),在函数组件中多个状态可以定义多个useState</p>
            <h3>useState</h3>
            <p>useState是一个函数，传递一个参数，参数就是定义的状态的默认值，并且这个函数返回一个数组，
               数组中有两项，第一项：表示这个状态的值；第二项：表示改变这个状态的函数</p>
            <h3>useState基本原理：</h3>
            <p>
                react中组件都是一个React元素，每次使用都会根据组件对应的类或者函数生成一个React元素，
                React元素对应一个状态表格，这个状态表格就是用于管理hook中的状态，当函数组件执行的时候，
                代码会从上往下执行，当遇到useState时候，就会在表格中进行检查，根据当前执行的是第几个
                useState从而在表格中查找对应的下标是否存在，如果不存在就创建，存在根据Object.is进行判断
                值是否改变，改变了就替换，否则就不做处理；因此根据这个原理，useState最好定义在函数组件的
                最顶部，并且不能放在if和for循环中，因为是根据usestate定义的位置进行创建。
            </p>
            <h3>注意事项:</h3>
            <p>1. useState最好写在函数起始位置，并于阅读</p>
            <p>2. useState禁止出现在for循环和if条件判断中</p>
            <p>3. 使用useState并且改变这个状态，内部会使用Object.is进行判断，如果新旧值相等，那么就不会进行
                重新渲染
            </p>
            <p>4. 使用useSate改变状态，新值会替换掉旧值，并不会像类组件中的状态进行新旧合并</p>
            <p>5. 每次改变状态，只要新旧不相等，就会重新渲染这个函数组件，因此函数组件中使用这个特性可以达到强制刷新
                的目的，而类组件中使用this.forceUpdate()进行强制刷新
            </p>
            <p>6. (useState状态在事件中是异步的)同一个事件中，没有使用函数回调形式多次修改同一个状态，那么只有最后一次生效，
                因为React为了性能会等到事件执行完毕，才去修改状态，所以每次修改获取的状态都是修改之前的值，并且只有最后一个
                修改才会生效，想要解决这个问题，就需要在修改函数中传入一个函数，因为函数会被放在一个数组中，依次执行
            </p>
            <p>eg:修改状态的时候会直接替换掉之前的值</p>
            <p>x: {val.x},y:{val.y}</p>
            <button onClick={addX}>X加1</button>
            <button onClick={addY}>Y加1</button>
            <p>eg:一个事件中多次修改同一个状态，只会生效一次</p>
            <p>num:{num}</p>
            <button onClick={reduceNum}>num减1</button>
            <button onClick={addNum}>num加1</button>
        </div>
    )
}

export default  LearnUseState