import Navbar from "./Navbar";
const Afterflip = ({ title }) => {
  const img=require('./wagon_spec.webp')
  return (
    <>
      <Navbar></Navbar>
      <div className="round-box">Flip a Card</div>
      <div className="outer-div">
        <div className="actual-card">
          <div className="border-div">
            <div className="text-div">
              <p className="text-margin">What is the {title} of Wagonr</p>
              <div className="margin-div">
                <input type="text" className="width-input" />
                <input type="submit" className="card-btn-style" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-img">
          <img src={img} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Afterflip;
