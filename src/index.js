import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'; //全局引入antcss



//dom元素渲染的入口
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
