import React, { Component } from 'react';
import { Switch,Route,withRouter } from 'react-router-dom'

function A(props){
  return (
    <div>
      <p>通过props.location.state接收到B页面传递的数据：{props.location.state}</p>
      <p>通过props.location.search接收到B页面传递的数据：{props.location.search}</p>
      <p>{JSON.stringify(props)}</p>
      <button onClick={()=>{
        props.history.push('/B','b的状态')
      }}>跳转到B,通过push的state传递数据</button>
    </div>
  )
}

const Cwrap = withRouter(C)

function B(props){
  return (
    <div>
      <p>通过props.location.state接收到A页面传递的数据：{props.location.state}</p>
      <p>{JSON.stringify(props)}</p>
      <button onClick={()=>{
        props.history.push('/A?a=1&b=2','A的状态')
      }}>跳转到A，通过push的state传递数据</button>
      <Cwrap />
    </div>
  )
}
const Dwrap = withRouter(D)
function C(props){
  return (
    <div>
      <p>通过props.location.state接收到A页面传递的数据：{props.location.state}</p>
      <p>{JSON.stringify(props)}</p>
      <p>我是c组件</p>
      <Dwrap />
    </div>
  )
}

function D(props){
  return (
    <div>
      <p>通过props.location.state接收到A页面传递的数据：{props.location.state}</p>
      <p>{JSON.stringify(props)}</p>
      <p>我是D组件</p>
    </div>
  )
}

class RouteMsg extends Component {
  render() {
    return (
      <Switch>
        <Route component={A} path="/A" >AA</Route>
        <Route component={B} path="/B" />
      </Switch>
    );
  }
}

export default RouteMsg;
