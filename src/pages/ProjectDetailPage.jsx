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
            <div className="project-image-placeholder">
              <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="500" fill="#f3f4f6"/>
                <text x="400" y="250" fontSize="24" fill="#334139" textAnchor="middle" fontWeight="500">
                  {project.title}
                </text>
              </svg>
            </div>
          </div>
          <div className="project-detail-content">
            <p className="project-detail-description">{project.description}</p>
            <p className="project-detail-description">
              Add more details about this project here. Describe the technologies used, 
              challenges faced, solutions implemented, and the impact of the project.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
