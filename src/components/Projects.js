import React, { useEffect, useState } from 'react';
import projectImages from '../data/projectImages'; // We'll create this file

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mountainmancodes/repos');
        const data = await response.json();
        
        // Combine GitHub data with local image data
        const projectsWithImages = data.map(repo => ({
          ...repo,
          imageUrl: projectImages[repo.name] || '/images/placeholder.png' // Use a placeholder if no image is specified
        }));
        
        setProjects(projectsWithImages);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.imageUrl}
              alt={`${project.name} screenshot`} 
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;