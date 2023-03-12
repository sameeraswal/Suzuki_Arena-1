import React from "react";
import Navbar from ".././Navbar";
import "./leaderboard.css";
// import bg from "./02.png";
// import text from "./Scoreboard.png";
// import trophy from "./09.png";
// import bgImg from '../../Assets/Leaderboard/02.png'
import { APIURL } from "../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import headImg from '../../Assets/ScoreboardNew/RM.png'
import userImg from '../../Assets/ScoreboardNew/04.png'
import titlesImg from '../../Assets/Leaderboard/06.png'
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const navigate = useNavigate();
  const [round, setRound] = useState([]);
  const [rounds, setRounds] = useState([]);

  const [finalscore, setFinalscore] = useState([]);

  // const round1A="1-A";
  const mspin = JSON.parse(localStorage.getItem("mspin"));
  // const fetchData = async () => {
  // const player1 = `${APIURL}/api/v1/round/roundscore`;
  // const player2 = `${APIURL}/api/v1/quiz/employee/currentscore`;
  //   const player3 = `${APIURL}/api/v1/quiz/finalscore/leaderboard`;
  //   const getPlayer2 = axios.post(player2, {
  //     mspin: mspin,
  //   });
  //   const getPlayer3 = axios.get(player3);
  //   axios.all([getPlayer2, getPlayer3]).then(
  //     axios.spread((...allData) => {
  //       const allPlayer1 = allData[0];
  //       const allPlayer2 = allData[1];
  //       console.log(allPlayer1);
  //       console.log(allPlayer2);
  //     })
  //   );
  // };
  useEffect(() => {
    // alert("Page is running");
    // fetchData();
    axios
      .get(`${APIURL}/api/v1/quiz/scoreboard`)
      .then((res) => {
        setRound(res.data.data.scoreBoard);
        setRounds(res.data.data.scoreBoard.rounds);
        // setFinalscore(res.data.data.leaderboard.finalScore)
        // console.log(res.data.data.leaderboard[1].finalScore)

        console.log(res);
      })
      .catch((error) => console.log(error, "error is here"));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <button
        className="roll leader-btn icon-conatiner"
        onClick={() => navigate("/scoreboardsrm")}
      >
        Toggle to SRM
      </button>
      <img src={headImg} alt="" className="head-image-scoreboard" />
      <img src={titlesImg} alt="" className="title-image" />

      <div className="leaderboard-container">
        <div className="leaderboard">
          {/* <div className="description">
            <img src={trophy} alt="" className="resp-trophy resp-trophy-1" />
            <img src={text} alt="" className="resp-text" />
            <img src={trophy} alt="" className="resp-trophy" />
          </div> */}

          <div className="table-div">
            <div className="table-heading">
            </div>
            <table>
              <tbody>
                <br />

                {round.map((item) => (
                  <>
                    <tr>
                      <td className={item.class}>{item.registrationNumber}</td>
                      <td className={item.class}>{item.name}</td>
                      <td className={item.class}>
                        {item.rounds["1-A"] === undefined
                          ? "NA"
                          : item.rounds["1-A"]}
                      </td>
                      <td className={item.class}>
                        {item.rounds["1-B"] === undefined
                          ? "NA"
                          : item.rounds["1-B"]}
                      </td>
                      <td className={item.class}>
                        {item.rounds["2"] === undefined
                          ? "NA"
                          : item.rounds["2"]}
                      </td>
                      <td className={item.class}>
                        {item.rounds["3"] === undefined
                          ? "NA"
                          : item.rounds["3"]}
                      </td>
                      <td className={item.class}>
                        {item.rounds["4"] === undefined
                          ? "NA"
                          : item.rounds["4"]}
                      </td>
                      <td className={item.class}>
                        {item.rounds["5"] === undefined
                          ? "NA"
                          : item.rounds["5"]}
                      </td>
                      <td className={item.class}>
                        {item.rounds["6"] === undefined
                          ? "NA"
                          : item.rounds["6"]}
                      </td>
                      <td className={item.class}>
                        {item.rounds["7"] === undefined
                          ? "NA"
                          : item.rounds["7"]}
                      </td>
                      <td className={item.class}>
                        {item.totalScoreOfAllRounds}
                      </td>
                      <td className={item.class}>{item.rank}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
