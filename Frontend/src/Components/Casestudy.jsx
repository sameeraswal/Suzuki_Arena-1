import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { APIURL } from "../App";
import Navbar from "./Navbar";
import {useState} from 'react';
import bgImage from '../Assets/Dice_BG.png'


function getValue(){
  return localStorage.getItem('random1')
  
}

const Casestudy = () => {
   const [data1, setData1] = useState(getValue)
   
   const casestudydata = [
    {
      id: 0,
      title: "Case 1",
      description: "Mr. Ramesh Sharma is a corporate (28 yrs) and stays in the city with his wife (working in the same office) and 1 kid (4 Years). He currently owns an Alto 800 (2019) and now has decided to buy Swift Lxi.He is very unsure of which bank to apply a loan from as there is slight difference in offering of each bank. Mr. Sharma is keen to pick up the new vehicle at lowest possible EMI.After delivery, he plans to take the vehicle to a local accessories shop and get the following accessories Alloy wheels | Leatherette Seat covers | Steering wheel cover | Projector headlamps Assure the customer using Maruti Suzuki Value Added Services."
    },
    {
      id: 1,
      title: "Case 2",
      description: "Mr. Ranjan Dalal owns a garment shop in the local city market. He is upgrading from his Wagon R (2017) to Brezza Vxi AMT and he wants a bigger vehicle for his family. He  wants to keep service and maintenance costs low. He is worried that upgrading to a larger vehicle will attract big bills on service, spares parts and accidental damages (out of scope of warranty). He fears that most of the problems come right after the vehicle is out of its warranty period. Despite spending additionally on warranty and service coverages there is no consideration from the brand. Assure the customer using Maruti Suzuki Value Added Services."
    },
    {
      id: 2,
      title: "Case 3",
      description: "Mr. Mithun Deb is an editor in a local news channel. He stay with his parents, wife and 2 children (aged 8 and 6 Yrs). He is upgrading from his Ritz (2016) to Ertiga.Mr Deb has contacted a local broker who is helping him sell his old car and also arrange for a loan for the Ertiga Mr. Deb has been confirmed the best (highest) price for his old car by the broker. The broker has given him a double deal for old car sale and loan from an NBFC @  very competitive interest rates.Assure the customer using Maruti Suzuki Value Added Services."
    },
    {
      id: 3,
      title: "Case 4",
      description: "Mr. Rohan Prakash is a manager with an IT consulting firm. Being a digital lead, you have been interacting digitally with the customer. He is upgrading from his Alto (2018) to Swift Vxi. For the purchase, he has already spoken to his bank (where he has his salary account) but is unable to find the time to visit his branch. The bank has also suggested its in house insurance policy but the customer isn't very sure about the coverage he is getting. Assure the customer using Maruti Suzuki Value Added Services."
    },
    {
      id: 4,
      title: "Case 5",
      description: "Mr. Vikram Diwan is a businessman and he is buying a new car for his wife. Mrs. Diwan currently drives a Celerio Lxi (2018). The couple are interested in the Brezza LXi but Mrs. Diwan is concerned about her ability to drive the larger vehicle. She finds her current car to be very nimble and easy to drive in the city. After delivery, she plans to visit a local accessories shop and get the following accessories Alloy wheels | Leatherette Seat covers | Steering wheel cover | Projector headlamps Assure the customer using Maruti Suzuki Value Added Services."
    },
    {
      id: 5,
      title: "Case 6",
      description: "Mr. Dheeresh Garg is newly wed and works in an MNC as a junior manager. He currently drives an Alto 800 (2015) which was gifted to him by his father. He is very unsure of which bank to apply a loan from as there is slight difference in offering of each bank. Mr. Garg is keen to pick up the new vehicle at lowest possible EMI. He is not very convinced with local brokers and online exchange companies for selling his Alto-800. Assure the customer using Maruti Suzuki Value Added Services."
    },
    {
      id: 6,
      title: "Case 7",
      description: "Mr. Sunil Gupta is a teacher in a private school. He stays with his wife and son (3 year old)He is upgrading from his Alto 800 (2018) to Dzire Vxi. He  wants to keep service and maintenance costs low. He is worried that upgrading to a larger vehicle will attract big bills on service, spares parts and accidental damages (out of scope of warranty). His past experience while claiming insurance wasn't very smooth and so he wants to get a policy from a renowned insurance company. Assure the customer using Maruti Suzuki Value Added Services."
    },
    {
      id: 7,
      title: "Case 8",
      description: "Mr. Jeevan Lal wants to buy a larger car for his family. He stays with his wife and 2 children (aged 9 & 7 yrs) He currently owns an Celerio 800 (2019) and now has decided to buy DZire Lxi. Mr. Lal has been approched by Hyundai to consider Aura with an exchange offer. He has been assured of the best price for his existing car. After delivery, he plans to take the vehicle to a local accessories shop and get the following accessories Alloy wheels | Leatherette Seat covers | Steering wheel cover | Projector headlamps Assure the customer using Maruti Suzuki Value Added Services."
    },
   
  ];


  const getData = () => {
    axios
      .post(`${APIURL}/api/v1/finishround`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "4",
      })
      .then((res) => {
        console.log(JSON.parse(localStorage.getItem("mspin")), "MSPIN");
        console.log(res, "Response of roundlist");
        // console.log(roundName, "Response of RoundName");
      })
      .catch((error) => console.log(error.response.data.message));
    // return false;
  };
  return (
    <div>
      <Navbar></Navbar>
      <img src={bgImage} alt="" className="background-image"/>
      <div className="round-box">Case - {Number(data1)+1}</div>
      <div className="case-study-text">
        <p>
         {casestudydata[data1].description}
        </p>
      </div>

      <Link to="/puzzlecase">
        <button
          className="roll icon-conatiner scoring-btn case-study-btn"
          onClick={getData}
        >
          Enter Score
        </button>
      </Link>
    </div>
  );
};

export default Casestudy;
