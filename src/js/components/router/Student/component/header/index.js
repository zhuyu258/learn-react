import React, { Component } from 'react';
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-wrap">
        <span className="logo">学生管理系统</span>
        <span className="user">Admin <em>登录</em></span>
      </div>
    );
  }
}

export default Header;
