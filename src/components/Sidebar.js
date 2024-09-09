import React from 'react';

function Sidebar() {
  const handleResumeClick = () => {
    window.open('./assets/images/IT Systems Analyst Associate Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <aside className="sidebar">
      <img src="./assets/images/image.png" alt="Joshua" className="avatar" />
      <h1 className="name">Joshua Hernandez</h1>
      <p className="title">Father | Software Engineer | Techno-Optimist </p>
      <div className="buttons">
        <button className="resume-button" onClick={handleResumeClick}>Resume</button>
      </div>
      <div className="separator"></div>
      <div className="skills">
        <div className="skill-category">
          <h3>Frontend Technologies</h3>
          <p>Angular, ReactJS, Ionic, HTML/CSS, Bootstrap</p>
        </div>
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <p>TypeScript, JavaScript</p>
        </div>
        <div className="skill-category">
          <h3>Backend & Databases</h3>
          <p>MongoDB, PostgreSQL, Express, Node.js</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;