import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import { db, signup, useAuth } from "../../firebase-config";
import { getDocs, addDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [Users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "Users");
  const currentUser = useAuth();
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addDoc(userCollectionRef, { Email: Email, Role: 'Student' });
    try {
      if (signup(Email, Password) === "created") {
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
    <div id="main">
      <div>Currently logged in as: {currentUser?.email}</div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">
          <h3>Email:</h3>
          <input
            name="email"
            type="email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <h3>Password:</h3>
          <input
            name="password"
            type="password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type="submit">Register</button>
      </form>
      {/* disabled = {Loading || currentUser  } */}
    </div>
  );
};

export default Register;
