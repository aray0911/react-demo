import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import route from './config/route'; //路由配置
import store from './config/store';


import 'normalize.css'; //重置浏览器默认样式
// import 'flex.css'; //flex布局
import 'style/style.css'; //加载公共样式
// import './Iconfont/iconfont.css'; //字体图标
// import 'github-markdown-css'; //markdown css

store.subscribe(function () {
    // console.log(store.getState());
});


render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);