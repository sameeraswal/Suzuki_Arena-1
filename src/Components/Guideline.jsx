import React from "react";
import { Link } from "react-router-dom";

const Guideline = () => {
  return (
    <div>
      <div class="modal ">
        <div className="">
          <div className="first-mile-heading">
            <h1>The First Mile - Guidelines</h1>
          </div>
          <div>
            <Link to="/randomizer">
              <button className="guide-close-modal">&times;</button>
            </Link>
          </div>
        </div>
        <div style={{ listStyleType: "disc" }}>
          <div className="bold">
            First round will be based on images or videos in which{" "}
            <b>5 questions </b>
            would display as per randomizer. The duration of this round would be
            <b> 1 minute </b> per question.
          </div>
          <p className="bold">Each question carries 10 marks</p>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
  );
};

export default Guideline;
