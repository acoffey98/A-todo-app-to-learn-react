import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component{
    render(){
        return <h1> Hi my name is {this.props.firstName} </h1>
    }
}

ReactDOM.render(
    <Greeting firstName="Alex" />,
    document.getElementById('app')
);
