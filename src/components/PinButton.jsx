import React from 'react'
import usePinned from '../hooks/usePinned'
import './PinButton.css'

const PinIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 17v5" />
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
  </svg>
)

const PinButton = ({ projectId, name }) => {
  const { isPinned, togglePin } = usePinned()
  const pinned = isPinned(projectId)

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    togglePin(projectId)
  }

  return (
    <button
      type="button"
      className={`pin-button${pinned ? ' is-pinned' : ''}`}
      onClick={handleClick}
      aria-pressed={pinned}
      aria-label={pinned ? `Unpin ${name}` : `Pin ${name}`}
      title={pinned ? 'Unpin' : 'Pin to top'}
    >
      <PinIcon filled={pinned} />
    </button>
  )
}

export default PinButton
