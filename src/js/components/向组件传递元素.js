import React, { Component } from 'react';
class Com extends Component {
  /*
   向组件传递元素的方式
   1. 通过属性传递
   2. 直接在组件内部写元素，组件中通过children获取
  */
  render() {
    return (
      <div>
        {this.props.children}
        {this.props.content}
      </div>
    );
  }
}

export default Com;
