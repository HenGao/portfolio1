Plaimport React from 'react'
import Resume from '../components/Resume'
import Navbar from '../components/Navbar'
import './Page.css'

const ResumePage = () => {
  return (
    <div className="page">
      <Navbar />
      <Resume />
    </div>
  )
}

export default ResumePage
