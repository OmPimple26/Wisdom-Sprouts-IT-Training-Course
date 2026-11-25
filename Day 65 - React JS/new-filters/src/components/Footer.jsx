import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h2><span>My</span>Store.</h2>
          <p>
            Your one-stop destination for quality products
            at affordable prices. Shop your favourite products
            with us and enjoy a great shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@mystore.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MyStore. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
