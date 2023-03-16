import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);

  return ` ${getMinutes>=0 ? getMinutes : "00"} : ${getSeconds >= 0 ? getSeconds : "00"}`
};

const Timermin = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(240);

  return (
    <div className="timer-app time-container">
      
      <div className="stopwatch-card">
        <p className="timer-txt">{formatTime(timer)}</p>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart} className="roll icon-conatiner timer-margin">Start</button>
          ) : isPaused ? (
            <button onClick={handlePause} className="roll icon-conatiner timer-margin">Pause</button>
          ) : (
            <button onClick={handleResume} className="roll icon-conatiner timer-margin">Resume</button>
          )}

          <Link to="/puzzle">
            <button
              className="roll icon-conatiner"
              
            >
              Enter Score
            </button>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(4);
  };

  return {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
};


export default Timermin;