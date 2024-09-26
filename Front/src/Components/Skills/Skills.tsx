import React from "react";
import "./Skills.css";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "UI/UX",
    skills: [
      { name: "Figma", level: 90, icon: "🎨" },
      { name: "Photoshop", level: 80, icon: "🖌️" },
      { name: "Canva", level: 75, icon: "📐" },
      { name: "Illustrator", level: 80, icon: "🖍️" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: 90, icon: "💻" },
      { name: "CSS", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 90, icon: "📜" },
      { name: "Tailwind", level: 90, icon: "🌬️" },
      { name: "Bootstrap", level: 90, icon: "📦" },
      { name: "React", level: 85, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "🛠️" },
      { name: "Vue", level: 60, icon: "🖼️" },
      { name: "React Native", level: 50, icon: "📱" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 90, icon: "📦" },
      { name: "Express.js", level: 90, icon: "🚀" },
      { name: "MongoDB", level: 90, icon: "🍃" },
      { name: "PHP", level: 86, icon: "🐘" },
      { name: "Python", level: 75, icon: "🐍" },
      { name: "MySQL", level: 90, icon: "💾" },
      { name: "Java", level: 50, icon: "☕" },
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
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;