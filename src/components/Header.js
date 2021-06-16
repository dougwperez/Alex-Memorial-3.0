import React from "react";
import Logo from "../logos/Alex4HopeLogo-3.png";
import { Animated } from "react-animated-css";

const Header = () => {
  return (
    <>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={true}
        className="titleFade"
      >
        <h1 className="title">
          <img className="main-logo" src={Logo} />
          <br />

          <h2 class="animate__animated animate__bounce" id="tagline">
            In Loving Memory of <span>Alex Movahedi</span>
          </h2>

          <h2 id="dates">May 27th, 1994 - April 3rd, 2020</h2>
        </h1>
      </Animated>
    </>
  );
};

export default Header;
