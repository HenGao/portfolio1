import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects, getProjectType } from '../data/projects'
import './ProjectsPreview.css'

const ProjectsPreview = () => {
  const scrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const getTypeClassName = (type) => {
    if (type === 'Software') return 'project-preview-type-software'
    if (type === 'FPGA') return 'project-preview-type-fpga'
    return 'project-preview-type-hardware'
  }

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)
      return () => {
        scrollElement.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="projects-preview">
      <div className="projects-preview-wrapper">
        {showLeftArrow && (
          <button 
            className="scroll-arrow scroll-arrow-left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        )}
        <div className="projects-scroll" ref={scrollRef}>
          {projects.map((project, index) => (
            <Link 
              key={index} 
              to={project.link} 
              className="project-preview-card"
            >
              <div className="project-preview-image">
                <span className={`project-preview-type-badge ${getTypeClassName(getProjectType(project.id))}`}>
                  {getProjectType(project.id)}
                </span>
                {project.wip && (
                  <span className="project-preview-wip-badge" title="Work in progress">
                    WIP
                  </span>
                )}
                {project.image && !project.image.includes('placeholder') ? (
                  <img src={project.image} alt={project.title} className="project-preview-img" />
                ) : (
                  <div className="project-image-placeholder">
                    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="300" fill="#f3f4f6"/>
                      <text x="200" y="150" fontSize="18" fill="#334139" textAnchor="middle" fontWeight="500">
                        {project.title}
                      </text>
                    </svg>
                  </div>
                )}
              </div>
              <div className="project-preview-content">
                <h3 className="project-preview-title">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        {showRightArrow && (
          <button 
            className="scroll-arrow scroll-arrow-right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}

export default ProjectsPreview
