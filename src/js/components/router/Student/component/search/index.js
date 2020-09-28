import React, { Component } from 'react';
import { connect } from 'react-redux'

class Search extends Component {
  constructor(props){
    super(props)
    let state = {
      key: '',
      sex: '0'
    }
    let newState = Object.assign({},state,props.defineSearch)
    this.state = newState
  }



  search = (e) => {
    this.props.search && this.props.search(this.state)
  }

  render() {
    return (
      <div>
         关键字：
         <input type='text' value={this.state.key}
            onChange={(e)=>{this.setState({key:e.target.value})}}
         />
         性别：
         <label>
          <input type="radio" name="sex" value='0'  checked={this.state.sex===0}
            onChange={(e)=>{this.setState({sex:+e.target.value})}}
          />男
         </label>
         <label>
          <input type="radio" name="sex" value='1'  checked={this.state.sex===1}
            onChange={(e)=>{this.setState({sex:+e.target.value})}}
          />女
         </label>
         <button onClick={this.search}>查询</button>
      </div>
    );
  }
}

function mapStateToProps (store) {
  return {
    defineSearch: store.student.searchCondition
  }
}

export default connect(mapStateToProps,null)(Search);
