import React, { Component } from 'react';
import './index.css'

class Asside extends Component {
  constructor(props){
    super(props)
  }
  go =(page)=>{
    console.log(this.props)
    this.props.history.push(page)
  }
  render() {
    return (
      <ul className="asside-wrap">
        <li onClick={()=>{this.go('/stu/SAdmin/students')}}>学生列表</li>
        <li onClick={()=>{this.go('/stu/SAdmin/student/add')}}>添加学生</li>
        <li onClick={()=>{this.go('/stu/SAdmin/course')}}>课程列表</li>
        <li onClick={()=>{this.go('/stu/SAdmin/course/add')}}>添加课程</li>
      </ul>
    );
  }
}

export default Asside;
