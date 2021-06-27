import React from "react";
import { FaTimes } from "react-icons/fa";
import { Animated } from "react-animated-css";
import logo from "../../images/Butterfly Icon-6.png";

const Resources = ({ goHome }) => {
  console.log("resources");
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
              Resources
              {/* <span className="nowrap">We Remember</span> */}
            </h2>
            <span className="nowrap">Suicide Hotlines</span>
            <p className="justify">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <span className="nowrap">Drug Overdose Emergencies</span>
            <p className="justify">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <span className="nowrap">Domestic Violence</span>
            <p className="justify">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <span className="nowrap">Other Helpful Resources</span>
            <p className="justify">
              <ul>
                <li>
                  <a target="_blank" href="https://www.samhsa.gov/">
                    Substance Abuse and Mental Health Services Administration
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.learnaboutsam.org">
                    Smart Approaches to Marijuana
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.drugfree.org">
                    Partnership to End Addiction
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.cdc.gov">
                    Partnership to end Addiction
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.cdph.ca.gov">
                    California Department of Public Health
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.teens.drugabuse.gov">
                    National Institute on Drug Abuse
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://poppot.org/">
                    Parents Opposed to Pot
                  </a>
                </li>
              </ul>
            </p>
            <span className="nowrap">
              "You can tell you are at the right place by the way it feels."
            </span>
            <br />
            <span className="nowrap">- Alex Movahedi </span>
            {/* <span className="nowrap">Körper dehnte.</span>
        <p className="justify">
          “YOU CAN TELL WHEN YOU ARE AT THE RIGHT PLACE BY THE WAY IT
          FEELS.” — ALEX MOVAHEDI
          <span className="nowrap">Körper dehnte.</span>
        </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
