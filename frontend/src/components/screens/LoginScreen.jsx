import React, { useState, useEffect } from "react"; //useEffect makes req to backend. useEffect runs as soon as component loads
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { login } from "../../actions/userActions";
import FormContainer from "../FormContainer";

const LoginScreen = () => {
  const location = useLocation();
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    //DISPATCH LOGIN

    dispatch(login(email, password));
  };
  return (
    <FormContainer>
      <Card style={{ margin: "20px", borderRadius: "30px" }}>
        <Card.Header style={{ borderRadius: "30px 30px 0 0" }}>
          <h1 style={{ color: "green" }}>Sign in</h1>
        </Card.Header>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="success" style={{ marginTop: "5px" }}>
            Sign In
          </Button>
        </Form>
        <Card.Body>
          New Customer?
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
            style={{ textDecoration: "none", color: "darkgreen" }}
          >
            Register
          </Link>
        </Card.Body>
      </Card>
    </FormContainer>
  );
};

export default LoginScreen;
