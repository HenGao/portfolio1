import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const favicon = document.querySelector('link[rel="icon"]')

document.addEventListener('visibilitychange', () => {
  if (favicon) favicon.href = document.hidden ? '/favicon-away.png' : '/favicon.png'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
