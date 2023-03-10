import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import wordpattern from "./wordpattern.jpg";
// import openbook from "./open-book.svg";
import bgImg from './NewImages/Spin-Wheel_BG.png'
import {useState} from 'react'

function randomnum(){
  const random = localStorage.getItem('random')
  return random;
}

const Puzzle = () => {
  const [num, setNum] = useState(randomnum);
  console.log(typeof(num))
  
  return (
    <div>
      <Navbar />
      <img src={bgImg} alt="" className="background-image"/>
      <div className="dashboard-container">
        <div className="round-box">Puzzle - {num}</div>
        <div className="puzzle-position">
          <img
            src={wordpattern}
            alt="pattern"
            height={400}
            width={400}
            className="puzzle-img"
            //   style={{ marginLeft: "37%", marginTop: "30px" }}
          />
        </div>

        <Link to="/puzzlechoice">
          {" "}
          <button className="roll icon-conatiner scoring-btn">
            <p>Open Scoring Sheet</p>
            <FontAwesomeIcon icon="fa-solid fa-book-open" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Puzzle;
