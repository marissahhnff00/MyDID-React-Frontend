import logo from './logo.svg';
import './App.css';
import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
  realm: 'your-realm',
  url: 'your-keycloak-url',
  clientId: 'your-client-id'
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
