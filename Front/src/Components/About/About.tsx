import React from "react";
import My_image from "../../assets/My_image.png";
import "./About.css";

const About: React.FC = () => {
  return (
    <div id="About" className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          <img src={My_image} alt="Profile" />
        </div>
        <div className="profile-text">
          <h2>Who I Am?</h2>
          <p>
            I am a website designer from London, with a strong focus in UI/UX
            design. I love to get new experiences and always learn from my
            surroundings.
          </p>
          <p>
            I am a website designer from London, with a strong focus in UI/UX
            design. I love to get new experiences and always learn from my
            surroundings.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1NBPm6id5PddqDk_TQeoqbyZzGePLhBlo"
            download="CV"
          >
            <button className="download-button">Download PDF</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
