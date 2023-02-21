import { Link } from "react-router-dom";
import Afterflip from "../Afterflip";
import "./card.css";
import "./flip-transition.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

function Card({ onClick, title }) {
  const navigate = useNavigate();
  const timeOutFun = (e) => {
    setTimeout(() => window.open("../afterflip/" + title), 400);
    // console.log(title);
  };

  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back"></div>

        <div className="card-front">
          <button
            className="middle card-front"
            onClick={() => {
              timeOutFun();
            
            }}
          >
            hiii
          </button>
          <p
            onClick={() => {
              timeOutFun();
              

            }}
            className="text-on-card"
          >
            {title}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
