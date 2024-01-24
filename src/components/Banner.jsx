import "../styles/Banner.scss";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom'


function Banner() {
  return (
    <div>
      <div className="banner">
        <img src={logo} className="banner__logo" alt="logo" />
      </div>
      <nav className= "banner__navbar">
        <Link to="/">Accueil </Link>
        <Link to="/About"> A Propos</Link>
      </nav>
    </div>
  );
  
}

export default Banner;