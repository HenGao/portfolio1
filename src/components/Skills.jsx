import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React',
        'Vue.js',
        'Angular',
        'JavaScript / TypeScript',
        'HTML/CSS',
        'Tailwind CSS',
        'SASS/SCSS',
        'Responsive Design'
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Python',
        'Express.js',
        'Django',
        'RESTful APIs',
        'GraphQL',
        'MongoDB',
        'PostgreSQL',
        'MySQL'
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Git / GitHub',
        'Docker',
        'AWS',
        'Vercel',
        'CI/CD',
        'Webpack',
        'Vite',
        'Figma',
        'Jira'
      ]
    },
    {
      title: 'Other Skills',
      skills: [
        'Agile/Scrum',
        'Test-Driven Development',
        'Code Review',
        'Performance Optimization',
        'SEO',
        'Accessibility (WCAG)'
      ]
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
