import React from "react";
import useEffect from "react";

const Buttonp = (props) => {
  console.log(props.name);
  const [color, setColors] = React.useState("");
  const [active, setActive] = React.useState(false);
  const [color1, setColors1] = React.useState("");
  const [active1, setActive1] = React.useState(false);

  const handleClickButton = (name) => {
    setActive(true);
    setColors(name);
    if (active1 === true) {
      setActive1(false);
      setColors1("button");
    }
    if (active === true) {
      setActive(false);
      setColors("button");
    }
  };

  const handleClickButton1 = (name) => {
    setActive1(true);
    setColors1(name);
   
    if (active === true) {
      setActive(false);
      setColors("button");
    }
    if (active1 === true) {
      setActive1(false);
      setColors1("button");
    }
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
