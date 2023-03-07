import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Timer from "./Timer";
// import WheelStand from './wheelstand.svg'
import marker from "./wheelmarker.png";
import bodyImg from "./3552-[Converted].png";
import wheelbackground from "./wheelbackground.png";
import "./wheel.scss";
import { Link } from "react-router-dom";

// const [activeQuestion, setActiveQuestion] = useState(0);
// const { questions } = data;
// //id variable
// const { question, choices, video, id } = questions[activeQuestion];
// const { name, cID, src } = choices;

// const [selectop, setSelectOp] = useState("#fff");
// const onClickNext = () => {
//   //HTTP call

//   setActiveQuestion((id) => id + 1);
// };
let car;
export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      seltitle: false,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);

      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
      car = (this.props.items[selectedItem - 3].title).replace(/ /g,'').toLowerCase();
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 800);
    }
  }

  titleToggle() {
    setTimeout(() => this.setState({ seltitle: true }), 200);
  }
  timeOutFun() {
    console.log(car,`/${car}`)
    setTimeout(() => window.open(`/${car}`, "_self"), 18000);
  }

  render() {
    const { selectedItem } = this.state;
    const { seltitle } = this.state;
    const { items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";
    // const img1 = require('./wheel-pointer.png')
    return (
      <>
        <Navbar></Navbar>
        {/* {console.log(items[selectedItem].title)} */}

        {/* <div className="round-box">Wheel</div> */}
        <div className="wheel-container" onClick={this.timeOutFun}>
          <div className="wheel-background"></div>
          <img src={marker} alt="marker" className="wheel-marker" />
          <div className="body-img">
            <img src={bodyImg} alt="img" height={630} width={520} />
          </div>

          <div
            className={`wheel ${spinning}`}
            style={wheelVars}
            onClick={() => {
              this.selectItem();
              this.titleToggle();
              this.timeOutFun();
            }}
          >
            {items.map((item, i) => (
              <>
                <div
                  key={i}
                  className={`wheel-item ${item.class}`}
                  style={{
                    "--item-nb": i,
                  }}
                >
                  {item.title}
                </div>
              </>
            ))}
          </div>
          {/* <h1 className="car-name-from-wheel">{car}</h1> */}
        </div>
      </>
    );
  }
}
