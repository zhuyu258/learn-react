import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
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
    return (
        <Layout headerElem={<Header/>} assideElem={<Asside />}>
          <Route path="/student" exact component={StuList} />
          <Route path="/student/add" exact component={StuAdd} />
          <Route path="/course" exact component={Course} />
          <Route path="/course/add" exact component={CourseAdd} />
        </Layout>
    );
  }
}

export default Admin;
