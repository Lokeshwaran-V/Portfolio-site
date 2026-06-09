import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about fade-in">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content glass-card">
          <p>
            I am a passionate <strong>Frontend React Developer</strong> with over 4 years of experience specializing in building scalable, 
            responsive, and performance-optimized web applications. My core expertise lies in the React.js ecosystem, 
            including Redux Toolkit, Context API, and modern hooks-based architectures.
          </p>
          <p>
            Throughout my career, I've successfully developed reusable frontend architectures, integrated complex REST APIs, 
            and contributed to backend workflows using Node.js and Express.js. I have a strong focus on 
            frontend scalability, maintainability, and modern agile engineering practices.
          </p>
          <p>
            Beyond coding, my interests include exploring UI animation, staying updated with Full Stack technologies, 
            and researching AI-Augmented Frontend capabilities. I strive to deliver excellent user experiences through 
            clean code and optimized performance.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number gradient-text">4+</span>
              <span className="highlight-text">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number gradient-text">100%</span>
              <span className="highlight-text">Responsive Design</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number gradient-text">Agile</span>
              <span className="highlight-text">Methodology Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
