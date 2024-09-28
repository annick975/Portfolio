import React from 'react';
import './Home.css';
import My_image from '../../assets/My_image.png'


const Home: React.FC = () => {
  return (
    <section id='Home' className="profile-section">
      <div className="text-container">
        <p className="welcome-text">WELCOME TO MY WORLD</p>
        <h1 className="main-title">
          Meet <span className="highlight">Annick NIYUBAHWE</span> <br />
          a Professional Web Developer.
        </h1>
        <p className="description">
          I have been working since 2022. I am proficient in UI design, user experience, researcher, and web development.
        </p>
        <div className="icon-section">
        <a href="#Contact"><button className='hire'>Hire Me</button></a>  
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
        <img src={My_image} alt="Annick NIYUBAHWE" className="My-image" />
      </div>
    </section>
  );
};

export default Home;