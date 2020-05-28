import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css"

class Arrow  extends Component {
  static propTypes = {
    moveTo: PropTypes.func
  }
  render() {
    let { moveTo } = this.props
    return (
      <div className="arrow">
          <span className="left"
            onClick={()=>{
              moveTo && moveTo('left')
            }}
          >&lt;</span>
          <span className="right"
            onClick={()=>{
              moveTo && moveTo('right')
            }}
          >&gt;</span>
      </div>
    );
  }
}

export default Arrow ;
