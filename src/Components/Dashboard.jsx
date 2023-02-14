import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Round 1 - Starting Interface</h1>
      </div>
      <div className="round-box">
        Rounds
      </div>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item-1">
          <button className="btn">1-A</button>
        </div>
        <div className="flexbox-item flexbox-item-1">
          <button className="btn">1-B</button>
        </div>
        <div className="flexbox-item flexbox-item-1">
          <button className="btn">2</button>
        </div>
        <div className="flexbox-item flexbox-item-1">
          <button className="btn">3</button>
        </div>
        <div className="flexbox-item flexbox-item-1">
          <button className="btn">4</button>
        </div>
        <div className="flexbox-item flexbox-item-1">
          <button className="btn">5</button>
        </div>
        <div className="flexbox-item flexbox-item-1">
          <button className="btn">6</button>
        </div>
        <div className="flexbox-item flexbox-item-1">
          <button className="btn">7</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
