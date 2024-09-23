import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section className="profile-section">
      <div className="text-container">
        <p className="welcome-text">WELCOME TO MY WORLD</p>
        <h1 className="main-title">
          Hi, I’m <span className="highlight">Omor Rahman</span> <br />
          a Professional UI/Ux Designer.
        </h1>
        <p className="description">
          I have been working since 2012. I am proficient in UI design, user experience, researcher, and web development.
        </p>
        <div className="icon-section">
          <div className="social-icons">
            <p>FIND WITH ME</p>
            <ul>
              <li><a href="#facebook" className="icon fb-icon"></a></li>
              <li><a href="#instagram" className="icon insta-icon"></a></li>
              <li><a href="#linkedin" className="icon linkedin-icon"></a></li>
            </ul>
          </div>
          <div className="skill-icons">
            <p>BEST SKILL ON</p>
            <ul>
              <li><a href="#figma" className="icon figma-icon"></a></li>
              <li><a href="#xd" className="icon xd-icon"></a></li>
              <li><a href="#photoshop" className="icon photoshop-icon"></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="path_to_image" alt="Omor Rahman" className="profile-image" />
      </div>
    </section>
  );
};

export default Home;