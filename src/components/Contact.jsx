import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact fade-in">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-container glass-card">
          <p className="contact-text">
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question, a project idea, or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Chennai, Tamil Nadu</span>
              <span className="contact-icon">📞</span>
              <a href="tel:+919150445698" className="contact-link">
                +91-91504 45698
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a
                href="mailto:sudhavenkat.lokesh@gmail.com"
                className="contact-link"
              >
                sudhavenkat.lokesh@gmail.com
              </a>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/lokeshwaran-venkatesan-frontend-developer-react-js"
              className="social-btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Lokeshwaran-V/"
              className="social-btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <a
            href="mailto:sudhavenkat.lokesh@gmail.com"
            className="btn btn-primary mt-4"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
