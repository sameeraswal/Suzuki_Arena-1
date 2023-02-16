import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Linkcmp from "./Linkcmp";

function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  const [color, setColor] = useState("#110781");

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
