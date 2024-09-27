import React from 'react';
import './Education.css';
import logo from "../../assets/RCA_logo.svg"
import MGS_logo from "../../assets/MGS_logo.svg"

const Education: React.FC = () => {
  return (
    <div id='Education' className="work-experience-container">
      <h1>My <span className='edu'>Education</span></h1>
      <div className="experience-cards">
        <div className="card">
          <div className="icon-container">
            <img src={logo} alt="Rwanda Coding Academy" />
          </div>
          <h2>Rwanda Coding Academy</h2>
          <p>
            2023-2026
          </p>
          <p>"Advanced Diploma in Software Programming"</p>
        </div>
        <div className="card">
          <div className="icon-container">
            <img src={MGS_logo} alt="UI & UX designer" className='mgs' />
          </div>
          <h2>Maranyundo Girls School</h2>
          <p>
            2020-2023
          </p>
          <p>"Ordinary-level Certificate"</p>
        </div>
      </div>
    </div>
  );
};

export default Education;