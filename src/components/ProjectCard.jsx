import React from 'react'
import { Link } from 'react-router-dom'
import PinButton from './PinButton'
import './ProjectCard.css'

const ProjectCard = ({ project, className = '', pinnable = false }) => {
  const { name, subtitle, category, status, image, cardFit = 'cover', cardBg = '#F4F4F5' } = project

  return (
    <div className={`pcard-wrap ${className}`}>
      <Link to={project.link} className="pcard">
        <div className="pcard-image" style={{ background: cardBg }}>
          {image && <img src={image} alt={name} style={{ objectFit: cardFit }} />}
        </div>
        <div className="pcard-body">
          <div className="pcard-heading">
            <p className="pcard-meta">
              <span className="pcard-category">{category}</span>
              {status && (
                <>
                  <span className="pcard-dot" aria-hidden="true">·</span>
                  <span>{status}</span>
                </>
              )}
            </p>
            <div className="pcard-titles">
              <h3 className="pcard-name">{name}</h3>
              {subtitle && <p className="pcard-subtitle">{subtitle}</p>}
            </div>
          </div>
          <span className="pcard-link">
            View project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </span>
        </div>
      </Link>
      {pinnable && <PinButton projectId={project.id} name={name} />}
    </div>
  )
}

export default ProjectCard
