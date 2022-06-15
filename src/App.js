import logo from './logo.svg';
import './App.css';
import Router from './modules/Router';
import {useState} from 'react';

// on a créer un composant Router 
// on l'as injecter dans le composant App ci-dessous
import MonContext from './context/MonContext';


function App() {
  
  const [login, setLogin] = useState(false);
  
  return (
    <div className="App">
      <MonContext.Provider value={{login: login, setLogin: () => setLogin(true)}}>
    <Router/>
    </MonContext.Provider>
    </div>
  );
}

export default App;
