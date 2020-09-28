import React, { Component } from 'react';

/*
  高阶组件
   以组件作为参数，返回一个组件
   不要在render中使用高阶组件，因为每次渲染都会生成一个高阶组件
   不要在高阶组件内更改传入的组件

*/
export default function loginWrap(Com){
  //在原有的组件之上进行扩展，但是不改变原组件
  return (
    class Hoc extends Component {
      render() {
        return (
          <>
            <pre>
              高阶组件
               以组件作为参数，返回一个组件
               不要在render中使用高阶组件，因为每次渲染都会生成一个高阶组件
               不要在高阶组件内更改传入的组件
            </pre>
            <div>{ this.props.isLogin ? <Com /> : null}</div>
          </>
        );
      }
    }
  )
}
