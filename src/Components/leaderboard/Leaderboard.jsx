import React from "react";
import Navbar from ".././Navbar";
import "./leaderboard.css";

const Leaderboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="leaderboard-container">
        <div className="leaderboard">
          <div className="description">
            <h3>Leaderboard</h3>
          </div>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>Player</td>
                <td>Score</td>
                <td>Average</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <p id="winner">Jose Brag</p>
                </td>
                <td>239</td>
                <td>12.54</td>
              </tr>
              <br />
              <tr>
                <td>2</td>
                <td>
                  <p id="runner-up"> Lily Simons</p>
                </td>
                <td>209</td>
                <td>10.2</td>
              </tr>
              <br />
              <tr>
                <td>3</td>
                <td>
                  <p id="second-runner-up"> Tom Higgle</p>
                </td>
                <td>154</td>
                <td>8.4</td>
              </tr>
              <br />
              <tr>
                <td>4</td>
                <td>
                  <p> Alex Roger</p>
                </td>
                <td>100</td>
                <td>3.1</td>
              </tr>
              <br />
              <tr>
                <td>5</td>
                <td>
                  <p> Mavie Ruth</p>
                </td>
                <td>82</td>
                <td>2.0</td>
              </tr>
              <br />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
