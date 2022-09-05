import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

import "./ContactScreen.css";
const ContactScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={4}>
          <Form style={{ padding: "20px" }}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control
                type="name"
                style={{ borderRadius: "30px" }}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                style={{ borderRadius: "30px" }}
                placeholder="Enter a valid email address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={3}
                style={{ borderRadius: "30px" }}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button style={{ borderRadius: "30px" }} className="btn-success">
              Submit
            </Button>
          </Form>
        </Col>

        <Col style={{}}>
          <Card
            className="card-details text-center"
            style={{
              margin: "100px",
              padding: "25px",
              position: "fixed",
              background: "white",
              color: "black",
              border: "1px solid gray",
            }}
          >
            <Card.Title>Call Us</Card.Title>
            <Card.Text>General Inquiries 081 529 8647</Card.Text>
            <Card.Title>Location</Card.Title>
            <Card.Text>
              30 Lighthouse Rd Bluff <br />
              Durban, KZN 4052
            </Card.Text>
            <Card.Title>Business Hours</Card.Title>
            <Card.Text>
              Monday — Friday 9am – 5pm <br />
              Saturday — 10am – 3pm <br />
              Sunday — Closed
            </Card.Text>
          </Card>
        </Col>
      </Row>

      <Container
        fluid
        style={{ backgroundColor: "#218829f1", padding: "50px" }}
      >
        <h1 className="text-light m-3">Get in touch</h1>
        <h5 className="text-light m-3">
          Hey! We're looking forward to you joining our club!
        </h5>
        <p className="text-light m-3">
          Feel free to contact us with any questions. <br />
          Our enthusiasts are eager to help you on your Cannabis Club journey
        </p>
        <Card
          className="bg-transparent text-light"
          style={{ padding: "10px", border: "none" }}
        >
          <Card.Title>Call Us</Card.Title>
          <Card.Text>General Inquiries 081 529 8647</Card.Text>
          <Card.Title>Business Hours</Card.Title>
          <Card.Text>
            Mon — Fri 9am – 5pm <br />
            Saturday 10am - 3pm <br />
            Sunday Closed
          </Card.Text>
        </Card>
      </Container>
    </Container>
  );
};

export default ContactScreen;
