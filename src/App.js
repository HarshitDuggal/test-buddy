import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import Home from "./pages/landing/home";
import Header from "./components/navbar/navbar";
import Base from "./pages/base/base";
import Quiz from "./pages/Quiz/quiz";
import Createquiz from "./pages/Quiz/createQuiz";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/base" component={Base}/>
          <Route path="/quiz" component={Quiz}/>
          <Route path="/createquiz" component={Createquiz}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
