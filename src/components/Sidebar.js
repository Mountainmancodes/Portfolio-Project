import React, { useState } from 'react';

function Sidebar() {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClick = () => {
    setShowResume(!showResume);
  };

  return (
    <aside className="sidebar">
      <img src="/public/assets/images/image.png" alt="Joshua" className="avatar" />
      <h1 className="name">Joshua Hernandez</h1>
      <p className="title">Christian | Father | Software Engineer</p>
      <div className="buttons">
        <button className="resume-button" onClick={handleResumeClick}>Resume</button>
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
      {showResume && (
        <div className="resume-section">
          <iframe
            src="/public/assets/images/IT Systems Analyst Associate Resume.pdf"
            width="100%"
            height="600px"
            title="Joshua Hernandez's Resume"
          ></iframe>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
