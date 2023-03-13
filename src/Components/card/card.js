import { Link } from "react-router-dom";
import Afterflip from "../Afterflip";
import "./card.css";
import "./flip-transition.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import Popupexample from "../flipcard popup/Popup";

function Card({
  onClick,
  title,
  isCorrect,
  cardQuestion,
  cardQuestionId,
  result,
  cardtitleImage1,
  cardtitleImage2,
}) {
  // const metaData = {};
  // metaData["Height"] = {
  //   classFront: "front-icon1",
  //   classBack: "back-1",
  // };
  // metaData["Length"] = {
  //   classFront: "front-icon2",
  //   classBack: "back-2",
  // };
  // metaData["Power"] = {
  //   classFront: "front-icon3",
  //   classBack: "back-3",
  // };
  // metaData["Torque"] = {
  //   classFront: "front-icon4",
  //   classBack: "back-4",
  // };
  // metaData["Bootspace"] = {
  //   classFront: "front-icon5",
  //   classBack: "back-5",
  // };
  // metaData["Mileage"] = {
  //   classFront: "front-icon6",
  //   classBack: "back-6",
  // };
  // metaData["Width"] = {
  //   classFront: "front-icon7",
  //   classBack: "back-7",
  // };
  // metaData["Wheelbase"] = {
  //   classFront: "front-icon8",
  //   classBack: "back-8",
  // };
  // metaData["Engine"] = {
  //   classFront: "front-icon9",
  //   classBack: "back-9",
  // };
  // metaData["FTC"] = {
  //   classFront: "front-icon10",
  //   classBack: "back-10",
  // };
  let link = JSON.parse(localStorage.getItem("carRoute"));
  console.log(result, "result hai");
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
        <div className={`card-back text-on-card-back`}>
          <img
            src={require(`../../Assets/Card/${cardtitleImage2}`)}
            alt=""
            height={271}
            width={189}
          />
          {console.log(cardtitleImage1, "Item")}
        </div>

        <div className="card-front">
          <button
            className={`middle card-front`}
            onClick={() => {
              timeOutFun();
            }}
          >
            <img
              src={require(`../../Assets/Card/${cardtitleImage1}`)}
              alt=""
              height={271}
              width={189}
            />
            button
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
