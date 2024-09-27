import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";


const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">Annick</span>
      </div>
      <nav className="nav-links">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Education">Education</a>
        <a href="#Projects">Projects</a>
        <a href="#Testimonials">Testimonials</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
