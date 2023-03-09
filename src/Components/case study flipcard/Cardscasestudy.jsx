import { React, useEffect, useState } from "react";
import FlippableCard from "./Flippablecasestudy";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
// import Remaincard from "./Remaincard";
import bgImg from "../leaderboardfinal/05.png";
import './casestudy.css'
import bgImg1 from '../NewImages/Spin-Wheel_BG.png'

const Cardscasestudy = () => {
 
  let response = {
    status: true,
    data: [
      { id: 0, cardName: "" },
      { id: 1, cardName: "" },
      { id: 2, cardName: "" },
      { id: 3, cardName: "" },
      { id: 4, cardName: "" },
      { id: 5, cardName: "" },
      { id: 6, cardName: "" },
      { id: 7, cardName: "" },
      
    ],
  };

  // useEffect(() => {
  //    setCount(count-1);
  // }, [count])

  let cards = response.data;

  return (
    <>
      <Navbar></Navbar>
      <img src={bgImg1} alt="" className="flip-bg"/>
      {/* <img src={bgImg} alt="" className="flip-bg" /> */}
      <div className="round-box bg-correct">Flip a Card</div>
      {/* {showBack && ( */}
      <div className="flex-container bg-correct">
        {/* <div className="remain-container bg-correct">
          <p>Cards</p>
          <p>Remaining: {count}</p>
        </div> */}

        <div className="flex-container-child bg-correct case-study-container">
          {cards.map((item) => (
            <>
              <div className="flex-child bg-correct">
                <FlippableCard title={item.cardName} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cardscasestudy;
