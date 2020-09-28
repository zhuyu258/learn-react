import React from "react"
import {
  Switch,
  Route,
  Router,
  Link,
  withRouter
} from 'react-router-dom'
import ProductRouter from "./product-router"
import Home from "./page/home"
import Login from "./page/login"
import Person from "./page/person"

export default function RouterLoginHome(props){
  return <>
    <Link to={{ pathname: '/RouterLoginHome/Home'}}>首页</Link>
    <Link to={{ pathname: '/RouterLoginHome/Person'}}>个人中心</Link>
    <Link to={{ pathname: '/RouterLoginHome/Login'}}>登录页</Link>
    <Switch>
      <Route exact component={Home} path="/RouterLoginHome/Home"></Route>
      <Route exact component={Login} path="/RouterLoginHome/Login"></Route>
      <ProductRouter exact component={Person} path="/RouterLoginHome/Person"></ProductRouter>
    </Switch>
  </>
}
