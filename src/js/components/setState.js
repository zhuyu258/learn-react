import React from 'react';

/*
  setState
     用来改变数据

  1. setState放在元素的事件中是异步执行的否则就是同步的

  2. 如果使用state中改变之后的状态则给setState传递第二个参数回调函数

  3. 如果使用上一次的state中的状态，则给setState传递一个函数，此函数
     有两个参数分别为上一次的State状态和上一次的props

  4. 如果连续执行多个同步的setState，那么每一次的执行都会执行render
     函数

  5. 如果连续执行多个异步的setState,那么多次执行之后才会执行一次render



*/
export default class learnSetState extends React.Component{

     constructor(props){
       super(props)
       this.state = {
         num: 0
       }
       //不在元素的事件中就是同步执行的 并且连续多次执行setState都会去触发render
       setTimeout(()=>{
         this.setState({
           num: this.state.num + 1
         })
         this.setState({
           num: this.state.num + 1
         })
       },1000)
     }
     //点击事件  事件使用箭头函数或者使用bind指定this的指向
     change = ()=>{
       //下面在是多个异步setState执行，合并之后只执行一次render
       //放在点击事件中就是异步执行的
       this.setState({
         num: this.state.num + 1
       })
       //在上一次状态的基础上进行操作
       this.setState((prev)=>{
          return prev + 1
       })
       //获取到render函数渲染完成之后的State
       this.setState({num:this.state.num + 1},()=>console.log(this.state.num))
     }
     render(){
        return (
          <p >{this.state.num}<span onClick={this.change}>+</span></p>
        )
     }
}
