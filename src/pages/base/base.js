import React from "react";
import {  useAuth, db } from "../../firebase-config";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import "./base.css";
import { Button } from "react-bootstrap";
const Base = () => {
  // const history = useHistory();
  const currentUser = useAuth();
  const userCollectionRef = collection(db, "Users");
  const [Users, setUsers] = useState([]);
  // const [Loading, setLoading] = useState(false);
  // const [marks, setmarks] = useState("");
  const [userDetails, setuserDetails] = useState({});
  // async function handleLogout() {
  // const handleLogout = async () => {
  //   setLoading(true);
  //   try {
  //     await logOut();
  //     if (currentUser.UserImpl === undefined) {
  //       history.push("/");
  //     } else {
  //       alert("!Something went wrong");
  //     }
  //   } catch (e) {
  //     console.log("Error!", e);
  //   }
  //   setLoading(false);
  // };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });
  // const quizmarks = () => {
  //   Users.map(async (user, id) => {
  //     if (user.Email === currentUser?.email) {
  //       setmarks(user.Count);
  //     }
  //   });
  // };
  const ProfileDetails = () => {
    Users.map(async (user, id) => {
      if (user.Email === currentUser?.email) {
        setuserDetails(user);
      }
    });
  };

  return (
    <div className="base content-login">
      {/* <Button disabled={Loading || !currentUser} onClick={handleLogout}>
        Logout
      </Button> */}
      {/* <h3>
        Marks in quiz are <Button onClick={quizmarks}>Click for marks</Button>{" "}
        <br></br>
        {marks}{" "}
      </h3>
      <br></br> */}

      <h1 class="profile">Profile </h1>
      <small class="alertText">
        Please press fetch if data is not displayed
      </small>

      <br></br>
      <h5 className="email">Email : {userDetails.Email}</h5>
      <h5>Role : {userDetails.Role}</h5>
      <h5 className="totalScore">Total Score : {userDetails.Count}</h5>
      <Button onClick={ProfileDetails}>Fetch Details</Button>
    </div>
  );
};

export default Base;