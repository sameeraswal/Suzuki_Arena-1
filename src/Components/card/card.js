import "./card.css";
import "./flip-transition.css";
import { Link } from "react-router-dom";
function Card({ onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back"></div>
      <div className="card-front front-remov">
        <p className="dummy">Front</p>
      </div>
    </div>
  );
}

export default Card;
