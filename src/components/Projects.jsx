import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link key={index} to={project.link} className="project-card">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="400" fill="#f3f4f6"/>
                    <text x="300" y="200" fontSize="20" fill="#334139" textAnchor="middle" fontWeight="500">
                      {project.title}
                    </text>
                  </svg>
                </div>
              </div>
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-link">View Project →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
