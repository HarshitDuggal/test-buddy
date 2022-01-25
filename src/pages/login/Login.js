import { useState } from "react";
import { login,useAuth } from "../../firebase-config";
import { useHistory } from "react-router-dom";
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">
                    <h3>Username:</h3>
                    <input name = "Email" type="email" value={Email} onChange= {(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor="Password">
                    <h3>Password:</h3>
                    <input type="password" value={Password} onChange= {(e) => setPassword(e.target.value)} />
                </label>
                <button disablled = {Loading || currentUser}type="submit" >Submit</button>
            </form>
            <h4>New User? Register Here</h4>
        </div>
    );
}

export default Login;
