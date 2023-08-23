import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <Header/>
      <Content  title="santhosh" />
      </header>
    </div>
  );
}

export default App;
