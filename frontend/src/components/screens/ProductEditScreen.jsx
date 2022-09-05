import React, { useState, useEffect } from "react"; //useEffect makes req to backend. useEffect runs as soon as component loads
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../FormContainer";

import {
  listProductDetails,
  updateProduct,
} from "../../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../../constants/productConstants";

const ProductEditScreen = () => {
  const { id } = useParams();
  const history = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history("/admin/productList");
    } else {
      if (!product.name || product._id !== id) {
        dispatch(listProductDetails(id));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [dispatch, history, id, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: id,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
  };
  return (
    <>
      <Link to="/admin/productList" className="btn btn-light my-3">
        Go Back
      </Link>

      <FormContainer>
        <Card style={{ borderRadius: "30px", margin: "20px" }}>
          <Card.Header style={{ borderRadius: "30px 30px 0 0" }}>
            <h1>Product Details</h1>
          </Card.Header>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name" style={{ marginTop: "20px" }}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="price" style={{ marginTop: "20px" }}>
                <Form.Label>Price (R)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price R"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="image" style={{ marginTop: "20px" }}>
                <Form.Label>Enter Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></Form.Control>

                <Form.Label style={{ marginTop: "20px" }}>
                  Choose File
                </Form.Label>
                <Form.Control
                  type="file"
                  id="image-file"
                  label="Choose File"
                  custom
                  onChange={uploadFileHandler}
                ></Form.Control>
                {uploading && <Loader />}
              </Form.Group>

              <Form.Group controlId="brand" style={{ marginTop: "20px" }}>
                <Form.Label>Select Brand</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group
                controlId="countInStock"
                style={{ marginTop: "20px" }}
              >
                <Form.Label>Quantity In Stock</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Count In Stock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="category" style={{ marginTop: "20px" }}>
                <Form.Label>Select Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="description" style={{ marginTop: "20px" }}>
                <Form.Label>Enter Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button
                type="submit"
                variant="success"
                style={{ marginTop: "20px" }}
              >
                Save
              </Button>
            </Form>
          )}
        </Card>
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
