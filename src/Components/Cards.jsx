import React from "react";
import FlippableCard from "./FlippableCard";

const Cards = () => {
  return (
    <div className="flex-container">
      <div className="flex-container-child">
        <div className="flex-child">
          <FlippableCard />
        </div>
        <div className="flex-child">
          <FlippableCard />
        </div>
        <div className="flex-child">
          <FlippableCard />
        </div>
        <div className="flex-child">
          <FlippableCard />
        </div>
        <div className="flex-child">
          <FlippableCard />
        </div>
        <div className="flex-child">
          <FlippableCard />
        </div>
        <div className="flex-child">
          <FlippableCard />
        </div>
        <div className="flex-child">
          <FlippableCard />
        </div>
      </div>
    </div>
  );
};

export default Cards;
