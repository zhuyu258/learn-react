import React, { Component } from 'react';
import ThreeLayout from './index'

export default function ThreeLayoutHome(props) {

    return (
      <>
        <p>圣杯布局</p>
        <ThreeLayout left={<div>left</div>} right={<div>right</div>}>
          <div>8888</div>
        </ThreeLayout>
      </>
    )
};
