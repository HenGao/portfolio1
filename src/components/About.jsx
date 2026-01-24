import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">More About Me</h2>
            <p className="about-paragraph">
              I'm a passionate developer with a love for creating innovative solutions
              and beautiful user experiences. With expertise in modern web technologies,
              I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="about-paragraph">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
              I believe in continuous learning and staying updated with the latest industry trends.
            </p>
            <p className="about-paragraph">
              My approach to development combines technical excellence with user-centered design,
              ensuring that every project I work on is both functional and delightful to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
