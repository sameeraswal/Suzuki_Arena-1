import { Link } from "react-router-dom";
import Afterflip from "../Afterflip";
import "./card.css";
import "./flip-transition.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import Popupexample from "../flipcard popup/Popup";

function Card({ onClick, title, isCorrect, cardQuestion, cardQuestionId }) {
  const metaData = {};
  metaData["Height"] = {
    classFront: "front-icon1",
    classBack: "back-1",
  };
  metaData["Length"] = {
    classFront: "front-icon2",
    classBack: "back-2",
  };
  metaData["Power"] = {
    classFront: "front-icon3",
    classBack: "back-3",
  };
  metaData["Torque"] = {
    classFront: "front-icon4",
    classBack: "back-4",
  };
  metaData["Bootspace"] = {
    classFront: "front-icon5",
    classBack: "back-5",
  };
  metaData["Mileage"] = {
    classFront: "front-icon6",
    classBack: "back-6",
  };
  metaData["Width"] = {
    classFront: "front-icon7",
    classBack: "back-7",
  };
  metaData["Wheelbase"] = {
    classFront: "front-icon8",
    classBack: "back-8",
  };
  metaData["Engine"] = {
    classFront: "front-icon9",
    classBack: "back-9",
  };
  metaData["FTC"] = {
    classFront: "front-icon10",
    classBack: "back-10",
  };
  let link = JSON.parse(localStorage.getItem("carRoute"));
  // let cardQuestionId=JSON.parse(localStorage.getItem("cardQuestionId"));

  const [cardRemain, setCardRemain] = useState(5);
  const flipImg = require("../flipcard-img.jpg");
  const navigate = useNavigate();
  const timeOutFun = (e) => {
    if (isCorrect) {
      // setTimeout(() => window.open(`../afterflip/${title}`), 400);
      setTimeout(
        () =>
          window.open(
            `../afterflip/${title}?question=${cardQuestion}&link=${link}&Id=${cardQuestionId}`,
            "_self"
          ),
        400
      );
    }

    // console.log(title);
  };

  return (
    <>
      <div className="card" onClick={onClick}>
        <div
          className={`card-back text-on-card-back ${metaData[title]?.classBack}`}
        ></div>

        <div className="card-front ">
          <button
            className={`middle card-front ${metaData[title]?.classFront}`}
            onClick={() => {
              timeOutFun();
            }}
          >
          <img
            src={require("../../Assets/Card/height1.png")}
            alt=""
            height={252}
            width={199}
          />
            button
          </button>
          {/* <p
            onClick={() => {
              timeOutFun();
            }}
            className="text-on-card"
          >
            {title}
            {/* ${params.get("link")}.png */}
          {/* </p> */} 
          
          
        </div>
      </div>
    </>
  );
}

export default Card;
