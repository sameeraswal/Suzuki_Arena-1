import React, { useState } from "react";
import Navbar from "./Navbar";
// import enterscore from "./enterscore.jpeg";
import bgImg from "./scorebg.png";
import bgImg1 from "./score02.png";
import Finishmodal from "./Modalframmer/finishmodal";

import { motion, AnimatePresence } from "framer-motion";
import ModalFrammer from "./ModalFrammer";

import "./modalcss.css";
import Finishmodal3 from "./Modalframmer/finishmodal3";
import Finishmodalenter from "./Modalframmer/finishmodalenter";
import axios from "axios";
import { APIURL } from "../App";
import { Link } from "react-router-dom";

const Enterscore5 = () => {
  const [score, setScore] = useState("");

  const [show, setShow] = useState(false);
  const handleChangescore = (event) => {
    setScore(event.target.value);
  };
  const fetchData = () => {
    console.log(score, JSON.parse(localStorage.getItem("mspin")));
    axios
      .post(`${APIURL}/api/v1/round/submitScoreForRound`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "5",
        score: score,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="enter-score-container">
        <img src={bgImg} alt="" className="score-bg-img" />
        <img src={bgImg1} alt="" className="vector-img" height={5} width={5} />
        {show && (
          <input
            type="text"
            placeholder="score"
            className="input-correct inputscore-btn"
            onChange={handleChangescore}
          />
        )}
        {/* {data && ( */}
        {/* <Link to="/puzzle"> */}
        <button
          className="roll icon-conatiner btn-width scorepage-btn"
          onClick={() => {
            setShow(true);
          }}
        >
          Enter Score
        </button>
      </div>
      <Link to="/">
        <button
          className="roll icon-conatiner finish-card finish-btn-enter-score"
          onClick={fetchData()}
        >
          Finish Round
        </button>
      </Link>
    </div>
  );
};

export default Enterscore5;