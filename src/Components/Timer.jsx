import React, { useState, useRef, useEffect } from "react";
import Popupexample from "./flipcard popup/Popup";
import Popupquestion from "./flipcard popup/Popupquestion";

const Timer = () => {
  const [openModel, setOpenModal] = useState(true);
  const imgsrc = require("./stop.png");
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("01:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("01:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <>
      <div className="timer-div">
        <h2>{timer}</h2>
        <img src={imgsrc} alt="" className="clock-img" />
        
      </div>
      <div>
        {timer === "00:00" && openModel && (
          <Popupexample setOpenModal={setOpenModal} />
        )}
      </div>
    </>
  );
};

export default Timer;
