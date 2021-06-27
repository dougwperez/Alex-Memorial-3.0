import React from "react";
import { FaTimes } from "react-icons/fa";
import { Animated } from "react-animated-css";
import logo from "../../images/Butterfly Icon-6.png";

const Why = ({ goHome }) => {
  console.log("why");
  return (
    <>
      <div className="modal">
        <button className="back-btn" onClick={() => goHome()}>
          <FaTimes />
        </button>
        <div className="bodyText">
          <div className="wrapper">
            <Animated
              animationIn="rotateIn"
              animationOut="fadeOut"
              isVisible={true}
              className="titleFade"
            >
              <div className="miniLogo">
                <img src={logo} alt="butterfly-logo" />
              </div>
            </Animated>

            <h2 className="textH2">
              Why?
              {/* <span className="nowrap">We Remember</span> */}
            </h2>
            <span className="nowrap">The Mission of Alex4Hope</span>
            <p className="justify">
              Mental health is in crisis and many of our kids suffer. Alex4Hope
              is about spreading the word and talking openly about the dangers
              of substance use, trauma as source for addiction, promoting
              community-based peer programs and provide up-to-date
              evidence-based addiction treatment resources.
            </p>
            <span className="nowrap">The Vision of Alex4Hope</span>
            <p className="justify">
              Restoring healthy communities that genuinely thrive for the
              wellbeing of each child in an environment that replaces
              drug-focused problem-fixing with healthy lifestyle options,
              age-appropriate rituals that foster self-esteem, empowerment and
              mental health through connection and dialogue. Envisioning a
              culture that treats addiction with science-based understanding,
              community support and compassion.
            </p>

            <span className="nowrap">
              Each single being deserves a life of freedom, not imprisonment
              through drugs.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
