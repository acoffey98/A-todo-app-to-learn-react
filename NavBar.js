import React from 'react';
import ReactDOM from 'react-dom';
import alex from './alex.png';


class NavBar extends React.Component{
    render(){

        const firstName = "Alexandria ";

        return (
        <div> 
            <h1> This is my NavBar</h1>
            <ul> 
                <li> Home page</li>
                <li> Info </li>
                <li> My Name is: {firstName} </li>
                <img src="alex.png" />
            </ul>
        </div>
        );
    }
}
export default NavBar;