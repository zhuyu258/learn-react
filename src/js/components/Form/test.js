import React, { Component } from 'react';
import FormInput from './formInput'
import FormButton from './formButton'
import Form from './index'

class TestForm extends Component {
  render() {
    return (
      <Form submit={(data)=>{
        console.log(data) //点击提交之后接收到的表单数据
      }}>
        <FormInput name="userName" type="text" />
        <FormButton>提交</FormButton>
      </Form>
    );
  }
}

export default TestForm;
