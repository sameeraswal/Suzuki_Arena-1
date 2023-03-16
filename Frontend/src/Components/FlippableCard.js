import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import React, { useEffect, useState } from "react";
import useDidMountEffect from "./Custumhook";
import { fal } from "./Afterflip";

function FlippableCard({
  title,
  isCorrect,
  cardQuestion,
  isCardQuestionDidabled,
  cardQuestionId,
  result,
  cardtitleImage1,
  cardtitleImage2,
  mspin
}) {
  const [showFront, setShowFront] = useState(true);

  // console.log("showFront");

  useEffect(() => {
    setShowFront(!isCardQuestionDidabled);
  }, [showFront]);

  // // useDidMountEffect(() => {
  // //   window.localStorage.setItem("cardState", JSON.stringify(false));
  // // }, [showFront]);
  // useEffect(() => {
  //   // timer();
  //   window.localStorage.setItem("cardState", JSON.stringify(true));
  // }, [showFront]);

  return (
    <div className="flippable-card-container ">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          title={title}
          isCorrect={isCorrect}
          cardQuestion={cardQuestion}
          cardQuestionId={cardQuestionId}
          result={result}
          cardtitleImage1={cardtitleImage1}
          cardtitleImage2={cardtitleImage2}
          mspin={mspin}
          onClick={() => {
            // setShowFront((v) => !v);

            setShowFront(false);
          }}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
