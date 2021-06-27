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
            <span className="nowrap">Our Fondest Memories.</span>
            <p className="justify">
              Alex had a big and genuine heart, he loved his friends, nature
              hikes on the mountain and beach, photography, fishing, basketball,
              and good food. He was tri-lingual, enjoyed playing pool and long
              walks with his dog. His favorite place was Maui. Alex suffered
              from anxiety and began to self medicate which led to addiction and
              his tragic, unexpected death from accidental Fentanyl poisoning.
              He had planned a trip to Maui and Europe this year after
              completing his detox regime. He wanted nothing more than have his
              life back and his shining light will always be with those he
              touched.
            </p>
            <span className="nowrap">He Left Us Too Soon.</span>
            <p className="justify">
              His smile, big hugs, his surprises and letters, the way he enjoyed
              exploring new places when traveling, finding the best pastries
              when visiting Germany, his excitement when preparing trips, his
              love for dogs, his enthusiasm about NBA basketball, and his
              passion for boggie boarding, fishing and his attention to detail
              for the equipment. Alex's tall 6'4 body, his beautiful eyes, his
              vast human-being-ness.
            </p>
            <span className="nowrap">We Will Never Forget.</span>
            <p className="justify">
              Alex' s presence, his charisma, his big and generous heart, his
              vast insightfulness and striving to allow for everyone to be seen
              for who they are, beyond stigma and judgement. His bear hugs, all
              of them.
            </p>
            <span className="nowrap">Alex Will Always Be In Our Hears.</span>
            <p className="justify">
              Alex loved life. He believed in equality, fairness and seeing
              through stigma and outer shell. He supported diversity and
              believed in each human being having an important message. He was a
              loyal friend, loved dogs, barbecues and fishing, and found refuge
              in nature, his healing place. He always had something good to say
              about all his friends, giving everyone a second chance. Alex
              inspired people and taught them life skills. As his oldest friend
              says, "Everybody needs to have a friend like Alex".
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

export default Why;
