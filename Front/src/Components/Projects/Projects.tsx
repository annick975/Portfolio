import React from "react";
import "./Projects.css"; // Separate CSS file for styles
import { FiExternalLink } from "react-icons/fi"; // Using React Icons for external link icon

interface ProjectCardProps {
  projectNames: string[];
}

const Projects: React.FC<ProjectCardProps> = ({ projectNames }) => {
  return (
    <>
      <div className="projects-container" id="Projects">
        <h2>What I've been doing so far...</h2>
        <div className="projects-list">
          {projectNames.map((name, index) => (
            <div key={index} className="project-card">
              <span className="project-text">{name}</span>
              <FiExternalLink className="external-link-icon" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
