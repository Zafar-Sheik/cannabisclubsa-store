import React from "react";
import logo from "../../assets/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import { logout } from "../../actions/userActions";

import Router from "../../Router";
import SearchBar from "../SearchBar";
import { BrowserRouter } from "react-router-dom";

const Navigation = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="p-0"
        bg="dark"
        variant="dark"
      >
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Brand>
          <Image
            src={logo}
            alt="Logo"
            style={{
              width: "10rem",
              margin: "20px",
              boxShadow: "2px 2px 5px 5px goldenrod",
              borderRadius: "50%",
            }}
          />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link className="text-light" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="/About">
              About
            </Nav.Link>
            <Nav.Link className="text-light" href="/Products">
              Shop
            </Nav.Link>
            <Nav.Link className="text-light" href="/FAQ">
              FAQ
            </Nav.Link>
            <Nav.Link className="text-light" href="/Contact">
              Contact
            </Nav.Link>
            <Nav.Link className="text-light" href="/Cart">
              <i className="fa-solid fa-basket-shopping"></i> Cart
            </Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <Nav.Link className="text-dark" href="/Profile">
                  Profile
                </Nav.Link>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link className="text-light" href="/Login">
                <i className="fa-solid fa-user"></i> Login
              </Nav.Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenu">
                <Nav.Link className="text-dark" href="/admin/userlist">
                  Users
                </Nav.Link>
                <Nav.Link className="text-dark" href="/admin/productlist">
                  Products
                </Nav.Link>
                <Nav.Link className="text-dark" href="/admin/orderlist">
                  Orders
                </Nav.Link>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </Navbar>
      <Router />
    </>
  );
};

export default Navigation;
