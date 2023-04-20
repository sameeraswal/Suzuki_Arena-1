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
  mspin,
}) {
  let link = JSON.parse(localStorage.getItem("carRoute"));
  console.log(result, "result");
  console.log(link, "Link");

  // let cardQuestionId=JSON.parse(localStorage.getItem("cardQuestionId"));

  const [cardRemain, setCardRemain] = useState(5);
  const flipImg = require("../flipcard-img.jpg");
  const navigate = useNavigate();
  const timeOutFun = (e) => {
    if (isCorrect) {

      setTimeout(
        () =>
          window.open(
            `../afterflip/height?question=${cardQuestion}&link=${link}&Id=${cardQuestionId}`,
            "_self"
          ),
        400
      );
    } else {
      setTimeout(
        () =>
          window.open(
            `../afterflipwrong?question=${cardQuestion}&link=${link}&Id=${cardQuestionId}`,
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
            className="resp-card-1"
          />

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
              className="resp-card-1"
            />
            button
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
