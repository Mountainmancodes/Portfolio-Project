import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/assets/images/image.png" alt="Joshua" className="avatar" />
      <h1 className="name">Joshua Hernandez</h1>
      <p className="title">Christian | Father | Software Engineer</p>
      <div className="buttons">
        <a href="/assets/images/IT Systems Analyst Associate Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="resume-button">Resume</button>
        </a>
      </div>
      <div className="separator"></div>
      <div className="skills">
        <div className="skill-category">
          <h3>Frontend Technologies</h3>
          <p>Angular, ReactJS, Ionic</p>
        </div>
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <p>TypeScript, JavaScript</p>
        </div>
        <div className="skill-category">
          <h3>Backend & Databases</h3>
          <p>SQL, MongoDB, PostgreSQL</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
