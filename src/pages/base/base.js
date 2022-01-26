import React from "react";
import { logOut, useAuth } from "../../firebase-config";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './base.css';
const Base = () => {
  const history = useHistory();
  const currentUser = useAuth();
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
    <div className="base">
      <button disabled={Loading || !currentUser} onClick={handleLogout}>
        Logout
      </button>           
    </div>
  );
};

export default Base;
