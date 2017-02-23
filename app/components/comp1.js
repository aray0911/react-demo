import React from 'react';
import reactDom from 'react-dom';

import { DatePicker , Alert } from 'antd'

class Comp1 extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {date: new Date()};
    }

    handleChange(date){
        if(date !== null){            
            this.setState({ date });
        }
        else
        {
            this.setState({ date : "" });
        }
    }

    render() {
        return (
            <div>
                <h1 style={{color:"steelblue"}}>hello {this.props.name} antd Component</h1>
                <DatePicker onChange={value=>this.handleChange(value)}/>
                <Alert message={this.state.date.toString()} type="info"/>
            </div>
            )
    }
}

export default Comp1;
