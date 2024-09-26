import React from 'react';
import './Education.css';
import logo from "../../assets/RCA_logo.svg"

const Education: React.FC = () => {
  return (
    <div id='Education' className="work-experience-container">
      <h1>My <span className='edu'>Education</span></h1>
      <div className="experience-cards">
        <div className="card">
          <div className="icon-container">
            <img src={logo} alt="Frontend Developer" />
          </div>
          <h2>Frontend Developer</h2>
          <p>
            Assisted in the development of a web-based platform using React.js, enhancing interactivity.
          </p>
        </div>
        <div className="card">
          <div className="icon-container">
            <img src={logo} alt="UI & UX designer" />
          </div>
          <h2>UI & UX designer</h2>
          <p>
            Assisted in the designing of a web-based platform using Figma, enhancing interactivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;