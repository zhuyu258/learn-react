import React, { Component } from 'react';

import PropsIndex from "./props"

class Father extends React.Component{
  constructor(){
    super()
  }

  render(){

    return(
          <PropsIndex username={"我是父组件传参来的"} sex={"sex"}></PropsIndex>
    )
  }
}

export default Father;
