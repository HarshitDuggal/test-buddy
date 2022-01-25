import Login from './pages/login/Login';
import Register from './pages/register/register';
import Home from './pages/landing/home';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (

    <Router>
      <div className="App">
          <Navbar/>
        <Switch>
          
          <Route path="/" exact component={Home}/>
          <Route path="/login"  component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>      
    
  );
}

export default App;