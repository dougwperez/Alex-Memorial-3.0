import React from "react";
import { FaTimes } from "react-icons/fa";

const Why = ({ goHome }) => {
  console.log("why");
  return (
    <div className="modal">
      <button className="back-btn" onClick={() => goHome()}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Why;
