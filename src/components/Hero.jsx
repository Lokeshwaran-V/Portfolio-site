import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero fade-in">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="greeting">Hi, I'm</p>
          <h1 className="name gradient-text">Lokeshwaran Venkatesan</h1>
          <h2 className="title">Frontend React Developer</h2>
          <p className="description">
            With 4+ years of experience building scalable, responsive, and performance-optimized web applications. 
            Passionate about modern full-stack development, UI animation, and AI-Augmented Frontend.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#experience" className="btn btn-outline">View Experience</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>
          {/* Using a placeholder since we don't have the local file path, user can replace it */}
          <div className="hero-image">
             <div className="avatar-placeholder">LV</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
