import { React, useEffect, useState } from "react";
import FlippableCard from "../FlippableCard";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
// import Remaincard from "./Remaincard";
import bgImg from "../leaderboardfinal/05.png";
import Popupquestion from "../flipcard popup/Popupquestion";
import { getData } from "./Altovskwid";

const Ertvscare = () => {
  const [count, setCount] = useState(5);
  const [openModal, setOpenModal] = useState(false);



  let response = {
    status: true,
    data: [
      { id: 0, cardName: "Height",class: "front-icon1", classBack: "back-1", isCorrect: false },
      { id: 1, cardName: "Length",class: "front-icon2", classBack: "back-2", isCorrect: true },
      { id: 2, cardName: "Power",class: "front-icon3", classBack: "back-3", isCorrect: false },
      { id: 3, cardName: "Torque",class: "front-icon4", classBack: "back-4", isCorrect: true },
      { id: 4, cardName: "Bootspace",class: "front-icon5", classBack: "back-5", isCorrect: false },
      { id: 5, cardName: "Mileage",class: "front-icon6", classBack: "back-6", isCorrect: true },
      { id: 6, cardName: "Width",class: "front-icon7", classBack: "back-7", isCorrect: false },
      { id: 7, cardName: "Wheelbase",class: "front-icon8", classBack: "back-8", isCorrect: true },
      { id: 8, cardName: "Engine",class: "front-icon9", classBack: "back-9", isCorrect: false },
      { id: 9, cardName: "FTC",class: "front-icon10", classBack: "back-10", isCorrect: true },
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
      <div className="round-box bg-correct">Ertiga ZXi+ Vs Carens 1.5 Prestige MT</div>
      <div className="flex-container bg-correct">
        <div className="remain-container bg-correct">
          <p>Cards</p>
          <p>Remaining: {count}</p>
        </div>

        <div className="flex-container-child bg-correct">
          {cards.map((item) => (
            <>
            <div className="flex-child bg-correct" onClick={() => {{count>0?setCount(count-1):setCount(0)}
              setOpenModal(!item.isCorrect)
              }}>
                <FlippableCard title={item} />
              </div>
              {openModal && !item.isCorrect && <Popupquestion setOpenModal={setOpenModal}/>}
            </>
          ))}
        </div>
        <Link to="/login">
          <button
            className="roll icon-conatiner finish-card"
            onClick={getData()}
          >
            Finish Round
          </button>
        </Link>
      </div>
    </>
  );
};

export default Ertvscare;


























