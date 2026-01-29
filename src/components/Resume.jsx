import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          <div className="resume-pdf-container">
            <iframe 
              src="/resume.pdf" 
              className="resume-pdf"
              title="Resume PDF"
              type="application/pdf"
            >
              <p>Your browser does not support PDFs. 
                <a href="/resume.pdf" download="HGAO_Resume_2026-2027.pdf">Download the resume</a> instead.
              </p>
            </iframe>
          </div>
          <a 
            href="/resume.pdf" 
            className="btn btn-primary" 
            download="HGAO_Resume_2026-2027.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
