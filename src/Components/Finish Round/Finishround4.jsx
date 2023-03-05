import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

const Finishround4 = () => {
  return (
    <div><Navbar />
    <Link to="/login">
      <div className="finish-page container">
        <h1 className="finish-text">Finish 4</h1>
      </div>
    </Link></div>
  )
}

export default Finishround4