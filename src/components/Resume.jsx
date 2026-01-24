import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          <p className="resume-description">
            Download my resume to learn more about my experience and skills.
          </p>
          <a href="#" className="btn btn-primary" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
