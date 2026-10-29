import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navbar from '../components/Navbar'
import ImageModal from '../components/ImageModal'
import './Page.css'
import './ProjectDetail.css'

const getYouTubeEmbedUrl = (url) => {
  const match =
    url.match(/youtu\.be\/([\w-]+)/) ||
    url.match(/youtube\.com\/shorts\/([\w-]+)/) ||
    url.match(/[?&]v=([\w-]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : url
}

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 8H3M7 4L3 8l4 4" />
  </svg>
)

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 11l6-6M6 5h5v5" />
  </svg>
)

const hasPlayerControls = (item) => item.type === 'youtube' || (item.type === 'video' && item.controls)

const Media = ({ item, onOpen }) => {
  const type = item.type || 'image'
  const fit = { objectFit: item.fit || 'contain' }

  if (type === 'youtube') {
    return (
      <iframe
        title={item.alt}
        src={getYouTubeEmbedUrl(item.src)}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  if (type === 'video') {
    return item.controls ? (
      <video src={item.src} poster={item.poster} style={fit} aria-label={item.alt} controls playsInline preload="metadata" />
    ) : (
      <video src={item.src} style={fit} aria-label={item.alt} autoPlay muted loop playsInline />
    )
  }

  return (
    <button type="button" className="pd-zoom" onClick={() => onOpen(item)} aria-label={`Enlarge: ${item.alt}`}>
      <img src={item.src} alt={item.alt} style={fit} />
    </button>
  )
}

const frameStyle = (item) => ({
  background: item.bg || (item.type === 'youtube' ? '#18181B' : '#F4F4F5')
})

const Gallery = ({ images, onOpen }) => {
  const [index, setIndex] = useState(0)
  const [hero, ...rest] = images
  const current = rest[index]
  const step = (delta) => setIndex((i) => (i + delta + rest.length) % rest.length)

  return (
    <section className="pd-gallery" aria-label="Gallery">
      <figure className={`pd-figure pd-figure--hero${rest.length === 0 ? ' pd-figure--solo' : ''}`}>
        <div className="pd-frame" style={frameStyle(hero)}>
          <Media item={hero} onOpen={onOpen} />
        </div>
        <figcaption>{hero.caption || hero.alt}</figcaption>
      </figure>

      {current && (
        <figure className="pd-figure pd-figure--side">
          <div className="pd-frame" style={frameStyle(current)}>
            <Media key={current.src} item={current} onOpen={onOpen} />
            {rest.length > 1 && (
              <div className={`pd-steppers${hasPlayerControls(current) ? ' pd-steppers--top' : ''}`}>
                <button type="button" onClick={() => step(-1)} aria-label="Previous image">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5" /></svg>
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next image">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5" /></svg>
                </button>
              </div>
            )}
          </div>
          <div className="pd-figure-footer">
            <figcaption>{current.caption || current.alt}</figcaption>
            {rest.length > 1 && <span className="pd-counter">{index + 1} / {rest.length}</span>}
          </div>
        </figure>
      )}
    </section>
  )
}

const Subsystem = ({ section, onOpen }) => {
  const figures = section.figures || []
  return (
    <section className={`pd-sub${section.wide ? ' pd-sub--wide' : figures.length === 1 ? ' pd-sub--split' : ''}`}>
      <div className="pd-sub-text">
        <h2>{section.label || 'Electrical'}</h2>
        {section.headline && <p className="pd-sub-headline">{section.headline}</p>}
        <p dangerouslySetInnerHTML={{ __html: section.text }} />
      </div>
      {figures.length > 0 && (
        <div className="pd-sub-figures">
          {figures.map((figure) => (
            <figure key={figure.src} className="pd-figure">
              <div className="pd-frame pd-frame--figure" style={frameStyle({ bg: figure.bg || '#FFFFFF' })}>
                <Media item={figure} onOpen={onOpen} />
              </div>
              {figure.caption && (
                <figcaption>
                  {figure.caption}
                  {figure.badge && <span className="pd-badge">{figure.badge}</span>}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}

const TextSection = ({ title, items }) => {
  if (!items || items.length === 0) return null
  return (
    <div className="pd-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  )
}

const ProjectDetailPage = () => {
  const { projectId } = useParams()
  const project = getProjectById(projectId)
  const [modalItem, setModalItem] = useState(null)

  if (!project) {
    return (
      <div className="page">
        <Navbar />
        <main className="pd">
          <h1 className="pd-title">Project not found</h1>
          <Link to="/projects" className="pd-back"><ArrowLeft />All projects</Link>
        </main>
      </div>
    )
  }

  const { name, subtitle, category, status, images = [], what, how, results, electrical, links = [], tags = [] } = project

  return (
    <div className="page">
      <Navbar />
      <main className="pd">
        <Link to="/projects" className="pd-back">
          <ArrowLeft />
          All projects
        </Link>

        <header className="pd-header">
          <div className="pd-heading">
            <h1 className="pd-title">{name}</h1>
            {subtitle && <p className="pd-subtitle">{subtitle}</p>}
          </div>
          <p className="pd-meta">
            {category}
            {status && <> · {status}</>}
          </p>
        </header>

        {images.length > 0 && <Gallery key={project.id} images={images} onOpen={setModalItem} />}

        <section className="pd-text">
          <TextSection title="What?" items={what} />
          <TextSection title="How?" items={how} />
          <TextSection title="Results" items={results} />
        </section>

        {links.length > 0 && (
          <div className="pd-links">
            {links.map((link, index) => {
              const external = /^https?:/.test(link.href)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`pd-button${index === 0 ? ' pd-button--primary' : ''}`}
                  {...(link.download ? { download: link.download } : { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {link.label}
                  {external && <ArrowUpRight />}
                </a>
              )
            })}
          </div>
        )}

        {electrical && <Subsystem section={electrical} onOpen={setModalItem} />}

        {tags.length > 0 && (
          <ul className="pd-tags" aria-label="Technologies">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </main>
      <ImageModal
        imageSrc={modalItem?.src}
        alt={modalItem?.alt}
        isOpen={!!modalItem}
        onClose={() => setModalItem(null)}
      />
    </div>
  )
}

export default ProjectDetailPage
