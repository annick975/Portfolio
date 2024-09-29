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
            I have huge enthusiasm for converting complex challenges into
            innovative solutions in the cybersecurity and software development
            sectors. Equipped with vast experience and knowledge of
            state-of-the-art AI technologies, I design intelligent applications
            that provide secure, relevant, and effective digital experiences,
            meeting the fast pace today requirements. Excellence in performance is
            driven by commitment, building with forward-looking professionals
            who embrace a shared culture of teamwork and knowledge sharing. I
            believe continuous evolution of skills is very much necessary in the
            ever-changing field of technology, and I make it a point to grab
            every opportunity that knocks my way to pick up new skills and stay
            updated with industry trends. Let us together shape a more secure
            and efficient digital future.
          </p>
          <p>Want to know more about me?</p>
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
