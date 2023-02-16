import { Link } from "react-router-dom";
import "./card.css";
import "./flip-transition.css";

function Card({ onClick }) {
  return (
    <div className="card" onClick={onClick}>

      <div className="card-back "><Link to='/afterflip'><h1 className="middle">Hiii</h1></Link></div>
      <div className="card-front">
        <p>Front</p>
      </div>
    </div>
  );
}

export default Card;
