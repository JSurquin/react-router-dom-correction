// ici nous avons créer une route privée
// nous importons Outlet et Navigate de react router dom

// outlet vous retourne l'enfant d'une route
// navigate vous redirige 

// nous avons mis que ci la props.login que nous allons 
// recevoir du Router est vraie 
// alors tu nous retourne l'enfant
// si non, tu nous redirige vers la page "/login"

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
return props.login ? <Outlet/> : <Navigate to="/login" />
}

export default PrivateRoute;