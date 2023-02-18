import React from "react";
import Navbar from "./Navbar";
const Dice = () => {
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
        <button className="roll" onClick={randomDice}>
          Roll Dice
        </button>
      </div>
    </div>
  );
};

export default Dice;
