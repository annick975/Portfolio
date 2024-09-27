import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="logo" className="logo" />
          <span className="logo-text">Annick</span>
        </div>
        <div className="footer-links">
          <ul>
            <li>WEEBLY THEMES</li>
            <li>PRE-SALE FAQS</li>
            <li>SUBMIT A TICKET</li>
          </ul>
          <ul>
            <li>SERVICES</li>
            <li>THEME TWEAK</li>
          </ul>
          <ul>
            <li>SHOWCASE</li>
            <li>WIDGETKIT</li>
            <li>SUPPORT</li>
          </ul>
          <ul>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>AFFILIATES</li>
            <li>RESOURCES</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-rss"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-flickr"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy;Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
