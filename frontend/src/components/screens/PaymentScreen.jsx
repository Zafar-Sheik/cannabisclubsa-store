import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps";
import { savePaymentMethod } from "../../actions/cartActions";

const PaymentScreen = () => {
  const history = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    dispatch(savePaymentMethod(paymentMethod));
    history("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Card style={{ borderRadius: "30px" }}>
        <Card.Header style={{ borderRadius: "30px 30px 0 0" }}>
          <h2>Payment Method</h2>
        </Card.Header>
        <Card.Title>Select Method</Card.Title>
        <Form onSubmit={submitHandler}>
          <Form.Group style={{ padding: "20px" }}>
            <Form.Check
              type="radio"
              label="PayPal Or Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Form.Group>

          <Button type="submit" variant="success">
            Continue
          </Button>
        </Form>
      </Card>
    </FormContainer>
  );
};

export default PaymentScreen;
