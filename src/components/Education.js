import React from 'react';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Business Administration',
      school: 'Colorado Technical University',
      year: 'Sep 2017',
    },
    {
      degree: 'Associate of Science in Information Technology',
      school: 'Colorado Technical University',
      year: 'Jul 2017',
    },
    {
      degree: 'Certificate',
      concentration: 'Coding Bootcamp',
      school: 'University of Texas - Austin',
      year: 'Oct 2024',
    }
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          {edu.concentration && <p>{edu.concentration}</p>}
          <p>{edu.school}, {edu.year}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
