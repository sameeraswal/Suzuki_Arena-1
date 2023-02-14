function Navbar() {
  let Logo = require("./Suzuki-symbol.jpg");

  return (
    <>
      <div className="nav__img">
        <img src={Logo} alt="Logo" width={40} height={40} />
      </div>
      <div className="hr__line">
        <hr />
      </div>
    </>
  );
}

export default Navbar;
