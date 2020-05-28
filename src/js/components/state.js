import React, { Component } from 'react';


class StateIndex extends React.Component{
  constructor(){
    super()
    //初始化数据
    this.state = {
      name : "3333"
    }

    //事件绑定到当前组件上
    this.changP = this.changP.bind(this)
  }

  changP(){
    alert(this.pDom.textContent)
  }
  render(){
    setTimeout(()=>{
      //通过setState修改数据,从而实现dom的重新渲染，setState是异步的
      this.setState({
        name : "dsadsadas"
      })
      //新版中的setState,setSate方法是异步的
      this.setState({  //prevState表示修改之前的state数据
         name: "dadadsda"
      },()=>{  //数据渲染完成之后的回调函数
        console.log(this.pDom.querySelectorAll("span").length)
      })
    },3000)



    return(
        <div>
        {/*通过this.state.属性  使用数据*/}
           <p >{this.state.name}</p>
           <p ref={(p)=>{ this.pDom = p }} onClick={this.changP}>点击我弹出ref操作dom<span>span</span></p>
           <label htmlFor="la">react中绑定label和input,前缀使用html</label><input id="la" defaultValue="input默认值" />
        </div>

    )
  }
}

export default StateIndex;
