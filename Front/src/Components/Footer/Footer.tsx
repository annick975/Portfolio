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
            <p>QUICK LINKS</p>
            <a href="#Home">
              <li>Home</li>
            </a>
            <a href="#About">
              <li>About</li>
            </a>
            <a href="#Skills">
              <li>Skills</li>{" "}
            </a>
            <a href="#Education">
              <li>Education</li>{" "}
            </a>
            <a href="#Projects">
              <li>Projects</li>
            </a>
            <a href="#Testimonials">
              <li>Testimonials</li>
            </a>
            <a href="#Contact">
              <li>Contact</li>{" "}
            </a>
          </ul>
          <ul>
            <p>SERVICES</p>
            <li>Cybersecurity</li>
            <li>Backend Development</li>
            <li>Frontend Development</li>
          </ul>
          <ul>
            <p>CURRENTLY WORKING AT</p>
            <li><a href="https://www.hepo.rw/" target="_blank">HEPO</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <ul className="social-icons">
          <li>
            <a href="mailto:niyubahwe.annick975@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>

            <a href="https://www.facebook.com/UwacuAnnick" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/annick-niyubahwe-04898932a/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
          <a href="https://discord.gg/4RNQ8QtQ" target="_blank">
  <i className="fab fa-discord"></i>
</a>

          </li>
          <li>
            <a href="https://wa.me/250788999619" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/n_tannick975/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@_a.n.nick_975" target="_blank">
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
          <li><a href="https://x.com/yourUsername" target="_blank">
  <i className="fab fa-twitter"></i>
</a>
</li>
          <li>
            <a href="https://github.com/annick975" target="_blank">
              <i className="fab fa-github"></i>
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
