 import React, { Component } from 'react';
import PropTypes from "prop-types";  //手动引入
//import ReactMinxin from "react-mixin";
import minxin from "./minxin"
//设置父组件传递数据的默认的值的变量
const defaultProps = {
     age: 33
}


//子组件向父组件传递值，通过接受父组件传递的事件，
class Children extends React.Component{


  render(){
       //使用minxin中的方法
       minxin.tip()
        return(
            <div>
                {/* 接受父组件传来的事件作为自己的事件*/}
                <p>子页面输入：<input onChange={this.props.fff}/></p>
                <p>设置默认的类型：{this.props.name}</p>
                <p>设置默认的值：{this.props.age}</p>
                <p>通过this.props传递的数据:{this.props.sex}</p>
            </div>
        )
    }
}
//设置父组件传递数据的默认的值
Children.defaultProps = defaultProps;
//设置父组件传递数据的默认类型，因为15.5版本之后不再支持自身的验证所以要使用类型的验证需要通过npm install prop-types --save安装，然后需要手动引入
Children.propTypes = {
  name: PropTypes.string.isRequired  //string类型并且是必须的
}
//minxin挂载到当前组件中
//ReactMinxin(Children.prototype,minxin);

export default Children;
