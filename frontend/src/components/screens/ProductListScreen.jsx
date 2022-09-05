import React, { useEffect } from "react"; //useEffect makes req to backend. useEffect runs as soon as component loads
import { Link, useNavigate, useParams } from "react-router-dom";
import { Table, Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Paginate from "../../components/Paginate";

import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../../actions/productActions";

import { PRODUCT_CREATE_RESET } from "../../constants/productConstants";

const ProductListScreen = () => {
  const params = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  const pageNumber = params.pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history("/login");
    }

    if (successCreate) {
      history(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  const deleteHandler = (id) => {
    if (window.confirm(`Are you sure you want to delete product?`)) {
      dispatch(deleteProduct(id));
    }
  };
  return (
    <Card style={{ margin: "20px", borderRadius: "30px" }}>
      <Card.Header
        style={{
          borderRadius: "30px 30px 0 0",
        }}
      >
        <Row>
          <Col>
            <h1>Products</h1>
          </Col>
          <Col>
            <Button
              variant="success"
              onClick={createProductHandler}
              style={{ borderRadius: "30px " }}
            >
              <i className="fas fa-plus"></i>
              Add Product
            </Button>
          </Col>
        </Row>
      </Card.Header>

      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>R{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <Link
                      to={`/admin/product/${product._id}/edit`}
                      style={{ marginLeft: "10px", marginRight: "10px" }}
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                      style={{
                        marginLeft: "10px",
                        marginRight: "10px",
                        borderRadius: "50%",
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </Card>
  );
};

export default ProductListScreen;
