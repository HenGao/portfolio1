import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navbar from '../components/Navbar'
import './Page.css'
import './ProjectDetail.css'

const ProjectDetailPage = () => {
  const { projectId } = useParams()
  const project = getProjectById(projectId)

  if (!project) {
    return (
      <div className="page">
        <Navbar />
        <div className="container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <div className="project-detail">
          <Link to="/projects" className="back-link">← Back to Projects</Link>
          <h1 className="project-detail-title">{project.title}</h1>
          <div className="project-detail-image">
            {project.image && !project.image.includes('placeholder') ? (
              <img src={project.image} alt={project.title} className="project-main-image" />
            ) : (
              <div className="project-image-placeholder">
                <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="800" height="500" fill="#f3f4f6"/>
                  <text x="400" y="250" fontSize="24" fill="#334139" textAnchor="middle" fontWeight="500">
                    {project.title}
                  </text>
                </svg>
              </div>
            )}
          </div>
          <div className="project-detail-content">
            <p className="project-detail-description">{project.fullDescription || project.description}</p>
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="project-section">
                <h3 className="project-section-title">Technologies Used</h3>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {project.challenges && (
              <div className="project-section">
                <h3 className="project-section-title">Challenges</h3>
                <p className="project-detail-description">{project.challenges}</p>
              </div>
            )}

            {project.solution && (
              <div className="project-section">
                <h3 className="project-section-title">Solution</h3>
                <p className="project-detail-description">{project.solution}</p>
              </div>
            )}

            {project.impact && (
              <div className="project-section">
                <h3 className="project-section-title">Impact</h3>
                <p className="project-detail-description">{project.impact}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
