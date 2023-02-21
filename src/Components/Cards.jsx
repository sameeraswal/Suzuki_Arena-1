import { React, useEffect, useState } from "react";
import FlippableCard from "./FlippableCard";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Remaincard from "./Remaincard";

const Cards = () => {
  const data = [
    { id: 0, cardName: "Height" },
    { id: 1, cardName: "Length" },
    { id: 2, cardName: "Power" },
    { id: 3, cardName: "Torque" },
    { id: 4, cardName: "Bootspace" },
    { id: 5, cardName: "Mileage" },
    { id: 6, cardName: "Width" },
    { id: 7, cardName: "Wheelbase" },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="round-box">Flip a Card</div>
      {/* {showBack && ( */}
      <div className="flex-container">
        <Remaincard />

        <div className="flex-container-child">
          <div className="flex-child">
            <FlippableCard title={data[0].cardName} />
          </div>

          <div className="flex-child">
            <FlippableCard title={data[1].cardName} />
          </div>

          <div className="flex-child">
            <FlippableCard title={data[2].cardName} />
          </div>

          <div className="flex-child">
            <FlippableCard title={data[3].cardName} />
          </div>

          <div className="flex-child">
            <FlippableCard title={data[4].cardName} />
          </div>

          <div className="flex-child">
            <FlippableCard title={data[5].cardName} />
          </div>

          <div className="flex-child">
            <FlippableCard title={data[6].cardName} />
          </div>

          <div className="flex-child">
            <FlippableCard title={data[7].cardName} />
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Cards;
