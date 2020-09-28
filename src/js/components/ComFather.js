import React, { Component } from 'react';
import Com from './向组件传递元素';
class ComFather extends Component {
  /*
   向组件传递元素的方式
   1. 通过属性传递
   2. 直接在组件内部写元素，组件中通过children获取
  */
  render() {
    return (
      <Com content={<h2>我是通过属性传递的元素</h2>}>
         <h1>我是组件传递来的元素，通过children接受</h1>
      </Com>
    );
  }
}

export default ComFather;
