import React, { useState,useRef } from "react";
import useEffect from "react";


let x = [0,0,0,0,0,0];
const Buttonp = (props) => {
  console.log(props);
  const [color, setColors] = React.useState("");
  const [active, setActive] = React.useState(false);
  const [color1, setColors1] = React.useState("");
  const [active1, setActive1] = React.useState(false);

  // const result = useRef([0,0,0,0,0,0]);

  const handleClickButton = (name) => {
    setActive(true);
    setColors(name);
    x[props.index] = 1;
    
    // result.current[props.index] = 1
    if (active1 === true) {
      setActive1(false);
      setColors1("button");
    }
    if (active === true) {
      setActive(false);
      setColors("button");
    }
    console.log(x);
  };

  const handleClickButton1 = (name) => {
    setActive1(true);
    setColors1(name);
    x[props.index] = 0;
    if (active === true) {
      setActive(false);
      setColors("button");
    }
    if (active1 === true) {
      setActive1(false);
      setColors1("button");
    }
    console.log(x);
  };

  return (
    <>
      <button
        className={`yes-btn icon-conatiner ${color}`}
        onClick={() => {
          handleClickButton(props.name1);
          
        }}
      >
        {props.name1}
      </button>
      <button
        className={`yes-btn icon-conatiner ${color1}`}
        onClick={() => {
          handleClickButton1(props.name2);
         
        }}
      >
        {props.name2}
      </button>
    </>
  );
};

export default Buttonp;
