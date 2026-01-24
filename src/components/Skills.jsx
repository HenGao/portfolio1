import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma']
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
