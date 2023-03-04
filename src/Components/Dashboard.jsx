import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import lock from "./Lock.png";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      {/* <div>
        <h1>Round 1 - Starting Interface</h1>
      </div> */}
      <div className="dashboard-container">
        <div className="round-box-dashboard">Rounds</div>
        <div className="flexbox-container">
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/firstmile">
              <button className="btn">1-A</button>
            </Link>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/chasethemaze">
              <button className="btn">1-B</button>
            </Link>
            {/* {isLocked && (<img */}
            <img
              src={lock}
              alt="lock"
              height={20}
              width={20}
              className="lock-div"
            />
            {/* )} */}
          </div>

          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/eyeforaneye">
              <button className="btn">2</button>
            </Link>
            <img
              src={lock}
              alt="lock"
              height={20}
              width={20}
              className="lock-div"
            />
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/bespokesalespitch">
              <button className="btn">3</button>
              <img
                src={lock}
                alt="lock"
                height={20}
                width={20}
                className="lock-div"
              />
            </Link>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/solutionsonly">
              <button className="btn">4</button>
              <img
                src={lock}
                alt="lock"
                height={20}
                width={20}
                className="lock-div"
              />
            </Link>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/askexpress">
              <button className="btn">5</button>
              <img
                src={lock}
                alt="lock"
                height={20}
                width={20}
                className="lock-div"
              />
            </Link>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/listthetwist">
              <button className="btn">6</button>
              <img
                src={lock}
                alt="lock"
                height={20}
                width={20}
                className="lock-div"
              />
            </Link>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/judgesround">
              <button className="btn">7</button>
              <img
                src={lock}
                alt="lock"
                height={20}
                width={20}
                className="lock-div"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
