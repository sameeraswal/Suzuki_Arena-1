import React from "react";
import Navbar from "../Navbar";
import headImg from "../../Assets/ScoreboardNew/SRM.png";
import userImg from "../../Assets/ScoreboardNew/04.png";
import titlesImg from "../../Assets/Leaderboard/06.png";
import { useNavigate } from "react-router-dom";

const Leaderboardsrm = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <button
        className="roll leader-btn icon-conatiner"
        onClick={() => navigate("/leaderboard")}
      >
        Toggle to RM
      </button>
      <img src={headImg} alt="" className="head-image-scoreboard" />
      {/* <img src={titlesImg} alt="" className="title-image" /> */}

      <div className="leaderboard-container">
        <div className="leaderboard">
          <div className="table-div">
            <div className="table-heading"></div>
            <table>
              <tbody>
                <br />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboardsrm;
