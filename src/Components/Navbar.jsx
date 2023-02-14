import React from "react";

function Navbar() {
  let Logo = require("./Suzuki-symbol.jpg");

  return (
    <>
      <div className="nav__img">
        <img src={Logo} alt="Logo" width={40} height={40} />
      </div>
      <div>
        <hr className="hr__line" />
      </div>
    </>
  );
}

export default Navbar;
