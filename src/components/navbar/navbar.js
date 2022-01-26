import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <div className="nav">
        <Navbar bg="info" variant="dark" fixed="top">
          <Navbar.Brand>
            <Link to="/">
              <h2>Test Buddy</h2>
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/createquiz">Create Quiz</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/quiz">Quiz</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      
    </>
  );
};

export default Header;
