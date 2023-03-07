import React, { useState } from "react";
import "./randomnum.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import randomnumimg from '../randomnum.avif'

export default function Random() {
  // const [minVal, setMinVal] = useState(0);
  // const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState("");

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (18 - 1 + 1) + 1));
  };
  const timeOutFun = (e) => {
    setTimeout(() => window.open("/timersection","_self"), 2000);
    // console.log(title);
  };

  return (
    <>
      <Navbar />
      
      <div className="hero">
      {/* <div className="round-box ">Number Generator</div> */}
      {/* <div className="round-box">Random Number Generator</div> */}
      <img src={randomnumimg} alt="" height={400} width={400} style={{marginLeft:"30px"}}
        />
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
