import React, { Component } from 'react';

/*
   上下文
     实际就是一个组件对象
     返回的是一个包含两个属性的对象

     1. Provider
          生产者，一个组件，该组件会创建一个上下文，该组件
         有value属性，通过该属性可以为其数据赋值

     2.  Comsumer
           消费者，一个组件，该组件的children是一个函数，函数的参数
           参数就是上下文数据

           缺点：
              不够灵活，不能像contextType在类中可以随意操作
              只能在渲染时使用
           优点：
               一个组件中可以使用多个不同上下文通过Comsumer，
               而contextType不能使用多个上下文


    使用上下文中的数据
      1. 类组建中使用
          1.1 必须要有静态属性contextType,此属性的
              值就是创建的上下文对象
          1.2 通过this.context使用上下文的数据

          1.3  或者使用Comsumer

      2. 函数组件中使用
          1.1  Comsumer，该组件的children是一个函数，函数的参数
               就是上下的属性

     注意：
        上下文中的Provider中的value发生变化，那么使用到它的所有子组件都要
        重新渲染，不管子组件是否优化(shouldComponentUpdate)





*/

//创建上下文
const ctx = React.createContext({name:'初始姓名',age:20})


function AChild(props){
  return (
     <div>
        <div>
          {/* { 函数组件中通过Comsumer使用上下文 } */}
          <ctx.Consumer>
           {(value)=>{ // 函数中的value就是上下文数据
              return <p>函数组件中使用上下文{value.name}</p>
           }}
          </ctx.Consumer >
        </div>
       <BChild></BChild>
     </div>
    )
}

class BChild extends Component {
  //接收上下文
  static contextType = ctx;

  shouldComponentUpdate(nextProps,nextState){
    console.log('只要生产的Value发生变化，不换这里是否返回false都要重新渲染子组件')
    return false
  }

  render(){
    return (<div>
      // 通过context使用上下文中的数据
      我是通过上下文传递的数据：姓名：{this.context.name} 年龄：{this.context.age}
      <button onClick={()=>{
        this.context.onChange()
      }}>B组件中修改上下文加1</button>
    </div>)
  }
}

class newContext extends Component {
  datas = [{
    name: '孩子',
    age: 10,
    onChange:()=>{
      this.setState({
        age: this.state.age + 1
      })
    }
  }]

  state = this.datas[0]

  render() {
    return (
      // 生产
      <ctx.Provider value={this.state}>
        <div>
          <AChild/>
          <button onClick={()=>{
            this.setState({
              age: this.state.age + 1
            },()=>{

            })
          }}>加1</button>
        </div>
      </ctx.Provider>
    );
  }
}

export default newContext;
