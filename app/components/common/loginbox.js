import React from 'react';
import reactDom from 'react-dom';

import { Spin, Form, Icon, Input, Button,Checkbox } from 'antd';
import Tool from '../tool';



class LoginBox extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            date: new Date(),
            logging :false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

     handleSubmit(e) {
        e.preventDefault();
        // var xhr = new XMLHttpRequest();
        //     xhr.open("POST", "/login", true);
        //     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //     xhr.onload = function () {
        //         // do something to response
        //         console.log(this.responseText);
        //     };
        //     xhr.send("lorem=ipsum&name=binny");
        
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);            
            this.setState({
                logging:true
            });            
            Tool.post("/login",values,(res) => {
                if (res.success) {
                    alert('登录成功');
                    console.log(this.responseText);
                    // res.accesstoken = accesstoken;
                    // this.props.signinSuccess(res);
                    // this.context.router.push({
                    //     pathname: '/user/' + res.loginname
                    // });
                } else {
                    alert('登录失败');
                    this.setState({ logging :false });
                }

            }, () => {
                alert('登录失败！');
                this.setState({ logging :false });
            })
            // return true;
        }
        else{
            console.log(err);
            // return false;
        }
        // return false;
        });

    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        return (
            <Spin tip="登陆中..." size="large" spinning={ this.state.logging}>
                <Form  className="login-form" method="post">
                    <FormItem>
                        {getFieldDecorator('userName',{
                            rules:[{required:true,message:"请输入用户名！"}],
                        })(
                            <Input addonBefore={<Icon type="user" placeholder="用户名"/>}/>
                        )
                        }
                    </FormItem>
                     <FormItem>
                        {getFieldDecorator('password',{
                            rules:[{required:true,message:"请输入密码！"}],
                        })(
                            <Input addonBefore={<Icon type="lock" placeholder="密码"/>}/>
                        )
                        }
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forgot">忘记密码</a>
                        <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                            登录
                        </Button>
                        <a>注册!</a>
                    </FormItem>                    
                </Form>
            </Spin>
            )
    }
}

export default Form.create()(LoginBox);