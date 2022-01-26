import React from "react";
import { db } from "../../firebase-config";
import {  addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import {  useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
const Createquiz = () => {
  // const [Quiz, setQuiz] = useState([]);
  const [Question, setQuestion] = useState("");
  const [Choice1, setChoice1] = useState("");
  const [Choice2, setChoice2] = useState("");
  const [Choice3, setChoice3] = useState("");
  const [Choice4, setChoice4] = useState("");
  const [name, setname] = useState("");
  const [correctChoice, setcorrectChoice] = useState("");
  const [Cid, setCid] = useState("");
  const [Loading, setLoading] = useState(false);
  const userCollectionRef = collection(db, "Quiz");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addDoc(userCollectionRef, { question: Question, choice1: Choice1,choice2: Choice2,choice3: Choice3,choice4: Choice4,correctchoice: correctChoice,cid: Cid,name: name });
    setLoading(false);
};

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setQuiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);
  return (
    <>
    <div className="createquiz">
      <Container fluid>
      <Form onSubmit={handleSubmit}>
        <Form.Group className = "mb-3" >
          <Form.Label>
            <b>Type Your questions</b>
          </Form.Label>
          {"                       "}
          <input
            name="question"
            type="question"
            value={Question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className = "mb-3">
          <Form.Label>
            <b>Choice1</b>
          </Form.Label>
          <input
            name="choice1"
            type="choice"
            value={Choice1}
            onChange={(e) => setChoice1(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className = "mb-3">
          <Form.Label>
            <b>Choice2</b>
          </Form.Label>
          <input
            name="choice2"
            type="choice"
            value={Choice2}
            onChange={(e) => setChoice2(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className = "mb-3">
          <Form.Label>
            <b>Choice3</b>
          </Form.Label>
          <input
            name="choice3"
            type="choice"
            value={Choice3}
            onChange={(e) => setChoice3(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className = "mb-3">
          <Form.Label>
            <b>Choice4</b>
          </Form.Label>
          <input
            name="choice4"
            type="choice"
            value={Choice4}
            onChange={(e) => setChoice4(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className = "mb-3">
          <Form.Label>
            <b>Correct choice</b>
          </Form.Label>
          <input
            name="correct choice"
            type="choice"
            value={correctChoice}
            onChange={(e) => setcorrectChoice(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className = "mb-3">
          <Form.Label>
            <b>Course id</b>
          </Form.Label>
          <input
            name="course id"
            type="id"
            value={Cid}
            onChange={(e) => setCid(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className = "mb-3">
          <Form.Label>
            <b>Name of quest(Name has to be unique)</b>
          </Form.Label>
          <input
            name="name"
            type="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </Form.Group>
        <Button disabled = {Loading} type = "submit" onClick={handleSubmit}>Publish Question</Button>
      </Form>
      </Container>
    </div>
    </>
  );
};

export default Createquiz;
