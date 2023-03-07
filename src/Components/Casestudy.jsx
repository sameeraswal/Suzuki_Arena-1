import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Casestudy = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="round-box">VAS Case Study</div>
      <div className="case-study-text">
        <p>
          Mr. Ramesh Sharma is a corporate (28 yrs) and stays in the city with
          his wife (working in the same office) and 1 kid (4 Years). He
          currently owns an Alto 800 (2019) and now has decided to buy Swift
          Lxi. He is very unsure of which bank to apply a loan from as there is
          slight difference in offering of each bank. Mr. Sharma is keen to pick
          up the new vehicle at lowest possible EMI. After delivery, he plans to
          take the vehicle to a local accessories shop and get the following
          accessories Alloy wheels | Leatherette Seat covers | Steering wheel
          cover | Projector headlamps Assure the customer using Maruti Suzuki
          Value Added Services.
        </p>
      </div>

      <Link to="/puzzlequestion">
        <button className="third icon-conatiner scoring-btn case-study-btn">
          Enter Score
        </button>
      </Link>
    </div>
  );
};

export default Casestudy;
