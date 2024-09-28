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
            <li>QUICK LINKS</li>
           <a href="#Home"><li>Home</li></a>
            <a href="#About"><li>About</li></a>
           <a href="#Skills"><li>Skills</li> </a>
           <a href="#Education"><li>Education</li> </a> 
           <a href="#Projects"><li>Projects</li></a> 
           <a href="#Testimonials"><li>Testimonials</li></a> 
           <a href="#Contact"><li>Contact</li> </a>
          </ul>
          <ul>
            <li>SERVICES</li>
            <li>Cybersecurity</li>
            <li>Backend Dvelopment</li>
            <li>Frontend Development</li>
          </ul>
          <ul>
            <li>LET 'S CHAT</li>
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Email</li>
            <li>Discord</li>
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
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-discord"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy;2024. All rights reserved.</p>
        <p>Made with 🩷 by Annick</p>
      </div>
    </footer>
  );
};

export default Footer;
