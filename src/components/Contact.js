import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope size={24} />
          <a href="mailto:Colorado.jhernandez@gmail.com" className="contact-link">Colorado.JHernandez@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaGithub size={24} />
          <a href="https://github.com/mountainmancodes" target="_blank" rel="noopener noreferrer" className="contact-link">
            github.com/mountainmancodes
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;