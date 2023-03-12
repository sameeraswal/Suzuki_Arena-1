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

const Leaderboardth = () => {
  const [round, setRound] = useState([]);
  const [name1, setName1] = useState([]);
  const [name2, setName2] = useState([]);

  const [name3, setName3] = useState([]);
  const arr = [];
  useEffect(() => {
    // alert("Page is running");
    // fetchData();
    axios
      .get(`${APIURL}/api/v1/quiz/scoreboard`)
      .then((res) => {
        setRound(res.data.data.scoreBoard);
        // console.log(res)
      })
      .catch((error) => console.log(error, "error is here"));
  }, []);
  // let j = 0;
  // for (let i = 0; i < 3; i++) {
  //   arr[i] = round[j++];
  //   console.log(arr[i], "arr");
  // }
  return (
    <div>
      <Navbar />
      <div className=" bg-img">
        <div className="description">
          <img src={trophy} alt="" className="resp-trophy resp-trophy-1" />{" "}
          <img src={text} alt="" className="resp-text" />
          <img src={trophy} alt="" className="resp-trophy" />
        </div>
        {/* {arr.map((item) => (
          <> */}
        <img src={f} alt="" className="first" />
        <h1 className="position-text align-lead-1">{}</h1>
        <img src={s} alt="" className="second" />
        <h1 className="position-text align-lead-2">{}</h1>
        <img src={t} alt="" className="thirdlast" />
        <h1 className="position-text align-lead-3">{}</h1>
        {/* </>
        ))} */}
      </div>
    </div>
  );
};

export default Leaderboardth;
