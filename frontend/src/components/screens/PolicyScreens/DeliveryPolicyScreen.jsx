import React from "react";
import { Container, Card } from "react-bootstrap";
const DeliveryPolicyScreen = () => {
  return (
    <Container fluid>
      <Card style={{ borderRadius: "30px", margin: "20px" }}>
        <Card.Header
          style={{ borderRadius: "30px 30px 0 0 ", padding: "20px" }}
        >
          Delivery Details
        </Card.Header>
        <Card.Body style={{ padding: "20px" }}>
          <Card.Title>Order Confirmation</Card.Title>
          <Card.Text>
            Place your order and let us handle the delivery. Expect your parcel
            tracking details within 48 hours of successful order receipt
            (excluding on the weekend or public holidays). Delivery will arrive
            at the provided physical address. Collections will require a valid
            copy of ID/Passport or Driver's License. Please ensure correct
            details are provided.
          </Card.Text>
          <Card.Title>Returns and Exchanges</Card.Title>
          <Card.Text>
            In the rare instance that a product arrives faulty / broken: Please
            kindly put the contents back in the original packaging and contact
            us immediately. We will sort out a replacement straight away.
            Product must be in original condition and in original packaging.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DeliveryPolicyScreen;
