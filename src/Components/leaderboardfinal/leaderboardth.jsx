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
          <img src={trophy} alt="" className="resp-trophy resp-trophy-1"/> <img src={text} alt="" className="resp-text" />
          <img src={trophy} alt="" className="resp-trophy"/>
        </div>
        <img src={f} alt="" className="first"/>
        <h1 className="position-text align-lead-1">Abhishek</h1>
        <img src={s} alt="" className="second"/>
        <h1 className="position-text align-lead-2">Himanshu Malviya New</h1>
        <img src={t} alt="" className="thirdlast"/>
        <h1 className="position-text align-lead-3">Himanshu</h1>
      </div>
    </div>
  );
};

export default Leaderboardth;
