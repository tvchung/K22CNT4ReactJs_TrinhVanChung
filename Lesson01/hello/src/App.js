import logo from './logo.png';
import './App.css';
import Tvc from './components/Tvc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        
      </header>
      <Tvc />
      <Tvc email="chungtrinhj@gmail.com" phone="0978611889" />
      <Tvc  email="admin@gmail.com" phone="0912113113" company="Tập đoàn NTU"/>
    </div>
  );
}

export default App;
