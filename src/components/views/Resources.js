import React from "react";
import { FaTimes } from "react-icons/fa";

const Resources = ({ goHome }) => {
  console.log("resources");
  return (
    <div className="modal">
      <button className="back-btn" onClick={() => goHome()}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Resources;
