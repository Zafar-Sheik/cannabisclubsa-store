import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const Product = ({ product }) => {
  return (
    <Card style={{ padding: "30px", margin: "10px", borderRadius: "30px" }}>
      <Link to={`/products/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          style={{ borderRadius: "30px" }}
        />
      </Link>

      <Card.Body>
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">R{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
