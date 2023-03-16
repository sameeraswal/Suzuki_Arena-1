import React, { useState,useRef } from "react";
import useEffect from "react";



const Buttonn = ({name1, name2, index ,handleClick, handleClick1}) => {
  console.log('name1', name1);
  console.log('name2', name2);
  console.log('index', index);
  console.log('handle', handleClick);
  const [color, setColors] = React.useState("");
  const [active, setActive] = React.useState(false);
  const [color1, setColors1] = React.useState("");
  const [active1, setActive1] = React.useState(false);

  // const result = useRef([0,0,0,0,0,0]);

  const handleClickButton = (name) => {
    setActive(true);
    setColors(name);
    // x[props.index] = 1;
    
    // result.current[props.index] = 1
    if (active1 === true) {
      setActive1(false);
      setColors1("button");
    }
    if (active === true) {
      setActive(false);
      setColors("button");
    }
    // console.log(x);
  };

  const handleClickButton1 = (name) => {
    setActive1(true);
    setColors1(name);
    // x[props.index] = 0;
    if (active === true) {
      setActive(false);
      setColors("button");
    }
    if (active1 === true) {
      setActive1(false);
      setColors1("button");
    }
    // console.log(x);
  };
  
  return (
    <>
      <button
        className={`yes-btn icon-conatiner ${color}`}
        onClick={() => {
          handleClickButton(name1);
          handleClick(index)
        
        }}
      >
        {name1}
      </button>
      <button
        className={`yes-btn icon-conatiner ${color1}`}
        onClick={() => {
          handleClickButton1(name2);
          handleClick1(index)
        }}
      >
        {name2}
      </button>
    </>
  );
};

export default Buttonn;
