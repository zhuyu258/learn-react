import React, { Component } from 'react';
import userInfo from "../userInfo"

class Login extends Component {

  constructor(props){
    super(props)
  }

  login = () => {
    const { match,history,state } = this.props
    console.log(this.props)
    userInfo.loginBtn()
    history.push(state)
  }

  render() {
    return (
      <>
        <p>请先登录</p>
        <div onClick={this.login}>登录</div>
      </>
    );
  }
}

export default Login;
