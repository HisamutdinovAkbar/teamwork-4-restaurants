import React from "react";
import "./Section1.css";
function Section1() {
  return (
    <section>
      <div className="container">
        {" "}
        <div className="left">
          <h2 className="title">Your Food court at home</h2>
          <div className="buttons">
            <button className="delivery">
              <p className="infoof">Delivery Order in</p>
            </button>
            <button className="delivery">
              <p className="infoof">Takeout Grab and go</p>
            </button>
          </div>
          <div className="divcha">
            <div className="information">
              <img src={time} alt="" />
              <p className="info">
                delivery in all paris in less than 30 minutes
              </p>
            </div>
            <div className="information">
              <img src={delivery} alt="" />
              <p className="info">
                delivery in all paris in less than 30 minutes
              </p>
            </div>
            <div className="information">
              <img src={paris} alt="" />
              <p className="info">
                delivery in all paris in less than 30 minutes
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={salad} alt="" />
          <img className="rukkola" src={rukkola} alt="" />
          <img className="arrow" src={arrow} alt="" />
          <p className="fresh">Fresh salad, Il Pasifigio</p>
        </div>
      </div>
    </section>
  );
}

export default Section1;
