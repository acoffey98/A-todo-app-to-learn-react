import React from 'react';
import ReactDOM from 'react-dom';

//This is a javascript file - <h1> Hellow world </h1> is JSX 

const h1 = <h1>Hello world</h1>;

//JSX is a syntax extension for JavaScript. 
//JSX is not valid javascript. Web browsers cant read it. So if a javascript file contains JSX code 
//it will need to be compile and translate it into javascript 

//EX of JSX element <h1>Hello world</h1>
//<p> Hello World </p> 

//JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. 
//JSX elements can be saved in a variable, passed to a function, stored in an object or array..etc

const navBar = <nav> I am a nav bar </nav>;

//Here is an example of several JSX elements being stored in an object 
const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
  };


//Create a JSX <article></article> element. Save it in a variable named myArticle. 
const myArticle = <article> </article>; 

//To save a JSX <button></button> element into a variable called myButton, you’d do something like this:
const myButton = <button></button>;

//Attributes in JSX 
//Examples:  <a href='http://www.example.com'>Welcome to the Web</a>;
 
//const title = <h1 id='title'>Introduction to React.js: Part I</h1>;

//Or it can have many attributes:
//const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px' />;


//Declare a constant named p1. - Set p1 equal to a JSX <p></p> element. Write the word foo in between the <p></p> tags.

const p1 = <p>foo</p>
const p2 = <p> bar </p>;

//Give the first <p></p> an id attribute of 'large'.
///Give the second <p></p> an id attribute of 'small'.

const p1 = <p id= 'large' > foo</p>
const p2 = <p id= 'small'> bar </p>;

//Nested JSX 
<a href="https://www.example.com"> <h1> Click ME!! </h1></a>;

//Make this more readable 
<a href="https://www.facebook.com">
    <h1>
        Click me!
    </h1>
</a>

//If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. 
//This looks strange at first, but you get used to it:

(
    <a href="https://www.facebook.com">
        <h1>
            Click Me!!!1
        </h1>
    </a>
)

//Nested JSX expressions can be saved to variables, passed to functions etc.. 
const theExample = (
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
  );


  //Decare a new variable named myDiv. Set myDiv equal to a JSX <div> </div> element 
  //wrap the div in <div></div> parenthesis 

  const myDiv = (
      <div>
          <h1>
              Hello World
          </h1>
      </div>
  )

//There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.
//This code will work
const paragraphs = (
    <div id="i-am-the-outermost-element">
      <p>I am a paragraph.</p>
      <p>I, too, am a paragraph.</p>
    </div>
  );

//This wont:
//const paragraphs = (
//     <p>I am a paragraph.</p> 
//     <p>I, too, am a paragraph.</p>
//   );
//The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

//Your friends blog is down. hes asked you to fix it
//A JSX expression must be have a parent element.
const blog = (

    <div>
        <img src="pics/189327861.jpg"/>
        <h1> 
            Welcome to Dan's Blog!
        </h1>
        <article>
            Wow I had the tasitest sandich today. I <strong> literally </strong> almost freaked out.
        </article>
    </div>
);

//Render JSX now - make it appear on screen
ReactDOM.render(<h1>Render me! </h1>, 
document.getElementById('app'));

//add <span id="container"></span> 
//I now want <h1> Render Me! </h1> to be appended to <span> 
//now i change getElementById from 'app' to 'container'

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

//Passing a variable to ReactDOM.render()
//toDoList variable 
//pass toDoList as the first argument to ReactDOM.render():
const toDoList = (
    <ol>
      <li>Learn React</li>
      <li>Become a Developer</li>
    </ol>
  );
   
  ReactDOM.render(
    toDoList, 
    document.getElementById('app')
  );


//EXERCISE: On line 5, declare a variable named myList. Set myList equal to a JSX <ul></ul> element. Wrap your <ul></ul> in parentheses.
//Add several <li></li> elements in between your <ul></ul> tags. Put some text in each <li></li>. Use line breaks and indentation similar to the above example.


const myList = (
    <ul> 
        <li> Call Mom! </li>
        <li> Ask mark about something </li>
        <li> Call crown about update on cupboards </li>
    </ul>
);

ReactDOM.render(
    myList,
    document.getElementById('app')
);

//The virtual DOM:
//ONLY Updates DOM elements that have changed
//If you render the exact same thing twice in a row, the second render will do nothing

//class vs className
//In JSX, you can’t use the word class! You have to use className instead
//advanced jsx and common erros to avoid

<h1 className="big"> Hey </h1>
//class is a reserved word in JavaScript

//When jsx is rendered, JSX className attributes are automatically rendered as class attributes

//Declare a variable named myDiv. Set myDiv equal to <div> elements.

const myDiv = (
    <div className="big"> I AM A BIG DIV</div>
)

//underneath div - call ReactDOM
ReactDOM.render(
    myDiv,
    document.getElementById('app')
);

//Self closing tags
//Another JSX gotcha involves selfclosing tags
//Most HTML elements use two tags: An opening tag (<div>) and a closing tag (</div>)
//However some HTML elements such as <img> and <input> use only one tag 
//The tag belongs to a single tag element isnt an opening tag nor a closing tag (its a self closing tag)

//In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:

const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" />
      <article>
        I LIKE TO SIT
        <br/>
        JENKINS IS MY NAME
        <br/>
        THANKS HA LOT
      </article>
    </div>
  );


//Curly braces in JSX
//JSX does not add numbers - it reads them as text just like HTML 
//We need a way to write code that says "Enev though I am located between JSX tags, treat me like ordinary JavaScript"
//DO THIS BY wrapping your code in curly braces

ReactDOM.render(
    <h1>{2 + 3}</h1>,
    document.getElementById('app')
  );

  //curly braces gives the result 5 onscreen

//20 digits of pi in JSX  
//You can now inject regular JavaScript into JSX expressions! This will be extremely useful.



//Declare a new variable named math. Set math equal to a JSX <h1></h1> element.
//Put the following text inside of the <h1>:

const math = (
    <h1> 
       {2+3} = {2+3}
    </h1>
);


//VARIABLES in JSX:
const name = "Alexandria"

//Accessing varaibles from inside the JSX expression

const greeting = (
    <p> Hello {name} ! </p>
);


//EXAMPLE
//using curly braces - set the <h1> inner text equal to theBestString:
const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1> {theBestString} </h1> , document.getElementById('app'));

//Variable attributes in JSX
// Use a variable to set the `height` and `width` attributes:

const sideLength = "300px";

const panda = (
    <img 
        src = "images/panda.jpg"
        alt="panda"
        height = {sideLength}
        width = {sideLength} />
);

//.map in JSX 
//.map is an array method - .map() that often comes up
//If you want to create a list of JSX elements, then .map() is best.
//The map() method creates a new array with the results of calling a function for every array element.

//The map method calls the callbackfn function one time for each element in the array.
//Calls a defined callback function on each element of an array, and returns an array that contains the results.

//Array of strings
const strings = ['Home', 'Shop', 'Alexs house', 'About me'];

//call .map on this array of strings and .map call returns a new array of <li> S.
const listItems = strings.map(string => <li> {string} </li>);

//{listItems} will evaluate to an array because its the returned value of.map().. 
<ul> {listItems} </ul>;

//EX:
<ul>
  <li> Item 1 </li>
  <li> Item 2 </li>
  <li> Item 3</li>
</ul>

const liItems = [
  <li> Item 1 </li>,
  <li> Item 2 </li>,
  <li> Item 3</li>
];
<ul> {liItems} </ul>


//Example 

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li> {person} </li>);
  
<ul> {people} </ul>

);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul> {peopleLis}</ul>,
  document.getElementById('app')
);

//getElementById(elementId: string): HTMLElement
//String that specifies the ID value.
//Returns a reference to the first object with the specified value of the ID attribute.


//Keys
//When you make a list in JSX you need to include something called keys..
//JSX attribute = attributes name is key, the value should be something unique, similar to an id attribute
//React uses them to keep track of lists
//EX: 
<ul>
  <li key = "li-01"> Key one </li>
  <li key = "li-02"> Key two </li>
</ul>

//NOT all lists need keys..
//A list needs keys if one of the following are true:
//The list items have memory from one render to the next..(when a to-do list renders, each item must remember whether it was checked off)
//A lists oder might be shuffled (a search results might be shuffled from one render to the next)

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person,i) => 
  <li key={"person_"+i} > {person} </li>);
  
  <ul> {people} </ul>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul> {peopleLis} </ul>,
  document.getElementById('app')
);



//React.createElement 
//const h1 = <h1> Hello World </h1> 
//This can be written without any jsx - just in react 
//Secretly every JSX element is a call to React.createCElement

const h1 = React.createElement(
  "h1", 
  null,
  "Hello world"
);

//React.createElement takes in 3 arguments: (component, props,...children)

const greatestDivEver = React.createElement();

//ex
class Hello extends React.Component {
  render() {
    return <div> Hellow {this.props.toWhat} </div>
  }
}

//can be compiled to this code that does not use JSX

class Hello extends React.Component{
  render(){
    return React.createElement("div", null, 'Hello ${this.props.toWhat} ');
  }
}

//OR if you get tired of writing React.createElement - you can assigned it to a variable e 
//like this:

const e = React.createElement();

ReactDOM.render(
  e("div", null, 'Hello World'),
  document.getElementById('root')
);

//REACT COMPONENTS
//A component is a small, reuseable chunk of code that is responsible for one job..
//That job is often to render some HTMl

//This example will create and render a new React Component 

class MyComponentClass extends React.Component {
  render() {
    return <h1> Hellow World</h1>
  }
}

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')

);

//import React from 'react'; this creates an object named React which contains methods nexxessary to use react library 
//React.Component is a JavaScript class. 
//to create your own component class you must SUBCLASS React.Component. 
//React.Component is the way to declare a new component class.


import React from 'react';    //React is a avascript object
import ReactDOM from 'react-dom';    //ReactDOM is javascript object that allows you to interact with DOM - like render()
 
class MyComponentClass extends React.Component {    //React.Compoent is a javascript class, MyComponentClass is a subclass of React.Component
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);


//Render function
//name is render, and the value is a function. 
//A render method MUST contain a return statement. Usually returns a JSX expression:

class AlexsComponentClass extends React.Component{
  render(){
    return <h1> This is my first react class </h1>
  }
}

//Create a component instance:
//So now AlexsComponentClass is a working component class! Its ready to follow
//some instructions and make some React Components 
//To make a react component we write a JSX element. Instead of naming your JSX element something like 
//h1 or div, give it the same name as your class. 


//React component 
<AlexsComponentClass /> 

//Render a component:
//Whenever you make a component, that component inherits all of the methods
//of its components class. AlexsComponentClass has one method: render();
//Therefore this react component also has this method

ReactDOM.render(
  <AlexsComponentClass />,
  document.getElementById('app')
);

//USE multiline JSX in a component 
<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>

//Transform this into a react component

class QuoteMaker extends React.Component{
  render(){
    <blockquote> 
      <p> 
        The world is full of objects, more or less interesting; I do not wish to add any more. 
      </p>
      <cite>
      <a target="_blank"
        href="https://en.wikipedia.org/wiki/Douglas_Huebler">
        Douglas Huebler
    </a>
  </cite>
    </blockquote>

  }
}
ReactDOM.render(
  <QuoteMaker />, 
  document.getElementById('app')
);


//Use a variable attribute in a component 
const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px
};

//How could you render a React Component, and get a picture with redPandas properites?

//Put logic in a render function
//A render () function must have a return statement. 

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component{
  render(){
    const friend = friends[1];
    return (
      <div> 
        <h1>{friend.title}</h1>
        <img src = {friend.src} />
      </div>
    );
  }
}


ReactDOM.render(
  <Friend />,
  document.getElementById('app')
);

//Use a conditional in a Render Function
//see file TodaysPlan.js

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component{
  render(){
    let tonightsPlan;
    
  }
}

//Use this in a Component:
//The word "this" gets used in React a lot!!
//ex:

class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }
 
  render() {
    return <h1>I like {this.food}.</h1>;
  }
}

//The simple answer is that this refers to an instance of IceCreamGuy. 
//The less simple answer is that this refers to the object on which this‘s enclosing method, in this case .render(), is called.
//Let’s assume that this refers to an instance of your component class, as will be the case in all examples in this course. 
//IceCreamGuy has two methods: .food and .render(). Since this will evaluate to an instance of IceCreamGuy, this.food will evaluate to a call of IceCreamGuy‘s .food method. 
//This method will, in turn, evaluate to the string “ice cream.”
//Why don’t you need parentheses after this.food? Shouldn’t it be this.food()?

//You don’t need those parentheses because .food is a getter method. You can tell this from the get in the above class declaration body.


class MyName extends React.Component {
// name property goes here:
get name(){
  return 'Alexandria Coffey';
}

render() {
  return <h1>My name is {this.name}</h1>;
}
}

ReactDOM.render(
      <MyName />, 
      document.getElementById('app'));



//USE an event listner in a component:
//render functions often contain event listners
//ex:
render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}
//Recall that an event handler is a function that gets called in response to an event. 
//In the above example, the event handler is myFunc().

class MyClass extends React.Component{
  myFunc(){
      alert("STOP IT, Stop hovering")
  }

  render(){
      return( 
          <div> onHover = {this.myFunc} </div>
      )
  }
}

//The component class has two methods (myFunc and render)
//myFunc is being used as an event handler
//myFunc will be called any time a user hovers over the rendered <div> </div>

class Button extends React.Component {
  scream() {   //an event handler is a function that gets called in response to an event (so call scream when you click button)
    alert('AAAAAAAAHHH!!!!!');      //when clicked show alert (AHHHHH")
  }

  render() {
    return <button onClick = {this.scream} > !</button>;
  }
}

//Components Interact 
//A react application can contain dozens or hundreds of components
//React apps are made out of components.. 
//Components interact 


//We have seen render methods return <div> and <h1> JSX elements 
//but they can also return another kind of JSX: Component instances
//Such as:

class OMG extends React.Component{
  render(){
    return <h1> Whoaaa! </h1>
  }
}

class Crazy extends React.Component{
  render(){
    return <OMG />;   //renders the OMG class 
  }
}


//Apply a Component in a Render function

//Going to make a <ProfilePage /> render a <NavBar /> 
//Make profiles page render method return a navbar 

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

//Require a File
//When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default. 
//ProfilePage.js and NavBar.js cant see each other 

//So on line NavBar in ProfilePage.ks - javascript has no idea what navbar is...
//If you want to use a varaible that is declared in a different file, you have to import the variable you want..
//Use import statement

import {NavBar} from './NavBar.js';

//f you use an import statement, and the string at the end begins with either a dot or a slash, 
//then import will treat that string as a filepath. import will follow that filepath, and import the file that it finds.

//EXport 
//I learned how to import (grab a variable) from a file other than the current open one..
//When you import a variable from another file that is not the current file then import is not enough..
//Need an export statement as well
//export comes from ES6s module system

//Named exports
//In one file, place the keyword export immediately before something that you want to export 
//The export can be any top-level var, let, const, function or class:


export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  agile: 'https://agilemanifesto.org/iso/en/manifesto.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};

//You can export multiple things from the same file 
 
export const alsoRan = 'TimeCube';


//EXAMPLE

import {faveManifestos, alsoRan} from './Manifestos';

//USE faneManifestos
console.log('A cyborg Manifesto:  ${faveManifestos.cybord}');

//Component rendering in Action
//By nesting components inside other components, you can build complex architectures.

//We have learned that a component can render another component 
//Another way is that a component can pass information to another component
//This can be done by using Props

//Post component passing a prop to the Content component (Prop contains a string '../images/atom.png')
//used to display an image

//Every component has something called Props
//A components props is an object. Holds information about that component
//To see a components props - use this.props 
//EXample:
render() 
{
  console.log("Props object comin' up!");
 
  console.log(this.props);
 
  console.log("That was my props object!");
 
  return <h1>Hello world</h1>;
}

//Here’s how to make a component display passed-in information:

//1 - Find the component class that is going to receive that information.
//2 - Include this.props.name-of-information in that component class’s render method’s return statement.

//Pass a prop to a component by 
<Greeting name="Alex" /> ;

<Example firstName="sally" age={34} gender="female" />

//Also learned how to access and display a passed-in prop:
render()
{
  return <h1> This is my passed in prop {this.props.firstName} </h1>
}

//The most common use of props is to pass information to a component from a different component 
//Pass a prop from one component to another 
//props is the name of the object that stores passed-in information
//this.props refers to the storage object 

{/* <App /> cant pass a prop to <Greeting/> until App.js imports the variable Greeting! 
Until theBestString, the characters <Greeting /> iin app.js doesnt mean anything
 */}

import {Greeting} from './Greeting.js';

//In App.js import Greeting component (class name)
//In the render method call the greeting component with props(ex: Name = "Alex")



























