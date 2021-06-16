import React from "react";
import Logo from "../logos/Alex4HopeLogo-3.png";

const Header = () => {
  return (
    <>
      <h1 className="title">
        <img className="main-logo" src={Logo} />
        <br />
        <h2 id="tagline">In Loving Memory of Alex Movahedi</h2>
        <h2 id="dates">May 27th, 1994 - April 3rd, 2020</h2>
      </h1>
    </>
  );
};

export default Header;
