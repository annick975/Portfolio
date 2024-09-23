import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="AGRIBS Logo" className="logo" />
        <span className="logo-text">Annick</span>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Education</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
