import React, { Component } from 'react';
import { Provider } from './formContext'
import FormInput from './formInput'
import FormButton from './formButton'

class Form extends Component {

 state = {
   formData:{  //表单数据
   },
   onChange:(name,val)=>{ //修改表单中的某条数据
     this.setState({
       formData:{
         ...this.state.formData,
         [name]: val
       }
     })
   },
   submit:()=>{  //提交表单
     this.props.submit && this.props.submit(this.state.formData)
   }
 }

  render() {
    return (
      <div>
        // 向后代组件提供数据
        <Provider value={this.state} >
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

Form.Input = FormInput;
Form.Button = FormButton;

export default Form;
