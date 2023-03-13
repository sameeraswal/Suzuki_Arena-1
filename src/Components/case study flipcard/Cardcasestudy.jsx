import { useState, useEffect } from "react";
import "../card/card.css";
import "../card/flip-transition.css";

function Cardcasestudy({ onClick, title }) {
  const [state, setState] = useState(0);

  const timeOutFun = (e) => {
    setTimeout(() => window.open("../afterflipcasestudy/", "_self"), 400);
    console.log(title);
  };

  useEffect(() => {
    setState(Math.trunc(0 + Math.random() * (8 - 0)));
    localStorage.setItem("random1", state);
  }, [state]);

  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-back card-back-1 back-case-study">{title}</div>

        <div className="card-front front-icon card-front-1">
          <button
            className="middle card-front front-icon"
            onClick={() => {
              timeOutFun();
              setState(state + 1);
              console.log(state);
            }}
          >
            hiii
          </button>
          <p
            onClick={() => {
              // timeOutFun();
            }}
            className="text-on-card"
          >
            {title}
          </p>
        </div>
      </div>
    </>
  );
}

export default Cardcasestudy;
