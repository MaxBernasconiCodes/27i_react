import logo from './logo.svg';
import './App.css';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home inicial={0} maximo={10} />
      </header>
    </div>
  );
}

export default App;
