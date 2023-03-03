import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "./Navbar";
import wordpattern from "./wordpattern.jpg";
// import openbook from "./open-book.svg";

const Puzzle = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="round-box-dashboard">Puzzle</div>
        <div className="puzzle-position">
          <img
            src={wordpattern}
            alt="pattern"
            height={400}
            width={400}
            className="puzzle-img"
            //   style={{ marginLeft: "37%", marginTop: "30px" }}
          />
        </div>

        <button className="third icon-conatiner scoring-btn">
          <p>Open Scoring Sheet</p>
          <FontAwesomeIcon icon="fa-solid fa-book-open" />
        </button>
      </div>
    </div>
  );
};

export default Puzzle;
