import React from "react";
import "./styles.css";

import Logo from "../../assets/facebook-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Facebook Logo" />
      </div>
    </header>
  );
};

export default Header;
