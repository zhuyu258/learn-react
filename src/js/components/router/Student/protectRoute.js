import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../../../../redux'
import { Route, Redirect, withRouter} from "react-router-dom"
import userInfo from "./userInfo"
import Login from "./login"

const LoginWrap = withRouter(Login)
export default function  ProtectRoute({component:Component,render,children,...reset}){
  console.log('userInfo',userInfo)
  const Components = withRouter(Component)
  return <Route {...reset} render={(props)=>{
    return userInfo.isLogin ? (
      <Provider store={store}>
        <Components {...props} />
      </Provider>
    ) : (
      <LoginWrap state='/stu/SAdmin'  />
    )
  }} />
}
