import { React, useEffect, useState } from "react";
import FlippableCard from "../FlippableCard";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
// import Remaincard from "./Remaincard";
import bgImg from "../leaderboardfinal/05.png";

const Ertvstrib = () => {
  const [count, setCount] = useState(5);
  let response = {
    status: true,
    data: [
      { id: 0, cardName: "Height",class: "front-icon1", classBack: "back-1" },
      { id: 1, cardName: "Length",class: "front-icon2", classBack: "back-2" },
      { id: 2, cardName: "Power",class: "front-icon3", classBack: "back-3" },
      { id: 3, cardName: "Torque",class: "front-icon4", classBack: "back-4" },
      { id: 4, cardName: "Bootspace",class: "front-icon5", classBack: "back-5" },
      { id: 5, cardName: "Mileage",class: "front-icon6", classBack: "back-6" },
      { id: 6, cardName: "Width",class: "front-icon7", classBack: "back-7" },
      { id: 7, cardName: "Wheelbase",class: "front-icon8", classBack: "back-8" },
      { id: 8, cardName: "BC",class: "front-icon9", classBack: "back-9" },
      { id: 9, cardName: "FTC",class: "front-icon10", classBack: "back-10" },
    ],
  };

  // useEffect(() => {
  //    setCount(count-1);
  // }, [count])

  let cards = response.data;

  return (
    <>
      <Navbar></Navbar>
      <img src={bgImg} alt="" className="flip-bg" />
      <div className="round-box bg-correct">Ertiga Vs Triber</div>
      <div className="flex-container bg-correct">
        <div className="remain-container bg-correct">
          <p>Cards</p>
          <p>Remaining: {count}</p>
        </div>

        <div className="flex-container-child bg-correct">
          {cards.map((item) => (
            <>
              <div className="flex-child bg-correct">
                <FlippableCard title={item} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ertvstrib;































