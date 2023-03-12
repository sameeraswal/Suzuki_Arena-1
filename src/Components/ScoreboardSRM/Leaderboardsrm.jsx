import React from 'react'
import Navbar from '../Navbar'
import headImg from '../../Assets/ScoreboardNew/SRM.png'
import userImg from '../../Assets/ScoreboardNew/04.png'
import titlesImg from '../../Assets/Leaderboard/06.png'
import { useNavigate } from 'react-router-dom'

const Leaderboardsrm = () => {
  const navigate = useNavigate();


  return (
    <>
    <Navbar></Navbar>
    <button className="roll leader-btn icon-conatiner" onClick={() => navigate('/leaderboard')}>Toggle to RM</button>
    <img src={headImg} alt="" className="head-image-scoreboard"/>
    <img src={titlesImg} alt="" className="title-image"/>
   
    <div className="leaderboard-container">
      <div className="leaderboard">
        {/* <div className="description">
          <img src={trophy} alt="" className="resp-trophy resp-trophy-1" />
          <img src={text} alt="" className="resp-text" />
          <img src={trophy} alt="" className="resp-trophy" />
        </div> */}

        <div className="table-div">
          <div className="table-heading">
            {/* <img src={bg} alt="" className="bg bg1" />
            <h1 className="text-on-img">Registration No</h1>
            <img src={bg} alt="" className="bg bg2" />
            <h1 className="text-on-img2">Name</h1> */}

            {/* <img src={bg} alt="" className="bg bg4" />
            <h1 className="text-on-img3">Round 1-A</h1>
            <img src={bg} alt="" className="bg bg5" />
            <h1 className="text-on-img4">Round 1-B</h1>
            <img src={bg} alt="" className="bg bg6" />
            <h1 className="text-on-img5">Round 2</h1>
            <img src={bg} alt="" className="bg bg7" />
            <h1 className="text-on-img6">Round 3</h1>
            <img src={bg} alt="" className="bg bg8" />
            <h1 className="text-on-img7">Round 4</h1>
            <img src={bg} alt="" className="bg bg9" />
            <h1 className="text-on-img8">Round 5</h1>
            <img src={bg} alt="" className="bg bg10" />
            <h1 className="text-on-img9">Round 6</h1>
            <img src={bg} alt="" className="bg bg11" />
            <h1 className="text-on-img10">Round 7</h1> */}

            {/* <img src={bg} alt="" className="bg bg5" />
            <h1 className="text-on-img11">Total Score</h1>
            <img src={bg} alt="" className="bg bg3" />
            <h1 className="text-on-img12">Rank</h1> */}
          </div>
          <table>
            <tbody>
              <br />


            {/* From here you have to change everything */}

              {/* {round.map((item) => (
                <>
               
                  <tr>
                  
                    <td className={item.class}>{item.registrationNumber}</td>
                    <td className={item.class}>{item.name}</td>
                    
                   
                    <td className={item.class}>{item.finalScore}</td>
                    <td className={item.class}>{item.rank}</td>
                  </tr>
                </>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
  )
}

export default Leaderboardsrm
