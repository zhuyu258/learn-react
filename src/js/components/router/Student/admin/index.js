import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import Layout from '../component/layout'
import Header from '../component/header'
import Asside from '../component/asside'
import StuList from '../stuList'
import StuAdd from '../stuAdd'
import Course from '../course'
import CourseAdd from '../courseAdd'

class Admin extends Component {
  render() {
    const Assides = withRouter(Asside)
    return (
        <Layout headerElem={<Header/>} assideElem={<Assides />}>
          <Route path="/stu/SAdmin/students" exact component={StuList} />
          <Route path="/stu/SAdmin/student/add" exact component={StuAdd} />
          <Route path="/stu/SAdmin/course" exact component={Course} />
          <Route path="/stu/SAdmin/course/add" exact component={CourseAdd} />
        </Layout>
    );
  }
}

export default Admin;
