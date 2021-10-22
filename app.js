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














