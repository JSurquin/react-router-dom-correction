import {useContext, useState} from 'react';
import MonContext from '../../../context/MonContext';

const Login = (props) => {

  const monContext = useContext(MonContext)
  const [values, setValues] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    monContext.setLogin(true);
  }

  // un simple formulaire 
  // dés que je valide le formulaire
  // je met à jour login sur true via setLogin
  // donc login , qui viens du Router, sera à true

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input onChange={e => setValues(e.target.value)}></input>
      <input type="submit"></input>
    </form>
  )
}
  

export default Login;