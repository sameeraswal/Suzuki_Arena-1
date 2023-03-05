import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Timer from "./Timer";
// import WheelStand from './wheelstand.svg'
import marker from "./wheelmarker.png";
import bodyImg from "./3552-[Converted].png";
import wheelbackground from "./wheelbackground.png";
import "./wheel.scss";

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
      car = this.props.items[selectedItem - 4].title;
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 800);
    }
  }

  titleToggle() {
    setTimeout(() => this.setState({ seltitle: true }), 200);
  }
  timeOutFun() {
    setTimeout(() => window.open("/flipcard", "_self"), 18000);
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
         <h1>{car}</h1> 
        {console.log(seltitle)}
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
              // this.timeOutFun();
            }}
          >
            <div
              className="wheel-item wheel-color"
              // key={index}
              style={{
                "--item-nb": 1,
              }}
            >
              {items[0].title}
            </div>
            <div
              className="wheel-item wheel-color1"
              // key={index}
              style={{
                "--item-nb": 2,
              }}
            >
              {items[1].title}
            </div>
            <div
              className="wheel-item wheel-color2"
              // key={index}
              style={{
                "--item-nb": 3,
              }}
            >
              {items[2].title}
            </div>
            <div
              className="wheel-item wheel-color3"
              // key={index}
              style={{
                "--item-nb": 4,
              }}
            >
              {items[3].title}
            </div>
            <div
              className="wheel-item wheel-color4"
              // key={index}
              style={{
                "--item-nb": 5,
              }}
            >
              {items[4].title}
            </div>
            <div
              className="wheel-item wheel-color5"
              // key={index}
              style={{
                "--item-nb": 6,
              }}
            >
              {items[5].title}
            </div>
            <div
              className="wheel-item wheel-color6"
              // key={index}
              style={{
                "--item-nb": 7,
              }}
            >
              {items[6].title}
            </div>
            <div
              className="wheel-item wheel-color"
              // key={index}
              style={{
                "--item-nb": 8,
              }}
            >
              {items[7].title}
            </div>
            <div
              className="wheel-item wheel-color1"
              // key={index}
              style={{
                "--item-nb": 9,
              }}
            >
              {items[8].title}
            </div>
            <div
              className="wheel-item wheel-color2"
              // key={index}
              style={{
                "--item-nb": 10,
              }}
            >
              {items[9].title}
            </div>
            <div
              className="wheel-item wheel-color3"
              // key={index}
              style={{
                "--item-nb": 11,
              }}
            >
              {items[10].title}
            </div>
            <div
              className="wheel-item wheel-color4"
              // key={index}
              style={{
                "--item-nb": 12,
              }}
            >
              {items[11].title}
            </div>
          </div>
        </div>
      </>
    );
  }
}
