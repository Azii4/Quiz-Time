import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">
            <h1 className="logo">Quiz-Time</h1>
          </Link>
          <div className="linkWrapper">
            <Link to="/about" className="about">
              About
            </Link>
          </div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
