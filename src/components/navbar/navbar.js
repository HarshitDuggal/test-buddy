import React from "react";
import { Link } from "react-router-dom";
import { logOut, useAuth  } from "../../firebase-config";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";
import { Nav, Navbar, Button } from "react-bootstrap";
//import { getDocs , collection} from "firebase/firestore";
const Header = () => {
  const currentUser = useAuth();
  const history = useHistory();
  const [Loading, setLoading] = useState(false);
  const [check, setcheck] = useState(true);
  //const [Users, setUsers] = useState([]);
  //const [check2, setcheck2] = useState(false);
  //const [role, setrole] = useState('');
  //const userCollectionRef = collection(db, "Users");
useEffect(() => {
  if(currentUser?.email===undefined){
    setcheck(false)
  }
  else{
    setcheck(true)
  }
  
  // if(Users.Email===currentUser?.email){
  //   setrole(Users.role)
  // }
  // if(role===''){
  //   setcheck2(true)
  // }
  // else{
  //   setcheck2(false)
  // }
},[currentUser?.email]);

// useEffect(() => {
//   const getUsers = async () => {
//     const data = await getDocs(userCollectionRef);
//     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };
//   getUsers();
// });

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
                {check?<Link to="/createquiz" className="link">
                  Create Quiz
                </Link>: null}
              </Nav.Link>
              <Nav.Link>
                {check?<Link to="/quiz" className="link">
                  Quiz
                </Link>: null}
              </Nav.Link>
              <Nav.Link>
                {check?<Link to="/base" className="link">
                  Profile
                </Link>:null}
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