import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={
            (e)=>{
              this.setState({
                name: e.target.value
              })
            }
          }
         />
         <button onClick={
           ()=>{
             this.props.addBtn && this.props.addBtn({
               name: this.state.name,
               isFinished: false
             })
           }
         }>添加</button>
      </div>
    );
  }
}

export default AddTask;
