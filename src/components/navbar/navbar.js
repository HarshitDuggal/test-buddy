import React from "react";
import { Link } from "react-router-dom";
import { logOut, useAuth } from "../../firebase-config";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";
import { Nav, Navbar, Button } from "react-bootstrap";
const Header = () => {
  const currentUser = useAuth();
  const history = useHistory();
  const [Loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logOut();
      if (currentUser.UserImpl === undefined) {
        history.push("/");
      } else {
        alert("!Something went wrong");
      }
    } catch (e) {
      console.log("Error!", e);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="nav">
        <Navbar
          bg="info"
          variant="dark"
          fixed="top"
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Brand>
            <Link to="/" className="link">
              <h2>Test Buddy</h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>
                <Link to="/login" className="link">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register" className="link">
                  Register
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/createquiz" className="link">
                  Create Quiz
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/quiz" className="link">
                  Quiz
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/base" className="link">
                  Profile
                </Link>
              </Nav.Link>
              <Button
                className="logoutBtn"
                disabled={Loading || !currentUser}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;