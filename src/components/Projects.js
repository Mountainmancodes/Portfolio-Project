import React, { useEffect, useState } from 'react';
import projectImages from '../data/projectImages'; 

function Projects() {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mountainmancodes/repos');
        const data = await response.json();
        
        // Combine GitHub data with local image data
        const projectsWithImages = data.map(repo => ({
          ...repo,
          imageUrl: projectImages[repo.name] || '/images/placeholder.png'
        }));
        
        setProjects(projectsWithImages);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  const loadMore = () => {
    setVisibleProjects(prevVisible => prevVisible + 6);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.slice(0, visibleProjects).map((project) => (
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
      {visibleProjects < projects.length && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More Projects
        </button>
      )}
    </section>
  );
}

export default Projects;