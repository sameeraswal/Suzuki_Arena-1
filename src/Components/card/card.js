import "./card.css";
import "./flip-transition.css";

function Card({onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">Back</div>
      <div className="card-front"><p className="no-text">Front</p></div>
    </div>
  );
}

export default Card;
