import React, { Component } from 'react';


class Children extends React.Component{
  constructor(){
    super()
    this.state={
      name:"我是子组件向父组件传递的数值"
    }
  }
  //组件加载完成的生命周期
  componentDidMount(){
      //页面加载完成执行子组件向父组件传参
      this.props.getMsg(this.state.name)
  }
  //执行函数，从而执行接收到父组件的事件函数，把值作为函数的参数传递过去
  setVal(){

    this.props.getMsg(this.state.name)
  }
  changVal(e){
    this.setState({
      name: e.target.value
    })
  }

  render(){
    return(
      <div>
         <p onClick={this.setVal.bind(this)}>{this.state.name}</p>
         {/*react中表单这种输入框，复选框，可以操作的，给它们设置默认值都是通过default+值*/}
         可以改变子组件向父组件的传值： <input type="text" defaultValue="我是默认值" onChange={this.changVal.bind(this)}/>

      </div>
    )
  }

}


class MsgProp extends React.Component{
  constructor(){
    super()
    //初始化数据
    this.state = {
      name : ""
    }
  }
  //传递到子页面的事件,接受子页面传递的参数，从而实现子组件向父组件传值
  getVal(data){
     this.setState({
       name :data
     })
  }

  render(){

    return(
        <div>
           {this.state.name}
           <Children getMsg={this.getVal.bind(this)}></Children>
        </div>

    )
  }
}

export default MsgProp;
