import React, { useState, useEffect } from "react";
import "./Home.css";
import My_image from "../../assets/My_image.png";
import { SiPython, SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const phrases = [
  "Cybersecurity specialist.",
  "Frontend Developer.",
  "Backend Developer.",
];

const Home: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const typingSpeed = 120;
  const deletingSpeed = 100;
  const pauseDuration = 70;

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (deleting) {
      if (letterIndex > 0) {
        setTimeout(
          () => setDisplayedText(currentPhrase.slice(0, letterIndex - 1)),
          deletingSpeed
        );
        setTimeout(() => setLetterIndex(letterIndex - 1), deletingSpeed);
      } else {
        setDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      if (letterIndex < currentPhrase.length) {
        setTimeout(
          () => setDisplayedText(currentPhrase.slice(0, letterIndex + 1)),
          typingSpeed
        );
        setTimeout(() => setLetterIndex(letterIndex + 1), typingSpeed);
      } else {
        setTimeout(() => setDeleting(true), pauseDuration);
      }
    }
  }, [letterIndex, deleting, currentPhraseIndex]);

  return (
    <section id="Home" className="profile-section">
      <div className="text-container">
        <p className="welcome-text">WELCOME TO MY WORLD</p>
        <h1 className="main-title">
          Meet <span className="highlight">Annick NIYUBAHWE</span> <br />a{" "}
          {displayedText}
        </h1>
        <p className="description">
          I am dedicated to turning complex challenges into innovative solutions
          in cybersecurity and software development. 
        </p>
        <div className="icon-section">
          <a href="#Contact">
            <button className="hire">Hire Me</button>
          </a>
          <div className="skill-icons">
            <p>BEST SKILL ON</p>
            <ul>
              <SiReact className="icon" />
              <FaJava className="icon" />
              <SiPython className="icon" />

              <li>
                <a href="#xd" className="icon xd-icon"></a>
              </li>
              <li>
                <a href="#photoshop" className="icon photoshop-icon"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={My_image} alt="Annick NIYUBAHWE" className="My-image" />
      </div>
    </section>
  );
};

export default Home;
