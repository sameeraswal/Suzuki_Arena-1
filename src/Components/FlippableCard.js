import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";

function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  const [color, setColor] = useState("#110781");
  const [disable, setDisable] = useState(false);
  const disable_class = document.querySelector(".card");

  const disableClickHandler = () => {
    disable_class.classList.add("no-flip");
    disable_class.classList.add("no-text");
    // disable_class.classList.remove("flip-enter-active");
    // disable_class.classList.remove("flip-enter");
    // disable_class.classList.remove("flip-exit-done");
    // disable_class.classList.remove("flip-exit");
    // disable_class.classList.remove("flip-exit-active");
    // disable_class.classList.remove("card-back");

    console.log("I am");
  };

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
              disableClickHandler();
            }}
          />
        </CSSTransition>
      </div>
    </div>
  );
}

export default FlippableCard;
