import React from "react";

import "../card/flip-transition.css";
// import Card from "./Cardcasestudy";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import Cardcasestudy from "./Cardcasestudy";


const Flippablecasestudy = () => {
  const [showFront, setShowFront] = useState(true);

  // console.log("showFront");
  const [color, setColor] = useState("#110781");

  return (
  
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Cardcasestudy
          title={""}
          value={""}
          onClick={() => {
            // setShowFront((v) => !v);
            setColor("#A8A8A8");
            setShowFront(false);
          }}
        />
      </CSSTransition>
    </div>
  );
};

export default Flippablecasestudy;
