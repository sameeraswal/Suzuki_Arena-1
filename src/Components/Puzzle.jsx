import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { x } from "./Random Number/Randomnumber";
import wordpattern from "./wordpattern.jpg";
// import openbook from "./open-book.svg";
import bgImg from '../Assets/Open-Scoring-Sheet.png'
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
      
      <div className="round-box">Puzzle - {num}</div>
        <Link to="/puzzlechoice">
          {" "}
          <button className="roll icon-conatiner scoring-btn puzzle-scoring-btn">
            <p>Open Scoring Sheet</p>
            <FontAwesomeIcon icon="fa-solid fa-book-open" />
          </button>
        </Link>
      </div>
    
  );
};

export default Puzzle;
