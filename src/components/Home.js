import React from 'react';

function Home() {
  return (
    <section id="profile">
      <img src="/mountain-coder-avatar.jpg" alt="Mountain Coder Avatar" className="profile-pic" />
      <h1>Mountainmancodes</h1>
      <p>Software Engineer | Mountain Enthusiast</p>
      <div className="cta-buttons">
        <a href="#" className="btn">Resume</a>
      </div>
      <Skills />
    </section>
  );
}

function Skills() {
  const skills = [
    { category: 'Frontend', items: ['ReactJS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Flask', 'SpringBoot'] },
    { category: 'Programming Languages', items: ['Python', 'JavaScript', 'Java'] },
    { category: 'Database Technologies', items: ['MySQL', 'MongoDB'] },
    { category: 'Cloud Technologies', items: ['AWS'] },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-category">
          <h3>{skill.category}:</h3>
          <p>{skill.items.join(', ')}</p>
        </div>
      ))}
    </section>
  );
}

export default Home;