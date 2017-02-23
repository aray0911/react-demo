import React from 'react'
import { Layout, Menu} from 'antd';
const Header = Layout.Header;

class NavHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme={this.props.theme}
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={this.props.style}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        );
    }
}
export default NavHeader;