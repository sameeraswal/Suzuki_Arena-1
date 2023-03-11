import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { APIURL } from "../App";
import Navbar from "./Navbar";

const Casestudy = () => {
  const getData = () => {
    axios
      .post(`${APIURL}/api/v1/finishround`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "4",
      })
      .then((res) => {
        console.log(JSON.parse(localStorage.getItem("mspin")), "MSPIN");
        console.log(res, "Response of roundlist");
        // console.log(roundName, "Response of RoundName");
      })
      .catch((error) => console.log(error.response.data.message));
    // return false;
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="round-box">Case 2 Extended warranty + Rewards</div>
      <div className="case-study-text">
        <p>
          Mr. Ranjan Dalal owns a garment shop in the local city market. He is
          upgrading from his Wagon R (2017) to Brezza Vxi AMT and he wants a
          bigger vehicle for his family. He wants to keep service and
          maintenance costs low. He is worried that upgrading to a larger
          vehicle will attract big bills on service, spares parts and accidental
          damages (out of scope of warranty). He fears that most of the problems
          come right after the vehicle is out of its warranty period. Despite
          spending additionally on warranty and service coverages there is no
          consideration from the brand. Assure the customer using Maruti Suzuki
          Value Added Services.
        </p>
      </div>

      <Link to="/puzzlecase">
        <button
          className="third icon-conatiner scoring-btn case-study-btn"
          onClick={getData}
        >
          Enter Score
        </button>
      </Link>
    </div>
  );
};

export default Casestudy;
