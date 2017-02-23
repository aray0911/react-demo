import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

// import IndexList from '../components/IndexList'; //首页组件
// import Topic from '../components/Topic'; //主题详情
// import TopicCreate from '../components/TopicCreate'; //发布主题
// import MyMessages from '../components/MyMessages'; //我的消息
// import UserView from '../components/UserView'; //我的个人中心
import Login from '../components/login'; //登录
import IndexPage from '../components/index'; //主页

/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={IndexPage} />
            <Route path="login" component={Login} />
        </Route>
    </Router>
);

export default RouteConfig;