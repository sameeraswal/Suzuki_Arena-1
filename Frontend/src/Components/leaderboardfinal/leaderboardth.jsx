import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./leaderboardth.css";
import text from "./01.png";
import trophy from "./09.png";
import f from "./02.png";
import s from "./03.png";
import t from "./04.png";
import axios from "axios";
import { APIURL } from "../../App";
import bgImg1 from "../../Assets/Leaderboard.png";
import headImg from "../../Assets/ScoreboardNew/RM.png";
import lead from "./01.png";
import { useNavigate } from "react-router-dom";

const Leaderboardth = () => {
  const navigate = useNavigate();
  const [round, setRound] = useState([]);
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const arr = [];
  let categoryType = "Sales Expert";
  useEffect(() => {
    // alert("Page is running");
    // fetchData();
    axios
      .post(`${APIURL}/api/v1/quiz/scoreboard/category`, {
        categoryType: categoryType,
      })
      .then((res) => {
        // setRound(res.data.data.scoreBoard);
        console.log(res)
        setName(res.data.data.scoreBoard[0].name);
        setName1(res.data.data.scoreBoard[1].name);
        setName2(res.data.data.scoreBoard[2].name);
      })
      .catch((error) => console.log(error, "error is here"));
  }, []);

  return (
    <div>
      <Navbar />
      <button
        className="roll leader-btn icon-conatiner"
        onClick={() => navigate("/leaderboardfinalsrm")}
      >
        Toggle to SRM
      </button>
      <img src={lead} alt="" className="lead-pos" />
      <img src={bgImg1} alt="" className="background-image" />
      <h1 className="position-text align-lead-1">{name}</h1>
      <h1 className="position-text align-lead-2">{name1}</h1>
      <h1 className="position-text align-lead-3">{name2}</h1>
    </div>
  );
};

export default Leaderboardth;
