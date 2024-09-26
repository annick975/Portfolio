import React from 'react';
import './Projects.css';
import vulnerability_scanner from "../../assets/vulnerability_scanner.jpeg"

const ProjectsData = [
  {
    title: "Web Development",
    description: "Eget gravida cum natoque for the penatibus et magnis dis. Adipiscing pellentesque habitant.",
    icon: vulnerability_scanner,
  },
  {
    title: "UI/UX Design",
    description: "Eget gravida cum natoque for the penatibus et magnis dis. Adipiscing pellentesque habitant.",
    icon: "/path-to-your-icon/ui-ux-design.png",
  },
  {
    title: "Digital Marketing",
    description: "Eget gravida cum natoque for the penatibus et magnis dis. Adipiscing pellentesque habitant.",
    icon: "/path-to-your-icon/digital-marketing.png",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="Projects-container">
      <h2>Our Popular Projects</h2>
      <h3>We Provide with Passion</h3>
      <div className="Projects-grid">
        {ProjectsData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-wrapper">
              <img src={service.icon} alt={service.title} className="service-icon" />
            </div>
            <div className="service-info">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="browse-link">Browse All Projects</a>
    </div>
  );
};

export default Projects;
