import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component{
    render(){
        let task;
        if(!apocalypse){
            task = "learn react.js"
        }else {
            task = "run around and run away from apocalypse" 
        }
        return 
            <h1> Today I am going to do {task} ! </h1>
        
    }
}
ReactDOM.render(
    <TodaysPlan />,
    document.getElementById('app')
);





































































