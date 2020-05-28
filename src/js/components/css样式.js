import React, { Component } from 'react';
import "../../css/css样式.css"

class CssIndex extends React.Component{
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
       cssFlage: !this.state.cssFlage
     })
  }


  render(){
    //通过定义的形式使用css样式，必须使用驼峰，是行内样式  缺点：不能使用伪类和动画
   const styles = {
      p : {
        color: "red",
        height: (this.state.cssFlage ? "50px" : "20px")  //三部计算，注意是()进行包裹
      }
   }

    return(
        <div>
            {/*外部引入的样式使用className,直接写行内样式使用{}包裹*/}
           <p className='p' style={styles.p} onClick = { this.changeStyle.bind(this)} >{this.state.name}</p>
        </div>

    )
  }
}

export default CssIndex;
