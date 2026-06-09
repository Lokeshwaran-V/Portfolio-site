import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Engineer',
      company: 'Movate Technologies (Formerly CSS Corp) - Chennai',
      period: 'Jun 2024 – Oct 2025',
      responsibilities: [
        'Developed enterprise-grade frontend modules supporting scalable and responsive web applications using React.js, Node.js, and CSS.',
        'Optimized React rendering performance using hooks like useMemo, useCallback, and component memoization techniques.',
        'Integrated RESTful APIs using Node.js and Express.js to support scalable frontend modules and asynchronous workflows.',
        'Led the frontend implementation of high-impact customer-facing features including Virtual Try-On (VTO) and GNAV redesign, improving user engagement by 40%.',
        'Optimized initial page load time by 30% using Lighthouse analysis, lazy loading, and code splitting.'
      ]
    },
    {
      role: 'Engineer',
      company: 'Jasmin Infotech Pvt Ltd - Chennai',
      period: 'Jun 2019 - Jan 2022',
      responsibilities: [
        'Developed reusable and responsive React.js components with centralized Redux Toolkit state management, improving scalability.',
        'Collaborated closely with backend teams to align API contracts and optimize response handling.',
        'Improved application performance by optimizing API interaction workflows and reducing redundant calls.',
        'Built dynamic UI components with REST API integration, including accordion-based product detail modules for better UX.',
        'Increased code quality by contributing to continuous integration setup using CI pre-commit hooks.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience fade-in">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3 className="role gradient-text">{exp.role}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4 className="company">{exp.company}</h4>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
