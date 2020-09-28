import React, { Component } from 'react';
import logo from './logo.svg';
import './redux/test';
import './App.css';
import Header from './js/components/header';
import BodyIndex from './js/components/body';
import StateIndex from './js/components/state';
import Father from './js/components/father';
import Css from './js/components/css样式';
import RouterList from './js/components/routerList';
import MsgProp from './js/components/父子组件之间的通信';
import Anim from './js/components/动画';
import Erro from './js/components/erro';
import LearnSetState from './js/components/setState';
import ComFather from './js/components/ComFather';
import ThreeLayoutHome from './js/components/threeLayout/home'
import CheckBox from './js/components/checkBox'
import DefaultVal from './js/components/默认值'
import ValidationComPage from './js/components/ValidationComPage'
import loginWrap from './js/components/高阶组件Page'
import Swiper from './js/components/swiper/home'
import RefCom from './js/components/ref'
import NewContext from './js/components/context'
import Form from './js/components/Form/test'
import Task from './js/components/task/TaskContainer'
import StuHome from './js/components/router/Student/home'
import RouteMsg from './js/components/router/routeMsg'
import LearnHook from './js/components/hook/index'
import VueRoter from './js/components/vue-router/home'
import VueBeforeEnterRoter from './js/components/vue-beforeEnter/home'
import RouterLoginHome from './js/components/vue-router-login/home'
import WatchRoute from './js/components/watchRoute/home'
import ReduxHome from './js/components/redux/index'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
// import Ant from './js/components/ant框架';

class Menu extends Component {
  constructor(props){
    super(props)
  }

  go = (page,e) => {
    e.preventDefault()
    const { history } = this.props
    history.push(page)
  }

  render(){
    return (
      <>
        <ul >
          <li><a href="/useHtml" onClick={(e)=>{this.go('/useHtml',e)}}>react中使用html</a></li>
          <li><a href="/state" onClick={(e)=>{this.go('/state',e)}}>state</a></li>
          <li><a href="/Css" onClick={(e)=>{this.go('/Css',e)}}>react中使用Css</a></li>
          <li><a href="/props" onClick={(e)=>{this.go('/props',e)}}>父子组件传参</a></li>
          <li><a href="/MsgProp" onClick={(e)=>{this.go('/MsgProp',e)}}>父子组件之间的通信</a></li>
          <li><a href="/props" onClick={(e)=>{this.go('/props',e)}}>父子组件传参</a></li>
          <li><a href="/Anim" onClick={(e)=>{this.go('/Anim',e)}}>ract动画</a></li>
          <li><a href="/state" onClick={(e)=>{this.go('/state',e)}}>setState</a></li>
          <li><a href="/Com" onClick={(e)=>{this.go('/Com',e)}}>向组件传递元素</a></li>
          <li><a href="/ThreeLayoutHome" onClick={(e)=>{this.go('/ThreeLayoutHome',e)}}>圣杯布局</a></li>
          <li><a href="/CheckBox" onClick={(e)=>{this.go('/CheckBox',e)}}>多选框</a></li>
          <li><a href="/DefaultVal" onClick={(e)=>{this.go('/DefaultVal',e)}}>给组件传递的属性设置默认值</a></li>
          <li><a href="/ValidationCom" onClick={(e)=>{this.go('/ValidationCom',e)}}>给组件传递的属性进行验证</a></li>
          <li><a href="/loginWrap" onClick={(e)=>{this.go('/loginWrap',e)}}>高阶组件</a></li>
          <li><a href="/Swiper" onClick={(e)=>{this.go('/Swiper',e)}}>轮播图</a></li>
          <li><a href="/RefCom" onClick={(e)=>{this.go('/RefCom',e)}}>Ref</a></li>
          <li><a href="/NewContext" onClick={(e)=>{this.go('/NewContext',e)}}>上下文</a></li>
          <li><a href="/Form" onClick={(e)=>{this.go('/Form',e)}}>表单组件的实现</a></li>
          <li><a href="/Task" onClick={(e)=>{this.go('/Task',e)}}>纯组件</a></li>
          <li><a href="/stu" onClick={(e)=>{this.go('/stu',e)}}>学生管理系统</a></li>
          <li><a href="/RouteMsg" onClick={(e)=>{this.go('/RouteMsg',e)}}>路由信息</a></li>
          <li><a href="/LearnHook" onClick={(e)=>{this.go('/LearnHook',e)}}>进入学习hooks</a></li>
          <li><a href="/VueRoter" onClick={(e)=>{this.go('/VueRoter',e)}}>封装react-roter为vue-router</a></li>
          <li><a href="/VueBeforeEnterRoter" onClick={(e)=>{this.go('/VueBeforeEnterRoter',e)}}>封装react-roter为全局前置路由守卫</a></li>
          <li><a href="/RouterLoginHome" onClick={(e)=>{this.go('/RouterLoginHome',e)}}>react-router之登录权限,没有登录则跳到登录页面</a></li>
          <li><a href="/WatchRoute" onClick={(e)=>{this.go('/WatchRoute',e)}}>监听路由的变化</a></li>
          <li><a href="/ReduxHome" onClick={(e)=>{this.go('/ReduxHome',e)}}>redux</a></li>
        </ul>
      </>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Route component={Menu} path="/"></Route>
        <Switch>
          <Route exact component={BodyIndex} path="/useHtml"></Route>
          <Route exact component={StateIndex} path="/state"></Route>
          <Route exact component={Css} path="/Css"></Route>
          <Route exact component={Father} path="/props"></Route>
          <Route exact component={MsgProp} path="/MsgProp"></Route>
          <Route exact component={Anim} path="/Anim"></Route>
          <Route exact component={LearnSetState} path="/LearnSetState"></Route>
          <Route exact component={ComFather} path="/Com"></Route>
          <Route exact component={ThreeLayoutHome} path="/ThreeLayoutHome"></Route>
          <Route exact component={CheckBox} path="/CheckBox"></Route>
          <Route exact component={DefaultVal} path="/DefaultVal"></Route>
          <Route exact component={ValidationComPage} path="/ValidationCom"></Route>
          <Route exact component={loginWrap} path="/loginWrap"></Route>
          <Route exact component={Swiper} path="/Swiper"></Route>
          <Route exact component={RefCom} path="/RefCom"></Route>
          <Route exact component={NewContext} path="/NewContext"></Route>
          <Route exact component={Form} path="/Form"></Route>
          <Route exact component={Task} path="/Task"></Route>
          <Route  component={StuHome} path="/stu"></Route>
          <Route  component={RouteMsg} path="/RouteMsg"></Route>
          <Route  component={LearnHook} path="/LearnHook"></Route>
          <Route  component={VueRoter} path="/VueRoter"></Route>
          <Route  component={VueBeforeEnterRoter} path="/VueBeforeEnterRoter"></Route>
          <Route  component={RouterLoginHome} path="/RouterLoginHome"></Route>
          <Route  component={WatchRoute} path="/WatchRoute"></Route>
          <Route  component={ReduxHome} path="/ReduxHome"></Route>

          {/*路由重定向,必须和switch 组合使用*/}
          <Redirect from="/*" to="/erro"></Redirect>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
