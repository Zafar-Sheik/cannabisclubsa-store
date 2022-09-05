import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Card,
  Button,
  Image,
  Form,
  FormControl,
} from "react-bootstrap";
import {
  listProductDetails,
  createProductReview,
} from "../../../actions/productActions";
import Loader from "../../Loader";
import Message from "../../Message";
import Rating from "../../Rating";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../constants/productConstants";

const ProductScreen = () => {
  const { id } = useParams();
  const history = useNavigate();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const { success: successProductReview, error: errorProductReview } =
    productCreateReview;

  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted!");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(id));
  }, [dispatch, id, successProductReview]);

  const addToCartHandler = () => {
    history(`/cart/${id}?qty=${qty}`); //question mark represents a query string.
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(id, { rating, comment }));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row style={{ margin: "20px" }}>
            <Col>
              <Image
                className="img-thumbnail"
                src={product.image}
                style={{ borderRadius: "30px", padding: "50px" }}
              />
            </Col>
            <Col>
              <Card style={{ borderRadius: "30px" }}>
                <Card.Header style={{ borderRadius: "30px 30px 0 0" }}>
                  {product.name}
                </Card.Header>
                <Card.Body>
                  <Card.Text>Rating: {product.rating}</Card.Text>
                  <Card.Text>Price: R{product.price}</Card.Text>
                  <Card.Text>Description: {product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ borderRadius: "30px", padding: "20px" }}>
                <Card.Title> Price:</Card.Title>
                <Card.Text> R{product.price}</Card.Text>

                <Card.Title>Status: </Card.Title>
                {product.qtyInStock > 0 ? (
                  <Card.Text style={{ color: "green", fontWeight: "bold" }}>
                    IN STOCK
                  </Card.Text>
                ) : (
                  <Card.Text style={{ color: "red", fontWeight: "bold" }}>
                    OUT OF STOCK
                  </Card.Text>
                )}

                {product.qtyInStock > 0 && (
                  <>
                    <Card.Title>Select Quantity:</Card.Title>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      style={{ borderRadius: "30px" }}
                    >
                      {[...Array(product.qtyInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </>
                )}
                <Button
                  className="btn-success"
                  onClick={addToCartHandler}
                  disabled={product.qtyInStock === 0}
                  style={{ marginTop: "10px", borderRadius: "30px" }}
                >
                  Add To Cart
                </Button>
              </Card>
            </Col>
          </Row>

          <Card style={{ borderRadius: "30px", margin: "30px" }}>
            <Card.Header style={{ borderRadius: "30px 30px 0 0 " }}>
              <h2>Reviews</h2>
            </Card.Header>

            {product.reviews.length === 0 && <Message>No Reviews</Message>}
            <Card>
              {product.reviews.map((r) => (
                <Card.Body key={r._id}>
                  <strong>{r.name}</strong>
                  <Rating value={r.rating} />
                  <p>{r.createdAt.substring(0, 10)}</p>
                  <p>{r.comment}</p>
                </Card.Body>
              ))}
            </Card>

            <Card.Header>
              <h2>Write a Customer Review</h2>
            </Card.Header>
            {errorProductReview && (
              <Message variant="danger">{errorProductReview}</Message>
            )}
            {userInfo ? (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="rating">
                  <h5>Rating</h5>
                  <Form.Control
                    as="select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Great</option>
                    <option value="5">5 - Dope</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="comment">
                  <h5>Comment</h5>
                  <FormControl
                    as="textarea"
                    row="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></FormControl>
                </Form.Group>
                <Button
                  type="submit"
                  className="btn-success"
                  style={{ marginTop: "10px" }}
                >
                  Submit
                </Button>
              </Form>
            ) : (
              <Message>
                Please <Link to="/login">sign in</Link> to write a review
              </Message>
            )}
          </Card>
        </>
      )}
    </>
  );
};

export default ProductScreen;
