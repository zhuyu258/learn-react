import React, { Component } from 'react';
class CheckBox extends Component {
  state = {
    loves: ['篮球','足球','羽毛球','排球'],
    choose: ['篮球','羽毛球']
  }
  render() {
    const checkBoxs = this.state.loves.map((item,key)=>(
      <label key={key}>
        <input
          type="checkbox"
          checked={this.state.choose.includes(item)}
          onChange={
            (e)=>{
              //选中
              if(e.target.checked){
                this.setState({
                  choose: [...this.state.choose,item]
                })
              }else{ //取消选中
                this.setState({
                  choose: this.state.choose.filter(l=>l!==item)
                })
              }
            }
          }
         />
         {item}
      </label>
    ))
    return (
      <div>
        {checkBoxs}
        <div>选中的：{this.state.choose}</div>
      </div>

    );
  }
}

export default CheckBox;
