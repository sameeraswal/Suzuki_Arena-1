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
        class: "lower-cut"
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "lower-cut"
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "upper-cut"
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "lower-cut"
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "upper-cut"
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "lower-cut"
      },
      {
        regNo: "2",
        name: "parth1",
        rank: "3",
        round: "4",
        score: "80",
        class: "upper-cut"
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
            <img src={trophy} alt="" /> <img src={text} alt="" />
            <img src={trophy} alt="" />
          </div>

          <div className="table-div">
            <img src={bg} alt="" className="bg bg1" />
            <h1 className="text-on-img">Registration No</h1>
            <img src={bg} alt="" className="bg bg2" />
            <h1 className="text-on-img2">Name</h1>
            <img src={bg} alt="" className="bg bg3" />
            <h1 className="text-on-img3">Rank</h1>
            <img src={bg} alt="" className="bg bg4" />
            <h1 className="text-on-img4">Rounds</h1>
            <img src={bg} alt="" className="bg bg5" />
            <h1 className="text-on-img5">Total Score</h1>
            <table>
              {/* <thead>
                <tr>
                  <td className="lead-head bg"></td>
                  <td className="lead-head bg1">Name</td>
                  <td className="lead-head bg">Rank</td>
                  <td className="lead-head bg">Rounds</td>
                  <td className="lead-head bg">Total Score</td>
                </tr>
              </thead> */}

              <tbody>
                <br />
                

                {rounds.map((item) => (
                  <>
                    <tr>
                      <td className={item.class}>{item.regNo}</td>
                      <td className={item.class}>
                        <p id="winner">{item.name}</p>
                      </td>
                      <td className={item.class}>{item.rank}</td>
                      <td className={item.class}>{item.round}</td>
                      <td className={item.class}>{item.score}</td>
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
