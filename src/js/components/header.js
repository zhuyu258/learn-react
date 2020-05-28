import React from "react";
import {Link} from "react-router-dom";


class ComponentHeader extends React.Component{
  render(){
    return(
      <header>
         <h1>这里是头部</h1>
         <h1><Link to={'/RouterList'}>跳转页面</Link></h1>
      </header>
    )
  }
}

export default ComponentHeader;
