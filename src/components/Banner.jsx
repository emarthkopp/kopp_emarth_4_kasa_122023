import "../styles/Banner.scss";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom'


function Banner() {
  return (
    <div  className="banner">
      <div className="banner__logo">
        <img src={logo} className="banner__logo--image" alt="logo" />
      </div>
      <nav className= "banner__navbar">
        <Link to="/">Accueil </Link>
        <Link to="/About"> A Propos</Link>
      </nav>
    </div>
  );
  
}

export default Banner;