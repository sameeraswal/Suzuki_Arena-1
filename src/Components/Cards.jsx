import React from "react";
import FlippableCard from "./FlippableCard";
import Navbar from "./Navbar";

const Cards = () => {
  return (
    <>
      <Navbar></Navbar>
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
    </>
  );
};

export default Cards;
