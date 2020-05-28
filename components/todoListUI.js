import React, { Component } from 'react';
import { Input,Button,List } from 'antd';

const TodoListUI =(props)=>{
  return(
    <div>
        <div>
           <Input onChange={ props.changeInput } value={  props.inputValue } placeholder="haha" style={{width:'300px',margonRight:'20px'}} />
           <Button type="primary" onClick={props.addBtn}>添加</Button>
           <List
             bordered
             dataSource={props.list}
             renderItem={(item,index) => (<List.Item onClick={()=>{ props.dele(index)}}>{item}{index}</List.Item>)}
             style={{width:'300px',margin:"0 auto"}}
           />
        </div>
    </div>
  )
}

// class TodoListUI extends Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return(
//       <div>
//           <div>
//              <Input onChange={ this.props.changeInput } value={  this.props.inputValue } placeholder="haha" style={{width:'300px',margonRight:'20px'}} />
//              <Button type="primary" onClick={this.props.addBtn}>添加</Button>
//              <List
//                bordered
//                dataSource={this.props.list}
//                renderItem={(item,indexs) => (<List.Item onClick={(indexs)=>{ this.props.dele(indexs)}}>{item}</List.Item>)}
//                style={{width:'300px',margin:"0 auto"}}
//              />
//           </div>
//       </div>
//     )
//   }
//
// }

export default TodoListUI;
