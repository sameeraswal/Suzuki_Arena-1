import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Timer from "./Timer";
import bgImg from "./NewImages/Spin-Wheel_BG.png";

const Dice = () => {
  const navigate = useNavigate();

  const randomDice = () => {
    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
      rollDice(random);
    } else {
      randomDice();
    }
  };

  const rollDice = (random) => {
    const dice = document.querySelector(".dice");
    if (dice) {
      dice.style.animation = "rolling 4s";
    } else {
      console.log("Not working");
    }

    setTimeout(() => {
      switch (random) {
        case 1:
          dice.style.transform = "rotateX(0deg) rotateY(0deg)";
          break;

        case 6:
          dice.style.transform = "rotateX(180deg) rotateY(0deg)";
          break;

        case 2:
          dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
          break;

        case 5:
          dice.style.transform = "rotateX(90deg) rotateY(0deg)";
          break;

        case 3:
          dice.style.transform = "rotateX(0deg) rotateY(90deg)";
          break;

        case 4:
          dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
          break;

        default:
          break;
      }

      dice.style.animation = "none";
    }, 4050);
  };
  return (
    <div>
      <Navbar />
      <img src={bgImg} alt="" className="background-image" />
      <div className="round-box">Dice</div>
      <div className="container1">
        <div className="dice">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
          <div className="face right"></div>
          <div className="face left"></div>
        </div>
      </div>
      <div className="dice-btn-pos">
        <button
          className="roll icon-conatiner"
          onClick={() => {
            randomDice();
          }}
        >
          Roll Dice
        </button>

        {JSON.parse(localStorage.getItem("categoryTypeofEmployee")) ===
          "Sales Captain" && (
          <Link to="/puzzlesrm">
            {" "}
            <button className="roll icon-conatiner">Enter Score</button>
          </Link>
        )}
        {JSON.parse(localStorage.getItem("categoryTypeofEmployee")) ===
          "Sales Expert" && (
          <Link to="/puzzlequestion">
            {" "}
            <button className="roll icon-conatiner">Enter Score</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Dice;
