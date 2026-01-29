import React, { useEffect, useState, useRef } from 'react'
import './ImageModal.css'

const ImageModal = ({ imageSrc, alt, isOpen, onClose }) => {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [hasDragged, setHasDragged] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Reset zoom and pan when modal opens
      setZoom(1)
      setPan({ x: 0, y: 0 })
      setHasDragged(false)
    } else {
      document.body.style.overflow = 'unset'
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleImageClick = (e) => {
    if (imageSrc.endsWith('.mp4') || imageSrc.endsWith('.MP4') || imageSrc.endsWith('.webm') || imageSrc.endsWith('.WEBM')) {
      return
    }
    e.stopPropagation()
    
    // Don't reset zoom if user was dragging
    if (hasDragged) {
      setHasDragged(false)
      return
    }
    
    if (zoom === 1) {
      // Zoom in to 2x at click position
      const containerRect = e.currentTarget.parentElement?.getBoundingClientRect()
      if (!containerRect) return
      
      const clickX = e.clientX - containerRect.left - containerRect.width / 2
      const clickY = e.clientY - containerRect.top - containerRect.height / 2
      
      setZoom(2)
      setPan({ x: -clickX, y: -clickY })
    } else {
      // Reset zoom
      setZoom(1)
      setPan({ x: 0, y: 0 })
    }
  }

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      e.stopPropagation()
      setIsDragging(true)
      setHasDragged(false)
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setHasDragged(true)
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleOverlayClick = (e) => {
    // Don't close if user was dragging
    if (isDragging || hasDragged) {
      setHasDragged(false)
      return
    }
    // Only close if clicking directly on overlay, not on content
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragStart, zoom])

  if (!isOpen || !imageSrc) return null

  const isVideo = imageSrc.endsWith('.mp4') || imageSrc.endsWith('.MP4') || imageSrc.endsWith('.webm') || imageSrc.endsWith('.WEBM')

  const imageStyle = !isVideo ? {
    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
    cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
    transformOrigin: 'center center',
    transition: zoom === 1 ? 'transform 0.3s ease' : 'none'
  } : {}

  return (
    <div className="image-modal-overlay" onClick={handleOverlayClick}>
      <div 
        className="image-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <>
            <button 
              className="image-modal-close" 
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }} 
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <video 
              src={imageSrc} 
              className="image-modal-image"
              controls
              autoPlay
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </>
        ) : (
          <div className="image-wrapper">
            <button 
              className="image-modal-close" 
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }} 
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <img 
              ref={imageRef}
              src={imageSrc} 
              alt={alt || 'Expanded view'} 
              className="image-modal-image zoomable-image"
              style={imageStyle}
              onClick={handleImageClick}
              onMouseDown={handleMouseDown}
              draggable={false}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageModal
