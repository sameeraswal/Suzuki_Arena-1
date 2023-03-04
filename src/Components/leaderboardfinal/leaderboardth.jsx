import React from "react";
import Navbar from "../Navbar";
import "./leaderboardth.css";
import text from "./01.png";
import trophy from "./09.png";
import f from "./02.png";
import s from "./03.png";
import t from "./04.png";

const Leaderboardth = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-img">
        <div className="description">
          <img src={trophy} alt="" /> <img src={text} alt="" />
          <img src={trophy} alt="" />
        </div>
        <img src={f} alt="" className="first"/>
        <h1 className="position-text align-lead-1">Anvesh Mishra</h1>
        <img src={s} alt="" className="second"/>
        <h1 className="position-text align-lead-2">Garvit Garg</h1>
        <img src={t} alt="" className="thirdlast"/>
        <h1 className="position-text align-lead-3">Abhinav Jain</h1>
      </div>
    </div>
  );
};

export default Leaderboardth;
