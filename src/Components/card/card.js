import { Link } from "react-router-dom";
import Afterflip from "../Afterflip";
import "./card.css";
import "./flip-transition.css";

function Card({ onClick, title }) {
  //   const myFun = (e) => {
  //     alert(e.currentTarget.title);
  //   };

  return (
    <div className="card" onClick={onClick}>
      <div className="card-back "></div>
      <div className="card-front">
        <button
          className="middle card-front"
          onClick={() => setTimeout(() => window.open("../afterflip"), 290)}
        >
          {/* {console.log(`afterflip+${value}`)} */}
          hiii
        </button>
        <p
          onClick={() => setTimeout(() => window.open("../afterflip"), 290)}
          className="text-on-card"
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default Card;
