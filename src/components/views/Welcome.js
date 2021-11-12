import React from "react";
import { FaTimes } from "react-icons/fa";
import { Animated } from "react-animated-css";
import logo from "../../images/Butterfly Icon-6.png";
import mainPic from "../../images/photo-gallery/AlexBest25.png";
import secondPic from "../../images/photo-gallery/3FriendsMy50 (2).jpg";

const Welcome = ({ goHome }) => {
  console.log("Welcome");
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
            <h2 className="textH2">Welcome</h2>
            <img className="main-pic" src={mainPic} />
            <span className="nowrap">
              In loving memory of my son, Alex, who will never, ever be
              forgotten.{" "}
            </span>
            <br />
            <br />
            <span className="chocolateQuotes">
              “Your light shines bright, and it is the source of inspiration for
              this creative process. No child should ever have to live through
              the heartbreaking journey you had no control over. I will always
              bow down to your courage, big heart and
              never-giving-up-personality to the very end. You are my biggest
              hero.”{" "}
            </span>
            <h2 className="textH2Sub">Why</h2>
            <p className="justify">
              Why is problem-oriented and Alex4Hope wants to shed light and
              bring understanding about the root causes of suffering and
              addiction. But the primary focus of this website will be on the
              solution-oriented inquiries, the How’s and the What’s.
            </p>
            <p className="justify">
              Why did Alex use drugs? Why do teens in Marin County use drugs?
              Why do young adults use drugs? Why is there an addiction crisis in
              our country? Why is our culture obsessed with using substances
              (narcotics, stimulants, depressants, etc.) and satisfying our need
              for instant gratification or a quick fix to our problems? The
              bigger question may be: Why the need for an escape?
            </p>
            <br />
            <span className="chocolateQuotes">
              “Each single being deserves a life of freedom, not imprisonment
              through drugs.”{" "}
            </span>
            <br />
            <h2 className="textH2Sub">How</h2>
            <p className="justify">
              How can we move beyond the unhealthy conditioning our culture
              seems to be stuck in? How can we rewire the web of false beliefs?
              How can we remove the power of the messaging from Big Corporations
              that seek to profit from the cost of health risks? How can we move
              beyond these delusions? And how can we rise up against Stigma and
              Silence that are behind addiction and mental health? How can we
              move beyond the myth of “Normal” that causes suffering?
            </p>
            <br />
            <span className="chocolateQuotes">
              “It takes a village…” -African proverb
            </span>
            <br />
            <br />
            <h2 className="textH2Sub">What</h2>
            <p className="justify">
              What can each of us do to protect the young and vulnerable in our
              community? What have we lost but must regain?
            </p>
            <span className="chocolateQuotes">
              “When our kids struggle, feel lost, and seek substances to escape,
              we need to look deeper. Much deeper.”
            </span>
            <br />
            <br />
            {/* <span className="nowrap">We Will Never Forget.</span> */}
            <img className="second-pic" src={secondPic} />
            <h2 className="textH2Sub">Topics of Exploration</h2>
            <span className="chocolateQuotes">
              - Tearing down the walls of stigma: mental and emotional
              imbalances are a part of being human.
            </span>
            <br />
            <span className="whiteQuotes">
              -Asking the key question, why? Early trauma and its long-term
              effects.
            </span>
            <br />
            <span className="chocolateQuotes">
              “When our kids struggle, feel lost, and seek substances to escape,
              we need to look deeper. Much deeper.”
            </span>
            <br />
            <span className="whiteQuotes">
              Asking the key question, why? Early trauma and its long-term
              effects.{" "}
            </span>
            <br />
            <span className="chocolateQuotes">
              - Understanding brain development and why the undeveloped brain is
              vulnerable to substance use
            </span>
            <br />
            <span className="whiteQuotes">
              -Addiction redefined: Toss the “rock-bottom” and “tough love”
              concept
            </span>
            <br />
            <span className="chocolateQuotes">
              -Raising awareness of today’s risky drugs
            </span>
            <br />
            <span className="whiteQuotes">
              -Fentanyl-Alert: a killer drug invading our communities
            </span>
            <br />
            <span className="chocolateQuotes">
              -What teens who use drugs or substances need to know in order to
              stay safe, and where to get help
            </span>
            <br />
            <span className="whiteQuotes">
              -Finding creative solutions to addictive behaviors and the
              normalization of modern-day attachments. How and What?
            </span>
            <br />
            <span className="chocolateQuotes">
              -Raising awareness of today’s risky drugs
            </span>
            <br />
            <span className="whiteQuotes">
              -Impact of digital media/consumerism on emotional and social
              development
            </span>
            <br />
            <span className="chocolateQuotes">
              -Teens, our teachers: exploring multi-generational collaboration
            </span>
            <br />
            <span className="whiteQuotes">
              - Supporting teens who are finding their voice, power, and :
              Helping teens be seen, heard, belong, and engaged, while becoming
              part of something bigger than their emotions
            </span>
            <br />
            <span className="chocolateQuotes">
              -Raising awareness of today’s risky drugs
            </span>
            <br />
            <span className="whiteQuotes">
              -Peer activism and advocacy: getting involved to become empowered
            </span>
            <br />
            <span className="chocolateQuotes">
              -Learning about ourselves and from each other through ancient and
              modern-day communal rites and rituals
            </span>
            <br />
            <span className="whiteQuotes">
              -Movement and art-informed self-expression: become empowered and
              live authentically while going through the ups and downs of life
            </span>
            <br />
            <br />
            <br />
            <span className="chocolateQuotes">
              "To all those beautiful and sensitive young people, who don’t know
              yet that they are powerful beyond measure: this world needs you
              more than ever!”
            </span>
            <br />
            <br />
            <p className="textH2Sub">
              Ultimately, this site is about joining the explorative path of
              transformation that is necessary for all of us in order to survive
              and thrive: healing from the inside while healing our planet..
            </p>
            <br />
            <span className="chocolateQuotes">
              "“Each child, teen, and young adult matters!””
            </span>
            <br />
            <br />
            {/* <span className="nowrap">
              Why am I here?
            </span> */}
            <h2 className="textH2">
              Why Am I Here?
              {/* <span className="nowrap">We Remember</span> */}
            </h2>
            <p className="justify">
              When Alex passed from a tragic fentanyl poisoning on April 3,
              2020, my life turned upside down. Losing my son through such a
              horrific tragedy shook me to the core.
            </p>
            <p className="justify">
              I knew early on that there was no way through this painful grief
              swamp without creating something meaningful that relates to my
              son’s personal struggles while helping others.
            </p>
            <p className="justify">
              Alex4Hope is a memorial website that serves as a source for
              inspiration, information, and hope. Together, with other
              like-minded beings and groups, Alex4Hope seeks to invite
              reflection, awareness, dialogue, and conversation instead of
              silence and stigma. Looking into the deeper source of suffering
              that leads to substance use and offering collective, innovative
              expert resources that support the path of healing. ALEX4HOPE
              explores healthier and safer habits, which allow for full, whole,
              and meaningful relationships and living.
            </p>
            <p className="justify">
              Alex4Hope inquiries about a paradigm shift from a drug and
              medication focused culture to one that restores its natural, wise,
              and healthy bio-psycho-social-spiritual balance.
            </p>
            <p className="justify">
              This site is about keeping Alex’s vast spirit fully alive, while
              bringing hope, courage, and an abundance of ideas and resources.
              It is meant to be dynamic, non-dogmatic, open-minded, inquisitive,
              sustained and explorative, and will share wisdom traditions,
              stories from people who lived through mental health challenges, as
              well as up-to-date science findings that support mental and
              physical wellbeing. I will also share my personal, lived grief
              journey that led me onto this path of searching for answers.
            </p>
            <p className="justify">
              In that way, Alex4Hope serves as a bridge between ever-evolving
              solutions, ideas, and possibilities from my personal research, and
              all of those fellow humans, teens, young adults, parents, and
              anyone else who’s seeking answers, inspiration, and/or hope.
            </p>
            <p className="justify">
              While there is no quick fix to the problems our culture struggles
              with, I believe in endless possibilities sourced in magnificent
              creations, ideas, and policies set in action by change shifters,
              movers, and amazing people in our communities, who collaborate and
              are committed to protect our young and vulnerable. I will
              introduce many of them right here on this site over time. I am
              grateful to every single one of them.
            </p>
            <p className="justify">
              What can each of us do to protect the young and vulnerable in our
              community? What have we lost but must regain?
            </p>
            <p className="justify">
              Consider me a giant sponge: I want to learn, expand and saturate
              myself with information of hope, and I want to share it with you.
              All for the greater good.
            </p>
            <p className="justify">
              My hope is that I will inspire, encourage, bring hope, empower and
              to help engage youth.
            </p>

            <span className="chocolateQuotes">
              “Your voice is powerful beyond measure! Your story is someone
              else’s medicine!”
            </span>

            <h2 className="textH2">
              Our Mision and Vision
              {/* <span className="nowrap">We Remember</span> */}
            </h2>
            <span className="nowrap">The Mission of Alex4Hope</span>
            <p className="justify">
              Alex4Hope aims to increase mental health awareness and break the
              stigma surrounding mental health issues while redefining “normal,”
              finding healthy alternatives to drug fixation, and empowering
              people towards healthy peer habits, exploring expressive arts,
              introducing youth activism and leadership.
            </p>
            <p className="justify">
              Alex4Hope wants to bring understanding to the root causes of
              addiction, and the importance of a healthy village structure for
              healthy kids and healthy communities.
            </p>
            <span className="nowrap">The Vision of Alex4Hope</span>
            <p className="justify">
              Alex4Hope envisions a future in which our kids grow up in a world
              that reclaims its communal wisdom, innate healing powers, and
              healthy social culture that no longer focuses on quick fixes from
              substances or drugs, but rather on healthy rituals, activism,
              talking circles, and expressive forms of art, all of which promote
              lives lived fully, wholly, and authentically. Alex4Hope envisions
              a world that is beyond stigma while including and respecting
              diversity.
            </p>
            <p className="justify">
              Alex4Hope joins the movement with other inspiring, like-minded
              groups, formed locally and around the world, who strive to build
              moral courage to transform ourselves and become a united,
              ecological, global community, capable of healing our broken
              culture and world.
            </p>
            <br />
            <span className="chocolateQuotes">
              “Adolescence is not a problem to be solved or a hardship to be
              endured, but rather a wellspring of courage and creativity.”
            </span>
            <br />
            <span className="nowrap">-Lawrence J. Cohen</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
