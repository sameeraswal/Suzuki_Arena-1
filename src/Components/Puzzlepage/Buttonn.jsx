import React from 'react'

const Buttonn = (props) => {
  const [color, setColors] = React.useState("");
  const [active, setActive] = React.useState(false);
  const handleClickButton = (name) => {
    setActive(true);
    setColors(name);
    if (active === true) {
      setActive(false);
      setColors("button");
    }
  };



  return (
    <button
    className={`yes-btn icon-conatiner ${color}`}
    onClick={() => handleClickButton(props.name)}
  >
    {props.name}
  </button>
  )
}

export default Buttonn
