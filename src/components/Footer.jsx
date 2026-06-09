import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Lokeshwaran Venkatesan. All rights reserved.
          </p>
          <p className="credit">
            Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
