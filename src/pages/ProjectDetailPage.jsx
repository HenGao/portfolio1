import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navbar from '../components/Navbar'
import ImageScroller from '../components/ImageScroller'
import ImageModal from '../components/ImageModal'
import './Page.css'
import './ProjectDetail.css'

const ProjectDetailPage = () => {
  const { projectId } = useParams()
  const project = getProjectById(projectId)
  const [modalImage, setModalImage] = useState(null)
  const [modalAlt, setModalAlt] = useState('')

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
          
          <div className="project-images-layout">
            {project.image && !project.image.includes('placeholder') ? (
              <div className="project-main-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-main-image clickable-image"
                  onClick={() => {
                    setModalImage(project.image)
                    setModalAlt(project.title)
                  }}
                />
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

            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="project-slider-container">
                <ImageScroller 
                  items={project.additionalImages} 
                  onImageClick={(src, alt) => {
                    setModalImage(src)
                    setModalAlt(alt)
                  }}
                />
              </div>
            )}
          </div>

          {project.fullDescription && (
            <div className="project-summary-section">
              <div className="project-description-item">
                <strong className="project-description-label">Context:</strong>
                <p className="project-full-description">{project.fullDescription}</p>
              </div>
              {project.how && (
                <div className="project-description-item">
                  <strong className="project-description-label">How:</strong>
                  {Array.isArray(project.how) ? (
                    <ul className="project-description-list">
                      {project.how.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="project-full-description">{project.how}</p>
                  )}
                </div>
              )}
              {project.results && (
                <div className="project-description-item">
                  <strong className="project-description-label">Results:</strong>
                  {Array.isArray(project.results) ? (
                    <ul className="project-description-list">
                      {project.results.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="project-full-description">{project.results}</p>
                  )}
                </div>
              )}
            </div>
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
                          className="mechanical-gif clickable-image"
                          autoPlay
                          loop
                          playsInline
                          muted
                          onClick={() => {
                            setModalImage(project.mechanicalGif)
                            setModalAlt('Mechanical system demonstration')
                          }}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img 
                          src={project.mechanicalGif} 
                          alt="Mechanical system demonstration" 
                          className="mechanical-gif clickable-image"
                          onClick={() => {
                            setModalImage(project.mechanicalGif)
                            setModalAlt('Mechanical system demonstration')
                          }}
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
                  {project.electricalSchematic && (
                    <div className="electrical-schematic-container">
                      <img 
                        src={project.electricalSchematic} 
                        alt="Electrical schematic" 
                        className="electrical-schematic clickable-image"
                        onClick={() => {
                          setModalImage(project.electricalSchematic)
                          setModalAlt('Electrical schematic')
                        }}
                      />
                    </div>
                  )}
                  <h2 className="project-section-title">Electrical</h2>
                  <p>{project.electrical}</p>
                </div>
              )}
            </div>
          )}

          {project.firmware && (
            <div className="project-section">
              <h2 className="project-section-title">Firmware</h2>
              {project.firmware.description && (
                <p>{project.firmware.description}</p>
              )}
              {project.firmware.downloadLink && (
                <div className="firmware-download-container">
                  <a 
                    href={project.firmware.downloadLink} 
                    download={project.firmware.fileName}
                    className="firmware-download-link btn btn-primary"
                  >
                    Download Firmware
                  </a>
                </div>
              )}
            </div>
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
        </div>
      </div>
      <ImageModal 
        imageSrc={modalImage}
        alt={modalAlt}
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
      />
    </div>
  )
}

export default ProjectDetailPage
