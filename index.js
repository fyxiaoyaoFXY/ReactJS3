import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';
import 'antd-mobile/dist/antd-mobile.css';

// 容器组件 / UI组件（展示组件）
// 智能组件 / 木偶组件

// 容器组件（container/pages）：逻辑，功能
// UI组件（components）：写成函数组件，展示，返回React元素

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)