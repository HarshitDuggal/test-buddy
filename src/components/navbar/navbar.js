import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Nav, Navbar,Button } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <div className="nav">
        <Navbar bg="info" variant="dark" fixed="top" expand='lg' collapseOnSelect>
          <Navbar.Brand>
            <Link to="/" className="link">
              <h2>Test Buddy</h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
          <Nav>
            <Nav.Link>
              <Link to="/login" className="link">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register" className="link">Register</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/createquiz" className="link">Create Quiz</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/quiz" className="link">Quiz</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/base" className="link">Profile</Link>
            </Nav.Link>
            <Button>Loout</Button>
          </Nav>
          </Navbar.Collapse>
         
        </Navbar>
      </div>
      
    </>
  );
};

export default Header;
