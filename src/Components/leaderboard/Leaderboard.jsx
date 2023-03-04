import React from "react";
import Navbar from ".././Navbar";
import "./leaderboard.css";
import bg from "./02.png";
import text from "./01.png";
import trophy from "./09.png";

const Leaderboard = () => {
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
                <tr>
                  <td className="lower-cut">1</td>
                  <td className="lower-cut">
                    <p id="winner">Name-1</p>
                  </td>
                  <td className="lower-cut">2</td>
                  <td className="lower-cut">4</td>
                  <td className="lower-cut">100</td>
                </tr>

                <tr>
                  <td className="upper-cut">2</td>
                  <td className="upper-cut">
                    <p id="runner-up">Name-2</p>
                  </td>
                  <td className="upper-cut">2</td>
                  <td className="upper-cut">4</td>
                  <td className="upper-cut">100</td>
                </tr>

                <tr>
                  <td className="lower-cut">3</td>
                  <td className="lower-cut">
                    <p id="second-runner-up">Name-3</p>
                  </td>
                  <td className="lower-cut">2</td>
                  <td className="lower-cut">4</td>
                  <td className="lower-cut">100</td>
                </tr>

                <tr>
                  <td className="upper-cut">4</td>
                  <td className="upper-cut">
                    <p>D</p>
                  </td>
                  <td className="upper-cut">2</td>
                  <td className="upper-cut">4</td>
                  <td className="upper-cut">100</td>
                </tr>

                <tr>
                  <td className="lower-cut">5</td>
                  <td className="lower-cut">
                    <p>E</p>
                  </td>
                  <td className="lower-cut">2</td>
                  <td className="lower-cut">4</td>
                  <td className="lower-cut">100</td>
                </tr>

                <tr>
                  <td className="upper-cut">6</td>
                  <td className="upper-cut">
                    <p>E</p>
                  </td>
                  <td className="upper-cut">2</td>
                  <td className="upper-cut">4</td>
                  <td className="upper-cut">100</td>
                </tr>

                <tr>
                  <td className="lower-cut">7</td>
                  <td className="lower-cut">
                    <p>E</p>
                  </td>
                  <td className="lower-cut">2</td>
                  <td className="lower-cut">4</td>
                  <td className="lower-cut">100</td>
                </tr>

                <tr>
                  <td className="upper-cut">8</td>
                  <td className="upper-cut">
                    <p>E</p>
                  </td>
                  <td className="upper-cut">2</td>
                  <td className="upper-cut">4</td>
                  <td className="upper-cut">100</td>
                </tr>

                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
                <tr>
                  <td>8</td>
                  <td>
                    <p>E</p>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>100</td>
                </tr>
                <br />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
