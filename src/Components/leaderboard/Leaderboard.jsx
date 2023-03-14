import React, { useRef } from "react";
import Navbar from ".././Navbar";
import "./leaderboard.css";
// import bg from "./02.png";
// import text from "./Scoreboard.png";
// import trophy from "./09.png";
// import bgImg from '../../Assets/Leaderboard/02.png'
import { APIURL } from "../../App";
import axios from "axios";
import { useEffect, useState } from "react";
import headImg from "../../Assets/ScoreboardNew/RM.png";
import userImg from "../../Assets/ScoreboardNew/04.png";
import titlesImg from "../../Assets/Leaderboard/06.png";
import { useNavigate } from "react-router-dom";
import { DownloadTableExcel } from "react-export-table-to-excel";

const Leaderboard = () => {
  const navigate = useNavigate();
  const [round, setRound] = useState([]);
  const [rounds, setRounds] = useState([]);

  const [finalscore, setFinalscore] = useState([]);

  // const round1A="1-A";
  const mspin = JSON.parse(localStorage.getItem("mspin"));
  let categoryType = "Sales Expert";

  useEffect(() => {
    axios
      .post(`${APIURL}/api/v1/quiz/scoreboard/category`, {
        categoryType: categoryType,
      })
      .then((res) => {
        setRound(res.data.data.scoreBoard);
        // setRounds(res.data.data.scoreBoard.rounds);
        console.log(res);
      })
      .catch((error) => console.log(error, "error is here"));
  }, []);

  const tableRef = useRef(null);
  return (
    <>
      <Navbar></Navbar>
      <button
        className="roll leader-btn icon-conatiner"
        onClick={() => {
          navigate("/scoreboardsrm");
        }}
      >
        Toggle to SRM
      </button>
      <img src={headImg} alt="" className="head-image-scoreboard" />
      {/* <img src={titlesImg} alt="" className="title-image" /> */}

      <div className="leaderboard-container">
        <div className="leaderboard">
          <div className="table-div">
            <div className="table-heading"></div>
            <DownloadTableExcel
              filename="RM Scoreboard"
              sheet="users"
              currentTableRef={tableRef.current}
            >
              <button className="roll icon-conatiner export">
                {" "}
                Export excel{" "}
              </button>
            </DownloadTableExcel>
            <table ref={tableRef}>
              <td className="table-content-2">Reg No.</td>
              <td className="table-content-2">
                <p>Name</p>
              </td>
              <td className="table-content-2">Round 1-A</td>
              <td className="table-content-2">Round 1-B</td>
              <td className="table-content-2">Round 2</td>
              <td className="table-content-2">Round 3</td>
              <td className="table-content-2">Round 4</td>
              <td className="table-content-2">Round 5</td>
              <td className="table-content-2">Round 6</td>
              <td className="table-content-2">Round 7</td>
              <td className="table-content-2">Total Score</td>
              <td className="table-content-2">Rank</td>

              {round.map((item) => (
                <>
                  <tr>
                    <td className="table-content">{item.registrationNumber}</td>

                    <td className="table-content-name" width="25%">
                      {item.name}
                    </td>
                    <td className="table-content" width="8%">
                      {item.rounds["1-A"] === undefined
                        ? "NA"
                        : item.rounds["1-A"]}
                    </td>
                    <td className="table-content" width="8%">
                      {item.rounds["1-B"] === undefined
                        ? "NA"
                        : item.rounds["1-B"]}
                    </td>
                    <td className="table-content">
                      {item.rounds["2"] === undefined ? "NA" : item.rounds["2"]}
                    </td>
                    <td className="table-content">
                      {item.rounds["3"] === undefined ? "NA" : item.rounds["3"]}
                    </td>
                    <td className="table-content">
                      {item.rounds["4"] === undefined ? "NA" : item.rounds["4"]}
                    </td>
                    <td className="table-content">
                      {item.rounds["5"] === undefined ? "NA" : item.rounds["5"]}
                    </td>
                    <td className="table-content">
                      {item.rounds["6"] === undefined ? "NA" : item.rounds["6"]}
                    </td>
                    <td className="table-content">
                      {item.rounds["7"] === undefined ? "NA" : item.rounds["7"]}
                    </td>
                    <td className="table-content">
                      {item.totalScoreOfAllRounds}
                    </td>
                    <td className="table-content">{item.rank}</td>
                  </tr>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
