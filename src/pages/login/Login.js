import { useState } from "react";
import { login, useAuth } from "../../firebase-config";
import { useHistory } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login .css";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const history = useHistory();
  const currentUser = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (login(Email, Password) === "created") {
        // console.log("hi",Email,Password);
        history.replace("/base");
      }
      // console.log(signup(Email,Password))
    } catch {
      alert("Error!");
    }
    setLoading(false);
  };

  return (
    <div className="content-login">
      <h2>LOGIN</h2>
      <Container fluid>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username:</Form.Label>
            {"                       "}
            <input
              name="Email"
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            {"                       "}
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button disabled={Loading || currentUser} type="submit">
            Login
          </Button>
        </Form>
      </Container>
      <h5>
        New User? <Link to="/register">Register Here</Link>
      </h5>
    </div>
  );
};

export default Login;