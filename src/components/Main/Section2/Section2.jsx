import React from "react";
import "./Section2.css";
import sec from "/public/sec.jpg";
import sec1 from "/public/sec1.jpg";
import sec2 from "/public/sec2.jpg";
import sec3 from "/public/sec3.jpg";
import ces from "/public/sec4.png";
import ces1 from "/public/sec5.png";
import ces2 from "/public/sec6.png";
import ces3 from "/public/sec7.png";

function Section2() {
  return (
    <section>
      <div className="container">
        <div className="res">
          <div className="rest">
            <h1>Restaurants</h1>
            <button className="res-btn">show all</button>
          </div>
          <div className="boxs">
            <div className="box">
              <img className="sec-img" src={sec2} alt="" />
              <img className="ces-img" src={ces} alt="" />
            </div>
            <div className="box">
              <img className="sec-img" src={sec1} alt="" />
              <img className="ces-img" src={ces1} alt="" />
            </div>
            <div className="box">
              <img className="sec-img" src={sec} alt="" />
              <img className="ces-img" src={ces2} alt="" />
            </div>
            <div className="box">
              <img className="sec-img" src={sec3} alt="" />
              <img className="ces-img" src={ces3} alt="" />
            </div>
          </div>
        </div>
        <div className="res2">
          <div className="res2-left">
            <h1>Your nearest restaurants</h1>
            <p>
              Each kitchen works with its own delivery area to deliver food to
              you as soon as possible
            </p>
          </div>
          <div className="res2-right">
            <input placeholder="📌 Enter delivery address" type="email" />
            <button className="res2-btn">send</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
