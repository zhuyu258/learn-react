import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom'

let toLocation, fromLocation, action, unBlock, unListen;

// 创建一个能够获得router上下文的组件，用于使用route的api
class RouteGuardHelper extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // 监听路由的变化
    unListen = this.props.history.listen((location,action)=>{
      if(this.props.listenHandle){
        this.props.listenHandle(this.props.location,location,action,unListen)
      }
    })
    // 阻塞路由的变化
    unBlock = this.props.history.block((location,action)=>{
      toLocation = this.props.location // 获取当前页面路由的信息
      fromLocation = location // 获取跳转之后的路由信息
      action = action // 跳转方式
      return ""
    })
  }
  render(){
    return null
  }
}


// 因为Router放在了RouteGuard中，所以RouteGuard中无法获取路由的上下文
// 只有Router的子组件才能获取路由的上下文，因为通过router向子组件注入了上下文
class RouteGuard extends Component{

  constructor(props){
    super(props)
  }

  componentwillunmount(){
    unBlock && unBlock()
    unListen && unListen()
  }

  // 阻塞路由的跳转
  getUserConfirmation = (msg,commit) => {
    if(this.props.getUserConfirmation){
      this.props.getUserConfirmation(toLocation,fromLocation,action,msg,commit,unBlock)
    }
  }

  render(){
    return (
      <Router getUserConfirmation={this.getUserConfirmation}>
        <RouteGuardHelper listenHandle={this.props.listenHandle} />
        {this.props.children}
      </Router>
    )
  }
}

export default withRouter(RouteGuard)
