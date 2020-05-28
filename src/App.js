import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './js/components/header';
import BodyIndex from './js/components/body';
import StateIndex from './js/components/state';
import PropsIndex from './js/components/props';
import Css from './js/components/css样式';
import RouterList from './js/components/routerList';
import MsgProp from './js/components/父子组件之间的通信';
import Anim from './js/components/动画';
import Erro from './js/components/erro';
import TodoList from './js/components/todoList';
import LearnSetState from './js/components/setState';
import Com from './js/components/向组件传递元素';
import ThreeLayout from './js/components/threeLayout'
import CheckBox from './js/components/checkBox'
import DefaultVal from './js/components/默认值'
import ValidationCom from './js/components/验证props属性'
import loginWrap from './js/components/高阶组件'
import Login from './js/components/login'
import Swiper from './js/components/swiper'
import RefCom from './js/components/ref'
import NewContext from './js/components/context'
import Form from './js/components/Form/test'
import Task from './js/components/task/TaskContainer'
import SLogin from './js/components/router/Student/login'
import SAdmin from './js/components/router/Student/admin'
import RouteMsg from './js/components/router/routeMsg'

import LearnHook from './js/components/hook/index'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
// import Ant from './js/components/ant框架';

//高阶组件
const LoginWrap = loginWrap(Login)

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header></Header>
        <BodyIndex></BodyIndex>
        <StateIndex></StateIndex>
        <Css />
        <PropsIndex username={"我是父组件传参来的"} sex={"sex"}></PropsIndex>
        <Switch>
          <Route component={PropsIndex} path="/"></Route>
          <Route component={Erro} path="/erro"></Route>
              {/*路由传参*/}
          <Route exact component={RouterList} path="/RouterList/:id"></Route>
          {/*路由重定向,必须和switch 组合使用*/}
          <Redirect from="/*" to="/erro"></Redirect>
         
        </Switch>
        <MsgProp></MsgProp>
        <Anim></Anim>
        <TodoList></TodoList>
        <p>setState</p>
        <LearnSetState />
        <p>向组件传递元素</p>
        <Com content={<h2>我是通过属性传递的元素</h2>}>
           <h1>我是组件传递来的元素，通过children接受</h1>
        </Com>
        <p>圣杯布局</p>
        <ThreeLayout left={<div>left</div>} right={<div>right</div>}>
          <div>8888</div>
        </ThreeLayout>
        <p>多选框</p>
        <CheckBox />
        <p>给组件传递的属性设置默认值</p>
        <DefaultVal />
        <p>给组件传递的属性进行验证</p>
        <ValidationCom name="小灶" age={12} />
        <p>高阶组件</p>
        <LoginWrap isLogin />
        <p>轮播图</p>
        <Swiper
          imgSrcArr={['http://img4.imgtn.bdimg.com/it/u=2350302849,3323337377&fm=26&gp=0.jpg',
                      'http://img0.imgtn.bdimg.com/it/u=452966427,3842240659&fm=26&gp=0.jpg',
                      'http://img3.imgtn.bdimg.com/it/u=309842420,1506146809&fm=26&gp=0.jpg',
                      'http://img0.imgtn.bdimg.com/it/u=112693113,3147345699&fm=26&gp=0.jpg',
                      'http://img4.imgtn.bdimg.com/it/u=2350302849,3323337377&fm=26&gp=0.jpg'
                    ]}
          imgWidth={600}
          imgHeight={400}
          isAuto
        />
        <p>ref</p>
        <RefCom />
        <p>上下文</p>
        <NewContext />
        <p>表单组件的实现</p>
        <Form />
        <p>纯组件</p>
        <Task />
        <h4>学生管理系统</h4>
        <Switch>
          <Route component={SLogin} exact path="/login"></Route>
          <Route component={SAdmin} path="/"></Route>
        </Switch>
        <h4 style={{marginTop:'100px'}}>路由信息</h4>
        <Route component={RouteMsg} path="/"></Route>
        <br />
        <br />
        <h4>学习hooks</h4>
        <Link to="/LearnHook" style={{color:'black'}}>
          进入学习hooks
        </Link>
        <Switch>
          <Route component={LearnHook} path="/"></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
