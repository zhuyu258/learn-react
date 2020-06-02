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
        <li><a href="/contextHook">contextHook</a></li>
        <li><a href="/callBackHook">CallbackHook</a></li>
        <li><a href="/memoHook">memoHook</a></li>
        <li><a href="/useRef">useRef</a></li>
      </ul>
    );
  }
}

export default Asside;
