import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
const Quiz = () => {
  const [Quiz, setQuiz] = useState([]);
  const [count, setcount] = useState(0);
  const userCollectionRef = collection(db, "Quiz");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setQuiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    // var ele = document.getElementsByName("{questionchoi.name}");
    //  let i = 0;         
    // for( i = 0; i < ele.length; i++) {
    //     if(ele[i].checked === questionchoi.correctChoice)
    //     setcount++;
    // }
  }
  return (
    <div>
      {Quiz.map((questchoi, id) => {
        return (
          <div key={id}>
             <h3>Question: {questchoi.question}</h3>
            <input name = {questchoi.name} type="radio" id={questchoi.choice1} /> {" "}
            <label htmlFor = {questchoi.choice1}>{questchoi.choice1}</label>
            <br></br>
            <input name = {questchoi.name} type="radio" id={questchoi.choice2} /> {" "}
            <label htmlFor = {questchoi.choice2}>{questchoi.choice2}</label>
            <br></br>
            <input name = {questchoi.name} type="radio" id={questchoi.choice3} /> {" "}
            <label htmlFor = {questchoi.choice3}>{questchoi.choice3}</label>
            <br></br>
            <input name = {questchoi.name} type="radio" id={questchoi.choice4} /> {" "}
            <label htmlFor = {questchoi.choice4}>{questchoi.choice4}</label>
            <br></br>
            <button onClick={handleClick}>Submit answer</button>
          </div>
        );
      })}
      <h2>{count}</h2>
    </div>
  );
};

export default Quiz;
