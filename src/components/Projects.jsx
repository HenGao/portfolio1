import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
