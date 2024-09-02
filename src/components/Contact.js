import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="mailto:mountainman@example.com"><i className="fas fa-envelope"></i></a>
        <a href="https://github.com/mountainmancodes"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/mountainmancodes"><i className="fab fa-linkedin"></i></a>
      </div>
    </section>
  );
}

export default Contact;