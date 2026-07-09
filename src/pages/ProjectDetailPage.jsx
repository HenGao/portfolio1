import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navbar from '../components/Navbar'
import ImageScroller from '../components/ImageScroller'
import ImageModal from '../components/ImageModal'
import './Page.css'
import './ProjectDetail.css'

const getYouTubeEmbedUrl = (url) => {
  if (!url || typeof url !== 'string') return url
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/)
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=0`
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/)
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=0`
  return url.replace('watch?v=', 'embed/') + (url.includes('embed/') ? '' : '?autoplay=0')
}

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

  const contextParagraphs = Array.isArray(project.fullDescription)
    ? project.fullDescription
    : project.fullDescription
      ? [project.fullDescription]
      : []

  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <div className="project-detail">
          <Link to="/projects" className="back-link">← Back to Projects</Link>
          
          <div className="project-detail-header">
            <h1 className="project-detail-title">{project.title}</h1>
            {project.wip && (
              <span className="project-detail-wip-badge" title="Work in progress">
                WIP
              </span>
            )}
          </div>
          
          <div className={`project-images-layout${project.centerMainImage ? ' project-images-layout--single' : ''}`}>
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

            {!project.centerMainImage && (
            <div className={`project-slider-container${!project.heroVideo && !(project.pcbImage || project.pcbImage2) && project.additionalImages && project.additionalImages.length === 1 ? ' project-slider-container--single-image' : ''}`}>
              {project.heroVideo && (
                <div className="project-hero-video-container">
                  <iframe
                    title="Project video"
                    src={getYouTubeEmbedUrl(project.heroVideo)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="project-hero-video"
                  />
                </div>
              )}
              {(project.pcbImage || project.pcbImage2) && (
                <div className="project-pcb-images-wrapper">
                  {project.pcbImage && (
                    <div className="project-pcb-image-container">
                      <img 
                        src={project.pcbImage} 
                        alt="PCB Design" 
                        className="project-pcb-image clickable-image"
                        onClick={() => {
                          setModalImage(project.pcbImage)
                          setModalAlt('PCB Design')
                        }}
                      />
                    </div>
                  )}
                  {project.pcbImage2 && (
                    <div className="project-pcb-image-container">
                      <img 
                        src={project.pcbImage2} 
                        alt="PCB Design 2" 
                        className="project-pcb-image clickable-image"
                        onClick={() => {
                          setModalImage(project.pcbImage2)
                          setModalAlt('PCB Design 2')
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
              {project.additionalImages && project.additionalImages.length > 0 && (
                <ImageScroller 
                  items={project.additionalImages} 
                  onImageClick={(src, alt) => {
                    setModalImage(src)
                    setModalAlt(alt)
                  }}
                />
              )}
            </div>
            )}
          </div>

          {project.projectOverviewVideo && (
            <section className="project-overview-video-section">
              <h2 className="project-section-title">Project Overview</h2>
              <div className="project-overview-video-container">
                <video
                  src={project.projectOverviewVideo}
                  className="project-overview-video"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
          )}

          {project.heroDescription && (
            <section className="project-hero-description-section">
              <strong className="project-description-label">Description:</strong>
              <p
                className="project-hero-description"
                dangerouslySetInnerHTML={{ __html: project.heroDescription }}
              />
            </section>
          )}

          {project.currentProgress && (
            <section className="project-current-progress-section">
              <strong className="project-description-label">{project.currentProgress.title}:</strong>
              {project.currentProgress.items?.map((item, index) => (
                <div key={index} className="project-current-progress-item">
                  {item.label && (
                    <strong className="project-current-progress-label">{item.label}</strong>
                  )}
                  <div className="project-current-progress-image-container">
                    <img
                      src={item.image}
                      alt={item.alt || item.label || 'Current progress'}
                      className="project-current-progress-image clickable-image"
                      onClick={() => {
                        setModalImage(item.image)
                        setModalAlt(item.alt || item.label || 'Current progress')
                      }}
                    />
                  </div>
                </div>
              ))}
            </section>
          )}

          {contextParagraphs.length > 0 && (
            <div className="project-summary-section">
              <div className={project.contextElectricalSideBySide ? 'project-summary-row' : ''}>
                <div className="project-description-item">
                  <strong className="project-description-label">Context:</strong>
                  {contextParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`project-full-description project-full-description--context${index > 0 ? ' project-full-description--context-follow' : ''}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {project.finalReportLink && (
                    <div className="project-github-link-container">
                      <a
                        href={project.finalReportLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link btn btn-secondary"
                      >
                        View final report (PDF)
                      </a>
                    </div>
                  )}
                  {project.githubLink && (
                    <div className="project-github-link-container">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link btn btn-secondary"
                      >
                        View repository on GitHub
                      </a>
                    </div>
                  )}
                  {project.userGuideVideo && (
                    <div className="user-guide-video-container" style={{ marginTop: '1rem' }}>
                      <strong style={{ display: 'block', marginBottom: '0.5rem' }}>User Guide I Developed:</strong>
                      <a 
                        href={project.userGuideVideo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="user-guide-video-link btn btn-secondary"
                      >
                        Watch User Guide Video
                      </a>
                    </div>
                  )}
                </div>
                {project.contextElectricalSideBySide && project.electrical && (
                  <div className="project-description-item project-description-item--electrical">
                    <strong className="project-description-label">Electrical:</strong>
                    <p className="project-full-description" dangerouslySetInnerHTML={{ __html: project.electrical }} />
                  </div>
                )}
              </div>
              {project.how && (Array.isArray(project.how) ? project.how.length > 0 : project.how) && (
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
                  <strong className="project-description-label">
                    {(project.resultsSectionLabel || 'My Contributions')}:
                  </strong>
                  {Array.isArray(project.results) ? (
                    <ul className="project-description-list">
                      {project.results.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="project-full-description" dangerouslySetInnerHTML={{
                      __html: project.results.replace(
                        /reads the analog signal from a pH sensor, filters it, and sends it back to our MCU via SPI protocol/g,
                        '<strong>reads the analog signal from a pH sensor, filters it, and sends it back to our MCU via SPI protocol</strong>'
                      )
                    }}></p>
                  )}
                  {project.contributionsImage && !project.contributionsImages?.length && (
                    <div className="contributions-image-container" style={{ marginTop: '1rem' }}>
                      <img 
                        src={project.contributionsImage} 
                        alt="Contributions schematic" 
                        className="contributions-image clickable-image"
                        onClick={() => {
                          setModalImage(project.contributionsImage)
                          setModalAlt('Contributions schematic')
                        }}
                      />
                    </div>
                  )}
                  {project.bmsFinalDesign && (
                    <div className="project-bms-final-section">
                      <strong className="project-description-label">{project.bmsFinalDesign.title}</strong>
                      <div className="project-bms-final-grid">
                        <div className="project-bms-final-slideshow">
                          <ImageScroller
                            items={project.bmsFinalDesign.slideshow}
                            onImageClick={(src, alt) => {
                              setModalImage(src)
                              setModalAlt(alt || project.bmsFinalDesign.title)
                            }}
                          />
                        </div>
                        {project.bmsFinalDesign.sideImage && (
                          <div className="project-bms-final-side">
                            <img
                              src={project.bmsFinalDesign.sideImage}
                              alt={project.bmsFinalDesign.sideImageAlt || 'Schematic'}
                              className="project-bms-final-schematic clickable-image"
                              onClick={() => {
                                setModalImage(project.bmsFinalDesign.sideImage)
                                setModalAlt(project.bmsFinalDesign.sideImageAlt || 'Schematic')
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {project.contributionsImages && project.contributionsImages.length > 0 && (
                    <div className={`contributions-gallery-container${project.bmsFinalDesign ? ' contributions-gallery-container--after-bms' : ''}`}>
                      {project.bmsFinalDesign && (
                        <strong className="project-description-label">Version 1 BMS Design</strong>
                      )}
                      <ImageScroller
                        items={project.contributionsImages}
                        onImageClick={(src, alt) => {
                          setModalImage(src)
                          setModalAlt(alt || 'Contribution image')
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Mechanical and Electrical side by side */}
          {(project.mechanical || (project.electrical && !project.contextElectricalSideBySide)) && (
            <div className={`project-sections-grid${!project.mechanical && project.electrical ? ' project-sections-grid--electrical-only' : ''}`}>
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
                <div className={`project-section${!project.mechanical && project.electricalSchematic ? ' project-section-electrical-with-image' : ''}`}>
                  <div className="electrical-text-wrapper">
                    <h2 className="project-section-title">Electrical</h2>
                    <p className="project-section-electrical-p" dangerouslySetInnerHTML={{ __html: project.electrical }} />
                  </div>
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
              <div className="firmware-links-container">
                {project.firmware.downloadLink && (
                  <a 
                    href={project.firmware.downloadLink} 
                    download={project.firmware.fileName}
                    className="firmware-download-link btn btn-primary"
                  >
                    Download Firmware
                  </a>
                )}
                {project.firmware.githubLink && (
                  <a 
                    href={project.firmware.githubLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="firmware-github-link btn btn-secondary"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
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
