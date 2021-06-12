import React from "react";
import { FaTimes } from "react-icons/fa";

const KnowDrugs = ({ goHome }) => {
  console.log("You are powerful");
  return (
    <div className="modal">
      <button className="back-btn" onClick={() => goHome()}>
        <FaTimes />
      </button>
    </div>
  );
};

export default KnowDrugs;
