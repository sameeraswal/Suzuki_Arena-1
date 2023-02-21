function Navbar() {
  let Logo = require("./Suzuki-symbol1.jpg");

  return (
    <>
      <div className="nav__img">
        <img src={Logo} alt="Logo" width={400} height={80} className="nav_img" />
      </div>
    </>
  );
}

export default Navbar;
