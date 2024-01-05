import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello AWS World!
        </p>
        <a
          className="App-link"
          href="https://aws.amazon.com/training/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn you an AWS for great good!
        </a>
      </header>
    </div>
  );
}

export default App;
