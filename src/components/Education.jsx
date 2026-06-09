import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education fade-in">
      <div className="container">
        <h2>Education & Certifications</h2>
        
        <div className="edu-grid">
          <div className="edu-column">
            <h3 className="column-title">Education</h3>
            
            <div className="edu-card glass-card">
              <div className="edu-header">
                <h4 className="degree gradient-text">B.E Computer Science Engineering</h4>
                <span className="year">Apr 2024</span>
              </div>
              <p className="institution">Alpha College of Engineering, Affiliated to Anna University – Chennai</p>
            </div>

            <div className="edu-card glass-card">
              <div className="edu-header">
                <h4 className="degree gradient-text">Diploma in Electrical and Electronics Engineering</h4>
                <span className="year">Apr 2019</span>
              </div>
              <p className="institution">Central Polytechnic College - Chennai</p>
            </div>
          </div>

          <div className="edu-column">
            <h3 className="column-title">Certifications</h3>
            
            <div className="edu-card glass-card">
              <div className="edu-header">
                <h4 className="degree gradient-text">Business English Certificate</h4>
                <span className="year">2023</span>
              </div>
              <p className="institution">BEC Preliminary - CEFR Level - B1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
