import React from "react";
import { FaTimes } from "react-icons/fa";
import { Animated } from "react-animated-css";

const AboutAlex = ({ goHome }) => {
  console.log("ABOUT");
  return (
    <>
      <div className="modal">
        <button className="back-btn" onClick={() => goHome()}>
          <FaTimes />
        </button>
      </div>
    </>
  );
};

export default AboutAlex;
