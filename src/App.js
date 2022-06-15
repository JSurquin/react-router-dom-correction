import logo from './logo.svg';
import './App.css';
import Router from './modules/Router';

// on a créer un composant Router 
// on l'as injecter dans le composant App ci-dessous
function App() {
  return (
    <div className="App">
    <Router/>
    </div>
  );
}

export default App;
