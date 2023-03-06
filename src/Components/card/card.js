import { Link } from "react-router-dom";
import Afterflip from "../Afterflip";
import "./card.css";
import "./flip-transition.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";


function Card({ onClick, title }) {
  const flipImg = require("../flipcard-img.jpg");
  const navigate = useNavigate();
  const timeOutFun = (e) => {
    setTimeout(() => window.open(`../afterflip/ ${title}`), 400);
    // console.log(title);
  };
  
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back card-back-border">{title}</div>

        <div className="card-front front-icon">
          <button
            className="middle card-front front-icon"
            onClick={() => {
              timeOutFun();
            }}
          >
            button
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
