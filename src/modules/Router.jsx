import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/molecules/About/About";
import HomePage from "../components/molecules/Homepage/HomePage";
import Login from '../components/molecules/Login/Login'
import Navbar from "../components/molecules/Navbar";
import Skills from "../components/molecules/Skills/Skills";
import PrivateRoute from "./PrivateRoute";
import {useState} from 'react';

const Router = () => {

  // je créer un état login de base à faux 
  // je passe la méthode de mise à jour 
  // au composant <Login/>
  const [login, setLogin] = useState(false);

  return (
    <div>
      {/* BrowserRouter permet de déclarer (initialiser) un router  */}
      <BrowserRouter>
      {/* nous avons créer une simple navbar (composant <Navbar/>) qui 
      contient des liens pour naviguer via le composant
      <Link/> de react-router-dom */}
      <Navbar/>
      {/* Nous utilisons <Routes></Routes> pour déclarer une route une par une */}
      <Routes>
        {/* Une route une par une , 
        path = votre chemin url */}
        {/* element = votre composant */}
        {/* si je tappe sur /login par exemple, j'aurais donc le composant login affiché */}
        {/* index équivalent à path='/' */}
        <Route index element={<HomePage/>}/>
        <Route path='/login' element={<Login setLogin={setLogin}/>}/>
        <Route path='/about' element={<PrivateRoute login={login}/>}>
          <Route path="" element={<About/>}/>
          </Route>
          <Route path='/skills' element={<PrivateRoute login={login}/>}>
          <Route path="" element={<Skills/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;