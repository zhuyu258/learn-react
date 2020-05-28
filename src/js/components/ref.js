import React, { Component } from 'react';
/*
   新版本中的ref使用方法
   <input ref={ (input) => { this.inputDom = input }}  />

   方法中使用
     this.inputDom

  1. ref 作用于内置的html元素上，获取的就是真实的dom
  2. ref 作用于类组件上，获取的就是类的实例对象
  3. ref 不能作用于函数组件上

  ref不再推荐使用字符串赋值，有效率问题

  目前Ref推荐使用对象或函数
  1. 通过React.forwardRef()创建对象,返回{current:null} 从而获取ref
  2. 通过函数，函数一般提取出来，不直接放在ref中，否则每次渲染都要执行
     一次之前的函数和新赋值的函数

  ref转发
  语法：
    React.forwardRef(fnCom)
    通过React.forwardRef转发函数组件中的ref
    fnCom是一个函数组件，函数组件接收两个参数，分别为：
      props和ref
  注意：
    1. ref只适合函数组件，但可以渐渐的使用在类组件上，因为函数组件没有ref,
       所以想要获取函数组件中的某个元素的dom可以通过转发ref
    2. Ref转发还使用在高阶组件中，获取高阶组件下的组件的dom或实例
*/

//1. 转发ref在函数组件中的使用
export function A(props,ref){
  return (
    // ref在哪个元素上就在哪里使用
    <h5 ref={ref}>{props.name}</h5>
  )
}

//React.forwardRef相当于创建一个高阶组件
const NewA = React.forwardRef(A)

// 2. 高阶组件中转发Ref获取类的实例对象
function Log(Com){
  class B extends Component{
    render(){
      let { LoginDom } = this.props
      return (
        <Com ref={LoginDom} {...this.props}/>
      )
    }
  }
  return React.forwardRef((props,ref)=>{
    return (
      <B {...props} LoginDom={ref}/>
    )
  })
}

class C extends Component{
  render(){
    return(
      <h4>高阶组件{this.props.name}</h4>
    )
  }
}

const NewLog = Log(C)


class ForwardRef extends Component {
  state = {
    h5Dom: '',
    newLogObj: ''
  }
  constructor(props){
    super(props)
    //通过React.createRef()创建对象获取ref
    this.inputRef = React.createRef();

  }
  componentDidMount(){
    //使用ref
    console.log(this.inputRef.current)
  }
  //ARef = React.createRef().current;
  ARef = el => {
    this.AH5Dom = el
  }

  newLogRef = el => {
    this.newLogRefs = el
  }

  //提取出Ref函数防止每次渲染都重新赋值
  inputRefFn = el => {
    this.inputRefByFn2 = el
  }

  render() {
    return (
      <div>
        <NewA ref={this.ARef} name="函数组件转发ref" />
        <p>h5Dom：{this.state.h5Dom}</p>
        <button onClick={()=>{
          this.setState({
            h5Dom: this.AH5Dom +''
          })
        }}>获取Ah5的dom</button>
        <NewLog ref={this.newLogRef} name="通过高阶组件传递的数据" />
        <p>newLogRef:{this.state.newLogObj}</p>
        <button onClick={()=>{
          this.setState({
            newLogObj: this.newLogRefs +''
          })
        }}>获取newLog类组件的实例</button>
        <input ref={this.inputRef} value='ref通过对象获取' />
        <input ref={(el)=>{
          console.log(el) //这边执行两次，一次是旧的el为null一次的新赋值的为dom，
          this.inputRefByFn = el
        } } value='ref通过函数获取' />
        <input ref={this.inputRefFn} value='ref通过函数获取' />
      </div>
    );
  }
}

export default ForwardRef;
