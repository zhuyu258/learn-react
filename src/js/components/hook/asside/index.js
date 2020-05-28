import React, { Component } from 'react';
import './index.css'

class Asside extends Component {
  render() {
    return (
      <ul className="asside-wrap">
        <li><a href="/LearnHookSummary">小结</a></li>
        <li><a href="/learnUseState">useState</a></li>
        <li><a href="/learnUseEffect">useEffect</a></li>
        <li><a href="/myHooks">myHooks</a></li>
        <li><a href="/useReducer">myHooks</a></li>
      </ul>
    );
  }
}

export default Asside;
