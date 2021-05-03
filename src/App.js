import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Title title="Shot Industries"></Title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://relaxed-darwin-3a8386.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Making Humans Greag Again
        </a>
      </header>
    </div>
  );
}

export default App;
