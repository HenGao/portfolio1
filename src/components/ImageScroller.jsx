import React, { useState } from 'react'
import './ImageScroller.css'

const ImageScroller = ({ items, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!items || items.length === 0) return null

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentItem = items[currentIndex]
  const isVideo = typeof currentItem === 'object' && currentItem.type === 'video'
  const src = isVideo ? currentItem.src : currentItem

  const showArrows = items.length > 1

  return (
    <div className={`image-scroller${items.length === 1 ? ' image-scroller--single' : ''}`}>
      <div className="scroller-wrapper">
        {showArrows && (
          <button 
            className="scroller-arrow scroller-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        )}

        <div className="scroller-content">
          {isVideo ? (
            <div className="scroller-media-container">
              <video 
                src={src} 
                className="scroller-media"
                controls
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="scroller-media-container">
              <img 
                src={src} 
                alt={`Image ${currentIndex + 1}`}
                className="scroller-media clickable-image"
                onClick={() => onImageClick && onImageClick(src, `Image ${currentIndex + 1}`)}
              />
            </div>
          )}
        </div>

        {showArrows && (
          <button 
            className="scroller-arrow scroller-arrow-right"
            onClick={goToNext}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        )}
      </div>

      {items.length > 1 && (
        <div className="scroller-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`scroller-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageScroller
