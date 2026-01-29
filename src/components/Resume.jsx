import React, { useState } from 'react'
import ImageModal from './ImageModal'
import './Resume.css'

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          <a 
            href="/resume.pdf" 
            className="btn btn-primary" 
            download="HGAO_Resume_2026-2027.pdf"
          >
            Download Resume
          </a>
          <div className="resume-image-container">
            <img 
              src="/resume.png" 
              alt="Resume" 
              className="resume-image clickable-image"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <ImageModal 
        imageSrc="/resume.png"
        alt="Resume"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}

export default Resume
