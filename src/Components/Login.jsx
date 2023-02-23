import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./search";
import response from "./LoginData.json";
const Login = () => {
  const arena = require("./maruti-suzuki-arena.webp");
  const [state, setState] = useState({}); //edit

  //add
  useEffect(() => {
    response.map((resp) =>
      setState((state) => ({ ...state, [resp.fieldName]: resp.value }))
    );
    return () => {};
  }, []);

  const handleChange = (e, field) => {
    setState({
      ...state,
      [field]: e.target.value, //edit
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <>
      <div className="nav-center">
        <Navbar></Navbar>
      </div>

      <div className="container">
        <img src={arena} alt="" className="arena-img" />

        <div className="form-container">
          <h1 className="reg-heading">Login</h1>
          <form onSubmit={handleSubmit}>
            {response.map((resp) => (
              <div class="form" key={resp.id}>
                <input
                  type={resp.type}
                  class="form__input"
                  onChange={(e) => {
                    handleChange(e, resp.fieldName);
                  }}
                  value={state[resp.fieldName]}
                  placeholder=" "
                />
                <label class="form__label">{resp.fieldName}</label>
              </div>
            ))}
            <Link to="/dashboard">
              <button class="control-button up third icon-conatiner">
                Join Now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
