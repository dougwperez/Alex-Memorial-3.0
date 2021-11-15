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
            <span className="nowrap">
              Behavioral Health and Recovery Services Access Lines 24/7
            </span>
            <p className="justify">
              1-888-818-1115 for information on substance use treatment services
            </p>
            <span className="nowrap">
              Behavioral Health Prevention and Outreach in Marin:
            </span>
            <p className="justify">
              Marin County Behavioral Health and Recovery Services Prevention
              and Outreach Team is pleased to announce the launch of its new
              website with a focus on “Building Resilience, Connections, and
              Hope. At the heart of the website is the belief that together, we
              can build a healthy, safe, and equitable community. The site
              features: The Prevention and Early Intervention Program, Suicide
              Prevention, Resources and Support, Community Outreach and
              Engagement, Events and Trainings. https://bhrsprevention.org/
            </p>
            <span className="nowrap"> Peer-Run Warmline</span>
            <p className="justify">
              Confidential safe place to talk about anything, including anxiety,
              depression, fear, financial struggles and substance use issues.
              415-459-6330 (English: 9am – midnight) 415-457-4026 (Español: 1pm
              – 6pm)
            </p>
            <br />
            <span className="nowrap">
              National Suicide Prevention Lifeline: (800) 273-8255
            </span>
            <br />
            <br />
            <span className="nowrap">
              Linea Nacional de Prevención del Suicidio: (888) 628-9454
            </span>
            <br />
            <br />
            <span className="whiteQuotes">
              SAMHSA’s National Helpline: 1-800-662-HELP (4357) free,
              confidential, 24/7, 365-day-a-year treatment referral and
              information service (in English and Spanish) for individuals and
              families facing mental and/or substance use disorders.
            </span>
            <br />
            <br />
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
