import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Linkcmp = () => {
  const linkRef = useRef(null);

  const handleClick = () => {
    linkRef.current.link.click();
  };
  return (
    <div ref={linkRef} onClick={handleClick}>
      <Link to="/afterflip"></Link>
    </div>
  );
};

export default Linkcmp;
