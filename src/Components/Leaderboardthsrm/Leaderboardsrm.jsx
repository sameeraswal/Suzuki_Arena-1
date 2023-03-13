import React from 'react'
import Navbar from '../Navbar'
import lead from '../../Assets/Leaderboard.png'
import { useNavigate } from 'react-router-dom'
import leadImg from '../leaderboardfinal/01.png' 

const Leaderboardthsrm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      
      <button
        className="roll leader-btn icon-conatiner"
        onClick={() => navigate("/leaderboardth")}
      >
        Toggle to RM
      </button>
      <img src={leadImg} alt="" className="lead-pos"/>
     <img src={lead} alt="" className="background-image"/>
      
      {/* <img src={bgImg1} alt="" className="background-image"/>
      <h1 className="position-text align-lead-1">{name}</h1>
      <h1 className="position-text align-lead-2">{name1}</h1>
      <h1 className="position-text align-lead-3">{name2}</h1> */}
      
    </div>
  )
}

export default Leaderboardthsrm;
