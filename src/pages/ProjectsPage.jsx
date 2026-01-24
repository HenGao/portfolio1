import React from 'react'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import './Page.css'

const ProjectsPage = () => {
  return (
    <div className="page">
      <Navbar />
      <Projects />
    </div>
  )
}

export default ProjectsPage
