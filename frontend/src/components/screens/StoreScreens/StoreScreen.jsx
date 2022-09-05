import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { listProducts } from "../../../actions/productActions";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../../Product";
import Loader from "../../Loader";
import Paginate from "../../Paginate";
import Message from "../../Message";
import ProductCarousel from "../../ProductCarousel";

const StoreScreen = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const keyword = params.keyword;
  const pageNumber = params.pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {!keyword ? (
        <Card style={{ margin: "20px" }}>
          <ProductCarousel />
        </Card>
      ) : (
        <Link to="/products" className="btn btn-light">
          Go Back
        </Link>
      )}
      <Card style={{ margin: "40px", borderRadius: "30px" }}>
        <Card.Header style={{ borderRadius: "30px 30px 0 0" }}>
          <h1>Latest Products</h1>
        </Card.Header>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Card.Body>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Card.Body>
        )}
      </Card>
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
    </>
  );
};

export default StoreScreen;
