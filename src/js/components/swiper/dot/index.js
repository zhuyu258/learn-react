import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

class Dot extends Component {

  static propTypes = {
    len: PropTypes.number.isRequired,
    cur: PropTypes.number.isRequired,
    move: PropTypes.func.isRequired,
  }

  dotMove(index){
    console.log(index)
    this.props.move && this.props.move(index)
  }

  render() {
    let {cur,len} = this.props

    let arr = new Array(len)
    arr.fill(1)
    let arrSpan = arr.map((item,index)=>{
      return <span key={index} className={index === cur ? 'active' : ''}
        onClick={()=>{this.dotMove(index)}}
      ></span>
    })

    return (
      <div className="dot">
        {arrSpan}
      </div>
    );
  }
}

export default Dot;
