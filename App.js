import './App.css';

function App() {

  const title = "Welcome to Alexs blog!";
  const likes = 50;

  return (
    <div className="App">
      <div className = "content">
        <h1> App Component </h1>
        <h2> {title} </h2>
        <p> Liked {likes} times </p>
      </div>
    </div>
  );
}

export default App;
