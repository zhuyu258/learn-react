import React, { Component } from 'react';
import './index.css'

class Asside extends Component {
  render() {
    return (
      <ul className="asside-wrap">
        <li><a href="/LearnHook/LearnHookSummary">小结</a></li>
        <li><a href="/LearnHook/learnUseState">useState</a></li>
        <li><a href="/LearnHook/learnUseEffect">useEffect</a></li>
        <li><a href="/LearnHook/myHooks">myHooks</a></li>
        <li><a href="/LearnHook/useReducer">myHooks</a></li>
        <li><a href="/LearnHook/contextHook">contextHook</a></li>
        <li><a href="/LearnHook/callBackHook">CallbackHook</a></li>
        <li><a href="/LearnHook/memoHook">memoHook</a></li>
        <li><a href="/LearnHook/useRef">useRef</a></li>
        <li><a href="/LearnHook/useLayoutEffect">useLayoutEffect</a></li>
        <li><a href="/LearnHook/useImperativeHandle">useImperativeHandle</a></li>
      </ul>
    );
  }
}

export default Asside;
