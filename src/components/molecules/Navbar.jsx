import { Link } from "react-router-dom";

const Navbar = () => {
return (
  <div style={{border: "3px solid purple"}}>
  <Link style={{marginRight: 10}} to="/">Ma page d'accueil</Link>
  <Link style={{marginRight: 10}} to="/about">Ma page about</Link>
  <Link to="/skills">Ma page expériences</Link>
  </div>
)
}

export default Navbar;