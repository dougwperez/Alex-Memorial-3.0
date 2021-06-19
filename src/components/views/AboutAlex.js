import React from "react";
import { FaTimes } from "react-icons/fa";
import { Animated } from "react-animated-css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutAlex = ({ goHome }) => {
  console.log("ABOUT");
  return (
    <>
      <div className="modal">
        <button className="back-btn" onClick={() => goHome()}>
          <FaTimes />
        </button>
        <Container fluid>
          <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutAlex;
