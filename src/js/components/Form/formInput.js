import React, { Component } from 'react';
import PropsType from 'prop-types'
import ctx from './formContext'

class FormInput extends Component {
  static defaultProps = {
    type: 'text'
  }
  static PropsType = {
    name: PropsType.isRequired, // 组件的属性名
    type: PropsType.isRequired  // 组件的类型
  }
  static contextType = ctx; // 接收上下文

  render() {
    return (
      <input
        type={this.props.type}
        // 使用上下文的数据
        value={this.context.formData[this.props.name] || ''}
        onChange={(e)=>{ // 通过上下文的事件修改上下文中的数据
          this.context.onChange && this.context.onChange(this.props.name,e.target.value)
        }}
      />
    );
  }
}

export default FormInput;
