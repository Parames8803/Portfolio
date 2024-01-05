import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="rights">
        <span>{new Date().getFullYear()}&nbsp;</span>
        <span>&copy;</span>
        <span>copyrights</span>
      </p>
      <a href="https://www.linkedin.com/in/parameswaran-eswaran">
        Build by<span>&#9825;</span>Parameswaran
      </a>
      <a href="/contact" className="contact">
        Say Hello
      </a>
    </div>
  );
};

export default Footer;
