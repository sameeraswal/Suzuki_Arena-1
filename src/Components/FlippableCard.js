import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import React, { useEffect, useState } from "react";
import useDidMountEffect from "./Custumhook";
import { fal } from "./Afterflip";



function FlippableCard({ title, key }) {
  const [showFront, setShowFront] = useState(true);
  
  
  // console.log("showFront");
  const [color, setColor] = useState("#110781");

  // useEffect(() => {
  //   const data = window.localStorage.getItem("cardState");
  //   if (data !== null) {
  //     setShowFront(JSON.parse(data));
  //   }
  // }, []);

  // // useDidMountEffect(() => {
  // //   window.localStorage.setItem("cardState", JSON.stringify(false));
  // // }, [showFront]);
  // useEffect(() => {
  //   // timer();
  //   window.localStorage.setItem("cardState", JSON.stringify(true));
  // }, [showFront]);

  return (
    <div className="flippable-card-container">
    
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          
          title={title}
          value={key}
          onClick={() => {
            // setShowFront((v) => !v);
            setColor("#A8A8A8");
            setShowFront(false);
            
          }}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
