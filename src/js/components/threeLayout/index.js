import React, { Component } from 'react';
import propTypes from 'prop-types'
import './index.css'

//默认值
ThreeLayout.defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800
}
//验证
ThreeLayout.propTypes = {
  leftWidth: propTypes.number,
  rightWidth: propTypes.number,
  minWidth: propTypes.number,
}

export default function ThreeLayout(props) {

    const datas = props;
    console.log(datas.leftWidth)
    return (
      <div className="three-layout" style={{
        minWidth: datas.minWidth
      }}>
          <div className="main" >
            {props.children}
          </div>
          <div className="left" style={{
            width: datas.leftWidth
          }}>
            {props.left}
          </div>
          <div className="right" style={{
            width: datas.rightWidth
          }}>
            {props.right}
          </div>
      </div>
    )
};
