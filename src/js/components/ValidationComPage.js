import React, { Component } from 'react';
import ValidationCom from './验证props属性'

 class ValidationComPage extends Component {

   render() {
     return (
       <>
       <ValidationCom  name='小明' age={88}/>
       </>

     );
   }
 }

 export default ValidationComPage;
