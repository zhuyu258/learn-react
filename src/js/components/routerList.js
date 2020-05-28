import React, { Component } from 'react';


class RouterList extends React.Component{
  goHome(){
    //通过history.push手动控制返回页面
    this.props.history.push("/Header")
  }
  render(){
     var html = "我是router-list頁面"
    return(
        <div>
           {/* 直接显示html元素，需要把html元素进行unicode转码*/}
           <p >{html}</p>
           <p>我是路由传来的参数{this.props.match.params.id}</p>
           {/* 通过dangerouslySetInnerHTML 显示html元素 可能被xss攻击*/}
           <p dangerouslySetInnerHTML = {{__html : html }}></p>
           <p onClick={this.goHome.bind(this)} > 返回首页 </p>
        </div>

    )
  }
}

export default RouterList;
