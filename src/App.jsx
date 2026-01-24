import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectsPreview from './components/ProjectsPreview'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <Hero />
            <ProjectsPreview />
          </div>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  )
}

export default App
