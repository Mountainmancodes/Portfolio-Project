import React from 'react';
import { FaBriefcase, FaGithub, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { name: 'Experience', emoji: <FaBriefcase /> },
    { name: 'Projects', emoji: <FaGithub /> },
    { name: 'Education', emoji: <FaGraduationCap /> },
    { name: 'Contact', emoji: <FaEnvelope /> },  // Add the Contact tab
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
