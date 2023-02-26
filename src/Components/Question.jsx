import React, { useState } from "react";
import Navbar from "./Navbar";
import Timer from "./Timer";
import { data } from "./data";
import { Modal } from "react-responsive-modal";

const Question = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const { questions } = data;
  //id variable
  const { question, choices, video, id } = questions[activeQuestion];
  const { name, cID, src } = choices;

  const [selectop, setSelectOp] = useState("#fff");
  const onClickNext = () => {
    //HTTP call

    setActiveQuestion((id) => id + 1);
  };

  const correctHandler = () => {
    setSelectOp("#00FF00");
    //save option id in var
  };
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Navbar />
      <div className="round-box">Rounds</div>
      {/* {video && ( */}
      <div className="question-container">
        <Timer />

        {video && (
          <div className="question-video">
            {/* {console.log(v.video)} */}
            <iframe width="520" height="225" src={video}>
              .
            </iframe>
          </div>
        )}

        <div className="question-box">
          <div className="question-div ">
            <h2 key={id}>{question}</h2>
          </div>
          <div className="option-div">
            <ul>
              {choices.map((item) => (
                <>
                  {!item.src ? (
                    <li
                      //value = cid
                      //onClick={correctHandler}//function with parameter

                      className="selected-answer icon-conatiner hvr-grow"
                    >
                      {item.name}
                    </li>
                  ) : (
                    <li
                      //value = cid
                      //onClick={correctHandler}//function with parameter

                      className="selected-answer icon-conatiner hvr-grow option-img-div"
                    >
                      {item.name}
                      <img src={item.src} alt="car" height={150} width={150} />
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>

          <div>
            {id !== 4 ? (
              <button
                onClick={onClickNext}
                className="third question-btn icon-conatiner"
              >
                Next
              </button>
            ) : (
              <>
                <button onClick={onOpenModal}>Open modal</button>
                <Modal open={open} onClose={onCloseModal} center>
                  <h2>Simple centered modal</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                </Modal>
              </>
              /* <Link to="/dashboard">
                <button
                  onClick={onClickNext}
                  className="third question-btn icon-conatiner"
                >
                  Next
                </button>
              </Link> */
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
