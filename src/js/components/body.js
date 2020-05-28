import React, { Component } from 'react';


class Body extends React.Component{
  render(){
     var html = "aaaaa&nbsp;bbbbb"

    return(
        <div>
           {/* 直接显示html元素，需要把html元素进行unicode转码*/}
           <p >{html}</p>
           {/* 通过dangerouslySetInnerHTML 显示html元素 可能被xss攻击*/}
           <p dangerouslySetInnerHTML = {{__html : html }}></p>
        </div>

    )
  }
}

export default Body;
