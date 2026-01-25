import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navbar from '../components/Navbar'
import ImageScroller from '../components/ImageScroller'
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
          <h1>Project Not Found</h1>
          <Link to="/projects">Back to Projects</Link>
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
          
          {project.image && !project.image.includes('placeholder') ? (
            <div className="project-main-image-container">
              <img src={project.image} alt={project.title} className="project-main-image" />
            </div>
          ) : (
            <div className="project-main-image-placeholder">
              <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="400" fill="#f3f4f6"/>
                <text x="400" y="200" fontSize="24" fill="#334139" textAnchor="middle" fontWeight="500">
                  {project.title}
                </text>
              </svg>
            </div>
          )}

          {project.fullDescription && (
            <p className="project-full-description">{project.fullDescription}</p>
          )}

          {/* Mechanical and Electrical side by side */}
          {(project.mechanical || project.electrical) && (
            <div className="project-sections-grid">
              {project.mechanical && (
                <div className="project-section">
                  {project.mechanicalGif && (
                    <div className="mechanical-gif-container">
                      {project.mechanicalGif.endsWith('.mp4') || project.mechanicalGif.endsWith('.MP4') ? (
                        <video 
                          src={project.mechanicalGif} 
                          className="mechanical-gif"
                          autoPlay
                          loop
                          playsInline
                          muted
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img 
                          src={project.mechanicalGif} 
                          alt="Mechanical system demonstration" 
                          className="mechanical-gif"
                        />
                      )}
                    </div>
                  )}
                  <h2 className="project-section-title">Mechanical</h2>
                  <p>{project.mechanical}</p>
                </div>
              )}
              {project.electrical && (
                <div className="project-section">
                  <h2 className="project-section-title">Electrical</h2>
                  <p>{project.electrical}</p>
                </div>
              )}
            </div>
          )}

          {project.additionalImages && project.additionalImages.length > 0 && (
            <ImageScroller items={project.additionalImages} />
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="project-section">
              <h2 className="project-section-title">Technologies Used</h2>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {project.challenges && (
            <div className="project-section">
              <h2 className="project-section-title">Challenges</h2>
              <p>{project.challenges}</p>
            </div>
          )}

          {project.solution && (
            <div className="project-section">
              <h2 className="project-section-title">Solution</h2>
              <p>{project.solution}</p>
            </div>
          )}

          {project.impact && (
            <div className="project-section">
              <h2 className="project-section-title">Impact</h2>
              <p>{project.impact}</p>
            </div>
          )}

          {project.firmware && (
            <div className="project-section">
              <h2 className="project-section-title">Firmware</h2>
              {project.firmware.description && (
                <p>{project.firmware.description}</p>
              )}
              {project.firmware.downloadLink && (
                <a 
                  href={project.firmware.downloadLink} 
                  download={project.firmware.fileName}
                  className="firmware-download-link btn btn-primary"
                >
                  Download Firmware
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
