import React, { useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../actions/cartActions";
import Message from "../../Message";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useNavigate();
  const productId = id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history("/login?redirect=/shipping");
  };

  return (
    <Row style={{ margin: "20px" }}>
      <Col md={8}>
        <Card style={{ borderRadius: "30px", paddingBottom: "30px" }}>
          <Card.Header style={{ borderRadius: "30px 30px 0 0" }}>
            <h1>Shopping Cart</h1>
          </Card.Header>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/products">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroupItem key={item.product}>
                  <Row style={{ padding: "20px", margin: "10px" }}>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link
                        to={`/products/${item.product}`}
                        style={{ textDecoration: "none" }}
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2}>R{item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                        style={{ borderRadius: "30px" }}
                      >
                        {[...Array(item.qtyInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i
                          style={{ color: "darkred" }}
                          className="fas fa-trash"
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Card>
      </Col>

      <Col>
        <Card style={{ borderRadius: "30px" }}>
          <Card.Header style={{ borderRadius: "30px 30px 0 0" }}>
            <h4>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h4>
          </Card.Header>
          <h4 style={{ textAlign: "right", padding: "10px" }}>
            R
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </h4>
          <Button
            className="btn-success"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
            style={{ borderRadius: "0 0px 30px 30px" }}
          >
            Proceed to Checkout
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
