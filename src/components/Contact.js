import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>I can be reaced at:</p>
      <div className="contact-icons">
        <a href="mailto:Colorado.JHernandez@gmail.com"><i className="fas fa-envelope"></i></a>
        <a href="https://github.com/mountainmancodes"><i className="fab fa-github"></i></a>
      </div>
    </section>
  );
}

export default Contact;