import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Ecosystem',
      skills: ['JavaScript (ES6+)', 'React.js', 'Redux Toolkit', 'RTK Query', 'HTML5', 'CSS3/SCSS', 'Tailwind CSS']
    },
    {
      title: 'Architecture & Performance',
      skills: ['Component Architecture', 'Lazy Loading', 'Code Splitting', 'State Management', 'REST API Integration', 'Lighthouse Optimization']
    },
    {
      title: 'Testing & Tooling',
      skills: ['Jest', 'React Testing Library', 'Vite', 'Git', 'NPM/PNPM', 'CI/CD (GitHub Actions/Jenkins)']
    },
    {
      title: 'Backend & Exposure',
      skills: ['Node.js', 'Express.js', 'Next.js', 'Java', 'MySQL']
    }
  ];

  return (
    <section id="skills" className="skills fade-in">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass-card">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
