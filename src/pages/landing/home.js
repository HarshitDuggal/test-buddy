import "./home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Home = () => {
  return (
    <>
      <h1 className="title">Courses</h1>
      <div className="content">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/120/100/100" />
          <Card.Body>
            <Card.Title>Dsa Quiz</Card.Title>
            <Card.Text>These are the quiz related to the topic</Card.Text>
            <Button variant="primary">Quiz</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/130/100/100" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>These are the quiz related to the topic</Card.Text>
            <Button variant="primary">Quiz</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/140/100/100" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>These are the quiz related to the topic</Card.Text>
            <Button variant="primary">Quiz</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/180/100/100" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>These are the quiz related to the topic</Card.Text>
            <Button variant="primary">Quiz</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Home;