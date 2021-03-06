import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ComponenteContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      
      <NavBar />

      <ItemListContainer saludar={'Hola soy el componente contenedor'}/>

      <ItemDetailContainer/>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          buenas <code>src/App.js</code> and save to reload.
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
