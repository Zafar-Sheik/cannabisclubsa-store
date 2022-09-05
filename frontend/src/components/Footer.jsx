import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="text-center"
        style={{
          paddingTop: "50px",
          paddingBottom: "25px",
          borderTop: "1px solid gray",
          backgroundColor: "lightgray",
          color: "black",
        }}
      >
        <Row>
          <Col>
            30 Lighthouse Rd Bluff
            <br />
            Durban, KZN 4052
          </Col>
          <Col>
            <a style={{ textDecoration: "none" }} href="/Privacy">
              Privacy Policy
            </a>{" "}
            <br />
            <a style={{ textDecoration: "none" }} href="/Details">
              Finer Details
            </a>{" "}
            <br />
            <a style={{ textDecoration: "none" }} href="/DeliveryPolicy">
              Delivery
            </a>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <a href="https://www.facebook.com/people/Cannalife-Medical-Dispensary/100082928272332/">
              <i className="fa-brands fa-facebook m-3 fa-2x"></i>
            </a>

            <a href="https://www.instagram.com/cannalife19/?igshid=YmMyMTA2M2Y%3D">
              <i className="fa-brands fa-instagram m-3 fa-2x"></i>
            </a>

            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@cannabisclubsa.com">
              <i className="fa-solid fa-at m-3 fa-2x"></i>
            </a>
          </Col>
        </Row>
        <br />
        <Row>
          <Col
            className="text-center"
            style={{ paddingTop: "10px", color: "gray" }}
          >
            Copyright <i className="fa-solid fa-copyright"></i> 2022 Cannabis
            ClubSA | Powered by Cannabis Club South Africa
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
