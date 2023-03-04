import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Timer from "./Timer";
// import WheelStand from './wheelstand.svg'
import marker from "./wheelmarker.png";
import bodyImg from "./3552-[Converted].png";
import wheelbackground from "./wheelbackground.png";
import './wheel.scss'

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
export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      {
        alert(selectedItem, this.props.items[selectedItem]);
      }
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }
  timeOutFun() {
    setTimeout(() => window.open("/flipcard", "_self"), 8000);
  }
  render() {
    const { selectedItem } = this.state;
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
            onClick={this.selectItem}
          >
            {items.map((item, index) => (
              <div
                className="wheel-item"
                key={index}
                style={{
                  "--item-nb": index,
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
