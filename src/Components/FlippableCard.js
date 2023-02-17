import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";


function FlippableCard({title}) {
  const [showFront, setShowFront] = useState(true);
  const [color, setColor] = useState("#110781");

  return (
    <div className="scroll-remove">
      <div className="flippable-card-container">
        <CSSTransition in={showFront} timeout={300} classNames="flip">
          <Card title={title}
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
