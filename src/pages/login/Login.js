import { useState } from "react";

const Login = () => {
    
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
        console.log(Password);
        if(Email === "harshit@gmail.com" && Password === "Sam"){
            alert("Logged in")
        }
        else{
            alert("!WRONG CREDANITALS")
        }
    } 
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
                <button type="submit" >Submit</button>
            </form>
            <h4>New User? Register Here</h4>
        </div>
    );
}

export default Login;
