import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';    //importing Welcome component 

class Home extends React.Component(
    render()
    {
        return <Welcome name="Alexandria" />;
    }
);

ReactDOM.render(
    <Home />,
    document.getElementById('app')
);
