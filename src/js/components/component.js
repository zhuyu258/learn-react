import React, { PureComponent } from 'react';


export default class CA extends  PureComponent{
  constructor() {

  }

  render(){
    return(
      <>
        <pre>
          1. Component存在的问题？
              父组件重新渲染，子组件就会跟着渲染

              原因：shouldComponentUpdate()生命周期默认返回true

          2. 解决Component存在的问题
              - shouldComponentUpdate()生命周期中根据数据的变化判断是否要更新render

              - 使用PureComponent代替Component

          3. PureComponent原理
              重写了shouldComponentUpdate()，对组件的state和prope进行新旧对比，
              来判断是否更新组件

        </pre>
      </>
    )
  }
}
