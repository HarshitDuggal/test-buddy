import { useState } from "react";
import { collection } from "firebase/firestore";
import { db, signup, useAuth } from "../../firebase-config";
import { addDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import "./register.css";
const Register = () => {
  const history = useHistory();
  // const [Users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "Users");
  const currentUser = useAuth();
  const [Loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addDoc(userCollectionRef, {
      Email: Email,
      Count: 0,
      Role: "Student",
    });
    try {
      if (signup(Email, Password) === "created") {
        // console.log("hi",Email,Password);
       if(Password.length>=6 ){
        history.replace("/base");
       } 
       else{
         alert("Please enter a strong password")
       }
       
      }
      // console.log(signup(Email,Password))
    } catch {
      alert("Error!");
    }
    setLoading(false);
  };
  return (
    <div id="main">
      {/* <div>Currently logged in as: {currentUser?.email}</div> */}
      <h2>Register</h2>
      <Container fluid>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            {"                       "}
            <input
              name="email"
              type="email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            {"                       "}
            <input
              name="password"
              type="password"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button disabled={Loading || currentUser} type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
