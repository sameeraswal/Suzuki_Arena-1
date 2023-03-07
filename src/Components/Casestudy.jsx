import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Casestudy = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="round-box">VAS Case Study</div>
      <div className="case-study-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quisquam. Quos facilis beatae unde aspernatur, sapiente explicabo
          temporibus minima vitae, similique ut eveniet ea asperiores laudantium
          repellendus adipisci obcaecati sequi ipsam modi officiis? Aperiam
          earum assumenda quis quae quos aspernatur necessitatibus dolores
          reiciendis, maiores omnis cumque perspiciatis, deserunt dignissimos
          eveniet atque inventore sed debitis dicta excepturi mollitia
          praesentium commodi eum eius. Consequatur hic fugit, quos commodi
          mollitia, obcaecati dolore eaque deserunt ducimus tempore iure
          consectetur nesciunt, aliquid molestias! Placeat facilis odio,
          repudiandae voluptatibus accusantium reiciendis quasi iusto vel,
          aliquam ipsa nemo nesciunt laudantium dolores esse nulla maiores
          quibusdam sunt incidunt quas aperiam! Reprehenderit necessitatibus
          repellendus cumque. Minima officiis at eius aliquid non magnam, quae
          beatae deserunt, velit temporibus natus a vel cupiditate dicta dolorem
          iure illo omnis, quisquam atque rem blanditiis alias repellendus
          assumenda maiores. Repudiandae, libero. Voluptate ea in, et impedit
          praesentium sed? Dolorum dolores consectetur ut delectus, animi esse
          commodi reprehenderit ad dicta provident expedita temporibus. Autem,
          ex! Expedita, optio, sed, id corrupti reprehenderit ipsa quidem sint
          dolores autem perspiciatis asperiores voluptatibus praesentium quae
          magni in maiores earum facilis laudantium aliquid ex quia aperiam
          pariatur repellat distinctio! Maxime asperiores dolorum, recusandae
          praesentium repellat autem tenetur itaque corrupti aspernatur.
        </p>
      </div>

      <Link to="/puzzlequestion">
        <button className="third icon-conatiner scoring-btn case-study-btn">
          Enter Score
        </button>
      </Link>
    </div>
  );
};

export default Casestudy;
