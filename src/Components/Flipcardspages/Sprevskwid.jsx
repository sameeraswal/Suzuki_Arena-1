import { React, useEffect, useState } from "react";
import FlippableCard from "../FlippableCard";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
// import Remaincard from "./Remaincard";
import bgImg from "../leaderboardfinal/05.png";

const Sprevskwid = () => {
  const [count, setCount] = useState(5);
  let response = {
    status: true,
    data: [
      { id: 0, cardName: "Height" },
      { id: 1, cardName: "Length" },
      { id: 2, cardName: "Power" },
      { id: 3, cardName: "Torque" },
      { id: 4, cardName: "Bootspace" },
      { id: 5, cardName: "Mileage" },
      { id: 6, cardName: "Width" },
      { id: 7, cardName: "Wheelbase" },
      { id: 8, cardName: "BC" },
      { id: 9, cardName: "FTC" },
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
      <div className="round-box bg-correct">Flip a Card</div>
      <div className="flex-container bg-correct">
        <div className="remain-container bg-correct">
          <p>Cards</p>
          <p>Remaining: {count}</p>
        </div>

        <div className="flex-container-child bg-correct">
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

export default Sprevskwid;

