import "../styles/Footer.scss";
import logoFooter from "../assets/logoFooter.png";
import copyright from "../assets/copyright.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo" className="footer__logo" />
      <div className="footer__text">
        <img src={copyright} className="footer__text--copyright" alt="logo" />
        <span className="footer__text--textFooter">
          2020 Kasa. All rights reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
