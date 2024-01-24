import "../styles/Footer.scss";
import logoFooter from "../assets/logoFooter.png";
import copyright from "../assets/copyright.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo" className="footer__logo" />
      <div>
        <img src={copyright} className="footer__copyright" alt="logo" />
        <span className="footer__textFooter">
          2020 Kasa. All rights reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
