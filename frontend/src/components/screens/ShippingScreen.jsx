import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps";
import { saveShippingAddress } from "../../actions/cartActions";

const ShippingScreen = () => {
  const history = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <Card style={{ borderRadius: "30px", margin: "20px" }}>
        <Card.Header style={{ borderRadius: "30px 30px 0 0" }}>
          <h1>Shipping</h1>
        </Card.Header>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <h5>Address</h5>
            <Form.Control
              type="address"
              placeholder="Enter address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city">
            <h5>City</h5>
            <Form.Control
              type="city"
              placeholder="Enter city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode">
            <h5>Postal Code</h5>
            <Form.Control
              type="postalCode"
              placeholder="Enter postalCode"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="country">
            <h5>Country</h5>
            <Form.Control
              type="country"
              placeholder="Enter country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="success" style={{ marginTop: "30px" }}>
            Continue to payment
          </Button>
        </Form>
      </Card>
    </FormContainer>
  );
};

export default ShippingScreen;
