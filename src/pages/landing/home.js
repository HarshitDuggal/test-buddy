import "./home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useAuth } from "../../firebase-config";
  
const Home = () => {
const currentUser = useAuth();
const [check, setcheck] = useState(true);

useEffect(() => {
    if(currentUser?.email===undefined){
      setcheck(false)
    }
    else{
      setcheck(true)
    }
},[currentUser?.email]);
    return (
    <>
      {check?<h1 className="title">Courses</h1>:<h1 className="title">Welcome to Test Buddy please <Link to='./login' className="link">Log In </Link> to continue </h1>}
      {check?<div className="content">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/120/100/100" />
          <Card.Body>
            <Card.Title>Dsa Quiz</Card.Title>
            <Card.Text>These are the quiz related to the topic</Card.Text>
            <Button variant="primary"><Link to ="./quiz" className="link">Quiz</Link></Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/130/100/100" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>These are the quiz related to the topic</Card.Text>
            <Button variant="primary"><Link to ="./quiz" className="link">Quiz</Link></Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/140/100/100" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>These are the quiz related to the topic</Card.Text>
            <Button variant="primary"><Link to ="./quiz" className="link">Quiz</Link></Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/180/100/100" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>These are the quiz related to the topic</Card.Text>
            <Button variant="primary" ><Link to="./quiz" className="link">Quiz</Link></Button>
          </Card.Body>
        </Card>
      </div>:null}
    </>
  );
};

export default Home;