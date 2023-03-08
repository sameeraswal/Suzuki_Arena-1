import React, { useState } from "react";
import "./randomnum.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import randomnumimg from './saucer final (1).mp4'


export default function Random() {
  // const [minVal, setMinVal] = useState(0);
  // const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState("");

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (18 - 1 + 1) + 1));
  };
  const timeOutFun = (e) => {
    setTimeout(() => window.open("/timersection","_self"),  5000);
    // console.log(title);
  };

  return (
    <>
      <Navbar />
     
      
      <div className="hero">
      {/* <div className="round-box ">Number Generator</div> */}
      {/* <div className="round-box">Random Number Generator</div> */}
      <iframe src={randomnumimg} alt="" height={200} width={300} style={{marginLeft:"30px", marginBottom:"70px"}}>
      </iframe>
        <div className="container">
        
          <div className="randomNum">
            <p className="txt-bold">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <b> Random Number :</b> <span> {randomNum} </span>
            </p>
          </div>

          <button
            onClick={() => {
              handleRandomNum();
              timeOutFun();
            }}
            className="icon-conatiner"
          >
            Get Random Numer
          </button>
        </div>
      </div>
    </>
  );
}
