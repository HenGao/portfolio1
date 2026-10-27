import { useCallback, useSyncExternalStore } from 'react'

const KEY = 'pinnedProjects'
const EVENT = 'pinned-projects-change'

let cached = null

const read = () => {
  if (cached) return cached
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY))
    cached = Array.isArray(parsed) ? parsed : []
  } catch {
    cached = []
  }
  return cached
}

const write = (ids) => {
  cached = ids
  try {
    localStorage.setItem(KEY, JSON.stringify(ids))
  } catch {
    // Storage can be unavailable (private mode); pins still work for this visit.
  }
  window.dispatchEvent(new Event(EVENT))
}

const subscribe = (callback) => {
  const onStorage = (e) => {
    if (e.key === KEY) {
      cached = null
      callback()
    }
  }
  window.addEventListener(EVENT, callback)
  window.addEventListener('storage', onStorage)
  return () => {
    window.removeEventListener(EVENT, callback)
    window.removeEventListener('storage', onStorage)
  }
}

const EMPTY = []

export default function usePinned() {
  const pinned = useSyncExternalStore(subscribe, read, () => EMPTY)

  const togglePin = useCallback((id) => {
    const current = read()
    write(current.includes(id) ? current.filter((p) => p !== id) : [...current, id])
  }, [])

  return { pinned, isPinned: (id) => pinned.includes(id), togglePin }
}
