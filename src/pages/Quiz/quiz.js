import React from "react";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db, useAuth } from "../../firebase-config";
import "./quiz.css";
import { Button } from "react-bootstrap";
const Quiz = () => {
  const currentUser = useAuth();
  const [Quiz, setQuiz] = useState([]);
  const [User, setUser] = useState([]);
  // const [Count, setCount] = useState(0);
  const userCollectionRef = collection(db, "Quiz");
  const userCollectionRef2 = collection(db, "Users");
  const [correctAnswer, setcorrectAnswer] = useState("");
  const [givenAnswer, setgivenAnswer] = useState("");
  const [question, setquestion] = useState("");
  const [hide, sethide] = useState(false);
  const [choice1, setchoice1] = useState("");
  const [choice2, setchoice2] = useState("");
  const [choice3, setchoice3] = useState("");
  const [choice4, setchoice4] = useState("");
  const [role, setrole] = useState('');
  const [check, setcheck] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setQuiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef2);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setgivenAnswer(e.target.id);
    setcorrectAnswer(e.target.value);
  };

  const countSubmit = async () => {
    if (givenAnswer === correctAnswer) {
      User.map(async (user, id) => {
        if (user.Email === currentUser?.email) {
          console.log(user.id, user.Count);
          const userDoc = doc(db, "Users", user.id);
          const newfield = { Count: user.Count + 1 };
          await updateDoc(userDoc, newfield);
          console.log("user", user);
        }
      });
    }
  };
  const editQuest = async (id) => {
    const userDoc = doc(db, "Quiz", id);
    const newfield = { question: question };
    await updateDoc(userDoc, newfield);
  };
  const editChoice1 = async (id) => {
    const userDoc = doc(db, "Quiz", id);
    const newfield = { choice1: choice1 };
    await updateDoc(userDoc, newfield);
  };

  const editChoice2 = async (id) => {
    const userDoc = doc(db, "Quiz", id);
    const newfield = { choice2: choice2 };
    await updateDoc(userDoc, newfield);
  };

  const editChoice3 = async (id) => {
    const userDoc = doc(db, "Quiz", id);
    const newfield = { choice3: choice3 };
    await updateDoc(userDoc, newfield);
  };

  const editChoice4 = async (id) => {
    const userDoc = doc(db, "Quiz", id);
    const newfield = { choice4: choice4 };
    await updateDoc(userDoc, newfield);
  };
  useEffect(() => {
      User.map(async (user, id) => {
        if (user.Email === currentUser?.email) {
           setrole(user.Role);
        }
      });  
      if(role === ''){
        setcheck(true)
      }
      else{
        setcheck(false)
      }
  },[User, role, currentUser?.email]);
  
  
return (
    <div className="quiz">
      {Quiz.map((questchoi, id) => {
        return (
          <div key={id}>
             <h3 className="question">Question: {questchoi.question}</h3>
            <button className="choice"
              onClick={(e) => handleSubmit(e)}
              name={questchoi.name}
              type="radio"
              id={questchoi.choice1}
              value={questchoi.correctchoice}
            >
              {questchoi.choice1}
            </button>
            <div>
              {hide ? (
                <input
                  name="edit"
                  value={choice1}
                  onChange={(e) => setchoice1(e.target.value)}
                />
              ) : null}
              {hide ? (
                <Button
                  type="Button"
                  onClick={() => {
                    editChoice1(questchoi.id, questchoi.choice1);
                  }}
                >
                  Edit Choice1
                </Button>
              ) : null}
            </div>
              <br></br>
            <button className="choice"
              onClick={(e) => handleSubmit(e)}
              name={questchoi.name}
              type="radio"
              id={questchoi.choice2}
              value={questchoi.correctchoice}
            >
              {questchoi.choice2}{" "}
            </button>
            <div>
              {hide ? (
                <input
                  name="edit"
                  value={choice2}
                  onChange={(e) => setchoice2(e.target.value)}
                />
              ) : null}
              {hide ? (
                <Button
                  type="button"
                  onClick={() => {
                    editChoice2(questchoi.id, questchoi.choice2);
                  }}
                >
                  Edit Choice2
                </Button>
              ) : null}
            </div>
                <br></br>
            <button className="choice"
              onClick={(e) => handleSubmit(e)}
              name={questchoi.name}
              type="radio"
              id={questchoi.choice3}
              value={questchoi.correctchoice}
            >
              {questchoi.choice3}
            </button>
            <div>
              {hide ? (
                <input
                  name="edit"
                  value={choice3}
                  onChange={(e) => setchoice3(e.target.value)}
                />
              ) : null}
              {hide ? (
                <Button
                  type="button"
                  onClick={() => {
                    editChoice3(questchoi.id, questchoi.choice3);
                  }}
                >
                  Edit Choice3
                </Button>
              ) : null}
            </div>
                <br></br>
            <button className="choice"
              onClick={(e) => handleSubmit(e)}
              name={questchoi.name}
              type="radio"
              id={questchoi.choice4}
              value={questchoi.correctchoice}
            >
              {questchoi.choice4}{" "}
            </button>{" "}
            <div>
              {hide ? (
                <input
                  name="edit"
                  value={choice4}
                  onChange={(e) => setchoice4(e.target.value)}
                />
              ) : null}
              {hide ? (
                <Button
                  type="button"
                  onClick={() => {
                    editChoice4(questchoi.id, questchoi.choice4);
                  }}
                >
                  Edit Choice4
                </Button>
              ) : null}
            </div>
                <br></br>
            <div>
              {hide ? (
                <input
                  name="edit"
                  value={question}
                  onChange={(e) => setquestion(e.target.value)}
                />
              ) : null}
              {hide ? (
                <Button
                  type="button"
                  onClick={() => {
                    editQuest(questchoi.id, questchoi.question);
                  }}
                >
                  Edit Question
                </Button>
              ) : null}
            </div>
            <Button
              className="submitanswer"
              type="submit"
              onClick={(e, id) => countSubmit(e)}
            >
              Submit answer
            </Button>
          </div>
        );
      })} 
      {check?<Button className = "editquiz" onClick={() => sethide(!hide)}>Click to edit question</Button>: null}
    </div>
  );
};

export default Quiz;
