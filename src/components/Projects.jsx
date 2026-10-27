import React, { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import usePinned from '../hooks/usePinned'
import './Projects.css'

const FILTERS = ['All', 'Hardware', 'Software', 'FPGA', 'Chip']

const searchText = (project) =>
  [
    project.name,
    project.subtitle,
    project.category,
    project.status,
    ...(project.tags || []),
    ...(project.what || []),
    ...(project.how || []),
    ...(project.results || [])
  ]
    .join(' ')
    .replace(/<[^>]+>/g, ' ')
    .toLowerCase()

const indexed = projects.map((project) => ({ project, text: searchText(project) }))

const Projects = () => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const { pinned } = usePinned()

  const counts = useMemo(() => {
    const c = { All: projects.length }
    FILTERS.slice(1).forEach((f) => {
      c[f] = projects.filter((p) => p.category === f).length
    })
    return c
  }, [])

  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const matches = indexed
    .filter(({ project }) => filter === 'All' || project.category === filter)
    .filter(({ text }) => words.every((w) => text.includes(w)))
    .map(({ project }) => project)
  const visible = [
    ...matches.filter((p) => pinned.includes(p.id)),
    ...matches.filter((p) => !pinned.includes(p.id))
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-controls">
          <label className="projects-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              placeholder="Search projects"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search projects"
            />
          </label>

          <div className="projects-filters" role="group" aria-label="Filter by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`projects-filter${filter === f ? ' is-active' : ''}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
                <span className="projects-filter-count">{counts[f]}</span>
              </button>
            ))}
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="projects-grid">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} pinnable />
            ))}
          </div>
        ) : (
          <p className="projects-empty">
            {counts[filter] === 0
              ? `No ${filter} projects yet. Check back soon.`
              : 'No projects match your search.'}
          </p>
        )}
      </div>
    </section>
  )
}

export default Projects
