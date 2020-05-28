import React, { Component } from 'react';
/*
  给传递来得属性设置默认值
  1. 类中使用静态属性defaultProps
  2. 类和函数可以在函数上添加一个defaultProps属性来设置

  1和2同时使用2会覆盖1

  设置的默认值会在创建组件虚拟dom之前就会和props进行合并
*/
class DefaultVal extends Component {
  //1. 使用静态属性的形式设置默认值
  static defaultProps = {
    name: '小明',
    age: 20
  }
  render() {
    return (
        <div>name:{this.props.name};age:{this.props.age}</div>
    );
  }
}

//2. 给类添加一个属性
DefaultVal.defaultProps = {
  name: '小孩',
  age: 20
}


export default DefaultVal;
