import React, { useRef, useState, useEffect } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './ProjectsPreview.css'

const ProjectsPreview = () => {
  const scrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} className="project-preview-card" />
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
