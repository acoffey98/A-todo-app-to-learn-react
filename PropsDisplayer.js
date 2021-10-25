import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);     

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
    <PropsDisplayer />,
    document.getElementById('app')
);

//Pass props to a component 
<MyComponent foo = "bar" />;
{/* <Example message="This is some top secret info." />   //Name is message 

//If you want to pass information that isnt a string - you can wrap that info in curly braces
//Pass in array

<Greeting myInfo = {["top", "secret", "info"]} /> */}

//Example:
<Greeting name="Alexandria" age={23} town="Branch" friends={["Miranda", "Kerri", "Brittany", "Mel"]} /> 




















