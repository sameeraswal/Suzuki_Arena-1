import { React, useEffect, useState } from "react";
import FlippableCard from "../FlippableCard";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
// import Remaincard from "./Remaincard";
import bgImg from "../leaderboardfinal/05.png";

import Popupquestion from "../flipcard popup/Popupquestion";
import { getData } from "./Altovskwid";
import axios from "axios";
import { APIURL } from "../../App";

const Desvsaura = () => {
  const [count, setCount] = useState(5);
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .post(`${APIURL}/api/v1/wheelRoundQuestions`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundOrder: JSON.parse(localStorage.getItem("roundName")),
      })
      .then((res) => {
        setResult(res.data.data.questions);
        console.log(res, "Respnse");
      })
      .catch((error) => console.log(error.response.data.message));
  }, []);

  const getData = () => {
    axios
      .post(`${APIURL}/api/v1/finishround`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "2",
      })
      .then((res) => {
        console.log(JSON.parse(localStorage.getItem("mspin")), "MSPIN");
        console.log(res, "Response of roundlist");
        console.log(2, "Response of RoundName");
      })
      .catch((error) => console.log(error.response.data.message));
    // return false;
  };

  return (
    <>
      <Navbar></Navbar>

      {/* <h1>{cards}</h1> */}
      <img src={bgImg} alt="" className="flip-bg" />
      <div className="round-box bg-correct">
      Dzire ZXi+ Vs Aura SX+
      </div>
      {/* <h1>{cards}</h1> */}
      <div className="flex-container bg-correct">
        <div className="remain-container bg-correct">
          <p>Cards</p>
          <p>Remaining: {count}</p>
        </div>

        <div className="flex-container-child bg-correct">
          {result.map((item) => (
            <>
              <div
                className="flex-child bg-correct"
                onClick={() => {
                  {
                    count > 0 ? setCount(count - 1) : setCount(0);
                  }
                  setOpenModal(!item.isCorrect);
                }}
              >
                {console.log(item.cardTitle, "before Card Title")}

                <FlippableCard
                 title={item.cardTitle}
                  isCorrect={item.isCorrect}
                  cardQuestion={item.cardQuestion}
                  isCardQuestionDidabled={item.isCardQuestionDidabled}
                  cardQuestionId={item.cardQuestionId}
                />
                {/* {console.log(item.cardTitle, "Card Title")} */}
              </div>
              {openModal && !item.isCorrect && (
                <Popupquestion setOpenModal={setOpenModal} />
               )}
            </>
          ))}
        </div>
        <Link to="/">
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

export default Desvsaura;








