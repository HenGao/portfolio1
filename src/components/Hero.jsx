import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image-wrapper">
              <img src="/profile-photo.png" alt="Henry Gao" className="hero-image" />
            </div>
            <h1 className="hero-title">Henry Gao</h1>
            <p className="hero-subtitle">Electrical Engineer</p>
          </div>
          <div className="hero-right">
            <h2 className="about-title">About Me</h2>
            <p className="hero-description">
              I am currently a fourth year at Northeastern University working towards creating products that will hopefully one day change the world. Please take a scroll to see how I'm already working towards creating products!
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/resume" className="btn btn-secondary">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
