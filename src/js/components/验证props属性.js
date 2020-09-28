import React, { Component } from 'react';
import TypeProps from 'prop-types'
/*
  prop-types
   验证传递的属性
   1. 可以使用静态属性
   2. 在类或者函数上添加属性
*/
 class ValidationCom extends Component {
   static propTypes = {
      name: TypeProps.string.isRequired,
      age: TypeProps.number.isRequired
   }

   render() {
     return (
       <>
       <prev>
        prop-types
        验证传递的属性
        1. 可以使用静态属性
        2. 在类或者函数上添加属性
       </prev>
        <div>name:{this.props.name}age:{this.props.age}</div>
       </>

     );
   }
 }

 ValidationCom.propTypes = {
    name: TypeProps.string.isRequired,
    age: TypeProps.number.isRequired
 }

 export default ValidationCom;
