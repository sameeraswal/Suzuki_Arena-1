import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./search";
import "./registration.scss";
import { useEffect, useState } from "react";
import response from "./RegistrationData.json";
function Registration() {
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
    <div>
      <div className="nav-center">
        <Navbar />
      </div>

      <div className="container">
        <img src={arena} alt="arena" className="arena-img" />

        <div className="form-container">
          <h1 className="reg-heading">Registration</h1>
          <form onSubmit={handleSubmit}>
            <button className="search-icon">
              <Search />
            </button>

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
            <div class="submit">
              <Link to="/login">
                <button className="control-button up third icon-conatiner">
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
