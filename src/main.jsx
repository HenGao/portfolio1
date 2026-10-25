import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const TITLE = 'Henry Gao · Hardware Engineer'
const AWAY_TITLE = 'Psst... come back :)'
const favicon = document.querySelector('link[rel="icon"]')

document.addEventListener('visibilitychange', () => {
  const away = document.hidden
  document.title = away ? AWAY_TITLE : TITLE
  if (favicon) favicon.href = away ? '/favicon-away.png' : '/favicon.png'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
