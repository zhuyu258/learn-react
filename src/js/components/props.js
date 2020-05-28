import React, { Component } from 'react';

import Children from "./chlidre"

class PropsIndex extends React.Component{
  constructor(){
    super()
    //初始化数据
    this.state = {
      name : "oo"
    }
  }
  //传递到子页面的事件
  changeVal(event){
    console.log(event.target.value)
     this.setState({
       name : event.target.value
     })
  }

  render(){
    // setTimeout(()=>{
    //   //通过setState修改数据
    //   this.setState({
    //     name : "dsadsadas"
    //   })
    // },3000)

    return(
        <div>
            {/*通过this.state.属性  使用数据*/}
           <p >{this.state.name}</p>
           <p>{this.props.username}</p>
             {/*通过...this.props传递本页面接受的所有的props数据到子页面*/}
           <Children {...this.props} name = "哈哈父组件传递的必须的string类型的值"  fff={this.changeVal.bind(this)} ></Children>
        </div>

    )
  }
}

export default PropsIndex;
