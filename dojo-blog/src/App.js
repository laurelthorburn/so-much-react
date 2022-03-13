import logo from './logo.svg';
import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const google = "https://www.google.com";
  // const person = { name: 'lola', age: 30};

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked { likes } times</p>

        <p>{10}</p>
        <p>"Hello friends"</p>
        <p>[1, 2, 3, 4, 5]</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={google} target="_blank">Go to Google</a>

      </div>
        
    </div>
  );
}

export default App;
