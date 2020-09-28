import React, { Component } from 'react';
import loginWrap from './高阶组件'
import Login from './login'

//高阶组件
const LoginWrap = loginWrap(Login)

export default class loginWrapPage extends Component{

      render() {
        return (
          <div>
            <p>高阶组件</p>
            <LoginWrap isLogin />
          </div>
        );
      }
}
