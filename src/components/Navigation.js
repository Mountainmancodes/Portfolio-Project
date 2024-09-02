import React from 'react';
import { FaBriefcase, FaGithub, FaGraduationCap } from 'react-icons/fa'; // Correct import

function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { name: 'Experience', emoji: <FaBriefcase /> },  // Briefcase icon for Experience
    { name: 'Projects', emoji: <FaGithub /> },        // GitHub icon for Projects
    { name: 'Education', emoji: <FaGraduationCap /> } // Graduation cap for Education
  ];

  return (
    <nav className="tab-navigation">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab-button ${activeTab === tab.name ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.emoji} {tab.name}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
