mport React, { Component } from 'react';
import ValidationCom from './验证props属性'
/*
  prop-types
   验证传递的属性
   1. 可以使用静态属性
   2. 在类或者函数上添加属性
*/
 class ValidationComPage extends Component {

   render() {
     return (
       <>
       <p>给组件传递的属性进行验证</p>
       <ValidationCom name="小灶" age={12} />
       </>
     );
   }
 }

 export default ValidationComPage;
