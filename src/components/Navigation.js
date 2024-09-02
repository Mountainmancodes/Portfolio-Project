import React from 'react';
import { FaBriefcase, FaGithub, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { name: 'Experience', icon: <FaBriefcase /> },
    { name: 'Projects', icon: <FaGithub /> },
    { name: 'Education', icon: <FaGraduationCap /> },
    { name: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="tab-navigation">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`tab-button ${activeTab === tab.name ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.icon} {tab.name}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;