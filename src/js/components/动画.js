import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import "./动画.css";


class Anim extends React.Component{
  constructor(){
      super()
      this.state={
          showBox:false
      }
  }
  componentDidMount(){
      this.boxDOM = ReactDOM.findDOMNode(this.refs.box);
      console.log(this.boxDOM)

  }
  toggleBox=()=>{
      this.setState({
          showBox:!this.state.showBox
      })
  };
  render() {
      return (
          <div>
              <button onClick={this.toggleBox}>切换</button>
              <CSSTransition in={this.state.showBox} classNames="test" timeout={300}
                  onEnter={()=>{
                      this.boxDOM.style.display = "block";
                  }}
                 onExited={()=>{
                     this.boxDOM.style.display = "none";
                 }}
              >
                  <div className="box" ref="box">
                      <h1>测试动画效果滴。</h1>
                      <div className="color-box">哈哈哈</div>
                  </div>
              </CSSTransition>
          </div>)
  }
  // animBtn(){
  //   this.state.arr.push(this.refs.inputDom.value)
  //   this.setState({
  //       arr: this.state.arr
  //   })
  // }
  // dele(index){
  // }
  // render(){
  //   let items = this.state.arr.map((val,index)=>{
  //         return <li key={index}>{val} <button onClick={this.dele.bind(this,index)}>删除动画</button></li>
  //   },this)
  //   return(
  //     <div>
  //        <h4>react动画的实现</h4>
  //        <input type="text" ref="inputDom"/>
  //        <button onClick={this.animBtn.bind(this)}>点击添加列表</button>
  //        <ul>
  //           <ReactCSSTransitionGroup
  //              transitionName="animteList"
  //              transitionEnterTimeout={500}
  //              transitionLeaveTimeout={500}>
  //              { items }
  //          </ReactCSSTransitionGroup>
  //        </ul>
  //     </div>
  //   )
  // }
}

export default Anim;
