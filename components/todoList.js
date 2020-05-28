import React, { Component } from 'react';
import { Input,Button,List } from 'antd';
import Store from "../store/index"
import { getChangeInputAction, getAddDataAction, getDeleDataAction, getInitDataAction } from "../store/actionCreactors"
import TodoListUI from "./todoListUI"
import axios from "axios"


class TodoList extends Component {
  constructor(){
    super()
    this.state = Store.getState()
    console.log(Store.getState())
    this.changeInput = this.changeInput.bind(this)
    this.buldeChangeInput = this.buldeChangeInput.bind(this)
    this.addBtn = this.addBtn.bind(this)
    this.dele = this.dele.bind(this)
    Store.subscribe(this.buldeChangeInput);//store数据发生改变就执行这个方法
  }

  componentDidMount(){
         // axios.get("../../data/data.json").then((data)=>{
         //   console.log(data)
         // }).catch((err)=>{
         //   console.log(err)
         // })
         //使用redux-thunk可以使用函数的功能，把请求的操作封装到redux中
         let action = getInitDataAction()
         console.log(action)
         Store.dispatch(action) ////使用redux-thunk可以传入一个函数
  }

  changeInput(e){
    console.log(e.target.value)
    const action = getChangeInputAction(e.target.value)
    Store.dispatch(action)
  //  this.setState(Store.getState())
  }
  //store发生变化就修改state中数据，实现同步
  buldeChangeInput(){
      this.setState(Store.getState())
  }
  //添加数据
  addBtn(){
     const action = getAddDataAction(this.state.inputValue)
    Store.dispatch(action)
  }
  //删除
  dele(index){
    console.log(index)
    const action = getDeleDataAction(index)

   Store.dispatch(action)
  }

    render(){
      return(
        <TodoListUI
          changeInput={  this.changeInput }
          inputValue={this.state.inputValue}
          addBtn={this.addBtn}
          list={ this.state.list }
          dele={this.dele}/>
      )
    }

}

export default TodoList;
