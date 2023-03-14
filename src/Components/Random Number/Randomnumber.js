import React, { useState, useEffect } from "react";
import "./randomnum.css";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import randomnumimg from "./random.mp4";
import ReactPlayer from "react-player";
import randomvideo from "./random.mp4";

// const randNo=0;
export default function Random() {
  const [rand, setRand] = useState("");
  // const [minVal, setMinVal] = useState(0);
  // const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState("");
  const timeout = () => {
    // alert("Rando,m");
    setTimeout(() => {
      setRandomNum(Math.floor(Math.random() * (30 - 1 + 1) + 1));
    }, 14000);
    setTimeout(() => window.open("/timersection", "_self"), 20000);
  };

  // const handleRandomNum = () => {};
  // const timeOutFun = (e) => {

  //   // console.log(title);
  // };
  useEffect(() => {
    localStorage.setItem("random", JSON.stringify(randomNum));
  }, [randomNum]);

  const [play, setPlay] = useState(false);

  return (
    <>
      <Navbar />

<div className="hero">
  {/* <div className="round-box ">Number Generator</div> */}
  {/* <div className="round-box">Random Number Generator</div> */}

  <iframe
    src={randomnumimg}
    alt=""
    height={550}
    width={1000}
    style={{
      marginLeft: "-30px",
      marginBottom: "-350px",
      paddingLeft: "-300px",
    }}
    className="randomno-video"
    sandbox=""
  ></iframe>

  <div className="containerx">
    {/* <div className="randomNum"> */}
    <h1 className="txt-bold random_no_alignment">{randomNum}</h1>
    {/* </div> */}

    {/* <button
      onClick={() => {
        handleRandomNum();
        timeOutFun();
        setPlay(true);
      }}
      className="icon-conatiner random-no"
    >
      Spin
    </button> */}
  </div>
</div>
</>
);
}