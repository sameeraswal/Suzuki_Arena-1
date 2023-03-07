import React from "react";
import Navbar from ".././Navbar";
import "./leaderboard.css";
import bg from "./02.png";
import text from "./01.png";
import trophy from "./09.png";

const Leaderboard = () => {
  let response = {
    status: true,
    data: [
      {
        regNo: "1",
        name: "parth",
        rank: "2",
        round: "1",
        score: "100",
        class: "lower-cut",
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "lower-cut",
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "upper-cut",
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "lower-cut",
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "upper-cut",
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "lower-cut",
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "upper-cut",
      },
    ],
  };
  let rounds = response.data;

  return (
    <>
      <Navbar></Navbar>
      <div className="leaderboard-container">
        <div className="leaderboard">
          <div className="description">
            <img src={trophy} alt="" className="resp-trophy resp-trophy-1" />{" "}
            <img src={text} alt="" className="resp-text" />
            <img src={trophy} alt="" className="resp-trophy" />
          </div>

          <div className="table-div">
            <div className="table-heading">
              <img src={bg} alt="" className="bg bg1" />
              <h1 className="text-on-img">Registration No</h1>
              <img src={bg} alt="" className="bg bg2" />
              <h1 className="text-on-img2">Name</h1>

              <img src={bg} alt="" className="bg bg4" />
              <h1 className="text-on-img3">Round 1-A</h1>
              <img src={bg} alt="" className="bg bg5" />
              <h1 className="text-on-img4">Round 1-B</h1>
              <img src={bg} alt="" className="bg bg6" />
              <h1 className="text-on-img5">Round 2</h1>
              <img src={bg} alt="" className="bg bg7" />
              <h1 className="text-on-img6">Round 3</h1>
              <img src={bg} alt="" className="bg bg8" />
              <h1 className="text-on-img7">Round 4</h1>
              <img src={bg} alt="" className="bg bg9" />
              <h1 className="text-on-img8">Round 5</h1>
              <img src={bg} alt="" className="bg bg10" />
              <h1 className="text-on-img9">Round 6</h1>
              <img src={bg} alt="" className="bg bg11" />
              <h1 className="text-on-img10">Round 7</h1>

              <img src={bg} alt="" className="bg bg5" />
              <h1 className="text-on-img11">Total Score</h1>
              <img src={bg} alt="" className="bg bg3" />
              <h1 className="text-on-img12">Rank</h1>
            </div>
            <table>
              <tbody>
                <br />

                {rounds.map((item) => (
                  <>
                    <tr>
                      <td className={item.class}>{item.regNo}</td>
                      <td className={item.class}>{item.name}</td>
                      <td className={item.class}>{item.round}</td>
                      <td className={item.class}>{item.round}</td>
                      <td className={item.class}>{item.round}</td>
                      <td className={item.class}>{item.round}</td>
                      <td className={item.class}>{item.round}</td>
                      <td className={item.class}>{item.round}</td>
                      <td className={item.class}>{item.round}</td>
                      <td className={item.class}>{item.round}</td>
                      <td className={item.class}>{item.score}</td>
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
