import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  const [color, setColor] = useState("#110781");
  const linker = document.querySelector(".link-slct");


  useEffect(() => {
    document.querySelector(".card-front").style.backgroundColor = color;
  }, [color]);

  return (
    <div className="scroll-remove">
      <div className="flippable-card-container">
        <CSSTransition in={showFront} timeout={300} classNames="flip">
          <Card
            onClick={() => {
              setShowFront((v) => !v);
              setColor("#A8A8A8");
              setShowFront(false);
            }}
          />
        </CSSTransition>
      </div>
    </div>
  );
}

export default FlippableCard;
