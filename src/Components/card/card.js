import { Link } from "react-router-dom";
import "./card.css";
import "./flip-transition.css";

function Card({ onClick, title}) {

  return (
    <div className="card" onClick={onClick}>
      <div className="card-back "></div>
      <div className="card-front">
        <p className="text-on-card">{title}</p>
        <button
          className="middle card-front"
          onClick={() => setTimeout(() => window.open("../afterflip"), 290)}
        >
          hiii
        </button>
      </div>
    </div>
  );
}

export default Card;
