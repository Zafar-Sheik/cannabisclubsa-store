import React, { useEffect } from "react";
import { Button, Row, Col, Image, Card, ListGroupItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import CheckoutSteps from "../CheckoutSteps";
import { createOrder } from "../../actions/orderActions";

const PlaceOrderScreen = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const addDecimalPlaces = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  //Calculate Prices
  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  cart.shippingPrice = cart.itemsPrice > 1000 ? 0 : 100; //Shipping Free if order is over R1000
  cart.taxPrice = addDecimalPlaces(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = addDecimalPlaces(
    Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)
  );

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />

      <Row>
        <Col md={8}>
          <Card style={{ margin: "20px", borderRadius: "30px" }}>
            <Card.Header style={{ borderRadius: "30px 30px 0 0" }}>
              <h2>Shipping</h2>
            </Card.Header>

            <Card.Body>
              <strong>Address: </strong>
              {cart.shippingAddress.address}, {cart.shippingAddress.city},
              {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
            </Card.Body>

            <Card.Header>
              <h2>Payment Method</h2>
            </Card.Header>
            <Card.Body>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </Card.Body>

            <Card.Header>
              <h2>Order Items</h2>
            </Card.Header>
            <Card.Body>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <Card.Body>
                  {cart.cartItems.map((item, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/products/${item.product}`}
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x R{item.price} = R{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </Card.Body>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ margin: "20px", borderRadius: "30px" }}>
            <Card.Header style={{ borderRadius: "30px 30px 0 0 " }}>
              <h2>Order Summary</h2>
            </Card.Header>

            <ListGroupItem>
              <Row>
                <Col>Items</Col>
                <Col>R{cart.itemsPrice}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Shipping</Col>
                <Col>R{cart.shippingPrice}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Tax</Col>
                <Col>R{cart.taxPrice}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Total</Col>
                <Col>R{cart.totalPrice}</Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              {error && <Message variant="danger">{error}</Message>}
            </ListGroupItem>

            <Button
              type="button"
              className="btn-success"
              disabled={cart.cartItems === 0}
              onClick={placeOrderHandler}
            >
              Place Order
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
