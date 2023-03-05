import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

const Finishround3 = () => {
  return (
    <div><Navbar />
    <Link to="/login">
      <div className="finish-page container">
        <h1 className="finish-text">Finish 3</h1>
      </div>
    </Link></div>
  )
}

export default Finishround3