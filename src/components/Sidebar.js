import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="./public/images/image.png" alt="Joshua" className="Avatar" />
      <h1 className="name">Joshua Hernandez</h1>
      <p className="title">Christian | Father | Software Engineer</p>
      <div className="buttons">
        <button className="resume-button">Resume</button>
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