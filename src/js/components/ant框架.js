
import React, { Component } from 'react';
import { Button } from 'antd';  //按需加载

class AntIndex extends React.Component{
  constructor(){
    super()
    //初始化数据
    this.state = {
      name : "cssjs中直接写样式",
      cssFlage : true
    }
  }

  changeStyle(){
     this.setState({

     })
  }


  render(){


    return(
        <div>
            {/*外部引入的样式使用className*/}
            <Button  onClick = { this.changeStyle.bind(this)}>Hello world!</Button>
 <Button type="primary">Primary</Button>
        </div>

    )
  }
}

export default AntIndex;
