import { useState,useEffect } from "react";
import { collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getDocs,addDoc } from "firebase/firestore";
const Register = () => {
    const [Users, setUsers] = useState([]);
    const userCollectionRef = collection(db,"Users")
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(userCollectionRef);
          setUsers(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
        }
        getUsers();
          },[]);
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPass, setconfirmPass] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(userCollectionRef, {Email: Email,Password: Password})
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="Email">
                    <h3>Email:</h3>
                    <input name="email" type="email" value={Email} onChange={(e) => {setEmail(e.target.value)}}/> 
                </label>
                <label htmlFor="password">
                    <h3>Password:</h3>
                    <input name="password" type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/> 
                </label>
                <label htmlFor="confirm password">
                    <h3>Confirm Password:</h3>
                    <input name="confirm password" type="password" value={confirmPass} onChange={(e)=>{setconfirmPass(e.target.value)}}/> 
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
