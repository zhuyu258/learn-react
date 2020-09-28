import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'
import SLogin from './login'
import SAdmin from './admin'
import Course from './course'
import StuAdd from './stuAdd'
import StuList from './stuList'
import ProtectRoute from './protectRoute'

class StuHome extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
        <h4>学生管理系统</h4>
        <p onClick={()=>{this.props.history.push("/stu/SAdmin")}}>进入</p>
        <Switch>
          <Route component={SLogin} exact path="/login"></Route>
          <ProtectRoute component={SAdmin} path="/stu/SAdmin"></ProtectRoute>
          <ProtectRoute component={Course} path="/stu/SAdmin/course"></ProtectRoute>
          <ProtectRoute component={StuList} path="/stu/SAdmin/students"></ProtectRoute>
          <ProtectRoute component={StuAdd} path="/stu/SAdmin/student/add"></ProtectRoute>
        </Switch>
      </>
    );
  }
}

export default StuHome;
