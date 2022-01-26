import { useState } from "react";
import { login,useAuth } from "../../firebase-config";
import { useHistory } from "react-router-dom";
import { Button,Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
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
        <div>
            <h2>LOGIN</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <b>Username:</b>
                    <input name = "Email" type="email" value={Email} onChange= {(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                     <b>Password:</b>
                    <input type="password" value={Password} onChange= {(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button disablled = {Loading || currentUser}type="submit" >Submit</Button>
            </Form>
            <h4>New User? <Link to='/register'>Register Here</Link></h4>
        </div>
    );
}

export default Login;
