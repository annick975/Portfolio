import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from 'react-icons/fa'; // Add this line for icons

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for nav visibility

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">Annick</span>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        {isNavOpen ? <FaTimes size={30} color="#bdcec8" /> : <FaBars size={30} color="#bdcec8" />}
      </div>
      <nav className={`nav-links ${isNavOpen ? "open" : ""}`}>
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
