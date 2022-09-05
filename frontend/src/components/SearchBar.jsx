import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const history = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    if (keyword) {
      history(`/products/search/${keyword}`);
    } else {
      history("/");
    }
  };
  return (
    <Form
      className="d-flex"
      style={{ margin: "20px" }}
      onSubmit={submitHandler}
    >
      <Form.Control
        type="search"
        placeholder="Search Products"
        className="me-2"
        style={{ borderRadius: "30px" }}
        aria-label="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button
        type="submit"
        style={{ backgroundColor: "goldenrod", borderRadius: "30px" }}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
