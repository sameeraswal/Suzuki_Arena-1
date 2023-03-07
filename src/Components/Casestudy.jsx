import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Casestudy = () => {
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
          consideration from the brand.
          Assure the customer using Maruti Suzuki Value Added Services.
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
