import React from "react";
import {
  SiLinux,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaJava, FaKey, FaLock, FaNetworkWired, FaNode } from "react-icons/fa";
import "./Skills.css";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Cybersecurity",
    skills: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Bash Scripting", icon: <SiGnubash /> },
      { name: "PKI", icon: <FaKey /> },
      { name: "Penetration Testing", icon: <FaLock /> },
      { name: "DNS Sec", icon: <FaNetworkWired /> },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Golang", icon: <TbBrandGolang /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div id="Skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{category.category}</h3>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill">
                <div className="skill-info">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
