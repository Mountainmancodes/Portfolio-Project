import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Experience');

  return (
    <div className="App">
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="tab-content">
            {activeTab === 'Experience' && <Experience />}
            {activeTab === 'Projects' && <Projects />}
            {activeTab === 'Education' && <Education />}
          </div>
        </div>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
