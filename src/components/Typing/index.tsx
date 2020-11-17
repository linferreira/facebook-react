import React from "react";

import Person from "../../assets/person1.jpg";

import "./styles.css";

const Typing = () => {
  return (
    <>
      <div className="typing active">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="image-board">
        <img src={Person} alt="Person" />
      </div>
    </>
  );
};

export default Typing;
